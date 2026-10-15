import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";
import type { Tour } from "@/types";

export function TourCard({ tour }: { tour: Tour }) {
  const cover = tour.photos[0];

  return (
    <article className="group flex flex-col">
      <Link href={`/tours/${tour.slug}`} className="relative block aspect-4/5 overflow-hidden rounded-2xl bg-sand">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-6">
        <p className="eyebrow">{tour.location}</p>
        <h3 className="mt-3 text-3xl">
          <Link href={`/tours/${tour.slug}`} className="hover:text-forest-soft">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-3 mb-6 leading-relaxed text-muted">{tour.summary}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line pt-5 text-sm">
          <span className="flex items-center gap-2 text-muted">
            <ClockIcon className="size-4" />
            {tour.duration}
          </span>
          <span className="font-semibold">{formatPrice(tour.priceFrom)}</span>
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest"
        >
          View tour
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
