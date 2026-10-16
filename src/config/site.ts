// Business details shown across the site.
// SAMPLE DATA: replace the phone, WhatsApp number, email and URL with the real ones before launch.
// Later these come from the admin panel's "Site settings" via the API.

export const site = {
  name: "Lanka's Legacy Taxi and Tours",
  tagline: "Lands of Lore",
  description:
    "Private, guide-led tours of Sri Lanka: ancient cities, misty tea country, waterfalls and wildlife, with your own driver-guide and vehicle.",
  url: "https://lankaslegacytours.com",

  // WhatsApp number in international format, digits only (used for wa.me links).
  whatsappNumber: "94771234567",
  phoneDisplay: "+94 77 123 4567",
  email: "hello@lankaslegacytours.com",
  location: "Sri Lanka · Pickup island-wide",
  tripadvisorUrl: "https://www.tripadvisor.com/",

  vehicles: 5,
};

export const navLinks = [
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
