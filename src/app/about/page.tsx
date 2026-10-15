import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} is a small Sri Lankan tour business offering private tours with local guides.`,
};

// SAMPLE TEXT: replace with the owner's own story before launch.
const facts = [
  { value: String(site.vehicles), label: "Comfortable vehicles" },
  { value: "100%", label: "Private tours" },
  { value: "Island-wide", label: "Pickup and drop-off" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Sharing the island we call home"
        intro={`${site.name} began with one simple idea: show travellers the Sri Lanka we grew up with, honestly and personally.`}
      />

      <Section>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/labookellie-guests.jpg"
              alt="Our guide with guests in the tea country"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="eyebrow">Our story</p>
            <h2 className="text-4xl md:text-5xl">A local guide, a small team, a big island</h2>
            <p className="text-muted">
              What started as a guide showing visitors around his home town has grown into a small team of
              guides and drivers with a fleet of {site.vehicles} vehicles. We are still small on purpose: it
              means every guest gets our full attention.
            </p>
            <p className="text-muted">
              From the rock fortress of Sigiriya to the tea estates of the hill country, we take you to the
              famous sights and the quiet places in between, and we tell you the stories behind them.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-line bg-sand/50">
        <ul className="container-page grid gap-10 text-center sm:grid-cols-3">
          {facts.map((fact) => (
            <li key={fact.label}>
              <p className="font-display text-5xl text-forest md:text-6xl">{fact.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-muted">{fact.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed lg:order-last">
            <p className="eyebrow">How we travel</p>
            <h2 className="text-4xl md:text-5xl">Your pace, your plan</h2>
            <p className="text-muted">
              Every tour is private. Want to stay longer at a waterfall, skip a stop, or find the best rice
              and curry in town? Just tell your guide. The day belongs to you.
            </p>
            <p className="text-muted">
              Planning is simple too. Send us a message on WhatsApp and we will help you shape the trip,
              before you arrive and throughout your journey.
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-sand">
            <Image
              src="/images/tours/beach-guests.jpg"
              alt="Our guide with a group of guests on the south coast"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
