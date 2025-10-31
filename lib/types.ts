export interface TidePoint {
  time: string;
  height: number;
}

export interface TideEvent {
  time: string;
  height: string;
  type: "high" | "low";
}

export interface TideData {
  location: string;
  currentTide: number;
  nextHighTide: string;
  nextLowTide: string;
  chartData: TidePoint[];
  todayTides: TideEvent[];
  tomorrowTides: TideEvent[];
  weeklyTides: {
    date: string;
    day: string;
    highTide: string;
    lowTide: string;
    sunrise: string;
    sunset: string;
  }[];
}
