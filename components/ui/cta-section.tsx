import type { CSSProperties, ReactNode } from "react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

/**
 * The teal gradient call-to-action band repeated at the bottom of most pages.
 * Pass the heading via `title`, optional `eyebrow`/`lead`, and the action
 * buttons as `children`.
 */
export function CtaSection({
  title,
  eyebrow,
  eyebrowColor = "#bfeee6",
  lead,
  children,
  padding = "clamp(40px,6vw,68px)",
  titleFontSize = "clamp(26px,3.6vw,42px)",
  titleMaxWidth = "620px",
  sectionStyle,
}: {
  title: ReactNode;
  eyebrow?: ReactNode;
  eyebrowColor?: string;
  lead?: ReactNode;
  children: ReactNode;
  padding?: string;
  titleFontSize?: string;
  titleMaxWidth?: string;
  sectionStyle?: CSSProperties;
}) {
  return (
    <section className="section" style={sectionStyle}>
      <div className="container">
        <div
          className="reveal relative overflow-hidden rounded-lg text-center shadow-lg"
          style={{
            background: "linear-gradient(120deg,var(--brand-800),var(--brand-600))",
            padding,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)" }}
          />
          <div className="relative">
            {eyebrow ? (
              <Eyebrow center style={{ color: eyebrowColor }}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2
              className={cn("display text-white mx-auto", eyebrow && "mt-4")}
              style={{ fontSize: titleFontSize, maxWidth: titleMaxWidth }}
            >
              {title}
            </h2>
            {lead ? (
              <p className="text-[#d6f3ee] text-[17px] mt-3.5 max-w-[520px] mx-auto leading-[1.7]">
                {lead}
              </p>
            ) : null}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-[26px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
