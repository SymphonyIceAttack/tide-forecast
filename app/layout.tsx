import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";
import { LocationProvider } from "@/lib/location-context";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "US Tide Forecast - Real-Time NOAA Tide Predictions & Charts",
  description:
    "Access accurate tide predictions and charts for major coastal locations across the United States. Real-time tide data from NOAA including high tide, low tide times, and tide height forecasts.",
  keywords: [
    "tide chart",
    "tide times",
    "tide predictions",
    "NOAA tides",
    "high tide",
    "low tide",
    "tide forecast",
    "coastal tides",
    "ocean tides",
    "tide schedule",
    "San Francisco tides",
    "Los Angeles tides",
    "Seattle tides",
    "Miami tides",
    "New York tides",
  ],
  authors: [{ name: "SymphoneIceAttack" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  metadataBase: new URL("https://tideschart.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "US Tide Forecast - Real-Time NOAA Tide Predictions & Charts",
    description:
      "Access accurate tide predictions and charts for major coastal locations across the United States. Real-time tide data from NOAA.",
    siteName: "US Tide Forecast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "US Tide Forecast - NOAA Tide Predictions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Tide Forecast - Real-Time NOAA Tide Predictions & Charts",
    description:
      "Access accurate tide predictions and charts for major coastal locations across the United States.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "SymphoneIceAttack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <QueryProvider>
          <LocationProvider>{children}</LocationProvider>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
