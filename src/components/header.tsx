import { LanguageSwitcher } from "@/components/language-switcher";
import { LocaleLink } from "@/components/locale-link";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { WhatsAppButton } from "@/components/ui";
import { navLinks, site } from "@/config/site";
import { localePath } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function Logo() {
  const t = await getDictionary();

  return (
    <LocaleLink href="/" className="flex flex-col leading-none" aria-label={t.header.homeAria(site.name)}>
      <span className="font-display text-xl font-medium whitespace-nowrap">{site.name}</span>
      <span className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold">
        {site.tagline}
      </span>
    </LocaleLink>
  );
}

export async function Header() {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);
  const links = navLinks.map((link) => ({ href: localePath(lang, link.href), label: t.nav[link.key] }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label={t.header.mainMenu} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={lang} label={t.header.language} variant="dropdown" />
          {/* Only on wide screens: longer languages need the room, and the floating WhatsApp button is always visible. */}
          <div className="hidden xl:block">
            <WhatsAppButton label={t.common.bookOnWhatsApp} className="whitespace-nowrap" />
          </div>
        </div>

        <MobileMenu openLabel={t.header.openMenu} closeLabel={t.header.closeMenu}>
          <nav aria-label={t.header.mainMenu}>
            <ul className="container-page py-6">
              {links.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <NavLink href={link.href} className="block py-5 font-display text-3xl aria-[current=page]:text-gold">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container-page space-y-8 pb-10">
            <LanguageSwitcher current={lang} label={t.header.language} variant="list" />
            <WhatsAppButton label={t.common.bookOnWhatsApp} className="w-full" />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}
