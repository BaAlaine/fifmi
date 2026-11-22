import { offices, org } from "@/content/site";
import { siteUrl } from "./cms";

/** Site-wide JSON-LD. Only verified values are included. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ReligiousOrganization"],
        "@id": `${siteUrl}/#organization`,
        name: org.officialName,
        alternateName: org.alternateNames,
        url: siteUrl,
        foundingDate: org.founded,
        foundingLocation: { "@type": "Place", name: org.foundingPlace },
        telephone: org.headOfficePhone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "13A Powell Rd, Waterfalls",
          addressLocality: "Harare",
          addressCountry: "ZW",
        },
        department: offices.slice(1).map((o) => ({ "@type": "Organization", name: `${org.officialName}, ${o.country}`, telephone: o.phone, address: o.address })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: org.officialName,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}
