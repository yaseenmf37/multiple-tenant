import Link from "next/link";

export default function HomePage() {
  return (
      <main>
        {/* ============== HERO ============== */}
        <section className="section" style={{ paddingBlock: "clamp(44px,6vw,84px)" }}>
          <div className="container">
            <div className="grid items-center gap-14 hero-grid" style={{ gridTemplateColumns: "1.04fr 1.06fr" }}>
              {/* copy */}
              <div>
                <span className="eyebrow">Multi-tenant hotel platform</span>
                <h1 className="display" style={{ marginTop: "20px" }}> One platform.<br /> <span style={{ color: "var(--brand-700)" }}>Every hotel its own site.</span> </h1>
                <p className="lead" style={{ marginTop: "22px", maxWidth: "520px" }}> Give each property a beautiful, branded booking website — run them all from a single dashboard on one shared, reliable infrastructure. Grow direct bookings, commission-free. </p>
                <div className="flex flex-wrap items-center gap-3" style={{ marginTop: "32px" }}>
                  <Link className="btn btn-primary btn-lg" href="/contact">Start Free</Link>
                  <Link className="btn btn-outline btn-lg" href="/contact"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none" /></svg> Request a Demo </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2" style={{ marginTop: "30px", color: "var(--muted)", fontSize: "14px" }}>
                  <span className="flex items-center gap-2"><svg style={{ width: "18px", height: "18px", color: "var(--brand-600)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>14-day free trial</span>
                  <span className="flex items-center gap-2"><svg style={{ width: "18px", height: "18px", color: "var(--brand-600)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>No credit card</span>
                  <span className="flex items-center gap-2"><svg style={{ width: "18px", height: "18px", color: "var(--brand-600)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Live in a day</span>
                </div>
              </div>
              {/* storefront mockup */}
              <div className="hero-mock" style={{ position: "relative" }}>
                <div className="card" style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  {/* browser chrome */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "var(--cream)", borderBottom: "1px solid var(--line-2)" }}>
                    <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#cdd6d2" }} />
                    <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#d8e0dc" }} />
                    <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#e2e8e5" }} />
                    <span style={{ marginLeft: "10px", flex: "1", background: "#fff", border: "1px solid var(--line-2)", borderRadius: "8px", padding: "5px 12px", fontSize: "11.5px", color: "var(--muted)", fontFamily: "'DM Mono',monospace" }}>thecedarhouse.suvio.site</span>
                  </div>
                  {/* storefront body */}
                  <div style={{ background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ fontWeight: "800", fontSize: "15px", letterSpacing: "-.02em" }}>The Cedar House</span>
                      <span style={{ display: "flex", gap: "14px", fontSize: "12px", color: "var(--muted)" }}>
                        <span>Rooms</span>
                        <span>Amenities</span>
                        <span>Contact</span>
                      </span>
                    </div>
                    <div className="ph" style={{ height: "150px" }}>
                      <span>// hotel lobby photo</span>
                    </div>
                    {/* booking widget */}
                    <div style={{ margin: "-26px 16px 0", position: "relative", background: "#fff", border: "1px solid var(--line-2)", borderRadius: "14px", boxShadow: "var(--shadow)", padding: "14px", display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "10px", alignItems: "end" }}>
                      <div>
                        <div style={{ fontSize: "10.5px", color: "var(--muted)", marginBottom: "4px" }}>Check-in</div>
                        <div style={{ fontSize: "12.5px", fontWeight: "700" }}>Jun 12</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "10.5px", color: "var(--muted)", marginBottom: "4px" }}>Check-out</div>
                        <div style={{ fontSize: "12.5px", fontWeight: "700" }}>Jun 15</div>
                      </div>
                      <div style={{ background: "var(--brand-600)", color: "#fff", borderRadius: "10px", padding: "9px 14px", fontSize: "12.5px", fontWeight: "700" }}>Search</div>
                    </div>
                    {/* room cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", padding: "16px" }}>
                      <div style={{ border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden" }}>
                        <div className="ph" style={{ height: "62px" }}>
                          <span style={{ fontSize: "10px" }}>// deluxe room</span>
                        </div>
                        <div style={{ padding: "9px 11px" }}>
                          <div style={{ fontSize: "12px", fontWeight: "700" }}>Deluxe King</div>
                          <div style={{ fontSize: "11px", color: "var(--brand-700)", fontWeight: "700", marginTop: "3px" }}>$180 / night</div>
                        </div>
                      </div>
                      <div style={{ border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden" }}>
                        <div className="ph" style={{ height: "62px" }}>
                          <span style={{ fontSize: "10px" }}>// suite</span>
                        </div>
                        <div style={{ padding: "9px 11px" }}>
                          <div style={{ fontSize: "12px", fontWeight: "700" }}>Garden Suite</div>
                          <div style={{ fontSize: "11px", color: "var(--brand-700)", fontWeight: "700", marginTop: "3px" }}>$290 / night</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* floating cards */}
                <div className="card float-a" style={{ position: "absolute", bottom: "-22px", left: "-22px", padding: "13px 16px", display: "flex", alignItems: "center", gap: "11px", boxShadow: "var(--shadow-lg)" }}>
                  <span className="itile itile-sand" style={{ width: "40px", height: "40px", borderRadius: "11px" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>New booking</div>
                    <div style={{ fontSize: "13.5px", fontWeight: "800" }}>3 nights · confirmed</div>
                  </div>
                </div>
                <div className="card float-b" style={{ position: "absolute", top: "34px", right: "-26px", padding: "12px 15px", boxShadow: "var(--shadow-lg)" }}>
                  <div style={{ fontSize: "11.5px", color: "var(--muted)" }}>Direct bookings this month</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span className="stat-num" style={{ fontSize: "26px", color: "var(--brand-700)" }}>+38%</span>
                    <span style={{ fontSize: "11px", color: "#2f8f5b", fontWeight: "700" }}>▲ growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============== TRUST BAR ============== */}
        <section style={{ borderBlock: "1px solid var(--line)", background: "#fff" }}>
          <div className="container" style={{ paddingBlock: "34px" }}>
            <div className="grid items-center gap-8 trust-row" style={{ gridTemplateColumns: "auto 1fr" }}>
              <div style={{ fontSize: "13.5px", color: "var(--muted)", maxWidth: "170px", lineHeight: "1.6" }}>Trusted by independent hotels & growing groups</div>
              <div className="trust-logos" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 30px", justifyContent: "flex-end" }}>
                <div className="ph" style={{ height: "32px", width: "118px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "9.5px" }}>// logo</span>
                </div>
                <div className="ph" style={{ height: "32px", width: "118px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "9.5px" }}>// logo</span>
                </div>
                <div className="ph" style={{ height: "32px", width: "118px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "9.5px" }}>// logo</span>
                </div>
                <div className="ph" style={{ height: "32px", width: "118px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "9.5px" }}>// logo</span>
                </div>
                <div className="ph" style={{ height: "32px", width: "118px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "9.5px" }}>// logo</span>
                </div>
              </div>
            </div>
            <div className="grid gap-6 stat-row" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: "30px" }}>
              <div className="stat-cell">
                <div className="stat-num" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--brand-700)" }}>240+</div>
                <div style={{ fontSize: "14px", color: "var(--muted)", marginTop: "4px" }}>Active properties</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--brand-700)" }}>1.8M</div>
                <div style={{ fontSize: "14px", color: "var(--muted)", marginTop: "4px" }}>Room-nights booked</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--brand-700)" }}>99.9%</div>
                <div style={{ fontSize: "14px", color: "var(--muted)", marginTop: "4px" }}>Platform uptime</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--brand-700)" }}>+38%</div>
                <div style={{ fontSize: "14px", color: "var(--muted)", marginTop: "4px" }}>Avg. direct-booking lift</div>
              </div>
            </div>
          </div>
        </section>
        {/* ============== FEATURES ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ maxWidth: "680px", marginBottom: "48px" }}>
              <span className="eyebrow">Why Suvio</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px" }}>Everything you need to run a modern hotel</h2>
              <p className="lead" style={{ marginTop: "16px" }}>From a branded booking site to financial reporting — one connected platform that replaces a stack of disconnected tools.</p>
            </div>
            <div className="grid gap-5 feat-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              <article className="card card-hover reveal" style={{ padding: "26px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18.5px", marginTop: "18px" }}>Online reservation engine</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "9px", lineHeight: "1.7" }}>Real-time availability, dynamic rates, and secure payment — direct bookings with zero double-booking.</p>
              </article>
              <article className="card card-hover reveal" style={{ padding: "26px" }}>
                <span className="itile itile-sand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7a4 4 0 0 0-6-5l-1 1-1-1a4 4 0 0 0-6 5z" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18.5px", marginTop: "18px" }}>Brandable website builder</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "9px", lineHeight: "1.7" }}>Your domain, your colors, your logo — a luxury booking site that goes live without writing a line of code.</p>
              </article>
              <article className="card card-hover reveal" style={{ padding: "26px" }}>
                <span className="itile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18.5px", marginTop: "18px" }}>Multiple properties, one account</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "9px", lineHeight: "1.7" }}>Run every hotel, lodge, and resort you operate from a single login with shared team access.</p>
              </article>
              <article className="card card-hover reveal" style={{ padding: "26px" }}>
                <span className="itile itile-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                  </svg>
                </span>
                <h3 style={{ fontSize: "18.5px", marginTop: "18px" }}>Analytics & reporting</h3>
                <p className="text-muted" style={{ fontSize: "14.5px", marginTop: "9px", lineHeight: "1.7" }}>Track occupancy, revenue, and channel performance in real time — and act on it with confidence.</p>
              </article>
            </div>
            <div className="reveal" style={{ marginTop: "30px" }}>
              <Link className="btn btn-ghost" href="/features">Explore all features <svg style={{ width: "17px", height: "17px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg> </Link>
            </div>
          </div>
        </section>
        {/* ============== HOW IT WORKS ============== */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 52px" }}>
              <span className="eyebrow center" style={{ justifyContent: "center" }}>In three steps</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px" }}>From sign-up to your first booking</h2>
            </div>
            <div className="grid gap-6 how-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <div className="reveal">
                <div className="stat-num" style={{ fontSize: "52px", color: "var(--brand-300)" }}>01</div>
                <h3 style={{ fontSize: "21px", marginTop: "8px" }}>Create your account</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Sign up in minutes, add your property and rooms, and pick a template that fits your brand.</p>
              </div>
              <div className="reveal">
                <div className="stat-num" style={{ fontSize: "52px", color: "var(--brand-300)" }}>02</div>
                <h3 style={{ fontSize: "21px", marginTop: "8px" }}>Brand your site</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Customize your domain, colors, and logo, then connect a payment gateway. Your booking site is ready.</p>
              </div>
              <div className="reveal">
                <div className="stat-num" style={{ fontSize: "52px", color: "var(--brand-300)" }}>03</div>
                <h3 style={{ fontSize: "21px", marginTop: "8px" }}>Take direct bookings</h3>
                <p className="text-muted" style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.75" }}>Share your link and manage every reservation from the dashboard — no middleman commissions.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============== GALLERY ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal flex items-end justify-between flex-wrap gap-4" style={{ marginBottom: "44px" }}>
              <div style={{ maxWidth: "560px" }}>
                <span className="eyebrow">Sample sites</span>
                <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px" }}>A website worthy of every property</h2>
                <p className="lead" style={{ marginTop: "14px" }}>Ready-made luxury templates that adapt to your brand — from an urban boutique to a beachfront resort.</p>
              </div>
              <Link className="btn btn-outline" href="/solutions">See solutions</Link>
            </div>
            <div className="grid gap-5 gallery-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <figure className="card card-hover reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "230px" }}>
                  <span>// urban boutique hotel</span>
                </div>
                <figcaption style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "15px" }}>The Cedar House</span>
                  <span className="chip chip-ink">Boutique</span>
                </figcaption>
              </figure>
              <figure className="card card-hover reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "230px" }}>
                  <span>// beachfront resort</span>
                </div>
                <figcaption style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "15px" }}>Azure Bay Resort</span>
                  <span className="chip chip-sand">Resort</span>
                </figcaption>
              </figure>
              <figure className="card card-hover reveal" style={{ overflow: "hidden", borderRadius: "var(--radius)" }}>
                <div className="ph" style={{ height: "230px" }}>
                  <span>// eco-lodge</span>
                </div>
                <figcaption style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "15px" }}>Willow Creek Lodge</span>
                  <span className="chip">Eco-lodge</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* ============== DASHBOARD PREVIEW ============== */}
        <section className="section bg-ink">
          <div className="container">
            <div className="grid items-center gap-12 dash-grid" style={{ gridTemplateColumns: "1fr 1.15fr" }}>
              <div className="reveal">
                <span className="eyebrow" style={{ color: "var(--brand-300)" }}>Admin dashboard</span>
                <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px", color: "#fff" }}>Every property, at a glance</h2>
                <p style={{ marginTop: "16px", color: "#a8c0ba", fontSize: "17px", lineHeight: "1.8", maxWidth: "480px" }}>See occupancy, daily revenue, upcoming reservations, and per-property performance in one unified panel — and manage it all.</p>
                <ul style={{ listStyle: "none", padding: "0", margin: "26px 0 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <li className="flex items-start gap-3" style={{ color: "#dcebe7", fontSize: "15.5px" }}><span className="itile itile-sand" style={{ width: "30px", height: "30px", borderRadius: "9px" }}><svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg></span>Dynamic pricing by demand and season</li>
                  <li className="flex items-start gap-3" style={{ color: "#dcebe7", fontSize: "15.5px" }}><span className="itile itile-sand" style={{ width: "30px", height: "30px", borderRadius: "9px" }}><svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg></span>Financial reports and automated payouts</li>
                  <li className="flex items-start gap-3" style={{ color: "#dcebe7", fontSize: "15.5px" }}><span className="itile itile-sand" style={{ width: "30px", height: "30px", borderRadius: "9px" }}><svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg></span>Team access with roles and permissions</li>
                </ul>
                <Link className="btn btn-soft" href="/features" style={{ marginTop: "28px" }}>Explore the dashboard</Link>
              </div>
              <div className="reveal">
                <div style={{ background: "#fff", borderRadius: "18px", boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid var(--line)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "var(--brand-600)" }} />
                      <span style={{ fontWeight: "800", fontSize: "14px" }}>Suvio Dashboard</span>
                    </div>
                    <span className="chip chip-sand" style={{ fontSize: "11px" }}>3 active properties</span>
                  </div>
                  <div style={{ padding: "18px" }}>
                    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", padding: "13px" }}>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>Occupancy</div>
                        <div className="stat-num" style={{ fontSize: "26px", color: "var(--brand-700)", marginTop: "4px" }}>82%</div>
                      </div>
                      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", padding: "13px" }}>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>Today's revenue</div>
                        <div className="stat-num" style={{ fontSize: "26px", color: "var(--ink)", marginTop: "4px" }}>$9.4k</div>
                      </div>
                      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", padding: "13px" }}>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>Upcoming</div>
                        <div className="stat-num" style={{ fontSize: "26px", color: "var(--ink)", marginTop: "4px" }}>27</div>
                      </div>
                    </div>
                    <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", padding: "16px", marginTop: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>Revenue · last 7 days</span>
                        <span style={{ fontSize: "11px", color: "#2f8f5b", fontWeight: "700" }}>▲ 12%</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: "9px", height: "90px" }}>
                        <div style={{ flex: "1", height: "42%", background: "var(--brand-100)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "58%", background: "var(--brand-100)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "50%", background: "var(--brand-100)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "74%", background: "var(--brand-300)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "66%", background: "var(--brand-100)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "88%", background: "var(--brand-600)", borderRadius: "6px 6px 0 0" }} />
                        <div style={{ flex: "1", height: "100%", background: "var(--sand)", borderRadius: "6px 6px 0 0" }} />
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
            <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
              <span className="eyebrow center" style={{ justifyContent: "center" }}>Customer stories</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px" }}>Trusted by hosts who got results</h2>
            </div>
            <div className="grid gap-5 testi-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <figure className="card reveal" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ color: "var(--sand)", fontSize: "18px", letterSpacing: "2px" }}>★★★★★</div>
                <blockquote style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--ink-700)" }}>"Since launching our own booking site, direct reservations jumped from 20% to nearly 60%. We're no longer hostage to OTA commissions."</blockquote>
                <figcaption className="flex items-center gap-3" style={{ marginTop: "auto" }}>
                  <span className="ph" style={{ width: "46px", height: "46px", borderRadius: "50%" }}>
                    <span style={{ fontSize: "9px" }}>photo</span>
                  </span>
                  <span>
                    <span style={{ display: "block", fontWeight: "700", fontSize: "14.5px" }}>Nadia Rahimi</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>GM, The Cedar House</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="card reveal" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ color: "var(--sand)", fontSize: "18px", letterSpacing: "2px" }}>★★★★★</div>
                <blockquote style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--ink-700)" }}>"I manage five lodges from one account. The unified financial reports gave my team hours back every week."</blockquote>
                <figcaption className="flex items-center gap-3" style={{ marginTop: "auto" }}>
                  <span className="ph" style={{ width: "46px", height: "46px", borderRadius: "50%" }}>
                    <span style={{ fontSize: "9px" }}>photo</span>
                  </span>
                  <span>
                    <span style={{ display: "block", fontWeight: "700", fontSize: "14.5px" }}>Daniel Okoro</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>Founder, Willow Creek Group</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="card reveal" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ color: "var(--sand)", fontSize: "18px", letterSpacing: "2px" }}>★★★★★</div>
                <blockquote style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--ink-700)" }}>"Setup took a single day and the support is outstanding. The template captures the feel of our resort perfectly."</blockquote>
                <figcaption className="flex items-center gap-3" style={{ marginTop: "auto" }}>
                  <span className="ph" style={{ width: "46px", height: "46px", borderRadius: "50%" }}>
                    <span style={{ fontSize: "9px" }}>photo</span>
                  </span>
                  <span>
                    <span style={{ display: "block", fontWeight: "700", fontSize: "14.5px" }}>Sofia Marin</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>Director, Azure Bay Resort</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* ============== PRICING SUMMARY ============== */}
        <section className="section bg-cream">
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
              <span className="eyebrow center" style={{ justifyContent: "center" }}>Transparent pricing</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,44px)", marginTop: "16px" }}>A plan for every size</h2>
              <p className="lead" style={{ marginTop: "14px" }}>No hidden fees. Upgrade or cancel whenever you like.</p>
            </div>
            <div className="grid gap-5 price-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", alignItems: "stretch" }}>
              <div className="card reveal" style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "18px" }}>Basic</h3>
                <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>For small properties</p>
                <div style={{ margin: "18px 0 4px" }}>
                  <span className="stat-num" style={{ fontSize: "40px", color: "var(--ink)" }}>$49</span>
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}> / month</span>
                </div>
                <hr className="hairline" style={{ margin: "18px 0" }} />
                <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "11px", fontSize: "14px", color: "var(--ink-700)" }}>
                  <li>1 property · up to 15 rooms</li>
                  <li>Branded booking site</li>
                  <li>Core reservation engine</li>
                </ul>
                <Link className="btn btn-outline" href="/pricing" style={{ marginTop: "24px" }}>Choose Basic</Link>
              </div>
              <div className="card reveal" style={{ padding: "30px", display: "flex", flexDirection: "column", border: "1.5px solid var(--brand-600)", boxShadow: "var(--shadow-lg)", position: "relative" }}>
                <span className="chip" style={{ position: "absolute", top: "-13px", left: "30px", background: "var(--brand-600)", color: "#fff", borderColor: "var(--brand-600)" }}>Most popular</span>
                <h3 style={{ fontSize: "18px", color: "var(--brand-700)" }}>Pro</h3>
                <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>For growing hotels</p>
                <div style={{ margin: "18px 0 4px" }}>
                  <span className="stat-num" style={{ fontSize: "40px", color: "var(--brand-700)" }}>$129</span>
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}> / month</span>
                </div>
                <hr className="hairline" style={{ margin: "18px 0" }} />
                <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "11px", fontSize: "14px", color: "var(--ink-700)" }}>
                  <li>Up to 5 properties · unlimited rooms</li>
                  <li>Dynamic pricing & channels</li>
                  <li>Advanced analytics</li>
                </ul>
                <Link className="btn btn-primary" href="/pricing" style={{ marginTop: "24px" }}>Choose Pro</Link>
              </div>
              <div className="card reveal" style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "18px" }}>Enterprise</h3>
                <p className="text-muted" style={{ fontSize: "13.5px", marginTop: "6px" }}>For chains & resorts</p>
                <div style={{ margin: "18px 0 4px" }}>
                  <span className="stat-num" style={{ fontSize: "34px", color: "var(--ink)" }}>Custom</span>
                </div>
                <hr className="hairline" style={{ margin: "18px 0" }} />
                <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "11px", fontSize: "14px", color: "var(--ink-700)" }}>
                  <li>Unlimited properties</li>
                  <li>SLA & dedicated support</li>
                  <li>Custom API integrations</li>
                </ul>
                <Link className="btn btn-dark" href="/contact" style={{ marginTop: "24px" }}>Talk to sales</Link>
              </div>
            </div>
            <div className="reveal" style={{ textAlign: "center", marginTop: "28px" }}>
              <Link className="btn btn-ghost" href="/pricing">Compare all plans <svg style={{ width: "17px", height: "17px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg> </Link>
            </div>
          </div>
        </section>
        {/* ============== FINAL CTA ============== */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "linear-gradient(120deg,var(--brand-800),var(--brand-600))", padding: "clamp(40px,6vw,72px)", textAlign: "center", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ position: "absolute", inset: "0", backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <span className="eyebrow center" style={{ justifyContent: "center", color: "#bfeee6" }}>Ready to start?</span>
                <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", color: "#fff", marginTop: "16px", maxWidth: "680px", marginInline: "auto" }}>Take your hospitality business further</h2>
                <p style={{ color: "#d6f3ee", fontSize: "18px", marginTop: "16px", maxWidth: "540px", marginInline: "auto", lineHeight: "1.7" }}>Start free today, or book a tailored demo for your property.</p>
                <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "30px" }}>
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
