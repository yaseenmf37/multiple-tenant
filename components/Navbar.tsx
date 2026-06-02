"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { LocalizedLink } from "@/components/LocalizedLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ROUTES } from "@/lib/routes";

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
  const { t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pages = [
    { href: ROUTES.FEATURES, label: t("nav.features") },
    { href: ROUTES.SOLUTIONS, label: t("nav.solutions") },
    { href: ROUTES.PRICING, label: t("nav.pricing") },
    { href: ROUTES.ABOUT, label: t("nav.about") },
    { href: ROUTES.BLOG, label: t("nav.blog") },
  ];

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
        <LocalizedLink className="brand" href={ROUTES.HOME} aria-label={t("nav.homeAria")}>
          <Logo />
          <span className="flex flex-col leading-[1.05]">
            <span>{t("brand.name")}</span>
            <span className="sub">{t("brand.tagline")}</span>
          </span>
        </LocalizedLink>

        <nav className="nav-links" aria-label={t("nav.primaryAria")}>
          {pages.map((p) => (
            <LocalizedLink
              key={p.href}
              className={`nav-link${pathname === p.href ? " active" : ""}`}
              href={p.href}
            >
              {p.label}
            </LocalizedLink>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <Button asChild variant="ghost" className="desktop-only">
            <LocalizedLink href={ROUTES.CONTACT}>{t("nav.login")}</LocalizedLink>
          </Button>
          <Button asChild className="desktop-only">
            <LocalizedLink href={ROUTES.CONTACT}>{t("nav.startFree")}</LocalizedLink>
          </Button>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label={t("nav.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? CloseIcon : MenuIcon}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <div className="container">
          {pages.map((p) => (
            <LocalizedLink
              key={p.href}
              href={p.href}
              style={pathname === p.href ? { color: "var(--brand-700)" } : undefined}
            >
              {p.label}
            </LocalizedLink>
          ))}
          <div className="m-actions">
            <Button asChild variant="outline">
              <LocalizedLink href={ROUTES.CONTACT}>{t("nav.login")}</LocalizedLink>
            </Button>
            <Button asChild>
              <LocalizedLink href={ROUTES.CONTACT}>{t("nav.startFree")}</LocalizedLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
