import { ButtonLink, WhatsAppButton } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const t = await getDictionary();

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">{t.notFound.eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-6xl">{t.notFound.title}</h1>
      <p className="mt-5 max-w-md text-lg text-muted">{t.notFound.text}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/tours">{t.common.exploreTours}</ButtonLink>
        <WhatsAppButton label={t.common.chatOnWhatsApp} variant="outline" />
      </div>
    </section>
  );
}
