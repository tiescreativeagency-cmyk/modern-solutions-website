"use client";

import { useEffect, useRef } from "react";
import { FragmentAwareLink } from "@/components/FragmentAwareLink";
import { site } from "@/data/site";

/** Prefer CDN/Blob URL in production when the repo omits large public/hero-video.mp4 */
function heroVideoSrc() {
  const fromEnv =
    typeof process.env.NEXT_PUBLIC_HERO_VIDEO_URL === "string"
      ? process.env.NEXT_PUBLIC_HERO_VIDEO_URL.trim()
      : "";
  return fromEnv || "/hero-video.mp4";
}

export function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const kick = () => {
      el.muted = true;
      el.defaultMuted = true;
      el.play().catch(() => {});
    };
    kick();
    el.addEventListener("loadeddata", kick);
    return () => el.removeEventListener("loadeddata", kick);
  }, []);

  return (
    <section className="relative min-h-[min(520px,calc(100vh-5rem))] overflow-hidden bg-black">
      {/* Full-bleed video — beneath all content */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full min-h-full w-full select-none object-cover"
        muted
        autoPlay
        playsInline
        loop
        preload="auto"
        aria-hidden
      >
        <source src={heroVideoSrc()} type="video/mp4" />
      </video>

      {/* Very light darken so white type reads clearly without hiding the footage */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]"
        aria-hidden
      />

      {/* Foreground — white type above scrim */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white [text-shadow:0_1px_2px_rgb(0_0_0),0_2px_28px_rgb(0_0_0_/_0.82),0_0_60px_rgb(0_0_0_/_0.45)] sm:text-5xl sm:leading-tight">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-white sm:text-xl [text-shadow:0_1px_2px_rgb(0_0_0),0_2px_16px_rgb(0_0_0_/_0.78),0_0_40px_rgb(0_0_0_/_0.38)]">
            {site.ourStory.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FragmentAwareLink
              href={site.ctas.schedule.href}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-sm transition hover:bg-accent-dim"
            >
              {site.ctas.schedule.label}
            </FragmentAwareLink>
          </div>
        </div>
      </div>
    </section>
  );
}
