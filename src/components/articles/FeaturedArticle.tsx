import type { Article } from "@/lib/articles/types";
import ArticleHorizontalRow from "./ArticleHorizontalRow";

type FeaturedArticleProps = {
  article: Article;
};

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section aria-labelledby="featured-article-heading" className="mb-16 sm:mb-20 md:mb-24">
      <p
        id="featured-article-heading"
        className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-6 sm:mb-8"
      >
        精選文章
      </p>
      <ArticleHorizontalRow article={article} size="featured" priority />
    </section>
  );
}
