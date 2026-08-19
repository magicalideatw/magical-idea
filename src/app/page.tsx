import Hero from "@/components/Hero";
import HomeServiceIntro from "@/components/HomeServiceIntro";
import HomeServices from "@/components/HomeServices";
import PricingSection from "@/components/PricingSection";
import HomeCasesPreview from "@/components/HomeCasesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeFaq from "@/components/HomeFaq";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQ_ITEMS } from "@/lib/home-faq";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/home-seo";
import { buildFaqPageJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  ogImageAlt: "舞台魔術與活動魔術表演現場",
});

export default function HomePage() {
  const faqJsonLd = buildFaqPageJsonLd(
    HOME_FAQ_ITEMS.map((item) => ({
      question: item.question,
      answer: item.plainAnswer,
    })),
  );

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <Hero />
      <HomeServiceIntro />
      <HomeServices />
      <PricingSection />
      <HomeCasesPreview />
      <WhyChooseUs />
      <HomeFaq />
      <HomeFinalCTA />
    </>
  );
}
