import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Eco Care BD",
  description:
    "How Eco Care BD collects, uses and protects your personal information, including booking data, WhatsApp conversations and job records.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      breadcrumbLabel="Privacy Policy"
      description="What information we collect, why we collect it, and what we will never do with it."
      updated="1 January 2026"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Eco Care BD provides pest control, water tank cleaning, deep cleaning and maintenance services in Chattogram, Bangladesh. For any question about this policy or your information, contact us on +880 1752-510002 or at info@ecocarebd.com.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: ["We collect only what we need to deliver and support the service you requested."],
          list: [
            "Contact details you give us: name, mobile number, email address and service address.",
            "Booking information: which service you booked, preferred date, property type and the problem description you provide.",
            "Job records: photographs taken during the inspection and treatment, technician notes, products used and the guarantee period issued.",
            "Communication records: WhatsApp messages, calls and emails exchanged with you.",
            "Payment confirmation: your choice of payment method and transaction reference. We do not store full card numbers or banking credentials.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: ["Your information is used for the following purposes only:"],
          list: [
            "To inspect, plan, deliver and invoice the service you booked.",
            "To contact you about your appointment, your follow-up visit and your guarantee period.",
            "To send before-and-after photographs of the work we carried out.",
            "To maintain our operational and financial records, as required by law.",
            "To improve our services and respond to complaints fairly, using anonymised patterns where possible.",
          ],
        },
        {
          heading: "What we do not do with your information",
          paragraphs: [
            "We do not sell, rent or trade your personal information to anyone. We do not share your mobile number or address with third-party marketing companies. We do not send unsolicited promotional messages unless you have asked us to.",
          ],
        },
        {
          heading: "Service providers",
          paragraphs: [
            "We use a small number of trusted suppliers — our email provider, our SMS and messaging provider, and our payment processors — to run the business. They receive only the information required to deliver their function and are contractually required not to use it for anything else.",
            "We use Google Maps to show our office location on this site, which may set cookies. We do not run advertising or cross-site tracking cookies.",
          ],
        },
        {
          heading: "How long we keep your information",
          paragraphs: [
            "Booking and job records are retained for up to three years after the last service, so we can honour guarantee periods and answer any later query about past work. Payment records are retained for five years to meet tax and audit requirements.",
            "After those periods, records are deleted or permanently anonymised. If you ask us to delete your information earlier, we will do so unless we are legally required to keep it.",
          ],
        },
        {
          heading: "Photographs of your property",
          paragraphs: [
            "Before-and-after photographs are primarily taken for your records, so you can see what was found and what was done. They are shared with you on WhatsApp or by email.",
            "We may occasionally ask permission to use a photograph in our public gallery or marketing material. We will always ask specifically, and we will never publish a photograph of your home, your family or your possessions without that explicit written permission. You can withdraw permission at any time and we will remove the image.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: ["You have the right to:"],
          list: [
            "Ask us what personal information we hold about you.",
            "Request a correction if any of it is inaccurate.",
            "Request deletion of information we no longer need to retain.",
            "Withdraw permission for any marketing use of photographs.",
            "Complain to the Bangladesh Data Protection authorities if you believe we have handled your information improperly.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "Booking data is stored on access-controlled systems. Technician photographs are shared only with the customer they relate to. Payment details are handled by our payment processors over encrypted connections — we never store full card numbers, PINs or online banking credentials.",
            "No system is perfectly secure, but we do not collect any information we do not genuinely need, which keeps the risk as low as we can reasonably make it.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We update this policy when our practices change. The date at the top of this page always reflects the most recent version. Material changes will be communicated to customers by WhatsApp or email.",
          ],
        },
      ]}
    />
  );
}