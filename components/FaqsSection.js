"use client";

import { useState } from "react";
import { ContactUsFooterLink } from "@/components/ContactUsFooterLink";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function FaqRow({ item, index }) {
  const [open, setOpen] = useState(false);
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <li>
      <div className="overflow-hidden rounded-xl border border-border bg-surface-muted/50 shadow-sm transition hover:border-accent/40">
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start gap-3 px-5 py-4 text-left transition hover:bg-accent-subtle/60"
        >
          <span
            className="mt-px shrink-0 text-base font-bold tabular-nums text-accent"
            aria-hidden
          >
            {index + 1}.
          </span>
          <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-foreground sm:text-lg">
            {item.question}
          </span>
          <span className="shrink-0 text-accent" aria-hidden>
            <svg
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                open ? "rotate-180" : "rotate-0",
              )}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          hidden={!open}
          className="border-t border-border bg-white px-5 pb-5"
        >
          <p className="pt-4 text-lg leading-relaxed text-muted">{item.answer}</p>
        </div>
      </div>
    </li>
  );
}

export function FaqsSection() {
  const { faqs } = site;

  return (
    <section
      id={faqs.id}
      aria-labelledby="faqs-heading"
      className="scroll-mt-24 border-t border-border bg-white py-14 sm:scroll-mt-28 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {faqs.kicker}
        </p>
        <h2
          id="faqs-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {faqs.heading}
        </h2>
        <ul className="mt-10 flex list-none flex-col gap-3 p-0">
          {faqs.items.map((item, index) => (
            <FaqRow key={item.question} item={item} index={index} />
          ))}
        </ul>
        <ContactUsFooterLink className="mt-14" />
      </div>
    </section>
  );
}
