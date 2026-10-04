import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Clock,
  BadgeCheck,
  ArrowRight,
  CalendarCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import AuroraBackground from "@/components/home/AuroraBackground";
import { PHONE_DISPLAY, SITE } from "@/lib/site";
import { getCallLink } from "@/lib/utils";

const QUICK_SERVICES = [
  { icon: "💧", label: "Water tank", href: "/services/water-tank-cleaning" },
  { icon: "🐛", label: "Termite", href: "/services/termite-control" },
  { icon: "🛏️", label: "Bed bugs", href: "/services/bed-bug-control" },
  { icon: "🪳", label: "Cockroach", href: "/services/cockroach-control" },
  { icon: "🐭", label: "Rodent", href: "/services/rodent-control" },
  { icon: "🦟", label: "Mosquito", href: "/services/mosquito-fly-control" },
  { icon: "🧫", label: "Fumigation", href: "/services/fumigation-services" },
  { icon: "❄️", label: "AC repair", href: "/services/ac-repair-maintenance" },
];

const PROOF = [
  { Icon: TrendingUp, value: "12,400+", label: "Jobs completed" },
  { Icon: Users, value: "50+", label: "Certified technicians" },
  { Icon: BadgeCheck, value: "4.9/5", label: "1,247 reviews" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <AuroraBackground />

      <div className="container-page relative pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Eyebrow>
              Pest control &middot; Chattogram since {SITE.founded}
            </Eyebrow>

            <h1 className="mt-5 text-[34px] leading-[1.08] sm:text-5xl lg:text-[56px]">
              Protecting homes.
              <br />
              <span className="text-gradient-brand">Purifying lives.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-foreground-muted">
              Certified pest control, water tank cleaning and deep cleaning across Chattogram.
              Child-safe and pet-safe treatments, fixed prices, and a free re-treatment promise on
              every job.
            </p>

            {/* Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <div
                className="flex items-center gap-1"
                aria-label={`Rated ${SITE.rating.value} out of 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[18px] fill-accent text-accent" aria-hidden="true" />
                ))}
                <span className="ml-1.5 text-[15px] font-bold text-foreground">
                  {SITE.rating.value}
                </span>
                <span className="text-[15px] text-foreground-muted">
                  ({SITE.rating.count.toLocaleString("en-GB")} reviews)
                </span>
              </div>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-foreground-muted">
                <BadgeCheck className="size-4 text-primary" />
                BPCA certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-foreground-muted">
                <Clock className="size-4 text-primary" />
                Open 7 days
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-4 text-[16px] font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <CalendarCheck className="size-[18px]" />
                Book free inspection
              </Link>
              <a
                href={getCallLink()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-surface/80 px-7 py-4 text-[16px] font-bold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <ShieldCheck className="size-[18px]" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            {/* Quick service chips */}
            <div className="mt-9">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-foreground-muted">
                Popular services
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {QUICK_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-[14px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
                  >
                    <span
                      className="transition-transform duration-300 group-hover:scale-125"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-[28px] border border-border bg-surface-alt shadow-lifted sm:aspect-4/3 lg:aspect-4/5">
                <Image
                  src="https://images.pexels.com/photos/19789841/pexels-photo-19789841/free-photo-of-smoke-used-for-pest-control.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Pest control specialist using a smoke machine outside a house"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />

                {/* Live badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-[12px] font-bold text-foreground">
                    Same-day slots open
                  </span>
                </div>

                {/* Trust badge */}
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-lifted backdrop-blur sm:left-5 sm:right-auto sm:max-w-xs">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-tight text-foreground">
                      The Eco Care Guarantee
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug text-foreground-muted">
                      Pests return, we return — free re-treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating proof card */}
              <div className="absolute -left-3 top-6 hidden animate-float rounded-2xl border border-border bg-surface/95 p-4 shadow-lifted backdrop-blur sm:block lg:-left-8">
                <p className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
                  Trust score
                </p>
                <p className="mt-1 font-heading text-3xl font-extrabold leading-none text-primary">
                  98%
                </p>
                <p className="mt-1 text-[12px] font-medium text-foreground-muted">
                  would recommend us
                </p>
              </div>
            </div>

            {/* Proof stats row */}
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {PROOF.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-surface/80 p-3.5 backdrop-blur transition-colors hover:border-primary/50"
                >
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  <dt className="sr-only">{label}</dt>
                  <dd className="mt-2">
                    <span className="block font-heading text-[19px] font-extrabold leading-none text-foreground">
                      {value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-tight text-foreground-muted">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Offer strip */}
        <div className="mt-12 lg:mt-16">
          <div className="group relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary-light to-primary-light p-5 transition-shadow hover:shadow-lifted sm:flex-row sm:items-center lg:p-6">
            <span
              className="absolute -left-10 -top-10 size-32 rounded-full bg-white/40 blur-2xl transition-transform duration-700 group-hover:translate-x-16"
              aria-hidden="true"
            />
            <div className="relative flex items-start gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-neutral-900">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-foreground sm:text-base">
                  Save ৳500 on your first service
                </p>
                <p className="mt-0.5 text-[14px] text-foreground-muted">
                  Use code{" "}
                  <code className="rounded-md bg-surface px-2 py-0.5 font-bold text-foreground">
                    ECOSAVE500
                  </code>{" "}
                  at booking.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Claim offer
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
