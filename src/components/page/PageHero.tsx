import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Deep blue page opener: breadcrumbs, purple-light eyebrow, serif title, accent rule and lead. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  aside,
  compact = false,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  aside?: ReactNode;
  /** Smaller title for long headlines such as article titles. */
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="on-deep bg-blue-deep text-white">
      <div className="wrap flex flex-col gap-12 pb-20 pt-10 lg:pb-28">
        <Breadcrumbs items={crumbs} />
        <div className={`grid gap-10 ${aside ? "lg:grid-cols-2 lg:items-end lg:gap-16" : ""}`}>
          <div className="flex max-w-4xl flex-col gap-6">
            <span className="eyebrow text-purple-light">{eyebrow}</span>
            <h1 id="page-title" className={`m-0 font-serif font-medium ${compact ? "text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1]" : "text-[clamp(2.75rem,5.5vw,5.25rem)] leading-[1.04]"}`}>
              {title}
            </h1>
            <div className="accent-rule" aria-hidden="true" />
            {lead ? <div className="m-0 max-w-2xl text-xl leading-relaxed text-stone">{lead}</div> : null}
            {children}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
