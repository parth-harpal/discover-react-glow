import { BadgeCheck, Compass, Search, Sparkles } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Discover Easily",
    description: "Find businesses and services quickly with fast, focused search.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Information",
    description: "Access useful business details — hours, contact and address — in one place.",
  },
  {
    icon: Compass,
    title: "Explore Nearby",
    description: "Discover businesses around your location, wherever you are.",
  },
  {
    icon: Sparkles,
    title: "Easy Business Discovery",
    description: "Search by category, location or business name in a couple of taps.",
  },
];

export function WhyDSupply() {
  return (
    <section id="why" className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose DSupply?
          </h2>
          <p className="mt-3 text-muted-foreground">
            A simple, reliable way for people to find businesses — and for businesses to be found.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
