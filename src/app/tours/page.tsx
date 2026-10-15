import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { TourCard } from "@/components/tour-card";
import { PageHeader, Section } from "@/components/ui";
import { getTours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Private day tours and short journeys across Sri Lanka: Sigiriya, Kandy, tea country, Ella, elephants and the south coast.",
};

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <>
      <PageHeader
        eyebrow="Our tours"
        title="Private journeys across the island"
        intro="Every tour is private, with your own vehicle and guide. Dates, pace and stops can all be adjusted. Just ask."
      />
      <Section>
        <div className="container-page grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
