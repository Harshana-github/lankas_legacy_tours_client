import type { MetadataRoute } from "next";
import { navLinks, site } from "@/config/site";
import { getTours } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tours = await getTours();
  const pages = ["/", ...navLinks.map((link) => link.href), ...tours.map((tour) => `/tours/${tour.slug}`)];

  return pages.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
