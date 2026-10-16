// Small building blocks shared by every page.
import type { ComponentProps, ReactNode } from "react";
import { StarIcon, WhatsAppIcon } from "@/components/icons";
import { LocaleLink } from "@/components/locale-link";
import { whatsappUrl } from "@/lib/whatsapp";

const buttonStyles = {
  primary: "bg-forest text-ivory hover:bg-forest-soft",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/3",
  light: "bg-ivory text-forest hover:bg-sand",
  outlineLight: "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/5",
};

type ButtonLinkProps = ComponentProps<typeof LocaleLink> & {
  variant?: keyof typeof buttonStyles;
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <LocaleLink
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-colors ${buttonStyles[variant]} ${className}`}
      {...props}
    />
  );
}

type WhatsAppButtonProps = {
  message?: string;
  label: string;
  variant?: keyof typeof buttonStyles;
  className?: string;
};

export function WhatsAppButton({
  message,
  label,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <ButtonLink
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      <WhatsAppIcon />
      {label}
    </ButtonLink>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  const centered = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${centered}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Title band at the top of inner pages. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="border-b border-line bg-sand/60">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
    </header>
  );
}

/** Star rating. `label` is the spoken description, e.g. "5 out of 5 stars". */
export function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-0.5 text-gold" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className={`size-4 ${i < rating ? "" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
}
