// The only place pages get their content from.
// Today it reads the sample data in src/data. When the Laravel API is ready,
// replace the bodies of these functions with fetch() calls; pages stay the same.
import { reviews } from "@/data/reviews";
import { tours } from "@/data/tours";
import type { GalleryPhoto, Review, Tour } from "@/types";

export async function getTours(): Promise<Tour[]> {
  return tours;
}

export async function getFeaturedTours(): Promise<Tour[]> {
  return tours.filter((tour) => tour.featured);
}

export async function getTour(slug: string): Promise<Tour | undefined> {
  return tours.find((tour) => tour.slug === slug);
}

export async function getReviews(): Promise<Review[]> {
  return reviews;
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  return tours.flatMap((tour) =>
    tour.photos.map((photo) => ({ ...photo, tourSlug: tour.slug, tourTitle: tour.title })),
  );
}
