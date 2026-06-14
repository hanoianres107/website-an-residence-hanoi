import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Serviced Apartment Questions Answered",
  description:
    "Answers to common questions about AN Residence Hanoi — room types, kitchen & laundry, housekeeping, wifi, parking, long-stay terms, check-in times and pets.",
  alternates: { canonical: "/faq" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
