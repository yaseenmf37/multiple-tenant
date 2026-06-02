import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconTile } from "@/components/ui/icon-tile";
import { Placeholder } from "@/components/ui/placeholder";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { ROUTES } from "@/lib/routes";

const ICONS = [
  { variant: "default" as const, path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
  { variant: "sand" as const, path: "M12 19l7-7a4 4 0 0 0-6-5l-1 1-1-1a4 4 0 0 0-6 5z" },
  { variant: "default" as const, path: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" },
  { variant: "ink" as const, path: "M3 3v18h18M7 15l4-4 3 3 5-6" },
  { variant: "default" as const, path: "M3 7h18M3 12h18M3 17h18M7 3v18" },
  { variant: "sand" as const, path: "M2 7h20v10H2zM2 11h20M6 15h4" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = await getTranslation(resolveLocale((await params).locale));
  return { title: t("features.meta.title"), description: t("features.meta.description") };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await getTranslation(resolveLocale((await params).locale));

  return (
      <main>
        {/* PAGE HERO */}
        <section className="bg-cream border-b border-solid border-line">
          <div className="container text-center" style={{ paddingBlock: "clamp(48px,6vw,80px)" }}>
            <Eyebrow center>{t("features.hero.eyebrow")}</Eyebrow>
            <h1 className="display mt-[16px] max-w-[760px] mx-auto" style={{ fontSize: "clamp(32px,4.6vw,54px)" }}>{t("features.hero.title")}</h1>
            <p className="lead mt-[18px] max-w-[600px] mx-auto">{t("features.hero.lead")}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-[28px]">
              <Button asChild size="lg"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.startFree")}</LocalizedLink></Button>
              <Button asChild variant="outline" size="lg"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.requestDemo")}</LocalizedLink></Button>
            </div>
          </div>
        </section>
        {/* FEATURE GRID */}
        <section className="section">
          <div className="container">
            <div className="grid gap-5 feat-grid grid-cols-3">
              {(t("features.grid", { returnObjects: true }) as { title: string; body: string; list: string[] }[]).map((item, i) => (
                <article key={item.title} className="card card-hover reveal p-[30px]">
                  <IconTile variant={ICONS[i].variant} path={ICONS[i].path} />
                  <h3 className="text-[20px] mt-[18px]">{item.title}</h3>
                  <p className="text-muted text-[15px] mt-[10px] leading-[1.75]">{item.body}</p>
                  <ul className="feat-list">
                    {item.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* DEEP DIVE */}
        <section className="section bg-cream">
          <div className="container">
            <div className="grid items-center gap-12 dash-grid grid-cols-[1.05fr_1fr]">
              <div className="reveal">
                <Eyebrow>{t("features.deepDive.eyebrow")}</Eyebrow>
                <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,42px)" }}>{t("features.deepDive.title")}</h2>
                <p className="lead mt-[16px] max-w-[480px]">{t("features.deepDive.lead")}</p>
                <div className="grid gap-4 grid-cols-[1fr_1fr] mt-[28px]">
                  <div>
                    <div className="stat-num text-[36px] text-brand-700">{t("features.deepDive.stat1Num")}</div>
                    <div className="text-muted text-[14px] mt-[4px]">{t("features.deepDive.stat1Label")}</div>
                  </div>
                  <div>
                    <div className="stat-num text-[36px] text-brand-700">{t("features.deepDive.stat2Num")}</div>
                    <div className="text-muted text-[14px] mt-[4px]">{t("features.deepDive.stat2Label")}</div>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <Placeholder label={t("features.deepDive.photo")} className="h-[340px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CtaSection title={t("features.cta.title")}>
          <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.startFree")}</LocalizedLink></Button>
          <Button asChild variant="onDark" size="lg"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.requestDemo")}</LocalizedLink></Button>
        </CtaSection>
      </main>
  );
}
