// SAMPLE DATA for the demo. Prices are placeholders to confirm with the owner.
// Tour texts (title, itinerary, ...) are in src/i18n/locales/<language>.ts under `tours`.
// Photos are listed by file name (public/images/tours/<name>.jpg); their descriptions are under `photos`.
// Later this comes from the Laravel API.
import type { PhotoKey, TourSlug } from "@/i18n/types";

export type TourBase = {
  slug: TourSlug;
  /** Starting price per person in USD. Leave out to show "Price on request". */
  priceFrom?: number;
  featured: boolean;
  /** The first photo is used as the cover image. */
  photos: PhotoKey[];
};

export const tourBases: TourBase[] = [
  {
    slug: "sigiriya-village-life",
    priceFrom: 95,
    featured: true,
    photos: [
      "sigiriya-lake",
      "sigiriya-view",
      "sigiriya-guests",
      "village-rice-pounding",
      "village-weaving",
      "village-cooking",
      "village-lunch",
    ],
  },
  {
    slug: "kandy-temple-of-the-tooth",
    priceFrom: 85,
    featured: true,
    photos: ["elephant-river", "kandy-temple", "kandy-temple-gardens", "kandy-hindu-temple", "elephant-river-bath"],
  },
  {
    slug: "tea-country-nuwara-eliya",
    priceFrom: 110,
    featured: true,
    photos: [
      "tea-plucking",
      "labookellie-tea",
      "tea-plantation",
      "tea-picker",
      "ramboda-falls",
      "tea-centre",
      "labookellie-guests",
      "tea-country-guests",
    ],
  },
  {
    slug: "ella-waterfalls",
    priceFrom: 240,
    featured: false,
    photos: ["nine-arch-bridge", "ella-waterfall", "ella-falls", "waterfall-swim", "waterfall-pool"],
  },
  {
    slug: "elephant-encounter",
    priceFrom: 60,
    featured: false,
    photos: ["elephant-encounter", "elephant-guests", "elephant-selfie"],
  },
  {
    slug: "south-coast-escape",
    priceFrom: 120,
    featured: false,
    photos: ["south-coast", "beach-guests"],
  },
];
