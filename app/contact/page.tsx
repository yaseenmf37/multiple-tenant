import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a Suvio demo or get in touch. Tell us about your property and our team will show you how to launch your branded booking site.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section" style={{ paddingBlock: "clamp(40px,5vw,72px)" }}>
        <div className="container">
          <div
            className="grid gap-12 contact-grid"
            style={{ gridTemplateColumns: "1fr 1.05fr", alignItems: "start" }}
          >
            {/* LEFT: intro + info */}
            <div className="reveal">
              <span className="eyebrow">Request a Demo</span>
              <h1 className="display" style={{ fontSize: "clamp(30px,4vw,48px)", marginTop: "16px" }}>
                Let&apos;s get your hotel online
              </h1>
              <p className="lead" style={{ marginTop: "16px", maxWidth: "440px" }}>
                Tell us a little about your property. We&apos;ll walk you through Suvio and help you
                launch a branded booking site — usually within a day.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "34px" }}>
                <div className="flex items-start gap-3">
                  <span className="itile" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "15px" }}>Email</div>
                    <a href="mailto:hello@suvio.com" style={{ color: "var(--brand-700)", fontSize: "14.5px" }}>
                      hello@suvio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="itile" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "15px" }}>Phone</div>
                    <a href="tel:+18005550100" style={{ color: "var(--brand-700)", fontSize: "14.5px" }}>
                      +1 (800) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="itile" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "15px" }}>Office</div>
                    <div className="text-muted" style={{ fontSize: "14.5px" }}>
                      128 Harbor Lane, Suite 400 · Lisbon
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  marginTop: "30px",
                  padding: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  background: "var(--cream)",
                  borderColor: "var(--line-2)",
                }}
              >
                <div>
                  <div style={{ fontWeight: "700", fontSize: "15.5px" }}>Prefer to book a meeting?</div>
                  <div className="text-muted" style={{ fontSize: "13.5px", marginTop: "3px" }}>
                    Grab a 30-minute slot with our team.
                  </div>
                </div>
                <a className="btn btn-outline" href="#" style={{ flex: "none" }}>
                  Book a time
                </a>
              </div>
            </div>

            {/* RIGHT: form island */}
            <DemoForm />
          </div>
        </div>
      </section>
    </main>
  );
}
