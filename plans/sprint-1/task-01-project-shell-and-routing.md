> AI-generated planning artifact. Curated and refined for EvenTallinn V1.

# Task 01 - Project Shell and Routing

## Objective
Define a route and layout topology that scales to multi-module product evolution without introducing layout duplication or coupling.

## Implementation Steps
1. Establish route architecture for present and near-future modules:
   - Discovery route (current vertical slice).
   - Event detail route boundary (`app/events/[slug]/page.tsx`) as an extension seam.
2. Implement shared shell primitives:
   - Persistent header/nav via layout-level composition.
   - Stable content container width and spacing tokens to avoid ad hoc page-level wrappers.
3. Treat navigation as information architecture, not just links:
   - Include current module and forward-looking placeholders (e.g., Transit) without dead-end UX.
4. Enforce typography/theming baseline at root:
   - Confirm heading/body token usage is intentional and globally consistent.
5. Split shell into reusable units with explicit ownership:
   - Layout orchestration in `app/layout.tsx`.
   - Presentational pieces in `components/layout/*`.

## Acceptance Criteria
- App has a consistent top navigation and page shell across routes.
- Discovery route is accessible and renders inside the shared layout.
- At least one placeholder route exists for future expansion.
- Typography and dark default are applied consistently.

## Advanced Focus
- Use App Router layouts as long-term composition boundaries, not convenience wrappers.
- Make semantic landmarks (`header`, `nav`, `main`) do real accessibility work.
- Keep route/file decisions defensible from a future module-splitting perspective.
