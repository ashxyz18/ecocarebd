import { STATS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-alt">
      {/* Decorative gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent)]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="group flex flex-col items-center border-border px-4 py-8 text-center sm:py-10 lg:border-l lg:first:border-l-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="w-full">
                <span className="block font-heading text-[32px] font-extrabold leading-none text-primary transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                  <Counter value={stat.value} />
                </span>
                <span className="mt-2.5 block text-[15px] font-bold text-foreground">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[13px] text-foreground-muted">{stat.sub}</span>

                {/* Underline that grows on hover */}
                <span
                  className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-14 group-hover:bg-primary"
                  aria-hidden="true"
                />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}