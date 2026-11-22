import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dateLong, updateHref, updates } from "@/content/updates";
import { org } from "@/content/site";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { siteUrl } from "@/lib/cms";

type Params = { year: string; slug: string };

export function generateStaticParams(): Params[] {
  return updates.map((u) => ({ year: String(u.year), slug: u.slug }));
}

export const dynamicParams = false;

function find({ year, slug }: Params) {
  return updates.find((u) => String(u.year) === year && u.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const u = find(await params);
  if (!u) return {};
  return {
    title: `Week ${u.week}, ${u.year} · Apostles Updates`,
    description: u.title,
    alternates: { canonical: updateHref(u) },
    openGraph: { type: "article", publishedTime: u.published },
  };
}

export default async function UpdatePage({ params }: { params: Promise<Params> }) {
  const u = find(await params);
  if (!u) notFound();
  const published = dateLong.format(new Date(u.published));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: u.title,
    datePublished: u.published,
    mainEntityOfPage: `${siteUrl}${updateHref(u)}`,
    publisher: { "@type": "Organization", name: org.officialName, "@id": `${siteUrl}/#organization` },
  };

  return (
    <PageShell current="/apostles-updates">
      <PageHero
        crumbs={[{ label: "Apostles Updates", href: "/apostles-updates" }, { label: `Week ${u.week}, ${u.year}` }]}
        eyebrow={`Week ${u.week} · ${u.year}`}
        title={u.title}
        compact
      >
        <p className="m-0 text-stone">
          Published <time dateTime={u.published}>{published}</time>
        </p>
      </PageHero>

      <article aria-labelledby="page-title" className="section bg-white">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          <div className="flex max-w-3xl flex-col gap-14">
            {u.summary ? <p className="m-0 font-serif text-2xl leading-normal text-blue-deep">{u.summary}</p> : <Pending label="INTRODUCTION" />}
            {u.sections.map((s) => (
              <section key={s.title} aria-label={s.title} className="flex flex-col gap-5">
                <ImageFrame label="PHOTO" note={s.title} className="aspect-[16/9] w-full rounded-[var(--radius-card)]" />
                <h2 className="m-0 font-serif text-3xl font-medium text-blue-deep">{s.title}</h2>
                {s.meta ? <p className="eyebrow m-0 text-purple">{s.meta}</p> : null}
                {s.text ? <p className="m-0 text-lg leading-relaxed">{s.text}</p> : <Pending label="REPORT TEXT" variant="block" className="min-h-24 rounded" />}
              </section>
            ))}
          </div>
          <aside aria-labelledby="countries-heading" className="flex flex-col gap-5 self-start rounded-[var(--radius-card)] bg-mist p-7 lg:sticky lg:top-28">
            <h2 id="countries-heading" className="eyebrow m-0 text-purple">
              Nations in this update
            </h2>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {u.countries.map((c) => (
                <li key={c} className="inline-flex min-h-9 items-center rounded-full border border-sky bg-white px-3.5 text-sm font-medium text-blue-deep">
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/apostles-updates" className="font-medium">
              All Apostles Updates
            </Link>
          </aside>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>
    </PageShell>
  );
}
