import { NextResponse, type NextRequest } from "next/server";
import { localeFromHost } from "./lib/i18n/config";

/**
 * Resolves the locale purely from the request subdomain
 * (en.suvio.com → "en", hy.suvio.com → "hy") and exposes it to the app via the
 * `x-locale` request header, read by getLocale() in server components.
 * A host without a known locale subdomain falls back to the default locale.
 *
 * Next 16 renamed the `middleware` file convention to `proxy`.
 */
export function proxy(req: NextRequest) {
  const locale = localeFromHost(req.headers.get("host"));

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on pages, skip Next internals and static assets.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
