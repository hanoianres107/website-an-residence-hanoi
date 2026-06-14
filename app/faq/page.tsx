"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function FaqPage() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.faq.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05]">
            {t.faq.heroTitle}
          </h1>
          <p className="mt-5 text-lg text-walnut leading-relaxed">{t.faq.heroLead}</p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10 pb-16">
          <div className="border-t border-line">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl text-ink leading-snug">{item.q}</span>
                    <span
                      className={`shrink-0 text-son transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-8 text-walnut leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-snug">{t.contact.heroTitle}</h2>
          <p className="mt-4 text-walnut">{t.contact.heroLead}</p>
          <Link
            href="/contact"
            className="press group mt-7 inline-flex items-center gap-2 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep"
          >
            {t.nav.contact}
            <span className="cta-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
