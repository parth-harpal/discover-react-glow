import { ArrowRight, Plus } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Have a Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Get discovered by thousands of customers looking for businesses like yours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Plus className="size-4" aria-hidden="true" />
              Add Your Business
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
            >
              Learn More
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
