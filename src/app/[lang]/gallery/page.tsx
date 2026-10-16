import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { ArrowRightIcon } from "@/components/icons";
import { LocaleLink } from "@/components/locale-link";
import { PageHeader, Section } from "@/components/ui";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getTours } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: t.galleryPage.metaTitle,
    description: t.galleryPage.metaDescription,
    alternates: pageAlternates(lang, "/gallery"),
  };
}

export default async function GalleryPage() {
  const [t, tours] = await Promise.all([getDictionary(), getTours()]);

  return (
    <>
      <PageHeader eyebrow={t.galleryPage.eyebrow} title={t.galleryPage.title} intro={t.galleryPage.intro} />
      <Section>
        <div className="container-page space-y-20">
          {tours.map((tour) => (
            <section key={tour.slug} aria-labelledby={`gallery-${tour.slug}`}>
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
                <h2 id={`gallery-${tour.slug}`} className="text-3xl md:text-4xl">
                  {tour.title}
                </h2>
                <LocaleLink
                  href={`/tours/${tour.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
                >
                  {t.common.viewTour} <ArrowRightIcon />
                </LocaleLink>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                {tour.photos.map((photo) => (
                  <div key={photo.src} className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sand">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
