import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CtaSection } from "@/components/ui/cta-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconTile } from "@/components/ui/icon-tile";
import { Placeholder } from "@/components/ui/placeholder";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { ROUTES } from "@/lib/routes";

const FEATURE_ICONS = [
  { variant: "default" as const, path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
  { variant: "sand" as const, path: "M12 19l7-7a4 4 0 0 0-6-5l-1 1-1-1a4 4 0 0 0-6 5z" },
  { variant: "default" as const, path: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" },
  { variant: "ink" as const, path: "M3 3v18h18M7 15l4-4 3 3 5-6" },
];

const GALLERY_VARIANTS = ["ink", "sand", "default"] as const;

const ArrowIcon = (
  <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await getTranslation(resolveLocale((await params).locale));

  return (
      <main>
        {/* ============== HERO ============== */}
        <section className="section" style={{ paddingBlock: "clamp(44px,6vw,84px)" }}>
          <div className="container">
            <div className="grid items-center gap-14 hero-grid grid-cols-[1.04fr_1.06fr]">
              {/* copy */}
              <div>
                <Eyebrow>{t("home.hero.eyebrow")}</Eyebrow>
                <h1 className="display mt-[20px]"> {t("home.hero.titleLine1")}<br /> <span className="text-brand-700">{t("home.hero.titleLine2")}</span> </h1>
                <p className="lead mt-[22px] max-w-[520px]"> {t("home.hero.lead")} </p>
                <div className="flex flex-wrap items-center gap-3 mt-[32px]">
                  <Button asChild size="lg"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.startFree")}</LocalizedLink></Button>
                  <Button asChild variant="outline" size="lg"><LocalizedLink href={ROUTES.CONTACT}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none" /></svg> {t("cta.requestDemo")} </LocalizedLink></Button>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-[30px] text-muted text-[14px]">
                  {(t("home.hero.bullets", { returnObjects: true }) as string[]).map((b) => (
                    <span key={b} className="flex items-center gap-2"><svg className="w-[18px] h-[18px] text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>{b}</span>
                  ))}
                </div>
              </div>
              {/* storefront mockup */}
              <div className="hero-mock relative">
                <div className="card rounded-[22px] overflow-hidden shadow-lg">
                  {/* browser chrome */}
                  <div className="flex items-center gap-[8px] py-[12px] px-[16px] bg-cream border-b border-solid border-line-2">
                    <span className="w-[11px] h-[11px] rounded-full bg-[#cdd6d2]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#d8e0dc]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#e2e8e5]" />
                    <span className="ml-[10px] flex-1 bg-white border border-solid border-line-2 rounded-[8px] py-[5px] px-[12px] text-[11.5px] text-muted" style={{ fontFamily: "'DM Mono',monospace" }}>{t("home.mock.url")}</span>
                  </div>
                  {/* storefront body */}
                  <div className="bg-white">
                    <div className="flex items-center justify-between py-[14px] px-[18px] border-b border-solid border-line">
                      <span className="font-extrabold text-[15px] tracking-[-.02em]">{t("home.mock.hotel")}</span>
                      <span className="flex gap-[14px] text-[12px] text-muted">
                        <span>{t("home.mock.navRooms")}</span>
                        <span>{t("home.mock.navAmenities")}</span>
                        <span>{t("home.mock.navContact")}</span>
                      </span>
                    </div>
                    <Placeholder label={t("home.mock.lobbyPhoto")} className="h-[150px]" />
                    {/* booking widget */}
                    <div className="mt-[-26px] mx-[16px] relative bg-white border border-solid border-line-2 rounded-[14px] shadow p-[14px] grid grid-cols-[1fr_1fr_auto] gap-[10px] items-end">
                      <div>
                        <div className="text-[10.5px] text-muted mb-[4px]">{t("home.mock.checkIn")}</div>
                        <div className="text-[12.5px] font-bold">{t("home.mock.checkInDate")}</div>
                      </div>
                      <div>
                        <div className="text-[10.5px] text-muted mb-[4px]">{t("home.mock.checkOut")}</div>
                        <div className="text-[12.5px] font-bold">{t("home.mock.checkOutDate")}</div>
                      </div>
                      <div className="bg-brand-600 text-white rounded-[10px] py-[9px] px-[14px] text-[12.5px] font-bold">{t("home.mock.search")}</div>
                    </div>
                    {/* room cards */}
                    <div className="grid grid-cols-[1fr_1fr] gap-[12px] p-[16px]">
                      <div className="border border-solid border-line rounded-[12px] overflow-hidden">
                        <Placeholder label={t("home.mock.deluxePhoto")} className="h-[62px]" labelStyle={{ fontSize: "10px" }} />
                        <div className="py-[9px] px-[11px]">
                          <div className="text-[12px] font-bold">{t("home.mock.deluxeName")}</div>
                          <div className="text-[11px] text-brand-700 font-bold mt-[3px]">{t("home.mock.deluxePrice")}</div>
                        </div>
                      </div>
                      <div className="border border-solid border-line rounded-[12px] overflow-hidden">
                        <Placeholder label={t("home.mock.suitePhoto")} className="h-[62px]" labelStyle={{ fontSize: "10px" }} />
                        <div className="py-[9px] px-[11px]">
                          <div className="text-[12px] font-bold">{t("home.mock.suiteName")}</div>
                          <div className="text-[11px] text-brand-700 font-bold mt-[3px]">{t("home.mock.suitePrice")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* floating cards */}
                <div className="card float-a absolute bottom-[-22px] left-[-22px] py-[13px] px-[16px] flex items-center gap-[11px] shadow-lg">
                  <IconTile variant="sand" path="M20 6L9 17l-5-5" strokeWidth={2.2} className="w-[40px] h-[40px] rounded-[11px]" />
                  <div>
                    <div className="text-[12px] text-muted">{t("home.mock.newBooking")}</div>
                    <div className="text-[13.5px] font-extrabold">{t("home.mock.newBookingDetail")}</div>
                  </div>
                </div>
                <div className="card float-b absolute top-[34px] right-[-26px] py-[12px] px-[15px] shadow-lg">
                  <div className="text-[11.5px] text-muted">{t("home.mock.directBookings")}</div>
                  <div className="flex items-baseline gap-[6px]">
                    <span className="stat-num text-[26px] text-brand-700">+38%</span>
                    <span className="text-[11px] text-[#2f8f5b] font-bold">{t("home.mock.growth")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============== TRUST BAR ============== */}
        <section className="border-y border-solid border-line bg-white">
          <div className="container py-[34px]">
            <div className="grid items-center gap-8 trust-row grid-cols-[auto_1fr]">
              <div className="text-[13.5px] text-muted max-w-[170px] leading-[1.6]">{t("home.trust.label")}</div>
              <div className="trust-logos flex flex-wrap items-center gap-x-[30px] gap-y-[14px] justify-end">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Placeholder key={i} label={t("home.trust.logo")} className="h-[32px] w-[118px] rounded-[8px]" labelStyle={{ fontSize: "9.5px" }} />
                ))}
              </div>
            </div>
            <div className="grid gap-6 stat-row grid-cols-4 mt-[30px]">
              {(t("home.trust.stats", { returnObjects: true }) as { num: string; label: string }[]).map((s) => (
                <div key={s.label} className="stat-cell">
                  <div className="stat-num text-brand-700" style={{ fontSize: "clamp(30px,3.4vw,42px)" }}>{s.num}</div>
                  <div className="text-[14px] text-muted mt-[4px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ============== FEATURES ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal max-w-[680px] mb-[48px]">
              <Eyebrow>{t("home.features.eyebrow")}</Eyebrow>
              <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.features.title")}</h2>
              <p className="lead mt-[16px]">{t("home.features.lead")}</p>
            </div>
            <div className="grid gap-5 feat-grid grid-cols-4">
              {(t("home.features.items", { returnObjects: true }) as { title: string; body: string }[]).map((item, i) => (
                <article key={item.title} className="card card-hover reveal p-[26px]">
                  <IconTile variant={FEATURE_ICONS[i].variant} path={FEATURE_ICONS[i].path} />
                  <h3 className="text-[18.5px] mt-[18px]">{item.title}</h3>
                  <p className="text-muted text-[14.5px] mt-[9px] leading-[1.7]">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="reveal mt-[30px]">
              <Button asChild variant="ghost"><LocalizedLink href={ROUTES.FEATURES}>{t("home.features.exploreAll")} {ArrowIcon}</LocalizedLink></Button>
            </div>
          </div>
        </section>
        {/* ============== HOW IT WORKS ============== */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal text-center max-w-[640px] mx-auto mb-[52px]">
              <Eyebrow center>{t("home.how.eyebrow")}</Eyebrow>
              <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.how.title")}</h2>
            </div>
            <div className="grid gap-6 how-grid grid-cols-3">
              {(t("home.how.steps", { returnObjects: true }) as { n: string; title: string; body: string }[]).map((step) => (
                <div key={step.n} className="reveal">
                  <div className="stat-num text-[52px] text-brand-300">{step.n}</div>
                  <h3 className="text-[21px] mt-[8px]">{step.title}</h3>
                  <p className="text-muted text-[15px] mt-[10px] leading-[1.75]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ============== GALLERY ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-[44px]">
              <div className="max-w-[560px]">
                <Eyebrow>{t("home.gallery.eyebrow")}</Eyebrow>
                <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.gallery.title")}</h2>
                <p className="lead mt-[14px]">{t("home.gallery.lead")}</p>
              </div>
              <Button asChild variant="outline"><LocalizedLink href={ROUTES.SOLUTIONS}>{t("cta.seeSolutions")}</LocalizedLink></Button>
            </div>
            <div className="grid gap-5 gallery-grid grid-cols-3">
              {(t("home.gallery.items", { returnObjects: true }) as { photo: string; name: string; tag: string }[]).map((item, i) => (
                <figure key={item.name} className="card card-hover reveal overflow-hidden rounded">
                  <Placeholder label={item.photo} className="h-[230px]" />
                  <figcaption className="py-[16px] px-[18px] flex items-center justify-between">
                    <span className="font-bold text-[15px]">{item.name}</span>
                    <Chip variant={GALLERY_VARIANTS[i]}>{item.tag}</Chip>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        {/* ============== DASHBOARD PREVIEW ============== */}
        <section className="section bg-ink">
          <div className="container">
            <div className="grid items-center gap-12 dash-grid grid-cols-[1fr_1.15fr]">
              <div className="reveal">
                <Eyebrow className="text-brand-300">{t("home.dash.eyebrow")}</Eyebrow>
                <h2 className="display mt-[16px] text-white" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.dash.title")}</h2>
                <p className="mt-[16px] text-[#a8c0ba] text-[17px] leading-[1.8] max-w-[480px]">{t("home.dash.lead")}</p>
                <ul className="list-none p-0 mt-[26px] flex flex-col gap-[14px]">
                  {(t("home.dash.bullets", { returnObjects: true }) as string[]).map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[#dcebe7] text-[15.5px]"><IconTile variant="sand" path="M20 6L9 17l-5-5" strokeWidth={2.4} className="w-[30px] h-[30px] rounded-[9px]" svgStyle={{ width: "16px", height: "16px" }} />{b}</li>
                  ))}
                </ul>
                <Button asChild variant="soft" className="mt-[28px]"><LocalizedLink href={ROUTES.FEATURES}>{t("home.dash.explore")}</LocalizedLink></Button>
              </div>
              <div className="reveal">
                <div className="bg-white rounded-[18px] shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between py-[14px] px-[18px] border-b border-solid border-line">
                    <div className="flex items-center gap-[9px]">
                      <span className="w-[24px] h-[24px] rounded-[7px] bg-brand-600" />
                      <span className="font-extrabold text-[14px]">{t("home.dash.panelTitle")}</span>
                    </div>
                    <Chip variant="sand" className="text-[11px]">{t("home.dash.activeProps")}</Chip>
                  </div>
                  <div className="p-[18px]">
                    <div className="grid gap-3 grid-cols-3">
                      <div className="bg-paper border border-solid border-line rounded-[12px] p-[13px]">
                        <div className="text-[11px] text-muted">{t("home.dash.occupancy")}</div>
                        <div className="stat-num text-[26px] text-brand-700 mt-[4px]">82%</div>
                      </div>
                      <div className="bg-paper border border-solid border-line rounded-[12px] p-[13px]">
                        <div className="text-[11px] text-muted">{t("home.dash.todayRevenue")}</div>
                        <div className="stat-num text-[26px] text-ink mt-[4px]">$9.4k</div>
                      </div>
                      <div className="bg-paper border border-solid border-line rounded-[12px] p-[13px]">
                        <div className="text-[11px] text-muted">{t("home.dash.upcoming")}</div>
                        <div className="stat-num text-[26px] text-ink mt-[4px]">27</div>
                      </div>
                    </div>
                    <div className="bg-paper border border-solid border-line rounded-[12px] p-[16px] mt-[12px]">
                      <div className="flex items-center justify-between mb-[14px]">
                        <span className="text-[13px] font-bold">{t("home.dash.revenue7d")}</span>
                        <span className="text-[11px] text-[#2f8f5b] font-bold">▲ 12%</span>
                      </div>
                      <div className="flex items-end gap-[9px] h-[90px]">
                        <div className="flex-1 h-[42%] bg-brand-100 rounded-t-[6px]" />
                        <div className="flex-1 h-[58%] bg-brand-100 rounded-t-[6px]" />
                        <div className="flex-1 h-[50%] bg-brand-100 rounded-t-[6px]" />
                        <div className="flex-1 h-[74%] bg-brand-300 rounded-t-[6px]" />
                        <div className="flex-1 h-[66%] bg-brand-100 rounded-t-[6px]" />
                        <div className="flex-1 h-[88%] bg-brand-600 rounded-t-[6px]" />
                        <div className="flex-1 h-[100%] bg-sand rounded-t-[6px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============== TESTIMONIALS ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal text-center max-w-[600px] mx-auto mb-[50px]">
              <Eyebrow center>{t("home.testimonials.eyebrow")}</Eyebrow>
              <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.testimonials.title")}</h2>
            </div>
            <div className="grid gap-5 testi-grid grid-cols-3">
              {(t("home.testimonials.items", { returnObjects: true }) as { quote: string; name: string; role: string }[]).map((item) => (
                <figure key={item.name} className="card reveal p-[28px] flex flex-col gap-[18px]">
                  <div className="text-sand text-[18px] tracking-[2px]">★★★★★</div>
                  <blockquote className="text-[16px] leading-[1.8] text-ink-700">{item.quote}</blockquote>
                  <figcaption className="flex items-center gap-3 mt-auto">
                    <Placeholder label={t("common.photo")} className="w-[46px] h-[46px] rounded-full" labelStyle={{ fontSize: "9px" }} />
                    <span>
                      <span className="block font-bold text-[14.5px]">{item.name}</span>
                      <span className="text-[13px] text-muted">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        {/* ============== PRICING SUMMARY ============== */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal text-center max-w-[600px] mx-auto mb-[48px]">
              <Eyebrow center>{t("home.pricing.eyebrow")}</Eyebrow>
              <h2 className="display mt-[16px]" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>{t("home.pricing.title")}</h2>
              <p className="lead mt-[14px]">{t("home.pricing.lead")}</p>
            </div>
            <div className="grid gap-5 price-grid grid-cols-3 items-stretch">
              <div className="card reveal p-[30px] flex flex-col">
                <h3 className="text-[18px]">{t("home.pricing.basic.name")}</h3>
                <p className="text-muted text-[13.5px] mt-[6px]">{t("home.pricing.basic.desc")}</p>
                <div className="mt-[18px] mb-[4px]">
                  <span className="stat-num text-[40px] text-ink">{t("home.pricing.basic.price")}</span>
                  <span className="text-[13px] text-muted">{t("home.pricing.basic.per")}</span>
                </div>
                <hr className="hairline my-[18px]" />
                <ul className="list-none p-0 m-0 flex flex-col gap-[11px] text-[14px] text-ink-700">
                  {(t("home.pricing.basic.features", { returnObjects: true }) as string[]).map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button asChild variant="outline" className="mt-[24px]"><LocalizedLink href={ROUTES.PRICING}>{t("home.pricing.basic.cta")}</LocalizedLink></Button>
              </div>
              <div className="card reveal p-[30px] flex flex-col border-[1.5px] border-solid border-brand-600 shadow-lg relative">
                <Chip className="absolute top-[-13px] left-[30px] bg-brand-600 text-white border-brand-600">{t("home.pricing.pro.badge")}</Chip>
                <h3 className="text-[18px] text-brand-700">{t("home.pricing.pro.name")}</h3>
                <p className="text-muted text-[13.5px] mt-[6px]">{t("home.pricing.pro.desc")}</p>
                <div className="mt-[18px] mb-[4px]">
                  <span className="stat-num text-[40px] text-brand-700">{t("home.pricing.pro.price")}</span>
                  <span className="text-[13px] text-muted">{t("home.pricing.pro.per")}</span>
                </div>
                <hr className="hairline my-[18px]" />
                <ul className="list-none p-0 m-0 flex flex-col gap-[11px] text-[14px] text-ink-700">
                  {(t("home.pricing.pro.features", { returnObjects: true }) as string[]).map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button asChild className="mt-[24px]"><LocalizedLink href={ROUTES.PRICING}>{t("home.pricing.pro.cta")}</LocalizedLink></Button>
              </div>
              <div className="card reveal p-[30px] flex flex-col">
                <h3 className="text-[18px]">{t("home.pricing.enterprise.name")}</h3>
                <p className="text-muted text-[13.5px] mt-[6px]">{t("home.pricing.enterprise.desc")}</p>
                <div className="mt-[18px] mb-[4px]">
                  <span className="stat-num text-[34px] text-ink">{t("home.pricing.enterprise.price")}</span>
                </div>
                <hr className="hairline my-[18px]" />
                <ul className="list-none p-0 m-0 flex flex-col gap-[11px] text-[14px] text-ink-700">
                  {(t("home.pricing.enterprise.features", { returnObjects: true }) as string[]).map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button asChild variant="dark" className="mt-[24px]"><LocalizedLink href={ROUTES.CONTACT}>{t("home.pricing.enterprise.cta")}</LocalizedLink></Button>
              </div>
            </div>
            <div className="reveal text-center mt-[28px]">
              <Button asChild variant="ghost"><LocalizedLink href={ROUTES.PRICING}>{t("home.pricing.compareAll")} {ArrowIcon}</LocalizedLink></Button>
            </div>
          </div>
        </section>
        {/* ============== FINAL CTA ============== */}
        <CtaSection
          eyebrow={t("home.finalCta.eyebrow")}
          title={t("home.finalCta.title")}
          lead={t("home.finalCta.lead")}
          padding="clamp(40px,6vw,72px)"
          titleFontSize="clamp(28px,4vw,48px)"
          titleMaxWidth="680px"
        >
          <Button asChild variant="plain" size="lg" className="bg-white text-brand-700 border-white"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.startFree")}</LocalizedLink></Button>
          <Button asChild variant="onDark" size="lg"><LocalizedLink href={ROUTES.CONTACT}>{t("cta.requestDemo")}</LocalizedLink></Button>
        </CtaSection>
      </main>
  );
}
