# Agents Guide for Tide Forecast Project

## Project Overview

This is a **Next.js 16+ application** that provides real-time tide forecasts for US coastal locations using NOAA API data. The project includes a blog section powered by Directus CMS and features responsive design with modern UI components.

## Package Manager

**Use `pnpm` as the package manager** - the project includes `pnpm-lock.yaml` and scripts are designed for pnpm usage.

## Essential Commands

### Development
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality
```bash
# Run Biome linter
pnpm lint

# Format code with Biome
pnpm format
```

### Environment Setup
```bash
# Install dependencies
pnpm install

# Setup development environment (if using devenv)
devenv shell
```

## Project Structure

```
tide-forecast/
├── app/                     # Next.js App Router
│   ├── api/                # API routes
│   │   └── tides/         # Tide data API
│   │   └── draft/         # Draft API routes
│   ├── posts/             # Blog system
│   │   ├── [slug]/        # Dynamic blog posts
│   │   └── page.tsx       # Blog listing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # Base UI components (Radix UI)
│   ├── blog/              # Blog-specific components
│   └── [feature].tsx      # Feature components
├── lib/                   # Utilities and configurations
│   ├── directus.ts        # Directus CMS integration
│   ├── noaa-stations.ts   # NOAA station mappings
│   ├── types.ts           # TypeScript types
│   ├── utils.ts           # Utility functions
│   └── location-context.tsx # Location context provider
├── .github/workflows/     # CI/CD configuration
└── public/               # Static assets
```

## Code Organization & Patterns

### Type System
- **Strict TypeScript** - all files are `.ts` or `.tsx`
- **Type definitions** in `lib/types.ts`
- **Path aliases** configured with `@/*` mapping to root directory

### Component Architecture
- **UI Components**: Located in `components/ui/` using Radix UI primitives
- **Feature Components**: Co-located with specific features
- **Client Components**: Use `"use client"` directive for interactive features
- **Server Components**: Default in app directory

### Styling Approach
- **Tailwind CSS v4** - using PostCSS plugin `@tailwindcss/postcss`
- **CSS-in-JS patterns**: Using `cn()` utility for conditional classes
- **Responsive design**: Mobile-first approach with breakpoints
- **Theme system**: Dark/light mode with `next-themes`

## Build & Tooling Configuration

### Next.js Configuration
- **Image optimization**: Disabled (`images.unoptimized: true`)
- **Remote images**: Allowed for HTTPS domains
- **App Router**: Using Next.js 14+ app directory structure

### Biome Configuration
- **Formatter**: 2-space indentation, spaces
- **Linter**: Enabled with recommended rules
- **Custom rules**: Relaxed for specific cases (array index keys, explicit any)
- **VCS integration**: Git-aware formatting

### TypeScript Configuration
- **Strict mode**: Enabled
- **Module resolution**: Bundler
- **JSX**: React JSX
- **Path mapping**: `@/*` → `/*`

## Data Sources & APIs

### NOAA Tide API
- **Primary data source** for tide predictions
- **API endpoint**: `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter`
- **Cache strategy**: 30-minute revalidation (`revalidate = 1800`)
- **Station mapping**: Stored in `lib/noaa-stations.ts`

### Directus CMS
- **Blog content management**
- **Environment variables**: 
  - `NEXT_PUBLIC_DIRECTUS_URL`
  - `DIRECTUS_ACCESS_TOKEN`
- **Content collections**: Blog posts system

## Key Dependencies

### Core Framework
- **Next.js 16+**: App Router, server components
- **React 19.2**: Latest React features
- **TypeScript 5**: Type safety

### UI & Styling
- **Tailwind CSS v4**: Styling framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Variant management
- **clsx + tailwind-merge**: Conditional styling

### Data & State Management
- **@tanstack/react-query**: Server state management
- **@directus/sdk**: CMS integration

### Visualization
- **ECharts**: Chart library for tide visualizations
- **recharts**: Alternative charting library

### Development Tools
- **Biome**: Linter and formatter (replaces ESLint/Prettier)
- **PostCSS**: CSS processing
- **Devenv**: Development environment management

## Code Style & Conventions

### File Naming
- **Components**: PascalCase (`TideChart.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Types**: camelCase with descriptive names (`TideData`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`)

### Component Patterns
```typescript
// Default export for page components
export default function ComponentName() { ... }

// Named exports for utilities
export function utilityFunction() { ... }

// Type exports
export interface ComponentProps { ... }

// Client components
"use client";
import { useState } from "react";

export default function ClientComponent() {
  // Client-side logic
}
```

