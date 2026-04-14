# Product Requirement Document: EvenTallinn

## 1. Project Vision
EvenTallinn is a high-performance discovery platform designed to bridge the gap between Estonia's vibrant cultural scene and its world-class public transport infrastructure. 

## 2. Branding & Deployment
*   **Official Name:** EvenTallinn
*   **Production URL:** eventallin.codigor.dev
*   **Slogan:** "Your city, happening now."
*   **Style:** Minimalist Estonian digital aesthetic (high contrast, focus on legibility).

## 3. Core Functional Pillars

### Module A: The Discovery Feed
*   **Curated Events:** A clean, fast-loading list of what’s happening in Tallinn/Estonia.
*   **Smart Categorization:** Filter by "Now", "Tonight", or "Weekend".
*   **Deep Context:** Each event "Spot" includes the vibe, duration, and local tips.

### Module B: The Transit Bridge (The "Tallinnly" Factor)
*   **Proximity Logic:** For every event selected, automatically identify the nearest Bus/Tram/Train stops.
*   **Real-time ETA:** Direct integration with Tallinn's GTFS-RT feed to show exactly when the next vehicle arrives at the event's closest stop.
*   **"Warm Route" Calculation:** A focus on minimizing outdoor walking time during the Estonian winter.

## 4. Key User Stories (MVP Focus)
*   **Story 1:** As a user, I want to see a list of events happening today in Tallinn so I can decide where to go.
*   **Story 2:** As a user, I want to click an event and see the next 3 departures from the nearest transport stop without leaving the page.
*   **Story 3:** As a user, I want the app to load instantly (utilizing Next.js SSR/ISR) to save data and time while on the move.

## 5. Strategic Data Sources
*   **Events:** VisitEstonia API / Tallinn Culture Portal.
*   **Transport:** Peatus.ee (GTFS Static) & Tallinn Open Data (GTFS Real-time).
*   **Hosting:** Self-hosted VPS under the codigor.dev ecosystem.

## 6. Technical North Star
*   **Stack:** Next.js (App Router), Tailwind CSS, Server-Side Rendering.
*   **Goal:** Demonstrate "Senior Specialist" engineering by handling complex data-joining between disparate APIs (Events + Transit).
