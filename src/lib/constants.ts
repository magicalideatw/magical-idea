export const SITE = {
  name: "魔幻點子表演娛樂",
  nameEn: "Magical Idea Entertainment",
  tagline: "國際級魔術表演 × 活動娛樂規劃",
  description:
    "魔幻點子表演娛樂提供企業尾牙、春酒、家庭日、校園演出、婚宴及政府活動的專業魔術表演服務。",
  lineUrl: "https://line.me/R/ti/p/@hwg7469v",
  lineDisplay: "@hwg7469v",
  email: "（待更新）",
} as const;

export const EXPERIENCES = [
  {
    title: "FISM 世界魔術大賽台灣代表",
    description: "代表台灣站上世界魔術協會最高殿堂，展現國際級表演實力。",
  },
  {
    title: "Magic Castle 特別獎",
    description: "於好萊塢傳奇魔術城堡 Magic Castle 獲得特別獎肯定。",
  },
  {
    title: "超過 20 年表演經驗",
    description: "累積豐富的企業、學校、政府及婚宴演出實戰經驗。",
  },
  {
    title: "國際魔術競賽得獎",
    description: "多次於國際魔術競賽中獲獎，技藝備受肯定。",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  { href: "/services", label: "演出項目" },
  { href: "/videos", label: "演出影片" },
  { href: "/cases", label: "客戶案例" },
  { href: "/contact", label: "聯絡我們" },
] as const;

export const SERVICES = [
  {
    id: "stage",
    title: "舞台魔術秀",
    description:
      "大型舞台視覺效果，結合燈光音響與互動設計，打造震撼全場的開場或壓軸演出。",
    icon: "sparkles",
  },
  {
    id: "corporate",
    title: "尾牙春酒演出",
    description:
      "為企業年度盛會量身規劃，融合頒獎、抽獎與魔術互動，提升活動高潮與團隊凝聚力。",
    icon: "building",
  },
  {
    id: "family",
    title: "企業家庭日",
    description:
      "親子同樂的互動魔術體驗，適合企業家庭日、園遊會，讓大小朋友都沉浸其中。",
    icon: "users",
  },
  {
    id: "campus",
    title: "校園活動",
    description:
      "結合教育與娛樂的校園魔術秀，適合開學典禮、畢業典禮、社團活動與校園慶典。",
    icon: "graduation",
  },
  {
    id: "wedding",
    title: "婚宴魔術",
    description:
      "為婚禮增添浪漫與驚喜，以精緻魔術為新人與賓客創造難忘的幸福時刻。",
    icon: "heart",
  },
  {
    id: "table",
    title: "沿桌魔術",
    description:
      "近距離互動魔術，於宴會桌間穿梭演出，為婚宴、餐會創造難忘的親密驚喜。",
    icon: "wand",
  },
] as const;

export const CLIENT_CASES = [
  {
    client: "科技業龍頭企業",
    event: "年度尾牙晚會",
    type: "舞台魔術 × 互動抽獎",
    year: "2025",
  },
  {
    client: "知名大學",
    event: "畢業典禮開場演出",
    type: "大型舞台魔術",
    year: "2024",
  },
  {
    client: "政府機關",
    event: "國際交流晚宴",
    type: "沿桌魔術 × 舞台秀",
    year: "2024",
  },
  {
    client: "五星級飯店",
    event: "婚宴魔術表演",
    type: "婚宴魔術",
    year: "2025",
  },
  {
    client: "外商企業",
    event: "家庭日嘉年華",
    type: "互動魔術 × 街頭表演",
    year: "2025",
  },
  {
    client: "上市櫃公司",
    event: "春酒晚宴",
    type: "舞台魔術 × 頒獎主持",
    year: "2024",
  },
] as const;

export const VIDEOS = [
  {
    id: "1",
    title: "舞台大型魔術精選",
    description: "企業尾牙開場演出精彩片段",
    thumbnail:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "沿桌魔術互動秀",
    description: "婚宴與餐會近距離魔術體驗",
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "校園魔術專場",
    description: "教育結合娛樂的校園演出",
    thumbnail:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "FISM 世界魔術大賽",
    description: "國際賽事參賽精彩回顧",
    thumbnail:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
    alt: "舞台魔術表演現場",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    alt: "活動現場燈光效果",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    alt: "近距離互動魔術",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    alt: "大型舞台演出",
  },
  {
    src: "https://images.unsplash.com/photo-1429962710661-db691f1c75df?w=1200&q=80",
    alt: "宴會沿桌魔術",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    alt: "企業活動演出",
  },
] as const;
