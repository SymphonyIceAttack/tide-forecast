import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
// Temporarily disabled Google Fonts due to network connectivity issues
// import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { LocationProvider } from "@/lib/location-context";

// const geist = Geist({ subsets: ["latin"] });
// const geistMono = Geist_Mono({ subsets: ["latin"] });

// JSON-LD structured data
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "US Tide Forecast",
  description:
    "Real-time NOAA tide predictions and charts for major coastal locations across the United States",
  url: "https://www.tide-forecast.art",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.tide-forecast.art/?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "US Tide Forecast",
    url: "https://www.tide-forecast.art",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "US Tide Forecast",
  url: "https://www.tide-forecast.art",
  logo: {
    "@type": "ImageObject",
    url: "https://www.tide-forecast.art/logo.png",
  },
  description:
    "Accurate tide predictions and charts for major coastal locations across the United States using real-time NOAA data",
  sameAs: ["https://www.tide-forecast.art"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tide Prediction Service",
  description:
    "Real-time tide predictions, charts, and forecasts for US coastal locations using NOAA data",
  provider: {
    "@type": "Organization",
    name: "US Tide Forecast",
  },
  serviceType: "Tide Forecasting",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  offers: {
    "@type": "Offer",
    name: "Free Tide Predictions",
    price: "0",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tide-forecast.art/",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tide-forecast.art/"),
  title: {
    default: "US Tide Forecast - Real-Time NOAA Tide Predictions & Charts",
    template: "%s | US Tide Forecast",
  },
  description:
    "Access accurate tide predictions and charts for major coastal locations across the United States. Real-time tide data from NOAA including high tide, low tide times, and tide height forecasts.",
  manifest: "/site.webmanifest",
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
    "Boston tides",
    "Portland tides",
    "Charleston tides",
    "tide height",
    "tide table",
    "coastal weather",
    "marine forecast",
    "beach tides",
    "surfing tides",
    "fishing tides",
  ],
  authors: [
    { name: "SymphoneIceAttack", url: "https://www.tide-forecast.art" },
  ],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "US Tide Forecast RSS" },
      ],
      "application/atom+xml": [
        { url: "/atom.xml", title: "US Tide Forecast Atom" },
      ],
    },
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
        type: "image/jpeg",
      },
      {
        url: "/og-image-wide.jpg",
        width: 1600,
        height: 900,
        alt: "US Tide Forecast - Coastal Tide Charts",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tideforecast",
    creator: "@tideforecast",
    title: "US Tide Forecast - Real-Time NOAA Tide Predictions & Charts",
    description:
      "Access accurate tide predictions and charts for major coastal locations across the United States.",
    images: ["/og-image.jpg", "/og-image-wide.jpg"],
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
    nocache: false,
  },
  generator: "Next.js",
  applicationName: "US Tide Forecast",
  category: "Weather Service",
  referrer: "origin-when-cross-origin",
  classification: "Weather, Marine, Tides, NOAA Data",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "application-name": "US Tide Forecast",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1e40af",
      },
    ],
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
    yahoo: "your-yahoo-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <LocationProvider>{children}</LocationProvider>
          </QueryProvider>
        </ThemeProvider>
        <Analytics />

        {/* JSON-LD Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </body>
    </html>
  );
}
