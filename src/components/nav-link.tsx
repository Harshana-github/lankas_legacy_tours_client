"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Menu link that marks itself as the current page (aria-current), so it can be styled as active. */
export function NavLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const pathname = usePathname();
  const isCurrent = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link href={href} aria-current={isCurrent ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}
