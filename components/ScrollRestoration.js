"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** After pathname changes (App Router nav), scroll to `#id` or reset to page top */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const id = window.location.hash.slice(1);
    if (id) {
      const scrollToTarget = () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
