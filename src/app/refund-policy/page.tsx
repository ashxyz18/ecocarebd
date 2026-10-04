import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Eco Care BD",
  description:
    "Eco Care BD's refund and cancellation terms: free cancellation up to six hours before a visit, guarantees on failed treatments, and refund eligibility.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund & Cancellation Policy"
      breadcrumbLabel="Refund Policy"
      description="When you get a refund, when you do not, and how long it takes. Written plainly so there are no surprises."
      updated="1 January 2026"
      sections={[
        {
          heading: "Free cancellation",
          paragraphs: [
            "Cancel or reschedule free of charge by contacting us at least six hours before your visit window, by phone on +880 1752-510002 or on WhatsApp.",
            "Inside six hours a visit charge of ৳500 may apply, because the technician has already been allocated and routed to your location.",
          ],
        },
        {
          heading: "Full refunds",
          paragraphs: ["A full refund is due in these situations:"],
          list: [
            "We cancel your booking, for any reason.",
            "We cannot provide the service you booked at the quoted price.",
            "The treatment fails and we are unable to resolve it after the free re-treatment visit.",
            "A service is carried out that you did not approve — for example work added without written consent.",
            "We damage your property during the service. In this case we also repair or replace what we damaged.",
          ],
        },
        {
          heading: "Partial refunds",
          paragraphs: [
            "Where a booking covered several services and only part of the work was delivered, we refund the value of the undelivered portion.",
            "Where a visit has taken place and the treatment was completed as described but you are not satisfied on an aesthetic point — for example visible cleaning marks on a window — we may offer a re-visit or a partial refund at our discretion. Tell us within seven days while the evidence is still fresh.",
          ],
        },
        {
          heading: "No refund situations",
          paragraphs: ["A refund is not due where:"],
          list: [
            "The service was delivered as described, and you simply changed your mind about the result.",
            "A problem has returned after the guarantee period stated on your invoice or service page has expired.",
            "The required preparation was not carried out before a service that requires it, and this caused the failure.",
            "Re-entry or safety instructions given at the time of treatment were not followed.",
            "The complaint relates to activity in an untreated area, a neighbouring unit, or a new infestation brought in after our visit.",
          ],
        },
        {
          heading: "How refunds are processed",
          paragraphs: [
            "Approved refunds are issued to the original payment method within five to seven working days. For cash payments, we arrange a bKash transfer or hand the refund over in person — your choice.",
            "We do not charge a processing fee on refunds.",
          ],
        },
        {
          heading: "Chargebacks",
          paragraphs: [
            "We would rather resolve a problem directly than have it escalated. If something has gone wrong, contact us first on +880 1752-510002 and we will act on it.",
            "We do not contest legitimate chargebacks, and we do not treat a chargeback as a reason to refuse future service to a customer who was genuinely treated unfairly.",
          ],
        },
      ]}
    />
  );
}