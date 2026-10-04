import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SITE, PHONE_DISPLAY } from "@/lib/site";
import { getCallLink, getWhatsAppLink } from "@/lib/utils";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact & Book Free Inspection | Eco Care BD Chattogram",
  description:
    "Book a free pest control inspection in Chattogram. Call 01752-510002, WhatsApp us, or send a request. Open 7 days a week with same-day emergency slots.",
  alternates: { canonical: "/contact" },
};

const MAP_QUERY = encodeURIComponent("GEC Circle, Chattogram, Bangladesh");

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: serviceSlug } = await searchParams;
  const preselected = serviceSlug ? getService(serviceSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book your free inspection"
        description="Tell us what is happening in your home, office or warehouse. We will call you back within two working hours with a fixed price and the next available slot."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              {preselected && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-primary/25 bg-primary-light px-4 py-3.5">
                  <span className="text-2xl" aria-hidden="true">
                    {preselected.icon}
                  </span>
                  <p className="text-[14px] text-foreground">
                    Requesting <span className="font-bold">{preselected.name}</span>
                    <span className="ml-2 text-foreground-muted">
                      Typically {preselected.duration} &middot; from {preselected.priceFrom}
                    </span>
                  </p>
                </div>
              )}
              <ContactForm defaultService={serviceSlug} />
            </Reveal>
          </div>

          {/* Contact details */}
          <aside className="space-y-5 lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <h2 className="text-xl font-bold">Talk to a person</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                  Call or WhatsApp for the fastest answer. We are available seven days a week,
                  including emergencies.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={getCallLink()}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface-alt p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                      <Phone className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                        Call now
                      </p>
                      <p className="text-[16px] font-bold text-foreground">{PHONE_DISPLAY}</p>
                    </div>
                    <ArrowRight className="size-5 shrink-0 text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-[#25D366]/40 bg-[#25D366]/5 p-4 transition-all hover:-translate-y-0.5 hover:border-[#25D366]"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                      <WhatsAppIcon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                        WhatsApp
                      </p>
                      <p className="text-[16px] font-bold text-foreground">Message &amp; get photos</p>
                    </div>
                    <ArrowRight className="size-5 shrink-0 text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-[#128C4B]" />
                  </a>

                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface-alt p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
                      <Mail className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                        Email
                      </p>
                      <p className="truncate text-[16px] font-bold text-foreground">{SITE.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <h2 className="text-xl font-bold">Office &amp; coverage</h2>
                <ul className="mt-5 space-y-4 text-[15px]">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Head office</p>
                      <address className="mt-1 not-italic leading-relaxed text-foreground-muted">
                        {SITE.address.street}, {SITE.address.city} {SITE.address.postalCode},
                        Bangladesh
                      </address>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Opening hours</p>
                      <ul className="mt-1 space-y-0.5 text-foreground-muted">
                        {SITE.hours.map((h) => (
                          <li key={h.days}>
                            {h.days}: {h.open} &ndash; {h.close}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-1.5 font-semibold text-primary">
                        Emergency support: 24/7
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Eco Care BD office location in Chattogram"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="rounded-2xl bg-primary-dark p-6 text-white">
                <h2 className="text-lg font-bold">Commercial &amp; project enquiries</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/70">
                  Warehouses, factories, hospitals, schools and multi-building societies — send us
                  the site details and we will prepare a written proposal.
                </p>
                <a
                  href={getWhatsAppLink(
                    "Hello Eco Care BD, I have a commercial/project enquiry. Site details:"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-bold text-primary-dark transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-4" />
                  Send project details
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}