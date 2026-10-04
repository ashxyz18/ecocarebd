"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpDown, Clock, ShieldCheck, Wallet } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

type SortKey = "category" | "price" | "time";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "category", label: "Category" },
  { key: "price", label: "Price" },
  { key: "time", label: "Duration" },
];

/** Extracts the leading number from "৳1,800" / "৳12,000" for sorting. */
function numeric(value: string): number {
  const match = value.replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

export default function ServiceTable() {
  const [sort, setSort] = useState<SortKey>("category");

  const rows = useMemo(() => {
    const sorted = [...SERVICES];
    if (sort === "price") {
      sorted.sort((a, b) => numeric(a.priceFrom) - numeric(b.priceFrom));
    } else if (sort === "time") {
      sorted.sort((a, b) => numeric(a.duration) - numeric(b.duration));
    } else {
      sorted.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    }
    return sorted;
  }, [sort]);

  return (
    <section className="border-t border-border bg-surface-alt py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[24px] sm:text-3xl">Compare all services at a glance</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-foreground-muted">
              Sort by category, price or duration. Every price is a starting point — your written
              quote is confirmed after inspection.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[13px] font-semibold text-foreground-muted">Sort by</span>
            <div className="flex gap-1 rounded-xl border border-border bg-surface p-1">
              {SORTS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSort(s.key)}
                  aria-pressed={sort === s.key}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-bold transition-colors",
                    sort === s.key
                      ? "bg-primary text-white"
                      : "text-foreground-muted hover:bg-primary-light hover:text-primary"
                  )}
                >
                  {sort === s.key && <ArrowUpDown className="size-3.5" aria-hidden="true" />}
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop table */}
        <div className="mt-9 hidden overflow-hidden rounded-2xl border border-border bg-surface lg:block">
          <table className="w-full text-left">
            <caption className="sr-only">
              All Eco Care BD services with category, starting price, duration and guarantee
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th scope="col" className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  Service
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  Category
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Wallet className="size-3.5 text-primary" />
                    From
                  </span>
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    Duration
                  </span>
                </th>
                <th scope="col" className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-foreground-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-primary" />
                    Guarantee
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((s, i) => (
                <tr
                  key={s.slug}
                  className="animate-fade-in transition-colors hover:bg-primary-light/40"
                  style={{ animationDelay: `${Math.min(i, 8) * 30}ms` }}
                >
                  <th scope="row" className="px-5 py-4 font-normal">
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-3 font-bold text-foreground hover:text-primary"
                    >
                      <span className="text-xl" aria-hidden="true">
                        {s.icon}
                      </span>
                      <span className="group-hover:underline">{s.name}</span>
                    </Link>
                  </th>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-primary-light px-2.5 py-1 text-[12px] font-bold text-primary">
                      {s.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-heading text-[15px] font-extrabold text-foreground">
                    {s.priceFrom}
                  </td>
                  <td className="px-5 py-4 text-[15px] text-foreground-muted">{s.duration}</td>
                  <td className="px-5 py-4 text-[14px] text-foreground-muted">{s.guarantee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-9 grid gap-4 lg:hidden">
          {rows.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="animate-fade-in block rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              style={{ animationDelay: `${Math.min(i, 8) * 30}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold text-foreground">{s.name}</h3>
                  <span className="mt-1 inline-block rounded-full bg-primary-light px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    {s.category}
                  </span>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-foreground-muted">
                    From
                  </dt>
                  <dd className="mt-0.5 font-heading text-[15px] font-extrabold text-foreground">
                    {s.priceFrom}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-foreground-muted">
                    Duration
                  </dt>
                  <dd className="mt-0.5 text-[14px] font-semibold text-foreground">
                    {s.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-foreground-muted">
                    Warranty
                  </dt>
                  <dd className="mt-0.5 text-[13px] text-foreground">{s.guarantee}</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}