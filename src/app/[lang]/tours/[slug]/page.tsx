import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { CheckIcon, ClockIcon, PinIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { TourGrid } from "@/components/tour-grid";
import { ButtonLink, Section } from "@/components/ui";
import { site } from "@/config/site";
import { tourBases } from "@/data/tours";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getTour, getTourOptions, getTours } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return tourBases.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const [lang, tour] = await Promise.all([getLocale(), getTour(slug)]);
  if (!tour) return {};

  return {
    title: tour.title,
    description: tour.summary,
    alternates: pageAlternates(lang, `/tours/${tour.slug}`),
    openGraph: { images: [tour.photos[0].src] },
  };
}

export default async function TourPage({ params }: PageProps<"/[lang]/tours/[slug]">) {
  const { slug } = await params;
  const [t, tour, allTours, tourOptions] = await Promise.all([
    getDictionary(),
    getTour(slug),
    getTours(),
    getTourOptions(),
  ]);
  if (!tour) notFound();

  const [cover, ...morePhotos] = tour.photos;
  const otherTours = allTours.filter((other) => other.slug !== tour.slug).slice(0, 3);
  const price = formatPrice(tour.priceFrom, t.tour);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: tour.title,
          description: tour.summary,
          image: `${site.url}${cover.src}`,
          provider: { "@type": "TravelAgency", name: site.name, url: site.url },
          ...(tour.priceFrom && {
            offers: { "@type": "Offer", price: tour.priceFrom, priceCurrency: "USD" },
          }),
        }}
      />

      {/* Intro: title and cover photo side by side on large screens */}
      <section className="container-page grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <nav aria-label={t.tour.breadcrumb} className="text-sm text-muted">
            <LocaleLink href="/tours" className="hover:text-ink">
              {t.nav.tours}
            </LocaleLink>
            <span aria-hidden> / </span>
            <span aria-current="page">{tour.title}</span>
          </nav>

          <p className="eyebrow mt-10">{t.tour.privateTour}</p>
          <h1 className="mt-4 text-5xl md:text-6xl">{tour.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{tour.summary}</p>

          <ul className="mt-8 space-y-3 border-y border-line py-6">
            <li className="flex items-center gap-3">
              <ClockIcon className="size-5 text-gold" /> {tour.duration}
            </li>
            <li className="flex items-center gap-3">
              <PinIcon className="size-5 text-gold" /> {tour.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="#book">{t.tour.bookThisTour}</ButtonLink>
            <span className="font-semibold">{price}</span>
          </div>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-sand sm:aspect-4/5">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Details and booking form */}
      <Section className="border-t border-line">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_24rem]">
          <div className="space-y-14">
            <div className="space-y-5 text-lg leading-relaxed">
              {tour.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h2 className="text-3xl">{t.tour.highlights}</h2>
              <ul className="mt-6 space-y-3">
                {tour.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl">{t.tour.thePlan}</h2>
              <ol className="mt-6 border-l border-line">
                {tour.itinerary.map((stop) => (
                  <li key={stop.title} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute top-2 -left-1.25 size-2.5 rounded-full bg-gold" aria-hidden />
                    <h3 className="font-sans text-base font-semibold">{stop.title}</h3>
                    <p className="mt-1 text-muted">{stop.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-3xl">{t.tour.included}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {tour.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {morePhotos.length > 0 && (
              <div>
                <h2 className="text-3xl">{t.tour.photos}</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {morePhotos.map((photo) => (
                    <div key={photo.src} className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sand">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 20vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside id="book" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-white/70 p-6 md:p-8">
              <h2 className="text-3xl">{t.tour.bookThisTour}</h2>
              <p className="mt-2 mb-6 text-sm text-muted">
                {price} · {t.tour.finalPriceNote}
              </p>
              <BookingForm tours={tourOptions} defaultTourSlug={tour.slug} labels={t.booking} />
            </div>
          </aside>
        </div>
      </Section>

      {/* More tours */}
      <Section className="border-t border-line bg-sand/50">
        <div className="container-page">
          <h2 className="text-4xl md:text-5xl">{t.tour.youMayAlsoLike}</h2>
          <div className="mt-12">
            <TourGrid tours={otherTours} />
          </div>
        </div>
      </Section>
    </>
  );
}
