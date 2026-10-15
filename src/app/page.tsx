import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { ArrowRightIcon, CarIcon, ChatIcon, CheckIcon, CompassIcon, LeafIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ReviewCard } from "@/components/review-card";
import { TourCard } from "@/components/tour-card";
import { ButtonLink, Section, SectionHeading, WhatsAppButton } from "@/components/ui";
import { site } from "@/config/site";
import { getFeaturedTours, getGalleryPhotos, getReviews } from "@/lib/content";

const reasons = [
  {
    icon: CompassIcon,
    title: "Private, just for you",
    text: "Your own vehicle and guide. No crowded buses, no fixed timetable: we travel at your pace.",
  },
  {
    icon: LeafIcon,
    title: "Local guides, real stories",
    text: "Born and raised in Sri Lanka, our guides share the history, food and hidden places behind every stop.",
  },
  {
    icon: CarIcon,
    title: "Comfortable vehicles",
    text: `A fleet of ${site.vehicles} clean, well-kept vehicles with careful, experienced drivers.`,
  },
  {
    icon: ChatIcon,
    title: "Simple booking",
    text: "No accounts and no payment online. Send a request and plan every detail with us on WhatsApp.",
  },
];

const steps = [
  { title: "Choose a tour", text: "Pick a tour you love, or tell us what you would like to see." },
  { title: "Send your request", text: "Fill in a short form. WhatsApp opens with your details ready to send." },
  { title: "Plan it together", text: "We reply personally on WhatsApp to confirm dates, pickup and price." },
];

export default async function HomePage() {
  const [featuredTours, reviews, photos] = await Promise.all([
    getFeaturedTours(),
    getReviews(),
    getGalleryPhotos(),
  ]);
  const galleryPreview = photos.filter((_, i) => i % 5 === 0).slice(0, 6);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          description: site.description,
          url: site.url,
          telephone: site.phoneDisplay,
          email: site.email,
          areaServed: "Sri Lanka",
        }}
      />

      {/* Hero */}
      <section className="container-page grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">Private tours · Sri Lanka</p>
          <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Discover Sri Lanka, beautifully unhurried.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Ancient cities, misty tea country, waterfalls and wildlife, with your own driver-guide and a
            vehicle just for you.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/tours">
              Explore tours
              <ArrowRightIcon />
            </ButtonLink>
            <WhatsAppButton variant="outline" />
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {["Private tours only", "Local expert guides", "Pickup island-wide"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="size-4 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/sigiriya-lake.jpg"
              alt="Sigiriya Lion Rock seen across a calm lake"
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-ivory/90 px-4 py-2 text-xs font-medium backdrop-blur">
            Sigiriya Lion Rock, Cultural Triangle
          </figcaption>
        </figure>
      </section>

      {/* Why travel with us */}
      <Section className="border-y border-line bg-sand/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why travel with us"
            title="A small local business, a personal welcome"
            intro="We are not a big agency. Every tour is planned, driven and guided by our own small team."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-8 text-gold" />
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured tours */}
      <Section>
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Signature tours"
              title="Our most loved journeys"
              intro="Every tour is private and can be adjusted to your pace and interests."
            />
            <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              View all tours <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </Section>

      {/* How booking works */}
      <Section className="bg-forest text-ivory">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">How it works</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Booking takes less than a minute</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-ivory/15 pt-6">
                <span className="font-display text-5xl text-gold-light">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Gallery preview */}
      <Section>
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Moments" title="Memories from our guests" />
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              View the gallery <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galleryPreview.map((photo) => (
              <div key={photo.src} className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section className="border-t border-line bg-sand/50">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Guest reviews" title="In our guests' words" />
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
              Read all reviews <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Section>

      <div className="pt-20 md:pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
