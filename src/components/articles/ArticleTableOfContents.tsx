import Link from "next/link";
import type { ArticleContentBlock } from "@/lib/articles/types";

type ArticleTableOfContentsProps = {
  content: readonly ArticleContentBlock[];
};

function getH2Entries(content: readonly ArticleContentBlock[]) {
  let h2Index = 0;
  const entries: { label: string; id: string }[] = [];

  for (const block of content) {
    if (block.type !== "h2") {
      continue;
    }
    h2Index += 1;
    entries.push({
      label: block.text,
      id: block.id ?? `article-section-${h2Index}`,
    });
  }

  return entries;
}

export default function ArticleTableOfContents({
  content,
}: ArticleTableOfContentsProps) {
  const entries = getH2Entries(content);
  if (entries.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="文章目錄"
      className="mb-10 sm:mb-12 rounded-xl border border-white/[0.06] bg-surface-elevated/20 p-5 sm:p-6"
    >
      <p className="font-display text-sm text-white/80 tracking-premium mb-4">
        <span className="gold-gradient-text">目錄</span>
      </p>
      <ol className="space-y-2.5">
        {entries.map((entry, index) => (
          <li key={entry.id}>
            <Link
              href={`#${entry.id}`}
              className="text-white/50 text-sm sm:text-[0.9375rem] leading-relaxed hover:text-gold transition-colors duration-300"
            >
              <span className="text-gold/45 font-en text-xs mr-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              {entry.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
