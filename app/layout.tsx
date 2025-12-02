import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
// Temporarily disabled Google Fonts due to network connectivity issues
// import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";
import { ProfessionalFooter } from "@/components/professional-footer";
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

// FAQ Page Schema for enhanced SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are tides and why do they occur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tides are the rise and fall of sea levels caused by gravitational forces exerted by the Moon and Sun, combined with Earth's rotation. The Moon's gravity pulls water toward it, creating a bulge on the side of Earth facing the Moon. A similar bulge occurs on the opposite side due to inertial forces. These bulges cause high tides, while areas between them experience low tides.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are the tide predictions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tide predictions are sourced from NOAA (National Oceanic and Atmospheric Administration) and are highly accurate for astronomical tides. However, actual water levels can be affected by weather conditions like wind, atmospheric pressure, and storms. We update our data every 30 minutes to ensure you have the most current information available.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use this tide chart for fishing or boating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For fishing, many anglers find the best activity occurs during tidal changes, especially the hour before and after high or low tide. For boating, check the tide times to ensure adequate water depth for navigation and safe harbor entry. Always combine tide information with local knowledge, weather forecasts, and navigation charts for the safest experience on the water.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tide-forecast.art/"),
  title: {
    default:
      "Professional US Tide Forecast | NOAA Certified Tide Predictions & Charts",
    template: "%s | US Tide Forecast - Professional NOAA Tide Service",
  },
  description:
    "Professional-grade tide forecasting service providing real-time NOAA tide predictions and interactive charts for US coastal locations. Trusted by mariners, fishermen, and coastal professionals nationwide. High-accuracy tide data with ±15 minute precision.",
  manifest: "/site.webmanifest",
  keywords: [
    "professional tide forecast",
    "NOAA certified tides",
    "maritime tide predictions",
    "commercial fishing tides",
    "harbor tide charts",
    "coastal navigation tides",
    "professional tide service",
    "maritime weather tides",
    "tide predictions USA",
    "coastal safety tides",
    "tide times professional",
    "high accuracy tide forecast",
    "real-time NOAA tides",
    "coastal professional tools",
    "maritime industry tides",
    "tide chart professional",
    "coastal management tides",
    "marine navigation tides",
    "tide forecasting service",
    "professional ocean data",
    "tide height predictions",
    "coastal monitoring tides",
    "tide schedule professional",
    "marine safety tides",
    "coastal operations tides",
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
    title:
      "Professional US Tide Forecast | NOAA Certified Tide Predictions & Charts",
    description:
      "Professional-grade tide forecasting service providing real-time NOAA tide predictions and interactive charts for US coastal locations. Trusted by mariners, fishermen, and coastal professionals nationwide.",
    siteName: "US Tide Forecast - Professional Tide Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional US Tide Forecast - NOAA Certified Tide Predictions",
        type: "image/jpeg",
      },
      {
        url: "/og-image-wide.jpg",
        width: 1600,
        height: 900,
        alt: "Professional Tide Forecasting Service for US Coastlines",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tideforecast",
    creator: "@tideforecast",
    title:
      "Professional US Tide Forecast | NOAA Certified Tide Predictions & Charts",
    description:
      "Professional-grade tide forecasting service providing real-time NOAA tide predictions and interactive charts for US coastal locations.",
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
  applicationName: "US Tide Forecast - Professional Service",
  category: "Professional Weather & Marine Service",
  referrer: "origin-when-cross-origin",
  classification:
    "Professional Weather Service, Marine Forecasting, NOAA Data, Coastal Management",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "application-name": "US Tide Forecast",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "business:contact_data:street_address": "United States Coastline",
    "business:contact_data:locality": "United States",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "N/A",
    "business:contact_data:website": "https://www.tide-forecast.art",
    "business:hours": "24/7",
    "service-area": "United States Coastal Areas",
    "data-source": "NOAA (National Oceanic and Atmospheric Administration)",
    accuracy: "±15 minutes timing, ±0.1-0.2 feet height",
    "update-frequency": "Every 30 minutes",
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
        <ProfessionalFooter />

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
        <Script
          id="faq-page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema),
          }}
        />
      </body>
    </html>
  );
}
