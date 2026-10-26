import { useEffect, useState, type MouseEvent } from "react";

export const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function scrollToPricing(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const REVEAL_SELECTOR =
  ".eye,.stitle,.ssub,.stack-item,.ai-card,.cp,.ui,.pc,.how-step,.testi,.faq-item,.finalcta .w > *";

/** Staggered fade-up of sections as they scroll into view, plus the hero entrance animation. */
export function useRevealOnScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const de = document.documentElement;
    de.classList.add("anim");
    document.querySelectorAll<HTMLElement>(".hero .w > *").forEach((el, i) => {
      el.style.setProperty("--d", `${i * 110}ms`);
    });

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("in");
          io.unobserve(el);
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("rv", "in", "zoom");
              el.style.removeProperty("--d");
            }, 1400),
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      if (el.closest(".hero") || !el.parentElement) return;
      const siblings = Array.from(el.parentElement.children).filter((c) =>
        c.matches(REVEAL_SELECTOR),
      );
      el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
      el.classList.add("rv");
      if (el.classList.contains("pc")) el.classList.add("zoom");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      de.classList.remove("anim");
    };
  }, []);
}
