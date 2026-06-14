import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long Stay — Monthly Serviced Apartments in Hanoi",
  description:
    "Extended and monthly stays at AN Residence — full kitchen, laundry, workspace and 24/7 service on Ba Mau Lake, Hanoi. Up to 30%+ off for stays from 28 nights, direct only.",
  alternates: { canonical: "/long-stay" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
