import Link from "next/link";
import { ContactUsFooterLink } from "@/components/ContactUsFooterLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export const metadata = {
  title: `About our Texas roofing contractors | ${site.name}`,
  description: `${site.ourStory.body} ${site.about.body}`.slice(0, 158),
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {site.ourStory.title}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {site.ourStory.body}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {site.about.body}
          </p>
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
