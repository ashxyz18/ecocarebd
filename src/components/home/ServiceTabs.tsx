"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | ServiceCategory;

const FILTERS: Filter[] = ["All", ...SERVICE_CATEGORIES];

/**
 * Filterable service grid. The active tab is driven by state so the grid can
 * animate on change, while every card remains a normal crawlable link.
 */
export default function ServiceTabs() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = SERVICES.filter(
    (s) => filter === "All" || s.category === filter
  );

  const counts = FILTERS.reduce<Record<string, number>>((acc, f) => {
    acc[f] = f === "All" ? SERVICES.length : SERVICES.filter((s) => s.category === f).length;
    return acc;
  }, {});

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Everything that keeps your home hygienic"
            description="From termites in the timber to sludge in the water tank. Twelve services, one trained team, fixed prices before we start."
            action={{ label: "Compare all 12 services", href: "/services" }}
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="service-grid"
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold transition-all duration-200",
                    active
                      ? "bg-primary text-white shadow-brand"
                      : "border border-border bg-surface text-foreground-muted hover:border-primary hover:text-primary"
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                      active ? "bg-white/25 text-white" : "bg-primary-light text-primary"
                    )}
                  >
                    {counts[f]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div
          id="service-grid"
          role="tabpanel"
          aria-live="polite"
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i, 5) * 60} as="article" className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lifted">
                {/* Hover wash */}
                <span
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary-light opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl bg-surface-alt">
                  <Image
                    src={service.image}
                    alt={`${service.name} service`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className="grid size-13 shrink-0 place-items-center rounded-2xl bg-primary-light text-[26px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  {service.badge && (
                    <span className="rounded-full bg-accent-light px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-hover">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-foreground">
                  <Link href={`/services/${service.slug}`} className="before:absolute before:inset-0">
                    {service.name}
                  </Link>
                </h3>

                <p className="relative mt-1.5 text-[15px] font-semibold text-primary">
                  {service.tagline}
                </p>

                <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                  {service.summary}
                </p>

                <ul className="relative mt-4 space-y-1.5">
                  {service.included.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-foreground-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-end justify-between gap-3 border-t border-border pt-5">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                      From
                    </p>
                    <p className="font-heading text-xl font-extrabold text-foreground">
                      {service.priceFrom}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
                    Details
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          {/* All-services tile, only when unfiltered */}
          {filter === "All" && (
            <Reveal delay={240} as="article" className="h-full">
              <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-primary-dark p-7 text-white">
                <div className="absolute -right-12 -top-12 size-44 rounded-full bg-white/5" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-10 size-52 rounded-full bg-secondary/20 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-secondary">
                    Full range
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight">
                    12 services across pest control, cleaning &amp; maintenance
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                    Water tank cleaning, woodworm, outdoor glass, AC servicing and more — with the
                    same guarantee on each.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-bold text-primary-dark transition-transform hover:-translate-y-0.5"
                  >
                    Browse all services
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
