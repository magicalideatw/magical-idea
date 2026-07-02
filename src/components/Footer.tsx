import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-xl sm:text-2xl gold-gradient-text mb-2 tracking-premium">
              {SITE.name}
            </p>
            <p className="font-en text-white/30 text-[10px] sm:text-xs tracking-luxury uppercase mb-5">
              {SITE.nameEn}
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              專業魔術表演 × 活動娛樂規劃
              <br />
              服務企業、學校、政府及婚宴客戶
            </p>
          </div>

          <div>
            <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-5">
              Links
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/40">
              <li>LINE：{SITE.lineDisplay}</li>
              <li>Email：{SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-en text-white/20 text-[11px] tracking-wide">
            © {new Date().getFullYear()} {SITE.nameEn}. All rights reserved.
          </p>
          <p className="font-en text-white/20 text-[11px] tracking-wide">
            Crafted with precision ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
