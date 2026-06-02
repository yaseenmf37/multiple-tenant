import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Placeholder } from "@/components/ui/placeholder";
import { getI18n } from "@/lib/i18n/server";
import { ANCHORS, ROUTES } from "@/lib/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = getI18n((await params).locale);
  return { title: t.solutions.meta.title, description: t.solutions.meta.description };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = getI18n((await params).locale);
  const s = t.solutions;

  const chipVariants = ["default", "ink", "ink", "sand"] as const;
  const anchors = [ANCHORS.BOUTIQUE, ANCHORS.CHAIN, ANCHORS.LODGE, ANCHORS.RESORT];

  return (
      <main>
        {/* PAGE HERO */}
        <section className="bg-cream border-b border-solid border-line">
          <div className="container text-center" style={{ paddingBlock: "clamp(48px,6vw,80px)" }}>
            <Eyebrow center>{s.hero.eyebrow}</Eyebrow>
            <h1 className="display mt-4 max-w-[760px] mx-auto" style={{ fontSize: "clamp(32px,4.6vw,54px)" }}>{s.hero.title}</h1>
            <p className="lead mt-[18px] max-w-[600px] mx-auto">{s.hero.lead}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-[26px]">
              {s.hero.chips.map((chip, i) => (
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
                <Chip variant="ink">{s.boutique.chip}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{s.boutique.title}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{s.boutique.lead}</p>
                <ul className="sol-list">
                  {s.boutique.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{s.boutique.cta}</LocalizedLink></Button>
              </div>
              <div className="reveal">
                <Placeholder label={s.boutique.photo} className="h-[360px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* CHAIN */}
        <section className="section bg-cream" id="chain">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev grid-cols-[1.05fr_1fr]">
              <div className="reveal order-2">
                <Placeholder label={s.chain.photo} className="h-[360px] rounded-lg" />
              </div>
              <div className="reveal order-1">
                <Chip>{s.chain.chip}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{s.chain.title}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{s.chain.lead}</p>
                <ul className="sol-list">
                  {s.chain.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{s.chain.cta}</LocalizedLink></Button>
              </div>
            </div>
          </div>
        </section>
        {/* ECO LODGE */}
        <section className="section" id="lodge">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid grid-cols-[1fr_1.05fr]">
              <div className="reveal">
                <Chip variant="sand">{s.lodge.chip}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{s.lodge.title}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{s.lodge.lead}</p>
                <ul className="sol-list">
                  {s.lodge.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{s.lodge.cta}</LocalizedLink></Button>
              </div>
              <div className="reveal">
                <Placeholder label={s.lodge.photo} className="h-[360px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* RESORT */}
        <section className="section bg-cream" id="resort">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev grid-cols-[1.05fr_1fr]">
              <div className="reveal order-2">
                <Placeholder label={s.resort.photo} className="h-[360px] rounded-lg" />
              </div>
              <div className="reveal order-1">
                <Chip variant="sand">{s.resort.chip}</Chip>
                <h2 className="display mt-4" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{s.resort.title}</h2>
                <p className="lead mt-3.5 max-w-[480px]">{s.resort.lead}</p>
                <ul className="sol-list">
                  {s.resort.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <Button asChild className="mt-[26px]"><LocalizedLink href={ROUTES.CONTACT}>{s.resort.cta}</LocalizedLink></Button>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CtaSection title={s.cta.title} lead={s.cta.lead}>
          <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white"><LocalizedLink href={ROUTES.CONTACT}>{t.cta.requestDemo}</LocalizedLink></Button>
          <Button asChild variant="onDark" size="lg"><LocalizedLink href={ROUTES.PRICING}>{t.cta.seePricing}</LocalizedLink></Button>
        </CtaSection>
      </main>
  );
}
