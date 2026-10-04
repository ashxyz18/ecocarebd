import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { FOOTER_NAV } from "@/lib/nav-data";
import { SITE, PHONE_DISPLAY } from "@/lib/site";
import { getCallLink, getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface-alt">
      {/* Pre-footer CTA */}
      <div className="border-b border-border bg-primary-dark">
        <div className="container-page flex flex-col items-center justify-between gap-5 py-8 lg:flex-row lg:py-10">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl font-bold text-white lg:text-[28px]">
              Need a pest-free home today?
            </h2>
            <p className="mt-1.5 text-[15px] text-white/70">
              Free inspection in Chattogram. Response within 2 hours, 7 days a week.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={getCallLink()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-primary-dark transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-[15px] font-bold text-neutral-900 transition-transform hover:-translate-y-0.5"
            >
              Book online
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid size-11 place-items-center rounded-xl bg-primary text-white">
              <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-3.87 0-7-3.13-7-7 0-2.06.94-3.87 2.4-5.09.2 1.02.68 1.83 1.32 2.42.83.77 1.83 1.27 3.06 1.5-.6 1.02-1.42 1.83-2.45 2.42A6.98 6.98 0 0 0 12 20Z" />
              </svg>
            </span>
            <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
              Eco Care <span className="text-primary">BD</span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-foreground-muted">
            Chittagong&apos;s pest control and cleaning specialists since {SITE.founded}. Certified
            technicians, child-safe treatments, and a free re-treatment promise on every job.
          </p>

          <div className="mt-6 flex items-center gap-2.5">
            {[
              { href: SITE.social.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: SITE.social.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: SITE.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: SITE.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-foreground-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <nav className="lg:col-span-5" aria-label="Footer">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol title="Pest control" links={FOOTER_NAV.pest.slice(0, 6)} />
            <FooterCol title="Cleaning" links={[...FOOTER_NAV.clean.slice(0, 3), ...FOOTER_NAV.pest.slice(6, 8)]} />
            <div className="col-span-2 sm:col-span-1">
              <FooterCol title="Company" links={FOOTER_NAV.company} />
              <div className="mt-6">
                <FooterCol title="Resources" links={FOOTER_NAV.resources} />
              </div>
            </div>
          </div>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3.5 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <address className="not-italic leading-relaxed text-foreground-muted">
                {SITE.address.street}, {SITE.address.city} {SITE.address.postalCode}, Bangladesh
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <a href={getCallLink()} className="font-semibold text-foreground hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary"
              >
                WhatsApp us
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="text-foreground hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <span className="text-foreground-muted">{SITE.hoursDisplay}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-[13px] text-foreground-muted sm:flex-row">
          <p>
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_NAV.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-[15px]">
        {links.map((l) => (
          <li key={`${l.href}:${l.label}`}>
            <Link href={l.href} className="text-foreground-muted transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}