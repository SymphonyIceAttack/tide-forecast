"use client";

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
      {/* Hero Background Image */}
      <div className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-hidden mb-4 sm:mb-6 md:mb-8">
        <Image
          src="/images/panoramic-coast.jpg"
          alt="Beautiful coastal vista"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex items-center">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              <span className="block mb-1 sm:mb-2">
                Get the latest tides in{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                United States
              </span>{" "}
              and around the world
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 max-w-7xl">
        {/* Featured Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/hero-tide-scene.jpg"
              alt="Dramatic ocean tides"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
              <p className="text-white font-semibold text-sm sm:text-base">
                Dramatic Ocean Tides
              </p>
            </div>
          </div>
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/peaceful-beach.jpg"
              alt="Serene beach scene"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
              <p className="text-white font-semibold text-sm sm:text-base">
                Peaceful Beaches
              </p>
            </div>
          </div>
          <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/lighthouse-sunset.jpg"
              alt="Lighthouse at sunset"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
              <p className="text-white font-semibold text-sm sm:text-base">
                Coastal Landmarks
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
              {/* Additional Coastal Images */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ocean-aerial-view.jpg"
                    alt="Ocean aerial view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden">
                  <Image
                    src="/images/seagulls-sunrise.jpg"
                    alt="Seagulls at sunrise"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border-2 border-primary/20 shadow-xl">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nearby Tides
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {(Object.keys(NOAA_STATIONS) as StationName[]).map(
                    (location) => (
                      <button
                        type="button"
                        key={location}
                        onClick={() => setCurrentLocation(location)}
                        className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-2 rounded-md hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-200 text-xs sm:text-sm active:scale-95 hover:shadow-md min-h-[44px] sm:min-h-[40px] flex items-center"
                      >
                        {location}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Tide Pools Image */}
              <div className="relative h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tide-pools.jpg"
                  alt="Rocky tide pools"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2.5 sm:p-3">
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    Explore Tide Pools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
