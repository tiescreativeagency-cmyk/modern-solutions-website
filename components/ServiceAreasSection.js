import { site } from "@/data/site";

export function ServiceAreasSection() {
  const { serviceAreas } = site;
  return (
    <section
      id={serviceAreas.id}
      className="bg-gradient-to-b from-white to-surface-muted py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          {serviceAreas.title}
        </h2>
        {serviceAreas.intro ? (
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            {serviceAreas.intro}
          </p>
        ) : null}
        <ul
          className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${serviceAreas.intro ? "mt-8" : "mt-12"}`}
        >
          {serviceAreas.regions.map((region) => (
            <li
              key={region}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklab,var(--color-accent)_65%,transparent)]"
                aria-hidden
              />
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
