// Content as the pages use it: the base data (src/data) joined with the text of the current language.
import type { TourSlug } from "@/i18n/types";

export type Photo = {
  src: string;
  alt: string;
};

export type ItineraryStop = {
  title: string;
  description: string;
};

export type Tour = {
  slug: TourSlug;
  title: string;
  location: string;
  duration: string;
  summary: string;
  description: string[];
  highlights: string[];
  itinerary: ItineraryStop[];
  included: string[];
  priceFrom?: number;
  featured: boolean;
  /** The first photo is used as the cover image. */
  photos: Photo[];
};

export type Review = {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  /** Year and month of the visit, e.g. "2026-09". */
  date: string;
  source: "TripAdvisor" | "Google" | "Website";
  tourSlug?: TourSlug;
};

export type GalleryPhoto = Photo & {
  tourSlug: TourSlug;
  tourTitle: string;
};

/** What the booking form needs to list a tour. */
export type TourOption = {
  slug: TourSlug;
  /** Title in the visitor's language, shown in the form. */
  title: string;
  /** English title, used in the WhatsApp message so the owner can read it. */
  englishTitle: string;
};
