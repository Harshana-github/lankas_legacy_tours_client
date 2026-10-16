"use client";

import type { FormEvent, ReactNode } from "react";
import { WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/types";
import type { TourOption } from "@/types";
import { bookingMessage, whatsappUrl } from "@/lib/whatsapp";

type BookingFormProps = {
  tours: TourOption[];
  defaultTourSlug?: string;
  /** Form text in the visitor's language. */
  labels: Dictionary["booking"];
};

// The message sent to the owner is always in English, so he can read it.
const NOT_SURE_IN_ENGLISH = "Not sure yet, please suggest a tour";

const inputStyles =
  "min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none";

function Field({ label, optional, children }: { label: string; optional?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> {optional}</span>}
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

export function BookingForm({ tours, defaultTourSlug, labels }: BookingFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();

    const tour = tours.find((t) => t.slug === value("tour"));

    // When the Laravel API is ready, save the booking here first (POST /api/bookings),
    // so the owner also gets the backup email alert.
    const message = bookingMessage({
      tourTitle: tour?.englishTitle ?? NOT_SURE_IN_ENGLISH,
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
      <Field label={labels.tour}>
        <select name="tour" defaultValue={defaultTourSlug ?? ""} className={inputStyles}>
          <option value="">{labels.notSure}</option>
          {tours.map((tour) => (
            <option key={tour.slug} value={tour.slug}>
              {tour.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label={labels.name}>
        <input name="name" required autoComplete="name" className={inputStyles} />
      </Field>

      <Field label={labels.whatsApp}>
        <input
          name="whatsapp"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder={labels.whatsAppPlaceholder}
          className={inputStyles}
        />
      </Field>

      <Field label={labels.date}>
        <input name="date" type="date" required className={inputStyles} />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label={labels.adults}>
          <select name="adults" defaultValue="2" className={inputStyles}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </Field>
        <Field label={labels.children}>
          <select name="children" defaultValue="0" className={inputStyles}>
            {Array.from({ length: 9 }, (_, i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={labels.pickup} optional={labels.optional}>
        <input name="pickup" placeholder={labels.pickupPlaceholder} className={inputStyles} />
      </Field>

      <Field label={labels.message} optional={labels.optional}>
        <textarea name="message" rows={3} className={`${inputStyles} py-3`} />
      </Field>

      <button
        type="submit"
        className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-forest px-7 text-base font-semibold text-ivory transition-colors hover:bg-forest-soft"
      >
        <WhatsAppIcon />
        {labels.submit}
      </button>

      <p className="text-center text-sm leading-relaxed text-muted">{labels.note}</p>
    </form>
  );
}
