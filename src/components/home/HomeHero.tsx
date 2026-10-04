import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { getCallLink, PHONE_DISPLAY } from "@/lib/utils";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

const HERO_POSTER =
  "https://images.pexels.com/photos/19789841/pexels-photo-19789841/free-photo-of-smoke-used-for-pest-control.jpeg?auto=compress&cs=tinysrgb&w=1800";

const VIDEO_PAGE =
  "https://www.pexels.com/video/street-pest-control-fogging-in-action-outdoors-34533564/";

export default function HomeHero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-neutral-950 text-white sm:min-h-[700px] lg:min-h-[760px]">
      <Image
        src={HERO_POSTER}
        alt="Pest control technician fogging outside a home"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />
      <HeroVideoBackground />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-neutral-950/80 via-neutral-950/45 to-neutral-950/50" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-950/75 via-transparent to-neutral-950/20" />

      <div className="container-page relative z-30 flex min-h-[650px] items-center justify-center pb-36 pt-24 text-center sm:min-h-[700px] lg:min-h-[760px]">
        <div className="mx-auto max-w-5xl">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <BadgeCheck className="size-4 text-sky-300" />
            Pest control in Chattogram since {SITE.founded}
          </p>
          <h1 className="mt-7 text-[40px] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[82px]">
            Enjoy your home.
            <br />
            <span className="text-sky-300">Pest free.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/85 sm:text-[19px]">
            Reliable pest control, cleaning and hygiene services for homes and businesses across
            Chattogram. Careful inspections, clear prices, and a free re-treatment promise.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-[15px] font-extrabold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
            >
              <CalendarCheck className="size-[18px]" />
              Book a free inspection
            </Link>
            <a
              href={getCallLink()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/45 bg-black/20 px-7 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="size-[17px]" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-sky-200"
          >
            Explore our services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-t border-white/20 bg-neutral-950/35 backdrop-blur-md">
        <div className="container-page grid gap-4 py-4 text-center sm:grid-cols-3 sm:gap-6 sm:py-5">
          <div className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold text-white/90 sm:text-[14px]">
            <ShieldCheck className="size-4 text-sky-300" />
            Child and pet considerate treatments
          </div>
          <div className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold text-white/90 sm:text-[14px]">
            <BadgeCheck className="size-4 text-sky-300" />
            Free re-treatment guarantee
          </div>
          <a
            href={VIDEO_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-white/65 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white sm:text-right"
          >
            Hero footage: Somogro Bangladesh / Pexels
          </a>
        </div>
      </div>
    </section>
  );
}
