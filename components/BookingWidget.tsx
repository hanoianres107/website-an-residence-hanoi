"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";
import { ROOM_TYPES } from "@/lib/roomTypes";

const PHONE = "84905991979";
const EMAIL = "anresidence107h3m@gmail.com";

function waUrl(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}
function mailtoUrl(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

type Mode = "stay" | "long";

export function BookingWidget() {
  const { lang, t } = useLang();
  const [mode, setMode] = useState<Mode>("stay");

  const rooms = ROOM_TYPES.map((rt) => ({ tier: rt.tier, name: t.tiers[rt.tier].name, fromRate: rt.fromRate }));

  // Stay state
  const [room, setRoom] = useState<string>("any");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);

  // Long-stay state
  const [lRoom, setLRoom] = useState<string>(rooms[0].tier);
  const [months, setMonths] = useState(1);
  const [start, setStart] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const roomName = (tier: string) => rooms.find((r) => r.tier === tier)?.name ?? (lang === "vi" ? "Bất kỳ" : "Any");

  function buildStay() {
    const r = room === "any" ? t.booking.anyRoom : roomName(room);
    const lines =
      lang === "vi"
        ? `Xin chào AN Residence Hanoi! Tôi muốn kiểm tra phòng trống:\n• Hạng phòng: ${r}\n• Nhận phòng: ${checkin || "—"}\n• Trả phòng: ${checkout || "—"}\n• Số khách: ${guests}\nCảm ơn AN!`
        : `Hello AN Residence Hanoi! I'd like to check availability:\n• Room type: ${r}\n• Check-in: ${checkin || "—"}\n• Check-out: ${checkout || "—"}\n• Guests: ${guests}\nThank you!`;
    return lines;
  }
  function buildLong() {
    const r = roomName(lRoom);
    const lines =
      lang === "vi"
        ? `Xin chào AN Residence Hanoi! Tôi muốn thuê dài hạn:\n• Hạng phòng: ${r}\n• Thời gian: ${months} tháng\n• Dự kiến nhận phòng: ${start || "—"}\nVui lòng gửi báo giá tháng. Cảm ơn AN!`
        : `Hello AN Residence Hanoi! I'd like a long-term stay:\n• Room type: ${r}\n• Length: ${months} months\n• Expected start: ${start || "—"}\nPlease send a monthly quote. Thank you!`;
    return lines;
  }

  const isLong = mode === "long";
  const msg = isLong ? buildLong() : buildStay();
  const subject = isLong ? t.booking.waLongSubject : t.booking.waStaySubject;

  const selectCls =
    "w-full rounded-xl border border-hairline bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-walnut";
  const labelCls = "block font-label text-[10px] text-ash mb-1.5";

  return (
    <div id="book" className="scroll-mt-28">
      <div className="rounded-2xl border border-hairline bg-paper p-5 shadow-float sm:p-6">
        {/* Tabs */}
        <div className="mb-5 inline-flex rounded-full bg-paper-soft p-1">
          {(["stay", "long"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-4 py-2 text-xs font-label transition ${
                mode === m ? "bg-son text-paper" : "text-walnut hover:text-ink"
              }`}
            >
              {m === "stay" ? t.booking.tabStay : t.booking.tabLong}
            </button>
          ))}
        </div>

        {/* Fields */}
        {!isLong ? (
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto] md:items-end">
            <div>
              <label className={labelCls}>{t.booking.roomLabel}</label>
              <select value={room} onChange={(e) => setRoom(e.target.value)} className={selectCls}>
                <option value="any">{t.booking.anyRoom}</option>
                {rooms.map((r) => (
                  <option key={r.tier} value={r.tier}>{r.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>{t.booking.checkin}</label>
              <input type="date" min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} className={selectCls} />
            </div>
            <div>
              <label className={labelCls}>{t.booking.checkout}</label>
              <input type="date" min={checkin || today} value={checkout} onChange={(e) => setCheckout(e.target.value)} className={selectCls} />
            </div>
            <div>
              <label className={labelCls}>{t.booking.guests}</label>
              <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={selectCls}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} {t.booking.guest}</option>
                ))}
              </select>
            </div>
            {/* TODO: wire Gohost availability API here; for now sends a WhatsApp request */}
            <a
              href={waUrl(msg)}
              target="_blank"
              rel="noreferrer"
              className="press inline-flex h-[42px] items-center justify-center rounded-xl bg-son px-5 text-sm font-label text-paper hover:bg-son-deep"
            >
              {t.booking.stayCta}
            </a>
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
            <div>
              <label className={labelCls}>{t.booking.roomLabel}</label>
              <select value={lRoom} onChange={(e) => setLRoom(e.target.value)} className={selectCls}>
                {rooms.map((r) => (
                  <option key={r.tier} value={r.tier}>
                    {r.name} · {t.booking.fromShort} {(r.fromRate / 1_000_000).toFixed(1)}M{t.booking.perNight}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>{t.booking.monthsLabel}</label>
              <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className={selectCls}>
                {[1, 2, 3, 6, 9, 12].map((n) => (
                  <option key={n} value={n}>{n} {t.booking.monthUnit}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>{t.booking.startFrom}</label>
              <input type="date" min={today} value={start} onChange={(e) => setStart(e.target.value)} className={selectCls} />
            </div>
            <a
              href={waUrl(msg)}
              target="_blank"
              rel="noreferrer"
              className="press inline-flex h-[42px] items-center justify-center rounded-xl bg-son px-5 text-sm font-label text-paper hover:bg-son-deep"
            >
              {t.booking.longCta}
            </a>
          </div>
        )}

        {/* Note + email fallback */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-ash">
          <span>{isLong ? t.booking.longNote : t.booking.stayNote}</span>
          <a href={mailtoUrl(subject, msg)} className="font-label text-son hover:text-son-deep">
            {t.booking.viaEmail} →
          </a>
        </div>
      </div>
    </div>
  );
}
