"use client";

import { useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

type MobileMenuProps = {
  openLabel: string;
  closeLabel: string;
  /** The menu content (links, language list, button), rendered on the server. */
  children: ReactNode;
};

/** Menu button for phones and tablets, with a full-screen panel under the header. */
export function MobileMenu({ openLabel, closeLabel, children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? closeLabel : openLabel}
        className="-mr-2 flex size-12 items-center justify-center rounded-full"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          // Close the menu when a link inside it is tapped.
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setIsOpen(false);
          }}
          className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-ivory"
        >
          {children}
        </div>
      )}
    </div>
  );
}
