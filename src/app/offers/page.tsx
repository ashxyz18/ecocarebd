import type { Metadata } from "next";
import Link from "next/link";
import { Ticket, Clock, Users, Sparkles, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppLink, whatsappFor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offers & Coupons | Eco Care BD Chattogram",
  description:
    "Current Eco Care BD offers: save ৳500 on your first service with code ECOSAVE500, plus seasonal and commercial package deals for Chattogram.",
  alternates: { canonical: "/offers" },
};

const OFFERS = [
  {
    code: "ECOSAVE500",
    title: "৳500 off your first service",
    text: "Applies to any single-visit pest control, tank cleaning or deep cleaning booking for home customers. Combine with a first-time-offer on inspection.",
    expiry: "No expiry — first-time customers only",
    highlight: true,
  },
  {
    code: "TANK10",
    title: "10% off annual water tank plan",
    text: "Book four tank cleanings in advance and pay less per visit. The recommended schedule for family households is every six months.",
    expiry: "Valid for new annual contracts",
  },
  {
    code: "FOGMONSOON",
    title: "Monsoon fogging package",
    text: "Pre-book the full seasonal fogging programme for a household and lock in the full-season rate instead of paying per visit.",
    expiry: "Book before the season starts",
  },
  {
    code: "BIZ20",
    title: "20% off commercial contracts",
    text: "For offices, warehouses, restaurants and factories on a recurring monthly or quarterly contract. Minimum six-month term.",
    expiry: "Commercial accounts only",
  },
];

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Offers"
        title="Current offers & coupons"
        description="Straightforward discounts, no hidden conditions. Mention the code when you book and we apply it to your invoice."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offers", href: "/offers" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.code} delay={i * 80}>
                <article
                  className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                    offer.highlight
                      ? "border-secondary/40 bg-secondary-light/50"
                      : "border-border bg-surface"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid size-11 place-items-center rounded-xl ${
                        offer.highlight ? "bg-secondary text-neutral-900" : "bg-primary-light text-primary"
                      }`}
                    >
                      <Ticket className="size-5" />
                    </span>
                    {offer.highlight && (
                      <span className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-neutral-900">
                        Most popular
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-[20px] font-bold">{offer.title}</h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                    {offer.text}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                    <code className="rounded-lg border border-dashed border-primary/40 bg-surface px-3.5 py-2 font-heading text-[15px] font-bold tracking-wider text-primary">
                      {offer.code}
                    </code>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-foreground-muted">
                      <Clock className="size-3.5" />
                      {offer.expiry}
                    </span>
                  </div>

                  <a
                    href={whatsappFor(`I want to use the ${offer.code} offer`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="size-[18px]" />
                    Claim this offer
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Conditions */}
          <Reveal delay={140}>
            <div className="mt-10 rounded-2xl border border-border bg-surface-alt p-6 sm:p-8">
              <h2 className="text-[19px] font-bold">How to use an offer code</h2>
              <ol className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  "Book online, by phone or on WhatsApp — tell us the code in your message.",
                  "The discount is applied to your final invoice before payment.",
                  "For contract and seasonal offers, we confirm eligibility in writing before you commit.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary font-heading text-[13px] font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-relaxed text-foreground-muted">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-7 border-t border-border pt-6">
                <h3 className="flex items-center gap-2 text-[16px] font-bold">
                  <Sparkles className="size-5 text-primary" />
                  Good to know
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Only one offer code per booking.",
                    "Cannot be combined with other promotions.",
                    "Free re-treatment guarantee applies regardless of which code you used.",
                    "Not valid on already-discounted contract rates.",
                  ].map((term) => (
                    <li key={term} className="flex items-start gap-2.5 text-[15px] text-foreground-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Referrals */}
          <Reveal delay={180}>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-light text-primary">
                  <Users className="size-5" />
                </span>
                <h2 className="mt-4 text-[19px] font-bold">Refer a neighbour, both of you save</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-foreground-muted">
                  Refer someone in your area and you both get ৳300 off your next service. No
                  minimum value, no expiry on the credit.
                </p>
                <a
                  href={getWhatsAppLink("Hello Eco Care BD, I would like to refer a neighbour for a service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
                >
                  Refer someone
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-light text-primary">
                  <Ticket className="size-5" />
                </span>
                <h2 className="mt-4 text-[19px] font-bold">Ask about a custom offer</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-foreground-muted">
                  Societies, offices and warehouses often get better rates than the published
                  packages. Send us your requirement and we will quote it properly.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
                >
                  Request a quotation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}