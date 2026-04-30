import Link from "next/link";
import { ContactUsFooterLink } from "@/components/ContactUsFooterLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export const metadata = {
  title: `${site.insurance.heading} | ${site.name}`,
  description: site.insurance.body.slice(0, 155),
};

export default function InsurancePage() {
  const { insurance } = site;

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {insurance.kicker}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            {insurance.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {insurance.body}
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
