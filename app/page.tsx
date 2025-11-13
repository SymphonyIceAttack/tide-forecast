"use client";

import { FAQSection } from "@/components/faq-section";
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
    <div className="min-h-screen">
      <TideHeader />
      <main className="container mx-auto px-3 sm:px-4 py-4 md:py-6 max-w-7xl">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-balance">
            Get the latest tides in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              United States
            </span>{" "}
            and around the world
          </h1>
        </div>

        <div className="space-y-6 md:space-y-8">
          <LocationInfo />
          <TideChartECharts />
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TideTable />
              <TideWeekly />
            </div>
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-primary/20 shadow-xl">
                <h3 className="font-semibold mb-4 text-base md:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nearby Tides
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {(Object.keys(NOAA_STATIONS) as StationName[]).map(
                    (location) => (
                      <button
                        type="button"
                        key={location}
                        onClick={() => setCurrentLocation(location)}
                        className="w-full text-left px-3 md:px-4 py-2 rounded-md hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-200 text-sm active:scale-95 hover:shadow-md"
                      >
                        {location}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <FAQSection />
        </div>
      </main>
    </div>
  );
}
