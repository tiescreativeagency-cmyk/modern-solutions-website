"use client";

import Link from "next/link";
import { useFragmentNavClick } from "@/hooks/useFragmentNavClick";

export function FragmentAwareLink({ href, className, children, ...props }) {
  const fragmentNavClick = useFragmentNavClick();

  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => fragmentNavClick(event, href)}
      {...props}
    >
      {children}
    </Link>
  );
}
