import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";
import { getTours } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} on WhatsApp, phone or email to plan your private tour in Sri Lanka.`,
};

const contactMethods = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappUrl(), external: true },
  { icon: PhoneIcon, label: "Phone", value: site.phoneDisplay, href: `tel:+${site.whatsappNumber}` },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: PinIcon, label: "Where we are", value: site.location },
];

export default async function ContactPage() {
  const tours = await getTours();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's plan your journey"
        intro="The quickest way to reach us is WhatsApp. Send a message, or fill in the form and we will continue the conversation there."
      />
      <Section>
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_28rem]">
          <ul className="space-y-4">
            {contactMethods.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sand text-forest">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block text-lg font-medium">{value}</span>
                  </span>
                </>
              );
              const styles = "flex items-center gap-5 rounded-2xl border border-line bg-white/60 p-5";

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className={`${styles} transition-colors hover:border-gold`}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={styles}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="rounded-3xl border border-line bg-white/70 p-6 md:p-8">
            <h2 className="text-3xl">Send a request</h2>
            <p className="mt-2 mb-6 text-sm text-muted">Not sure which tour? Leave it open and we will suggest one.</p>
            <BookingForm tours={tours.map(({ slug, title }) => ({ slug, title }))} />
          </div>
        </div>
      </Section>
    </>
  );
}
