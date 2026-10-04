import Image from "next/image";
import { Leaf, MapPin, Recycle, Droplets, ShieldCheck, type LucideIcon } from "lucide-react";
import { TRUST_POINTS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: LucideIcon[] = [ShieldCheck, Recycle, MapPin, Droplets];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 sm:py-20 lg:py-24">
      {/* Layered background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 size-[420px] rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -right-20 bottom-0 size-[380px] rounded-full bg-secondary/15 blur-3xl animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(29 78 216 / 0.15) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted sm:aspect-4/3 lg:aspect-4/5">
                  <Image
                    src="https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=1400"
                    alt="Pest control professional in protective clothing fumigating an indoor space"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-transparent to-transparent" />
                  <a
                    href="https://www.pexels.com/photo/person-wearing-protective-clothing-spraying-smoke-on-the-floor-4176608/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-black/65"
                  >
                    Photo: Michelangelo Buonarroti / Pexels
                  </a>

                  {/* Stat overlay */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-white/15 bg-primary-dark/75 p-4 backdrop-blur-md">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-neutral-900">
                      <Leaf className="size-5" />
                    </span>
                    <p className="text-[13px] font-semibold leading-snug text-white/90">
                      Low-toxicity, targeted products only — never routine blanket spraying.
                    </p>
                  </div>
                </div>

                {/* Decorative ring */}
                <div
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl border border-primary/20"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="About Eco Care BD"
                title="A local team for a pest-free, healthier home."
                description="Our Chattogram team pairs careful inspections with targeted treatments, clear instructions and a free re-treatment promise."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {TRUST_POINTS.map((point, i) => {
                const Icon = ICONS[i] ?? ShieldCheck;
                return (
                  <Reveal
                    key={point.title}
                    delay={i * 90}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
                  >
                    <span
                      className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <span className="relative grid size-11 shrink-0 place-items-center rounded-lg bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-[22px]" />
                    </span>
                    <h3 className="relative mt-4 text-[17px] font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="relative mt-2 text-[15px] leading-relaxed text-foreground-muted">
                      {point.text}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
