import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { getCallLink, PHONE_DISPLAY } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 -top-20 size-[420px] rounded-full bg-primary-light/70 blur-3xl" />
      </div>

      <div className="container-page relative text-center">
        <p className="font-heading text-[86px] font-extrabold leading-none text-primary/15 sm:text-[120px]">
          404
        </p>

        <h1 className="mt-4 text-[28px] sm:text-4xl">This page has gone missing</h1>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-foreground-muted">
          The link is broken or the page has moved. Try one of the popular services below, or call us
          and we will help you directly.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            <Home className="size-[18px]" />
            Back to home
          </Link>
          <a
            href={getCallLink()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border px-6 py-3.5 text-[15px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-[18px]" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
            Popular services
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SERVICES.filter((s) => s.featured).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-[14px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <span aria-hidden="true">{s.icon}</span>
                {s.navLabel}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
          >
            <Search className="size-4" />
            Looking for something specific? Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}