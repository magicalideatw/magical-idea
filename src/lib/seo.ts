import { SITE } from "./constants";

export const SITE_URL = "https://www.magical-idea.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-magic.jpg`;

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE_URL,
    email: SITE.email,
  };
}

export function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImageAlt = "魔幻點子表演娛樂魔術演出",
}: PageSeoInput): import("next").Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: "zh_TW",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 4894,
          height: 3263,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

type JsonLdGraphInput = {
  path: string;
  title: string;
  description: string;
  serviceName: string;
  breadcrumbs: { name: string; path?: string }[];
  faq?: { question: string; answer: string }[];
  offers?: readonly { name: string; price: number }[];
  areaServed?: readonly { type: string; name: string }[];
};

function buildOffersSchema(
  providerId: string,
  offers: readonly { name: string; price: number }[],
) {
  return offers.map((offer) => ({
    "@type": "Offer",
    name: offer.name,
    price: offer.price,
    priceCurrency: "TWD",
    offeredBy: { "@id": providerId },
  }));
}

export function buildSeoPageJsonLd({
  path,
  title,
  description,
  serviceName,
  breadcrumbs,
  faq = [],
  offers,
  areaServed,
}: JsonLdGraphInput) {
  const pageUrl = `${SITE_URL}${path}`;
  const organization = getOrganizationSchema();
  const serviceOffers = offers
    ? buildOffersSchema(organization["@id"] as string, offers)
    : getPricingOffersSchema(organization["@id"] as string);

  const graph: Record<string, unknown>[] = [
    organization,
    getWebsiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${pageUrl}/#service` },
      inLanguage: "zh-TW",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: serviceName,
      description,
      provider: { "@id": organization["@id"] },
      areaServed: areaServed?.length
        ? areaServed.map((area) => ({ "@type": area.type, name: area.name }))
        : { "@type": "Country", name: "Taiwan" },
      offers: serviceOffers,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.path ? { item: `${SITE_URL}${item.path}` } : { item: pageUrl }),
      })),
    },
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export const PRICING_DISCLAIMER =
  "以上為各類演出的起始價格，實際費用將依活動日期、地點、演出時間、演出形式、活動規模及製作需求評估。";

export const PRICING_OFFERS = [
  { name: "近距離魔術", price: 10000 },
  { name: "舞台魔術｜約 15 分鐘", price: 15000 },
  { name: "舞台魔術｜約 20–30 分鐘", price: 20000 },
] as const;

function getPricingOffersSchema(providerId: string) {
  return PRICING_OFFERS.map((offer) => ({
    "@type": "Offer",
    name: offer.name,
    price: offer.price,
    priceCurrency: "TWD",
    offeredBy: { "@id": providerId },
  }));
}

export const COOPERATION_STEPS = [
  {
    step: "01",
    title: "提供活動資訊",
    description: "透過詢價表單或 LINE 提供活動日期、地點、預計人數與需求。",
  },
  {
    step: "02",
    title: "討論演出方案",
    description: "依活動流程、場地條件與預算方向，確認適合的演出形式。",
  },
  {
    step: "03",
    title: "確認報價",
    description: "提供演出內容、時間與費用說明，雙方確認合作細節。",
  },
  {
    step: "04",
    title: "安排演出",
    description: "確認檔期後進行演出準備，活動當日依流程進行表演。",
  },
] as const;

export const SEO_NAV_LINKS = [
  { href: "/events/annual-dinner", label: "尾牙魔術" },
  { href: "/services/stage-magic", label: "舞台魔術" },
  { href: "/pricing", label: "演出費用" },
  { href: "/lighting-sound", label: "燈光音響" },
] as const;
