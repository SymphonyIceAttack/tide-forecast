"use client";

import { Clock, ExternalLink, Mail, MapPin, Shield, Waves } from "lucide-react";
import Link from "next/link";

export function ProfessionalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-8 sm:mt-12 md:mt-16">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-primary animate-pulse" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                US Tide Forecast
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional-grade tide forecasting service providing real-time
              NOAA tide predictions and interactive charts for US coastal
              locations.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>NOAA Certified Data Source</span>
            </div>
          </div>

          {/* Professional Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Professional Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Real-time Tide Monitoring</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Clock className="h-4 w-4 text-primary" />
                <span>30-Minute Data Updates</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Shield className="h-4 w-4 text-primary" />
                <span>±15 Minute Accuracy</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span>100+ Coastal Stations</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Our Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Professional FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Professional Support
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tide Analysis Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Data Source */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Data & Support
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground mb-1">Data Source</p>
                <a
                  href="https://www.noaa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  NOAA (National Oceanic and Atmospheric Administration)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Service Hours
                </p>
                <p className="text-muted-foreground">24/7 Real-Time Data</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Professional Support
                </p>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Mail className="h-3 w-3" />
                  Contact Professional Team
                </Link>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Open Source</p>
                <a
                  href="https://github.com/SymphonyIceAttack/tide-forecast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  View Source Code
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-4 sm:p-6 mb-6">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Trusted by Maritime Professionals
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
              <div className="flex items-center justify-center gap-1">
                <Shield className="h-3 w-3 text-primary" />
                <span>Commercial Fishing</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3 text-primary" />
                <span>Harbor Operations</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Clock className="h-3 w-3 text-primary" />
                <span>Coastal Navigation</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <ExternalLink className="h-3 w-3 text-primary" />
                <span>Marine Research</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© {currentYear} US Tide Forecast. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <span>Professional Tide Service</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-primary" />
              <span>NOAA Data Certified</span>
            </div>
          </div>
        </div>

        {/* Technical Information */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Professional tide predictions sourced from NOAA tide stations.
            Predictions accurate to ±15 minutes for timing and ±0.1-0.2 feet for
            height. Data updated every 30 minutes. Service covers 100+ major US
            coastal locations.
          </p>
        </div>
      </div>
    </footer>
  );
}
