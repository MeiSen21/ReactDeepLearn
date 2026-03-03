---
name: "vercel-agent-skills"
description: "Applies Vercel's engineering best practices for React/Next.js and web design guidelines. Invoke when writing or reviewing React code, designing UI, or optimizing performance."
---

# Vercel Agent Skills

This skill enforces Vercel's engineering best practices for React, Next.js, and web design.

## React Best Practices

### Performance & Optimization
- **Eliminate Request Waterfalls**: Avoid sequential data fetching. Use parallel fetching (e.g., `Promise.all`) or preloading where possible.
- **Bundle Size Optimization**: Import only what is needed. Use dynamic imports (`React.lazy`, `next/dynamic`) for large components or libraries.
- **Server Performance**: Leverage Server Components (RSC) to reduce client-side JavaScript.
- **Client Data Fetching**: Use libraries like TanStack Query or SWR for caching, deduplication, and background updates.
- **Re-rendering Optimization**: Use `memo`, `useMemo`, and `useCallback` appropriately to prevent unnecessary re-renders.

## Web Design Guidelines

### UI & Accessibility
- **Accessibility (a11y)**: Ensure all interactive elements have proper ARIA labels, roles, and keyboard navigation support.
- **Focus States**: Clearly visible focus indicators for all interactive elements.
- **Form Design**: Use proper validation, error messaging, and input types.
- **Animation Performance**: Use CSS transforms and opacity for animations to avoid layout thrashing.
- **Typography**: Maintain consistent hierarchy and readability.
- **Image Optimization**: Use appropriate formats (WebP, AVIF) and sizing (responsive images).
- **Dark Mode**: Ensure proper contrast and color adaptation for dark mode.
