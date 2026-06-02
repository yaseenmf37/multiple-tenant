import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LOCALES, getDirFromLocale } from "@/lib/i18n/config";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { I18nProvider } from "@/providers/I18nProvider";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { t } = await getTranslation(locale);
  return {
    title: {
      default: t("home.meta.title"),
      template: `%s — ${t("brand.name")}`,
    },
    description: t("home.meta.description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dir = getDirFromLocale(locale);
  const { resources } = await getTranslation(locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider locale={locale} resources={resources}>
          <Navbar />
          {children}
          <Footer />
          <ScrollReveal />
        </I18nProvider>
      </body>
    </html>
  );
}
