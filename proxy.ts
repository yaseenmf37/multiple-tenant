import { NextResponse, type NextRequest } from "next/server";
import { localeFromHost } from "./lib/i18n/config";

/**
 * Resolves the locale purely from the request subdomain
 * (en.suvio.com → "en", hy.suvio.com → "hy") and carries it into the app by
 * rewriting the request to the `/{locale}/...` route segment, where the
 * `app/[locale]` layout and pages read it from their `params`. The public URL
 * stays clean (no locale prefix); the segment exists only internally.
 * A host without a known locale subdomain falls back to the default locale.
 *
 * Next 16 renamed the `middleware` file convention to `proxy`.
 */
export function proxy(req: NextRequest) {
  const locale = localeFromHost(req.headers.get("host"));

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  // Run on pages, skip Next internals and static assets.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
