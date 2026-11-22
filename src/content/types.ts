import type { Verified } from "@/lib/cms";

/** Shapes mirror the planned Payload collections, so the static files can be swapped for CMS queries. */

export type NavItem = { label: string; href: string };

export type Office = {
  country: string;
  label: string;
  address: string;
  phone: string;
};

export type Leader = {
  name: string;
  role: Verified<string>;
  photo: Verified<string>;
  href: string;
};

export type Milestone = { year: string; text: string };

export type Stat = { value: Verified<string>; label: string; note?: string };

export type EventSummary = {
  title: Verified<string>;
  type: Verified<string>;
  dates: Verified<string>;
  place: Verified<string>;
  host: Verified<string>;
  status: string;
  href: string;
};

export type UpdateSummary = {
  week: number;
  published: string; // ISO date
  title: string;
  highlights: string[];
  countries: string[];
  href: string;
};

export type Testimony = { theme: string; title: string; href: string };
