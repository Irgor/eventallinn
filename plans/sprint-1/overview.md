> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Sprint 1 Overview - EvenTallinn V1

## Sprint Theme
Ship a production-minded vertical slice of EvenTallinn with explicit architecture boundaries, resilient UX states, and a data contract that can absorb source changes without UI churn.

## Why This Sprint Matters
- Establishes a backend-for-frontend pattern early (`app/api/...`) to decouple rendering from external source volatility.
- Forces domain normalization and mapper discipline before scale introduces complexity.
- De-risks V2 transit and proximity logic by locking foundational route/UI contracts now.

## Sprint Goals
- Deliver discovery listing from an internal API contract, not direct third-party payloads.
- Define enforceable domain types and mapping invariants.
- Achieve robust UX under partial/invalid/slow data conditions.
- Preserve implementation clarity so the folder can serve as a portfolio planning artifact.

## In Scope
- App shell and navigation scaffolding.
- Event domain model and transformation layer.
- Internal API route for V1 event payload.
- Listing UI with responsive cards and image loading.
- Basic category filter placeholders (Now, Tonight, Weekend).
- Quality gate execution and concise retrospective.

## Out of Scope (For This Sprint)
- GTFS static parsing and nearest stop matching logic.
- GTFS-RT real-time transit countdowns.
- Authentication, personalization, and advanced analytics.
- Deep search/ranking algorithms.

## Milestones
- **M1 Foundation:** Shell, navigation, and route topology support incremental modules.
- **M2 Data Backbone:** Normalized event contract and route handler behavior are defined and stable.
- **M3 UI Delivery:** Card rendering, media strategy, and resilient states are production-ready for V1 scope.
- **M4 Product Readiness:** Filtering surface, quality evidence, and sprint retrospective are complete.

## Definition of Done
- Discovery page renders only normalized `EventCardModel` (or equivalent typed contract).
- Remote media handling is explicit (allowlist/fallback/degradation path documented in code).
- Loading, empty, and error states are deterministic and testable.
- Lint/type/build checks pass, or unresolved issues are explicitly documented with rationale.
- Sprint docs are complete, concise, and suitable for versioned planning evidence.

## Expected Deliverables
- `plans/sprint-1/overview.md`
- `plans/sprint-1/task-01-project-shell-and-routing.md`
- `plans/sprint-1/task-02-domain-types-and-mapping.md`
- `plans/sprint-1/task-03-api-route-events-v1.md`
- `plans/sprint-1/task-04-listing-ui-cards-and-images.md`
- `plans/sprint-1/task-05-states-filtering-and-polish.md`
- `plans/sprint-1/task-06-quality-check-and-retro.md`

## Execution Rhythm
- Implement one task at a time in order.
- Validate each task against acceptance criteria before opening the next.
- Run review loop after each task: correctness, architecture, readability, and regression risk.
- Roll forward improvements immediately instead of deferring to the end of sprint.
