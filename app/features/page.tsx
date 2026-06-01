import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Suvio features: online reservation engine, brandable website builder, multi-property management, analytics, room & pricing management, and payment & channel integrations.",
};

export default function FeaturesPage() {
  return (
      <main>
        {/* PAGE HERO */}
        <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
          <div className="container" style={{ paddingBlock: "clamp(48px,6vw,80px)", textAlign: "center" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>Features</span>
            <h1 className="display" style={{ fontSize: "clamp(32px,4.6vw,54px)", marginTop: "16px", maxWidth: "760px", marginInline: "auto" }}>Everything a modern hotel needs, in one platform</h1>
            <p className="lead" style={{ marginTop: "18px", maxWidth: "600px", marginInline: "auto" }}>Replace your patchwork of tools with a single connected system — booking, branding, operations, and insight.</p>
            <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "28px" }}>
              <Link className="btn btn-primary btn-lg" href="/contact">Start Free</Link>
              <Link className="btn btn-outline btn-lg" href="/contact">Request a Demo</Link>
            </div>
          </div>
        </section>
        {/* FEATURE GRID */}
        <section className="section">
          <div className="container">
            <div className="grid gap-5 feat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Online reservation engine</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Real-time availability, instant confirmation, and secure checkout. Calendar sync prevents double-bookings across every channel.</p>
                <ul className="feat-list">
                  <li>Live availability & instant confirmation</li>
                  <li>Promo codes & length-of-stay rules</li>
                  <li>Mobile-first guest checkout</li>
                </ul>
              </article>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile itile-sand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7a4 4 0 0 0-6-5l-1 1-1-1a4 4 0 0 0-6 5z" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Brandable website builder</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Launch a polished booking site on your own domain — your colors, your logo, your photography. No code required.</p>
                <ul className="feat-list">
                  <li>Custom domain & SSL included</li>
                  <li>Luxury templates & theme controls</li>
                  <li>SEO-ready, fast-loading pages</li>
                </ul>
              </article>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Multi-property management</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Operate every hotel, lodge, and resort from one account. Switch properties in a click; share teams and settings.</p>
                <ul className="feat-list">
                  <li>One login for all properties</li>
                  <li>Per-property branding & settings</li>
                  <li>Roles & granular permissions</li>
                </ul>
              </article>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile itile-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Analytics & reports</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Understand occupancy, ADR, RevPAR, and channel mix at a glance. Export financial reports in a click.</p>
                <ul className="feat-list">
                  <li>Occupancy, ADR & RevPAR dashboards</li>
                  <li>Channel & source attribution</li>
                  <li>Scheduled financial exports</li>
                </ul>
              </article>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h18M3 12h18M3 17h18M7 3v18" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Room & pricing management</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Define room types, rate plans, and inventory. Let dynamic pricing adjust rates to demand and seasonality.</p>
                <ul className="feat-list">
                  <li>Room types & rate plans</li>
                  <li>Dynamic, demand-based pricing</li>
                  <li>Seasonal calendars & restrictions</li>
                </ul>
              </article>
              <article className="card card-hover reveal" style={{ padding: "30px" }}>
                <span className="itile itile-sand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h20v10H2zM2 11h20M6 15h4" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "20px", marginTop: "18px" }}>Payments & integrations</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Connect leading payment gateways and sales channels so every booking and payout flows into one place.</p>
                <ul className="feat-list">
                  <li>Stripe, PayPal & local gateways</li>
                  <li>OTA & channel-manager sync</li>
                  <li>Automated payouts & reconciliation</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* DEEP DIVE */}
        <section className="section bg-cream">
          <div className="container">
            <div className="grid items-center gap-12 dash-grid" style={{ gridTemplateColumns: "1.05fr 1fr" }}>
              <div className="reveal">
                <span className="eyebrow">Built for direct bookings</span>
                <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,42px)", marginTop: "16px" }}>Keep more of every reservation</h2>
                <p className="lead" style={{ marginTop: "16px", maxWidth: "480px" }}>Every booking through your Suvio site is commission-free. Convert lookers into guests with a fast, trustworthy checkout that works on any device.</p>
                <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "28px" }}>
                  <div>
                    <div className="stat-num" style={{ fontSize: "36px", color: "var(--brand-700)" }}>0%</div>
                    <div className="text-muted" style={{ fontSize: "14px", marginTop: "4px" }}>OTA commission on direct bookings</div>
                  </div>
                  <div>
                    <div className="stat-num" style={{ fontSize: "36px", color: "var(--brand-700)" }}>&lt;2s</div>
                    <div className="text-muted" style={{ fontSize: "14px", marginTop: "4px" }}>Median page load on guest sites</div>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <div className="ph" style={{ height: "340px", borderRadius: "var(--radius-lg)" }}>
                  <span>// guest checkout screen</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "linear-gradient(120deg,var(--brand-800),var(--brand-600))", padding: "clamp(40px,6vw,68px)", textAlign: "center", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ position: "absolute", inset: "0", backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.6vw,42px)", color: "#fff", maxWidth: "620px", marginInline: "auto" }}>See every feature in action</h2>
                <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "26px" }}>
                  <Link className="btn btn-lg" href="/contact" style={{ background: "#fff", color: "var(--brand-700)", borderColor: "#fff" }}>Start Free</Link>
                  <Link className="btn btn-on-dark btn-outline btn-lg" href="/contact">Request a Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
