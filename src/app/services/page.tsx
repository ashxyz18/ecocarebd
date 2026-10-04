import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck, Clock, Wallet, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import TrustMarquee from "@/components/ui/TrustMarquee";
import ServiceTable from "@/components/home/ServiceTable";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/services";
import { PROCESS } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "All Services | Pest Control, Cleaning & Maintenance in Chattogram",
  description:
    "All 12 Eco Care BD services: fumigation, water tank cleaning, termite, bed bug, cockroach, rodent, mosquito, woodworm control, deep cleaning, sofa & carpet cleaning, glass cleaning and AC repair. Prices from ৳800.",
  alternates: { canonical: "/services" },
};

const anchor = (c: ServiceCategory) => c.toLowerCase().replace(/\s+/g, "-");

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ecocarebd.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ecocarebd.com/services" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Service range"
        title="Twelve services, one accountable team"
        description="Whatever is going on in your home, office or warehouse — termites, bed bugs, an unclean water tank, a blocked drain or a failing AC — we handle it with certified technicians and a written guarantee."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SERVICE_CATEGORIES.map((c) => (
            <a
              key={c}
              href={`#${anchor(c)}`}
              className="rounded-full border border-border bg-surface px-4 py-2 text-[14px] font-semibold text-foreground-muted transition-colors hover:border-primary hover:text-primary"
            >
              {c}
              <span className="ml-1.5 text-primary">
                ({SERVICES.filter((s) => s.category === c).length})
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <TrustMarquee />

      {/* Assurances */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {[
            { Icon: Wallet, title: "Fixed written price", text: "Agreed before work starts" },
            { Icon: ShieldCheck, title: "Guaranteed", text: "Free re-treatment window" },
            { Icon: Users, title: "Certified technicians", text: "ID-checked, uniformed" },
            { Icon: Clock, title: "Open 7 days", text: "Same-day emergencies" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="px-4 py-7 text-center">
              <Icon className="mx-auto size-6 text-primary" />
              <p className="mt-2.5 text-[15px] font-bold text-foreground">{title}</p>
              <p className="mt-0.5 text-[13px] text-foreground-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      {SERVICE_CATEGORIES.map((category) => {
        const items = SERVICES.filter((s) => s.category === category);
        return (
          <section
            key={category}
            id={anchor(category)}
            className="scroll-mt-28 border-b border-border py-14 last:border-b-0 sm:py-16 lg:py-20"
          >
            <div className="container-page">
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-[26px] sm:text-3xl">{category}</h2>
                    <p className="mt-2 max-w-2xl text-[16px] text-foreground-muted">
                      {category === "Pest Control" &&
                        "Targeted treatments that reach the colony, not just the visible insects."}
                      {category === "Cleaning" &&
                        "Deep cleaning for water systems, upholstery, facades and interiors."}
                      {category === "Maintenance" &&
                        "Keeping equipment running efficiently so it does not fail on you."}
                    </p>
                  </div>
                  <a
                    href={getWhatsAppLink(`Hello Eco Care BD, please send me pricing for your ${category.toLowerCase()} services.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:underline"
                  >
                    <WhatsAppIcon className="size-4" />
                    Get {category.toLowerCase()} prices
                  </a>
                </div>
              </Reveal>

              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.slug} delay={(i % 3) * 80} as="article" className="h-full">
                    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted">
                      <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl bg-surface-alt">
                        <Image
                          src={service.image}
                          alt={`${service.name} service`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className="grid size-13 place-items-center rounded-2xl bg-primary-light text-[26px] transition-transform duration-300 group-hover:scale-110"
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

                      <h3 className="mt-5 text-xl font-bold">
                        <Link href={`/services/${service.slug}`} className="before:absolute before:inset-0">
                          {service.name}
                        </Link>
                      </h3>
                      <p className="mt-1.5 text-[14px] font-semibold text-primary">{service.tagline}</p>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                        {service.summary}
                      </p>

                      <ul className="mt-4 space-y-1.5">
                        {service.included.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[14px] text-foreground-muted">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-[13px]">
                        <div>
                          <dt className="text-foreground-muted">From</dt>
                          <dd className="mt-0.5 font-heading text-lg font-extrabold text-foreground">
                            {service.priceFrom}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-foreground-muted">Typical time</dt>
                          <dd className="mt-0.5 font-semibold text-foreground">{service.duration}</dd>
                        </div>
                      </dl>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
                        See details &amp; pricing
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ServiceTable />

      {/* Process summary */}
      <section className="bg-surface-alt py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[26px] sm:text-4xl">The same process on every job</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground-muted sm:text-[17px]">
                You get a free inspection, a written fixed price, a certified technician on the day,
                and a guarantee period on the invoice.
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} as="li" delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="font-heading text-3xl font-extrabold text-primary/25">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        heading="Not sure which service you need?"
        subheading="Describe the problem on WhatsApp or over the phone. We will tell you which service fits — and honestly, whether you need one at all."
      />
    </>
  );
}
