// ============================================================
// i18n configuration — locale is derived from the subdomain
// (e.g. en.suvio.com → "en", hy.suvio.com → "hy"). English is
// the default and the fallback when no locale subdomain is present.
//
// Translations are served by i18next from JSON resources under
// `locales/<locale>/<namespace>.json` (see lib/i18n/server.ts and
// providers/I18nProvider.tsx), mirroring the teppich setup.
// ============================================================

import type { InitOptions } from "i18next";

export const LOCALES = ["en", "hy"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** All locales i18next is allowed to load (alias of LOCALES, teppich parity). */
export const SUPPORTED_LOCALES: readonly string[] = [...LOCALES];

/** i18next namespaces. A single `common` namespace, like teppich. */
export const NAMESPACES = ["common"] as const;

/** Human-readable label for each locale (used by the language switcher). */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  hy: "Հայերեն",
};

/** Text direction per locale (both LTR here, but kept for completeness). */
export const LOCALE_DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  hy: "ltr",
};

const RTL_LOCALES = ["fa", "ar", "he"] as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Builds the i18next init options for a given language/namespace, exactly as
 * teppich does. Used by both the server instance and the client provider so
 * the two stay in sync.
 */
export function getOptions(
  lng: string = DEFAULT_LOCALE,
  ns: string | string[] | readonly string[] = NAMESPACES
): InitOptions {
  return {
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    lng,
    fallbackNS: "common",
    defaultNS: "common",
    ns,
  };
}

export function getDirFromLocale(locale: string | undefined): "ltr" | "rtl" {
  return locale && (RTL_LOCALES as readonly string[]).includes(locale)
    ? "rtl"
    : "ltr";
}

/**
 * Extracts the locale from a request host. The first DNS label is treated as
 * the locale (`hy.suvio.com` → `hy`). Falls back to the default locale when
 * the subdomain is missing or unknown (e.g. `localhost:3000`, `suvio.com`).
 */
export function localeFromHost(host: string | null | undefined): Locale {
  if (!host) return DEFAULT_LOCALE;
  const sub = host.split(":")[0].split(".")[0].toLowerCase();
  return isLocale(sub) ? sub : DEFAULT_LOCALE;
}
