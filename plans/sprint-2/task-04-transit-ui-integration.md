> AI-generated planning artifact. Curated and refined for EvenTallinn V1/V2 transition.

# Task 04 - Transit UI Integration

## Objective
Integrate transit context into discovery experience without compromising readability, performance, or V1 browsing flow.

## Implementation Steps
1. Decide integration surface:
   - Card-level compact snippet and/or event-detail expanded panel.
2. Create reusable transit presentation component(s):
   - Stop name, distance, and next departures (up to 3).
3. Define state handling for transit block:
   - `loading`, `available`, `stale`, `unavailable`.
4. Integrate via internal API contracts only:
   - No direct feed parsing in UI layer.
5. Preserve visual hierarchy:
   - Transit data supports event decision-making without overshadowing event content.

## Acceptance Criteria
- Event UI renders transit context where configured.
- Transit panel handles all expected states without layout breakage.
- UI remains performant under multiple cards and asynchronous data.
- Accessibility and readability remain aligned with product style.

## Advanced Focus
- Avoid over-fetching from UI; aggregate where beneficial.
- Keep transit component APIs stable for future route-detail expansion.
- Ensure fallback text is informative and non-alarming.
