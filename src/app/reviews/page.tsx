import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { ReviewCard } from "@/components/review-card";
import { PageHeader, Section, Stars } from "@/components/ui";
import { site } from "@/config/site";
import { getReviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reviews",
  description: `What our guests say about their private tours with ${site.name}.`,
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <PageHeader
        eyebrow="Guest reviews"
        title="Kind words from our guests"
        intro="Every review comes from a guest who travelled with us."
      />
      <Section>
        <div className="container-page">
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-center gap-5">
              <span className="font-display text-6xl leading-none">{average.toFixed(1)}</span>
              <div>
                <Stars rating={Math.round(average)} />
                <p className="mt-1 text-sm text-muted">Based on {reviews.length} reviews</p>
              </div>
            </div>
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-forest underline underline-offset-4"
            >
              See more on TripAdvisor
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
