# Task Completion Checklist

After completing a task, run:

1. **Lint check**
   ```bash
   pnpm lint
   ```

2. **Format code** (if lint issues)
   ```bash
   pnpm format
   ```

3. **Build verification** (for significant changes)
   ```bash
   pnpm build
   ```

## Notes
- Fix TypeScript errors before committing
- Use `@/*` path aliases, not relative paths
- Don't commit unless explicitly asked
- Don't push to remote unless explicitly asked
