import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles/types";
import { ARTICLE_CATEGORIES } from "@/lib/articles/types";

type ArticleHorizontalRowProps = {
  article: Article;
  size?: "featured" | "standard";
  priority?: boolean;
};

export default function ArticleHorizontalRow({
  article,
  size = "standard",
  priority = false,
}: ArticleHorizontalRowProps) {
  const categoryLabel = ARTICLE_CATEGORIES[article.categoryId];
  const isFeatured = size === "featured";
  const href = `/articles/${article.slug}`;

  const imageHeights = isFeatured
    ? "h-[220px] sm:h-[280px] lg:h-[360px]"
    : "h-[220px] sm:h-[260px] lg:h-[300px]";

  const gridClass = isFeatured
    ? "gap-8 lg:gap-12 p-5 sm:p-6 lg:p-8"
    : "gap-6 lg:gap-10 p-4 sm:p-5 lg:p-6";

  const titleClass = isFeatured
    ? "text-xl sm:text-2xl md:text-[1.625rem]"
    : "text-lg sm:text-xl";

  const excerptClass = isFeatured ? "line-clamp-4" : "line-clamp-3";

  return (
    <article
      className={`group grid grid-cols-1 lg:grid-cols-[48fr_52fr] items-center rounded-xl border border-white/[0.06] bg-surface-elevated/10 hover:border-gold/12 transition-colors duration-500 ${gridClass}`}
    >
      <Link
        href={href}
        className={`block overflow-hidden rounded-lg border border-white/[0.05] bg-black/40 ${imageHeights} relative w-full`}
      >
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt ?? article.title}
            fill
            className="object-cover object-center"
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 480px"
                : "(max-width: 1024px) 100vw, 420px"
            }
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-surface-elevated/40 to-black/50" />
        )}
      </Link>
      <div className="flex flex-col min-w-0 lg:pl-1">
        <p className="font-en text-gold/45 text-[10px] tracking-luxury uppercase mb-3 sm:mb-4">
          {categoryLabel}
        </p>
        <h2
          className={`font-display ${titleClass} text-white/90 tracking-premium leading-snug mb-3 sm:mb-4 group-hover:text-gold/85 transition-colors duration-300`}
        >
          <Link href={href}>{article.title}</Link>
        </h2>
        <p
          className={`text-white/45 text-sm sm:text-[0.9375rem] leading-relaxed font-light mb-5 sm:mb-6 ${excerptClass}`}
        >
          {article.excerpt}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-gold/75 text-sm hover:text-gold transition-colors duration-300 w-fit"
        >
          閱讀文章
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </article>
  );
}
