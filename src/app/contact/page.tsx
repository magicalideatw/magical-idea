import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: `聯絡 ${SITE.name}，為您的企業尾牙、婚宴、校園或家庭日活動預約專業魔術表演。`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Contact Us"
              title="聯絡我們"
              description="填寫以下表單或直接透過 LINE 與我們聯繫，我們將在 24 小時內回覆您的詢價需求。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
