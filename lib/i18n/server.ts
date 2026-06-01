import "server-only";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

/**
 * Resolves the active locale on the server. The middleware sets the `x-locale`
 * request header from the subdomain (or the dev cookie/query fallback); we read
 * it back here. Falls back to the default locale when the header is absent.
 */
export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-locale");
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Convenience: the active locale together with its dictionary. */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale) };
}
