import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconTile } from "@/components/ui/icon-tile";
import { Placeholder } from "@/components/ui/placeholder";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { EXTERNAL, ROUTES } from "@/lib/routes";

const VALUE_ICONS = [
  { variant: "default" as const, path: "M3 12h4l3 8 4-16 3 8h4" },
  { variant: "sand" as const, path: "M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" },
  { variant: "ink" as const, path: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = await getTranslation(resolveLocale((await params).locale));
  return { title: t("about.meta.title"), description: t("about.meta.description") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await getTranslation(resolveLocale((await params).locale));

  return (
      <main>
        {/* HERO */}
        <section className="bg-cream border-b border-solid border-line">
          <div className="container" style={{ paddingBlock: "clamp(48px,6vw,84px)" }}>
            <div className="grid items-center gap-12 about-hero grid-cols-[1.1fr_1fr]">
              <div>
                <Eyebrow>{t("about.hero.eyebrow")}</Eyebrow>
                <h1 className="display mt-[16px]" style={{ fontSize: "clamp(32px,4.4vw,52px)" }}>{t("about.hero.title")}</h1>
                <p className="lead mt-[18px] max-w-[520px]">{t("about.hero.lead")}</p>
              </div>
              <div>
                <Placeholder label={t("about.hero.photo")} className="h-[320px] rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* STORY */}
        <section className="section">
          <div className="container max-w-[780px]">
            <div className="reveal flex flex-col gap-[22px]">
              <p className="text-[19px] leading-[1.8] text-ink-700">{t("about.story.p1")}</p>
              <p className="text-[17px] leading-[1.85] text-muted">{t("about.story.p2")}</p>
            </div>
            <div className="grid gap-6 stat-row reveal grid-cols-4 mt-[48px] text-center">
              {(t("about.story.stats", { returnObjects: true }) as { num: string; label: string }[]).map((stat) => (
                <div key={stat.label}>
                  <div className="stat-num text-brand-700" style={{ fontSize: "clamp(28px,3.2vw,40px)" }}>{stat.num}</div>
                  <div className="text-muted text-[13.5px] mt-[4px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* MISSION */}
        <section className="section bg-ink text-center">
          <div className="container max-w-[760px]">
            <Eyebrow center className="text-brand-300">{t("about.mission.eyebrow")}</Eyebrow>
            <p className="display text-white mt-[20px] leading-[1.3] tracking-[-.02em]" style={{ fontSize: "clamp(24px,3vw,38px)" }}>{t("about.mission.statement")}</p>
          </div>
        </section>
        {/* VALUES */}
        <section className="section">
          <div className="container">
            <div className="reveal max-w-[560px] mb-[44px]">
              <Eyebrow>{t("about.values.eyebrow")}</Eyebrow>
              <h2 className="display mt-[14px]" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("about.values.title")}</h2>
            </div>
            <div className="grid gap-5 val-grid grid-cols-3">
              {(t("about.values.items", { returnObjects: true }) as { title: string; body: string }[]).map((item, i) => (
                <div key={item.title} className="card reveal p-[28px]">
                  <IconTile variant={VALUE_ICONS[i].variant} path={VALUE_ICONS[i].path} />
                  <h3 className="text-[18px] mt-[16px]">{item.title}</h3>
                  <p className="text-muted text-[14.5px] mt-[8px] leading-[1.7]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal text-center max-w-[560px] mx-auto mb-[44px]">
              <Eyebrow center>{t("about.team.eyebrow")}</Eyebrow>
              <h2 className="display mt-[14px]" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t("about.team.title")}</h2>
            </div>
            <div className="grid gap-5 team-grid grid-cols-4">
              {(t("about.team.members", { returnObjects: true }) as { name: string; role: string }[]).map((member) => (
                <figure key={member.name} className="card reveal overflow-hidden rounded">
                  <Placeholder label={t("about.team.portrait")} className="h-[190px]" />
                  <figcaption className="py-[16px] px-[18px]">
                    <div className="font-bold text-[15.5px]">{member.name}</div>
                    <div className="text-muted text-[13px] mt-[2px]">{member.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
        <CtaSection title={t("about.cta.title")} titleFontSize="clamp(26px,3.6vw,40px)" titleMaxWidth="560px" padding="clamp(40px,6vw,64px)">
          <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.getInTouch")}</LocalizedLink></Button>
          <Button asChild variant="onDark" size="lg"><a href={EXTERNAL.OPEN_ROLES}>{t("about.cta.openRoles")}</a></Button>
        </CtaSection>
      </main>
  );
}
