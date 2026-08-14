"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { SEO_NAV_LINKS } from "@/lib/seo";

const MOBILE_MENU_LINKS = [...NAV_LINKS, ...SEO_NAV_LINKS];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const scrollLockY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
    if (latest > lastScrollY.current && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      scrollLockY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollLockY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollLockY.current);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !isOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
          scrolled || isOpen
            ? "glass border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-[72px]">
            <Link href="/" className="group">
              <span className="font-en text-gold/50 text-[10px] tracking-luxury uppercase hidden sm:block mb-0.5">
                {SITE.nameEn}
              </span>
              <span className="font-display text-base sm:text-lg md:text-xl text-white/90 group-hover:text-gold transition-colors duration-500 tracking-premium">
                {SITE.name}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-en tracking-wide transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-white/50 hover:text-white/90"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0.5 left-4 right-4 h-px bg-gold/80"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              {SEO_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-[12px] font-en tracking-wide transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-5 px-5 py-2 text-[13px] font-en tracking-wide text-gold border border-gold/25 rounded-full hover:bg-gold/10 hover:border-gold/40 transition-all duration-500"
              >
                立即詢價
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 -mr-2 text-white/70 hover:text-gold transition-colors"
              aria-label="開啟選單"
              aria-expanded={isOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="網站選單"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[9999] flex flex-col bg-[#030303]"
            style={{
              height: "100dvh",
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="flex shrink-0 items-center justify-between h-14 sm:h-16 px-5 sm:px-8 border-b border-white/[0.06] bg-[#030303]">
              <Link
                href="/"
                onClick={closeMenu}
                className="group min-w-0"
              >
                <span className="font-en text-gold/50 text-[10px] tracking-luxury uppercase hidden sm:block mb-0.5">
                  {SITE.nameEn}
                </span>
                <span className="font-display text-base sm:text-lg text-white/90 group-hover:text-gold transition-colors duration-500 tracking-premium">
                  {SITE.name}
                </span>
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="shrink-0 p-2.5 -mr-2 text-white/70 hover:text-gold transition-colors"
                aria-label="關閉選單"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {MOBILE_MENU_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  const isSeoLink = SEO_NAV_LINKS.some(
                    (seoLink) => seoLink.href === link.href,
                  );

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.04,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block w-full py-4 font-display border-b border-white/[0.06] transition-colors ${
                          isSeoLink
                            ? "text-xl sm:text-2xl"
                            : "text-2xl sm:text-3xl"
                        } ${isActive ? "text-gold" : "text-white/70 hover:text-white/90"}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mt-8 pb-6"
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block py-4 text-center btn-primary w-full justify-center text-base"
                  >
                    立即詢價
                  </Link>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
