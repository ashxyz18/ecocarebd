import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE, PHONE_DISPLAY } from "./site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCallLink() {
  return `tel:${SITE.phone}`;
}

export function getWhatsAppLink(message?: string) {
  const text =
    message ??
    "Hello Eco Care BD, I would like to book a service. Please share the nearest available slot.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function whatsappFor(service: string) {
  return getWhatsAppLink(
    `Hello Eco Care BD, I would like to book "${service}". Please share the nearest available slot and pricing.`
  );
}

export { PHONE_DISPLAY };

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

const areaNames = [
  "GEC Circle",
  "Panchpathi",
  "Agrabad",
  "Chattogram Oyster Bay",
  "Hathazari",
  "Raojan",
  "Sagarika",
  "Khan Bahadur Sikder",
  "Shoriabad",
  "Akbar Shah",
  "Dampara",
  "Kazir Dewri",
  "Chandgaon",
  "Khulna",
  "Anderkilla",
  "Sadarghat",
  "Kaptai",
  "Patenga",
  "Bozraho Ghona",
  "Fazlul Haque Road",
];

export function getAreas() {
  return areaNames;
}
