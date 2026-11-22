import type { NavItem, Office } from "./types";

export const org = {
  officialName: "ZAOGA Forward In Faith Ministries International",
  shortName: "Forward in Faith",
  alternateNames: ["FIFMI", "ZAOGA FIF", "Forward in Faith Ministries International"],
  mission: "Taking the gospel of Jesus Christ to all nations and making true disciples.",
  founded: "1960-05-12",
  foundingPlace: "Bindura, Zimbabwe",
  headOfficePhone: "+263 8677 004035",
  reach: "148+",
} as const;

export const mainNav: NavItem[] = [
  { label: "Jesus", href: "/jesus" },
  { label: "I'm New", href: "/im-new" },
  { label: "Watch", href: "/watch" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Our Story", href: "/our-story" },
  { label: "Apostles Updates", href: "/apostles-updates" },
];

export const primaryActions = {
  findChurch: { label: "Find a Church", href: "/find-a-church" },
  give: { label: "Give", href: "/give" },
};

export const utilityNav: NavItem[] = [
  { label: "Prayer", href: "/prayer" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Quick actions",
    links: [
      { label: "Find a Church", href: "/find-a-church" },
      { label: "Watch", href: "/watch" },
      { label: "Jesus", href: "/jesus" },
      { label: "Events", href: "/events" },
      { label: "Prayer", href: "/prayer" },
      { label: "Give", href: "/give" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "About", href: "/our-story" },
      { label: "Leadership", href: "/leadership" },
      { label: "Beliefs", href: "/our-story/beliefs" },
      { label: "History", href: "/our-story#timeline" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Apostles Updates", href: "/apostles-updates" },
      { label: "Testimonies", href: "/testimonies" },
      { label: "News", href: "/news" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Safeguarding", href: "/safeguarding" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

/** Offices as listed in the current site footer. */
export const offices: Office[] = [
  { country: "Zimbabwe", label: "Zimbabwe (Headquarters)", address: "13A Powell Rd, Waterfalls, Harare", phone: "+263 8677 004035" },
  { country: "South Africa", label: "South Africa", address: "30 Premier Road, Clayville Ext 3, Olifantsfontein", phone: "+27 11 316 6729" },
  { country: "United Kingdom", label: "United Kingdom", address: "58 Hainge Road, Tividale, West Midlands, B69 2PD", phone: "+44 121 557 6508" },
  { country: "United States", label: "United States", address: "1001 North Davis Drive, Arlington, TX 76012", phone: "+1 (972) 251-9408" },
  { country: "Australia", label: "Australia", address: "5-7 Swettenham Road, Minto, NSW 2566", phone: "+61 (2) 7252 2422" },
];
