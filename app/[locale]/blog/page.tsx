import type { Metadata } from "next";

import { LocalizedLink } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Placeholder } from "@/components/ui/placeholder";
import { getTranslation, resolveLocale } from "@/lib/i18n/server";
import { ROUTES } from "@/lib/routes";

const FILTER_VARIANTS = ["default", "ink", "ink", "ink"] as const;
const POST_TAG_VARIANTS = ["sand", "default", "sand", "default", "default", "sand"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { t } = await getTranslation(resolveLocale((await params).locale));
  return { title: t("blog.meta.title"), description: t("blog.meta.description") };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await getTranslation(resolveLocale((await params).locale));

  return (
      <main>
        {/* HERO */}
        <section className="bg-cream border-b border-solid border-line">
          <div className="container text-center" style={{ paddingBlock: "clamp(44px,5vw,72px)" }}>
            <Eyebrow center>{t("blog.hero.eyebrow")}</Eyebrow>
            <h1 className="display mt-[16px] max-w-[700px] mx-auto" style={{ fontSize: "clamp(32px,4.4vw,52px)" }}>{t("blog.hero.title")}</h1>
            <p className="lead mt-[16px] max-w-[560px] mx-auto">{t("blog.hero.lead")}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-[24px]">
              {(t("blog.hero.filters", { returnObjects: true }) as string[]).map((filter, i) => (
                <Chip key={filter} variant={FILTER_VARIANTS[i]}>{filter}</Chip>
              ))}
            </div>
          </div>
        </section>
        {/* FEATURED */}
        <section className="section" style={{ paddingBottom: "clamp(28px,3vw,40px)" }}>
          <div className="container">
            <LocalizedLink className="card card-hover reveal feat-post grid grid-cols-[1.1fr_1fr] overflow-hidden rounded-lg" href={ROUTES.BLOG_ARTICLE}>
              <Placeholder label={t("blog.featuredCover")} className="min-h-[300px]" />
              <div className="flex flex-col justify-center" style={{ padding: "clamp(26px,3vw,44px)" }}>
                <div className="flex items-center gap-3 mb-[14px]">
                  <Chip>{t("blog.featured.tag")}</Chip>
                  <span className="text-muted text-[13px]">{t("blog.featured.readTime")}</span>
                </div>
                <h2 className="display" style={{ fontSize: "clamp(24px,2.8vw,34px)", lineHeight: "1.15" }}>{t("blog.featured.title")}</h2>
                <p className="text-muted text-[15.5px] mt-[14px] leading-[1.7] max-w-[460px]">{t("blog.featured.excerpt")}</p>
                <div className="flex items-center gap-3 mt-[22px]">
                  <Placeholder label={t("common.photo")} className="w-[38px] h-[38px] rounded-full" labelStyle={{ fontSize: "8px" }} />
                  <div>
                    <div className="font-bold text-[13.5px]">{t("blog.featured.author")}</div>
                    <div className="text-muted text-[12.5px]">{t("blog.featured.date")}</div>
                  </div>
                </div>
              </div>
            </LocalizedLink>
          </div>
        </section>
        {/* GRID */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid gap-5 blog-grid grid-cols-3">
              {(t("blog.posts", { returnObjects: true }) as { tag: string; readTime: string; title: string; excerpt: string; meta: string }[]).map((post, i) => (
                <LocalizedLink key={post.title} className="card card-hover reveal post" href={ROUTES.BLOG_ARTICLE}>
                  <Placeholder label={t("blog.cover")} className="h-[200px]" />
                  <div className="p-[22px]">
                    <div className="flex items-center gap-3 mb-[12px]">
                      <Chip variant={POST_TAG_VARIANTS[i]}>{post.tag}</Chip>
                      <span className="text-muted text-[12.5px]">{post.readTime}</span>
                    </div>
                    <h3 className="text-[18.5px] leading-[1.3]">{post.title}</h3>
                    <p className="text-muted text-[14px] mt-[10px] leading-[1.65]">{post.excerpt}</p>
                    <div className="post-meta">{post.meta}</div>
                  </div>
                </LocalizedLink>
              ))}
            </div>
            <div className="reveal text-center mt-[44px]">
              <Button variant="outline" size="lg" type="button">{t("blog.loadMore")}</Button>
            </div>
          </div>
        </section>
      </main>
  );
}
