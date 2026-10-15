import { site } from "@/config/site";

/** Link that opens a WhatsApp chat with the business, optionally with a pre-typed message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type BookingRequest = {
  tourTitle: string;
  name: string;
  whatsapp: string;
  date: string;
  adults: number;
  children: number;
  pickup: string;
  message: string;
};

/** The message the guest sends us on WhatsApp after filling in the booking form. */
export function bookingMessage(booking: BookingRequest): string {
  const adults = `${booking.adults} ${booking.adults === 1 ? "adult" : "adults"}`;
  const children = `${booking.children} ${booking.children === 1 ? "child" : "children"}`;
  const guests = booking.children ? `${adults}, ${children}` : adults;

  const details = [
    `Tour: ${booking.tourTitle}`,
    `Date: ${booking.date}`,
    `Guests: ${guests}`,
    booking.pickup ? `Pickup: ${booking.pickup}` : null,
    `Name: ${booking.name}`,
    `WhatsApp: ${booking.whatsapp}`,
  ].filter(Boolean);

  return [
    `Hello ${site.name}! I would like to book a tour.`,
    details.join("\n"),
    booking.message ? `Message: ${booking.message}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");
}
