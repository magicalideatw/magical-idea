import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles/types";
import { ARTICLE_CATEGORIES } from "@/lib/articles/types";

type ArticleListCardProps = {
  article: Article;
};

export default function ArticleListCard({ article }: ArticleListCardProps) {
  const categoryLabel = ARTICLE_CATEGORIES[article.categoryId];

  return (
    <article className="group flex flex-col py-6 sm:py-7 border-b border-white/[0.06] last:border-b-0">
      <p className="font-en text-gold/45 text-[10px] tracking-luxury uppercase mb-3">
        {categoryLabel}
      </p>
      <h3 className="font-display text-base sm:text-lg text-white/88 tracking-premium leading-snug mb-3 group-hover:text-gold/85 transition-colors duration-300">
        <Link href={`/articles/${article.slug}`} className="block">
          {article.title}
        </Link>
      </h3>
      <p className="text-white/42 text-sm leading-relaxed font-light line-clamp-2 mb-4">
        {article.excerpt}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="inline-flex items-center gap-2 text-gold/65 text-sm hover:text-gold transition-colors duration-300 w-fit mt-auto"
      >
        閱讀文章
        <ArrowRight className="w-3 h-3 shrink-0" />
      </Link>
    </article>
  );
}
