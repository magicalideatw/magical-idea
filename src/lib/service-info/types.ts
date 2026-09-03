export type ServiceInfoLink = {
  label: string;
  href: string;
};

export type ServiceInfoFaqItem = {
  question: string;
  answer: string;
};

export type ServiceInfoSection = {
  title: string;
  paragraphs?: readonly string[];
  links?: readonly ServiceInfoLink[];
  faqs?: readonly ServiceInfoFaqItem[];
};

export type ServiceInfoContent = {
  title: string;
  intro: readonly string[];
  sections: readonly ServiceInfoSection[];
};
