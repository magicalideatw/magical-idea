import type { Article } from "../types";

export const eventAudioPrice: Article = {
  slug: "event-audio-price",
  title: "活動音響租借價格怎麼算？架設與撤場時間也要算嗎？",
  metaTitle:
    "活動音響租借價格怎麼算？架設撤場時間說明｜魔幻點子表演娛樂",
  description:
    "活動音響費用如何評估？說明基本服務時數、架設與撤場時間如何計入，以及影響報價的常見因素。",
  categoryId: "lighting-sound",
  datePublished: "2026-01-08T08:00:00+08:00",
  dateModified: "2026-03-14T08:00:00+08:00",
  coverImage: "/images/outdoor-event-lighting-sound.jpg",
  coverImageAlt: "戶外活動現場的燈光與音響整體配置",
  excerpt:
    "活動音響報價常見「4 小時服務」是什麼意思？架設與撤場是否另計？本文說明完整服務時間的概念，避免誤解。",
  relatedServices: [
    {
      label: "活動燈光音響",
      href: "/lighting-sound",
      description: "音響、燈光方案起始價格與服務時間說明",
    },
    {
      label: "演出費用",
      href: "/pricing",
      description: "魔術演出費用參考",
    },
    {
      label: "聯絡詢價",
      href: "/contact",
      description: "提供活動資訊以確認報價",
    },
  ],
  content: [
    {
      type: "p",
      text: "詢問活動音響租借價格時，常會看到「NT$5,000 起／4 小時」這類方案。容易產生的誤解是：以為這 4 小時全部都是「活動進行時間」。實務上，專業報價通常指的是「完整服務時間」，其中包含架設、活動執行與撤場。",
    },
    {
      type: "h2",
      text: "完整服務時間包含哪些部分",
    },
    {
      type: "p",
      text: "現場音響工作需要提前到場架設、接線、測試音量與麥克風，活動結束後還需撤收設備。因此方案中的基本時數，一般已涵蓋架設與撤場各約 1 小時（實際仍依場地與設備量調整），中間才是活動使用時段。",
    },
    {
      type: "h2",
      text: "舉例：活動 2 小時與 6 小時",
    },
    {
      type: "ul",
      items: [
        "活動 2 小時 → 約 4 小時服務（架設約 1 小時＋活動 2 小時＋撤場約 1 小時）",
        "活動 6 小時 → 約 8 小時服務（架設約 1 小時＋活動 6 小時＋撤場約 1 小時）",
      ],
    },
    {
      type: "p",
      text: "實際時間會因場地進場限制、電梯與動線、設備數量而有所不同。詢價時提供準確的活動起訖與進場時間，報價會更貼近現場。",
    },
    {
      type: "inline-link",
      before: "詳細方案與服務時間說明可參考",
      linkLabel: "活動燈光音響",
      href: "/lighting-sound",
      after: "頁面的服務方案區塊。",
    },
    {
      type: "h2",
      text: "還有哪些因素會影響價格",
    },
    {
      type: "ul",
      items: [
        "設備規模：喇叭數量、混音通道、無線麥克風支數",
        "是否整合燈光或需額外技術人員",
        "活動地點與交通、搬運條件",
        "特殊日期或時段（如跨年、連假、深夜跨夜）",
      ],
    },
    {
      type: "p",
      text: "特殊日期或時段可能另行評估費用，不應在未了解活動細節前就假設固定加價比例。以實際需求詢價最準確。",
    },
    {
      type: "h2",
      text: "與魔術演出一起規劃",
    },
    {
      type: "p",
      text: "若活動同時有舞台魔術或主持節目，音響需求常與演出內容綁在一起。可在同一窗口提供演出與設備需求，減少分開溝通造成的落差。",
    },
  ],
};
