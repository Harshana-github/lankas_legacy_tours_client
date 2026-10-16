// Business details shown across the site (the same in every language).
// SAMPLE DATA: replace the phone, WhatsApp number, email and URL with the real ones before launch.
// Later these come from the admin panel's "Site settings" via the API.
import type { Dictionary } from "@/i18n/types";

export const site = {
  name: "Lanka's Legacy Taxi and Tours",
  tagline: "Lands of Lore",
  url: "https://lankaslegacytours.com",

  // WhatsApp number in international format, digits only (used for wa.me links).
  whatsappNumber: "94771234567",
  phoneDisplay: "+94 77 123 4567",
  email: "hello@lankaslegacytours.com",
  tripadvisorUrl: "https://www.tripadvisor.com/",

  vehicles: 5,
};

/** Menu links. The label comes from the dictionary (`nav`) in the visitor's language. */
export const navLinks: { href: string; key: keyof Dictionary["nav"] }[] = [
  { href: "/tours", key: "tours" },
  { href: "/gallery", key: "gallery" },
  { href: "/reviews", key: "reviews" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];
