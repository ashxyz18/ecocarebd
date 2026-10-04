import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getCallLink, getWhatsAppLink, PHONE_DISPLAY } from "@/lib/utils";
import { SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.55) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -left-20 top-0 size-[400px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[360px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white ring-1 ring-inset ring-white/20">
              <Clock className="size-3.5 text-secondary" />
              Same-day slots available
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 text-[30px] leading-[1.12] sm:text-5xl">
              Book your free inspection today
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
              A technician inspects your home or office, shows you the evidence, and gives you a
              written fixed-price plan. No charge for the inspection, no obligation to book.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
              >
                <CalendarCheck className="size-[18px]" />
                Book free inspection
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

          <Reveal delay={280}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-[#25D366]/60 px-6 py-3.5 text-[15px] font-bold text-[#4ade80] transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle className="size-[18px]" />
              Or message us on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] font-semibold text-white/60">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-secondary" />
                Free re-treatment guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-secondary" />
                Child &amp; pet safe
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-secondary" />
                Serving Chattogram since {SITE.founded}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}