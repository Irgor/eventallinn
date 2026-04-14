> AI-generated planning artifact. Curated and refined for EvenTallinn V1/V2 transition.

# Task 02 - Nearest Stop Correlation Contract

## Objective
Define and implement the internal contract that maps an event location to nearby transport stops with confidence and distance metadata.

## Implementation Steps
1. Define transit correlation response contract:
   - Event reference.
   - Ranked nearby stops.
   - Distance and optional walking-time approximation placeholder.
2. Implement correlation service:
   - Input: event coordinates.
   - Output: top N closest stops with deterministic sort rules.
3. Add geo validation and fallback strategy:
   - Missing/invalid event coordinates return explicit non-fatal status.
4. Expose route handler endpoint:
   - Example shape: `/api/events/{id}/transit/stops`.
5. Ensure contract interoperability:
   - Response should be directly consumable by card/detail UI without reshaping.

## Acceptance Criteria
- Nearest-stop endpoint returns stable ranked results for valid coordinates.
- Invalid coordinate scenarios are handled gracefully with clear response semantics.
- Distance units and ranking behavior are documented and consistent.
- Endpoint contract is versionable and independent of UI implementation details.

## Advanced Focus
- Keep correlation algorithm pluggable for future warm-route and weather weighting.
- Minimize floating-point ambiguity in distance display logic.
- Preserve deterministic behavior for testability and debugging.
