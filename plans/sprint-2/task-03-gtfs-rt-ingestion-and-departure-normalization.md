> AI-generated planning artifact. Curated and refined for EvenTallinn V1/V2 transition.

# Task 03 - GTFS-RT Ingestion and Departure Normalization

## Objective
Introduce a realtime departure pipeline that converts GTFS-RT data into a UI-safe, source-agnostic departure model.

## Implementation Steps
1. Implement GTFS-RT fetch layer:
   - Add timeout, retry strategy, and feed health tagging.
2. Parse protobuf payload into internal structures:
   - Extract trip updates and stop-time predictions relevant to known stops.
3. Normalize departures for UI contract:
   - Route label, destination, expected departure timestamp, delay/status metadata.
4. Join static + realtime identifiers safely:
   - Resolve stop/trip mismatches explicitly and log dropped entries.
5. Expose internal departures endpoint:
   - Example: `/api/transit/stops/{stopId}/departures?limit=3`.

## Acceptance Criteria
- Realtime ingestion runs successfully and yields normalized departures.
- Endpoint returns top departures with predictable ordering and timestamps.
- Feed or parsing failures degrade to explicit stale/unavailable state.
- Mapping mismatches are observable and do not crash request flow.

## Advanced Focus
- Prioritize contract quality over feed completeness in first iteration.
- Design for eventual polling/background refresh instead of per-request heavy parsing.
- Keep time semantics explicit (UTC vs local display transformation boundaries).
