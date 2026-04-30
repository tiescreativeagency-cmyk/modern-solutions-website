import { site } from "@/data/site";

function StarRow({ rating }) {
  return (
    <div
      className="flex gap-0.5 text-accent"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }, (_, i) => (
        <span key={i} aria-hidden className="text-lg leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { reviews } = site;
  return (
    <section
      id={reviews.id}
      className="border-y border-border bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          {reviews.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted">
          {reviews.body}
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.items.map((item) => (
            <li
              key={item.author}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted/50 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <StarRow rating={item.rating} />
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">
                  Google
                </span>
              </div>
              <p className="flex-1 text-base leading-relaxed text-foreground">
                “{item.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {item.author}
              </p>
              <p className="text-xs text-muted">{item.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
