import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { TourGrid } from "@/components/tour-grid";
import { PageHeader, Section } from "@/components/ui";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getTours } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: t.toursPage.metaTitle,
    description: t.toursPage.metaDescription,
    alternates: pageAlternates(lang, "/tours"),
  };
}

export default async function ToursPage() {
  const [t, tours] = await Promise.all([getDictionary(), getTours()]);

  return (
    <>
      <PageHeader eyebrow={t.toursPage.eyebrow} title={t.toursPage.title} intro={t.toursPage.intro} />
      <Section>
        <div className="container-page">
          <TourGrid tours={tours} />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
