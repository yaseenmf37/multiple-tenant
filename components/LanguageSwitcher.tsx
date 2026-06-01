"use client";

import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from "@/lib/i18n/config";
import { useLocalized } from "@/lib/i18n/context";

/**
 * Switches locale. In production each locale lives on its own subdomain
 * (en.suvio.com / hy.suvio.com), so we swap the first host label and keep the
 * path. On a bare host (localhost / apex) we fall back to a `?lang=` query,
 * which the middleware persists to a cookie.
 */
export default function LanguageSwitcher() {
  const { locale, t } = useLocalized();

  function switchTo(next: Locale) {
    if (next === locale || typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const labels = url.hostname.split(".");

    if (isLocale(labels[0]) && labels.length > 1) {
      labels[0] = next;
      url.hostname = labels.join(".");
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", next);
    }
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
