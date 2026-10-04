import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getCallLink, getWhatsAppLink, PHONE_DISPLAY, whatsappFor } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export default function CtaBand({
  service,
  heading,
  subheading,
  primaryLabel = "Book free inspection",
  primaryHref = "/contact",
}: {
  /** When set, the WhatsApp button pre-fills this service name. */
  service?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.5) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute -left-16 top-0 size-80 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[26px] leading-[1.15] sm:text-4xl">
              {heading ?? (service ? `Book ${service.toLowerCase()} today` : "Book your free inspection today")}
            </h2>
          </Reveal>

          {subheading && (
            <Reveal delay={80}>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
                {subheading}
              </p>
            </Reveal>
          )}

          <Reveal delay={150}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
              >
                <CalendarCheck className="size-[18px]" />
                {primaryLabel}
              </Link>
              <a
                href={getCallLink()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[16px] font-bold text-neutral-900 transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <Phone className="size-[18px]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <a
              href={service ? whatsappFor(service) : getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex items-center gap-2 rounded-xl border-2 border-[#25D366]/60 px-6 py-3.5 text-[15px] font-bold text-[#4ade80] transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon className="size-[18px]" />
              Message us on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[13px] font-semibold text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-secondary" />
                Same-day slots in Chattogram
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-secondary" />
                Free re-treatment guarantee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MessageCircle className="size-4 text-secondary" />
                Fixed price before we start
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}