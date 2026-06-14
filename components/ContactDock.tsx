"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";

const PHONE = "+84905991979";
const ZALO = "https://zalo.me/84905991979";
const WHATSAPP = "https://wa.me/84905991979";

export function ContactDock() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const actions = [
    {
      key: "call",
      href: `tel:${PHONE}`,
      label: t.contactCta.call,
      bg: "bg-son hover:bg-son-deep",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 005.5 5.5l1.5-2L20.5 14v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.2 2 2 0 016.5 3z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      key: "zalo",
      href: ZALO,
      label: t.contactCta.zalo,
      bg: "bg-[#0068FF] hover:bg-[#0055d4]",
      icon: <span className="font-extrabold text-[13px] leading-none tracking-tight">Zalo</span>,
    },
    {
      key: "whatsapp",
      href: WHATSAPP,
      label: t.contactCta.whatsapp,
      bg: "bg-[#25D366] hover:bg-[#1ebe57]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.6-.1l.6-.8c.2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.6-.1 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed right-4 bottom-20 sm:bottom-5 z-40 flex flex-col items-end gap-3">
      {/* Expanded actions */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {actions.map((a) => (
          <a
            key={a.key}
            href={a.href}
            target={a.key === "call" ? undefined : "_blank"}
            rel={a.key === "call" ? undefined : "noreferrer"}
            className="group flex items-center gap-2.5"
            aria-label={a.label}
          >
            <span className="rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-paper opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0">
              {a.label}
            </span>
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-float transition active:scale-95 ${a.bg}`}
            >
              {a.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Main toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.contactCta.open}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-son text-paper shadow-float transition hover:bg-son-deep active:scale-95"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-son animate-ping opacity-30" aria-hidden />
        )}
        <span className="relative">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 20l1.1-4.6A8.5 8.5 0 1121 11.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
              <circle cx="12" cy="11.5" r="1" fill="currentColor" />
              <circle cx="15.5" cy="11.5" r="1" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
