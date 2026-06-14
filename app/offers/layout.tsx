import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers & Rates — Best Rate When You Book Direct",
  description:
    "Book AN Residence direct for the best rate — flexible, non-refundable, early-bird and long-stay rate plans, plus perks reserved for AN's own guests.",
  alternates: { canonical: "/offers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
