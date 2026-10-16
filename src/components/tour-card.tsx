import Image from "next/image";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { LocaleLink } from "@/components/locale-link";
import { ButtonLink } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { formatPrice } from "@/lib/format";
import type { Tour } from "@/types";

/** One tour. The photo and all details sit inside a single bordered card so it reads as one item. */
export async function TourCard({ tour }: { tour: Tour }) {
  const t = await getDictionary();
  const cover = tour.photos[0];
  const tourUrl = `/tours/${tour.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/70 transition-all duration-300 hover:border-gold-light hover:shadow-xl hover:shadow-ink/5">
      <LocaleLink href={tourUrl} className="relative block aspect-square overflow-hidden bg-sand sm:aspect-4/5">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </LocaleLink>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{tour.location}</p>
        <h3 className="mt-3 text-3xl">
          <LocaleLink href={tourUrl} className="hover:text-forest-soft">
            {tour.title}
          </LocaleLink>
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{tour.summary}</p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
            <span className="flex items-center gap-2 text-muted">
              <ClockIcon className="size-4" />
              {tour.duration}
            </span>
            <span className="font-semibold">{formatPrice(tour.priceFrom, t.tour)}</span>
          </div>

          <ButtonLink href={tourUrl} variant="outline" className="mt-5 w-full">
            {t.common.viewTour}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
