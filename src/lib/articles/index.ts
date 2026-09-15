import { SITE_URL } from "@/lib/seo";
import type { Article } from "./types";
import { magicPerformancePrice } from "./posts/magic-performance-price";
import { companyYearEndPartyPerformance } from "./posts/company-year-end-party-performance";
import { stageMagicVsCloseUpMagic } from "./posts/stage-magic-vs-close-up-magic";
import { yearEndPartyMagic } from "./posts/year-end-party-magic";
import { eventAudioRental } from "./posts/event-audio-rental";
import { eventAudioPrice } from "./posts/event-audio-price";

export { ARTICLE_CATEGORIES } from "./types";
export type { Article, ArticleCategoryId } from "./types";
export { createArticleMetadata, buildArticleJsonLd } from "./article-seo";

const ALL_ARTICLES: readonly Article[] = [
  magicPerformancePrice,
  companyYearEndPartyPerformance,
  stageMagicVsCloseUpMagic,
  yearEndPartyMagic,
  eventAudioRental,
  eventAudioPrice,
];

function assertUniqueCoverImages(articles: readonly Article[]): void {
  const coverToSlug = new Map<string, string>();

  for (const article of articles) {
    const cover = article.coverImage?.trim();
    if (!cover) {
      continue;
    }
    const existingSlug = coverToSlug.get(cover);
    if (existingSlug) {
      throw new Error(
        `[articles] 重複的 coverImage「${cover}」：${existingSlug} 與 ${article.slug}`,
      );
    }
    coverToSlug.set(cover, article.slug);
  }
}

assertUniqueCoverImages(ALL_ARTICLES);

export function getAllArticles(): Article[] {
  return [...ALL_ARTICLES].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ALL_ARTICLES.map((article) => article.slug);
}

export function getArticleSitemapEntries(): {
  url: string;
  lastModified: Date;
}[] {
  return ALL_ARTICLES.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.dateModified),
  }));
}
