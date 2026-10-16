import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageAlternates } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getTourOptions } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> {
  const [lang, t] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDescription(site.name),
    alternates: pageAlternates(lang, "/contact"),
  };
}

export default async function ContactPage() {
  const [t, tourOptions] = await Promise.all([getDictionary(), getTourOptions()]);

  const contactMethods = [
    { icon: WhatsAppIcon, label: t.contact.whatsApp, value: site.phoneDisplay, href: whatsappUrl(), external: true },
    { icon: PhoneIcon, label: t.contact.phone, value: site.phoneDisplay, href: `tel:+${site.whatsappNumber}` },
    { icon: MailIcon, label: t.contact.email, value: site.email, href: `mailto:${site.email}` },
    { icon: PinIcon, label: t.contact.whereWeAre, value: t.meta.location },
  ];

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
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
            <h2 className="text-3xl">{t.contact.formTitle}</h2>
            <p className="mt-2 mb-6 text-sm text-muted">{t.contact.formIntro}</p>
            <BookingForm tours={tourOptions} labels={t.booking} />
          </div>
        </div>
      </Section>
    </>
  );
}
