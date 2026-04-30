"use client";

import { FragmentAwareLink } from "@/components/FragmentAwareLink";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Button-style link that scrolls to the global footer “Contact Us” block */
export function ContactUsFooterLink({ className }) {
  const href = `#${site.contact.footerSectionId}`;

  return (
    <FragmentAwareLink
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-foreground shadow-sm transition hover:bg-surface-muted",
        className,
      )}
    >
      {site.contact.footerContactHeading}
    </FragmentAwareLink>
  );
}
