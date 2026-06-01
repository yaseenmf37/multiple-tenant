"use client";

import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card reveal" style={{ padding: "clamp(24px,3vw,38px)" }}>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.currentTarget.checkValidity()) {
            e.currentTarget.reportValidity();
            return;
          }
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field" style={{ gridColumn: "span 2" }}>
            <label htmlFor="name">Full name</label>
            <input className="input" id="name" name="name" type="text" placeholder="Alex Morgan" required />
          </div>
          <div className="field" style={{ gridColumn: "span 2" }}>
            <label htmlFor="hotel">Hotel name</label>
            <input className="input" id="hotel" name="hotel" type="text" placeholder="The Cedar House" required />
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input className="input" id="email" name="email" type="email" placeholder="you@hotel.com" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input className="input" id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="field" style={{ gridColumn: "span 2" }}>
            <label htmlFor="type">Property type</label>
            <select className="select" id="type" name="type" defaultValue="Boutique hotel">
              <option>Boutique hotel</option>
              <option>Hotel chain</option>
              <option>Guesthouse / eco-lodge</option>
              <option>Resort</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field" style={{ gridColumn: "span 2" }}>
            <label htmlFor="message">Message</label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Tell us about your property and what you'd like to achieve…"
            />
          </div>
        </div>
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          style={{ width: "100%", marginTop: "22px" }}
          disabled={submitted}
        >
          {submitted ? "Sent ✓" : "Request my demo"}
        </button>
        <p className="text-muted" style={{ fontSize: "12.5px", marginTop: "14px", textAlign: "center" }}>
          By submitting, you agree to our{" "}
          <a href="#" style={{ color: "var(--brand-700)" }}>
            Privacy Policy
          </a>
          . No spam, ever.
        </p>
        <div
          style={{
            display: submitted ? "block" : "none",
            marginTop: "18px",
            padding: "16px 18px",
            borderRadius: "14px",
            background: "var(--brand-50)",
            border: "1px solid var(--brand-200)",
            color: "var(--brand-800)",
            fontSize: "14.5px",
          }}
        >
          <strong>Thank you!</strong> We&apos;ve received your request and will be in touch within one
          business day.
        </div>
      </form>
    </div>
  );
}
