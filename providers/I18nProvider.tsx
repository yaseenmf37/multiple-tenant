"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { useState } from "react";
import { getOptions } from "@/lib/i18n/config";

function createClientI18nInstance(lng: string, resources: any) {
  const i18n = createInstance();
  i18n.init({
    ...getOptions(lng),
    resources,
  });

  return i18n;
}

export function I18nProvider({
  children,
  locale,
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  resources: any;
}) {
  const [i18n] = useState(() => createClientI18nInstance(locale, resources));

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
