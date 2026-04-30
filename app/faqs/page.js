"use client";

import { useEffect } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** Legacy URL: send visitors to FAQs on the home page */
export default function FaqsLegacyRedirectPage() {
  useEffect(() => {
    window.location.replace("/#faqs");
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <p className="mx-auto max-w-md px-4 py-24 text-center text-muted">
          Redirecting to FAQs…
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
