import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";

export function CategorySection() {
  return (
    <section id="categories" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore Popular Categories
            </h2>
            <p className="mt-3 text-muted-foreground">
              Browse the categories people search for the most on DSupply.
            </p>
          </div>
          <a
            href="#businesses"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all categories
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
