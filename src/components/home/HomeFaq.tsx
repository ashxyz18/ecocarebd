import Link from "next/link";
import { FAQS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function HomeFaq() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Questions"
                title="Straight answers before you book"
                description="Pricing, safety, timing and guarantees — the things people actually ask before hiring a pest control company."
                action={{ label: "Read all FAQs", href: "/faq" }}
              />
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <FaqAccordion items={FAQS.slice(0, 6)} />
            <p className="mt-6 text-[15px] text-foreground-muted">
              Still unsure?{" "}
              <Link href="/contact" className="font-bold text-primary hover:underline">
                Ask us directly
              </Link>{" "}
              &mdash; we answer honestly, even when it means telling you a service is not worth paying
              for.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}