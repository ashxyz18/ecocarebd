"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-following aurora behind the hero. Two large radial gradients track the
 * cursor with a heavy easing lag, plus a CSS grid and drifting orbs. Costs
 * nothing when the pointer never moves, and is disabled for touch devices and
 * for users who prefer reduced motion.
 */
export default function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) return;

    const layerA = root.querySelector<HTMLElement>("[data-aurora='a']");
    const layerB = root.querySelector<HTMLElement>("[data-aurora='b']");

    let targetX = 0.5;
    let targetY = 0.35;
    let currentX = 0.5;
    let currentY = 0.35;
    let active = false;

    const render = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      const px = currentX * 100;
      const py = currentY * 100;

      if (layerA) {
        layerA.style.transform = `translate3d(${px * 0.28 - 14}%, ${py * 0.24 - 12}%, 0) scale(1.08)`;
      }
      if (layerB) {
        layerB.style.transform = `translate3d(${px * -0.2 + 12}%, ${py * -0.16 + 10}%, 0) scale(1.12)`;
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer.matches) return;
      const rect = root.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;

      if (!active) {
        active = true;
        rafRef.current = requestAnimationFrame(render);
      }
    };

    const onPointerLeave = () => {
      targetX = 0.5;
      targetY = 0.35;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Drifting orbs */}
      <div className="absolute -left-32 -top-28 size-[480px] rounded-full bg-primary/15 blur-3xl animate-float" />
      <div className="absolute -right-24 top-24 size-[420px] rounded-full bg-secondary/15 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />

      {/* Pointer-following layers */}
      <div
        data-aurora="a"
        className="absolute -inset-32 will-change-transform"
        style={{
          background:
            "radial-gradient(46% 46% at 42% 38%, color-mix(in oklab, var(--color-primary) 26%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        data-aurora="b"
        className="absolute -inset-32 will-change-transform"
        style={{
          background:
            "radial-gradient(40% 40% at 58% 62%, color-mix(in oklab, var(--color-secondary) 24%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(219 226 238 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(219 226 238 / 0.7) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "radial-gradient(ellipse 78% 62% at 50% 36%, black, transparent)",
        }}
      />

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}