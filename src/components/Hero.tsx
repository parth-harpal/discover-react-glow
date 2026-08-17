import { BadgeCheck, MapPin, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-street.jpg";
import { SearchBar } from "./SearchBar";

const popular = ["Restaurants", "Electronics", "Salons", "Car Service", "Clinics"];

const stats = [
  { icon: TrendingUp, value: "12,000+", label: "Businesses listed" },
  { icon: BadgeCheck, value: "8,500+", label: "Verified profiles" },
  { icon: MapPin, value: "60+", label: "Cities covered" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <img
        src={heroImage}
        alt=""
        width={1920}
        height={1088}
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary shadow-card">
            <BadgeCheck className="size-4" aria-hidden="true" />
            Digital identity for every local business
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover the Best <span className="text-primary">Businesses</span> Near You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Find trusted local businesses, stores, services and more — all in one place.
          </p>

          <div className="mt-9">
            <SearchBar />
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <li className="text-sm text-muted-foreground">Popular:</li>
            {popular.map((item) => (
              <li key={item}>
                <a
                  href="#categories"
                  className="inline-block rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <dt className="text-xl font-bold text-foreground">{value}</dt>
                <dd className="text-sm text-muted-foreground">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
