import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences — Hanoi at AN's Door",
  description:
    "Ba Mau Lake, the Temple of Literature, the Old Quarter — and curated experiences from cyclo tours to lacquer workshops. Live the real Hanoi from AN Residence.",
  alternates: { canonical: "/experiences" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
