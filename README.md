# Lanka's Legacy Tours — client website

Public website for Lanka's Legacy Tours. Next.js 16 (App Router), TypeScript, Tailwind CSS 4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

## Where things live

| To change… | Edit |
| --- | --- |
| Business name, WhatsApp number, phone, email, menu links | `src/config/site.ts` |
| Tours (text, prices, itinerary, photos) | `src/data/tours.ts` |
| Reviews | `src/data/reviews.ts` |
| Colours and fonts | `@theme` in `src/app/globals.css`, fonts in `src/app/layout.tsx` |
| Tour photos | `public/images/tours/` |
| The WhatsApp booking message | `src/lib/whatsapp.ts` |

Everything in `src/data` and `src/config/site.ts` is **sample data** for the demo.

## How it fits together

- Pages (`src/app/**/page.tsx`) get content only through `src/lib/content.ts`. When the Laravel API is ready, change those functions to `fetch()` from the API; pages and components stay the same.
- Booking: `src/components/booking-form.tsx` builds a message and opens WhatsApp (`wa.me`) with it pre-filled. No payment or login. Saving the booking to the API goes where the comment in `handleSubmit` says.
- Shared pieces: `src/components/ui.tsx` (buttons, headings, stars), `header.tsx`, `footer.tsx`, `tour-card.tsx`, `review-card.tsx`, `cta-banner.tsx`, `icons.tsx` (inline SVGs, no icon library).
- SEO: per-page `metadata`, `sitemap.ts`, `robots.ts`, and schema.org JSON-LD on the home and tour pages.
