/**
 * Content that the ministry has not yet verified is stored as `null`, never invented.
 *
 * - On previews (NEXT_PUBLIC_SHOW_CMS_PLACEHOLDERS=true) a labelled [CMS: ...] placeholder is shown
 *   so reviewers can see what is missing.
 * - In production the placeholder is hidden, and components hide the item that depends on it.
 */
export const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_CMS_PLACEHOLDERS === "true";

export type Verified<T> = T | null;

export function isVerified<T>(value: Verified<T>): value is T {
  return value !== null && value !== undefined;
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fifmi.org").replace(/\/$/, "");
