import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "primary",
}: {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
        tone === "primary"
          ? "bg-primary-light text-primary"
          : "bg-white/10 text-white ring-1 ring-inset ring-white/20",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "primary" ? "bg-primary" : "bg-secondary"
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "primary"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-[28px] leading-[1.15] sm:text-4xl lg:text-[42px]",
          tone === "light" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-[17px]",
            tone === "light" ? "text-white/70" : "text-foreground-muted",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
      {action && (
        <Link
          href={action.href}
          className={cn(
            "mt-1 inline-flex items-center gap-2 text-[15px] font-bold transition-colors",
            tone === "light"
              ? "text-white hover:text-secondary"
              : "text-primary hover:text-primary-hover"
          )}
        >
          {action.label}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}