import { Clock, MapPin, Star } from "lucide-react";
import type { Business } from "@/data/businesses";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={business.image}
          alt={`${business.name} storefront`}
          loading="lazy"
          width={800}
          height={500}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
            business.isOpen
              ? "bg-primary text-primary-foreground"
              : "bg-foreground/80 text-background"
          }`}
        >
          {business.isOpen ? "Open now" : "Closed"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-snug text-foreground">{business.name}</h3>
            <p className="mt-0.5 text-sm text-primary">{business.category}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-primary-soft px-2 py-1 text-sm font-semibold text-primary">
            <Star className="size-4 fill-current" aria-hidden="true" />
            {business.rating.toFixed(1)}
          </span>
        </div>

        <p className="mt-1 text-xs text-muted-foreground">
          {business.reviews.toLocaleString("en-IN")} reviews
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{business.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            {business.location}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            {business.hours}
          </li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
