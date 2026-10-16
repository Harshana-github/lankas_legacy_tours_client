import { LocaleLink } from "@/components/locale-link";
import { navLinks, site } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/whatsapp";

export async function Footer() {
  const t = await getDictionary();

  return (
    <footer className="bg-forest text-ivory/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-ivory">{site.name}</p>
          <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-light">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{t.meta.description}</p>
        </div>

        <nav aria-label={t.footer.menu}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{t.footer.explore}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <LocaleLink href={link.href} className="hover:text-ivory">
                  {t.nav[link.key]}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{t.footer.contact}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                {t.footer.whatsApp}: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ivory">
                {site.email}
              </a>
            </li>
            <li>{t.meta.location}</li>
            <li>
              <a href={site.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                {t.footer.findUsOnTripAdvisor}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <p className="container-page py-6 text-xs text-ivory/60">{t.footer.rights(site.name)}</p>
      </div>
    </footer>
  );
}
