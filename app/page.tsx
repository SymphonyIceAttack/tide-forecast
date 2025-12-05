"use client";

import { Award, Clock, MapPin, Shield } from "lucide-react";
import Image from "next/image";
import { LocationInfo } from "@/components/location-info";
import { TideChartECharts } from "@/components/tide-chart-echarts";
import { TideHeader } from "@/components/tide-header";
import { TideTable } from "@/components/tide-table";
import { TideWeekly } from "@/components/tide-weekly";
import { useLocation } from "@/lib/location-context";
import { NOAA_STATIONS, type StationName } from "@/lib/noaa-stations";

export default function Home() {
  const { setCurrentLocation } = useLocation();

  return (
    <div className="min-h-screen relative">
      <TideHeader />

      {/* Hero Background Image with Professional Overlay */}
      <div className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-hidden mb-4 sm:mb-6 md:mb-8">
        <Image
          src="/images/panoramic-coast.jpg"
          alt="Professional tide forecasting for United States coastal locations - accurate NOAA tide predictions and charts"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="max-w-4xl">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white drop-shadow-lg mb-2 sm:mb-4">
                <span className="block mb-1 sm:mb-2">
                  Professional Tide Forecasting for{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  United States Coastlines
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Real-time NOAA tide predictions and professional-grade charts
                for major coastal locations. Trusted by mariners, commercial
                maritime operators, and coastal professionals nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 max-w-7xl">
        {/* Professional Trust Indicators */}
        <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-primary/20 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                NOAA Official Data
              </p>
              <p className="text-xs text-muted-foreground">Government source</p>
            </div>
            <div className="text-center">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                Real-Time Updates
              </p>
              <p className="text-xs text-muted-foreground">Every 30 minutes</p>
            </div>
            <div className="text-center">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                100+ Locations
              </p>
              <p className="text-xs text-muted-foreground">US Coastlines</p>
            </div>
            <div className="text-center">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                High Accuracy
              </p>
              <p className="text-xs text-muted-foreground">±15 minutes</p>
            </div>
          </div>
        </div>

        {/* Professional Content Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/hero-tide-scene.jpg"
              alt="Professional ocean tide analysis for maritime safety and coastal navigation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                Professional Tide Charts
              </h3>
              <p className="text-white/80 text-xs">
                Advanced visualization tools
              </p>
            </div>
          </div>
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/peaceful-beach.jpg"
              alt="Coastal safety through accurate tide forecasting and marine weather predictions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                Safety First
              </h3>
              <p className="text-white/80 text-xs">Maritime safety focus</p>
            </div>
          </div>
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/lighthouse-sunset.jpg"
              alt="Reliable tide predictions for coastal navigation and harbor operations"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                Harbor Operations
              </h3>
              <p className="text-white/80 text-xs">
                Professional maritime data
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <LocationInfo />
          <TideChartECharts />
          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TideTable />
              <TideWeekly />
            </div>
            <div className="space-y-4 sm:space-y-6">
              {/* Additional Professional Images */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ocean-aerial-view.jpg"
                    alt="Coastal aerial view showing tide patterns and marine environment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden">
                  <Image
                    src="/images/seagulls-sunrise.jpg"
                    alt="Marine environment at sunrise - optimal conditions for coastal activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Professional Location Selector */}
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border-2 border-primary/30 shadow-xl">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Professional Tide Stations
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  Select from NOAA's most critical coastal monitoring stations
                </p>
                <div className="space-y-2 sm:space-y-3 max-h-60 overflow-y-auto">
                  {(Object.keys(NOAA_STATIONS) as StationName[]).map(
                    (location) => (
                      <button
                        type="button"
                        key={location}
                        onClick={() => setCurrentLocation(location)}
                        className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-2 rounded-md hover:bg-primary/15 hover:border-primary/40 border border-transparent transition-all duration-200 text-xs sm:text-sm active:scale-95 hover:shadow-md min-h-[44px] sm:min-h-[40px] flex items-center"
                      >
                        {location}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Professional Tide Analysis */}
              <div className="relative h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tide-pools.jpg"
                  alt="Professional tide analysis - understanding coastal ecosystems and tidal patterns"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-2.5 sm:p-3">
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold mb-1">
                      Professional Analysis
                    </p>
                    <p className="text-white/80 text-xs">
                      Advanced tide science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
