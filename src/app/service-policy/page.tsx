import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Service & Delivery Policy | Eco Care BD",
  description:
    "Coverage areas, scheduling windows, emergency response times, service preparation and cancellation terms for all Eco Care BD services.",
  alternates: { canonical: "/service-policy" },
};

export default function ServicePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Service & Delivery Policy"
      breadcrumbLabel="Service Policy"
      description="Where we operate, when we arrive, what we need from you, and how emergency response works."
      updated="1 January 2026"
      sections={[
        {
          heading: "Service coverage",
          paragraphs: [
            "We provide same-day service across Chattogram city, next-day service in Hathazari, Raojan, Anwara, Boalkhali and Kaptai, and travel anywhere in Bangladesh for hospital, warehouse, factory, school and multi-building projects.",
            "If you are outside these areas and want a home service, contact us before booking — we will confirm feasibility honestly rather than take a booking we cannot fulfil.",
          ],
        },
        {
          heading: "Scheduling",
          paragraphs: [
            "Standard bookings are scheduled within 24 to 48 hours. You receive a confirmed date and service window in writing before the visit.",
            "Emergency response inside Chattogram city is typically within two hours of your call for genuine emergencies such as wasp nests, rodents in food storage areas, or venomous insects.",
          ],
        },
        {
          heading: "What we need from you",
          paragraphs: [
            "To complete a service properly we need safe, lawful access to the areas involved. For water tank cleaning this means access to the tank, an available water supply and someone on site. For fumigation this means the treated area to be vacated and, where relevant, protected equipment to be covered or relocated.",
            "For services requiring preparation — most importantly bed bug treatment — the written preparation instructions must be followed before we arrive. This is the single biggest factor in whether a treatment succeeds.",
          ],
        },
        {
          heading: "Duration and delays",
          paragraphs: [
            "Quoted durations are estimates for a standard job. Access difficulties, unusually heavy infestation, or the discovery of a different problem can extend the visit. If this happens, we explain and get approval before doing additional work — we never extend a visit and bill for it without consent.",
            "If we are running late, we call or WhatsApp you with a revised arrival time.",
          ],
        },
        {
          heading: "Guarantee periods",
          paragraphs: [
            "Each service carries its own guarantee period, stated on the service page and printed on your invoice. If the same problem returns within that period, we re-treat at no charge.",
            "Where a second visit is required, it must fall within the stated guarantee period. Please keep your invoice — it is your record of the guarantee.",
          ],
        },
        {
          heading: "Safety and compliance",
          paragraphs: [
            "We use registered, legally approved pest control products and apply them at concentrations appropriate to the environment. All technicians carry identification and are uniformed.",
            "For hospital, food industry and institutional work we provide the certification and air-clearance documentation your auditor requires. It is your responsibility to confirm your own regulatory requirements with us before booking, and we will tell you honestly if a treatment will not satisfy them.",
          ],
        },
        {
          heading: "Service limitations",
          paragraphs: [
            "Pest control reduces and removes infestations but cannot prevent new pests arriving from outside the treated area. We do not guarantee against re-infestation caused by travel, new construction, neighbouring properties or introduction of untreated materials into the site.",
            "We cannot guarantee against structural damage that existed before treatment, or damage caused where a client was advised of a risk in writing and chose to postpone treatment.",
          ],
        },
        {
          heading: "Complaints",
          paragraphs: [
            "If something is wrong, contact us on +880 1752-510002 within seven days, ideally with photographs. We will investigate, explain what happened and put it right.",
            "We would much rather hear about a problem than read about it later.",
          ],
        },
      ]}
    />
  );
}