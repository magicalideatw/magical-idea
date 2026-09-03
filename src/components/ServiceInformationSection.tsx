import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceInfoContent, ServiceInfoLink } from "@/lib/service-info/types";

type ServiceInformationSectionProps = {
  content: ServiceInfoContent;
};

function InfoLink({ label, href }: ServiceInfoLink) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors duration-300"
    >
      {label}
      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
    </Link>
  );
}

function InfoBlock({
  title,
  paragraphs,
  links,
  faqs,
}: {
  title: string;
  paragraphs?: readonly string[];
  links?: readonly ServiceInfoLink[];
  faqs?: readonly { question: string; answer: string }[];
}) {
  return (
    <article>
      <h3 className="font-display text-base sm:text-lg text-white/85 mb-3 sm:mb-4 tracking-premium leading-snug">
        <span className="gold-gradient-text">{title}</span>
      </h3>
      {paragraphs && paragraphs.length > 0 ? (
        <div className="space-y-3">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-white/45 text-sm sm:text-[0.9375rem] leading-relaxed font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {faqs && faqs.length > 0 ? (
        <div className="space-y-5 mt-1">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h4 className="font-display text-sm sm:text-[0.9375rem] text-white/70 mb-2 tracking-premium leading-snug">
                {faq.question}
              </h4>
              <p className="text-white/45 text-sm sm:text-[0.9375rem] leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      ) : null}
      {links && links.length > 0 ? (
        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6">
          {links.map((link) => (
            <InfoLink key={link.href + link.label} {...link} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ServiceInformationSection({
  content,
}: ServiceInformationSectionProps) {
  const sectionId = `service-info-${content.title.slice(0, 8)}`;

  return (
    <section
      aria-labelledby={sectionId}
      className="border-t border-white/[0.08] bg-surface section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <header className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
          <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-4 sm:mb-5">
            活動演出與服務資訊
          </p>
          <h2
            id={sectionId}
            className="font-display text-xl sm:text-2xl md:text-[1.625rem] font-medium tracking-tight leading-snug mb-5 sm:mb-6"
          >
            <span className="gold-gradient-text">{content.title}</span>
          </h2>
          <div className="space-y-3">
            {content.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-white/45 text-sm sm:text-[0.9375rem] leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-x-10 lg:gap-y-14">
          {content.sections.map((section) => (
            <InfoBlock
              key={section.title}
              title={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
              faqs={section.faqs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
