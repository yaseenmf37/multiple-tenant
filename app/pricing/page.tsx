import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import PricingPlans from "@/components/PricingPlans";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getI18n } from "@/lib/i18n/server";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.pricing.meta.title, description: t.pricing.meta.description };
}

export default async function PricingPage() {
  const { t } = await getI18n();
  const c = t.pricing.compare;
  const r = c.rows;
  const v = c.values;

  return (
    <main>
      <PricingPlans />

      {/* COMPARISON TABLE */}
      <section className="section bg-cream" style={{ paddingTop: "clamp(48px,6vw,80px)" }}>
        <div className="container">
          <div className="reveal text-center max-w-[560px] mx-auto mb-[44px]">
            <Eyebrow center>{c.eyebrow}</Eyebrow>
            <h2 className="display mt-[14px]" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{c.title}</h2>
          </div>
          <div className="reveal table-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th className="text-left">{c.colFeatures}</th>
                  <th>{c.colBasic}</th>
                  <th className="hl">{c.colPro}</th>
                  <th>{c.colEnterprise}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grp">
                  <td colSpan={4}>{c.groupProps}</td>
                </tr>
                <tr>
                  <td>{r.properties}</td>
                  <td>1</td>
                  <td className="hl">5</td>
                  <td>{v.unlimited}</td>
                </tr>
                <tr>
                  <td>{r.roomsPerProperty}</td>
                  <td>15</td>
                  <td className="hl">{v.unlimited}</td>
                  <td>{v.unlimited}</td>
                </tr>
                <tr>
                  <td>{r.teamMembers}</td>
                  <td>3</td>
                  <td className="hl">15</td>
                  <td>{v.unlimited}</td>
                </tr>
                <tr className="grp">
                  <td colSpan={4}>{c.groupBooking}</td>
                </tr>
                <tr>
                  <td>{r.brandedSite}</td>
                  <td data-c="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>{r.customDomain}</td>
                  <td data-c="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>{r.dynamicPricing}</td>
                  <td data-x="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>{r.channelSync}</td>
                  <td data-x="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr className="grp">
                  <td colSpan={4}>{c.groupInsight}</td>
                </tr>
                <tr>
                  <td>{r.analytics}</td>
                  <td>{v.basicAnalytics}</td>
                  <td className="hl">{v.advanced}</td>
                  <td>{v.advancedCustom}</td>
                </tr>
                <tr>
                  <td>{r.api}</td>
                  <td data-x="" />
                  <td className="hl" data-x="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>{r.support}</td>
                  <td>{v.email}</td>
                  <td className="hl">{v.priority}</td>
                  <td>{v.dedicatedCsm}</td>
                </tr>
                <tr>
                  <td>{r.sla}</td>
                  <td data-x="" />
                  <td className="hl" data-x="" />
                  <td>99.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-[820px]">
          <div className="reveal text-center mb-[40px]">
            <Eyebrow center>{t.pricing.faq.eyebrow}</Eyebrow>
            <h2 className="display mt-[14px]" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>{t.pricing.faq.title}</h2>
          </div>
          <div className="faq reveal">
            {t.pricing.faq.items.map((item, i) => (
              <details className="faq-item" key={item.q} open={i === 0}>
                <summary>{item.q}<span className="faq-ico" /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title={t.pricing.cta.title}
        titleFontSize="clamp(26px,3.6vw,40px)"
        titleMaxWidth="560px"
        padding="clamp(40px,6vw,64px)"
        sectionStyle={{ paddingTop: "0" }}
      >
        <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white">
          <LocalizedLink href={ROUTES.CONTACT}>{t.cta.startFree}</LocalizedLink>
        </Button>
        <Button asChild variant="onDark" size="lg">
          <LocalizedLink href={ROUTES.CONTACT}>{t.cta.requestDemo}</LocalizedLink>
        </Button>
      </CtaSection>
    </main>
  );
}
