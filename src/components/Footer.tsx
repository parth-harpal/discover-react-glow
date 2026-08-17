import { Facebook, Instagram, Linkedin, Store, Twitter } from "lucide-react";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#top" },
      { label: "Explore", href: "#businesses" },
      { label: "Categories", href: "#categories" },
      { label: "About", href: "#why" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Add Your Business", href: "#contact" },
      { label: "Claim Your Business", href: "#contact" },
      { label: "Business Login", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms & Conditions", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "Twitter", icon: Twitter },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Store className="size-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                D<span className="text-primary">Supply</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              DSupply helps people discover local businesses, stores and services — and gives every
              business a digital identity online.
            </p>
            <ul className="mt-5 flex gap-2">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 DSupply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
