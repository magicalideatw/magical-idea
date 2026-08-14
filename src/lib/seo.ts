import { SITE } from "./constants";

export const SITE_URL = "https://www.magical-idea.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-magic.jpg`;

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE_URL,
    email: SITE.email,
  };
}
