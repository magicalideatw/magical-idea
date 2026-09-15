export const ARTICLE_CATEGORIES = {
  magic: "魔術表演",
  "year-end": "尾牙／春酒",
  corporate: "企業活動",
  "lighting-sound": "燈光音響",
  planning: "活動規劃",
} as const;

export type ArticleCategoryId = keyof typeof ARTICLE_CATEGORIES;

export type ArticleExperienceImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleExperienceSection = {
  title: string;
  description: string;
  images: readonly ArticleExperienceImage[];
};

export type ArticleContentBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: readonly string[] }
  | {
      type: "inline-link";
      before: string;
      linkLabel: string;
      href: string;
      after?: string;
    };

export type ArticleRelatedService = {
  label: string;
  href: string;
  description: string;
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  categoryId: ArticleCategoryId;
  datePublished: string;
  dateModified: string;
  /** 每篇文章獨立封面；無適合素材時省略，勿與其他文章共用 */
  coverImage?: string;
  coverImageAlt?: string;
  excerpt: string;
  content: readonly ArticleContentBlock[];
  relatedServices: readonly ArticleRelatedService[];
  experienceSection?: ArticleExperienceSection;
};
