> AI-generated planning artifact. Curated and refined for EvenTallinn V1/V2 transition.

# Task 01 - GTFS Static Ingestion and Stop Index

## Objective
Establish a reliable static transit data foundation that supports fast nearest-stop lookups for event coordinates.

## Implementation Steps
1. Define ingestion strategy for GTFS static feed:
   - Initial mode: file-based pull + parse + local storage/index.
   - Record feed versioning metadata (download timestamp, checksum).
2. Normalize required GTFS entities for V2 scope:
   - Stops (id, name, lat, lon, parent relationships where relevant).
   - Optional route mappings for display enrichment.
3. Build stop index optimized for proximity queries:
   - Start with in-memory spatial bucketing; keep a clear seam for PostGIS migration.
4. Expose index lifecycle controls:
   - Bootstrap at startup and manual refresh trigger for development.
5. Validate with realistic sample coverage:
   - Dense city center and edge-case peripheral stops.

## Acceptance Criteria
- Static feed is ingested and transformed into a queryable stop index.
- Index initialization behavior is deterministic and observable.
- Stop lookup latency is acceptable for interactive API use.
- Parsing and ingest errors are handled with actionable diagnostics.

## Advanced Focus
- Engineer for data refresh/change without requiring full app restart in later iterations.
- Keep ingestion decoupled from route handlers to avoid request-path heavy work.
- Document migration path to persistent storage as data volume grows.
