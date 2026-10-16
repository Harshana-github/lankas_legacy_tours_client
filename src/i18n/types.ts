import type en from "@/i18n/locales/en";

/** English is the source of truth: every other language must provide the same keys. */
export type Dictionary = typeof en;

export type TourSlug = keyof Dictionary["tours"];
export type PhotoKey = keyof Dictionary["photos"];
export type ReviewId = keyof Dictionary["reviews"];
