> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Task 03 - API Route Events V1

## Objective
Expose a stable backend-for-frontend endpoint with clear contract semantics, failure modes, and filter extensibility.

## Implementation Steps
1. Implement `GET /api/events` route handler (`app/api/events/route.ts`).
2. Separate responsibilities:
   - Data access (source fetch/mock retrieval).
   - Mapping/validation.
   - Response serialization.
3. Define and return stable response envelope:
   - `data` for normalized records.
   - `meta` for source, count, and optional warning signals.
4. Handle known failure classes explicitly:
   - Upstream failure/timeouts.
   - Mapping failures resulting in zero usable records.
   - Invalid query parameters.
5. Add query param contract for V1 windows:
   - `window=now|tonight|weekend`.
   - Implement deterministic fallback behavior for unknown values.
6. Ensure handler behavior is straightforward to test from UI and direct HTTP calls.

## Acceptance Criteria
- `GET /api/events` responds with normalized data contract.
- Endpoint works in both mock-first mode and remote-fetch mode (if configured).
- Failure paths are handled with non-200 status and safe payload.
- Contract shape is stable enough for UI integration.

## Advanced Focus
- Treat route handlers as product contracts, not thin passthrough proxies.
- Model error semantics intentionally to keep frontend state transitions predictable.
- Keep endpoint versionability in mind even for V1 (shape discipline now prevents churn later).
