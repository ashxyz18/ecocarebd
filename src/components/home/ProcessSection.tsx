import { Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { PROCESS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getCallLink, getWhatsAppLink, PHONE_DISPLAY } from "@/lib/utils";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 sm:py-20 lg:py-28">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(221 229 241 / 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgb(221 229 241 / 0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, no surprises"
            description="The same process for every job — you always know what happens next, what it costs, and when the problem is actually gone."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Connector: vertical on mobile, horizontal from lg */}
          <div
            className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary via-primary/25 to-transparent lg:left-0 lg:top-[3.25rem] lg:block lg:h-px lg:w-full"
            aria-hidden="true"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="animate-shimmer block h-full w-full bg-gradient-to-r from-transparent via-secondary to-transparent bg-[length:200%_100%]" />
            </span>
          </div>

          <ol className="grid gap-5 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} as="li" delay={i * 110} className="h-full">
                <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lifted lg:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-heading text-lg font-extrabold text-white shadow-brand transition-transform duration-300 group-hover:scale-110">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-primary-light px-2.5 py-1 text-[12px] font-bold text-primary">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                    {item.text}
                  </p>

                  {/* Hover arrow */}
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    What you get
                    <span>&rarr;</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Inline CTA */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-border bg-surface p-7 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary-light">
                <Check className="size-5 text-primary" strokeWidth={2.5} />
              </span>
              <p className="text-[15px] leading-relaxed text-foreground-muted">
                <span className="font-semibold text-foreground">
                  Not sure which service you need?
                </span>{" "}
                Call us and describe the problem — we will tell you honestly whether it needs
                professional treatment at all.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <a
                href={getCallLink()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-5 py-3 text-[15px] font-bold text-[#128C4B] transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}