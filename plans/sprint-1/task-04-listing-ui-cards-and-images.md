> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Task 04 - Listing UI Cards and Images

## Objective
Implement a discovery UI that is visually minimal, technically resilient, and ready for iterative feature layering.

## Implementation Steps
1. Build page-level orchestration:
   - Fetch normalized events from internal endpoint with server-first rendering strategy.
   - Keep data parsing outside pure presentational components.
2. Design card component API for reuse:
   - Pass typed props only; no direct fetch logic.
   - Render title, schedule, location, summary, and interaction affordance.
3. Implement adaptive grid/list layout:
   - Prioritize readability and scanability under variable content lengths.
   - Prevent layout shift from unpredictable image dimensions.
4. Harden image strategy using Next image pipeline:
   - Configure remote patterns explicitly.
   - Define fallback behavior for missing, broken, or low-quality assets.
5. Align visual language with product style:
   - High contrast, restrained spacing system, and clear typography hierarchy.

## Acceptance Criteria
- Discovery page shows a responsive list/grid of cards.
- Each card renders required event info clearly.
- Images load via Next image optimization and degrade gracefully.
- Components are reusable and not tightly coupled to page logic.

## Advanced Focus
- Optimize component API design to minimize future prop churn.
- Balance SSR ergonomics with interactivity needs instead of defaulting to client components.
- Treat image policy as part of reliability, not pure visual polish.
