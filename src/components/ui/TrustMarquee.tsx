"use client";

const BADGES = [
  { icon: "🛡️", label: "BPCA Certified Operator" },
  { icon: "🏅", label: "ISO 9001 Procedures" },
  { icon: "🔬", label: "Own Formulation Lab" },
  { icon: "📄", label: "Licensed & Insured" },
  { icon: "👨‍👩‍👧", label: "Family & Pet Safe" },
  { icon: "🚗", label: "Chattogram Wide Coverage" },
  { icon: "⏱️", label: "Same-Day Response" },
  { icon: "🔁", label: "Free Re-Treatment" },
];

/**
 * Infinite horizontal ticker. The list is duplicated once and translated -50%,
 * so the loop is seamless. Duplicates are hidden from assistive tech.
 */
export default function TrustMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-alt py-5">
      <p className="sr-only">Credentials and service commitments</p>

      <div
        className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]"
        style={{ willChange: "transform" }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-3" aria-hidden={copy === 1}>
            {BADGES.map((badge) => (
              <li
                key={`${copy}-${badge.label}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-[14px] font-semibold text-foreground shadow-soft"
              >
                <span aria-hidden="true">{badge.icon}</span>
                {badge.label}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Edge fades so items dissolve instead of getting cut off */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-alt to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface-alt to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}