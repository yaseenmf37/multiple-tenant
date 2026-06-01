"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PAGES = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

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

const MenuIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="siteNav">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Suvio home">
          <Logo />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.05" }}>
            <span>Suvio</span>
            <span className="sub">hotel platform</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              className={`nav-link${pathname === p.href ? " active" : ""}`}
              href={p.href}
            >
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-ghost desktop-only" href="/contact">
            Log in
          </Link>
          <Link className="btn btn-primary desktop-only" href="/contact">
            Start Free
          </Link>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? CloseIcon : MenuIcon}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <div className="container">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              style={pathname === p.href ? { color: "var(--brand-700)" } : undefined}
            >
              {p.label}
            </Link>
          ))}
          <div className="m-actions">
            <Link className="btn btn-outline" href="/contact">
              Log in
            </Link>
            <Link className="btn btn-primary" href="/contact">
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
