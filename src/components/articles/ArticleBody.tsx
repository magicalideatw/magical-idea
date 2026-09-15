import Link from "next/link";
import type { ArticleContentBlock } from "@/lib/articles/types";

type ArticleBodyProps = {
  content: readonly ArticleContentBlock[];
};

export default function ArticleBody({ content }: ArticleBodyProps) {
  let h2Index = 0;

  return (
    <div className="article-prose space-y-5 sm:space-y-6">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "h2") {
          h2Index += 1;
          const sectionId = block.id ?? `article-section-${h2Index}`;
          return (
            <h2
              key={key}
              id={sectionId}
              className="font-display text-xl sm:text-2xl text-white/90 tracking-premium leading-snug pt-4 first:pt-0 scroll-mt-28"
            >
              <span className="gold-gradient-text">{block.text}</span>
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={key}
              className="font-display text-lg text-white/80 tracking-premium leading-snug pt-2"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={key} className="space-y-2.5 pl-0 list-none">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/50 text-sm sm:text-base leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "inline-link") {
          return (
            <p
              key={key}
              className="text-white/50 text-sm sm:text-base leading-relaxed font-light"
            >
              {block.before}
              <Link
                href={block.href}
                className="text-gold/75 hover:text-gold transition-colors duration-300 underline-offset-4 hover:underline"
              >
                {block.linkLabel}
              </Link>
              {block.after ?? ""}
            </p>
          );
        }

        return (
          <p
            key={key}
            className="text-white/50 text-sm sm:text-base leading-relaxed font-light"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
