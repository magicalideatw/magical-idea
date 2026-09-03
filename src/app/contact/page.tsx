import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ServiceInformationSection from "@/components/ServiceInformationSection";
import { contactServiceInfo } from "@/lib/service-info/contact-service-info";
import { brandHeading, createPageMetadata } from "@/lib/seo";

const PATH = "/contact";

const TITLE = "聯絡我們｜魔術表演詢價與預約｜魔幻點子表演娛樂";

const DESCRIPTION =
  "聯絡魔幻點子表演娛樂，為企業尾牙、春酒、家庭日、校園活動、婚宴或政府活動預約專業魔術表演，我們將在 24 小時內回覆。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "聯絡魔幻點子表演娛樂預約魔術表演",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Contact Us"
              title={brandHeading("聯絡我們")}
              titleAs="h1"
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

      <ServiceInformationSection content={contactServiceInfo} />
    </>
  );
}
