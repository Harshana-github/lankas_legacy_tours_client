import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/i18n/locales/en").then((m) => m.default),
  zh: () => import("@/i18n/locales/zh").then((m) => m.default),
  nl: () => import("@/i18n/locales/nl").then((m) => m.default),
  fr: () => import("@/i18n/locales/fr").then((m) => m.default),
  de: () => import("@/i18n/locales/de").then((m) => m.default),
  it: () => import("@/i18n/locales/it").then((m) => m.default),
  ja: () => import("@/i18n/locales/ja").then((m) => m.default),
};

/** The language of the page being rendered (from the /[lang] part of the address). Server components only. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** All text for the current page's language. Server components only. */
export async function getDictionary(): Promise<Dictionary> {
  return loaders[await getLocale()]();
}

/** All text for a specific language, e.g. English for the WhatsApp message sent to the owner. */
export function getDictionaryFor(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
