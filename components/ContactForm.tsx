"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "./SectionLabel";

const PHONE = "84905991979";
const EMAIL = "anresidence107h3m@gmail.com";

export function ContactForm({ className = "" }: { className?: string }) {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function compose() {
    return lang === "vi"
      ? `Xin chào AN Residence Hanoi!\n• Họ tên: ${name || "—"}\n• Liên hệ: ${contact || "—"}\n• Lời nhắn: ${message || "—"}`
      : `Hello AN Residence Hanoi!\n• Name: ${name || "—"}\n• Contact: ${contact || "—"}\n• Message: ${message || "—"}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = compose();
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(body)}`, "_blank");
    setSent(true);
  }

  const fieldCls =
    "w-full bg-paper rounded-xl border border-hairline px-4 py-3 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10";

  return (
    <form onSubmit={onSubmit} className={`rounded-3xl border border-hairline bg-paper p-8 space-y-4 ${className}`}>
      <SectionLabel>{t.contact.formTitle}</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <label className="block">
          <span className="font-label text-[10px] text-ash">{t.contact.formName}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className={fieldCls + " mt-1.5"} />
        </label>
        <label className="block">
          <span className="font-label text-[10px] text-ash">{t.contact.formContact}</span>
          <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" className={fieldCls + " mt-1.5"} />
        </label>
      </div>
      <label className="block">
        <span className="font-label text-[10px] text-ash">{t.contact.formMessage}</span>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className={fieldCls + " mt-1.5"} />
      </label>
      <button
        type="submit"
        className="press group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-son px-6 py-3.5 text-sm font-label text-paper hover:bg-son-deep"
      >
        {t.contact.formCta}
        <span className="cta-arrow">→</span>
      </button>
      <p className="text-xs text-ash text-center">
        {sent ? (lang === "vi" ? "Đang mở WhatsApp… nếu chưa, anh/chị gửi qua email giúp em." : "Opening WhatsApp… if it didn't, please email us.") : t.contact.formNote}
      </p>
      <p className="text-center">
        <a href={`mailto:${EMAIL}`} className="font-label text-[11px] text-son hover:text-son-deep">
          {lang === "vi" ? "hoặc email " : "or email "} {EMAIL}
        </a>
      </p>
    </form>
  );
}
