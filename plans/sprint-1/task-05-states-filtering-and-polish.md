> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Task 05 - States, Filtering, and Polish

## Objective
Raise product quality by implementing deterministic UI state handling and filter semantics that can evolve without rewiring.

## Implementation Steps
1. Define state model before implementation:
   - Distinguish `loading`, `success`, `empty`, and `error` as explicit render branches.
2. Implement loading UX with continuity:
   - Skeletons/placeholders that preserve layout structure and avoid content jump.
3. Implement empty state with recovery guidance:
   - Provide context and a path forward (filter reset or broadened query).
4. Implement error handling with actionable recovery:
   - Clear message boundaries (user-safe) and retry affordance where feasible.
5. Add V1 window filters:
   - `Now`, `Tonight`, `Weekend` mapped to query param contract.
   - Ensure URL/state synchronization strategy is explicit.
6. Final polish pass:
   - Focus order, focus visibility, semantic heading flow, and reduced visual noise.

## Acceptance Criteria
- Loading, empty, and error experiences are visible and intentional.
- Filter controls update state and trigger relevant data request/path.
- Page remains usable and readable across device sizes.
- Basic accessibility quality is improved (focus/labels/semantics).

## Advanced Focus
- Treat UI states as product behavior, not incidental rendering branches.
- Preserve composability while adding filters (avoid page-level condition bloat).
- Use accessibility refinements as quality multipliers, not checklist items.
