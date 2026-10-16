// Small inline icons, so the site needs no icon library.
type IconProps = { className?: string };

const outline = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 1 1 6.99 3.86Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06a6.75 6.75 0 0 1-3.37-2.94c-.25-.44.25-.41.72-1.36.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48a.92.92 0 0 0-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74 1.57.68 2.19.74 2.98.62.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export function ClockIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PinIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function CarIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M5 16V11l2-5h10l2 5v5M5 16h14M5 16v2m14-2v2M5 11h14" />
      <circle cx="8" cy="13.5" r=".5" />
      <circle cx="16" cy="13.5" r=".5" />
    </svg>
  );
}

export function CompassIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function LeafIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l7-7" />
    </svg>
  );
}

export function ChatIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
    </svg>
  );
}

export function GlobeIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
