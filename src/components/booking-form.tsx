"use client";

import type { FormEvent, ReactNode } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { bookingMessage, whatsappUrl } from "@/lib/whatsapp";

type TourOption = { slug: string; title: string };

type BookingFormProps = {
  tours: TourOption[];
  defaultTourSlug?: string;
};

const NOT_SURE = "Not sure yet, please suggest a tour";

const inputStyles =
  "min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none";

function Field({ label, optional, children }: { label: string; optional?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </span>
      {children}
    </label>
  );
}

function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BookingForm({ tours, defaultTourSlug }: BookingFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();

    const tour = tours.find((t) => t.slug === value("tour"));

    // When the Laravel API is ready, save the booking here first (POST /api/bookings),
    // so the owner also gets the backup email alert.
    const message = bookingMessage({
      tourTitle: tour?.title ?? NOT_SURE,
      name: value("name"),
      whatsapp: value("whatsapp"),
      date: formatDate(value("date")),
      adults: Number(value("adults")),
      children: Number(value("children")),
      pickup: value("pickup"),
      message: value("message"),
    });

    const url = whatsappUrl(message);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Tour">
        <select name="tour" defaultValue={defaultTourSlug ?? ""} className={inputStyles}>
          <option value="">{NOT_SURE}</option>
          {tours.map((tour) => (
            <option key={tour.slug} value={tour.slug}>
              {tour.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Your name">
        <input name="name" required autoComplete="name" className={inputStyles} />
      </Field>

      <Field label="WhatsApp number">
        <input
          name="whatsapp"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+44 7700 900123"
          className={inputStyles}
        />
      </Field>

      <Field label="Preferred date">
        <input name="date" type="date" required className={inputStyles} />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Adults">
          <select name="adults" defaultValue="2" className={inputStyles}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </Field>
        <Field label="Children">
          <select name="children" defaultValue="0" className={inputStyles}>
            {Array.from({ length: 9 }, (_, i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Pickup location" optional>
        <input name="pickup" placeholder="Hotel name or airport" className={inputStyles} />
      </Field>

      <Field label="Message" optional>
        <textarea name="message" rows={3} className={`${inputStyles} py-3`} />
      </Field>

      <button
        type="submit"
        className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-forest px-7 text-base font-semibold text-ivory transition-colors hover:bg-forest-soft"
      >
        <WhatsAppIcon />
        Send request on WhatsApp
      </button>

      <p className="text-center text-sm leading-relaxed text-muted">
        WhatsApp opens with your details ready to send. Nothing is booked or paid until we confirm with you.
      </p>
    </form>
  );
}
