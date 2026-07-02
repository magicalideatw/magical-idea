import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.nameEn}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "魔術表演",
    "企業尾牙",
    "春酒",
    "家庭日",
    "校園演出",
    "沿桌魔術",
    "婚宴魔術",
    "FISM",
    "Magic Castle",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSansTC.variable} ${notoSerifTC.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLineButton />
      </body>
    </html>
  );
}
