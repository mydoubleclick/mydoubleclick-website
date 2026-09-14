"use client";

import { useEffect, useRef } from "react";

/**
 * "Double Click / Computing" lockup. "Computing" is letter-spaced to span the
 * exact rendered width of "Double Click" — this depends on the loaded webfont,
 * so it's measured at runtime rather than hardcoded.
 */
export default function BrandName({ inverse = false }: { inverse?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const top = el.querySelector("b");
      const sub = el.querySelector("span");
      if (!top || !sub) return;
      sub.style.letterSpacing = "0";
      sub.style.marginRight = "0";
      const target = top.getBoundingClientRect().width;
      const natural = sub.getBoundingClientRect().width;
      const chars = (sub.textContent || "").trim().length;
      if (!target || !natural || chars < 2) return;
      const ls = (target - natural) / chars;
      sub.style.letterSpacing = `${ls.toFixed(3)}px`;
      // cancel the trailing letter's spacing so the right edges align
      sub.style.marginRight = `${(-ls).toFixed(3)}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <span className="brand-name" ref={ref}>
      <b style={inverse ? { color: "var(--paper)" } : undefined}>Double Click</b>
      <span style={inverse ? { color: "var(--ink-4)" } : undefined}>Computing</span>
    </span>
  );
}
