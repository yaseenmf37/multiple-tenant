import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Placeholder } from "@/components/ui/placeholder";
import { SocialLink, SOCIAL_PATHS } from "@/components/ui/social-link";
import { getI18n } from "@/lib/i18n/server";
import { EXTERNAL, ROUTES } from "@/lib/routes";

const SHARE_TAG_VARIANTS = ["default", "ink"] as const;
const RELATED_TAG_VARIANTS = ["sand", "default", "default"] as const;
const SHARE_ICON_STYLE = { borderColor: "var(--line-2)", color: "var(--ink-700)" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = getI18n((await params).locale);
  return { title: t.blogArticle.meta.title, description: t.blogArticle.meta.description };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = getI18n((await params).locale);
  const a = t.blogArticle;
  // The body interleaves a blockquote after section 2 and a checkout list
  // after section 3, matching the original article layout.

  return (
      <main>
        {/* ARTICLE HEADER */}
        <article>
          <header className="container text-center" style={{ maxWidth: "760px", paddingTop: "clamp(36px,4vw,60px)" }}>
            <LocalizedLink href={ROUTES.BLOG} className="flex items-center justify-center gap-2 text-[14px] font-semibold mb-[22px] text-brand-700"> <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> {a.allArticles} </LocalizedLink>
            <div className="flex items-center justify-center gap-3 mb-[18px]">
              <Chip>{a.tag}</Chip>
              <span className="text-muted text-[13px]">{a.readTime}</span>
            </div>
            <h1 className="display" style={{ fontSize: "clamp(30px,4vw,50px)" }}>{a.title}</h1>
            <div className="flex items-center justify-center gap-3 mt-[26px]">
              <Placeholder label={t.common.photo} className="w-[44px] h-[44px] rounded-full" labelStyle={{ fontSize: "8px" }} />
              <div className="text-left">
                <div className="font-bold text-[14px]">{a.author}</div>
                <div className="text-muted text-[12.5px]">{a.authorMeta}</div>
              </div>
            </div>
          </header>
          <div className="container mt-[40px] max-w-[960px]">
            <Placeholder label={a.heroImage} className="rounded-lg" style={{ height: "clamp(240px,34vw,440px)" }} />
          </div>
          {/* BODY */}
          <div className="container prose max-w-[720px]">
            <p className="lede">{a.lede}</p>
            <p>{a.intro}</p>

            <h2>{a.sections[0].h}</h2>
            <p>{a.sections[0].p}</p>

            <h2>{a.sections[1].h}</h2>
            <p>{a.sections[1].p}</p>
            <blockquote>{a.blockquote}</blockquote>

            <h2>{a.sections[2].h}</h2>
            <p>{a.sections[2].p}</p>
            <ul>
              {a.checkoutList.map((li) => <li key={li}>{li}</li>)}
            </ul>

            {a.sections.slice(3).map((sec) => (
              <div key={sec.h}>
                <h2>{sec.h}</h2>
                <p>{sec.p}</p>
              </div>
            ))}

            <p>{a.conclusion}</p>
            <div className="callout">
              <div className="font-bold text-[16px] mb-[6px]">{a.callout.title}</div>
              <p className="mt-0 mb-[16px] text-muted text-[15px] leading-[1.65]">{a.callout.body}</p>
              <Button asChild><LocalizedLink href={ROUTES.CONTACT}>{a.callout.cta}</LocalizedLink></Button>
            </div>
          </div>
          {/* SHARE */}
          <div className="container mt-[8px] max-w-[720px]">
            <hr className="hairline mt-[36px] mb-[24px]" />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                {a.shareTags.map((tag, i) => (
                  <Chip key={tag} variant={SHARE_TAG_VARIANTS[i]}>{tag}</Chip>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted text-[13.5px]">{a.share}</span>
                <SocialLink label={a.shareXAria} href={EXTERNAL.SHARE_X} path={SOCIAL_PATHS.x} style={SHARE_ICON_STYLE} />
                <SocialLink label={a.shareLinkedInAria} href={EXTERNAL.SHARE_LINKEDIN} path={SOCIAL_PATHS.linkedin} style={SHARE_ICON_STYLE} />
              </div>
            </div>
          </div>
        </article>
        {/* RELATED */}
        <section className="section bg-cream" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <h2 className="display mb-[32px]" style={{ fontSize: "clamp(22px,2.6vw,32px)" }}>{a.keepReading}</h2>
            <div className="grid gap-5 rel-grid grid-cols-3">
              {a.related.map((item, i) => (
                <LocalizedLink key={item.title} className="card card-hover" href={ROUTES.BLOG_ARTICLE}>
                  <Placeholder label={t.blog.cover} className="h-[170px]" />
                  <div className="p-[20px]">
                    <Chip variant={RELATED_TAG_VARIANTS[i]} className="mb-[10px]">{item.tag}</Chip>
                    <h3 className="text-[17px] leading-[1.3] mt-[6px]">{item.title}</h3>
                  </div>
                </LocalizedLink>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
