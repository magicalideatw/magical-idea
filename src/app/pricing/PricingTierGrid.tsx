"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PRICING_DISCLAIMER } from "@/lib/seo";

const PRICING_TIERS = [
  { title: "近距離魔術", price: "NT$10,000 起" },
  { title: "舞台魔術｜約 15 分鐘", price: "NT$15,000 起" },
  { title: "舞台魔術｜約 20–30 分鐘", price: "NT$20,000 起" },
  {
    title: "企業／大型活動",
    price: "依活動規模、演出時間與製作需求報價",
  },
  { title: "客製化演出", price: "依演出內容與製作需求報價" },
] as const;

function getGridItemClass(index: number) {
  if (index < 3) {
    return "lg:col-span-2";
  }
  if (index === 3) {
    return "lg:col-span-2 lg:col-start-2";
  }
  return "lg:col-span-2 lg:col-start-4";
}

function isFixedPrice(price: string) {
  return price.startsWith("NT$");
}

export default function PricingTierGrid() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            align="left"
            title="演出價格"
            description="專業魔術演出｜NT$10,000 起"
          />
        </AnimatedSection>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
          {PRICING_TIERS.map((tier, index) => (
            <AnimatedSection
              key={tier.title}
              delay={index * 0.06}
              className={`h-full min-w-0 w-full ${getGridItemClass(index)}`}
            >
              <article className="flex h-full w-full min-w-0 flex-col rounded-xl border border-gold/10 bg-black/30 px-5 py-8 sm:px-7 sm:py-10">
                <h2 className="mb-4 font-display text-lg leading-relaxed tracking-premium text-white/90 sm:text-xl">
                  {tier.title}
                </h2>
                <p
                  className={`font-light leading-relaxed text-gold/80 break-words ${
                    isFixedPrice(tier.price)
                      ? "text-xl sm:text-2xl"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {tier.price}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/45 sm:mt-10 sm:text-base">
            {PRICING_DISCLAIMER}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
