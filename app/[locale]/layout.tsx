import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LOCALES } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/context";
import { getI18n } from "@/lib/i18n/server";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = getI18n((await params).locale);
  return {
    title: {
      default: t.home.meta.title,
      template: `%s — ${t.brand.name}`,
    },
    description: t.home.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale, t } = getI18n((await params).locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocaleProvider locale={locale} dictionary={t}>
          <Navbar />
          {children}
          <Footer />
          <ScrollReveal />
        </LocaleProvider>
      </body>
    </html>
  );
}
