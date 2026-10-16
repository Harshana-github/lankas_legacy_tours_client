import Link from "next/link";
import type { ComponentProps } from "react";
import { localePath } from "@/i18n/config";
import { getLocale } from "@/i18n/dictionaries";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * A link to a page of this site that keeps the visitor's language: "/tours" becomes "/fr/tours" on the French site.
 * Other links (https:, mailto:, tel:, #section) are left as they are. Server components only.
 */
export async function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const isPageOfThisSite = href.startsWith("/");
  const target = isPageOfThisSite ? localePath(await getLocale(), href) : href;

  return <Link href={target} {...props} />;
}
