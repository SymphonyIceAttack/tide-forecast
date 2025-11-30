import Link from "next/link";

export function PostCTA() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 border-primary/20 shadow-xl">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          US Tide Forecast
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
          Get accurate tide predictions and charts for major coastal locations
          across the United States. Real-time data from NOAA including high
          tide, low tide times, and height forecasts.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          Check Tide Forecasts Now →
        </Link>
      </div>
    </div>
  );
}
