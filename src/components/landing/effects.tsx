import { useEffect, useRef } from "react";

import { prefersReducedMotion } from "./hooks";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const de = document.documentElement;
    const onScroll = () => {
      const max = de.scrollHeight - de.clientHeight;
      if (bar.current) bar.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={bar} className="sp-prog" />;
}

const GLYPHS = "{}<>/\\;=[]()#$%&*+~^|⌘⬡◈✦⎔∞∑Ω⌬⏻⚙010101".split("");

const RAIN_LAYERS = [
  { className: "rb", fontSize: 16, density: 0.2, speed: 3 },
  { className: "rf", fontSize: 24, density: 0.1, speed: 2 },
];

type Column = { i: number; y: number; sp: number; blue: boolean };

/** Fixed page background: parallax glow orbs plus two layers of falling code glyphs. */
export function BackgroundFx() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fx = root.current;
    if (!fx) return;
    const reduce = prefersReducedMotion();

    const orbs = Array.from(fx.querySelectorAll<HTMLElement>(".o")).map((el, i) => ({
      el,
      ph: i * 1.7,
      a: 80 + i * 35,
      k: 1 + i * 0.25,
    }));
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const y = window.scrollY;
      orbs.forEach((o) => {
        const tx = Math.cos((y / 1000) * o.k + o.ph) * o.a;
        const ty = Math.sin((y / 800) * o.k + o.ph) * o.a - y * 0.015 * o.k;
        o.el.style.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,0)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    parallax();

    if (reduce) return () => window.removeEventListener("scroll", onScroll);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const layers = Array.from(fx.querySelectorAll("canvas")).flatMap((c, idx) => {
      const ctx = c.getContext("2d");
      const cfg = RAIN_LAYERS[idx];
      return ctx && cfg ? [{ c, ctx, ...cfg, cols: [] as Column[], w: 0, h: 0 }] : [];
    });
    type Layer = (typeof layers)[number];

    const size = (l: Layer) => {
      l.w = window.innerWidth;
      l.h = window.innerHeight;
      l.c.width = Math.round(l.w * dpr);
      l.c.height = Math.round(l.h * dpr);
      l.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      l.cols = [];
      for (let i = 0; i < Math.ceil(l.w / l.fontSize); i++) {
        if (Math.random() < l.density) {
          l.cols.push({
            i,
            y: Math.floor((Math.random() * l.h) / l.fontSize),
            sp: l.speed + Math.floor(Math.random() * 2),
            blue: Math.random() < 0.25,
          });
        }
      }
    };

    let frame = 0;
    const draw = (l: Layer) => {
      const x = l.ctx;
      x.globalCompositeOperation = "destination-out";
      x.fillStyle = "rgba(0,0,0,.07)";
      x.fillRect(0, 0, l.w, l.h);
      x.globalCompositeOperation = "source-over";
      x.font = `${l.fontSize}px monospace`;
      x.textAlign = "center";
      l.cols.forEach((col) => {
        if (frame % col.sp) return;
        x.fillStyle = col.blue ? "#7aa7ff" : "#ff6b6b";
        x.fillText(
          GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "",
          col.i * l.fontSize + l.fontSize / 2,
          col.y * l.fontSize,
        );
        col.y++;
        if (col.y * l.fontSize > l.h && Math.random() > 0.975) {
          col.y = 0;
          col.sp = l.speed + Math.floor(Math.random() * 2);
        }
      });
    };

    layers.forEach(size);
    let resizeTimer: number | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => layers.forEach(size), 150);
    };
    window.addEventListener("resize", onResize);

    let last = 0;
    let raf = 0;
    const loop = (ts: number) => {
      if (ts - last > 100) {
        last = ts;
        frame++;
        layers.forEach(draw);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} className="bgfx" aria-hidden="true">
      <div className="o o1" />
      <div className="o o2" />
      <div className="o o3" />
      <div className="o o4" />
      {RAIN_LAYERS.map((l) => (
        <canvas key={l.className} className={l.className} />
      ))}
    </div>
  );
}
