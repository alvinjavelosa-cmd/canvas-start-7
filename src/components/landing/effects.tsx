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

const WORDS = ["AHA", "INNOVATIONS", "WORKFLOW", "AUTOMATION", "AI-STUDIO", "FUNNELS"];

const randomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)] ?? "AHA";

// speed is in px/second; the back layer is smaller and slower for depth.
const RAIN_LAYERS = [
  { className: "rb", fontSize: 16, density: 0.2, speed: 30 },
  { className: "rf", fontSize: 24, density: 0.1, speed: 60 },
];

/** One word sliding down the screen. `y` is the top of its first letter. */
type Column = { x: number; y: number; speed: number; blue: boolean; word: string };

/** Fixed page background: parallax glow orbs plus two layers of falling brand words. */
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
      return ctx && cfg
        ? [{ c, ctx, ...cfg, lineHeight: cfg.fontSize * 1.15, cols: [] as Column[], w: 0, h: 0 }]
        : [];
    });
    type Layer = (typeof layers)[number];

    // Give a column a new word and speed. Fresh columns start anywhere on screen;
    // recycled ones start above the top edge with a random delay so they don't sync up.
    const respawn = (l: Layer, col: Column, anywhere: boolean) => {
      col.word = randomWord();
      col.speed = l.speed * (0.7 + Math.random() * 0.6);
      col.blue = Math.random() < 0.25;
      const height = col.word.length * l.lineHeight;
      col.y = anywhere
        ? Math.random() * (l.h + height) - height
        : -height - Math.random() * l.h * 0.6;
    };

    const size = (l: Layer) => {
      l.w = window.innerWidth;
      l.h = window.innerHeight;
      l.c.width = Math.round(l.w * dpr);
      l.c.height = Math.round(l.h * dpr);
      l.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      l.cols = [];
      for (let i = 0; i < Math.ceil(l.w / l.fontSize); i++) {
        if (Math.random() < l.density) {
          const col = { x: i * l.fontSize + l.fontSize / 2, y: 0, speed: 0, blue: false, word: "" };
          respawn(l, col, true);
          l.cols.push(col);
        }
      }
    };

    const draw = (l: Layer, dt: number) => {
      const x = l.ctx;
      x.clearRect(0, 0, l.w, l.h);
      x.font = `${l.fontSize}px monospace`;
      x.textAlign = "center";
      x.textBaseline = "top";
      l.cols.forEach((col) => {
        col.y += col.speed * dt;
        if (col.y > l.h) respawn(l, col, false);
        const n = col.word.length;
        for (let k = 0; k < n; k++) {
          const ly = col.y + k * l.lineHeight;
          if (ly < -l.lineHeight || ly > l.h) continue;
          // Fade toward the top (the trail); the leading bottom letter is brightest.
          const head = k === n - 1;
          x.globalAlpha = 0.25 + 0.75 * ((k + 1) / n);
          x.fillStyle = head
            ? col.blue
              ? "#d4e2ff"
              : "#ffd2d2"
            : col.blue
              ? "#7aa7ff"
              : "#ff6b6b";
          x.fillText(col.word[k] ?? "", col.x, ly);
        }
      });
      x.globalAlpha = 1;
    };

    layers.forEach(size);
    let resizeTimer: number | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => layers.forEach(size), 150);
    };
    window.addEventListener("resize", onResize);

    let last = performance.now();
    let raf = 0;
    const loop = (ts: number) => {
      // Cap the step so a backgrounded tab doesn't jump on return.
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      layers.forEach((l) => draw(l, dt));
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
