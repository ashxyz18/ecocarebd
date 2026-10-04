"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  Leaf,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import { SERVICE_NAV } from "@/lib/nav-data";
import { PHONE_DISPLAY } from "@/lib/site";
import { getCallLink, getWhatsAppLink } from "@/lib/utils";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  // Close every menu when the route changes. Adjusting state during render is the
  // documented alternative to an effect for reacting to a changed prop.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(false);
    setMobileServices(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-primary text-white lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Clock className="size-3.5" />
              Sat&ndash;Thu 8:00&ndash;20:00 &middot; Fri 9:00&ndash;18:00
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <ShieldCheck className="size-3.5" />
              BPCA certified &middot; Free re-treatment guarantee
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Star className="size-3.5 fill-secondary text-secondary" />
              4.9/5 from 1,200+ reviews
            </span>
            <a href={getCallLink()} className="font-semibold hover:text-secondary transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-surface/85 backdrop-blur-xl shadow-soft"
            : "border-b border-transparent bg-surface/70 backdrop-blur-sm"
        )}
      >
        <ScrollProgress />
        <div className="container-page">
          <div className={cn("flex items-center justify-between transition-all", scrolled ? "h-16" : "h-[4.5rem] lg:h-20")}>
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Eco Care BD home">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-white shadow-brand transition-transform group-hover:scale-105 lg:size-11">
                <Leaf className="size-5 lg:size-[22px]" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[19px] font-extrabold tracking-tight text-foreground lg:text-[21px]">
                  Eco Care<span className="text-primary">BD</span>
                </span>
                <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-muted sm:block">
                  Pest &middot; Hygiene &middot; Cleaning
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {nav.map((item) => {
                if (item.mega) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(true)}
                      onMouseLeave={() => setOpenMenu(false)}
                    >
                      <Link
                        href={item.href}
                        onFocus={() => setOpenMenu(true)}
                        aria-expanded={openMenu}
                        aria-haspopup="true"
                        className={cn(
                          "flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-semibold transition-colors",
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground/85 hover:text-primary"
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn("size-3.5 transition-transform", openMenu && "rotate-180")} />
                      </Link>

                      {openMenu && (
                        <div className="absolute left-1/2 top-full z-50 w-[42rem] -translate-x-1/2 pt-3">
                          <div className="animate-fade-in overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1 p-4">
                              {SERVICE_NAV.map((group) => (
                                <div key={group.title} className="py-1">
                                  <p className="mb-1.5 px-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                                    {group.title}
                                  </p>
                                  {group.items.map((svc) => (
                                    <Link
                                      key={svc.href}
                                      href={svc.href}
                                      className="flex items-start gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-primary-light"
                                    >
                                      <span className="mt-0.5 text-lg leading-none" aria-hidden="true">
                                        {svc.icon}
                                      </span>
                                      <span className="min-w-0">
                                        <span className="block text-sm font-semibold text-foreground">
                                          {svc.label}
                                        </span>
                                        <span className="block truncate text-xs text-foreground-muted">
                                          {svc.blurb}
                                        </span>
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t border-border bg-surface-alt px-5 py-3">
                              <p className="text-xs text-foreground-muted">
                                Not sure what you need? We&apos;ll inspect free of charge.
                              </p>
                              <Link
                                href="/contact"
                                className="shrink-0 text-sm font-bold text-primary hover:underline"
                              >
                                Get a free inspection &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3.5 py-2 text-[15px] font-semibold transition-colors",
                      isActive(item.href) ? "text-primary" : "text-foreground/85 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary-light"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Book a service
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-xl border border-border text-foreground lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="animate-fade-in max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-surface lg:hidden"
          >
            <nav className="container-page space-y-1 py-4" aria-label="Mobile">
              {nav.map((item) => {
                if (item.mega) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setMobileServices((v) => !v)}
                        aria-expanded={mobileServices}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn("size-4 transition-transform", mobileServices && "rotate-180")}
                        />
                      </button>
                      {mobileServices && (
                        <div className="animate-fade-in space-y-3 rounded-xl bg-surface-alt p-3">
                          {SERVICE_NAV.map((group) => (
                            <div key={group.title}>
                              <p className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                                {group.title}
                              </p>
                              <div className="space-y-0.5">
                                {group.items.map((svc) => (
                                  <Link
                                    key={svc.href}
                                    href={svc.href}
                                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground/90 hover:bg-primary-light"
                                  >
                                    <span aria-hidden="true">{svc.icon}</span>
                                    {svc.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-semibold",
                      isActive(item.href)
                        ? "bg-primary-light text-primary"
                        : "text-foreground hover:bg-surface-alt"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="grid grid-cols-2 gap-2.5 pt-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-3 text-sm font-bold text-primary"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white"
                >
                  Book now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
