"use client";

import { useEffect, useRef } from "react";
import { FragmentAwareLink } from "@/components/FragmentAwareLink";
import { site } from "@/data/site";

/**
 * Background MP4 shipped in Git as /hero-video-default.mp4 (must be committed — see public/).
 * Optional: NEXT_PUBLIC_HERO_VIDEO_URL=https://...your-cdn.mp4 on Vercel for a HD file without committing it.
 */

function heroVideoSrc() {
  const v = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  if (typeof v === "string" && v.trim()) return v.trim();
  return "/hero-video-default.mp4";
}

export function HeroSection() {
  const videoRef = useRef(null);
  const src = heroVideoSrc();

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
  }, [src]);

  return (
    <section className="relative min-h-[min(520px,calc(100vh-5rem))] overflow-hidden bg-black">
      <video
        ref={videoRef}
        key={src}
        className="absolute inset-0 z-0 h-full min-h-full w-full select-none object-cover"
        src={src}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        poster="/hero-video-poster.jpg"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]"
        aria-hidden
      />

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
