export const HOME_TITLE = "魔術表演｜舞台魔術與活動演出｜魔幻點子";

export const HOME_DESCRIPTION =
  "魔幻點子提供舞台魔術、沿桌魔術與各類活動魔術演出，適合企業活動、尾牙春酒、婚宴、校園及各類活動，依活動形式與需求規劃專業魔術表演。";

export const HOME_HERO_SUBTITLE =
  "舞台魔術｜沿桌魔術｜企業活動｜婚宴｜校園｜尾牙春酒";

export const HOME_INTRO_SERVICES = [
  {
    title: "舞台魔術",
    description: "全場聚焦的舞台演出，適合開場或壓軸節目。",
    href: "/services/stage-magic",
  },
  {
    title: "沿桌魔術",
    description: "宴會桌間互動，適合婚宴與餐會。",
    href: "/services",
  },
  {
    title: "企業活動",
    description: "家庭日、品牌活動與員工聚會。",
    href: "/services",
  },
  {
    title: "婚宴活動",
    description: "依婚禮流程安排驚喜橋段。",
    href: "/services",
  },
  {
    title: "校園活動",
    description: "校慶、畢業與社團演出。",
    href: "/services",
  },
  {
    title: "尾牙春酒",
    description: "企業尾牙與春酒重點節目。",
    href: "/year-end-party",
  },
] as const;

export const HOME_ACTIVITY_SERVICES = [
  {
    id: "stage",
    title: "舞台魔術",
    suitable: "尾牙、企業晚會、舞台節目、公開活動",
    href: "/services/stage-magic",
    icon: "sparkles" as const,
  },
  {
    id: "table",
    title: "沿桌魔術",
    suitable: "婚宴、餐會、VIP 晚宴、雞尾酒會",
    href: "/services",
    icon: "wand" as const,
  },
  {
    id: "corporate",
    title: "企業活動魔術",
    suitable: "家庭日、品牌活動、員工活動、週年慶",
    href: "/services",
    icon: "building" as const,
  },
  {
    id: "wedding",
    title: "婚宴魔術",
    suitable: "婚禮宴會、訂婚宴、歸寧宴",
    href: "/services",
    icon: "heart" as const,
  },
  {
    id: "campus",
    title: "校園活動魔術",
    suitable: "校慶、畢業典禮、社團活動、校園慶典",
    href: "/services",
    icon: "graduation" as const,
  },
  {
    id: "year-end",
    title: "尾牙春酒魔術",
    suitable: "企業尾牙、春酒、年終聚餐、企業晚會",
    href: "/year-end-party",
    icon: "calendar" as const,
  },
] as const;

export const HOME_CASES_PREVIEW_COUNT = 3;
