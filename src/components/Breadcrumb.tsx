import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="麵包屑導覽"
      className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-4"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-white/40">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-white/20 shrink-0" />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold/70" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
