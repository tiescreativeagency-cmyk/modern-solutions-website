import { site } from "@/data/site";

export function ServicesSection() {
  const { homepageServices } = site;

  return (
    <section
      id={homepageServices.id}
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-t border-border bg-surface-muted py-14 sm:scroll-mt-28 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="services-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {homepageServices.title}
        </h2>
        {homepageServices.subtitle ? (
          <p className="mt-4 max-w-3xl text-lg text-muted">
            {homepageServices.subtitle}
          </p>
        ) : null}
        <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${homepageServices.subtitle ? "mt-8" : "mt-10"}`}>
          {homepageServices.items.map((item) => (
            <li key={item.label}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:bg-accent-subtle">
                <h3 className="text-base font-bold uppercase tracking-wide text-foreground">
                  {item.label}
                </h3>
                {item.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
