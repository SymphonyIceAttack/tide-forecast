import { Clock, Mail, MapPin, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us - US Tide Forecast",
  description:
    "Get in touch with US Tide Forecast. Contact us for support, feedback, or questions about our tide prediction services.",
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact Us" }];

  return (
    <div className="min-h-screen">
      <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              We'd love to hear from you! Whether you have questions about our
              tide predictions, need technical support, or have suggestions for
              improving our service, please don't hesitate to reach out.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      Email Support
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      For general inquiries, technical support, or feedback
                    </p>
                    <a
                      href="mailto:support@tide-forecast.art"
                      className="text-primary hover:underline font-medium"
                    >
                      support@tide-forecast.art
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      Business Inquiries
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      For partnerships, API access, or business-related
                      questions
                    </p>
                    <a
                      href="mailto:business@tide-forecast.art"
                      className="text-primary hover:underline font-medium"
                    >
                      business@tide-forecast.art
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Location</h3>
                    <p className="text-muted-foreground">
                      United States
                      <br />
                      Serving coastal areas nationwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground">
                      We typically respond to all inquiries within 24-48 hours
                      during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before contacting us, you might find the answer to your question
              in our comprehensive FAQ section. Visit our dedicated FAQ page for
              detailed information about:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>How accurate are our tide predictions?</li>
              <li>What data sources do we use?</li>
              <li>How to use tide charts for different activities</li>
              <li>Weather effects on tide predictions</li>
              <li>Technical troubleshooting</li>
            </ul>
            <a href="/faq" className="text-primary hover:underline font-medium">
              Visit our FAQ page →
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Open Source & Contributions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              US Tide Forecast is an open source project! We welcome
              contributions from developers, marine scientists, and maritime
              professionals. The project is hosted on GitHub where you can:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  For Developers
                </h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• Report bugs and issues</li>
                  <li>• Request new features</li>
                  <li>• Submit pull requests</li>
                  <li>• Review code changes</li>
                  <li>• Deploy your own instance</li>
                </ul>
                <a
                  href="https://github.com/SymphonyIceAttack/tide-forecast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  GitHub Repository
                </a>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  For Maritime Professionals
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Share feedback and requirements</li>
                  <li>• Suggest new features for professionals</li>
                  <li>• Report accuracy issues</li>
                  <li>• Propose additional locations</li>
                  <li>• Contribute domain expertise</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Report Issues
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you encounter any technical issues with our website or tide
              predictions, please help us improve by reporting the problem. When
              reporting an issue, please include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>
                Your location or the specific area you're checking tides for
              </li>
              <li>The time and date when you encountered the issue</li>
              <li>
                What you were trying to do (check tides, view charts, etc.)
              </li>
              <li>Any error messages you received</li>
              <li>Your browser and device information (if relevant)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This information helps us quickly identify and resolve issues to
              improve the service for all users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Feature Requests
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We constantly work to improve US Tide Forecast based on user
              feedback. If you have suggestions for new features, additional
              locations, or improvements to existing functionality, we'd love to
              hear from you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While we can't guarantee that every request will be implemented,
              we carefully review all suggestions and prioritize improvements
              that will benefit the largest number of users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Privacy and Data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We take your privacy seriously. Any information you share with us
              will be handled according to our
              <a
                href="/privacy-policy"
                className="text-primary hover:underline font-medium"
              >
                {" "}
                Privacy Policy
              </a>
              . We do not share personal information with third parties and only
              use contact information to respond to your inquiries.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
