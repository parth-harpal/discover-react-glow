import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <a
      href="#businesses"
      className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-base font-semibold text-foreground">{category.name}</span>
        <span className="mt-0.5 block text-sm text-muted-foreground">
          {category.count} Businesses
        </span>
      </span>
    </a>
  );
}
