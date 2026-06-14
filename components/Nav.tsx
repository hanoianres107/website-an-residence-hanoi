"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLang } from "@/lib/lang";

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/apartments", label: t.nav.apartments },
    { href: "/long-stay", label: t.nav.longStay },
    { href: "/offers", label: t.nav.offers },
    { href: "/experiences", label: t.nav.experiences },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.journal },
    { href: "/about", label: t.nav.about },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" aria-label="AN Residence — Home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition hover:text-son ${
                isActive(link.href) ? "text-son" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/contact"
            className="press hidden sm:inline-flex items-center rounded-full bg-son px-4 py-2 text-xs font-label text-paper hover:bg-son-deep"
          >
            {t.nav.bookNow}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-hairline bg-paper">
          <div className="mx-auto max-w-[1320px] px-6 py-4 flex flex-col gap-3.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium hover:text-son ${
                  isActive(link.href) ? "text-son" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="press mt-1 inline-flex w-fit items-center rounded-full bg-son px-5 py-2.5 text-xs font-label text-paper"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
