import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { WHY_US } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TRUST_LOGOS } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Eco Care BD"
                title="The reasons clients stay with us"
                description="Most of our work now comes from referrals. That only happens when the job is done properly and the price was the price."
              />
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 space-y-3">
                {WHY_US.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-primary text-white">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-foreground">{item.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-foreground-muted">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:text-primary-hover"
              >
                More about how we work
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          {/* Proof panel */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-alt p-7 sm:p-9">
              <div
                className="absolute -right-16 -top-16 size-56 rounded-full bg-primary-light blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
                  Credentials
                </p>
                <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-foreground">
                  Licensed, insured and independently verified
                </h3>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {TRUST_LOGOS.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-surface px-3.5 py-2 text-[13px] font-bold text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <dl className="mt-9 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-wide text-foreground-muted">
                      Written guarantee
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground">
                      Every job comes with a written guarantee period on the invoice.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-wide text-foreground-muted">
                      Fixed pricing
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground">
                      The quote you approve is the invoice you pay. Always.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-wide text-foreground-muted">
                      Proof of work
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground">
                      Before and after photos sent to you on WhatsApp.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}