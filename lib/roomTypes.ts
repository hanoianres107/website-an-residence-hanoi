import { APARTMENTS, Tier, TIER_ORDER } from "./apartments";

export type RoomType = {
  tier: Tier;
  hero: string;
  sizeLabel: string;
  bedrooms: number;
  sleeps: number;
  fromRate: number;
  count: number;
};

const HERO: Record<Tier, string> = {
  studio: "/photos/AN-203-1.jpg",
  deluxe: "/photos/AN-601-1.jpg",
  family: "/photos/AN-502-1.jpg",
};

const SIZE_LABEL: Record<Tier, string> = {
  studio: "70m²",
  deluxe: "85m²",
  family: "125m²",
};

const BEDROOMS: Record<Tier, number> = { studio: 1, deluxe: 1, family: 2 };

// Max adults per the official Partner KIT occupancy.
const SLEEPS: Record<Tier, number> = { studio: 2, deluxe: 2, family: 3 };

// Public "from" rates — lowest public rate (summer weekday) per the Partner KIT 2026 sheet.
const FROM_RATE: Record<Tier, number> = {
  studio: 1_600_000,
  deluxe: 1_800_000,
  family: 2_500_000,
};

export const ROOM_TYPES: RoomType[] = TIER_ORDER.map((tier) => {
  const units = APARTMENTS.filter((a) => a.tier === tier);
  return {
    tier,
    hero: HERO[tier],
    sizeLabel: SIZE_LABEL[tier],
    bedrooms: BEDROOMS[tier],
    sleeps: SLEEPS[tier],
    fromRate: FROM_RATE[tier],
    count: units.length,
  };
});
