import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - US Tide Forecast",
  description:
    "Privacy Policy for US Tide Forecast. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: "Privacy Policy" }];

  return (
    <div className="min-h-screen">
      <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
          <p className="text-primary-foreground/80 mt-2">
            Last updated: November 30, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              US Tide Forecast ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website tide-forecast.art and use our tide prediction services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Information We Collect
            </h2>

            <h3 className="text-lg font-semibold mb-3 text-primary">
              Information You Provide
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personally identifiable information that you
              voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Contact us via email or contact forms</li>
              <li>Submit feedback or feature requests</li>
              <li>Report technical issues</li>
              <li>Subscribe to updates (if available)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-primary">
              Automatically Collected Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain
              information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referring website addresses</li>
              <li>IP address (anonymized for privacy)</li>
              <li>Device type and screen resolution</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-primary">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              browsing experience. Cookies are small data files stored on your
              device that help us remember your preferences and analyze site
              usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Providing and maintaining our tide prediction services</li>
              <li>
                Responding to your inquiries and providing customer support
              </li>
              <li>Improving our website and services based on user feedback</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Ensuring the security and integrity of our services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Information Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties, except in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>
                <strong>Service Providers:</strong> We may share information
                with trusted third-party service providers who assist us in
                operating our website or providing services
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or to protect our rights, property, or safety
              </li>
              <li>
                <strong>Business Transfers:</strong> Information may be
                transferred in connection with a merger, acquisition, or sale of
                assets
              </li>
              <li>
                <strong>Consent:</strong> We may share information with your
                explicit consent
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Secure data transmission using HTTPS encryption</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and authentication measures</li>
              <li>Data minimization practices</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may contain links to third-party websites or use
              third-party services. This Privacy Policy does not apply to these
              external sites or services. We encourage you to review the privacy
              policies of any third-party services you access.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may also use third-party analytics services (such as Google
              Analytics) to analyze website usage and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Your Rights and Choices
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us using the information
              provided in our Contact Us page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Cookies and Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can control cookies through your browser settings. However,
              disabling cookies may limit your ability to use certain features
              of our website. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete existing cookies</li>
              <li>Block cookies from being set in the future</li>
              <li>Set preferences for specific websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              International Data Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers are conducted
              in accordance with applicable data protection laws and with
              appropriate safeguards in place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We encourage you to review this Privacy Policy periodically for
              any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
              <p className="text-muted-foreground">
                <strong>Email:</strong> privacy@tide-forecast.art
                <br />
                <strong>Website:</strong>{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact Us Page
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
