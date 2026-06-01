import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Suvio for boutique hotels, hotel chains, guesthouses & eco-lodges, and resorts — tailored benefits for every kind of hospitality business.",
};

export default function SolutionsPage() {
  return (
      <main>
        {/* PAGE HERO */}
        <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
          <div className="container" style={{ paddingBlock: "clamp(48px,6vw,80px)", textAlign: "center" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>Solutions</span>
            <h1 className="display" style={{ fontSize: "clamp(32px,4.6vw,54px)", marginTop: "16px", maxWidth: "760px", marginInline: "auto" }}>Built for every kind of property</h1>
            <p className="lead" style={{ marginTop: "18px", maxWidth: "600px", marginInline: "auto" }}>One platform, tailored to how you host — whether you run a single boutique or a portfolio of resorts.</p>
            <div className="flex flex-wrap items-center justify-center gap-2" style={{ marginTop: "26px" }}>
              <a className="chip" href="#boutique">Boutique hotels</a>
              <a className="chip chip-ink" href="#chain">Hotel chains</a>
              <a className="chip chip-ink" href="#lodge">Guesthouses & eco-lodges</a>
              <a className="chip chip-sand" href="#resort">Resorts</a>
            </div>
          </div>
        </section>
        {/* BOUTIQUE */}
        <section className="section" id="boutique">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid" style={{ gridTemplateColumns: "1fr 1.05fr" }}>
              <div className="reveal">
                <span className="chip chip-ink">Boutique hotels</span>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "16px" }}>A site as distinctive as your hotel</h2>
                <p className="lead" style={{ marginTop: "14px", maxWidth: "480px" }}>Stand out with a design-forward booking site that captures your character — and convert direct guests who keep coming back.</p>
                <ul className="sol-list">
                  <li>Designer templates that feel custom-made</li>
                  <li>Direct bookings with no OTA commission</li>
                  <li>Guest profiles for personalized stays</li>
                  <li>Up-sells: late checkout, breakfast, transfers</li>
                </ul>
                <Link className="btn btn-primary" href="/contact" style={{ marginTop: "26px" }}>Start Free</Link>
              </div>
              <div className="reveal">
                <div className="ph" style={{ height: "360px", borderRadius: "var(--radius-lg)" }}>
                  <span>// boutique hotel storefront</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHAIN */}
        <section className="section bg-cream" id="chain">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev" style={{ gridTemplateColumns: "1.05fr 1fr" }}>
              <div className="reveal" style={{ order: "2" }}>
                <div className="ph" style={{ height: "360px", borderRadius: "var(--radius-lg)" }}>
                  <span>// multi-property dashboard</span>
                </div>
              </div>
              <div className="reveal" style={{ order: "1" }}>
                <span className="chip">Hotel chains</span>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "16px" }}>Every property, one command center</h2>
                <p className="lead" style={{ marginTop: "14px", maxWidth: "480px" }}>Standardize your brand across locations while giving each property the autonomy it needs — all reported in one place.</p>
                <ul className="sol-list">
                  <li>Centralized control with per-site branding</li>
                  <li>Consolidated revenue & occupancy reporting</li>
                  <li>Team roles across regions and properties</li>
                  <li>Group-wide promotions and rate strategy</li>
                </ul>
                <Link className="btn btn-primary" href="/contact" style={{ marginTop: "26px" }}>Talk to sales</Link>
              </div>
            </div>
          </div>
        </section>
        {/* ECO LODGE */}
        <section className="section" id="lodge">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid" style={{ gridTemplateColumns: "1fr 1.05fr" }}>
              <div className="reveal">
                <span className="chip chip-sand">Guesthouses & eco-lodges</span>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "16px" }}>Simple to run, lovely to book</h2>
                <p className="lead" style={{ marginTop: "14px", maxWidth: "480px" }}>Lightweight tools that fit a small team — get online fast, take secure payments, and tell your story beautifully.</p>
                <ul className="sol-list">
                  <li>Live in a day, no technical setup</li>
                  <li>Storytelling pages for place & experience</li>
                  <li>Flexible rates for seasonal demand</li>
                  <li>Affordable pricing that scales with you</li>
                </ul>
                <Link className="btn btn-primary" href="/contact" style={{ marginTop: "26px" }}>Start Free</Link>
              </div>
              <div className="reveal">
                <div className="ph" style={{ height: "360px", borderRadius: "var(--radius-lg)" }}>
                  <span>// eco-lodge landscape</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* RESORT */}
        <section className="section bg-cream" id="resort">
          <div className="container">
            <div className="grid items-center gap-12 sol-grid sol-rev" style={{ gridTemplateColumns: "1.05fr 1fr" }}>
              <div className="reveal" style={{ order: "2" }}>
                <div className="ph" style={{ height: "360px", borderRadius: "var(--radius-lg)" }}>
                  <span>// resort booking experience</span>
                </div>
              </div>
              <div className="reveal" style={{ order: "1" }}>
                <span className="chip chip-sand">Resorts</span>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "16px" }}>Sell the full resort experience</h2>
                <p className="lead" style={{ marginTop: "14px", maxWidth: "480px" }}>Go beyond rooms — bundle packages, amenities, and activities into a premium booking flow that lifts every stay.</p>
                <ul className="sol-list">
                  <li>Packages, add-ons & activity bookings</li>
                  <li>Multi-room and group reservations</li>
                  <li>Dynamic pricing for peak seasons</li>
                  <li>Dedicated support and onboarding</li>
                </ul>
                <Link className="btn btn-primary" href="/contact" style={{ marginTop: "26px" }}>Request a Demo</Link>
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
                <h2 className="display" style={{ fontSize: "clamp(26px,3.6vw,42px)", color: "#fff", maxWidth: "620px", marginInline: "auto" }}>Not sure which fits? Let's talk.</h2>
                <p style={{ color: "#d6f3ee", fontSize: "17px", marginTop: "14px", maxWidth: "520px", marginInline: "auto", lineHeight: "1.7" }}>Tell us about your property and we'll show you exactly how Suvio works for you.</p>
                <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "26px" }}>
                  <Link className="btn btn-lg" href="/contact" style={{ background: "#fff", color: "var(--brand-700)", borderColor: "#fff" }}>Request a Demo</Link>
                  <Link className="btn btn-on-dark btn-outline btn-lg" href="/pricing">See pricing</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
