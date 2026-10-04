import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span
                  className={cn(
                    "font-semibold",
                    tone === "light" ? "text-white" : "text-foreground"
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      tone === "light"
                        ? "text-white/60 hover:text-white"
                        : "text-foreground-muted hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight
                    className={cn(
                      "size-3.5",
                      tone === "light" ? "text-white/40" : "text-foreground-muted/50"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  icon,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  image?: string;
  icon?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {/* Layered background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 -top-24 size-[400px] rounded-full bg-primary-light/80 blur-3xl animate-float" />
        <div className="absolute -right-20 top-8 size-[340px] rounded-full bg-secondary-light/70 blur-3xl animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(221 229 241 / 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgb(221 229 241 / 0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 76% 66% at 50% 34%, black, transparent)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-page relative py-10 sm:py-14 lg:py-20">
        {breadcrumbs.length > 0 && (
          <div className="mb-7">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div
          className={cn(
            "flex flex-col gap-8",
            image ? "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12" : "",
            align === "center" && !image ? "items-center text-center" : ""
          )}
        >
          <div className={cn(image ? "lg:col-span-7" : "max-w-3xl")}>
            <Eyebrow>{eyebrow}</Eyebrow>

            <h1 className="mt-5 flex items-start justify-center gap-3 text-[30px] leading-[1.1] sm:text-[42px] lg:text-[48px]">
              {icon && (
                <span className="mt-1 text-[0.7em] leading-none sm:mt-2" aria-hidden="true">
                  {icon}
                </span>
              )}
              <span>{title}</span>
            </h1>

            {description && (
              <p
                className={cn(
                  "mt-5 text-[17px] leading-relaxed text-foreground-muted",
                  align === "center" && !image ? "mx-auto max-w-2xl" : "max-w-2xl"
                )}
              >
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-surface-alt shadow-lifted lg:aspect-3/2">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] border border-primary/20"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}