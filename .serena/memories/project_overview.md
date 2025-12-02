# Tide Forecast Project Overview

## Purpose
Real-time tide forecasts for US coastal locations using NOAA API data, with a blog section powered by Directus CMS.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript 5 (strict mode)
- **React**: 19.2
- **Styling**: Tailwind CSS v4 (PostCSS plugin)
- **UI**: Radix UI primitives, Lucide icons
- **State**: @tanstack/react-query
- **CMS**: Directus SDK
- **Charts**: ECharts, Recharts
- **Linting/Formatting**: Biome

## Project Structure
```
app/               # Next.js App Router pages & API routes
  api/tides/       # NOAA tide data API
  posts/[slug]/    # Dynamic blog posts
components/        # React components
  ui/              # Base UI components (Radix)
  blog/            # Blog components
lib/               # Utilities, types, configs
  directus.ts      # CMS integration
  noaa-stations.ts # NOAA station mappings
  types.ts         # TypeScript types
public/            # Static assets
```

## Key APIs
- **NOAA**: `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter`
- **Directus**: Configured via env vars
