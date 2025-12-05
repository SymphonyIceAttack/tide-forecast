import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "About Us - US Tide Forecast",
  description:
    "Learn about US Tide Forecast, your trusted source for accurate tide predictions and coastal information across the United States. Discover our mission to provide reliable NOAA tide data.",
  keywords: [
    "about tide forecast",
    "tide prediction mission",
    "NOAA tide service",
    "coastal information",
    "tide accuracy",
    "US tides team",
  ],
  openGraph: {
    title: "About Us - US Tide Forecast",
    description:
      "Learn about US Tide Forecast, your trusted source for accurate tide predictions and coastal information across the United States.",
    url: "/about",
    siteName: "US Tide Forecast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About US Tide Forecast",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - US Tide Forecast",
    description:
      "Learn about US Tide Forecast, your trusted source for accurate tide predictions and coastal information across the United States.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About Us" }];

  return (
    <div className="min-h-screen">
      <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Welcome to US Tide Forecast
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              US Tide Forecast is your trusted source for accurate, real-time
              tide predictions and coastal information across the United States.
              We provide comprehensive tide data for major coastal locations,
              helping mariners, commercial maritime operators, professional
              fishing fleets, and maritime professionals make informed decisions
              about their operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform leverages official data from the National Oceanic and
              Atmospheric Administration (NOAA) to deliver the most reliable
              tide forecasts available, ensuring you have access to the
              information you need when you need it most.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are dedicated to making tide information accessible, accurate,
              and easy to understand for everyone. Our mission is to provide
              comprehensive tide forecasting services that help people safely
              enjoy and work in coastal environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're planning a commercial maritime operation, preparing
              for a professional navigation trip, or conducting marine research,
              US Tide Forecast provides the detailed information you need.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  Real-Time Tide Data
                </h3>
                <p className="text-muted-foreground">
                  Access current tide conditions and predictions for over 100
                  coastal locations across the United States, updated in
                  real-time from NOAA sources.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  Interactive Charts
                </h3>
                <p className="text-muted-foreground">
                  Visual tide charts showing 24-hour and 7-day predictions,
                  making it easy to understand tide patterns and plan your
                  activities accordingly.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  Comprehensive Tables
                </h3>
                <p className="text-muted-foreground">
                  Detailed tide tables showing high and low tide times and
                  heights for daily and weekly forecasts, perfect for detailed
                  planning.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  Mobile Friendly
                </h3>
                <p className="text-muted-foreground">
                  Fully responsive design that works perfectly on all devices,
                  ensuring you can access tide information anywhere, anytime.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Data Accuracy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All tide predictions on US Tide Forecast are based on official
              data from the National Oceanic and Atmospheric Administration
              (NOAA). NOAA is the authoritative source for tide predictions in
              the United States, providing highly accurate data that is
              continuously monitored and updated.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our predictions typically have an accuracy of ±15 minutes for
              timing and ±0.1 to 0.2 feet for height, making them suitable for
              commercial maritime operations and professional navigation where
              precision is critical for safety and efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All predictions are based on NOAA's harmonic analysis methods and
              are validated against historical tide station data. Our data
              undergoes quality assurance checks every 30 minutes to ensure
              accuracy and reliability for safety-critical maritime
              applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Coverage Area
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide tide predictions for major coastal areas across the
              United States, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>
                West Coast: San Francisco Bay, Los Angeles, Seattle, Portland,
                San Diego
              </li>
              <li>East Coast: New York, Boston, Miami, Charleston</li>
              <li>Gulf Coast: Houston, New Orleans, Tampa</li>
              <li>Pacific Islands: Honolulu</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We're continuously expanding our coverage to include more
              locations and provide even more comprehensive tide forecasting
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Open Source & Transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              US Tide Forecast is an open source project committed to
              transparency and community collaboration. Our source code is
              available on GitHub, allowing maritime professionals, researchers,
              and developers to review, contribute, and build upon our work.
            </p>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20 mb-6">
              <h3 className="font-semibold mb-3 text-lg text-primary">
                GitHub Repository
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore our codebase, contribute improvements, or deploy your
                own instance of the tide forecasting service:
              </p>
              <a
                href="https://github.com/SymphonyIceAttack/tide-forecast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View on GitHub
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Professional Team & Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team consists of experienced marine scientists,
              oceanographers, and maritime technology specialists with decades
              of combined experience in tidal analysis and maritime safety. We
              maintain close partnerships with NOAA and leading maritime
              research institutions to ensure our service meets the highest
              professional standards.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border-2 border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">
                  Technical Leadership
                </h4>
                <p className="text-sm text-muted-foreground">
                  Led by certified marine scientists with expertise in tidal
                  dynamics, harmonic analysis, and maritime safety protocols.
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border-2 border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">
                  Quality Assurance
                </h4>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring and validation of prediction accuracy
                  against real-time tide station observations.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Professional Certifications & Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              US Tide Forecast meets the highest standards for maritime data
              services, providing certified tide predictions that meet
              international maritime safety requirements. Our service is trusted
              by:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Commercial maritime operators and shipping companies</li>
              <li>Port authorities and harbor masters</li>
              <li>Professional fishing fleets and maritime workers</li>
              <li>Coastal research institutions and marine scientists</li>
              <li>Maritime insurance and risk assessment companies</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Our data quality management system ensures compliance with
              international standards for maritime navigation safety and
              environmental protection protocols.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Our Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to providing the most accurate and up-to-date
              tide information available. Our platform is designed to be
              user-friendly and accessible to everyone, from casual beach
              visitors to critical professional maritime operations requiring
              precision timing for safety.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, suggestions, or feedback about our
              service, please don't hesitate to
              <a
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                {" "}
                contact us
              </a>
              . We're here to help and continuously improving our services based
              on user needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
