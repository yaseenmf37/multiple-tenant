import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Placeholder } from "@/components/ui/placeholder";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { ANCHORS, ROUTES } from "@/lib/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = await getTranslation(resolveLocale((await params).locale));
  return { title: t("solutions.meta.title"), description: t("solutions.meta.description") };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await getTranslation(resolveLocale((await params).locale));

  const chipVariants = ["default", "ink", "ink", "sand"] as const;
  const anchors = [ANCHORS.BOUTIQUE, ANCHORS.CHAIN, ANCHORS.LODGE, ANCHORS.RESORT];

  return (
      <main>
        {/* PAGE HERO */}
        <section className="bg-cream border-b border-solid border-line">
          <div className="container text-center" style={{ paddingBlock: "clamp(48px,6vw,80px)" }}>
            <Eyebrow center>{t("solutions.hero.eyebrow")}</Eyebrow>
            <h1 className="display mt-4 max-w-[760px] mx-auto" style={{ fontSize: "clamp(32px,4.6vw,54px)" }}>{t("solutions.hero.title")}</h1>
            <p className="lead mt-[18px] max-w-[600px] mx-auto">{t("solutions.hero.lead")}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-[26px]">
              {(t("solutions.hero.chips", { returnObjects: true }) as string[]).map((chip, i) => (
                <Chip key={chip} asChild variant={chipVariants[i]}>
                  <a href={anchors[i]}>{chip}</a>
                </Chip>
              ))}
            </div>
          </div>
        </section>
        {/* BOUTIQUE */}
        <section className="section" id="boutique">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid grid-cols-[1fr_1.05fr]">
              <div className="reveal">
                <Chip variant="ink">{t("solutions.boutique.chip")}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("solutions.boutique.title")}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{t("solutions.boutique.lead")}</p>
                <ul className="sol-list">
                  {(t("solutions.boutique.list", { returnObjects: true }) as string[]).map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{t("solutions.boutique.cta")}</LocalizedLink></Button>
              </div>
              <div className="reveal">
                <Placeholder label={t("solutions.boutique.photo")} className="h-[360px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* CHAIN */}
        <section className="section bg-cream" id="chain">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev grid-cols-[1.05fr_1fr]">
              <div className="reveal order-2">
                <Placeholder label={t("solutions.chain.photo")} className="h-[360px] rounded-lg" />
              </div>
              <div className="reveal order-1">
                <Chip>{t("solutions.chain.chip")}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("solutions.chain.title")}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{t("solutions.chain.lead")}</p>
                <ul className="sol-list">
                  {(t("solutions.chain.list", { returnObjects: true }) as string[]).map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{t("solutions.chain.cta")}</LocalizedLink></Button>
              </div>
            </div>
          </div>
        </section>
        {/* ECO LODGE */}
        <section className="section" id="lodge">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid grid-cols-[1fr_1.05fr]">
              <div className="reveal">
                <Chip variant="sand">{t("solutions.lodge.chip")}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("solutions.lodge.title")}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{t("solutions.lodge.lead")}</p>
                <ul className="sol-list">
                  {(t("solutions.lodge.list", { returnObjects: true }) as string[]).map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{t("solutions.lodge.cta")}</LocalizedLink></Button>
              </div>
              <div className="reveal">
                <Placeholder label={t("solutions.lodge.photo")} className="h-[360px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* RESORT */}
        <section className="section bg-cream" id="resort">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev grid-cols-[1.05fr_1fr]">
              <div className="reveal order-2">
                <Placeholder label={t("solutions.resort.photo")} className="h-[360px] rounded-lg" />
              </div>
              <div className="reveal order-1">
                <Chip variant="sand">{t("solutions.resort.chip")}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("solutions.resort.title")}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{t("solutions.resort.lead")}</p>
                <ul className="sol-list">
                  {(t("solutions.resort.list", { returnObjects: true }) as string[]).map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{t("solutions.resort.cta")}</LocalizedLink></Button>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CtaSection title={t("solutions.cta.title")} lead={t("solutions.cta.lead")}>
          <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.requestDemo")}</LocalizedLink></Button>
          <Button asChild variant="onDark" size="lg"><LocalizedLink href={ROUTES.PRICING}>{t("cta.seePricing")}</LocalizedLink></Button>
        </CtaSection>
      </main>
  );
}
