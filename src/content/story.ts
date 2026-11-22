import type { Verified } from "@/lib/cms";
import type { Milestone } from "./types";

export const historyNarrative: Verified<string> = null; // The two current site versions differ; awaiting the ministry's approved account.

export const founder = {
  name: "Archbishop Professor Ezekiel Handinawangu Guti",
  born: "1923-05-05",
  beganPreaching: "1948",
  homegoing: "2023-07-05",
  laidToRest: "2023-08-10",
  restingPlace: "ZAOGA Bindura Mountain",
};

export const eunor = {
  name: "Senior Archbishop Eunor Guti",
  summary:
    "She left her nursing career in 1972 to serve alongside Archbishop Ezekiel Guti and celebrated fifty years of ministry in 2022. She pioneered the Good News Deliverance Explo in 2005 and has led the women's ministry across the nations.",
  quote: "Women, you are highly favored of God.",
};

export const names = [
  { name: "ZAOGA Forward In Faith Ministries International", note: "Official global name" },
  { name: "FIFMI · ZAOGA · Forward in Faith", note: "Common short forms" },
];

/** Headings from the current statement of faith. Wording is published only once approved. */
export const beliefs: { title: string; statement: Verified<string> }[] = [
  "The Triune God",
  "The Bible",
  "Salvation",
  "The Holy Spirit",
  "Healing",
  "The Resurrection",
  "Christ's Return",
  "Water Baptism",
  "Holy Communion",
].map((title) => ({ title, statement: null }));

export const timeline: Milestone[] = [
  { year: "1923", text: "Ezekiel Handinawangu Guti is born, 5 May." },
  { year: "1948", text: "He begins preaching the gospel." },
  { year: "1960", text: "The ministry is founded in Bindura, Zimbabwe, on 12 May." },
  { year: "1972", text: "Eunor Guti leaves nursing to serve in full-time ministry." },
  { year: "1991", text: "Missionaries are sent to the nations." },
  { year: "2005", text: "The Good News Deliverance Explo begins." },
  { year: "2023", text: "Homegoing of Archbishop Ezekiel Guti, 5 July." },
  { year: "2026", text: "Archbishop Dr. Joseph Joe Guti is consecrated as International Executive Chairman, January." },
  { year: "Today", text: "More than 148 nations and states, and the work continues." },
];
