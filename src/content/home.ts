import type { EventSummary, Leader, Milestone, Stat, Testimony, UpdateSummary } from "./types";

/** Years of ministry, calculated from the founding date so it never goes stale. */
export function yearsOfMinistry(today = new Date()): number {
  const founded = new Date("1960-05-12T00:00:00Z");
  let years = today.getUTCFullYear() - founded.getUTCFullYear();
  const beforeAnniversary =
    today.getUTCMonth() < founded.getUTCMonth() ||
    (today.getUTCMonth() === founded.getUTCMonth() && today.getUTCDate() < founded.getUTCDate());
  if (beforeAnniversary) years -= 1;
  return years;
}

export const stats: Stat[] = [
  { value: "1960", label: "Founded in Bindura, Zimbabwe" },
  { value: "148+", label: "Nations and states" },
  { value: String(yearsOfMinistry()), label: "Years of ministry, calculated from the founding date" },
  { value: null, label: "Assemblies worldwide: shown only once verified", note: "ASSEMBLY COUNT" },
];

export const regions = ["Africa", "Europe", "Asia", "North America", "South America", "Oceania"];

export const milestones: Milestone[] = [
  { year: "1923", text: "Ezekiel Guti is born, 5 May" },
  { year: "1948", text: "Begins preaching the gospel" },
  { year: "1960", text: "The ministry is founded in Bindura, 12 May" },
  { year: "1991", text: "Missionaries sent to the nations" },
  { year: "2023", text: "Homegoing of Archbishop Ezekiel Guti, 5 July" },
];

export const leaders: Leader[] = [
  { name: "Archbishop Dr. Joseph Joe Guti", role: "International Executive Chairman", photo: null, href: "/leadership" },
  { name: "Senior Archbishop Eunor Guti", role: null, photo: null, href: "/leadership" },
  { name: "Bishop Mishael Nyambo", role: "Secretary General", photo: null, href: "/leadership" },
  { name: "Bishop Steve Simukai", role: "Deputy Secretary General", photo: null, href: "/leadership" },
];

export const ministryTags = ["Missions", "Youth", "Women: Go Quickly and Tell", "Church planting", "Conferences", "Evangelism", "Education"];

export const events: EventSummary[] = [
  { title: null, type: null, dates: null, place: null, host: null, status: "Registration open", href: "/events" },
  { title: null, type: null, dates: null, place: "Online", host: null, status: "Free, no registration", href: "/events" },
  { title: null, type: null, dates: null, place: null, host: null, status: "Registration closing soon", href: "/events" },
];

export const latestUpdate: UpdateSummary = {
  week: 45,
  published: "2026-11-19",
  title: "Woman Arise Conference in Westgate Province, conferences in India and Mozambique, and a prison outreach in Mutare",
  highlights: [
    "Westgate Province, Woman Arise Conference, 12 to 15 November",
    "Blind and Sighted conference, 12 to 15 November",
    "Gutu crusade, 5 to 8 November",
  ],
  countries: ["Zimbabwe", "Chad", "Russia", "Spain", "India", "Mozambique", "Thailand"],
  href: "/apostles-updates/2026/week-45",
};

/** Titles only: names and photos are shown only with written consent. */
export const testimonies: Testimony[] = [
  { theme: "Healing", title: "Came in on crutches, but began running", href: "/testimonies" },
  { theme: "Family", title: "Twenty years without a child", href: "/testimonies" },
  { theme: "Healing", title: "A major stroke became minor after prayer", href: "/testimonies" },
];

export const generations = ["Children", "Young Generation", "Youth", "Young Adults", "Women", "Men", "Couples and Families", "Missions"];

/** Live state comes from the broadcast schedule in the CMS; offline until a stream is confirmed. */
export const broadcast = { isLive: false, nextBroadcast: null as string | null };
