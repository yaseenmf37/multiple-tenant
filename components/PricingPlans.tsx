"use client";

import Link from "next/link";
import { useState } from "react";

const PLANS = {
  basic: { m: 49, a: 39 },
  pro: { m: 129, a: 103 },
};

function billedText(annualPerMonth: number) {
  return `Billed annually · $${annualPerMonth * 12}/yr`;
}

export default function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  const basic = annual ? PLANS.basic.a : PLANS.basic.m;
  const pro = annual ? PLANS.pro.a : PLANS.pro.m;

  return (
    <>
      {/* PAGE HERO + TOGGLE */}
      <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingBlock: "clamp(48px,6vw,72px)", textAlign: "center" }}>
          <span className="eyebrow center" style={{ justifyContent: "center" }}>
            Pricing
          </span>
          <h1
            className="display"
            style={{ fontSize: "clamp(32px,4.6vw,54px)", marginTop: "16px", maxWidth: "720px", marginInline: "auto" }}
          >
            Simple pricing that grows with you
          </h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "560px", marginInline: "auto" }}>
            Start free for 14 days. No credit card, no hidden fees, cancel anytime.
          </p>
          <div className="billing-toggle" style={{ marginTop: "28px" }}>
            <button
              className={`bt-opt${annual ? "" : " active"}`}
              type="button"
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`bt-opt${annual ? " active" : ""}`}
              type="button"
              onClick={() => setAnnual(true)}
            >
              Annual <span className="save">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="section" style={{ paddingTop: "clamp(40px,5vw,64px)" }}>
        <div className="container">
          <div
            className="grid gap-5 plan-grid"
            style={{ gridTemplateColumns: "repeat(3,1fr)", alignItems: "stretch" }}
          >
            {/* Basic */}
            <div className="card reveal" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "19px" }}>Basic</h3>
              <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>
                For a single small property
              </p>
              <div style={{ margin: "20px 0 2px" }}>
                <span className="stat-num" style={{ fontSize: "46px", color: "var(--ink)" }}>${basic}</span>
                <span className="text-muted" style={{ fontSize: "13px" }}> / month</span>
              </div>
              <div className="text-muted" style={{ fontSize: "12.5px", minHeight: "18px" }}>
                {annual ? billedText(PLANS.basic.a) : ""}
              </div>
              <Link className="btn btn-outline" href="/contact" style={{ marginTop: "22px" }}>
                Start Free
              </Link>
              <hr className="hairline" style={{ margin: "24px 0" }} />
              <ul className="plan-list">
                <li>1 property · up to 15 rooms</li>
                <li>Branded booking website</li>
                <li>Core reservation engine</li>
                <li>1 payment gateway</li>
                <li>Email support</li>
              </ul>
            </div>

            {/* Pro */}
            <div
              className="card reveal pop"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                border: "1.5px solid var(--brand-600)",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
              }}
            >
              <span
                className="chip"
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "32px",
                  background: "var(--brand-600)",
                  color: "#fff",
                  borderColor: "var(--brand-600)",
                }}
              >
                Most popular
              </span>
              <h3 style={{ fontSize: "19px", color: "var(--brand-700)" }}>Pro</h3>
              <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>
                For growing hotels & small groups
              </p>
              <div style={{ margin: "20px 0 2px" }}>
                <span className="stat-num" style={{ fontSize: "46px", color: "var(--brand-700)" }}>${pro}</span>
                <span className="text-muted" style={{ fontSize: "13px" }}> / month</span>
              </div>
              <div className="text-muted" style={{ fontSize: "12.5px", minHeight: "18px" }}>
                {annual ? billedText(PLANS.pro.a) : ""}
              </div>
              <Link className="btn btn-primary" href="/contact" style={{ marginTop: "22px" }}>
                Start Free
              </Link>
              <hr className="hairline" style={{ margin: "24px 0" }} />
              <ul className="plan-list">
                <li>Up to 5 properties · unlimited rooms</li>
                <li>Everything in Basic, plus:</li>
                <li>Dynamic pricing & channel sync</li>
                <li>Advanced analytics & reports</li>
                <li>Multiple gateways & payouts</li>
                <li>Priority support</li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="card reveal" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "19px" }}>Enterprise</h3>
              <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>
                For chains & resorts
              </p>
              <div style={{ margin: "20px 0 2px" }}>
                <span className="stat-num" style={{ fontSize: "38px", color: "var(--ink)" }}>Custom</span>
              </div>
              <div className="text-muted" style={{ fontSize: "12.5px", minHeight: "18px" }}>
                Tailored to your portfolio
              </div>
              <Link className="btn btn-dark" href="/contact" style={{ marginTop: "22px" }}>
                Talk to sales
              </Link>
              <hr className="hairline" style={{ margin: "24px 0" }} />
              <ul className="plan-list">
                <li>Unlimited properties & rooms</li>
                <li>Everything in Pro, plus:</li>
                <li>Custom API integrations</li>
                <li>SSO & advanced security</li>
                <li>Dedicated success manager</li>
                <li>99.9% uptime SLA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
