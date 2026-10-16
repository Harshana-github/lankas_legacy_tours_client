import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

// English lives at the plain address (/tours); other languages have a prefix (/fr/tours).
// The pages themselves are all under app/[lang], so plain addresses are quietly pointed at /en.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // /en/tours is a duplicate of /tours: send visitors (and search engines) to the plain address.
  if (firstSegment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // /fr/tours: already has a language.
  if (isLocale(firstSegment)) return NextResponse.next();

  // /tours: show the English page without changing the address in the browser.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except Next.js internals and files (images, favicon, sitemap.xml, robots.txt).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
