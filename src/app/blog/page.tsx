import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Pest Control Blog | Practical Guides for Chattogram Homes",
  description:
    "Practical pest control, water hygiene and home maintenance advice from Eco Care BD's entomology team. Dengue prevention, termite signs, bed bug prep, AC care.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides that actually help"
        description="Written by our entomology and operations team for homeowners and business owners in Chattogram. No fluff, no product pushing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lifted lg:grid-cols-2"
            >
              <div className="relative grid aspect-4/3 place-items-center overflow-hidden bg-primary-dark text-7xl lg:aspect-auto lg:min-h-72">
                <span aria-hidden="true">{featured.icon}</span>
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[12px] font-bold text-white">
                  Featured
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 lg:p-10">
                <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
                  {featured.category}
                </p>
                <h2 className="mt-3 text-[24px] leading-tight sm:text-[30px]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-foreground-muted">
                  {featured.excerpt}
                </p>
                <PostMeta post={featured} className="mt-6" />
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-primary">
                  Read the guide
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80} as="article" className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                  <div className="grid aspect-16/9 place-items-center bg-surface-alt text-5xl">
                    <span aria-hidden="true">{post.icon}</span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12px] font-bold uppercase tracking-wide text-primary">
                      {post.category}
                    </p>
                    <h2 className="mt-2 text-[18px] font-bold leading-snug">
                      <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                      {post.excerpt}
                    </p>
                    <PostMeta post={post} className="mt-5 border-t border-border pt-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Read a guide and spotted a problem?"
        subheading="Send us a photo on WhatsApp. We will identify it free of charge and tell you whether it needs treatment."
      />
    </>
  );
}

function PostMeta({
  post,
  className,
}: {
  post: { author: string; readTime: string; date: string };
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-foreground-muted ${className ?? ""}`}>
      <span className="inline-flex items-center gap-1.5">
        <User className="size-3.5" />
        {post.author}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5" />
        {post.readTime}
      </span>
      <time dateTime={post.date}>
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </time>
    </div>
  );
}