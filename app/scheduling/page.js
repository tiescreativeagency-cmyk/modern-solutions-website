import Link from "next/link";
import { ContactUsFooterLink } from "@/components/ContactUsFooterLink";
import { ScheduleInspectionForm } from "@/components/ScheduleInspectionForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export const metadata = {
  title: `Scheduling | ${site.name}`,
  description: site.scheduling.intro,
};

export default function SchedulingPage() {
  const { scheduling } = site;
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {scheduling.kicker}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            {scheduling.heading}
          </h1>
          <p className="mt-4 text-lg text-muted">{scheduling.intro}</p>
          <ScheduleInspectionForm />
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
