import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Target, Eye, Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/home/StatsBar";
import { TEAM, TRUST_POINTS, PROCESS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Eco Care BD | 15+ Years of Pest Control in Chattogram",
  description:
    "Eco Care BD has provided certified, family-safe pest control, water tank cleaning and deep cleaning in Chattogram since 2009. Meet our technical team and our guarantee.",
  alternates: { canonical: "/about" },
};

const MILESTONES = [
  {
    year: "2009",
    title: "Founded in Chattogram",
    text: "Started as a two-technician team serving GEC Circle and Agrabad, working mostly on water tank cleaning and cockroach control.",
  },
  {
    year: "2014",
    title: "BPCA certification",
    text: "Became a certified pest control operator and added termite baiting, after demand from homeowners with structural damage.",
  },
  {
    year: "2017",
    title: "Hospital fumigation division",
    text: "Built a licensed fumigation team for OT, CCU and ICU areas with documented clearance certificates for health audits.",
  },
  {
    year: "2020",
    title: "Own laboratory",
    text: "Opened a small formulation lab so we could test products against local pest strains before recommending them.",
  },
  {
    year: "2023",
    title: "50+ technicians",
    text: "Expanded to cover all of Chattogram city plus Hathazari, Raojan, Anwara and Boalkhali, with a 24/7 emergency line.",
  },
  {
    year: "Today",
    title: "12,400+ jobs completed",
    text: "Over 12,400 completed jobs across homes, offices, warehouses, factories and hospitals — with a 4.9/5 average rating.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Protecting homes. Purifying lives."
        description={`Eco Care BD has been solving pest, hygiene and water-quality problems across Chattogram since ${SITE.founded}. We built this company on one idea: if you cannot prove the work was done, we have not done it.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Story */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[24px] sm:text-3xl">Why Eco Care BD exists</h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-foreground-muted sm:text-[17px]">
                <p>
                  Eco Care BD started because too many families in Chattogram were being sold pest
                  control they did not need. Technicians would spray a whole house for a problem
                  confined to one kitchen corner, charge for a monthly plan they never delivered,
                  and leave without telling anyone when it was safe to walk back in.
                </p>
                <p>
                  We built the company the other way around. Every job starts with a free
                  inspection and photographic evidence. You get a written fixed price before
                  anything starts. You are told exactly what product went where, and when. And if the
                  problem comes back inside the guarantee period, we return and re-treat at no
                  charge — that is written on the invoice, not just said on a phone call.
                </p>
                <p>
                  That approach cost us revenue in the early years. We turned down plenty of jobs
                  that did not need professional treatment. What it bought us instead is a business
                  where roughly two thirds of our work now comes from referrals and repeat clients,
                  and an average rating of 4.9 out of 5.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface-alt p-5">
                  <Target className="size-6 text-primary" />
                  <h3 className="mt-3 text-[17px] font-bold">Our mission</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                    Make professional, safe pest control affordable and honest for every household in
                    Chattogram — and keep it accessible to small businesses that are usually
                    overlooked by the big companies.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface-alt p-5">
                  <Eye className="size-6 text-primary" />
                  <h3 className="mt-3 text-[17px] font-bold">Our vision</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                    To be the company Chattogram calls first, and to set a standard where proof,
                    fixed pricing and genuine safety are normal rather than exceptional.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-surface-alt shadow-lifted">
                <Image
                  src="/images/about-team.jpg"
                  alt="Eco Care BD technician team in Chattogram"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <Award className="size-6 text-primary" />
                  <p className="mt-3 text-[15px] font-bold">BPCA certified operator</p>
                  <p className="mt-1 text-[13px] text-foreground-muted">Since 2014</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <Check className="size-6 text-primary" />
                  <p className="mt-3 text-[15px] font-bold">Own formulation lab</p>
                  <p className="mt-1 text-[13px] text-foreground-muted">Since 2020</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBar />

      {/* Timeline */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[24px] sm:text-3xl">How we got here</h2>
            <p className="mt-3 max-w-2xl text-[16px] text-foreground-muted">
              Fifteen years, one decision at a time.
            </p>
          </Reveal>

          <ol className="relative mt-12 space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} as="li" delay={i * 70} className="relative pl-14">
                <span className="absolute left-0 top-1 grid size-10 place-items-center rounded-full border-2 border-primary bg-surface font-heading text-[13px] font-extrabold text-primary">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-surface-alt p-6">
                  <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
                    {m.year}
                  </p>
                  <h3 className="mt-1.5 text-[19px] font-bold">{m.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface-alt py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[24px] sm:text-3xl">What we stand for</h2>
            <p className="mt-3 max-w-2xl text-[16px] text-foreground-muted">
              Four commitments we do not compromise on, because they are the reason clients trust us.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="text-2xl" aria-hidden="true">
                    {t.icon}
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process recap */}
      <section id="why-us" className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[24px] sm:text-3xl">How every job runs</h2>
            <p className="mt-3 max-w-2xl text-[16px] text-foreground-muted">
              No exceptions, no shortcuts — the same documented process whether it is a two-bed
              flat or a factory floor.
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} as="li" delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="font-heading text-3xl font-extrabold text-primary/25">
                    {p.step}
                  </span>
                  <h3 className="mt-2 text-[17px] font-bold">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{p.text}</p>
                  <p className="mt-3 inline-block rounded-full bg-primary-light px-2.5 py-1 text-[12px] font-bold text-primary">
                    {p.duration}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 border-t border-border bg-surface-alt py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[24px] sm:text-3xl">Who you will be dealing with</h2>
            <p className="mt-3 max-w-2xl text-[16px] text-foreground-muted">
              Every technician is trained, uniformed and carries an ID card you can ask to see. The
              team below is responsible for the work that happens on your property.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary font-heading text-lg font-extrabold text-white">
                    {person.name
                      .replace(/^(Engr\.|Dr\.|Md\.)\s*/u, "")
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold leading-tight">{person.name}</h3>
                  <p className="mt-1 text-[14px] font-semibold text-primary">{person.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers nudge */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface-alt p-8 lg:flex-row lg:items-center lg:p-10">
              <div>
                <h2 className="text-[22px] sm:text-2xl">Work with us</h2>
                <p className="mt-2.5 max-w-xl text-[16px] leading-relaxed text-foreground-muted">
                  We hire technicians who want to do careful work and be paid properly for it.
                  Training provided, salary above industry average, and real career progression.
                </p>
              </div>
              <Link
                href="/careers"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                See open roles
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Ready to book?"
        subheading="Free inspection anywhere in Chattogram. Fixed price before we start, written guarantee on every job."
      />
    </>
  );
}