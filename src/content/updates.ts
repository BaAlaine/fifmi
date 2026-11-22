import type { Verified } from "@/lib/cms";

export type UpdateSection = { title: string; meta: Verified<string>; text: Verified<string> };

export type ApostlesUpdate = {
  week: number;
  year: number;
  slug: string;
  published: string;
  title: string;
  summary: Verified<string>;
  sections: UpdateSection[];
  countries: string[];
};

export const updates: ApostlesUpdate[] = [
  {
    week: 45,
    year: 2026,
    slug: "week-45",
    published: "2026-11-19",
    title: "Woman Arise Conference in Westgate Province, conferences in India and Mozambique, and a prison outreach in Mutare",
    summary: null,
    sections: [
      { title: "Woman Arise Conference", meta: "Westgate Province · 12 to 15 November 2026", text: null },
      { title: "Blind and Sighted conference", meta: "12 to 15 November 2026", text: null },
      { title: "Gutu crusade", meta: "Gutu, Zimbabwe · 5 to 8 November 2026", text: null },
    ],
    countries: ["Zimbabwe", "Chad", "Russia", "Spain", "India", "Mozambique", "Thailand"],
  },
];

export function updateHref(u: Pick<ApostlesUpdate, "year" | "slug">) {
  return `/apostles-updates/${u.year}/${u.slug}`;
}

export const dateLong = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
