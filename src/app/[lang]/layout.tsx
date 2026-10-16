import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/config/site";
import { localeInfo, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import "../globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} · ${t.meta.siteTitle}`,
      template: `%s · ${site.name}`,
    },
    description: t.meta.description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: localeInfo[lang].ogLocale,
      images: ["/images/tours/sigiriya-lake.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f8f5ef",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <html lang={localeInfo[lang].htmlLang} className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory"
        >
          {t.common.skipToContent}
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
