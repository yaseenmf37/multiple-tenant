import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Suvio blog: practical guides on increasing direct bookings, hotel management, and hospitality marketing.",
};

export default function BlogPage() {
  return (
      <main>
        {/* HERO */}
        <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
          <div className="container" style={{ paddingBlock: "clamp(44px,5vw,72px)", textAlign: "center" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>The Suvio blog</span>
            <h1 className="display" style={{ fontSize: "clamp(32px,4.4vw,52px)", marginTop: "16px", maxWidth: "700px", marginInline: "auto" }}>Ideas for filling more rooms, directly</h1>
            <p className="lead" style={{ marginTop: "16px", maxWidth: "560px", marginInline: "auto" }}>Practical guides on direct bookings, hotel operations, and hospitality marketing.</p>
            <div className="flex flex-wrap items-center justify-center gap-2" style={{ marginTop: "24px" }}>
              <span className="chip">All</span>
              <span className="chip chip-ink">Direct bookings</span>
              <span className="chip chip-ink">Hotel management</span>
              <span className="chip chip-ink">Marketing</span>
            </div>
          </div>
        </section>
        {/* FEATURED */}
        <section className="section" style={{ paddingBottom: "clamp(28px,3vw,40px)" }}>
          <div className="container">
            <Link className="card card-hover reveal feat-post" href="/blog/article" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
              <div className="ph" style={{ minHeight: "300px" }}>
                <span>// featured article cover</span>
              </div>
              <div style={{ padding: "clamp(26px,3vw,44px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="flex items-center gap-3" style={{ marginBottom: "14px" }}>
                  <span className="chip">Direct bookings</span>
                  <span className="text-muted" style={{ fontSize: "13px" }}>8 min read</span>
                </div>
                <h2 className="display" style={{ fontSize: "clamp(24px,2.8vw,34px)", lineHeight: "1.15" }}>7 ways to grow direct bookings and cut OTA commissions</h2>
                <p className="text-muted" style={{ fontSize: "15.5px", marginTop: "14px", lineHeight: "1.7", maxWidth: "460px" }}>From a faster checkout to a smart loyalty offer — the highest-leverage changes that move guests from marketplaces to your own site.</p>
                <div className="flex items-center gap-3" style={{ marginTop: "22px" }}>
                  <span className="ph" style={{ width: "38px", height: "38px", borderRadius: "50%" }}>
                    <span style={{ fontSize: "8px" }}>photo</span>
                  </span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "13.5px" }}>Priya Nair</div>
                    <div className="text-muted" style={{ fontSize: "12.5px" }}>May 28, 2026</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        {/* GRID */}
        <section className="section" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="grid gap-5 blog-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip chip-sand">Marketing</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>5 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>The hotel website photos that actually convert</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>What to shoot, what to skip, and how to sequence images so visitors hit "book" sooner.</p>
                  <div className="post-meta">Apr 30, 2026 · Tom Okafor</div>
                </div>
              </Link>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip">Hotel management</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>6 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>A simple weekly revenue routine for small hotels</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>Thirty minutes every Monday to read the right numbers and adjust rates with confidence.</p>
                  <div className="post-meta">Apr 18, 2026 · Lina Haddad</div>
                </div>
              </Link>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip chip-sand">Marketing</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>7 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>Email that brings past guests back</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>Three campaigns every property should run — and the timing that makes them work.</p>
                  <div className="post-meta">Apr 06, 2026 · Priya Nair</div>
                </div>
              </Link>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip">Direct bookings</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>4 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>Why your booking flow is losing guests at checkout</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>The friction points that quietly cost you reservations — and how to remove them today.</p>
                  <div className="post-meta">Mar 22, 2026 · Marcus Reed</div>
                </div>
              </Link>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip">Hotel management</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>9 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>Running multiple properties without losing your weekends</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>Systems and habits that let a small team manage a growing portfolio calmly.</p>
                  <div className="post-meta">Mar 09, 2026 · Lina Haddad</div>
                </div>
              </Link>
              <Link className="card card-hover reveal post" href="/blog/article">
                <div className="ph" style={{ height: "200px" }}>
                  <span>// article cover</span>
                </div>
                <div style={{ padding: "22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <span className="chip chip-sand">Marketing</span>
                    <span className="text-muted" style={{ fontSize: "12.5px" }}>6 min</span>
                  </div>
                  <h3 style={{ fontSize: "18.5px", lineHeight: "1.3" }}>Local SEO for hotels: a starter playbook</h3>
                  <p className="text-muted" style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.65" }}>Get found by guests searching your area — without an agency or a big budget.</p>
                  <div className="post-meta">Feb 24, 2026 · Tom Okafor</div>
                </div>
              </Link>
            </div>
            <div className="reveal" style={{ textAlign: "center", marginTop: "44px" }}>
              <button className="btn btn-outline btn-lg" type="button">Load more articles</button>
            </div>
          </div>
        </section>
      </main>
  );
}
