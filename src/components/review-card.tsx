import { Stars } from "@/components/ui";
import { localeInfo } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { formatMonth } from "@/lib/format";
import type { Review } from "@/types";

export async function ReviewCard({ review }: { review: Review }) {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white/60 p-8">
      <Stars rating={review.rating} label={t.common.ratingLabel(review.rating)} />
      <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed">“{review.text}”</blockquote>
      <figcaption className="mt-8 border-t border-line pt-5 text-sm">
        <span className="font-semibold">{review.name}</span>
        <span className="text-muted"> · {review.country}</span>
        <span className="mt-1 block text-xs text-muted">
          {t.reviewCard.meta(formatMonth(review.date, localeInfo[lang].htmlLang), review.source)}
        </span>
      </figcaption>
    </figure>
  );
}
