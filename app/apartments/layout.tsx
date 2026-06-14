import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Apartments — Studio, Deluxe & Family Suites",
  description:
    "Three room types across 15 boutique serviced apartments on Ba Mau Lake, Hanoi — Studio 70m², Deluxe 85m² lakeview, and Family 2-bedroom suites up to 125m².",
  alternates: { canonical: "/apartments" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
