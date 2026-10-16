# Lanka's Legacy Taxi and Tours — client website

Public website for Lanka's Legacy Taxi and Tours. Next.js 16 (App Router), TypeScript, Tailwind CSS 4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

## Where things live

| To change… | Edit |
| --- | --- |
| Business name, WhatsApp number, phone, email | `src/config/site.ts` |
| Any wording on the site (all languages) | `src/i18n/locales/<language>.ts` |
| Tour prices, which photos a tour uses, featured tours | `src/data/tours.ts` |
| Review names, ratings, dates | `src/data/reviews.ts` |
| Colours and fonts | `@theme` in `src/app/globals.css`, fonts in `src/app/layout.tsx` |
| Tour photos | `public/images/tours/` |
| The WhatsApp booking message | `src/lib/whatsapp.ts` |

Everything in `src/data`, `src/config/site.ts` and the tour, review and About texts is **sample data** for the demo.

## Languages

English (default), Chinese (Simplified), Dutch, French, German, Italian and Japanese. English is at the plain address (`/tours`), the others have a prefix (`/fr/tours`, `/ja/tours`).

- All wording lives in one file per language, `src/i18n/locales/<code>.ts`. `en.ts` is the master; TypeScript reports any other language that is missing a key, so a missing translation fails `npm run build`.
- Tour texts, review texts, photo descriptions and page texts are all in those files. To add a tour or review, add its text to every language file and its facts (price, photos) to `src/data`.
- Server components get the text with `await getDictionary()` and the language with `await getLocale()` (`src/i18n/dictionaries.ts`). Use `LocaleLink` instead of `Link` for links inside the site so the language is kept.
- To add a language: add it to `src/i18n/config.ts`, create its file in `src/i18n/locales/`, and register it in `src/i18n/dictionaries.ts`.
- The WhatsApp message sent to the owner is always in English, so he can read it.
- The business name and tagline are not translated.
- The translations were written by Claude and should be checked by a native speaker of each language before launch.

## How it fits together

- Pages (`src/app/[lang]/**/page.tsx`) get content only through `src/lib/content.ts`, already in the visitor's language. When the Laravel API is ready, change those functions to `fetch()` from the API; pages and components stay the same.
- Booking: `src/components/booking-form.tsx` builds a message and opens WhatsApp (`wa.me`) with it pre-filled. No payment or login. Saving the booking to the API goes where the comment in `handleSubmit` says.
- Shared pieces: `src/components/ui.tsx` (buttons, headings, stars), `header.tsx`, `footer.tsx`, `tour-card.tsx`, `review-card.tsx`, `cta-banner.tsx`, `icons.tsx` (inline SVGs, no icon library).
- SEO: per-page `metadata` with per-language `hreflang` links, `sitemap.ts`, `robots.ts`, and schema.org JSON-LD on the home and tour pages.
- `src/proxy.ts` keeps English at the plain address and redirects `/en/...` to it.
