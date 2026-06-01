import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Suvio story, mission, and values — and the team building one platform for independent hotels, chains, lodges, and resorts.",
};

export default function AboutPage() {
  return (
      <main>
        {/* HERO */}
        <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
          <div className="container" style={{ paddingBlock: "clamp(48px,6vw,84px)" }}>
            <div className="grid items-center gap-12 about-hero" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
              <div>
                <span className="eyebrow">Our story</span>
                <h1 className="display" style={{ fontSize: "clamp(32px,4.4vw,52px)", marginTop: "16px" }}>We believe every hotel deserves its own front door</h1>
                <p className="lead" style={{ marginTop: "18px", maxWidth: "520px" }}>Suvio began when a group of hoteliers and engineers grew tired of handing the guest relationship — and a slice of every booking — to faceless marketplaces.</p>
              </div>
              <div>
                <div className="ph" style={{ height: "320px", borderRadius: "var(--radius-lg)" }}>
                  <span>// team / office photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* STORY */}
        <section className="section">
          <div className="container" style={{ maxWidth: "780px" }}>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <p style={{ fontSize: "19px", lineHeight: "1.8", color: "var(--ink-700)" }}>In 2021 we ran a small boutique hotel. Guests loved the stay — but most of them arrived through online travel agencies that owned the relationship and took up to 20% of every reservation.</p>
              <p style={{ fontSize: "17px", lineHeight: "1.85", color: "var(--muted)" }}>We wanted a way to give every property a beautiful website of its own, the tools to run it, and the freedom to grow direct bookings — without rebuilding the same infrastructure for each one. So we built a multi-tenant platform: one shared, reliable backbone serving every hotel its own branded storefront and dashboard. Today, Suvio powers hundreds of properties across boutique hotels, growing chains, eco-lodges, and resorts.</p>
            </div>
            <div className="grid gap-6 stat-row reveal" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: "48px", textAlign: "center" }}>
              <div>
                <div className="stat-num" style={{ fontSize: "clamp(28px,3.2vw,40px)", color: "var(--brand-700)" }}>2021</div>
                <div className="text-muted" style={{ fontSize: "13.5px", marginTop: "4px" }}>Founded</div>
              </div>
              <div>
                <div className="stat-num" style={{ fontSize: "clamp(28px,3.2vw,40px)", color: "var(--brand-700)" }}>240+</div>
                <div className="text-muted" style={{ fontSize: "13.5px", marginTop: "4px" }}>Properties</div>
              </div>
              <div>
                <div className="stat-num" style={{ fontSize: "clamp(28px,3.2vw,40px)", color: "var(--brand-700)" }}>18</div>
                <div className="text-muted" style={{ fontSize: "13.5px", marginTop: "4px" }}>Countries</div>
              </div>
              <div>
                <div className="stat-num" style={{ fontSize: "clamp(28px,3.2vw,40px)", color: "var(--brand-700)" }}>52</div>
                <div className="text-muted" style={{ fontSize: "13.5px", marginTop: "4px" }}>Team members</div>
              </div>
            </div>
          </div>
        </section>
        {/* MISSION */}
        <section className="section bg-ink" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <span className="eyebrow center" style={{ justifyContent: "center", color: "var(--brand-300)" }}>Our mission</span>
            <p className="display" style={{ fontSize: "clamp(24px,3vw,38px)", color: "#fff", marginTop: "20px", lineHeight: "1.3", letterSpacing: "-.02em" }}>To put independent hospitality back in control of its guests, its brand, and its revenue.</p>
          </div>
        </section>
        {/* VALUES */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ maxWidth: "560px", marginBottom: "44px" }}>
              <span className="eyebrow">What we value</span>
              <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "14px" }}>Principles we build on</h2>
            </div>
            <div className="grid gap-5 val-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <div className="card reveal" style={{ padding: "28px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h4l3 8 4-16 3 8h4" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18px", marginTop: "16px" }}>Hospitality first</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "8px", lineHeight: "1.7" }}>Every decision starts with the guest experience and the host who creates it.</p>
              </div>
              <div className="card reveal" style={{ padding: "28px" }}>
                <span className="itile itile-sand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18px", marginTop: "16px" }}>Earn trust daily</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "8px", lineHeight: "1.7" }}>Reliable uptime, fair pricing, and data you own — trust is the product.</p>
              </div>
              <div className="card reveal" style={{ padding: "28px" }}>
                <span className="itile itile-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18px", marginTop: "16px" }}>Keep it simple</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "8px", lineHeight: "1.7" }}>Powerful underneath, effortless on top. Anyone on your team can use it.</p>
              </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 44px" }}>
              <span className="eyebrow center" style={{ justifyContent: "center" }}>The team</span>
              <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "14px" }}>People behind the platform</h2>
            </div>
            <div className="grid gap-5 team-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              <figure className="card reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "190px" }}>
                  <span>// portrait</span>
                </div>
                <figcaption style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: "700", fontSize: "15.5px" }}>Lina Haddad</div>
                  <div className="text-muted" style={{ fontSize: "13px", marginTop: "2px" }}>Co-founder & CEO</div>
                </figcaption>
              </figure>
              <figure className="card reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "190px" }}>
                  <span>// portrait</span>
                </div>
                <figcaption style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: "700", fontSize: "15.5px" }}>Marcus Reed</div>
                  <div className="text-muted" style={{ fontSize: "13px", marginTop: "2px" }}>Co-founder & CTO</div>
                </figcaption>
              </figure>
              <figure className="card reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "190px" }}>
                  <span>// portrait</span>
                </div>
                <figcaption style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: "700", fontSize: "15.5px" }}>Priya Nair</div>
                  <div className="text-muted" style={{ fontSize: "13px", marginTop: "2px" }}>Head of Product</div>
                </figcaption>
              </figure>
              <figure className="card reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "190px" }}>
                  <span>// portrait</span>
                </div>
                <figcaption style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: "700", fontSize: "15.5px" }}>Tom Okafor</div>
                  <div className="text-muted" style={{ fontSize: "13px", marginTop: "2px" }}>Head of Customer Success</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "linear-gradient(120deg,var(--brand-800),var(--brand-600))", padding: "clamp(40px,6vw,64px)", textAlign: "center", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ position: "absolute", inset: "0", backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <h2 className="display" style={{ fontSize: "clamp(26px,3.6vw,40px)", color: "#fff", maxWidth: "560px", marginInline: "auto" }}>Come build the future of hospitality</h2>
                <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "24px" }}>
                  <Link className="btn btn-lg" href="/contact" style={{ background: "#fff", color: "var(--brand-700)", borderColor: "#fff" }}>Get in touch</Link>
                  <a className="btn btn-on-dark btn-outline btn-lg" href="#">See open roles</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
