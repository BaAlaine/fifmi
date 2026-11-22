import Link from "next/link";
import { siteUrl } from "@/lib/cms";

export type Crumb = { label: string; href?: string };

/** Visible breadcrumb trail plus BreadcrumbList structured data. The last crumb is the current page. */
export function Breadcrumbs({ items, tone = "deep" }: { items: Crumb[]; tone?: "deep" | "light" }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${siteUrl}${c.href}` } : {}),
    })),
  };
  const link = tone === "deep" ? "text-sky hover:text-white" : "text-royal";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${tone === "deep" ? "text-sky" : "text-muted"}`}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2">
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined}>{c.label}</span>
              ) : (
                <Link href={c.href} className={link}>
                  {c.label}
                </Link>
              )}
              {last ? null : <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
