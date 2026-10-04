import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Terms & Conditions | Eco Care BD",
  description:
    "The terms that apply when you book any Eco Care BD service: pricing, scheduling, access requirements, guarantee periods and cancellation.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      breadcrumbLabel="Terms & Conditions"
      description="The practical terms that apply to every booking, written to be readable rather than to protect us at your expense."
      updated="1 January 2026"
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "These terms apply to every pest control, cleaning, fumigation and maintenance service provided by Eco Care BD. When you book a service, you confirm that you have read and accepted them.",
            "Where a specific service has its own guarantee period or preparation requirement, that is confirmed in writing at the time of booking and takes precedence over anything general stated here.",
          ],
        },
        {
          heading: "Booking and confirmation",
          paragraphs: [
            "A booking is confirmed once we have given you a date, a written fixed price and a service window. Requests made through the website form or WhatsApp are treated as enquiries until we respond with confirmation.",
            "If we cannot attend on the requested date, we will offer the nearest available slot or cancel with a full refund of any advance paid.",
          ],
        },
        {
          heading: "Pricing",
          paragraphs: ["Prices quoted on this website are starting prices and are not a fixed quote for a specific job."],
          list: [
            "The price on your written quotation is the price you pay. It will not change without your approval.",
            "The quotation is based on the inspection findings and the property details you gave us.",
            "If conditions on site differ materially from what was described — for example a much larger infestation, restricted access, or additional units requiring separate treatment — we will stop, explain, and get your approval before doing any additional work.",
            "Payment is due on completion of the service unless a written contract states otherwise.",
          ],
        },
        {
          heading: "Access and preparation",
          paragraphs: [
            "You agree to provide safe and lawful access to the areas that require treatment on the agreed date. If access cannot be provided, the booking may need to be rescheduled, and a visit charge may apply where a technician has already travelled.",
            "Where a service requires preparation — bed bug treatment in particular — you agree to follow the written preparation instructions provided at booking. Treatment performed without the required preparation carries a materially lower success rate, and re-treatment in such cases may be chargeable.",
          ],
        },
        {
          heading: "Cancellation and rescheduling",
          paragraphs: [
            "You may cancel or reschedule free of charge by contacting us at least six hours before the visit window. Inside six hours, a visit charge of ৳500 may apply because the technician has already been allocated and routed.",
            "If you cancel due to a service failure on our part, no charge applies.",
          ],
        },
        {
          heading: "Guarantee and re-treatment",
          paragraphs: [
            "Our service pages state the guarantee period for each service. If the same problem returns within that period, we re-treat at no additional cost.",
            "The guarantee covers re-treatment of the same infestation at the same property. It does not cover a new or unrelated problem, damage caused by a third party after our visit, or a problem arising from circumstances we specifically flagged in writing before starting.",
            "If we are unable to resolve the problem after a second visit, we refund the treatment fee for the service in question.",
          ],
        },
        {
          heading: "Safety and re-entry",
          paragraphs: [
            "Every treatment we perform is chosen to be safe when used as instructed. You agree to follow the re-entry instructions given in writing at the time of treatment, to keep children and pets out of treated areas until we confirm it is safe, and to ventilate the space as instructed.",
            "Failure to observe re-entry instructions can affect both your safety and the effectiveness of the treatment.",
          ],
        },
        {
          heading: "Our limitations",
          paragraphs: [
            "Pest control reduces and removes infestations; it cannot guarantee that a pest will never return. New pests can arrive through travel, deliveries, neighbouring properties or new construction, and none of these are within our control.",
            "Our treatments are designed for the pest identified at inspection. If a different species is discovered during treatment, we will stop and quote separately rather than applying an unsuitable product.",
            "We are not liable for pre-existing structural damage, or for damage that results from delayed treatment where the client was advised earlier of a risk and chose to postpone.",
          ],
        },
        {
          heading: "Service types and reference prices",
          paragraphs: [
            "Published starting prices across our service range are listed below. Final pricing is always confirmed in writing after inspection.",
          ],
          list: SERVICES.map(
            (s) => `${s.name} — from ${s.priceFrom} (typical duration ${s.duration})`
          ),
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this website — text, photographs, logos and design — belongs to Eco Care BD. You may not reproduce it commercially without written permission.",
            "Photos of your own property taken during a service are yours to use however you wish.",
          ],
        },
        {
          heading: "Governing law and disputes",
          paragraphs: [
            "These terms are governed by the laws of Bangladesh. Any dispute will first be addressed through direct conversation, which resolves the overwhelming majority of issues.",
            "If a dispute cannot be resolved, it is subject to the jurisdiction of the courts of Chattogram, Bangladesh.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these terms: call +880 1752-510002, WhatsApp the same number, or email info@ecocarebd.com. We answer every message, usually within two working hours.",
          ],
        },
      ]}
    />
  );
}