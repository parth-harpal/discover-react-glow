import { Compass, LocateFixed, MapPin } from "lucide-react";
import mapImage from "@/assets/map-placeholder.jpg";

const nearbyHighlights = [
  { name: "Cafés & Bakeries", distance: "0.4 km away" },
  { name: "Mobile & Repair Shops", distance: "0.9 km away" },
  { name: "Pharmacies", distance: "1.2 km away" },
];

export function NearbyBusinesses() {
  return (
    <section id="nearby" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find Businesses Near You
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Turn on your location or type a neighbourhood to see shops, services and places open
            around you right now.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 focus-within:border-primary">
              <MapPin className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">Your location</span>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <Compass className="size-4" aria-hidden="true" />
              Explore Nearby
            </button>
          </div>

          <ul className="mt-8 space-y-3">
            {nearbyHighlights.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card transition-colors hover:border-primary/40"
              >
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-muted-foreground">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
          <img
            src={mapImage}
            alt="Illustrated map of nearby business locations"
            loading="lazy"
            width={1200}
            height={900}
            className="size-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 backdrop-blur">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <LocateFixed className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">248 businesses within 5 km</p>
              <p className="text-xs text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
