"use client";

import { useQuery } from "@tanstack/react-query";
import * as echarts from "echarts";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
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

export function TideChartECharts() {
  const { currentLocation } = useLocation();
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const { resolvedTheme } = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: ["tides", currentLocation],
    queryFn: () => fetchTideData(currentLocation),
  });

  useEffect(() => {
    // Dispose existing chart instance when location changes
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
      chartInstanceRef.current = null;
    }
  }, [currentLocation]);

  useEffect(() => {
    if (
      !chartRef.current ||
      !data ||
      !data.chartData ||
      data.chartData.length === 0
    ) {
      return;
    }

    if (!chartInstanceRef.current && chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }

    const chart = chartInstanceRef.current;
    if (!chart) return;

    const isDark = resolvedTheme === "dark";

    // Prepare data - use chartData from API response
    const times = data.chartData.map((t) => t.time);
    const heights = data.chartData.map((t) => t.height);

    // Configure chart options
    const option: echarts.EChartsOption = {
      backgroundColor: "transparent",
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%",
        top: "15%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: isDark
          ? "rgba(30, 30, 50, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "#3b82f6" : "#0ea5e9",
        borderWidth: 2,
        textStyle: {
          color: isDark ? "#e0e7ff" : "#1e293b",
          fontSize: 13,
        },
        formatter: (params: any) => {
          const param = params[0];
          return `<div style="padding: 4px 8px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${param.axisValue}</div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 10px; height: 10px; background: ${param.color}; border-radius: 50%;"></span>
              <span>${param.value.toFixed(2)} ft</span>
            </div>
          </div>`;
        },
      },
      xAxis: {
        type: "category",
        data: times,
        axisLine: {
          lineStyle: {
            color: isDark ? "#475569" : "#94a3b8",
          },
        },
        axisLabel: {
          color: isDark ? "#cbd5e1" : "#475569",
          fontSize: 11,
          interval: 2,
        },
      },
      yAxis: {
        type: "value",
        name: "Height (ft)",
        nameTextStyle: {
          color: isDark ? "#cbd5e1" : "#475569",
          fontSize: 12,
          padding: [0, 0, 10, 0],
        },
        axisLine: {
          lineStyle: {
            color: isDark ? "#475569" : "#94a3b8",
          },
        },
        axisLabel: {
          color: isDark ? "#cbd5e1" : "#475569",
          fontSize: 11,
        },
        splitLine: {
          lineStyle: {
            color: isDark ? "#334155" : "#e2e8f0",
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: "Tide Height",
          type: "line",
          data: heights,
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 3,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: isDark ? "#3b82f6" : "#0ea5e9" },
              { offset: 0.5, color: isDark ? "#06b6d4" : "#06b6d4" },
              { offset: 1, color: isDark ? "#14b8a6" : "#10b981" },
            ]),
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: isDark
                  ? "rgba(59, 130, 246, 0.4)"
                  : "rgba(14, 165, 233, 0.3)",
              },
              {
                offset: 1,
                color: isDark
                  ? "rgba(20, 184, 166, 0.05)"
                  : "rgba(16, 185, 129, 0.05)",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          animationDuration: 2000,
          animationEasing: "cubicOut",
        },
      ],
    };

    chart.setOption(option, { notMerge: true });

    // Handle resize
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, resolvedTheme, currentLocation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  if (isLoading || !data) {
    return (
      <Card className="shadow-xl border-2 border-primary/20">
        <CardHeader>
          <Skeleton className="h-6 md:h-8 w-2/3" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] md:h-[400px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {currentLocation} Tide Chart - 24 Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={chartRef} className="h-[300px] md:h-[400px] w-full" />
      </CardContent>
    </Card>
  );
}
