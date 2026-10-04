import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const FEATURED_SLUGS = ["cockroach-control", "bed-bug-control", "termite-control"];
const FEATURED_SERVICES = FEATURED_SLUGS.flatMap((slug) => {
  const service = SERVICES.find((item) => item.slug === slug);
  return service ? [service] : [];
});

export default function PricingPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Straightforward pricing"
            title="Popular services, clear starting prices"
            description="Every property is different. These starting prices help you plan, and we confirm a fixed quote after a free inspection."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FEATURED_SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80} as="article" className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted">
                <div className="border-b border-border bg-surface-alt px-6 pb-5 pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                      {service.category}
                    </span>
                    <span className="text-[26px]" aria-hidden="true">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold">{service.name}</h3>
                  <p className="mt-1 text-[14px] text-foreground-muted">{service.tagline}</p>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-foreground-muted">
                    Starting from
                  </p>
                  <p className="mt-1 font-heading text-[34px] font-extrabold leading-none text-foreground">
                    {service.priceFrom}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.included.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-foreground-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-foreground-muted">
                    <ShieldCheck className="size-4 text-primary" /> {service.guarantee}
                  </p>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-primary-hover"
                  >
                    Get a quote <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
