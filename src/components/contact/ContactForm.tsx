"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SERVICES } from "@/lib/services";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/utils";

type State = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const AREAS = [
  "GEC Circle",
  "Panchpathi",
  "Agrabad",
  "Chattogram Oyster Bay",
  "Sagarika",
  "Dampara",
  "Khulna",
  "Kazir Dewri",
  "Chandgaon",
  "Patenga",
  "Sadarghat",
  "Hathazari",
  "Raojan",
  "Other area",
];

const PROPERTY_TYPES = ["Apartment / flat", "House", "Office / commercial", "Warehouse / godown", "Hospital / clinic", "Restaurant / cafe", "School / institution", "Factory / industrial"];

function validate(fd: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = String(fd.get("name") ?? "").trim();
  const phone = String(fd.get("phone") ?? "").trim();
  const service = String(fd.get("service") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^(\+?88)?0?1[3-9]\d{8}$/.test(phone.replace(/[\s-]/g, "")))
    errors.phone = "Enter a valid Bangladeshi mobile number, e.g. 01752-510002.";
  if (!service) errors.service = "Please choose a service.";
  if (message.length > 1500) errors.message = "Please keep your message under 1500 characters.";

  return errors;
}

async function submit(prev: State, fd: FormData): Promise<State> {
  // Honeypot: bots fill hidden fields, humans never see them.
  if (String(fd.get("website") ?? "")) {
    return { status: "success", message: "Thanks! We will contact you shortly." };
  }

  const errors = validate(fd);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors };
  }

  // No backend configured yet — log the payload so it is not silently lost.
  console.info("[EcoCare] Booking request", {
    name: fd.get("name"),
    phone: fd.get("phone"),
    service: fd.get("service"),
    area: fd.get("area"),
    property: fd.get("property"),
    preferredDate: fd.get("preferredDate"),
    message: fd.get("message"),
  });

  // TODO: wire to an email / CRM endpoint (e.g. Resend, Google Apps Script, or a WhatsApp API).
  await new Promise((r) => setTimeout(r, 600));

  return {
    status: "success",
    message:
      "Thank you! Your request is recorded. We will call you within 2 working hours. For anything urgent, please call or WhatsApp us directly.",
  };
}

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState<State, FormData>(submit, { status: "idle" });

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary-light p-7 text-center sm:p-9">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary text-white">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-foreground-muted">
          {state.message}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row">
          <a
            href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-bold text-white"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-5 py-3 text-[15px] font-bold text-[#128C4B]"
          >
            <WhatsAppIcon className="size-[18px]" />
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
      noValidate
    >
      {state.status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-800"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          required
          error={errors.name}
          placeholder="e.g. Mohammed Rahman"
        />
        <Field
          id="phone"
          label="Mobile number"
          type="tel"
          inputMode="tel"
          required
          error={errors.phone}
          placeholder="01XXX-XXXXXX"
        />

        <SelectField
          id="service"
          label="Which service do you need?"
          required
          error={errors.service}
          defaultValue={defaultService ?? ""}
          options={SERVICES.map((s) => ({ value: s.slug, label: s.name }))}
          placeholder="Select a service"
        />

        <SelectField
          id="area"
          label="Your area in Chattogram"
          options={AREAS.map((a) => ({ value: a, label: a }))}
          placeholder="Select your area"
        />

        <SelectField
          id="property"
          label="Property type"
          options={PROPERTY_TYPES.map((p) => ({ value: p, label: p }))}
          placeholder="Select property type"
        />

        <Field id="preferredDate" label="Preferred date" type="date" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[14px] font-semibold text-foreground">
          Describe the problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1500}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          placeholder="e.g. I can see small flying insects near the kitchen window, mostly in the evening. Two-bed flat, third floor."
          className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-[15px] text-foreground placeholder:text-foreground-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-[13px] text-red-600">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-[13px] text-foreground-muted">
            The more detail you give, the more accurate our free inspection will be.
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-bold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary-hover disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-[18px] animate-spin" />
            Sending&hellip;
          </>
        ) : (
          <>
            <Send className="size-[18px]" />
            Request free inspection
          </>
        )}
      </button>

      <p className="mt-4 text-[13px] leading-relaxed text-foreground-muted">
        By submitting you agree to be contacted about this enquiry. We never share your details.
        Prefer to call?{" "}
        <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="font-bold text-primary hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-foreground">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-foreground transition-colors placeholder:text-foreground-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error ? "border-red-400 focus:border-red-500" : "border-border focus:border-primary"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  error,
  options,
  placeholder,
  required,
  defaultValue,
}: {
  id: string;
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-foreground">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        defaultValue={defaultValue}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full appearance-none rounded-xl border bg-surface bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-[15px] text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error ? "border-red-400 focus:border-red-500" : "border-border focus:border-primary"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="">{placeholder ?? "Select"}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}