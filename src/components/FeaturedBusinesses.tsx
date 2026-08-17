import { ArrowRight } from "lucide-react";
import { businesses } from "@/data/businesses";
import { BusinessCard } from "./BusinessCard";

export function FeaturedBusinesses() {
  return (
    <section id="businesses" className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Popular Businesses
            </h2>
            <p className="mt-3 text-muted-foreground">
              Highly rated places customers keep coming back to.
            </p>
          </div>
          <a
            href="#nearby"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Browse all
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}
