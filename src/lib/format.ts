import type { Dictionary } from "@/i18n/types";

export function formatPrice(priceFrom: number | undefined, t: Dictionary["tour"]): string {
  return priceFrom ? t.fromPrice(priceFrom) : t.priceOnRequest;
}

/** "2026-09" → "September 2026" (in the language given, e.g. "fr" → "septembre 2026") */
export function formatMonth(yearMonth: string, htmlLang: string): string {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString(htmlLang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
