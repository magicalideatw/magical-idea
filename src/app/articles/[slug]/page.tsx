import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/articles/ArticleBody";
import ArticleExperienceSection from "@/components/articles/ArticleExperienceSection";
import ArticleTableOfContents from "@/components/articles/ArticleTableOfContents";
import {
  ARTICLE_CATEGORIES,
  buildArticleJsonLd,
  createArticleMetadata,
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }
  return createArticleMetadata(article);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const categoryLabel = ARTICLE_CATEGORIES[article.categoryId];
  const jsonLd = buildArticleJsonLd(article);
  const showUpdated =
    article.dateModified.slice(0, 10) !== article.datePublished.slice(0, 10);

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "活動指南", href: "/articles" },
          { label: article.title },
        ]}
      />

      <article className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-[820px] mx-auto">
            <header className="mb-8 sm:mb-10">
              <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-4">
                {categoryLabel}
              </p>
              <h1 className="font-display text-[clamp(1.5rem,4.5vw,2.5rem)] font-medium tracking-tight leading-[1.2] text-white/90 mb-5 sm:mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-white/40 mb-6">
                <time dateTime={article.datePublished}>
                  發布：{formatArticleDate(article.datePublished)}
                </time>
                {showUpdated ? (
                  <time dateTime={article.dateModified}>
                    更新：{formatArticleDate(article.dateModified)}
                  </time>
                ) : null}
              </div>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed font-light border-l-2 border-gold/30 pl-4">
                {article.excerpt}
              </p>
            </header>

            <ArticleTableOfContents content={article.content} />

            {article.coverImage ? (
              <div className="relative mb-10 sm:mb-12 overflow-hidden rounded-xl border border-white/[0.06]">
                <Image
                  src={article.coverImage}
                  alt={article.coverImageAlt ?? article.title}
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  sizes="(max-width: 820px) 100vw, 820px"
                  priority
                />
              </div>
            ) : null}

            <ArticleBody content={article.content} />

            {article.experienceSection ? (
              <ArticleExperienceSection section={article.experienceSection} />
            ) : null}

            <section
              aria-labelledby="article-related-services"
              className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08]"
            >
              <h2
                id="article-related-services"
                className="font-display text-xl text-white/90 tracking-premium mb-6"
              >
                <span className="gold-gradient-text">相關服務</span>
              </h2>
              <ul className="space-y-4">
                {article.relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group block rounded-xl border border-white/[0.06] bg-surface-elevated/20 p-5 sm:p-6 hover:border-gold/15 transition-colors duration-300"
                    >
                      <span className="font-display text-base text-white/85 group-hover:text-gold/90 transition-colors">
                        {service.label}
                      </span>
                      <p className="mt-2 text-white/45 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="article-planning-cta"
              className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-xl border border-gold/10 bg-black/20"
            >
              <h2
                id="article-planning-cta"
                className="font-display text-lg sm:text-xl text-white/90 tracking-premium mb-4"
              >
                如果你正在規劃活動
              </h2>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-4">
                歡迎提供以下資訊，我們會依需求協助評估演出或設備方案：
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "活動日期",
                  "活動地點",
                  "預計人數",
                  "活動形式",
                  "演出或設備需求",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-white/50 text-sm leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary justify-center text-sm sm:text-base inline-flex"
              >
                立即詢價
                <ArrowRight className="w-4 h-4" />
              </Link>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
