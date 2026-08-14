import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import HomeServices from "@/components/HomeServices";
import FeaturedVideo from "@/components/FeaturedVideo";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeFinalCTA from "@/components/HomeFinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <HomeServices />
      <FeaturedVideo />
      <WhyChooseUs />
      <HomeFinalCTA />
    </>
  );
}
