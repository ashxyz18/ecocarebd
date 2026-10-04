import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => !["Engr.", "Dr.", "Md."].includes(part))
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamPreview() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="The people behind the work"
            title="Meet the Eco Care team"
            description="Technical experts and a local operations team, backed by trained field technicians across Chattogram."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person, index) => (
            <Reveal key={person.name} delay={index * 70} as="article" className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted">
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-primary-light">
                  <span className="absolute -left-8 -top-16 size-44 rounded-full bg-white/55" aria-hidden="true" />
                  <span className="absolute -bottom-20 -right-5 size-44 rounded-full bg-secondary/30" aria-hidden="true" />
                  <span className="relative grid size-24 place-items-center rounded-full border-4 border-white bg-primary font-heading text-2xl font-extrabold text-white shadow-brand transition-transform group-hover:scale-105">
                    {initials(person.name)}
                  </span>
                </div>
                <div className="bg-primary px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-wide text-white">
                  {person.role}
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-bold leading-snug">{person.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground-muted">{person.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:underline"
          >
            More about our team <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
