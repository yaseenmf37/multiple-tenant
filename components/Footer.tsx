"use client";

import { useState } from "react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SocialLink, SOCIAL_PATHS } from "@/components/ui/social-link";
import { useLocalized } from "@/lib/i18n/context";
import { EXTERNAL, ROUTES } from "@/lib/routes";

type Item = { label: string; href: string };

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul className="list-none m-0 p-0 flex flex-col gap-[11px] text-[14.5px]">
        {items.map((i) => (
          <li key={i.label}>
            <LocalizedLink href={i.href}>{i.label}</LocalizedLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIALS = [
  { label: "Instagram", href: EXTERNAL.SOCIAL_INSTAGRAM, path: SOCIAL_PATHS.instagram },
  { label: "LinkedIn", href: EXTERNAL.SOCIAL_LINKEDIN, path: SOCIAL_PATHS.linkedin },
  { label: "X", href: EXTERNAL.SOCIAL_X, path: SOCIAL_PATHS.x },
  { label: "YouTube", href: EXTERNAL.SOCIAL_YOUTUBE, path: SOCIAL_PATHS.youtube },
];

export default function Footer() {
  const { t } = useLocalized();
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="container pt-[70px] pb-0">
        <div
          className="grid grid-cols-[1.7fr_1fr_1fr_1.5fr] gap-[48px] foot-grid"
        >
          <div className="max-w-[330px]">
            <div className="brand text-white mb-[16px]">
              <Logo />
              <span>{t.brand.name}</span>
            </div>
            <p className="text-[#90a59f] text-[14.5px] leading-[1.85]">
              {t.footer.tagline}
            </p>
            <div className="flex gap-[10px] mt-[22px]">
              {SOCIALS.map((s) => (
                <SocialLink key={s.label} label={s.label} href={s.href} path={s.path} />
              ))}
            </div>
          </div>

          <Column
            title={t.footer.productTitle}
            items={[
              { label: t.footer.links.features, href: ROUTES.FEATURES },
              { label: t.footer.links.solutions, href: ROUTES.SOLUTIONS },
              { label: t.footer.links.pricing, href: ROUTES.PRICING },
              { label: t.footer.links.requestDemo, href: ROUTES.CONTACT },
            ]}
          />
          <Column
            title={t.footer.companyTitle}
            items={[
              { label: t.footer.links.about, href: ROUTES.ABOUT },
              { label: t.footer.links.blog, href: ROUTES.BLOG },
              { label: t.footer.links.contact, href: ROUTES.CONTACT },
              { label: t.footer.links.careers, href: ROUTES.ABOUT },
            ]}
          />

          <div>
            <h4>{t.footer.newsletterTitle}</h4>
            <p className="text-[#90a59f] text-[14px] leading-[1.8] mb-[14px]">
              {t.footer.newsletterDesc}
            </p>
            <form
              className="news flex gap-[8px]"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
            >
              <input
                className="foot-input"
                type="email"
                placeholder={t.footer.emailPlaceholder}
                aria-label={t.footer.emailAria}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="flex-none">
                {t.footer.join}
              </Button>
            </form>
            <p
              className="news-msg text-brand-300 text-[13px] mt-[10px]"
              style={{
                display: subscribed ? "block" : "none",
              }}
            >
              {t.footer.subscribed}
            </p>
          </div>
        </div>

        <hr className="border-0 border-t border-solid border-[#1c423b] mt-[52px]" />
        <div className="flex justify-between items-center flex-wrap gap-[14px] py-[26px] text-[13.5px] text-[#6f8a83]">
          <span>© {year} {t.footer.copyright}</span>
          <div className="flex gap-[22px]">
            <a href={EXTERNAL.PRIVACY}>{t.footer.privacy}</a>
            <a href={EXTERNAL.TERMS}>{t.footer.terms}</a>
            <a href={EXTERNAL.STATUS}>{t.footer.status}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
