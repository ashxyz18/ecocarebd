import Link from "next/link";
import { MapPin, ArrowRight, Navigation, Clock, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getAreas, getWhatsAppLink } from "@/lib/utils";

const ZONES = [
  {
    id: "central",
    name: "Central Chattogram",
    turnaround: "Same day",
    note: "GEC Circle, Agrabad, Panchpathi",
    areas: ["GEC Circle", "Panchpathi", "Agrabad", "Oyster Bay", "Dampara", "Sadarghat"],
  },
  {
    id: "north",
    name: "North & east",
    turnaround: "Same day",
    note: "Sagarika, Khulna, Kazir Dewri",
    areas: ["Sagarika", "Khulna", "Hazari", "Kazir Dewri", "Fazlul Haque Road", "Bozraho Ghona"],
  },
  {
    id: "south",
    name: "South & west",
    turnaround: "Same day",
    note: "Chandgaon, Patenga, Anderkilla",
    areas: ["Chandgaon", "Patenga", "Anderkilla", "Kaptai Road"],
  },
  {
    id: "upazila",
    name: "Nearby upazilas",
    turnaround: "Next day",
    note: "Hathazari, Raojan, Anwara, Boalkhali",
    areas: ["Hathazari", "Raojan", "Anwara", "Boalkhali", "Kaptai"],
  },
];

export default function Coverage() {
  const all = getAreas();

  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(203 213 228 / 0.9) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 60% at 30% 40%, black, transparent)",
        }}
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Service area"
                title="Covering all of Chattogram"
                description="We work across Chattogram city and the surrounding upazilas. Hospital, warehouse and industrial projects anywhere in Bangladesh."
              />
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-8 space-y-3">
                {ZONES.map((z) => (
                  <li
                    key={z.id}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                  >
                    <div className="min-w-0">
                      <p className="flex items-center gap-2.5 text-[15px] font-semibold text-foreground">
                        <MapPin className="size-4 shrink-0 text-primary" />
                        {z.name}
                      </p>
                      <p className="mt-0.5 truncate text-[13px] text-foreground-muted">{z.note}</p>
                    </div>
                    <span
                      className={z.turnaround === "Same day" ? "shrink-0 rounded-full bg-primary-light px-2.5 py-1 text-[12px] font-bold text-primary" : "shrink-0 rounded-full bg-secondary-light px-2.5 py-1 text-[12px] font-bold text-secondary-hover"}
                    >
                      {z.turnaround}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/service-areas"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  <Navigation className="size-4" />
                  Check your area
                </Link>
                <a
                  href={getWhatsAppLink("Hello Eco Care BD, do you cover my area? My location is:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-5 py-3 text-[15px] font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual map panel */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-9">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary-light blur-3xl"
                aria-hidden="true"
              />

              {/* Stylised map */}
              <div className="relative" aria-hidden="true">
                <svg viewBox="0 0 400 260" className="w-full" role="presentation">
                  <defs>
                    <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Coastline */}
                  <path
                    d="M300 10 C250 55, 285 95, 245 135 C210 170, 225 210, 180 250 L400 250 L400 10 Z"
                    fill="var(--color-secondary-light)"
                    opacity="0.55"
                  />
                  {/* River */}
                  <path
                    d="M60 250 C90 205, 70 175, 110 145 C145 118, 130 80, 165 45"
                    stroke="var(--color-secondary)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                  />

                  {/* Coverage rings */}
                  <circle cx="175" cy="130" r="105" fill="url(#pulse)" />
                  <circle
                    cx="175"
                    cy="130"
                    r="86"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                    opacity="0.45"
                  />
                  <circle
                    cx="175"
                    cy="130"
                    r="55"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                    opacity="0.6"
                  />

                  {/* Pins */}
                  {[
                    { x: 175, y: 130, r: 9, label: true },
                    { x: 120, y: 95, r: 6 },
                    { x: 232, y: 100, r: 6 },
                    { x: 130, y: 180, r: 6 },
                    { x: 215, y: 185, r: 6 },
                    { x: 100, y: 220, r: 5 },
                    { x: 250, y: 225, r: 5 },
                  ].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r={p.r + 8} fill="var(--color-primary)" opacity="0.12" />
                      <circle cx={p.x} cy={p.y} r={p.r} fill="var(--color-primary)" />
                      {p.label && (
                        <text
                          x={p.x + 16}
                          y={p.y + 5}
                          fontSize="13"
                          fontWeight="700"
                          fill="var(--color-foreground)"
                        >
                          Central
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {all.map((a) => (
                  <span
                    key={a}
                    className="rounded-lg border border-border bg-surface-alt px-3 py-1.5 text-[14px] font-medium text-foreground"
                  >
                    {a}
                  </span>
                ))}
                <span className="rounded-lg border border-primary/30 bg-primary-light px-3 py-1.5 text-[14px] font-bold text-primary">
                  + upazilas
                </span>
              </div>

              <div className="relative mt-8 grid gap-4 rounded-2xl bg-primary-dark p-6 text-white sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Truck className="size-5 shrink-0 text-secondary" />
                  <div>
                    <p className="text-[15px] font-bold">Same day</p>
                    <p className="mt-0.5 text-[13px] text-white/70">Inside the city</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-5 shrink-0 text-secondary" />
                  <div>
                    <p className="text-[15px] font-bold">Next day</p>
                    <p className="mt-0.5 text-[13px] text-white/70">Nearby upazilas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="size-5 shrink-0 text-secondary" />
                  <div>
                    <p className="text-[15px] font-bold">Nationwide</p>
                    <p className="mt-0.5 text-[13px] text-white/70">Project work</p>
                  </div>
                </div>
              </div>

              <Link
                href="/service-areas"
                className="relative mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
              >
                See the full area list
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}