import PageHero from "@/components/ui/PageHero";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export default function LegalPage({
  title,
  eyebrow,
  description,
  updated,
  breadcrumbLabel,
  sections,
}: {
  title: string;
  eyebrow: string;
  description: string;
  updated: string;
  breadcrumbLabel: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: breadcrumbLabel, href: `/${breadcrumbLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="rounded-xl border border-border bg-surface-alt px-5 py-3.5 text-[14px] text-foreground-muted">
              Last updated: <span className="font-semibold text-foreground">{updated}</span>
            </p>

            <nav aria-label="On this page" className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
                On this page
              </p>
              <ol className="mt-3 space-y-1.5">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-[15px] text-foreground-muted transition-colors hover:text-primary"
                    >
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-10 space-y-10">
              {sections.map((section, i) => (
                <section key={section.heading} id={`section-${i + 1}`} className="scroll-mt-28">
                  <h2 className="text-[21px] font-bold sm:text-2xl">{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="mt-4 text-[16px] leading-[1.75] text-foreground-muted"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[16px] leading-relaxed text-foreground-muted"
                        >
                          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-primary/25 bg-primary-light p-6">
              <h2 className="text-[18px] font-bold">Questions about this policy?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                Contact us and we will explain any part of it in plain language.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:underline"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}