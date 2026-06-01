// ============================================================
// i18n configuration — locale is derived from the subdomain
// (e.g. en.suvio.com → "en", hy.suvio.com → "hy"). English is
// the default and the fallback when no locale subdomain is present.
// ============================================================

export const LOCALES = ["en", "hy"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

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

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
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
