import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/lang";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactDock } from "@/components/ContactDock";
import { SITE_URL } from "@/lib/site";

// One sans for the whole site, as on the Eden page (catbaoutdoors.vn) — with the Vietnamese subset
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AN Residence — Lakeside Indochine Apartments in Hanoi",
    template: "%s · AN Residence",
  },
  description:
    "15 boutique serviced apartments on Ba Mau Lake, Dong Da, Hanoi — studios, suites and two-bedroom apartments with private kitchens. Book direct with AN Residence.",
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
    locale: "en_US",
    alternateLocale: "vi_VN",
    images: [{ url: "/brand/an-residence-og-1200x630.png", width: 1200, height: 630, alt: "Hanoi AN Residence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AN Residence — Lakeside Indochine Apartments in Hanoi",
    description: "15 boutique serviced apartments on Ba Mau Lake, Hanoi.",
    images: ["/brand/an-residence-og-1200x630.png"],
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
  priceRange: "From 1,800,000 VND per night",
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
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fitness room", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "24-hour front desk", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
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
