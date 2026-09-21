import { Tier, TIER_ORDER } from "./apartments";

export type RoomType = {
  tier: Tier;
  /** Room-type name exactly as sold on Booking.com (same in both languages). */
  name: string;
  hero: string;
  sizeSqm: number;
  sleeps: number;
  /** Lowest nightly price on Booking.com, VND, taxes and fees included. */
  fromRate: number;
};

// Names, sizes, max occupancy and prices copied from the Booking.com listing
// (booking.com/hotel/vn/an-residence-ho-ba-mau.html), read 21/09/2026. Booking's rate
// changes by date — e.g. Deluxe Studio 1,800,000 on 28–29/09, 2,420,000 Sun–Thu in October,
// 2,800,000 Fri–Sat, 3,480,000 in Nov–Dec — so the site shows the lowest one as "From".
// Update these three numbers whenever the Booking rates change.
const DATA: Record<Tier, Omit<RoomType, "tier">> = {
  studio: { name: "Deluxe Studio", hero: "/photos/AN-503-3.jpg", sizeSqm: 70, sleeps: 2, fromRate: 1_800_000 },
  deluxe: { name: "Junior Suite", hero: "/photos/AN-201-1.jpg", sizeSqm: 85, sleeps: 2, fromRate: 2_240_000 },
  family: {
    name: "Two-Bedroom Deluxe Apartment with Balcony",
    hero: "/photos/AN-502-2.jpg",
    sizeSqm: 125,
    sleeps: 3,
    fromRate: 3_000_000,
  },
};

export const ROOM_TYPES: RoomType[] = TIER_ORDER.map((tier) => ({ tier, ...DATA[tier] }));

export const roomType = (tier: Tier) => ROOM_TYPES.find((r) => r.tier === tier)!;

export const LOWEST_RATE = Math.min(...ROOM_TYPES.map((r) => r.fromRate));

export function formatVnd(n: number, lang: "vi" | "en") {
  return `${n.toLocaleString(lang === "vi" ? "vi-VN" : "en-US")} VND`;
}
