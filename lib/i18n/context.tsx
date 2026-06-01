"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * Returns the active locale and its dictionary inside client components.
 * Usage: `const { t, locale } = useLocalized();` then `t.nav.features`.
 */
export function useLocalized(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocalized must be used within a <LocaleProvider>");
  }
  return ctx;
}

/** Just the active locale, when the dictionary isn't needed. */
export function useLocale(): Locale {
  return useLocalized().locale;
}
