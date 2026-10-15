import { Stars } from "@/components/ui";
import { formatMonth } from "@/lib/format";
import type { Review } from "@/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white/60 p-8">
      <Stars rating={review.rating} />
      <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-8 border-t border-line pt-5 text-sm">
        <span className="font-semibold">{review.name}</span>
        <span className="text-muted"> · {review.country}</span>
        <span className="mt-1 block text-xs text-muted">
          {formatMonth(review.date)} · via {review.source}
        </span>
      </figcaption>
    </figure>
  );
}
