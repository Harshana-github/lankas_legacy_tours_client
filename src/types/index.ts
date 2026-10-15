export type Photo = {
  src: string;
  alt: string;
};

export type ItineraryStop = {
  title: string;
  description: string;
};

export type Tour = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  summary: string;
  description: string[];
  highlights: string[];
  itinerary: ItineraryStop[];
  included: string[];
  /** Starting price per person in USD. Leave out to show "Price on request". */
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
  tourSlug?: string;
};

export type GalleryPhoto = Photo & {
  tourSlug: string;
  tourTitle: string;
};
