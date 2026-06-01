import type { Locale } from "../config";
import { DEFAULT_LOCALE } from "../config";
import { en, type Dictionary } from "./en";
import { hy } from "./hy";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, hy };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
