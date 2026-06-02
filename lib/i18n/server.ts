import "server-only";
import {
  createInstance,
  type i18n,
  type KeyPrefix,
  type Namespace,
} from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cache } from "react";
import { DEFAULT_LOCALE, getOptions, isLocale, type Locale } from "./config";

const initI18next = async (
  lng: string,
  ns?: string | string[]
): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export const getCachedI18n = cache(
  async (lng: string, ns?: string | string[]) => {
    return initI18next(lng, ns);
  }
);

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
 * Server-side translator. Returns the bound `t` function, the i18next instance,
 * and the raw `resources` (passed to the client provider for hydration) — the
 * same shape teppich's `getTranslation` returns.
 */
export async function getTranslation<
  N extends Namespace = "common",
  KPrefix extends KeyPrefix<N> = undefined,
>(lng: string, ns?: N, keyPrefix?: KPrefix) {
  const nsNorm = (ns ?? "common") as N;
  const nsArray =
    typeof nsNorm === "string"
      ? [nsNorm]
      : Array.isArray(nsNorm)
        ? [...nsNorm]
        : ["common"];

  const i18nextInstance = await getCachedI18n(resolveLocale(lng), nsArray);

  const t = i18nextInstance.getFixedT<N, KPrefix>(
    resolveLocale(lng),
    nsNorm,
    keyPrefix
  );

  return {
    t,
    i18n: i18nextInstance,
    resources: i18nextInstance.services.resourceStore.data,
  };
}
