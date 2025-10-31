"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
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

export function TideChart() {
  const { currentLocation } = useLocation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["tides", currentLocation],
    queryFn: () => fetchTideData(currentLocation),
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 md:h-8 w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] md:h-[400px] w-full" />
          <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4">
            <Skeleton className="h-20 md:h-24 w-full" />
            <Skeleton className="h-20 md:h-24 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">
            Error Loading Tide Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-destructive">
            Failed to load tide information. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg md:text-xl text-balance">
          {currentLocation} Tide Chart - October 31 - November 1
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            height: {
              label: "Tide Height",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] md:h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data?.chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorHeight" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="time"
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                label={{
                  value: "feet (ft)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="height"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorHeight)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4 text-center">
          <div className="bg-muted/50 rounded-lg p-3 md:p-4">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Next High Tide
            </p>
            <p className="text-lg md:text-2xl font-bold text-primary">
              {data?.nextHighTide}
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 md:p-4">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Next Low Tide
            </p>
            <p className="text-lg md:text-2xl font-bold text-secondary">
              {data?.nextLowTide}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
