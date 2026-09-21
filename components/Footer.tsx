"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t } = useLang();

  const stayLinks = [
    { href: "/apartments", label: t.nav.apartments },
    { href: "/long-stay", label: t.nav.longStay },
    { href: "/offers", label: t.nav.offers },
    { href: "/amenities", label: t.nav.amenities },
    { href: "/contact", label: t.nav.contact },
  ];

  const discoverLinks = [
    { href: "/experiences", label: t.nav.experiences },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.journal },
    { href: "/faq", label: t.nav.faq },
    { href: "/location", label: t.nav.location },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <footer className="mt-24 border-t border-hairline bg-paper-soft text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-walnut">
            {t.footer.blurb}
          </p>
          <p className="mt-5 text-sm font-semibold text-son">{t.brandTag}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">{t.footer.stay}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {stayLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-son">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">{t.footer.explore}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {discoverLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-son">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="text-walnut">107 Ô Đồng Lầm</li>
            <li className="text-walnut">Đống Đa, Hà Nội</li>
            <li><a href="tel:+84905991979" className="hover:text-son">+84 905 991 979</a></li>
            <li><a href="mailto:anresidence107h3m@gmail.com" className="hover:text-son">anresidence107h3m@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-5 lg:px-10 flex flex-wrap items-center justify-between gap-3 text-xs text-ash">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.brandLine}</span>
        </div>
      </div>
    </footer>
  );
}
