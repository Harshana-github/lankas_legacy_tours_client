import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPhotoAlt } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: t.about.metaTitle,
    description: t.about.metaDescription(site.name),
    alternates: pageAlternates(lang, "/about"),
  };
}

export default async function AboutPage() {
  const [t, storyPhotoAlt, travelPhotoAlt] = await Promise.all([
    getDictionary(),
    getPhotoAlt("labookellie-guests"),
    getPhotoAlt("beach-guests"),
  ]);

  const facts = [
    { value: String(site.vehicles), label: t.about.factVehicles },
    { value: t.about.factPrivateValue, label: t.about.factPrivate },
    { value: t.about.factIslandWideValue, label: t.about.factIslandWide },
  ];

  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro(site.name)} />

      <Section>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/labookellie-guests.jpg"
              alt={storyPhotoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="eyebrow">{t.about.storyEyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{t.about.storyTitle}</h2>
            <p className="text-muted">{t.about.storyP1(site.vehicles)}</p>
            <p className="text-muted">{t.about.storyP2}</p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-line bg-sand/50">
        <ul className="container-page grid gap-10 text-center sm:grid-cols-3">
          {facts.map((fact) => (
            <li key={fact.label}>
              <p className="font-display text-5xl text-forest md:text-6xl">{fact.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-muted">{fact.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed lg:order-last">
            <p className="eyebrow">{t.about.travelEyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{t.about.travelTitle}</h2>
            <p className="text-muted">{t.about.travelP1}</p>
            <p className="text-muted">{t.about.travelP2}</p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/beach-guests.jpg"
              alt={travelPhotoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
