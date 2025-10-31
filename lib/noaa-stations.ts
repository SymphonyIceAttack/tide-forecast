// NOAA CO-OPS Station IDs for major US coastal cities
export const NOAA_STATIONS = {
  "San Francisco Bay": "9414290", // San Francisco, CA
  "Los Angeles": "9410660", // Los Angeles, CA
  Seattle: "9447130", // Seattle, WA
  Miami: "8723214", // Virginia Key, FL (Miami area)
  "New York": "8518750", // The Battery, NY
  Boston: "8443970", // Boston, MA
  "San Diego": "9410170", // San Diego, CA
  Portland: "9439040", // Portland, ME
  Charleston: "8665530", // Charleston, SC
  Honolulu: "1612340", // Honolulu, HI
} as const;

export type StationName = keyof typeof NOAA_STATIONS;

export function getStationId(location: string): string {
  return (
    NOAA_STATIONS[location as StationName] || NOAA_STATIONS["San Francisco Bay"]
  );
}
