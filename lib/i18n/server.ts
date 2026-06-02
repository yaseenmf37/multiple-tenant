import "server-only";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

/**
 * Normalizes the `[locale]` route segment into a known locale, falling back to
 * the default when it is missing or unrecognized. The proxy rewrites every
 * request to `/{locale}/...` from the subdomain, so this segment is the single
 * source of truth for the active locale on the server.
 */
export function resolveLocale(segment: string | undefined): Locale {
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/**
 * The active locale together with its dictionary, derived from the `[locale]`
 * route segment. Pass `params.locale` from a server page or layout.
 */
export function getI18n(segment: string | undefined) {
  const locale = resolveLocale(segment);
  return { locale, t: getDictionary(locale) };
}
