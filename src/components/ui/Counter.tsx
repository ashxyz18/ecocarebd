"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when scrolled into view.
 *
 * The first render always emits the FINAL value so the server HTML matches the
 * first client render exactly (no hydration mismatch, and crawlers see the real
 * number). The count-up only starts once the element actually enters the
 * viewport, at which point it drops to zero and rolls up.
 */
export default function Counter({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => renderValue(value, 1));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
          setDisplay(renderValue(value, 1));
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast start, gentle settle
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay(renderValue(value, eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {display}
    </span>
  );
}

/** Formats `template` with `progress` (0–1) scaling any numbers it contains. */
function renderValue(template: string, progress: number): string {
  return template.replace(/\d[\d,]*\.?\d*/g, (match) => {
    const target = Number(match.replace(/,/g, ""));
    if (Number.isNaN(target)) return match;
    const scaled = target * progress;
    // Preserve the original decimal precision.
    const decimals = match.includes(".") ? match.split(".")[1].length : 0;
    const formatted = decimals > 0 ? scaled.toFixed(decimals) : Math.round(scaled).toString();
    return decimals > 0 ? formatted : addThousands(formatted);
  });
}

function addThousands(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}