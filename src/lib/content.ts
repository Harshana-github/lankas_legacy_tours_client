// The only place pages get their content from, already in the visitor's language.
// Today it joins the sample data in src/data with the text in src/i18n. When the Laravel API is ready,
// replace the bodies of these functions with fetch() calls; pages stay the same.
import { reviewBases } from "@/data/reviews";
import { tourBases, type TourBase } from "@/data/tours";
import { getDictionary, getDictionaryFor } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";
import type { GalleryPhoto, Review, Tour, TourOption } from "@/types";

function toTour(base: TourBase, t: Dictionary): Tour {
  return {
    ...t.tours[base.slug],
    slug: base.slug,
    priceFrom: base.priceFrom,
    featured: base.featured,
    photos: base.photos.map((key) => ({ src: `/images/tours/${key}.jpg`, alt: t.photos[key] })),
  };
}

export async function getTours(): Promise<Tour[]> {
  const t = await getDictionary();
  return tourBases.map((base) => toTour(base, t));
}

export async function getFeaturedTours(): Promise<Tour[]> {
  return (await getTours()).filter((tour) => tour.featured);
}

export async function getTour(slug: string): Promise<Tour | undefined> {
  return (await getTours()).find((tour) => tour.slug === slug);
}

export async function getTourOptions(): Promise<TourOption[]> {
  const [tours, english] = await Promise.all([getTours(), getDictionaryFor("en")]);
  return tours.map(({ slug, title }) => ({ slug, title, englishTitle: english.tours[slug].title }));
}

export async function getReviews(): Promise<Review[]> {
  const t = await getDictionary();
  return reviewBases.map((base) => ({ ...base, ...t.reviews[base.id] }));
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const tours = await getTours();
  return tours.flatMap((tour) =>
    tour.photos.map((photo) => ({ ...photo, tourSlug: tour.slug, tourTitle: tour.title })),
  );
}

/** Description of one photo in the visitor's language, for pages that show a single photo. */
export async function getPhotoAlt(key: keyof Dictionary["photos"]): Promise<string> {
  return (await getDictionary()).photos[key];
}
