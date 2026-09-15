import type { Metadata } from "next";
import type { Article } from "./types";
import {
  DEFAULT_OG_IMAGE,
  getOrganizationSchema,
  SITE_URL,
} from "@/lib/seo";
import { SITE } from "@/lib/constants";

function articleImageUrl(coverImage: string): string {
  if (coverImage.startsWith("http")) {
    return coverImage;
  }
  return `${SITE_URL}${coverImage}`;
}

function resolveArticleShareImage(article: Article): {
  url: string;
  alt: string;
} {
  if (article.coverImage) {
    return {
      url: articleImageUrl(article.coverImage),
      alt: article.coverImageAlt ?? article.title,
    };
  }
  return {
    url: DEFAULT_OG_IMAGE,
    alt: "魔幻點子表演娛樂魔術演出",
  };
}

export function createArticleMetadata(article: Article): Metadata {
  const path = `/articles/${article.slug}`;
  const url = `${SITE_URL}${path}`;
  const shareImage = resolveArticleShareImage(article);

  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    authors: [{ name: SITE.name }],
    publisher: SITE.name,
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      url,
      locale: "zh_TW",
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [
        {
          url: shareImage.url,
          alt: shareImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: [shareImage.url],
    },
  };
}

export function buildArticleJsonLd(article: Article) {
  const path = `/articles/${article.slug}`;
  const pageUrl = `${SITE_URL}${path}`;
  const organization = getOrganizationSchema();
  const orgId = organization["@id"] as string;
  const shareImage = resolveArticleShareImage(article);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        "@id": `${pageUrl}/#article`,
        headline: article.title,
        description: article.description,
        image: [shareImage.url],
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
          "@type": "Organization",
          "@id": orgId,
          name: SITE.name,
        },
        publisher: {
          "@type": "Organization",
          "@id": orgId,
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_OG_IMAGE,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        inLanguage: "zh-TW",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首頁",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "活動指南",
            item: `${SITE_URL}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
