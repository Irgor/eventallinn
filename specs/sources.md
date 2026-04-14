# Data Sources for EvenTallinn

This document lists the official APIs and data feeds required to power the Event Discovery and Public Transport integration for the EvenTallinn platform.

## 1. Public Transport Data (GTFS)
The backbone of the transit system. All feeds follow the Google Transit Feed Specification.

*   **Static GTFS (Schedules & Stops):**
    *   **Source:** [Peatus.ee / Transport Administration](https://peatus.ee)
    *   **Description:** Contains all stops, routes, and planned schedules for the whole of Estonia. Must be parsed and stored in a database (e.g., PostgreSQL/PostGIS).
    
*   **Real-time GTFS-RT (Vehicle Positions & Delays):**
    *   **Source:** [Tallinn Open Data Portal](https://tallinn.ee)
    *   **Direct Feed:** [GTFS-RT Trip Updates / Vehicle Positions](http://tallinn.ee)
    *   **Description:** Protocol Buffer (protobuf) feeds showing where the buses/trams are right now and their estimated delays.

## 2. Event & Tourism Data
Where we find the "Spots" for the discovery feed.

*   **Visit Estonia API (National Level):**
    *   **URL:** [VisitEstonia API Documentation](https://visitestonia.com)
    *   **Description:** The primary source for tourist attractions, events, and points of interest across the country. Highly structured and reliable.

*   **Tallinn Culture & Event Calendar:**
    *   **URL:** [Tallinn.ee Open Data - Events](https://tallinn.eedataset/tallinna-kultuuriurituste-kalender)
    *   **Description:** Specific dataset for events happening in the capital. Useful for hyper-local discovery in Tallinn districts.

## 3. Geographical & Contextual Data
Essential for map rendering and "Winter Mode" features.

*   **Estonian Weather Service (Environmental Agency):**
    *   **URL:** [Estonian Weather API](https://envir.ee)
    *   **Description:** Real-time weather data from stations across Estonia. Vital for calculating "Winter Walking Time" or weather-related delays.

*   **OpenStreetMap (OSM) / Mapbox:**
    *   **Description:** Recommended for map tile rendering and geocoding (turning addresses into coordinates). Next.js has excellent integration with `react-leaflet` for OSM or `react-map-gl` for Mapbox.

## 4. Business & Registry Data (Optional / Phase 2)
For deep-dives into venues and business transparency.

*   **e-Business Register (Avaandmed):**
    *   **URL:** [Estonian e-Business Register Open Data](https://eesti.ee)
    *   **Description:** Data about companies registered in Estonia. Can be used to verify the legitimacy of event venues.

---

### Implementation Note for IA PO:
- **Phase 1** should focus on fetching the **Visit Estonia API** (Events) and correlating it with **Static GTFS** (Nearest Stop name).
- **Phase 2** will implement the **GTFS-RT** fetch for the "Next arrival" countdown on the event cards.
