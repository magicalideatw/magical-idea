import type { Article } from "@/lib/articles/types";
import ArticleHorizontalRow from "./ArticleHorizontalRow";

type ArticlesCategorySectionProps = {
  title: string;
  articles: readonly Article[];
};

export default function ArticlesCategorySection({
  title,
  articles,
}: ArticlesCategorySectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mb-16 sm:mb-20 md:mb-24 last:mb-0">
      <h2 className="font-display text-lg sm:text-xl tracking-premium mb-8 sm:mb-10">
        <span className="gold-gradient-text">{title}</span>
      </h2>
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {articles.map((article) => (
          <ArticleHorizontalRow key={article.slug} article={article} size="standard" />
        ))}
      </div>
    </section>
  );
}
