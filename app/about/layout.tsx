import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AN — Where An Nhiên Begins",
  description:
    "The story of AN Residence: An Nhiên, Indochine craft, and fifteen apartments built to feel like a homecoming on Ba Mau Lake, Hanoi.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
