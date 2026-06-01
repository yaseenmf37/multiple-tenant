"use client";

import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export type LocalizedLinkProps = Omit<NextLinkProps, "href"> & {
  /** A path from ROUTES, an ANCHORS value, or an EXTERNAL target. */
  href: string;
};

/**
 * App-wide replacement for next/link. Use this everywhere instead of importing
 * `next/link` directly, and source the `href` from `lib/routes.ts`.
 *
 * Locale is carried by the subdomain (en./hy.) and the NEXT_LOCALE cookie, so
 * the path itself stays locale-agnostic — this wrapper centralises linking and
 * keeps a single seam for future locale-aware routing or prefetch policy.
 */
export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  function LocalizedLink({ href, ...props }, ref) {
    return <Link ref={ref} href={href} {...props} />;
  }
);
