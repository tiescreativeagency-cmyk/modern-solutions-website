"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";

/** Normalize Next.js pathname vs URL.pathname for comparison */
function pathsMatch(pathname, urlPathname) {
  const a = pathname === "" ? "/" : pathname;
  const b = urlPathname === "" ? "/" : urlPathname;
  return (
    a === b ||
    (a.endsWith("/") && a.slice(0, -1) === b) ||
    (b.endsWith("/") && b.slice(0, -1) === a)
  );
}

/**
 * Prevent full navigation when target is `#...` on the current path; scroll +
 * sync the browser URL fragment.
 */
export function useFragmentNavClick() {
  const pathname = usePathname();

  return useCallback(
    (/** @type {React.MouseEvent<HTMLAnchorElement>} */ event, href) => {
      if (
        typeof href !== "string" ||
        typeof window === "undefined" ||
        !href.includes("#")
      ) {
        return;
      }
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      const id = url.hash.slice(1);
      if (!id || !pathsMatch(pathname, url.pathname)) return;

      event.preventDefault();
      queueMicrotask(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      });
    },
    [pathname],
  );
}
