import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const PHOTOS = [
  {
    title: "Outdoor pest treatment",
    description: "Targeted fumigation around a home",
    image:
      "https://images.pexels.com/photos/19789841/pexels-photo-19789841/free-photo-of-smoke-used-for-pest-control.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Pest control specialist using a smoke machine outside a house",
    href: "/services/fumigation-services",
    credit: "Garda Pest Control Indonesia",
    source: "https://www.pexels.com/photo/smoke-used-for-pest-control-19789841/",
  },
  {
    title: "Indoor fumigation",
    description: "Careful treatment in a living space",
    image:
      "https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Professional in protective gear fumigating a modern living room",
    href: "/services/fumigation-services",
    credit: "Michelangelo Buonarroti",
    source: "https://www.pexels.com/photo/person-fumigating-a-living-space-4176541/",
  },
  {
    title: "Commercial pest control",
    description: "Fogging for a large indoor space",
    image:
      "https://images.pexels.com/photos/36302077/pexels-photo-36302077/free-photo-of-worker-fumigating-industrial-warehouse.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Worker using a fogging machine for pest control in a warehouse",
    href: "/services/fumigation-services",
    credit: "Arjun Gk",
    source: "https://www.pexels.com/photo/worker-fumigating-industrial-warehouse-36302077/",
  },
];

export default function HomeShowcase() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our recent projects"
              title="Protection for every kind of space."
              description="See the kinds of residential and commercial pest treatments our team provides."
            />
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-primary transition-colors hover:text-primary-hover"
            >
              Explore the gallery <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 75}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted">
                <Link href={photo.href} className="group relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/10" />
                  <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                    <span>
                      <span className="block text-[18px] font-extrabold">{photo.title}</span>
                      <span className="mt-1 block text-[13px] font-medium text-white/80">
                        {photo.description}
                      </span>
                    </span>
                    <ArrowUpRight className="mb-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
                <figcaption className="px-4 py-3">
                  <a
                    href={photo.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground-muted transition-colors hover:text-primary"
                  >
                    Photo by {photo.credit} / Pexels <ExternalLink className="size-3" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-[12px] text-foreground-muted">
          Photos are illustrative stock imagery and do not show Eco Care BD jobs.
        </p>
      </div>
    </section>
  );
}
