import { ContactUsFooterLink } from "@/components/ContactUsFooterLink";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export function StubPage({ title, kicker, children }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {children ? (
            <div className="mt-6 text-lg leading-relaxed text-muted">
              {children}
            </div>
          ) : (
            <p className="mt-6 text-lg text-muted">
              This page is ready for your detailed content. Update copy in{" "}
              <code className="rounded bg-accent-subtle px-1 py-0.5 text-sm text-foreground ring-1 ring-accent/30">
                data/site.js
              </code>{" "}
              or extend this route when you&apos;re ready.
            </p>
          )}
          <div className="mt-10 flex flex-col items-start gap-4">
            <ContactUsFooterLink />
            <Link
              href="/"
              className="inline-flex font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
