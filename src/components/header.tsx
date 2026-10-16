"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/ui";
import { navLinks, site } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none" aria-label={`${site.name} home`}>
      <span className="font-display text-xl font-medium whitespace-nowrap sm:text-2xl">{site.name}</span>
      <span className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold">
        {site.tagline}
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label="Book on WhatsApp" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-12 items-center justify-center rounded-full lg:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-ivory lg:hidden"
        >
          <ul className="container-page py-6">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="block py-5 font-display text-3xl aria-[current=page]:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-page pb-10">
            <WhatsAppButton label="Book on WhatsApp" className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
