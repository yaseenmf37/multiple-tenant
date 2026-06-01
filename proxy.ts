import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, localeFromHost, type Locale } from "./lib/i18n/config";

const COOKIE = "NEXT_LOCALE";

/**
 * Determines the active locale and exposes it to the app via the `x-locale`
 * request header (read by getLocale() in server components).
 *
 * Priority:
 *   1. Locale subdomain  — en.suvio.com / hy.suvio.com  (production)
 *   2. `?lang=` query     — dev convenience, also persisted to a cookie
 *   3. NEXT_LOCALE cookie — remembers the dev/query choice
 *   4. DEFAULT_LOCALE
 *
 * Next 16 renamed the `middleware` file convention to `proxy`.
 */
export function proxy(req: NextRequest) {
  const host = req.headers.get("host");
  const fromHost = localeFromHost(host);

  let locale: Locale = fromHost;
  let persist = false;

  // On a bare host (localhost, apex domain) allow ?lang / cookie overrides.
  if (fromHost === DEFAULT_LOCALE && !hasLocaleSubdomain(host)) {
    const queryLang = req.nextUrl.searchParams.get("lang");
    const cookieLang = req.cookies.get(COOKIE)?.value;
    if (isLocale(queryLang)) {
      locale = queryLang;
      persist = true;
    } else if (isLocale(cookieLang)) {
      locale = cookieLang;
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  if (persist) {
    res.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  }
  return res;
}

function hasLocaleSubdomain(host: string | null): boolean {
  if (!host) return false;
  const sub = host.split(":")[0].split(".")[0].toLowerCase();
  return isLocale(sub);
}

export const config = {
  // Run on pages, skip Next internals and static assets.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
