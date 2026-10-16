import Link from "next/link";
import { navLinks, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-forest text-ivory/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-ivory">{site.name}</p>
          <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-light">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ivory">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
            <li>
              <a href={site.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                Find us on TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <p className="container-page py-6 text-xs text-ivory/60">
          © {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
