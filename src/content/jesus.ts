import type { Verified } from "@/lib/cms";

export type JesusStep = {
  slug: string;
  title: string;
  opening: Verified<string>;
  body: Verified<string[]>;
  scripture: Verified<{ text: string; reference: string }>;
};

/** Step titles are questions, not doctrine. All teaching text is published only in the ministry's approved wording. */
export const jesusSteps: JesusStep[] = [
  { slug: "who-is-jesus", title: "Who is Jesus?", opening: null, body: null, scripture: null },
  { slug: "why-we-need-him", title: "Why we need Him", opening: null, body: null, scripture: null },
  { slug: "what-he-has-done", title: "What He has done", opening: null, body: null, scripture: null },
  { slug: "how-to-respond", title: "How to respond", opening: null, body: null, scripture: null },
];
