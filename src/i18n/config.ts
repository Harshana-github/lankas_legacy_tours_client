// Languages the site supports. Safe to import from both server and client components.
// To add a language: add it here, add src/i18n/locales/<code>.ts, and register it in dictionaries.ts.

export const locales = ["en", "zh", "nl", "fr", "de", "it", "ja"] as const;
export type Locale = (typeof locales)[number];

/** English lives at the plain address (/tours); every other language gets a prefix (/fr/tours). */
export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, { name: string; shortName: string; htmlLang: string; ogLocale: string }> = {
  en: { name: "English", shortName: "EN", htmlLang: "en", ogLocale: "en_GB" },
  zh: { name: "简体中文", shortName: "ZH", htmlLang: "zh-CN", ogLocale: "zh_CN" },
  nl: { name: "Nederlands", shortName: "NL", htmlLang: "nl", ogLocale: "nl_NL" },
  fr: { name: "Français", shortName: "FR", htmlLang: "fr", ogLocale: "fr_FR" },
  de: { name: "Deutsch", shortName: "DE", htmlLang: "de", ogLocale: "de_DE" },
  it: { name: "Italiano", shortName: "IT", htmlLang: "it", ogLocale: "it_IT" },
  ja: { name: "日本語", shortName: "JA", htmlLang: "ja", ogLocale: "ja_JP" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Address of a page in a language: localePath("fr", "/tours") → "/fr/tours", localePath("en", "/tours") → "/tours". */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Removes the language prefix from a browser path: "/fr/tours" → "/tours". */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  return isLocale(first) ? `/${rest.join("/")}` : pathname;
}

/** Canonical and per-language addresses for a page, so search engines show the right language. */
export function pageAlternates(locale: Locale, path: string) {
  const languages = Object.fromEntries(locales.map((code) => [localeInfo[code].htmlLang, localePath(code, path)]));
  return {
    canonical: localePath(locale, path),
    languages: { ...languages, "x-default": localePath(defaultLocale, path) },
  };
}
