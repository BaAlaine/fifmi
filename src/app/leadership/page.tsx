import type { Metadata } from "next";
import { chairman, ministryLeaders, regionsWithOverseers, seniorLeaders, type Person } from "@/content/leadership";
import { CtaBand } from "@/components/page/CtaBand";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The leadership of ZAOGA Forward In Faith Ministries International, led by Archbishop Dr. Joseph Joe Guti, International Executive Chairman.",
  alternates: { canonical: "/leadership" },
};

function Role({ person, tone = "light" }: { person: Person; tone?: "light" | "deep" }) {
  if (person.role) return <span className={tone === "deep" ? "text-sky" : "text-muted"}>{person.role}</span>;
  return <Pending label="ROLE TITLE" tone={tone} />;
}

function LeaderCard({ person }: { person: Person }) {
  return (
    <li className="flex flex-col gap-4">
      <ImageFrame label="PORTRAIT" note={person.name} className="aspect-[4/5] w-full rounded-[var(--radius-card)]" />
      <div className="flex flex-col gap-1 border-t-[3px] border-purple pt-4">
        <h3 className="m-0 font-serif text-2xl font-medium leading-snug text-blue-deep">{person.name}</h3>
        <Role person={person} />
      </div>
      {person.bio ? <p className="m-0 leading-relaxed">{person.bio}</p> : <Pending label="SHORT BIOGRAPHY" />}
    </li>
  );
}

export default function LeadershipPage() {
  return (
    <PageShell current="/our-story">
      <PageHero
        crumbs={[{ label: "Our Story", href: "/our-story" }, { label: "Leadership" }]}
        eyebrow="Leadership"
        title="Servant Leaders, One Vision"
        lead={
          <p className="m-0">
            The leaders who serve the ministry across the nations, carrying forward the vision entrusted to the founder: take the gospel of
            Jesus Christ to all nations and make true disciples.
          </p>
        }
      />

      <section aria-labelledby="chairman-heading" className="section bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ImageFrame label="PORTRAIT" note={chairman.name} className="aspect-[4/5] w-full rounded-2xl lg:aspect-auto lg:h-[640px]" />
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-purple">{chairman.role}</span>
            <h2 id="chairman-heading" className="h2 m-0">
              {chairman.name}
            </h2>
            <div className="accent-rule" aria-hidden="true" />
            {chairman.bio ? (
              <p className="m-0 text-lg leading-relaxed">{chairman.bio}</p>
            ) : (
              <Pending label="CHAIRMAN BIOGRAPHY" note="Approved by the International Executive Chairman's office." variant="block" className="min-h-28 rounded" />
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="senior-heading" className="section bg-mist">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="senior-heading" eyebrow="Senior leadership" title="Leading the ministry" rule />
          <ul className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {seniorLeaders.map((p) => (
              <LeaderCard key={p.name} person={p} />
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ministry-heading" className="section bg-white">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="ministry-heading" eyebrow="Ministry leaders" title="Serving the generations">
            <p className="m-0 max-w-2xl text-lg leading-relaxed">
              Leaders are listed here once their names and roles are confirmed by the Secretary General&apos;s office.
            </p>
          </SectionHeading>
          <ul className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {ministryLeaders.map((p) => (
              <LeaderCard key={p.name} person={p} />
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="regions-heading" className="section on-deep bg-blue-deep text-white">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading id="regions-heading" eyebrow="Across the nations" title="Regional overseers" tone="deep">
            <p className="m-0 text-lg leading-relaxed text-stone">
              The ministry is overseen region by region, so every assembly is cared for by leaders close to it.
            </p>
          </SectionHeading>
          <ul className="m-0 flex list-none flex-col p-0">
            {regionsWithOverseers.map((r) => (
              <li key={r} className="flex flex-col gap-1 border-b border-blue-line py-5 first:border-t sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-serif text-2xl">{r}</span>
                {showPlaceholders ? <Pending label="OVERSEER NAME" tone="deep" /> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Get to know the ministry"
        cards={[
          { eyebrow: "Our story", title: "A legacy built on faith", href: "/our-story" },
          { eyebrow: "Global impact", title: "From Zimbabwe to the nations", href: "/global-impact" },
          { eyebrow: "Apostles Updates", title: "Read the latest weekly update", href: "/apostles-updates" },
        ]}
      />
    </PageShell>
  );
}
