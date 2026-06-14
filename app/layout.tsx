import type { Metadata } from "next";
import { Lora, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/lang";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactDock } from "@/components/ContactDock";

// Grounded warm serif — headings & display (less "bay" than a high-contrast serif, full Vietnamese)
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Body, labels, buttons & logo — one sans for the whole system, full Vietnamese diacritics
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Handwritten accent ("Mừng bạn về nhà") — warm, with full Vietnamese support
const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["600", "700"],
  display: "swap",
});

const SITE_URL = "https://anresidencehanoi.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AN Residence — Lakeside Indochine Apartments in Hanoi",
    template: "%s · AN Residence",
  },
  description:
    "15 căn hộ dịch vụ boutique mặt Hồ Ba Mẫu, quận Đống Đa, Hà Nội — Indochine craftsmanship × modern comfort. Nơi An Nhiên bắt đầu / Where An Nhiên begins.",
  keywords: [
    "AN Residence",
    "căn hộ dịch vụ Hà Nội",
    "serviced apartment Hanoi",
    "boutique apartment Hanoi",
    "Ba Mau Lake",
    "Hồ Ba Mẫu",
    "lakeside apartment Hanoi",
    "long stay Hanoi",
    "Indochine apartment",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "AN Residence Hanoi",
    title: "AN Residence — Lakeside Indochine Apartments in Hanoi",
    description:
      "15 boutique serviced apartments on Ba Mau Lake, Hanoi. Indochine craftsmanship × modern comfort.",
    url: SITE_URL,
    locale: "vi_VN",
    alternateLocale: "en_US",
    images: [{ url: "/photos/lobby-1.jpg", width: 1200, height: 800, alt: "AN Residence — The AN Gallery lobby" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AN Residence — Lakeside Indochine Apartments in Hanoi",
    description: "15 boutique serviced apartments on Ba Mau Lake, Hanoi.",
    images: ["/photos/lobby-1.jpg"],
  },
  robots: { index: true, follow: true },
};

const HOTEL_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "AN Residence Hanoi",
  description:
    "15 boutique serviced apartments on Ba Mau Lake, Dong Da, Hanoi — Indochine craftsmanship with modern comfort.",
  url: SITE_URL,
  telephone: "+84905991979",
  email: "anresidence107h3m@gmail.com",
  priceRange: "1,800,000–6,200,000 VND",
  currenciesAccepted: "VND",
  address: {
    "@type": "PostalAddress",
    streetAddress: "107 Ô Đồng Lầm",
    addressLocality: "Đống Đa",
    addressRegion: "Hà Nội",
    postalCode: "11509",
    addressCountry: "VN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.0143252, longitude: 105.8399899 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "9" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Gym & yoga studio", value: true },
    { "@type": "LocationFeatureSpecification", name: "Full kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 reception", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lora.variable} ${inter.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOTEL_JSONLD) }}
        />
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactDock />
        </LanguageProvider>
      </body>
    </html>
  );
}
