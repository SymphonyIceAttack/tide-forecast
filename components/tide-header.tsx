"use client";

import { BookOpen, ChevronDown, Waves } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "@/lib/location-context";
import { NOAA_STATIONS, type StationName } from "@/lib/noaa-stations";

export function TideHeader() {
  const { currentLocation, setCurrentLocation } = useLocation();

  return (
    <header className="bg-primary/95 backdrop-blur-md text-primary-foreground shadow-lg border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-3 md:py-4 max-w-7xl">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 md:h-8 md:w-8 animate-pulse" />
            <span className="text-lg md:text-2xl font-bold">
              US Tide Forecast
            </span>
          </div>

          <div className="flex-1 max-w-[200px] sm:max-w-xs md:max-w-xl">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="w-full justify-between bg-background/95 text-foreground hover:bg-background/90 text-sm md:text-base shadow-md"
                >
                  <span className="truncate">{currentLocation}</span>
                  <ChevronDown className="h-4 w-4 ml-1 md:ml-2 flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[280px] sm:w-[320px] md:w-[400px]">
                {(Object.keys(NOAA_STATIONS) as StationName[]).map(
                  (location) => (
                    <DropdownMenuItem
                      key={location}
                      onClick={() => setCurrentLocation(location)}
                      className={
                        currentLocation === location
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }
                    >
                      {location}
                    </DropdownMenuItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  About
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact
                </Button>
              </Link>
            </div>
            <Link href="/posts">
              <Button
                variant="secondary"
                size="sm"
                className="bg-background/95 text-foreground hover:bg-background font-medium gap-1.5 md:gap-2 shadow-md"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Blog</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
