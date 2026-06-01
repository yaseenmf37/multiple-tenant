"use client";

import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from "@/lib/i18n/config";
import { useLocalized } from "@/lib/i18n/context";

/**
 * Switches locale by changing the host's locale subdomain and keeping the path.
 * Each locale lives on its own subdomain (en.suvio.com / hy.suvio.com, and
 * en.localhost / hy.localhost in dev). If the current host already starts with
 * a locale label it is replaced; otherwise the locale label is prepended.
 */
export default function LanguageSwitcher() {
  const { locale, t } = useLocalized();

  function switchTo(next: Locale) {
    if (next === locale || typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const labels = url.hostname.split(".");

    if (isLocale(labels[0])) {
      labels[0] = next;
    } else {
      labels.unshift(next);
    }
    url.hostname = labels.join(".");
    window.location.href = url.toString();
  }

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-opt${l === locale ? " active" : ""}`}
          aria-pressed={l === locale}
          onClick={() => switchTo(l)}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
