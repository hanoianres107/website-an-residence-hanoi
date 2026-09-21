import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanoi Journal — Seasons, Festivals & Slow Stays",
  description:
    "Local guides to Hanoi's autumn festivals, seasonal food, November weather and quieter stays by Ba Mau Lake, from Hanoi AN Residence.",
  alternates: { canonical: "/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
