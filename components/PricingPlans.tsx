"use client";

import { useState } from "react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { useLocalized } from "@/lib/i18n/context";
import { ROUTES } from "@/lib/routes";

const PRICE = {
  basic: { m: 49, a: 39 },
  pro: { m: 129, a: 103 },
};

export default function PricingPlans() {
  const { t } = useLocalized();
  const tp = t.pricing;
  const [annual, setAnnual] = useState(false);

  const basic = annual ? PRICE.basic.a : PRICE.basic.m;
  const pro = annual ? PRICE.pro.a : PRICE.pro.m;

  const billedText = (annualPerMonth: number) =>
    `${tp.plans.billedAnnually} · $${annualPerMonth * 12}${tp.plans.perYear}`;

  return (
    <>
      {/* PAGE HERO + TOGGLE */}
      <section className="bg-cream border-b border-solid border-line">
        <div className="container text-center" style={{ paddingBlock: "clamp(48px,6vw,72px)" }}>
          <span className="eyebrow center justify-center">
            {tp.hero.eyebrow}
          </span>
          <h1
            className="display mt-[16px] max-w-[720px] mx-auto"
            style={{ fontSize: "clamp(32px,4.6vw,54px)" }}
          >
            {tp.hero.title}
          </h1>
          <p className="lead mt-[16px] max-w-[560px] mx-auto">
            {tp.hero.lead}
          </p>
          <div className="billing-toggle mt-[28px]">
            <button
              className={`bt-opt${annual ? "" : " active"}`}
              type="button"
              onClick={() => setAnnual(false)}
            >
              {tp.hero.monthly}
            </button>
            <button
              className={`bt-opt${annual ? " active" : ""}`}
              type="button"
              onClick={() => setAnnual(true)}
            >
              {tp.hero.annual} <span className="save">{tp.hero.save}</span>
            </button>
          </div>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="section" style={{ paddingTop: "clamp(40px,5vw,64px)" }}>
        <div className="container">
          <div
            className="grid gap-5 plan-grid grid-cols-3 items-stretch"
          >
            {/* Basic */}
            <div className="card reveal p-[32px] flex flex-col">
              <h3 className="text-[19px]">{tp.plans.basic.name}</h3>
              <p className="text-muted text-[13.5px] mt-[6px]">
                {tp.plans.basic.desc}
              </p>
              <div className="mt-[20px] mb-[2px]">
                <span className="stat-num text-[46px] text-ink">${basic}</span>
                <span className="text-muted text-[13px]">{tp.plans.perMonth}</span>
              </div>
              <div className="text-muted text-[12.5px] min-h-[18px]">
                {annual ? billedText(PRICE.basic.a) : ""}
              </div>
              <Button asChild variant="outline" className="mt-[22px]">
                <LocalizedLink href={ROUTES.CONTACT}>{tp.plans.basic.cta}</LocalizedLink>
              </Button>
              <hr className="hairline my-[24px]" />
              <ul className="plan-list">
                {tp.plans.basic.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div
              className="card reveal pop p-[32px] flex flex-col border-[1.5px] border-solid border-brand-600 shadow-lg relative"
            >
              <span
                className="chip absolute top-[-13px] left-[32px] bg-brand-600 text-white border-brand-600"
              >
                {tp.plans.pro.badge}
              </span>
              <h3 className="text-[19px] text-brand-700">{tp.plans.pro.name}</h3>
              <p className="text-muted text-[13.5px] mt-[6px]">
                {tp.plans.pro.desc}
              </p>
              <div className="mt-[20px] mb-[2px]">
                <span className="stat-num text-[46px] text-brand-700">${pro}</span>
                <span className="text-muted text-[13px]">{tp.plans.perMonth}</span>
              </div>
              <div className="text-muted text-[12.5px] min-h-[18px]">
                {annual ? billedText(PRICE.pro.a) : ""}
              </div>
              <Button asChild className="mt-[22px]">
                <LocalizedLink href={ROUTES.CONTACT}>{tp.plans.pro.cta}</LocalizedLink>
              </Button>
              <hr className="hairline my-[24px]" />
              <ul className="plan-list">
                {tp.plans.pro.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="card reveal p-[32px] flex flex-col">
              <h3 className="text-[19px]">{tp.plans.enterprise.name}</h3>
              <p className="text-muted text-[13.5px] mt-[6px]">
                {tp.plans.enterprise.desc}
              </p>
              <div className="mt-[20px] mb-[2px]">
                <span className="stat-num text-[38px] text-ink">{tp.plans.enterprise.price}</span>
              </div>
              <div className="text-muted text-[12.5px] min-h-[18px]">
                {tp.plans.enterprise.tailored}
              </div>
              <Button asChild variant="dark" className="mt-[22px]">
                <LocalizedLink href={ROUTES.CONTACT}>{tp.plans.enterprise.cta}</LocalizedLink>
              </Button>
              <hr className="hairline my-[24px]" />
              <ul className="plan-list">
                {tp.plans.enterprise.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
