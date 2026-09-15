import Breadcrumb from "@/components/Breadcrumb";
import FeaturedArticle from "@/components/articles/FeaturedArticle";
import ArticlesCategorySection from "@/components/articles/ArticlesCategorySection";
import {
  ARTICLE_CATEGORIES,
  getAllArticles,
  getArticleBySlug,
} from "@/lib/articles";
import type { ArticleCategoryId } from "@/lib/articles/types";
import { createPageMetadata } from "@/lib/seo";

const PATH = "/articles";

const FEATURED_SLUG = "magic-performance-price";

const CATEGORY_ORDER: ArticleCategoryId[] = [
  "magic",
  "year-end",
  "corporate",
  "planning",
  "lighting-sound",
];

const TITLE = "活動指南｜魔術表演、企業活動與活動設備規劃｜魔幻點子表演娛樂";

const DESCRIPTION =
  "從魔術表演形式、演出費用，到尾牙、春酒與活動燈光音響配置，整理活動規劃時常見的問題與建議。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "魔幻點子活動指南",
});

function groupArticlesByCategory(excludeSlug: string) {
  const grouped = new Map<ArticleCategoryId, ReturnType<typeof getAllArticles>>();

  for (const id of CATEGORY_ORDER) {
    grouped.set(id, []);
  }

  for (const article of getAllArticles()) {
    if (article.slug === excludeSlug) {
      continue;
    }
    const list = grouped.get(article.categoryId) ?? [];
    list.push(article);
    grouped.set(article.categoryId, list);
  }

  return grouped;
}

export default function ArticlesIndexPage() {
  const featured = getArticleBySlug(FEATURED_SLUG);
  const byCategory = groupArticlesByCategory(FEATURED_SLUG);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "活動指南" },
        ]}
      />

      <section className="section-padding bg-surface pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <header className="max-w-2xl mb-14 sm:mb-16 md:mb-20 pt-2 sm:pt-4">
            <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-5 sm:mb-6">
              Activity Guide
            </p>
            <h1 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight leading-[1.15] mb-5 sm:mb-6">
              <span className="gold-gradient-text">活動指南</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed mb-5">
              魔術表演、企業活動與活動設備規劃指南
            </p>
            <p className="text-white/42 text-sm sm:text-base leading-relaxed font-light">
              {DESCRIPTION}
            </p>
          </header>

          {featured ? <FeaturedArticle article={featured} /> : null}

          <div className="max-w-5xl lg:max-w-6xl">
            {CATEGORY_ORDER.map((categoryId) => {
              const articlesInCategory = byCategory.get(categoryId) ?? [];
              const title = ARTICLE_CATEGORIES[categoryId];

              return (
                <ArticlesCategorySection
                  key={categoryId}
                  title={title}
                  articles={articlesInCategory}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
