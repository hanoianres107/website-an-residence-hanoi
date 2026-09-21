"use client";

import { useState } from "react";
import type { Tier } from "@/lib/apartments";
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
export type RoomChoice = Tier | "any";

/** Request form inside the sticky "Book your stay" card. No booking engine yet — it composes a WhatsApp / email request. */
export function BookingWidget({ room, onRoomChange }: { room: RoomChoice; onRoomChange: (r: RoomChoice) => void }) {
  const { lang, t } = useLang();
  const [mode, setMode] = useState<Mode>("stay");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);
  const [months, setMonths] = useState(1);
  const [start, setStart] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const roomName = room === "any" ? t.booking.anyRoom : ROOM_TYPES.find((r) => r.tier === room)!.name;
  const isLong = mode === "long";

  const msg = isLong
    ? lang === "vi"
      ? `Xin chào AN Residence Hanoi! Tôi muốn thuê dài hạn:\n• Hạng phòng: ${roomName}\n• Thời gian: ${months} tháng\n• Dự kiến nhận phòng: ${start || "—"}\nVui lòng gửi báo giá tháng. Cảm ơn AN!`
      : `Hello AN Residence Hanoi! I'd like a long-term stay:\n• Room type: ${roomName}\n• Length: ${months} months\n• Expected start: ${start || "—"}\nPlease send a monthly quote. Thank you!`
    : lang === "vi"
      ? `Xin chào AN Residence Hanoi! Tôi muốn kiểm tra phòng trống:\n• Hạng phòng: ${roomName}\n• Nhận phòng: ${checkin || "—"}\n• Trả phòng: ${checkout || "—"}\n• Số khách: ${guests}\nCảm ơn AN!`
      : `Hello AN Residence Hanoi! I'd like to check availability:\n• Room type: ${roomName}\n• Check-in: ${checkin || "—"}\n• Check-out: ${checkout || "—"}\n• Guests: ${guests}\nThank you!`;
  const subject = isLong ? t.booking.waLongSubject : t.booking.waStaySubject;

  const field =
    "w-full rounded-xl border border-hairline bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink";
  const label = "mb-1.5 block text-xs font-semibold text-ash";

  return (
    <div className="mt-5">
      <div className="mb-4 inline-flex rounded-full bg-paper-soft p-1">
        {(["stay", "long"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              mode === m ? "bg-ink text-paper" : "text-ash hover:text-ink"
            }`}
          >
            {m === "stay" ? t.booking.tabStay : t.booking.tabLong}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div>
          <label className={label} htmlFor="book-room">
            {t.booking.roomLabel}
          </label>
          <select id="book-room" value={room} onChange={(e) => onRoomChange(e.target.value as RoomChoice)} className={field}>
            <option value="any">{t.booking.anyRoom}</option>
            {ROOM_TYPES.map((r) => (
              <option key={r.tier} value={r.tier}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {!isLong ? (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={label} htmlFor="book-in">
                  {t.booking.checkin}
                </label>
                <input id="book-in" type="date" min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="book-out">
                  {t.booking.checkout}
                </label>
                <input id="book-out" type="date" min={checkin || today} value={checkout} onChange={(e) => setCheckout(e.target.value)} className={field} />
              </div>
            </div>
            <div>
              <label className={label} htmlFor="book-guests">
                {t.booking.guests}
              </label>
              <select id="book-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={field}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {t.booking.guest}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label} htmlFor="book-months">
                {t.booking.monthsLabel}
              </label>
              <select id="book-months" value={months} onChange={(e) => setMonths(Number(e.target.value))} className={field}>
                {[1, 2, 3, 6, 9, 12].map((n) => (
                  <option key={n} value={n}>
                    {n} {t.booking.monthUnit}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="book-start">
                {t.booking.startFrom}
              </label>
              <input id="book-start" type="date" min={today} value={start} onChange={(e) => setStart(e.target.value)} className={field} />
            </div>
          </div>
        )}
      </div>

      {/* ponytail: no live availability — Gohost API not wired yet, so the button sends a request to the front desk */}
      <a
        href={waUrl(msg)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-black"
      >
        {isLong ? t.booking.longCta : t.booking.stayCta}
      </a>
      <a
        href={mailtoUrl(subject, msg)}
        className="mt-2 w-full inline-flex items-center justify-center rounded-full border border-hairline bg-paper py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
      >
        {t.booking.viaEmail}
      </a>
      <p className="mt-3 text-center text-xs text-ash">{isLong ? t.booking.longNote : t.booking.stayNote}</p>
    </div>
  );
}
