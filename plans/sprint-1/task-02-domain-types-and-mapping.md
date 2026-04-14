> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Task 02 - Domain Types and Mapping

## Objective
Design a durable domain contract and mapping layer that absorbs upstream schema drift while keeping UI semantics stable.

## Implementation Steps
1. Create normalized event domain types (`lib/events/types.ts`):
   - Separate required UI fields from optional source-derived enrichments.
   - Define explicit nullability and avoid ambiguous `string | undefined` where possible.
2. Define raw payload types per source shape assumption:
   - Keep raw types isolated from domain types.
3. Implement mapper pipeline (`lib/events/mappers.ts`):
   - Parse/validate raw records.
   - Normalize to domain contract.
   - Emit structured mapping diagnostics (e.g., dropped record reason) for observability.
4. Add invariant guards:
   - Reject records that fail minimum display requirements.
   - Provide deterministic fallbacks for non-critical fields (summary/image/location).
5. Create representative fixtures (`lib/events/mock-data.ts`):
   - Include happy path, sparse payload, and malformed payload test cases.

## Acceptance Criteria
- A normalized `EventCardModel` (or equivalent) exists and is used as a contract.
- Mapper handles missing fields without crashing the UI.
- UI layer does not depend directly on raw external field names.
- Mock data is usable to unblock UI development when API is unavailable.

## Advanced Focus
- Treat mapper logic as anti-corruption layer between external and internal models.
- Design for evolvability: new sources should add adapters, not force UI rewrites.
- Prefer explicit invariants over implicit assumptions hidden in components.
