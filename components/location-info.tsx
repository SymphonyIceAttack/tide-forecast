"use client";

import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "@/lib/location-context";
import type { TideData } from "@/lib/types";

async function fetchTideData(location: string): Promise<TideData> {
  const response = await fetch(
    `/api/tides?location=${encodeURIComponent(location)}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch tide data");
  }
  return response.json();
}

export function LocationInfo() {
  const { currentLocation } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["tides", currentLocation],
    queryFn: () => fetchTideData(currentLocation),
  });

  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1">
              <Skeleton className="h-6 md:h-8 w-48 md:w-64 mb-2" />
              <Skeleton className="h-4 md:h-5 w-36 md:w-48" />
            </div>
            <div className="text-right">
              <Skeleton className="h-4 md:h-5 w-20 md:w-24 mb-2" />
              <Skeleton className="h-8 md:h-10 w-16 md:w-20" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-4 md:pt-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
              <span className="text-balance">{currentLocation} Tide Times</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
              <span className="text-pretty">{dateStr}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs md:text-sm text-muted-foreground">
              Current Tide
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {data?.currentTide.toFixed(1)} ft
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
