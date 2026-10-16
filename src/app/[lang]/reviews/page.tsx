import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { ReviewCard } from "@/components/review-card";
import { PageHeader, Section, Stars } from "@/components/ui";
import { site } from "@/config/site";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getReviews } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: t.reviewsPage.metaTitle,
    description: t.reviewsPage.metaDescription(site.name),
    alternates: pageAlternates(lang, "/reviews"),
  };
}

export default async function ReviewsPage() {
  const [t, reviews] = await Promise.all([getDictionary(), getReviews()]);
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const roundedAverage = Math.round(average);

  return (
    <>
      <PageHeader eyebrow={t.reviewsPage.eyebrow} title={t.reviewsPage.title} intro={t.reviewsPage.intro} />
      <Section>
        <div className="container-page">
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-center gap-5">
              <span className="font-display text-6xl leading-none">{average.toFixed(1)}</span>
              <div>
                <Stars rating={roundedAverage} label={t.common.ratingLabel(roundedAverage)} />
                <p className="mt-1 text-sm text-muted">{t.reviewsPage.basedOn(reviews.length)}</p>
              </div>
            </div>
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-forest underline underline-offset-4"
            >
              {t.reviewsPage.seeMore}
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
