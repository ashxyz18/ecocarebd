import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, Clock, Wallet, ShieldCheck, MapPin, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { absoluteUrl, getCallLink, getWhatsAppLink, whatsappFor, PHONE_DISPLAY } from "@/lib/utils";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: `${service.name} in Chattogram | From ${service.priceFrom}`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} in Chattogram | Eco Care BD`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug)
    .sort((a, b) => {
      const aScore = a.category === service.category ? 1 : 0;
      const bScore = b.category === service.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    image: service.image.startsWith("http") ? service.image : absoluteUrl(service.image),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Chattogram" },
      { "@type": "AdministrativeArea", name: "Chattogram Division" },
    ],
    offers: {
      "@type": "Offer",
      price: service.priceFrom.replace(/[^\d]/g, ""),
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} inclusions`,
      itemListElement: service.included.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={service.category}
        icon={service.icon}
        title={service.name}
        description={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.navLabel, href: `/services/${service.slug}` },
        ]}
      >
        {/* Quick facts */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4 lg:max-w-3xl">
          {[
            { label: "Price from", value: service.priceFrom, Icon: Wallet },
            { label: "Typical time", value: service.duration, Icon: Clock },
            { label: "Recommended", value: service.frequency, Icon: AlertTriangle },
            { label: "Guarantee", value: service.guarantee, Icon: ShieldCheck },
          ].map(({ label, value, Icon }) => (
            <div key={label} className="bg-surface p-4 text-left">
              <dt className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                <Icon className="size-3.5 text-primary" />
                {label}
              </dt>
              <dd className="mt-1.5 text-[15px] font-bold text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[16px] font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Book {service.navLabel.toLowerCase()}
          </Link>
          <a
            href={whatsappFor(service.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-7 py-3.5 text-[16px] font-bold text-[#128C4B] transition-colors hover:bg-[#25D366] hover:text-white"
          >
            <WhatsAppIcon className="size-[18px]" />
            WhatsApp us
          </a>
          <a
            href={getCallLink()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border px-7 py-3.5 text-[16px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-[18px]" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </PageHero>

      {/* Intro + image */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h2 className="text-[24px] sm:text-3xl">Why this service matters</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-foreground-muted sm:text-[17px]">
              {service.intro}
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h3 className="flex items-center gap-2.5 text-lg font-bold">
                <span className="grid size-9 place-items-center rounded-lg bg-primary-light">
                  <Check className="size-5 text-primary" strokeWidth={2.5} />
                </span>
                What&apos;s included
              </h3>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-surface-alt shadow-lifted">
                <Image
                  src={service.image}
                  alt={`${service.name} by Eco Care BD in Chattogram`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-surface-alt p-5">
                <p className="text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  Service area
                </p>
                <p className="mt-2 flex items-start gap-2 text-[15px] text-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {service.areas}
                </p>
                <a
                  href={getWhatsAppLink(
                    `Hello Eco Care BD, I need ${service.name} in Chattogram. What is the total cost?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#128C4B]"
                >
                  <WhatsAppIcon className="size-[18px]" />
                  Get exact price on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="border-y border-border bg-surface-alt py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="max-w-2xl text-[24px] sm:text-3xl">
              Signs you need {service.navLabel.toLowerCase()} in Chattogram
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-light text-lg">
                    ⚠
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[24px] sm:text-3xl">How we carry out {service.navLabel.toLowerCase()}</h2>
            <p className="mt-3 max-w-2xl text-[16px] text-foreground-muted">
              The same trained technicians, the same documented steps, every single job.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} as="li" delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-start sm:gap-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary font-heading text-lg font-extrabold text-white">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border bg-surface-alt py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[24px] sm:text-3xl">
                {service.navLabel} questions
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground-muted">
                Still have a question about {service.navLabel.toLowerCase()}? Call us on{" "}
                <a href={getCallLink()} className="font-bold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                and we will answer straight.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-7">
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[24px] sm:text-3xl">Related services</h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
              >
                All services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-primary-light text-2xl">
                    <span aria-hidden="true">{r.icon}</span>
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold">{r.name}</h3>
                  <p className="mt-1.5 text-[14px] font-semibold text-primary">{r.tagline}</p>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                    {r.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
                    From {r.priceFrom}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        service={service.name}
        heading={`Book ${service.navLabel.toLowerCase()} today`}
        subheading={`Free inspection in Chattogram. Fixed price before we start, and a ${service.guarantee.toLowerCase()} on every job.`}
        primaryLabel={`Book ${service.navLabel.toLowerCase()}`}
        primaryHref={`/contact?service=${service.slug}`}
      />
    </>
  );
}
