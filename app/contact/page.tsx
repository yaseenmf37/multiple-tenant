import type { Metadata } from "next";

import DemoForm from "@/components/DemoForm";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconTile } from "@/components/ui/icon-tile";
import { getI18n } from "@/lib/i18n/server";
import { EXTERNAL } from "@/lib/routes";

const CONTACT_ICON = { width: "44px", height: "44px", borderRadius: "12px" };
const CONTACT_SVG = { width: "20px", height: "20px" };

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.contact.meta.title, description: t.contact.meta.description };
}

export default async function ContactPage() {
  const { t } = await getI18n();
  const c = t.contact;

  return (
    <main>
      <section className="section" style={{ paddingBlock: "clamp(40px,5vw,72px)" }}>
        <div className="container">
          <div
            className="grid gap-12 contact-grid items-start grid-cols-[1fr_1.05fr]"
          >
            {/* LEFT: intro + info */}
            <div className="reveal">
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h1 className="display mt-[16px]" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
                {c.title}
              </h1>
              <p className="lead mt-[16px] max-w-[440px]">
                {c.lead}
              </p>
              <div className="flex flex-col gap-[18px] mt-[34px]">
                <div className="flex items-start gap-3">
                  <IconTile path="M4 6h16v12H4zM4 7l8 6 8-6" style={CONTACT_ICON} svgStyle={CONTACT_SVG} />
                  <div>
                    <div className="font-bold text-[15px]">{c.emailLabel}</div>
                    <a href={EXTERNAL.EMAIL} className="text-[14.5px] text-brand-700">
                      {c.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconTile path="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" style={CONTACT_ICON} svgStyle={CONTACT_SVG} />
                  <div>
                    <div className="font-bold text-[15px]">{c.phoneLabel}</div>
                    <a href={EXTERNAL.PHONE} className="text-[14.5px] text-brand-700">
                      {c.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="itile" style={CONTACT_ICON}>
                    <svg style={CONTACT_SVG} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-bold text-[15px]">{c.officeLabel}</div>
                    <div className="text-muted text-[14.5px]">
                      {c.office}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-[30px] p-[22px] flex items-center justify-between gap-[16px] bg-cream border-line-2">
                <div>
                  <div className="font-bold text-[15.5px]">{c.bookTitle}</div>
                  <div className="text-muted text-[13.5px] mt-[3px]">
                    {c.bookDesc}
                  </div>
                </div>
                <Button asChild variant="outline" className="flex-none">
                  <a href={EXTERNAL.BOOK_MEETING}>{c.bookCta}</a>
                </Button>
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
