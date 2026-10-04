import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, ArrowLeft, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { POSTS, getPost, POST_SLUGS } from "@/lib/posts";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const service = getService(post.relatedService);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": "https://ecocarebd.com/#organization" },
    mainEntityOfPage: `https://ecocarebd.com/blog/${post.slug}`,
    articleSection: post.category,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-foreground-muted">
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
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </PageHero>

      <article className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="border-l-4 border-primary pl-5 text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px]">
                {post.excerpt}
              </p>
            </Reveal>

            {post.body.map((section, i) => (
              <Reveal key={section.heading} delay={i * 40} as="section" className="mt-10">
                <h2 className="text-[21px] font-bold sm:text-2xl">{section.heading}</h2>
                {section.paragraphs.map((para) => (
                  <p key={para} className="mt-4 text-[16px] leading-[1.75] text-foreground-muted sm:text-[17px]">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 space-y-2.5 rounded-2xl border border-border bg-surface-alt p-6">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-foreground-muted">
                        <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {/* Service CTA */}
            {service && (
              <Reveal as="section" className="mt-12">
                <div className="rounded-2xl border border-primary/25 bg-primary-light p-6 sm:p-7">
                  <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
                    Related service
                  </p>
                  <h2 className="mt-2 text-[20px] font-bold sm:text-[22px]">{service.name}</h2>
                  <p className="mt-2.5 text-[16px] leading-relaxed text-foreground-muted">
                    {service.tagline}. {service.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Book free inspection
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-5 py-3 text-[15px] font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Service details
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}

            {/* FAQs */}
            <Reveal as="section" className="mt-12">
              <h2 className="text-[21px] font-bold sm:text-2xl">Common questions</h2>
              <FaqAccordion items={post.faqs} className="mt-5" />
            </Reveal>

            <Reveal as="section" className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
              >
                <ArrowLeft className="size-4" />
                All articles
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-border bg-surface-alt py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[22px] sm:text-2xl">Read next</h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {r.icon}
                  </span>
                  <p className="mt-3 text-[12px] font-bold uppercase tracking-wide text-primary">
                    {r.category}
                  </p>
                  <h3 className="mt-1.5 text-[17px] font-bold leading-snug">{r.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-foreground-muted">
                    {r.excerpt}
                  </p>
                  <span className="mt-4 text-[13px] font-semibold text-foreground-muted">
                    {r.readTime}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        service={service?.name}
        heading="Need it handled professionally?"
        subheading="Free inspection in Chattogram, fixed price before we start, and a written guarantee on every job."
      />
    </>
  );
}