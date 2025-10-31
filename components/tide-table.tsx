"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export function TideTable() {
  const { currentLocation } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["tides", currentLocation],
    queryFn: () => fetchTideData(currentLocation),
  });

  if (isLoading) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <Skeleton className="h-6 md:h-8 w-2/3" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <Skeleton className="h-48 md:h-64 w-full" />
            <Skeleton className="h-48 md:h-64 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg md:text-xl">
          {currentLocation} Tide Table Today
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-3 text-xs md:text-sm text-muted-foreground">
              Friday, October 31, 2025
            </h3>
            <div className="space-y-2">
              {data?.todayTides.map((tide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2.5 md:p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    {tide.type === "high" ? (
                      <ArrowUp className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    )}
                    <span className="font-semibold text-sm md:text-base">
                      {tide.type === "high" ? "High Tide" : "Low Tide"}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base md:text-lg">
                      {tide.time}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {tide.height}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xs md:text-sm text-muted-foreground">
              Saturday, November 1, 2025
            </h3>
            <div className="space-y-2">
              {data?.tomorrowTides.map((tide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2.5 md:p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    {tide.type === "high" ? (
                      <ArrowUp className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    )}
                    <span className="font-semibold text-sm md:text-base">
                      {tide.type === "high" ? "High Tide" : "Low Tide"}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base md:text-lg">
                      {tide.time}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {tide.height}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
