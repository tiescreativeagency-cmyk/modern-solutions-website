import Link from "next/link";
import { site } from "@/data/site";

export function TaglineBand() {
  return (
    <section className="bg-secondary py-14 text-secondary-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="space-y-2 sm:space-y-3">
          {site.tagline.lines.map((line) => (
            <p
              key={line}
              className="text-2xl font-bold uppercase tracking-wide sm:text-3xl md:text-4xl"
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">
            Call us today
          </p>
          <Link
            href={`tel:${site.tagline.phoneTel}`}
            className="mt-2 inline-block text-3xl font-bold tracking-tight text-accent hover:text-accent-dim sm:text-4xl"
          >
            {site.tagline.phoneDisplay}
          </Link>
        </div>
      </div>
    </section>
  );
}
