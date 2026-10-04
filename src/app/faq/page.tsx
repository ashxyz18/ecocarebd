import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { FAQS } from "@/lib/content";
import { SERVICES } from "@/lib/services";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getCallLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQs | Pest Control Prices, Safety & Guarantees | Eco Care BD",
  description:
    "Answers on pest control prices in Chattogram, treatment safety for children and pets, guarantee periods, emergency response, service areas and payment methods.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Help centre"
        title="Frequently asked questions"
        description="Pricing, safety, timing and guarantees — the questions we answer most often on the phone, answered properly here."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs", href: "/faq" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <FaqAccordion items={FAQS} />
            </Reveal>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-lg font-bold">Popular services</h2>
                <p className="mt-1.5 text-[14px] text-foreground-muted">
                  Jump straight to the service page for pricing and inclusions.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {SERVICES.slice(0, 8).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-primary-light hover:text-primary"
                      >
                        <span className="flex items-center gap-2.5">
                          <span aria-hidden="true">{s.icon}</span>
                          {s.navLabel}
                        </span>
                        <span className="shrink-0 text-[13px] font-bold text-primary">
                          {s.priceFrom}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-border bg-surface-alt p-6">
                <h2 className="text-lg font-bold">Still have a question?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                  Ask us directly. If it turns out your problem does not need professional
                  treatment, we will tell you that too.
                </p>
                <div className="mt-5 space-y-2.5">
                  <a
                    href={getCallLink()}
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white"
                  >
                    <Phone className="size-4" />
                    Call us
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-5 py-3 text-[15px] font-bold text-[#128C4B]"
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        heading="Free inspection, fixed price"
        subheading="We will inspect the problem, show you the evidence, and quote a fixed price before any work begins."
      />
    </>
  );
}