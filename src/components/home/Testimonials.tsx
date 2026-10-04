"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);

  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Customer reviews"
            title="What Chattogram says about us"
            description="Real reviews from homeowners, hospitals, offices and warehouses we have worked with."
          />
        </Reveal>

        <div className="mt-12">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((t, i) => (
              <Reveal key={t.name} delay={i * 90} as="article" className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                  <Quote className="size-8 shrink-0 text-primary/25" aria-hidden="true" />

                  <div
                    className="mt-4 flex items-center gap-1"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={cn(
                          "size-4",
                          s < t.rating ? "fill-secondary text-secondary" : "text-border"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1">
                    <p className="text-[15px] leading-relaxed text-foreground-muted">{t.text}</p>
                  </blockquote>

                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="text-[15px] font-bold text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-[13px] text-foreground-muted">
                      {t.location} &middot; {t.service}
                    </p>
                    <p className="mt-1 text-[12px] text-foreground-muted/80">{t.date}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {pages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                aria-label="Previous reviews"
                className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex items-center gap-2" role="group" aria-label="Review pages">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    aria-label={`Go to review page ${i + 1}`}
                    aria-current={page === i ? "true" : undefined}
                    className={cn(
                      "size-2.5 rounded-full transition-all",
                      page === i ? "w-7 bg-primary" : "bg-border hover:bg-primary/50"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setPage((p) => (p + 1) % pages)}
                aria-label="Next reviews"
                className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}