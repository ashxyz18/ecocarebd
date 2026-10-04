import type { Metadata } from "next";
import { Briefcase, GraduationCap, Wallet, Clock, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers | Pest Control Technician Jobs in Chattogram",
  description:
    "Join Eco Care BD as a pest control technician, fumigation operator, driver or office manager in Chattogram. Above-average salary, paid training, real progression.",
  alternates: { canonical: "/careers" },
};

const ROLES = [
  {
    title: "Pest Control Technician",
    type: "Full-time",
    salary: "৳18,000 – ৳28,000 + commission",
    location: "Chattogram city",
    urgent: true,
  },
  {
    title: "Fumigation Operator (licensed)",
    type: "Full-time",
    salary: "৳25,000 – ৳38,000 + commission",
    location: "Chattogram / nationwide projects",
    urgent: false,
  },
  {
    title: "Cleaning Team Member",
    type: "Full-time / part-time",
    salary: "৳14,000 – ৳20,000",
    location: "Chattogram city",
    urgent: true,
  },
  {
    title: "Driver / Logistics",
    type: "Full-time",
    salary: "৳16,000 – ৳22,000",
    location: "Chattogram",
    urgent: false,
  },
  {
    title: "Office / Customer Care Executive",
    type: "Full-time",
    salary: "৳18,000 – ৳26,000",
    location: "Chattogram (GEC Circle office)",
    urgent: false,
  },
];

const PERKS = [
  { Icon: Wallet, title: "Paid training", text: "Certification and product training paid for by us, not deducted from your salary." },
  { Icon: Clock, title: "Overtime paid", text: "Evening, Friday and emergency call-outs are paid, and Sunday is an alternate off." },
  { Icon: Briefcase, title: "Real progression", text: "Technician to team leader to area supervisor is a defined path with a published pay scale." },
  { Icon: GraduationCap, title: "Certification", text: "We fund BPCA and industry certification for anyone who wants it." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work with Eco Care BD"
        description="We hire people who want to do careful work and be paid properly for it. If you take pride in a job done properly, you will fit here."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          {/* Perks */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary-light text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-[17px] font-bold">{title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Roles */}
          <div className="mt-14">
            <Reveal>
              <h2 className="text-[24px] sm:text-3xl">Open positions</h2>
              <p className="mt-2.5 text-[16px] text-foreground-muted">
                Salary ranges are published up front. We do not negotiate down.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {ROLES.map((role, i) => (
                <Reveal key={role.title} delay={i * 70}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-[18px] font-bold">{role.title}</h3>
                        {role.urgent && (
                          <span className="rounded-full bg-accent-light px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-hover">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-[15px] text-foreground-muted">
                        {role.type} &middot; {role.location}
                      </p>
                      <p className="mt-2 font-heading text-[16px] font-extrabold text-primary">
                        {role.salary}
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink(
                        `Hello Eco Care BD, I would like to apply for the "${role.title}" position. My name and experience:`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon className="size-[18px]" />
                      Apply now
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <Reveal delay={120}>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-alt p-6 sm:p-7">
                <h2 className="text-[19px] font-bold">What we look for</h2>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Honesty about what you have and have not done before",
                    "Willingness to learn product handling safely",
                    "Presentable and polite with customers",
                    "Comfortable working in residential properties",
                    "Able to read and write Bangla; English is a plus",
                    "Owning a motorcycle is an advantage but not required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface-alt p-6 sm:p-7">
                <h2 className="text-[19px] font-bold">How hiring works</h2>
                <ol className="mt-5 space-y-4">
                  {[
                    "Send your name, age, area and experience on WhatsApp.",
                    "Short call or visit to the office — 15 minutes, no tests.",
                    "One paid half-day trial with an experienced technician.",
                    "If it works for both sides, you start the following week.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary font-heading text-[13px] font-extrabold text-white">
                        {i + 1}
                      </span>
                      <p className="text-[15px] leading-relaxed text-foreground-muted">{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-border pt-5 text-[15px] text-foreground-muted">
                  Nothing here charges you for training, uniform or certification. Ever.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="No role that fits?"
        subheading="Send us your details anyway. We hire ahead of need for people we have already trained, and that is much faster than hiring from scratch."
      />
    </>
  );
}