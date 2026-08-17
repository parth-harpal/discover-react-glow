import { Link } from "@tanstack/react-router";
import { Menu, Plus, Search, Store, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Explore", href: "#businesses" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="DSupply home">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Store className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            D<span className="text-primary">Supply</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#top"
            aria-label="Search"
            className="grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="rounded-xl px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Login
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add Your Business
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-4 pb-6 pt-3 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Login / Sign Up
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <Plus className="size-4" aria-hidden="true" />
              Add Your Business
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
