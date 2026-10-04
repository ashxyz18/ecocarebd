import { SERVICES, type ServiceCategory } from "./services";

export const SERVICE_NAV: { title: string; items: { label: string; href: string; blurb: string; icon: string }[] }[] = [
  {
    title: "Pest Control",
    items: SERVICES.filter((s) => s.category === "Pest Control").map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
      blurb: s.tagline,
      icon: s.icon,
    })),
  },
  {
    title: "Cleaning & Maintenance",
    items: SERVICES.filter((s) => s.category !== "Pest Control").map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
      blurb: s.tagline,
      icon: s.icon,
    })),
  },
];

export const FOOTER_NAV = {
  pest: SERVICE_NAV[0].items,
  clean: SERVICE_NAV[1].items,
  company: [
    { label: "About Eco Care BD", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Why choose us", href: "/about#why-us" },
    { label: "Service areas", href: "/service-areas" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Gallery", href: "/gallery" },
    { label: "Offers & coupons", href: "/offers" },
    { label: "Service areas", href: "/service-areas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipping & Service Policy", href: "/service-policy" },
  ],
};

export function categorySlug(cat: ServiceCategory) {
  return cat.toLowerCase().replace(/\s+/g, "-");
}
