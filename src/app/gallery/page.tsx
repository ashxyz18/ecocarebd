import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Gallery | Pest Control & Cleaning Work in Chattogram",
  description:
    "Before and after photos of termite treatment, bed bug treatment, water tank cleaning, deep cleaning and fumigation work carried out by Eco Care BD in Chattogram.",
  alternates: { canonical: "/gallery" },
};

/** Groups that get the interactive comparison slider. */
const COMPARISON = [
  "water-tank-cleaning",
  "termite-control",
  "bed-bug-control",
  "cockroach-control",
  "home-office-cleaning",
  "sofa-carpet-cleaning",
  "outdoor-glass-cleaning",
];

/** Groups shown as a plain photo grid. */
const GRID_ONLY = [
  "rodent-control",
  "mosquito-fly-control",
  "fumigation-services",
  "ac-repair-maintenance",
  "woodworm-control",
];

export default function GalleryPage() {
  const byslug = (slug: string) => SERVICES.find((s) => s.slug === slug);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Gallery"
        description="Real photographs from real jobs in Chattogram — the state we found problems in, and the state we left them in. Drag the slider to compare."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      {/* Comparison sliders */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <h2 className="text-[22px] sm:text-2xl">Before &amp; after</h2>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-3 py-1.5 text-[12px] font-bold text-primary">
                Drag the handle to compare
              </span>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {COMPARISON.map((slug, i) => {
              const service = byslug(slug);
              if (!service) return null;

              return (
                <Reveal key={slug} delay={(i % 2) * 100}>
                  <article>
                    <BeforeAfter
                      beforeSrc={`/images/gallery/${slug}-1.jpg`}
                      afterSrc={`/images/gallery/${slug}-3.jpg`}
                      beforeAlt={`${service.name} in Chattogram — before treatment`}
                      afterAlt={`${service.name} in Chattogram — after treatment`}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                    <div className="mt-4">
                      <h3 className="text-[18px] font-bold">
                        <span aria-hidden="true">{service.icon}</span> {service.name}
                      </h3>
                      <p className="mt-1 text-[15px] text-foreground-muted">{service.tagline}</p>
                      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-foreground-muted">
                        <span>{service.category}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>from {service.priceFrom}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{service.guarantee}</span>
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo grids */}
      <section className="border-t border-border bg-surface-alt py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[22px] sm:text-2xl">More from the field</h2>
          </Reveal>

          <div className="mt-9 space-y-14">
            {GRID_ONLY.map((slug, gi) => {
              const service = byslug(slug);
              if (!service) return null;

              return (
                <section key={slug} id={slug} className="scroll-mt-24">
                  <Reveal>
                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                      <h3 className="text-[20px] font-bold sm:text-2xl">
                        <span aria-hidden="true">{service.icon}</span> {service.name}
                      </h3>
                      <p className="text-[13px] text-foreground-muted">
                        {service.category} &middot; from {service.priceFrom}
                      </p>
                    </div>
                  </Reveal>

                  <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {["before", "during", "after", "detail"].map((phase, pi) => (
                      <Reveal key={phase} delay={(gi * 4 + pi) * 40}>
                        <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
                          <Image
                            src={`/images/gallery/${slug}-${pi + 1}.jpg`}
                            alt={`${service.name} — ${phase} photo from an Eco Care BD job in Chattogram`}
                            fill
                            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 45vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/85 to-transparent p-3 pt-8">
                            <span className="text-[12px] font-bold uppercase tracking-wide text-white">
                              {phase}
                            </span>
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <Reveal delay={120}>
            <p className="mt-12 rounded-2xl border border-secondary/30 bg-secondary-light/50 p-5 text-[15px] leading-relaxed text-foreground">
              <span className="font-bold">Placeholder note:</span> these tiles currently use
              generated artwork. Replace each file in{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">public/images/gallery/</code>{" "}
              with your own job photos keeping the same filenames — client work converts far better
              than stock imagery.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Want work like this on your property?"
        subheading="Send us a photo on WhatsApp and we will tell you what it is and what it will take to fix it."
      />
    </>
  );
}