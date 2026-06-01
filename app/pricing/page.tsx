import type { Metadata } from "next";
import Link from "next/link";
import PricingPlans from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Suvio. Basic, Pro, and Enterprise plans with monthly or annual billing, a full feature comparison, and FAQ.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingPlans />

      {/* COMPARISON TABLE */}
      <section className="section bg-cream" style={{ paddingTop: "clamp(48px,6vw,80px)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 44px" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>Compare plans</span>
            <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "14px" }}>Every detail, side by side</h2>
          </div>
          <div className="reveal table-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Features</th>
                  <th>Basic</th>
                  <th className="hl">Pro</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grp">
                  <td colSpan={4}>Properties & rooms</td>
                </tr>
                <tr>
                  <td>Properties</td>
                  <td>1</td>
                  <td className="hl">5</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Rooms per property</td>
                  <td>15</td>
                  <td className="hl">Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Team members</td>
                  <td>3</td>
                  <td className="hl">15</td>
                  <td>Unlimited</td>
                </tr>
                <tr className="grp">
                  <td colSpan={4}>Booking & website</td>
                </tr>
                <tr>
                  <td>Branded booking site</td>
                  <td data-c="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>Custom domain & SSL</td>
                  <td data-c="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>Dynamic pricing</td>
                  <td data-x="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>Channel manager sync</td>
                  <td data-x="" />
                  <td className="hl" data-c="" />
                  <td data-c="" />
                </tr>
                <tr className="grp">
                  <td colSpan={4}>Insight & support</td>
                </tr>
                <tr>
                  <td>Analytics & reports</td>
                  <td>Basic</td>
                  <td className="hl">Advanced</td>
                  <td>Advanced + custom</td>
                </tr>
                <tr>
                  <td>API integrations</td>
                  <td data-x="" />
                  <td className="hl" data-x="" />
                  <td data-c="" />
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Email</td>
                  <td className="hl">Priority</td>
                  <td>Dedicated CSM</td>
                </tr>
                <tr>
                  <td>Uptime SLA</td>
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
        <div className="container" style={{ maxWidth: "820px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>FAQ</span>
            <h2 className="display" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "14px" }}>Questions, answered</h2>
          </div>
          <div className="faq reveal">
            <details className="faq-item" open>
              <summary>Is there really a free trial?<span className="faq-ico" /></summary>
              <p>Yes — every plan starts with a 14-day free trial. No credit card required, and you can cancel any time before it ends.</p>
            </details>
            <details className="faq-item">
              <summary>Do you charge commission on bookings?<span className="faq-ico" /></summary>
              <p>No. Bookings made through your Suvio site are commission-free. You only pay your plan&apos;s subscription and your payment processor&apos;s standard transaction fees.</p>
            </details>
            <details className="faq-item">
              <summary>Can I manage more than one property?<span className="faq-ico" /></summary>
              <p>Absolutely. Pro supports up to five properties from one account, and Enterprise is unlimited — each with its own branding and reporting.</p>
            </details>
            <details className="faq-item">
              <summary>What happens if I switch from monthly to annual?<span className="faq-ico" /></summary>
              <p>You can switch billing at any time. Annual billing saves 20%, and we&apos;ll prorate the difference automatically.</p>
            </details>
            <details className="faq-item">
              <summary>Which payment gateways do you support?<span className="faq-ico" /></summary>
              <p>Stripe, PayPal, and a range of regional gateways. Enterprise customers can add custom gateways through our API.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-lg)",
              background: "linear-gradient(120deg,var(--brand-800),var(--brand-600))",
              padding: "clamp(40px,6vw,64px)",
              textAlign: "center",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <h2 className="display" style={{ fontSize: "clamp(26px,3.6vw,40px)", color: "#fff", maxWidth: "560px", marginInline: "auto" }}>
                Start free — be live this week
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "24px" }}>
                <Link className="btn btn-lg" href="/contact" style={{ background: "#fff", color: "var(--brand-700)", borderColor: "#fff" }}>
                  Start Free
                </Link>
                <Link className="btn btn-on-dark btn-outline btn-lg" href="/contact">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
