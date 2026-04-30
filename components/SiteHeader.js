"use client";

import Image from "next/image";
import Link from "next/link";
import { FragmentAwareLink } from "@/components/FragmentAwareLink";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 190;

/** Unified nav control height — logo, text links, and CTA align on one baseline row */
const NAV_ROW_H =
  "h-11 min-h-[44px] shrink-0 items-center justify-center sm:h-11";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-3 sm:gap-8 sm:px-6 lg:gap-12">
        <Link
          href="/"
          className="group relative z-0 inline-flex shrink-0 items-center self-center mr-4 sm:mr-6 md:mr-8"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            className="h-9 w-auto max-w-[min(70vw,20rem)] sm:h-10"
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
            priority
            unoptimized
          />
        </Link>

        <nav
          className="relative z-10 flex min-h-11 min-w-0 flex-1 flex-nowrap items-center justify-end gap-0.5 overflow-x-auto overscroll-contain pl-4 sm:gap-1 sm:pl-5 md:gap-1.5 md:pl-6 scroll-pl-4 sm:scroll-pl-5 md:scroll-pl-6 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {site.nav.primary.map((item) => {
            const scheduling = item.href.startsWith("/scheduling");
            const hrefFinal = scheduling ? site.ctas.schedule.href : item.href;

            const linkClassName = cn(
              scheduling &&
                cn(
                  "inline-flex shrink-0 rounded-xl bg-accent px-3 py-0 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-sm transition hover:bg-accent-dim md:px-4",
                  NAV_ROW_H,
                ),
              !scheduling &&
                cn(
                  "inline-flex whitespace-nowrap rounded-lg px-2 py-0 text-xs font-semibold uppercase tracking-wide text-foreground transition hover:bg-surface-muted hover:text-accent sm:px-2.5",
                  NAV_ROW_H,
                ),
            );

            return (
              <FragmentAwareLink
                key={item.href + item.label}
                href={hrefFinal}
                className={linkClassName}
              >
                {item.label}
              </FragmentAwareLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
