"use client";

import { createContext, type ReactNode, useContext, useState } from "react";
import type { StationName } from "./noaa-stations";

interface LocationContextType {
  currentLocation: StationName;
  setCurrentLocation: (location: StationName) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] =
    useState<StationName>("San Francisco Bay");

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
