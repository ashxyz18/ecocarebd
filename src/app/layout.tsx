import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Eco Care BD | Pest Control & Cleaning Services in Chattogram",
    template: "%s | Eco Care BD",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "pest control Chittagong",
    "pest control Chattogram",
    "termite control Bangladesh",
    "bed bug treatment Chittagong",
    "cockroach control",
    "rodent control",
    "mosquito fogging dengue",
    "water tank cleaning",
    "deep cleaning service",
    "sofa carpet cleaning",
    "fumigation hospital",
    "AC repair maintenance",
    "Eco Care BD",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: SITE.url,
    siteName: SITE.name,
    title: "Eco Care BD | Pest Control & Cleaning in Chattogram",
    description: SITE.description,
    images: [{ url: "/og-image", width: 1200, height: 630, alt: "Eco Care BD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Care BD | Pest Control & Cleaning in Chattogram",
    description: SITE.description,
    images: ["/og-image"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "pest control",
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.founded),
  priceRange: "৳৳",
  currenciesAccepted: "BDT",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.linkedin, SITE.social.youtube],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          // Structured data for local SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}