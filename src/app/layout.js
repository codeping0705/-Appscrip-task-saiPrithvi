import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Products — Curated Shop",
  description:
    "Discover Products — curated selection of quality items. Browse by category, compare prices, and shop securely.",
  keywords: [
    "discover products",
    "online shop",
    "product listing",
    "fake store api",
    "react nextjs ecommerce demo",
  ],
  authors: [{ name: "Saiprithvi", url: "https://github.com/codeping0705" }],
  icons: {
    icon: "/images/logo-fashion-store.png",
    apple: "/images/logo-fashion-store.png",
  },
  openGraph: {
    title: "Discover Products — Curated Shop",
    description:
      "Discover Products — curated selection of quality items. Browse by category, compare prices, and shop securely.",
    url: "https://appscrip-task1.netlify.app/",
    siteName: "Discover Products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Discover Products",
    description:
      "Discover Products — curated selection of quality items. Browse by category, compare prices, and shop securely.",
    url: "https://appscrip-task1.netlify.app/",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ Script moved safely to head with next/script (no hydration mismatch) */}
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(webpageSchema)}
        </Script>

        {children}
      </body>
    </html>
  );
}
