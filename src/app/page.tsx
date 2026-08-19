import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import HomeServices from "@/components/HomeServices";
import FeaturedVideo from "@/components/FeaturedVideo";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeFaq from "@/components/HomeFaq";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQ_ITEMS } from "@/lib/home-faq";
import { buildFaqPageJsonLd } from "@/lib/seo";

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
      <PricingSection />
      <HomeServices />
      <FeaturedVideo />
      <WhyChooseUs />
      <HomeFaq />
      <HomeFinalCTA />
    </>
  );
}
