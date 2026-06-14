"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const { t, lang } = useLang();

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <SectionLabel>{t.contact.heroEyebrow}</SectionLabel>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05]">
              {t.contact.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-walnut leading-relaxed">
              {t.contact.heroLead}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/photos/lobby-3.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-10">
          {/* Channels card */}
          <div className="rounded-3xl border border-hairline bg-paper p-8">
            <SectionLabel>{t.contact.channelsTitle}</SectionLabel>
            <div className="mt-6 space-y-5">
              <ContactRow
                label={t.contact.addressTitle}
                value={t.contact.address}
                href="https://maps.app.goo.gl/"
                icon="map"
              />
              <ContactRow
                label={lang === "vi" ? "Điện thoại / Hotline" : "Phone / Hotline"}
                value={t.contact.phone}
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                icon="phone"
              />
              <ContactRow
                label={t.contact.zalo}
                value={lang === "vi" ? "Mở Zalo chat" : "Open Zalo chat"}
                href={`https://zalo.me/${t.contact.phone.replace(/\s|\+/g, "")}`}
                icon="chat"
              />
              <ContactRow
                label="Email"
                value={t.contact.email}
                href={`mailto:${t.contact.email}`}
                icon="mail"
              />
              <ContactRow
                label={t.contact.hoursTitle}
                value={t.contact.hours}
                icon="clock"
              />
            </div>
          </div>

          {/* Form card */}
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{lang === "vi" ? "Trên bản đồ" : "On the map"}</SectionLabel>
          <h2 className="mt-3 font-display text-3xl text-ink">107 Ô Đồng Lầm · Đống Đa · Hà Nội</h2>
          <div className="mt-6 relative aspect-[16/7] rounded-3xl overflow-hidden border border-line">
            <iframe
              src="https://www.google.com/maps?q=107+%C3%94+%C4%90%E1%BB%93ng+L%E1%BA%A7m,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i&output=embed"
              className="w-full h-full"
              loading="lazy"
              title="AN Residence on the map"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: "map" | "phone" | "chat" | "mail" | "clock";
}) {
  const Content = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-walnut">
        <Icon name={icon} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-label text-[10px] text-ash">{label}</div>
        <div className="mt-1 text-ink leading-snug break-words">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block hover:bg-paper-soft -m-2 p-2 rounded-xl transition">
      {Content}
    </a>
  ) : (
    Content
  );
}

function Icon({ name }: { name: string }) {
  const props = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 16, height: 16, viewBox: "0 0 24 24" };
  switch (name) {
    case "map":
      return <svg {...props}><path d="M9 2L3 5v17l6-3 6 3 6-3V2l-6 3-6-3Z" /><path d="M9 2v17M15 5v17" /></svg>;
    case "phone":
      return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92Z" /></svg>;
    case "chat":
      return <svg {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></svg>;
    case "mail":
      return <svg {...props}><path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" /></svg>;
    case "clock":
      return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    default:
      return null;
  }
}