### Styling Patterns
```typescript
// Conditional classes with cn()
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)} />

// Responsive classes
<div className="text-sm md:text-base lg:text-lg" />

// Theme-aware classes
<div className="bg-background text-foreground" />
```

## API Routes

### Tide Data API
- **Endpoint**: `GET /api/tides?location={location}`
- **Location parameter**: Defaults to "San Francisco Bay"
- **Response**: TideData interface with current, upcoming, and weekly predictions
- **Caching**: 30-minute revalidation
- **Error handling**: Returns 500 status on API failure

### Blog System
- **Dynamic routing**: `/posts/[slug]/page.tsx`
- **CMS integration**: Directus-powered content
- **SEO optimization**: Dynamic metadata

## Testing & Quality

### Code Quality Tools
- **Biome**: Single tool for linting, formatting, and imports
- **GitHub Actions**: Automated quality checks on PRs
- **CI Pipeline**: `biome ci .` runs on all pushes/PRs

### TypeScript
- **Strict configuration**: Maximum type safety
- **Path mapping**: `@/*` imports for cleaner code
- **NoEmit**: Next.js handles compilation

## Environment Configuration

### Required Environment Variables
```bash
# Directus CMS
NEXT_PUBLIC_DIRECTUS_URL=https://soyo-directus.lzyinglian.com
DIRECTUS_ACCESS_TOKEN=JWga1KM8BkqEKV6eTXPDIvmD2wkOKAce

# Site configuration
NEXT_PUBLIC_SITE_URL=https://www.tide-forecast.art
```

### Development Environment
- **Devenv**: Automated environment setup
- **Direnv**: Environment variable management
- **Nix**: Reproducible development environment

## Deployment

### Platform
- **Vercel**: Primary deployment platform
- **Analytics**: Vercel Analytics integrated
- **CDN**: Automatic with Vercel

### Build Process
```bash
# Production build
pnpm build

# Start production server
pnpm start
```

## Common Patterns & Gotchas

### 1. Component Structure
- **Server-first**: Default to server components, add `"use client"` only when needed
- **Props typing**: Always define interfaces for component props
- **Event handlers**: Use proper TypeScript event types

### 2. Styling Limitations
- **Tailwind v4**: Uses new plugin architecture (`@tailwindcss/postcss`)
- **No config files**: Tailwind v4 doesn't use `tailwind.config.js`
- **Responsive design**: Always consider mobile-first approach

### 3. Data Fetching
- **React Query**: Use for client-side data fetching
- **Server components**: Use for server-side data fetching
- **Caching**: Leverage Next.js revalidation for APIs

### 4. TypeScript Gotchas
- **Strict mode**: Requires explicit types in many cases
- **Path imports**: Must use `@/*` alias, not relative paths
- **React 19**: New features may require updated types

### 5. API Integration
- **NOAA API**: Rate-limited, implement proper error handling
- **Directus**: Requires authentication tokens
- **External URLs**: Configured in `next.config.ts`

## Development Workflow

### 1. Code Changes
1. Run `pnpm lint` to check code quality
2. Use `pnpm format` to fix formatting
3. Test locally with `pnpm dev`
4. Check type safety with `pnpm build`

### 2. Adding Dependencies
```bash
pnpm add package-name
pnpm add -D package-name  # for dev dependencies
```

### 3. Environment Setup
```bash
# Load development environment
devenv shell

# Or use direnv automatically
direnv allow
```

## Troubleshooting

### Common Issues
1. **Build failures**: Check TypeScript strict mode compliance
2. **Import errors**: Ensure path aliases are correct (`@/*`)
3. **Styling issues**: Verify Tailwind CSS classes are valid
4. **API failures**: Check NOAA API rate limits and Directus credentials
5. **Development server**: Use `pnpm dev`, not `npm run dev`

### Performance
- **Images**: Optimized through Next.js (currently disabled)
- **Fonts**: Google Fonts via `next/font`
- **Charts**: Consider lazy loading for large datasets
- **API calls**: Leverage Next.js caching and revalidation

## Architecture Decisions

### Why This Stack?
- **Next.js**: Full-stack React framework with App Router
- **TypeScript**: Type safety for complex tide data
- **Biome**: Unified tooling (faster than ESLint/Prettier)
- **Tailwind v4**: Modern utility-first CSS
- **pnpm**: Efficient package management
- **Devenv**: Reproducible development environments

### Data Flow
1. **NOAA API** → **Next.js Route Handler** → **React Query** → **Components**
2. **Directus** → **Blog Components** → **Static Generation**
3. **Client State** → **Context API** → **Location Selection**

This guide should help you navigate and contribute to the tide forecast project effectively. Always refer to the actual code when implementing changes, as patterns may evolve over time.