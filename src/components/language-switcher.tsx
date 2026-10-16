"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CheckIcon, ChevronDownIcon, GlobeIcon } from "@/components/icons";
import { localeInfo, localePath, locales, stripLocale, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  /** The language of the current page. */
  current: Locale;
  /** Spoken name of the control, e.g. "Language". */
  label: string;
  /** "dropdown" for the desktop header, "list" for the mobile menu. */
  variant: "dropdown" | "list";
};

/** Lets visitors switch language. Each option links to the same page in that language. */
export function LanguageSwitcher({ current, label, variant }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const page = stripLocale(pathname);

  const options = locales.map((code) => (
    <Link
      key={code}
      href={localePath(code, page)}
      lang={localeInfo[code].htmlLang}
      hrefLang={localeInfo[code].htmlLang}
      aria-current={code === current ? "true" : undefined}
      prefetch={false}
      className={
        variant === "dropdown"
          ? "flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm hover:bg-sand aria-[current=true]:font-semibold"
          : "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm aria-[current=true]:border-forest aria-[current=true]:bg-forest aria-[current=true]:text-ivory"
      }
    >
      {localeInfo[code].name}
      {variant === "dropdown" && code === current && <CheckIcon className="size-4 text-gold" />}
    </Link>
  ));

  if (variant === "list") {
    return (
      <div>
        <p className="eyebrow">{label}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {options.map((option) => (
            <li key={option.key}>{option}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <LanguageDropdown current={current} label={label} options={options} />;
}

function LanguageDropdown({
  current,
  label,
  options,
}: {
  current: Locale;
  label: string;
  options: ReactNode[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  // Close on Escape, or on a click or tap outside the dropdown.
  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div ref={container} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={label}
        className="flex min-h-12 items-center gap-2 rounded-full px-3 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-ink"
      >
        <GlobeIcon />
        {localeInfo[current].shortName}
        <ChevronDownIcon className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul
          onClick={() => setIsOpen(false)}
          className="absolute top-full right-0 z-50 mt-2 w-52 rounded-2xl border border-line bg-ivory p-2 shadow-xl shadow-ink/10"
        >
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
