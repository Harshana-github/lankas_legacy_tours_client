import { TourCard } from "@/components/tour-card";
import type { Tour } from "@/types";

/**
 * List of tour cards, used on every page that shows tours.
 * Phones: one column with a divider line between tours. Larger screens: a grid.
 */
export function TourGrid({ tours }: { tours: Tour[] }) {
  return (
    <ul className="flex flex-col divide-y divide-line sm:grid sm:grid-cols-2 sm:gap-6 sm:divide-y-0 lg:grid-cols-3 lg:gap-8">
      {tours.map((tour) => (
        <li key={tour.slug} className="flex py-8 first:pt-0 last:pb-0 sm:py-0">
          <TourCard tour={tour} />
        </li>
      ))}
    </ul>
  );
}
