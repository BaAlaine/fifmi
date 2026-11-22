import type { Verified } from "@/lib/cms";

export type Person = { name: string; role: Verified<string>; bio: Verified<string> };

export const chairman: Person = {
  name: "Archbishop Dr. Joseph Joe Guti",
  role: "International Executive Chairman",
  bio: null,
};

export const seniorLeaders: Person[] = [
  { name: "Senior Archbishop Eunor Guti", role: null, bio: null },
  { name: "Apostle Nyasha Miriam Guti", role: null, bio: null },
  { name: "Bishop Mishael Nyambo", role: "Secretary General", bio: null },
  { name: "Bishop Steve Simukai", role: "Deputy Secretary General", bio: null },
];

/** Only leaders confirmed by the Secretary General's office. */
export const ministryLeaders: Person[] = [
  { name: "Pastor Leticia Nyambo", role: null, bio: null },
  { name: "Dr La-Verne Simukai", role: "International Director, Go Quickly & Tell", bio: null },
];

export const regionsWithOverseers = ["Africa", "Europe", "The Americas", "Asia", "Oceania"];
