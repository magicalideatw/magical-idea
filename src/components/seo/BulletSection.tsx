import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

type BulletSectionProps = {
  title: string;
  subtitle?: string;
  items: string[];
  align?: "center" | "left";
};

export default function BulletSection({
  title,
  subtitle,
  items,
  align = "left",
}: BulletSectionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading align={align} title={title} description={subtitle} />
        </AnimatedSection>
        <ul className={`max-w-3xl space-y-4 ${align === "center" ? "mx-auto" : ""}`}>
          {items.map((item, index) => (
            <AnimatedSection key={item} delay={index * 0.05}>
              <li className="flex items-start gap-3 text-white/50 text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                {item}
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
