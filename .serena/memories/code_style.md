# Code Style & Conventions

## TypeScript
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Types in `lib/types.ts`

## File Naming
- Components: PascalCase (`TideChart.tsx`)
- Utilities: camelCase (`utils.ts`)
- Pages: lowercase (`page.tsx`, `layout.tsx`)

## Components
- Server components by default
- Use `"use client"` directive for client components
- Default exports for page components
- Named exports for utilities

## Styling
- Tailwind CSS v4 (no config file)
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Mobile-first responsive design
- Theme: dark/light mode with `next-themes`

## Biome Config
- 2-space indentation
- Organize imports enabled
- Recommended linting rules (some relaxed)
