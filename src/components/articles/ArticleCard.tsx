import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles/types";
import { ARTICLE_CATEGORIES } from "@/lib/articles/types";

type ArticleCardProps = {
  article: Article;
};

function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const categoryLabel = ARTICLE_CATEGORIES[article.categoryId];

  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/[0.06] bg-surface-elevated/20 p-6 sm:p-8 transition-colors duration-300 hover:border-gold/15">
      <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-3">
        {categoryLabel}
      </p>
      <h2 className="font-display text-lg sm:text-xl text-white/90 tracking-premium leading-snug mb-3 group-hover:text-gold/90 transition-colors duration-300">
        <Link href={`/articles/${article.slug}`} className="block">
          {article.title}
        </Link>
      </h2>
      <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">
        {article.excerpt}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
        <time
          dateTime={article.datePublished}
          className="text-white/35 text-xs font-en tracking-wide"
        >
          {formatArticleDate(article.datePublished)}
        </time>
        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors duration-300"
        >
          閱讀文章
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </article>
  );
}
