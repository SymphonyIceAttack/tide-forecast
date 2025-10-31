"use client";

import { useQuery } from "@tanstack/react-query";
import { Sunrise, Sunset } from "lucide-react";
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

export function TideWeekly() {
  const { currentLocation } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["tides", currentLocation],
    queryFn: () => fetchTideData(currentLocation),
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 md:h-8 w-2/3" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-48 md:h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg md:text-xl">
          {currentLocation} Tide Table
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto -mx-2 md:mx-0">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 md:py-3 px-2 font-semibold bg-primary text-primary-foreground text-xs md:text-sm">
                  Day
                </th>
                <th className="text-center py-2 md:py-3 px-2 font-semibold bg-primary text-primary-foreground text-xs md:text-sm">
                  High Tide
                </th>
                <th className="text-center py-2 md:py-3 px-2 font-semibold bg-primary text-primary-foreground text-xs md:text-sm">
                  Low Tide
                </th>
                <th className="text-center py-2 md:py-3 px-2 font-semibold bg-accent text-accent-foreground">
                  <Sunrise className="h-3.5 w-3.5 md:h-4 md:w-4 mx-auto" />
                </th>
                <th className="text-center py-2 md:py-3 px-2 font-semibold bg-accent text-accent-foreground">
                  <Sunset className="h-3.5 w-3.5 md:h-4 md:w-4 mx-auto" />
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.weeklyTides.map((day, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="py-2 md:py-3 px-2 font-semibold">
                    <div className="text-sm md:text-base">{day.day}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">
                      {day.date}
                    </div>
                  </td>
                  <td className="text-center py-2 md:py-3 px-2">
                    <div className="text-primary font-bold text-xs md:text-sm">
                      {day.highTide}
                    </div>
                  </td>
                  <td className="text-center py-2 md:py-3 px-2">
                    <div className="text-secondary font-bold text-xs md:text-sm">
                      {day.lowTide}
                    </div>
                  </td>
                  <td className="text-center py-2 md:py-3 px-2 text-xs md:text-sm">
                    {day.sunrise}
                  </td>
                  <td className="text-center py-2 md:py-3 px-2 text-xs md:text-sm">
                    {day.sunset}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
