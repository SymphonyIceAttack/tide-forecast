import { type NextRequest, NextResponse } from "next/server";
import { getStationId } from "@/lib/noaa-stations";
import type { TideData } from "@/lib/types";

export const revalidate = 1800; // 30 minutes in seconds

const CACHE_DURATION = 1800; // 30 minutes - NOAA data updates every 6 minutes, but we don't need that frequent updates

interface NOAAPrediction {
  t: string; // timestamp in format "YYYY-MM-DD HH:MM"
  v: string; // water level value
  type: "H" | "L"; // H for high tide, L for low tide
}

interface NOAAResponse {
  predictions: NOAAPrediction[];
}

interface NOAAHourlyPrediction {
  t: string; // timestamp
  v: string; // water level value
}

interface NOAAHourlyResponse {
  predictions?: NOAAHourlyPrediction[];
}

async function fetchNOAATideData(location: string): Promise<TideData> {
  const stationId = getStationId(location);
  const now = new Date();
  const today = now.toISOString().split("T")[0].replace(/-/g, "");

  // Calculate date range for predictions (today + 7 days)
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + 7);
  const endDateStr = endDate.toISOString().split("T")[0].replace(/-/g, "");

  try {
    // Fetch tide predictions from NOAA API
    const predictionsUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${today}&end_date=${endDateStr}&station=${stationId}&product=predictions&datum=MLLW&time_zone=lst_ldt&units=english&interval=hilo&format=json`;

    const response = await fetch(predictionsUrl, {
      next: { revalidate: CACHE_DURATION },
    });

    if (!response.ok) {
      throw new Error(`NOAA API error: ${response.status}`);
    }

    const data = (await response.json()) as NOAAResponse;

    // Fetch hourly water levels for chart
    const hourlyUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${today}&range=24&station=${stationId}&product=predictions&datum=MLLW&time_zone=lst_ldt&units=english&interval=h&format=json`;

    const hourlyResponse = await fetch(hourlyUrl, {
      next: { revalidate: CACHE_DURATION },
    });

    const hourlyData = (await hourlyResponse.json()) as NOAAHourlyResponse;

    // Process predictions data
    const predictions = data.predictions || [];

    // Separate today and tomorrow tides
    const todayTides: TideData["todayTides"] = [];
    const tomorrowTides: TideData["tomorrowTides"] = [];

    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateStr = tomorrow.toISOString().split("T")[0];

    predictions.forEach((pred: NOAAPrediction) => {
      const predDate = pred.t.split(" ")[0];
      const time = pred.t.split(" ")[1];
      const height = `${Number.parseFloat(pred.v).toFixed(1)} ft`;
      const type = pred.type === "H" ? "high" : "low";

      const tideEvent = { time, height, type: type as "high" | "low" };

      if (predDate === today.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")) {
        todayTides.push(tideEvent);
      } else if (predDate === tomorrowDateStr) {
        tomorrowTides.push(tideEvent);
      }
    });

    // Process hourly data for chart
    const chartData =
      hourlyData.predictions?.map((pred: NOAAHourlyPrediction) => ({
        time: pred.t.split(" ")[1],
        height: Number.parseFloat(pred.v),
      })) || [];

    // Find current tide and next events
    const currentTime = now.toTimeString().slice(0, 5);
    const allTides = [...todayTides, ...tomorrowTides];
    const nextHigh = allTides.find(
      (t) => t.type === "high" && t.time > currentTime,
    );
    const nextLow = allTides.find(
      (t) => t.type === "low" && t.time > currentTime,
    );

    // Calculate current tide height (interpolate from chart data)
    const currentHour = now.getHours();
    const currentTide = chartData[currentHour]?.height || 7.0;

    // Generate weekly summary
    const weeklyTides = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];

      // Find high and low tides for this day
      const dayTides = predictions.filter((pred: NOAAPrediction) =>
        pred.t.startsWith(dateStr),
      );
      const highTides = dayTides.filter((t: NOAAPrediction) => t.type === "H");
      const lowTides = dayTides.filter((t: NOAAPrediction) => t.type === "L");

      const maxHigh = highTides.length
        ? Math.max(
            ...highTides.map((t: NOAAPrediction) => Number.parseFloat(t.v)),
          )
        : 0;
      const minLow = lowTides.length
        ? Math.min(
            ...lowTides.map((t: NOAAPrediction) => Number.parseFloat(t.v)),
          )
        : 0;

      return {
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        highTide: `${maxHigh.toFixed(1)} ft`,
        lowTide: `${minLow.toFixed(1)} ft`,
        sunrise: "6:30", // Would need separate API for sun data
        sunset: "18:45",
      };
    });

    return {
      location,
      currentTide,
      nextHighTide: nextHigh?.time || "N/A",
      nextLowTide: nextLow?.time || "N/A",
      chartData,
      todayTides,
      tomorrowTides,
      weeklyTides,
    };
  } catch (error) {
    console.error("[v0] Error fetching NOAA tide data:", error);
    // Return fallback data if API fails
    throw new Error("Failed to fetch tide data from NOAA");
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location") || "San Francisco Bay";

  try {
    const tideData = await fetchNOAATideData(location);
    return NextResponse.json(tideData);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch tide data" },
      { status: 500 },
    );
  }
}
