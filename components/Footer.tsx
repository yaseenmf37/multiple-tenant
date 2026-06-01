"use client";

import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <svg
      className="mark"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#0d9488" />
      <rect x="10" y="10" width="20" height="20" rx="6" fill="#115e59" />
      <rect x="14.5" y="14.5" width="11" height="11" rx="3.2" fill="#9fe5db" />
    </svg>
  );
}

function Social({ label, path }: { label: string; path: string }) {
  return (
    <a className="social" href="#" aria-label={label}>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

type Item = { label: string; href: string };

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "11px",
          fontSize: "14.5px",
        }}
      >
        {items.map((i) => (
          <li key={i.label}>
            <Link href={i.href}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.5A6.3 6.3 0 1 0 18.3 12 6.3 6.3 0 0 0 12 5.7zm0 10.4A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1zm6.55-10.7a1.47 1.47 0 1 1-1.47-1.47 1.47 1.47 0 0 1 1.47 1.47z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z",
  },
  {
    label: "X",
    path: "M18.9 1.6h3.5l-7.64 8.73L23.7 22.4h-7l-5.5-7.18-6.3 7.18H1.4l8.17-9.34L.96 1.6h7.18l4.96 6.56L18.9 1.6zm-1.23 18.7h1.94L6.4 3.6H4.32L17.67 20.3z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.4.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.13c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="container" style={{ paddingBlock: "70px 0" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1.5fr", gap: "48px" }}
          className="foot-grid"
        >
          <div style={{ maxWidth: "330px" }}>
            <div className="brand" style={{ color: "#fff", marginBottom: "16px" }}>
              <Logo />
              <span>Suvio</span>
            </div>
            <p style={{ color: "#90a59f", fontSize: "14.5px", lineHeight: "1.85" }}>
              One platform that gives every hotel its own branded booking site, a powerful admin
              dashboard, and a shared, reliable infrastructure.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "22px" }}>
              {SOCIALS.map((s) => (
                <Social key={s.label} label={s.label} path={s.path} />
              ))}
            </div>
          </div>

          <Column
            title="Product"
            items={[
              { label: "Features", href: "/features" },
              { label: "Solutions", href: "/solutions" },
              { label: "Pricing", href: "/pricing" },
              { label: "Request a Demo", href: "/contact" },
            ]}
          />
          <Column
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
              { label: "Careers", href: "/about" },
            ]}
          />

          <div>
            <h4>Newsletter</h4>
            <p style={{ color: "#90a59f", fontSize: "14px", lineHeight: "1.8", marginBottom: "14px" }}>
              One email a month — direct-booking tactics and hotel management know-how.
            </p>
            <form
              className="news"
              style={{ display: "flex", gap: "8px" }}
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
            >
              <input
                className="foot-input"
                type="email"
                placeholder="you@hotel.com"
                aria-label="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit" style={{ flex: "none" }}>
                Join
              </button>
            </form>
            <p
              className="news-msg"
              style={{
                color: "var(--brand-300)",
                fontSize: "13px",
                marginTop: "10px",
                display: subscribed ? "block" : "none",
              }}
            >
              Thanks — you are subscribed.
            </p>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid #1c423b", margin: "52px 0 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            paddingBlock: "26px",
            fontSize: "13.5px",
            color: "#6f8a83",
          }}
        >
          <span>© {year} Suvio, Inc. All rights reserved.</span>
          <div style={{ display: "flex", gap: "22px" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
