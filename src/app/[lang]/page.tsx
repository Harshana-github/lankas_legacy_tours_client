import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { ArrowRightIcon, CarIcon, ChatIcon, CheckIcon, CompassIcon, LeafIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { ReviewCard } from "@/components/review-card";
import { TourGrid } from "@/components/tour-grid";
import { ButtonLink, Section, SectionHeading, WhatsAppButton } from "@/components/ui";
import { site } from "@/config/site";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getFeaturedTours, getGalleryPhotos, getPhotoAlt, getReviews } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return { alternates: pageAlternates(await getLocale(), "/") };
}

export default async function HomePage() {
  const [t, featuredTours, reviews, photos, heroAlt] = await Promise.all([
    getDictionary(),
    getFeaturedTours(),
    getReviews(),
    getGalleryPhotos(),
    getPhotoAlt("sigiriya-lake"),
  ]);
  const galleryPreview = photos.filter((_, i) => i % 5 === 0).slice(0, 6);

  const reasons = [
    { icon: CompassIcon, title: t.home.reasons.private.title, text: t.home.reasons.private.text },
    { icon: LeafIcon, title: t.home.reasons.guides.title, text: t.home.reasons.guides.text },
    { icon: CarIcon, title: t.home.reasons.vehicles.title, text: t.home.reasons.vehicles.text(site.vehicles) },
    { icon: ChatIcon, title: t.home.reasons.booking.title, text: t.home.reasons.booking.text },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          description: t.meta.description,
          url: site.url,
          telephone: site.phoneDisplay,
          email: site.email,
          areaServed: "Sri Lanka",
        }}
      />

      {/* Hero */}
      <section className="container-page grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t.home.heroEyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{t.home.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.home.heroText}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/tours">
              {t.common.exploreTours}
              <ArrowRightIcon />
            </ButtonLink>
            <WhatsAppButton label={t.common.chatOnWhatsApp} variant="outline" />
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {t.home.heroPoints.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="size-4 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/sigiriya-lake.jpg"
              alt={heroAlt}
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-ivory/90 px-4 py-2 text-xs font-medium backdrop-blur">
            {t.home.heroCaption}
          </figcaption>
        </figure>
      </section>

      {/* Why travel with us */}
      <Section className="border-y border-line bg-sand/50">
        <div className="container-page">
          <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} intro={t.home.whyIntro} />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-8 text-gold" />
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured tours */}
      <Section>
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={t.home.featuredEyebrow}
              title={t.home.featuredTitle}
              intro={t.home.featuredIntro}
            />
            <LocaleLink href="/tours" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              {t.common.viewAllTours} <ArrowRightIcon />
            </LocaleLink>
          </div>
          <div className="mt-14">
            <TourGrid tours={featuredTours} />
          </div>
        </div>
      </Section>

      {/* How booking works */}
      <Section className="bg-forest text-ivory">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{t.home.howEyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">{t.home.howTitle}</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {t.home.steps.map((step, i) => (
              <li key={step.title} className="border-t border-ivory/15 pt-6">
                <span className="font-display text-5xl text-gold-light">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Gallery preview */}
      <Section>
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={t.home.momentsEyebrow} title={t.home.momentsTitle} />
            <LocaleLink href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              {t.common.viewGallery} <ArrowRightIcon />
            </LocaleLink>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galleryPreview.map((photo) => (
              <div key={photo.src} className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section className="border-t border-line bg-sand/50">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={t.home.reviewsEyebrow} title={t.home.reviewsTitle} />
            <LocaleLink href="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              {t.common.readAllReviews} <ArrowRightIcon />
            </LocaleLink>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Section>

      <div className="pt-20 md:pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
