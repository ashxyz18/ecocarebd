import Link from "next/link";
import { ArrowRight, Bug, Droplets, ShieldCheck } from "lucide-react";
import { BLOG_POSTS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ARTICLE_ICONS = [Bug, ShieldCheck, Droplets];

export default function BlogPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Useful advice"
            title="Latest from the Eco Care journal"
            description="Practical guidance from our pest and hygiene specialists."
            action={{ label: "Read all articles", href: "/blog" }}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, index) => {
            const Icon = ARTICLE_ICONS[index % ARTICLE_ICONS.length];
            return (
              <Reveal key={post.slug} delay={index * 80} as="article" className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted">
                  <div className="relative grid h-40 place-items-center overflow-hidden bg-primary-dark">
                    <span className="absolute -left-7 -top-16 size-44 rounded-full border border-white/10" aria-hidden="true" />
                    <span className="absolute -bottom-20 -right-4 size-48 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      {post.category}
                    </span>
                    <Icon className="relative size-12 text-secondary" strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[12px] font-semibold text-foreground-muted">
                      {post.date} <span aria-hidden="true">·</span> {post.readTime}
                    </p>
                    <h3 className="mt-3 text-[18px] font-bold leading-snug">
                      <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-foreground-muted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wide text-primary"
                    >
                      Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
