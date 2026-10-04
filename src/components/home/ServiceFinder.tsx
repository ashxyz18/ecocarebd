import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { getCallLink, PHONE_DISPLAY } from "@/lib/utils";

export default function ServiceFinder() {
  return (
    <section className="relative z-10 -mt-7 pb-8 sm:-mt-9 sm:pb-10">
      <div className="container-page">
        <div className="grid gap-5 rounded-2xl border border-border bg-surface p-5 shadow-lifted sm:p-7 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:gap-10 lg:px-9 lg:py-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
              Quick service finder
            </p>
            <h2 className="mt-2 text-[22px] leading-tight sm:text-[25px]">
              What can we help with?
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
              Choose a service to start a booking request.
            </p>
          </div>

          <form action="/contact" method="get" className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="block">
              <span className="sr-only">Choose a service</span>
              <select
                name="service"
                required
                defaultValue=""
                className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-[14px] text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-[14px] font-extrabold text-white transition-all hover:bg-primary-hover"
            >
              <Search className="size-4" />
              Get started
              <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="flex items-center gap-2 text-[13px] text-foreground-muted lg:col-start-2">
            <span>Prefer to talk?</span>
            <a href={getCallLink()} className="font-bold text-primary hover:underline">
              {PHONE_DISPLAY}
            </a>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="font-bold text-primary hover:underline">
              Request a call back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
