import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 ways to grow direct bookings",
  description:
    "A practical guide to growing direct bookings and cutting OTA commissions for independent hotels.",
};

export default function BlogArticlePage() {
  return (
      <main>
        {/* ARTICLE HEADER */}
        <article>
          <header className="container" style={{ maxWidth: "760px", paddingTop: "clamp(36px,4vw,60px)", textAlign: "center" }}>
            <Link href="/blog" className="flex items-center gap-2" style={{ justifyContent: "center", color: "var(--brand-700)", fontSize: "14px", fontWeight: "600", marginBottom: "22px" }}> <svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> All articles </Link>
            <div className="flex items-center gap-3" style={{ justifyContent: "center", marginBottom: "18px" }}>
              <span className="chip">Direct bookings</span>
              <span className="text-muted" style={{ fontSize: "13px" }}>8 min read</span>
            </div>
            <h1 className="display" style={{ fontSize: "clamp(30px,4vw,50px)" }}>7 ways to grow direct bookings and cut OTA commissions</h1>
            <div className="flex items-center gap-3" style={{ justifyContent: "center", marginTop: "26px" }}>
              <span className="ph" style={{ width: "44px", height: "44px", borderRadius: "50%" }}>
                <span style={{ fontSize: "8px" }}>photo</span>
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: "700", fontSize: "14px" }}>Priya Nair</div>
                <div className="text-muted" style={{ fontSize: "12.5px" }}>Head of Product · May 28, 2026</div>
              </div>
            </div>
          </header>
          <div className="container" style={{ maxWidth: "960px", marginTop: "40px" }}>
            <div className="ph" style={{ height: "clamp(240px,34vw,440px)", borderRadius: "var(--radius-lg)" }}>
              <span>// article hero image</span>
            </div>
          </div>
          {/* BODY */}
          <div className="container prose" style={{ maxWidth: "720px" }}>
            <p className="lede">For most independent hotels, the single biggest lever on profit isn't rate or occupancy — it's the mix between direct bookings and the marketplaces that charge up to 20% commission. Shifting even a few points toward direct can fund a whole season's improvements.</p>
            <p>Below are seven changes we see move the needle fastest. None of them require a big budget; all of them compound.</p>
            <h2>1. Make your own site the obvious place to book</h2>
            <p>Guests will book where it's easiest and feels safest. If your website is slow, hard to navigate on a phone, or asks for too much information, they'll bounce back to the marketplace they trust. A fast, focused booking flow on your own domain is the foundation everything else builds on.</p>
            <blockquote>The best rate guarantee only works if the booking experience is at least as good as the OTA's. Speed and clarity beat discounts.</blockquote>
            <h2>2. Match the price, then add something they can't get elsewhere</h2>
            <p>Rate parity matters, but you don't have to win on price alone. A free upgrade when available, early check-in, a welcome drink, or a small loyalty credit are perks marketplaces can't replicate — and they cost you far less than the commission you save.</p>
            <h2>3. Remove friction at checkout</h2>
            <p>Every extra field and every unexpected step loses a percentage of guests. Ask only for what you need, show the total price clearly, and let people pay with the methods they already use.</p>
            <ul>
              <li>Default to fewer form fields and autofill where possible</li>
              <li>Show taxes and fees up front, not on the final step</li>
              <li>Offer the payment options your guests actually prefer</li>
            </ul>
            <h2>4. Capture the email — then use it well</h2>
            <p>A guest's email address is the most valuable thing a direct booking gives you. With permission, a short sequence before arrival and a thoughtful note after departure turns a one-time stay into a returning guest who books you directly next time.</p>
            <h2>5. Show, don't tell</h2>
            <p>Photography sells rooms. Lead with your strongest images, keep them current, and make sure they load quickly. A handful of honest, beautiful photos converts better than a gallery of mediocre ones.</p>
            <h2>6. Win your own name in search</h2>
            <p>When someone searches your hotel by name, your site should be the first and most compelling result. Keep your listings accurate, your page titles clear, and your direct offer visible above the fold.</p>
            <h2>7. Measure what matters and adjust</h2>
            <p>You can't grow what you don't watch. Track your direct-to-OTA ratio every month, note what changed, and double down on what works. Small, consistent adjustments outperform occasional big bets.</p>
            <p>Put together, these moves routinely lift direct bookings by double digits within a season — money that stays with the property instead of leaving as commission.</p>
            <div className="callout">
              <div style={{ fontWeight: "700", fontSize: "16px", marginBottom: "6px" }}>Want this built in?</div>
              <p style={{ margin: "0 0 16px", color: "var(--muted)", fontSize: "15px", lineHeight: "1.65" }}>Suvio gives every property a fast, branded booking site and the tools to grow direct reservations — commission-free.</p>
              <Link className="btn btn-primary" href="/contact">Start Free</Link>
            </div>
          </div>
          {/* SHARE */}
          <div className="container" style={{ maxWidth: "720px", marginTop: "8px" }}>
            <hr className="hairline" style={{ margin: "36px 0 24px" }} />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="chip">Direct bookings</span>
                <span className="chip chip-ink">OTA strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted" style={{ fontSize: "13.5px" }}>Share</span>
                <a className="social" href="#" aria-label="Share on X" style={{ borderColor: "var(--line-2)", color: "var(--ink-700)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 1.6h3.5l-7.64 8.73L23.7 22.4h-7l-5.5-7.18-6.3 7.18H1.4l8.17-9.34L.96 1.6h7.18l4.96 6.56L18.9 1.6z" />
                  </svg>
                </a>
                <a className="social" href="#" aria-label="Share on LinkedIn" style={{ borderColor: "var(--line-2)", color: "var(--ink-700)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
        {/* RELATED */}
        <section className="section bg-cream" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <h2 className="display" style={{ fontSize: "clamp(22px,2.6vw,32px)", marginBottom: "32px" }}>Keep reading</h2>
            <div className="grid gap-5 rel-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <Link className="card card-hover" href="/blog/article">
                <div className="ph" style={{ height: "170px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <span className="chip chip-sand" style={{ marginBottom: "10px" }}>Marketing</span>
                  <h3 style={{ fontSize: "17px", lineHeight: "1.3", marginTop: "6px" }}>The hotel website photos that actually convert</h3>
                </div>
              </Link>
              <Link className="card card-hover" href="/blog/article">
                <div className="ph" style={{ height: "170px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <span className="chip" style={{ marginBottom: "10px" }}>Hotel management</span>
                  <h3 style={{ fontSize: "17px", lineHeight: "1.3", marginTop: "6px" }}>A simple weekly revenue routine for small hotels</h3>
                </div>
              </Link>
              <Link className="card card-hover" href="/blog/article">
                <div className="ph" style={{ height: "170px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <span className="chip" style={{ marginBottom: "10px" }}>Direct bookings</span>
                  <h3 style={{ fontSize: "17px", lineHeight: "1.3", marginTop: "6px" }}>Why your booking flow is losing guests at checkout</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
