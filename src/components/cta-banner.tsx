import { ButtonLink, WhatsAppButton } from "@/components/ui";

/** Closing call to action used at the bottom of most pages. */
export function CtaBanner() {
  return (
    <section className="container-page pb-20 md:pb-28">
      <div className="rounded-3xl bg-forest px-6 py-16 text-center text-ivory md:px-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Plan your journey</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
          Tell us your dates. We will take care of the rest.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/75">
          Send us a message on WhatsApp. We reply personally and shape the tour around you.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton variant="light" />
          <ButtonLink href="/tours" variant="outlineLight">
            Browse tours
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
