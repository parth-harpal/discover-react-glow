import { MapPin, Search } from "lucide-react";
import { useState, type FormEvent } from "react";

type SearchBarProps = {
  className?: string;
  onSearch?: (query: string, location: string) => void;
};

export function SearchBar({ className = "", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSearch?.(query, location);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`flex w-full flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-lift sm:flex-row sm:items-center ${className}`}
    >
      <label className="flex flex-1 items-center gap-3 rounded-xl px-3 py-2.5 focus-within:bg-muted">
        <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="sr-only">Search businesses</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search businesses, services or places..."
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
        />
      </label>

      <span className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />

      <label className="flex items-center gap-3 rounded-xl px-3 py-2.5 focus-within:bg-muted sm:w-56">
        <MapPin className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="sr-only">Location</span>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter location"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Search className="size-4" aria-hidden="true" />
        Search
      </button>
    </form>
  );
}
