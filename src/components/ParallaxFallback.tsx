"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reproduces the CSS scroll-driven arch parallax for browsers without
 * animation-timeline support (older Safari/Firefox). Skipped entirely under
 * reduced motion. Re-binds on client-side navigation.
 */
export default function ParallaxFallback() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const frames = Array.from(document.querySelectorAll<HTMLElement>(".arch,.arch-sm,.tile-thumb"))
      .map((f) => ({
        f,
        d: f.querySelector<HTMLElement>(":scope > .drift"),
        g: f.querySelector<HTMLElement>(":scope > .gfx"),
      }))
      .filter((o) => o.d || o.g);
    if (!frames.length) return;
    frames.forEach((o) => {
      if (o.d) o.d.style.inset = "-24% 0";
    });

    let pending = false;
    const tick = () => {
      pending = false;
      const vh = window.innerHeight;
      for (const o of frames) {
        const r = o.f.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        let p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1..1
        p = Math.max(-1, Math.min(1, p));
        if (o.d) o.d.style.transform = `translateY(${(p * 12).toFixed(2)}%) scale(1.05)`;
        if (o.g) o.g.style.transform = `translateY(${(-p * 9).toFixed(2)}%) scale(${(1 - p * 0.06).toFixed(4)})`;
      }
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(tick);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
