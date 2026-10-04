import type { Metadata } from "next";
import { MapPin, Check, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { getAreas, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Service Areas | Pest Control Coverage in Chattogram & Nearby",
  description:
    "Eco Care BD covers all of Chattogram city plus Hathazari, Raojan, Anwara and Boalkhali. Same-day slots in the city, next-day in nearby upazilas, nationwide for project work.",
  alternates: { canonical: "/service-areas" },
};

const ZONES = [
  {
    name: "Chattogram city — central",
    turnaround: "Same day",
    areas: ["GEC Circle", "Panchpathi", "Agrabad", "Chattogram Oyster Bay", "Khan Bahadur Sikder", "Dampara", "Sadarghat", "Akbar Shah"],
  },
  {
    name: "Chattogram city — north & east",
    turnaround: "Same day",
    areas: ["Sagarika", "Khulna", "Hazari", "Kazir Dewri", "Fazlul Haque Road", "Shoriabad", "Bozraho Ghona", "Madani"],
  },
  {
    name: "Chattogram city — south & west",
    turnaround: "Same day",
    areas: ["Chandgaon", "Patenga", "Anderkilla", "Kaptai Road", "Sagarika New", "Baishakhahari"],
  },
  {
    name: "Nearby upazilas",
    turnaround: "Next day",
    areas: ["Hathazari", "Raojan", "Anwara", "Boalkhali", "Kaptai", "Mirandapur"],
  },
];

export default function ServiceAreasPage() {
  const all = getAreas();

  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Where we work"
        description="All of Chattogram city on a same-day basis, the surrounding upazilas next-day, and nationwide for hospital, warehouse and industrial projects."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service areas", href: "/service-areas" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            {ZONES.map((zone, i) => (
              <Reveal key={zone.name} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="flex items-center gap-2.5 text-[19px] font-bold">
                      <MapPin className="size-5 text-primary" />
                      {zone.name}
                    </h2>
                    <span className="rounded-full bg-primary-light px-3 py-1.5 text-[12px] font-bold text-primary">
                      {zone.turnaround}
                    </span>
                  </div>

                  <ul className="mt-5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                    {zone.areas.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-[15px] text-foreground-muted">
                        <Check className="size-4 shrink-0 text-primary" strokeWidth={2.5} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full list */}
          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl border border-border bg-surface-alt p-6 sm:p-8">
              <h2 className="text-[19px] font-bold">Complete area list</h2>
              <p className="mt-2 text-[15px] text-foreground-muted">
                Not listed? We almost certainly still cover it — ask us.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {all.map((a) => (
                  <span
                    key={a}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-[14px] font-medium text-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Response times */}
          <Reveal delay={160}>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                { title: "Same day", text: "Inside Chattogram city for standard bookings, and usually within 2 hours for genuine emergencies." },
                { title: "Next day", text: "Hathazari, Raojan, Anwara, Boalkhali and Kaptai, scheduled around technician routes." },
                { title: "Nationwide", text: "Hospital, warehouse, factory and multi-building projects anywhere in Bangladesh." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary-light">
                    <Clock className="size-5 text-primary" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Not covered note */}
          <Reveal delay={200}>
            <div className="mt-6 rounded-2xl bg-primary-dark p-7 text-white">
              <h2 className="text-xl font-bold">Travelling from outside Chattogram?</h2>
              <p className="mt-2.5 max-w-2xl text-[16px] leading-relaxed text-white/70">
                We travel for godowns, factories, hospitals, schools and multi-building contracts.
                Send the site location, area size and the service you need, and we will confirm
                feasibility and a written quotation.
              </p>
              <a
                href={getWhatsAppLink("Hello Eco Care BD, I need service outside Chattogram. Location and details:")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-bold text-primary-dark transition-transform hover:-translate-y-0.5"
              >
                Ask about a project
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Check availability for your address"
        subheading="Call or WhatsApp with your area and the service you need. We will confirm the next available slot."
      />
    </>
  );
}