import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AN Journal — Craft, Neighbourhood & Stays",
  description:
    "Stories from AN Residence — Vietnamese lacquer craft, mornings by Ba Mau Lake, and what it's like to live a month in Hanoi.",
  alternates: { canonical: "/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
