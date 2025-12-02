"use client";

import {
  BookOpen,
  ChevronDown,
  Clock,
  Menu,
  Shield,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "@/lib/location-context";
import { NOAA_STATIONS, type StationName } from "@/lib/noaa-stations";

export function TideHeader() {
  const { currentLocation, setCurrentLocation } = useLocation();

  return (
    <header className="bg-primary/95 backdrop-blur-md text-primary-foreground shadow-lg border-b border-primary-foreground/10 sticky top-0 z-50">
      {/* Professional Status Bar */}
      <div className="bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 py-1.5">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="flex items-center justify-center gap-4 text-xs text-primary-foreground/90">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-accent" />
              <span className="hidden sm:inline">NOAA Certified</span>
              <span className="sm:hidden">Certified</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-accent" />
              <span>Real-Time Data</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <span>±15min Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 max-w-7xl">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Professional Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
            aria-label="US Tide Forecast - Professional NOAA Tide Service"
          >
            <div className="relative">
              <Waves className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent animate-pulse" />
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap">
                <span className="hidden xs:inline">US </span>Tide Forecast
              </span>
              <span className="text-xs text-primary-foreground/70 hidden sm:block">
                Professional Service
              </span>
            </div>
          </Link>

          {/* Professional Location Selector */}
          <div className="flex-1 max-w-[140px] xs:max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-xl mx-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="w-full justify-between bg-background/95 text-foreground hover:bg-background/90 text-xs xs:text-sm md:text-base shadow-md h-8 sm:h-9 md:h-10 px-2 sm:px-3 border border-primary/20"
                >
                  <span className="truncate">{currentLocation}</span>
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1 flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] max-h-[60vh] overflow-y-auto border-2 border-primary/20"
              >
                <div className="px-3 py-2 bg-primary/10 text-xs font-medium text-foreground border-b">
                  NOAA Coastal Monitoring Stations
                </div>
                {(Object.keys(NOAA_STATIONS) as StationName[]).map(
                  (location) => (
                    <DropdownMenuItem
                      key={location}
                      onClick={() => setCurrentLocation(location)}
                      className={
                        currentLocation === location
                          ? "bg-accent text-accent-foreground font-medium"
                          : "hover:bg-primary/10"
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{location}</span>
                        {currentLocation === location && (
                          <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                        )}
                      </div>
                    </DropdownMenuItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Professional Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/about">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 text-sm"
              >
                About Service
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 text-sm"
              >
                Professional FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 text-sm"
              >
                Professional Support
              </Button>
            </Link>
            <Link href="/posts">
              <Button
                variant="secondary"
                size="sm"
                className="bg-background/95 text-foreground hover:bg-background font-medium gap-2 shadow-md text-sm"
              >
                <BookOpen className="h-4 w-4" />
                <span>Tide Analysis</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8 sm:h-9 sm:w-9 p-0"
                >
                  <Menu className="h-5 w-5 sm:h-5 sm:w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 border-2 border-primary/20"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/posts"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Tide Analysis</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/about" className="cursor-pointer">
                    About Service
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="cursor-pointer">
                    Professional FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="cursor-pointer">
                    Professional Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
