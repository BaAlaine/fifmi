import type { Metadata } from "next";
import Link from "next/link";
import { dateLong, updateHref, updates } from "@/content/updates";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { ImageFrame, Pending } from "@/components/ui/Pending";

export const metadata: Metadata = {
  title: "Apostles Updates",
  description: "Weekly updates on conferences, crusades and outreaches across the nations from ZAOGA Forward In Faith Ministries International.",
  alternates: { canonical: "/apostles-updates" },
};

export default function ApostlesUpdatesPage() {
  const sorted = [...updates].sort((a, b) => b.published.localeCompare(a.published));
  const years = [...new Set(sorted.map((u) => u.year))];
  return (
    <PageShell current="/apostles-updates">
      <PageHero
        crumbs={[{ label: "Apostles Updates" }]}
        eyebrow="Apostles Updates"
        title="What God Is Doing This Week"
        lead={<p className="m-0">Weekly reports of conferences, crusades and outreaches across the nations.</p>}
      />
      <div className="section bg-white">
        <div className="wrap flex flex-col gap-16">
          {years.map((year) => (
            <section key={year} aria-labelledby={`year-${year}`} className="flex flex-col gap-8">
              <h2 id={`year-${year}`} className="h2 m-0 border-b-[3px] border-purple pb-4">
                {year}
              </h2>
              <ul className="m-0 grid list-none gap-8 p-0 md:grid-cols-2 lg:grid-cols-3">
                {sorted
                  .filter((u) => u.year === year)
                  .map((u) => (
                    <li key={u.slug}>
                      <article className="flex h-full flex-col gap-4">
                        <ImageFrame label="UPDATE PHOTO" note={`Week ${u.week}`} className="aspect-[3/2] w-full rounded-[var(--radius-card)]" />
                        <p className="eyebrow m-0 text-purple">
                          Week {u.week} · <time dateTime={u.published}>{dateLong.format(new Date(u.published))}</time>
                        </p>
                        <h3 className="m-0 font-serif text-2xl font-medium leading-snug">
                          <Link href={updateHref(u)} className="text-blue-deep no-underline hover:underline">
                            {u.title}
                          </Link>
                        </h3>
                        {u.summary ? <p className="m-0 leading-relaxed">{u.summary}</p> : <Pending label="SUMMARY" />}
                      </article>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
          <p className="m-0 text-muted">Earlier updates will appear here as they move across from the current site.</p>
        </div>
      </div>
    </PageShell>
  );
}
