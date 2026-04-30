import Link from "next/link";
import { FragmentAwareLink } from "@/components/FragmentAwareLink";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.78h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.242 0-1.628.766-1.628 1.553v2.086h3.086l-.494 3.086h-2.592v6.988C18.344 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function FooterLink({ item }) {
  const className =
    "text-xs font-semibold uppercase tracking-wide text-white/90 hover:text-accent";

  if (item.external) {
    return (
      <a
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.label}
      </a>
    );
  }

  return (
    <FragmentAwareLink href={item.href} className={className}>
      {item.label}
    </FragmentAwareLink>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:max-w-lg">
            <section
              id={site.contact.footerSectionId}
              aria-labelledby="footer-contact-heading"
              className="scroll-mt-24 sm:scroll-mt-28"
            >
              <h2
                id="footer-contact-heading"
                className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
              >
                {site.contact.footerContactHeading}
              </h2>

              <div className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-lg font-semibold text-white underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {site.contact.email}
                  </a>
                  <a
                    href={`tel:${site.contact.mainPhoneTel}`}
                    className="text-lg font-semibold text-white transition hover:text-accent"
                  >
                    {site.contact.mainPhoneDisplay}
                  </a>
                </div>

                <div className="border-t border-white/10 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                    {site.contact.corporateLabel}
                  </p>
                  <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                    <div className="min-w-0 space-y-1.5 text-sm leading-relaxed text-white/75">
                      {site.contact.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <a
                        href={`tel:${site.contact.corporatePhoneTel}`}
                        className="mt-3 inline-flex font-semibold text-white transition hover:text-accent"
                      >
                        {site.contact.corporatePhoneDisplay}
                      </a>
                    </div>
                    <section
                      aria-labelledby="footer-social-heading"
                      className="flex shrink-0 flex-col items-end gap-4 self-end text-right sm:self-auto"
                    >
                      <p
                        id="footer-social-heading"
                        className="text-xs font-semibold uppercase tracking-widest text-white/50"
                      >
                        {site.social.heading}
                      </p>
                      <div className="flex flex-wrap justify-end gap-4">
                        {site.social.links.length === 0 ? (
                          <span className="max-w-[16rem] text-sm text-white/60">
                            Social links — add in{" "}
                            <code className="rounded bg-white/10 px-1 py-0.5 text-white/90">
                              data/site.js
                            </code>
                          </span>
                        ) : (
                          site.social.links.map((s) => (
                            <a
                              key={s.href}
                              href={s.href}
                              className={cn(
                                "inline-flex items-center justify-center text-white transition hover:text-accent",
                                s.icon === "facebook"
                                  ? "h-10 w-10 rounded-full border border-white/25 hover:border-accent"
                                  : "text-sm font-medium",
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={s.label}
                            >
                              {s.icon === "facebook" ? (
                                <FacebookIcon className="h-5 w-5" />
                              ) : (
                                s.label
                              )}
                            </a>
                          ))
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
              {site.nav.footer.map((item) => (
                <FooterLink key={item.label + item.href} item={item} />
              ))}
            </nav>
            <div className="flex flex-wrap gap-4">
              <FragmentAwareLink
                href={site.ctas.schedule.href}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition hover:bg-accent-dim"
              >
                {site.ctas.schedule.label}
              </FragmentAwareLink>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.legal.copyright}</p>
          <Link href={site.legal.privacy.href} className="hover:text-accent">
            {site.legal.privacy.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
