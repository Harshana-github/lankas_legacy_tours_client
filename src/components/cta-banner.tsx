import { ButtonLink, WhatsAppButton } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";

/** Closing call to action used at the bottom of most pages. */
export async function CtaBanner() {
  const t = await getDictionary();

  return (
    <section className="container-page pb-20 md:pb-28">
      <div className="rounded-3xl bg-forest px-6 py-16 text-center text-ivory md:px-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{t.cta.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">{t.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/75">{t.cta.text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton label={t.common.chatOnWhatsApp} variant="light" />
          <ButtonLink href="/tours" variant="outlineLight">
            {t.common.browseTours}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
