import { APT_PHOTO_COUNT } from "./apartments";

export type GalleryCategory = "apartments" | "lobby" | "amenities" | "exterior";

export type GalleryPhoto = {
  src: string;
  category: GalleryCategory;
  alt: string;
};

function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

const apartmentPhotos: GalleryPhoto[] = Object.entries(APT_PHOTO_COUNT).flatMap(([code, count]) =>
  range(count).map((i) => ({
    src: `/photos/AN-${code}-${i}.jpg`,
    category: "apartments" as const,
    alt: `AN.${code}`,
  })),
);

const lobbyPhotos: GalleryPhoto[] = range(7).map((i) => ({
  src: `/photos/lobby-${i}.jpg`,
  category: "lobby" as const,
  alt: "AN Residence — The AN Gallery lobby",
}));

const amenityPhotos: GalleryPhoto[] = [
  ...range(2).map((i) => ({ src: `/photos/gym-${i}.jpg`, category: "amenities" as const, alt: "Gym & yoga studio" })),
  ...range(4).map((i) => ({ src: `/photos/rooftop-${i}.jpg`, category: "amenities" as const, alt: "Lakeside rooftop" })),
];

const exteriorPhotos: GalleryPhoto[] = range(4).map((i) => ({
  src: `/photos/exterior-${i}.jpg`,
  category: "exterior" as const,
  alt: "AN Residence — Ba Mau Lake exterior",
}));

// Interleave categories so the "All" view reads as a varied magazine spread.
export const GALLERY: GalleryPhoto[] = [
  lobbyPhotos[0],
  ...apartmentPhotos.slice(0, 6),
  exteriorPhotos[0],
  ...apartmentPhotos.slice(6, 14),
  ...amenityPhotos.slice(0, 3),
  ...apartmentPhotos.slice(14, 24),
  lobbyPhotos[1],
  ...apartmentPhotos.slice(24),
  ...lobbyPhotos.slice(2),
  ...amenityPhotos.slice(3),
  ...exteriorPhotos.slice(1),
].filter(Boolean);
