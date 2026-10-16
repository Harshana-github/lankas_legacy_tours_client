// SAMPLE DATA for the demo only. Replace with real guest reviews (e.g. copied from TripAdvisor
// with permission) before launch. The review text and country are in src/i18n/locales/<language>.ts
// under `reviews`. Later this comes from the API.
import type { ReviewId, TourSlug } from "@/i18n/types";

export type ReviewBase = {
  id: ReviewId;
  name: string;
  rating: number;
  /** Year and month of the visit, e.g. "2026-09". */
  date: string;
  source: "TripAdvisor" | "Google" | "Website";
  tourSlug?: TourSlug;
};

export const reviewBases: ReviewBase[] = [
  { id: "r1", name: "Sophie", rating: 5, date: "2026-09", source: "TripAdvisor", tourSlug: "sigiriya-village-life" },
  { id: "r2", name: "Lukas", rating: 5, date: "2026-08", source: "TripAdvisor", tourSlug: "tea-country-nuwara-eliya" },
  { id: "r3", name: "Camille", rating: 5, date: "2026-08", source: "Google", tourSlug: "ella-waterfalls" },
  { id: "r4", name: "Emma & Tom", rating: 5, date: "2026-07", source: "TripAdvisor", tourSlug: "kandy-temple-of-the-tooth" },
  { id: "r5", name: "Isabella", rating: 5, date: "2026-07", source: "Google" },
  { id: "r6", name: "Daniel", rating: 5, date: "2026-06", source: "TripAdvisor", tourSlug: "south-coast-escape" },
];
