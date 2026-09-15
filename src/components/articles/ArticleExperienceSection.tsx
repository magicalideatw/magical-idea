import Image from "next/image";
import type { ArticleExperienceSection as ExperienceSectionData } from "@/lib/articles/types";

type ArticleExperienceSectionProps = {
  section: ExperienceSectionData;
};

export default function ArticleExperienceSection({
  section,
}: ArticleExperienceSectionProps) {
  return (
    <section
      aria-labelledby="article-experience"
      className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08]"
    >
      <h2
        id="article-experience"
        className="font-display text-xl text-white/90 tracking-premium mb-4"
      >
        <span className="gold-gradient-text">{section.title}</span>
      </h2>
      <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
        {section.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {section.images.map((image) => (
          <figure
            key={image.src + image.alt}
            className="overflow-hidden rounded-xl border border-white/[0.06]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={500}
              className="w-full h-auto"
              sizes="(max-width: 820px) 100vw, 400px"
              loading="lazy"
            />
            {image.caption ? (
              <figcaption className="px-4 py-3 text-white/40 text-xs sm:text-sm leading-relaxed">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
