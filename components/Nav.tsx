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
    { href: "/#rooms", label: t.nav.apartments },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/#location", label: t.nav.location },
    { href: "/long-stay", label: t.nav.longStay },
    { href: "/blog", label: t.nav.journal },
    { href: "/about", label: t.nav.about },
  ];

  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-2.5 lg:px-10">
        <Link href="/" aria-label="AN Residence — Home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition hover:text-ink ${isActive(link.href) ? "text-ink" : "text-ash"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/#book"
            className="hidden items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-black sm:inline-flex"
          >
            {t.nav.bookNow}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink md:hidden"
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
        <div className="border-t border-hairline bg-paper md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3.5 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold ${isActive(link.href) ? "text-ink" : "text-ash"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
