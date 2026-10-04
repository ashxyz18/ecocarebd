import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import ServiceFinder from "@/components/home/ServiceFinder";
import StatsBar from "@/components/home/StatsBar";
import ServiceTabs from "@/components/home/ServiceTabs";
import HomeShowcase from "@/components/home/HomeShowcase";
import TrustSection from "@/components/home/TrustSection";
import PricingPreview from "@/components/home/PricingPreview";
import TeamPreview from "@/components/home/TeamPreview";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import HomeFaq from "@/components/home/HomeFaq";
import FinalCta from "@/components/home/FinalCta";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pest Control & Cleaning Services in Chattogram | Eco Care BD",
  description:
    "Certified pest control, water tank cleaning, deep cleaning, fumigation and AC maintenance in Chattogram. Child & pet safe, fixed prices, free re-treatment guarantee. Book a free inspection.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eco Care BD services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: absoluteUrl(`/services/${s.slug}`),
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Chattogram" },
        offers: {
          "@type": "Offer",
          price: s.priceFrom.replace(/[^\d]/g, ""),
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        q: "How much does pest control cost in Chattogram?",
        a: "Most single-visit treatments start from ৳1,200–৳1,800 depending on the pest and property size. Termite treatment starts from ৳3,500 because it needs baiting plus a barrier and monitoring. You always get a written fixed price before work starts.",
      },
      {
        q: "Is your treatment safe for children and pets?",
        a: "Yes. We use child-safe, low-toxicity products and apply them with proper equipment rather than spraying the air. You will be told exactly what was used and when it is safe to re-enter — typically after 4–8 hours of ventilation.",
      },
      {
        q: "What does the free re-treatment guarantee mean?",
        a: "If the same problem returns within the guarantee period for that service — 30 days for most pest control, 90 days for rodent proofing, up to 5 years for the termite barrier — we return and re-treat at no charge.",
      },
      {
        q: "How quickly can you come out for an emergency?",
        a: "For genuine emergencies inside Chattogram city we aim for same-day response, usually within 2 hours of your call. You can reach us on 01752-510002 or WhatsApp at any hour, including Fridays.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Cash, bKash, Nagad, Rocket, card and bank transfer. Corporate and monthly contract clients get proper invoices with payment terms.",
      },
    ].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeHero />
      <ServiceFinder />
      <ServiceTabs />
      <TrustSection />
      <StatsBar />
      <HomeShowcase />
      <PricingPreview />
      <TeamPreview />
      <Testimonials />
      <BlogPreview />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
