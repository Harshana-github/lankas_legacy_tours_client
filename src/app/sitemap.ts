import type { MetadataRoute } from "next";
import { navLinks, site } from "@/config/site";
import { tourBases } from "@/data/tours";
import { localeInfo, localePath, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...navLinks.map((link) => link.href), ...tourBases.map((tour) => `/tours/${tour.slug}`)];
  const address = (locale: (typeof locales)[number], path: string) => `${site.url}${localePath(locale, path)}`;

  // One entry per page and language, each listing the same page in every language.
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: address(locale, path),
      alternates: {
        languages: Object.fromEntries(locales.map((code) => [localeInfo[code].htmlLang, address(code, path)])),
      },
    })),
  );
}
