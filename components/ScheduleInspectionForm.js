"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground shadow-sm outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";

const labelClass = "text-sm font-semibold text-foreground";

export function ScheduleInspectionForm() {
  const { scheduling, contact } = site;
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const bookingDate = String(fd.get("bookingDate") ?? "").trim();
    const timeRequested = String(fd.get("timeRequested") ?? "").trim();
    const comment = String(fd.get("comment") ?? "").trim();

    const body = [
      `${scheduling.labels.name}: ${name}`,
      `${scheduling.labels.email}: ${email}`,
      `${scheduling.labels.phone}: ${phone}`,
      `${scheduling.labels.bookingDate}: ${bookingDate}`,
      `${scheduling.labels.timeRequested}: ${timeRequested}`,
      "",
      `${scheduling.labels.comment}:`,
      comment || "—",
    ].join("\n");

    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      scheduling.emailSubject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("opening");
    window.location.href = mailto;
  }

  return (
    <form
      id="schedule-form"
      className="mt-10 space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="schedule-name">
            {scheduling.labels.name}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="schedule-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="schedule-email">
            {scheduling.labels.email}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="schedule-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="schedule-phone">
            {scheduling.labels.phone}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="schedule-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="schedule-date">
            {scheduling.labels.bookingDate}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="schedule-date"
            name="bookingDate"
            type="date"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="schedule-time">
            {scheduling.labels.timeRequested}
            <span className="sr-only"> (required)</span>
          </label>
          <select
            id="schedule-time"
            name="timeRequested"
            required
            defaultValue=""
            className={cn(fieldClass, "appearance-none bg-[length:1rem_1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23737373'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          >
            <option value="" disabled>
              Select a time
            </option>
            {scheduling.timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="schedule-comment">
            {scheduling.labels.comment}
          </label>
          <textarea
            id="schedule-comment"
            name="comment"
            rows={4}
            className={cn(fieldClass, "resize-y min-h-[120px]")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-sm transition hover:bg-accent-dim"
        >
          {scheduling.submitLabel}
        </button>
        {status === "opening" ? (
          <p className="text-sm text-muted">
            If your email app didn’t open, call{" "}
            <a
              className="font-semibold text-accent hover:text-accent-dim"
              href={`tel:${contact.mainPhoneTel}`}
            >
              {contact.mainPhoneDisplay}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
