import type { Metadata } from "next";
import { beliefs, eunor, founder, historyNarrative, names, timeline } from "@/content/story";
import { CtaBand } from "@/components/page/CtaBand";
import { InPageNav } from "@/components/page/InPageNav";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";
import { siteUrl } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How ZAOGA Forward In Faith Ministries International began in Bindura, Zimbabwe on 12 May 1960, our founder, Senior Archbishop Eunor Guti, what we believe, and our timeline.",
  alternates: { canonical: "/our-story" },
};

const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: founder.name,
  birthDate: founder.born,
  deathDate: founder.homegoing,
  founder: { "@id": `${siteUrl}/#organization` },
};

export default function OurStoryPage() {
  const approvedBeliefs = beliefs.filter((b) => b.statement !== null);
  return (
    <PageShell current="/our-story">
      <PageHero
        crumbs={[{ label: "Our Story" }]}
        eyebrow="Our story"
        title="A Legacy Built on Faith"
        lead={
          <p className="m-0">
            ZAOGA Forward In Faith Ministries International began on 12 May 1960 in Bindura, Zimbabwe. Today it is present in more than
            148 nations and states, still carrying the same call: take the gospel of Jesus Christ to all nations and make true disciples.
          </p>
        }
        aside={<ImageFrame tone="deep" label="ARCHIVE PHOTO" note="Early gathering in Bindura." className="h-80 rounded-2xl lg:h-[460px]" />}
      />
      <InPageNav
        items={[
          { label: "History", href: "#history" },
          { label: "Our Founder", href: "#founder" },
          { label: "Senior Archbishop Eunor Guti", href: "#eunor" },
          { label: "Our names", href: "#names" },
          { label: "Beliefs", href: "#beliefs" },
          { label: "Timeline", href: "#timeline" },
        ]}
      />

      <section id="history" aria-labelledby="history-heading" className="section scroll-mt-24 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)] lg:gap-16">
          <SectionHeading id="history-heading" eyebrow="History" title="From humble beginnings" />
          <div className="flex flex-col gap-6">
            <p className="m-0 font-serif text-2xl leading-normal text-blue-deep">
              The ministry was born in prayer in Bindura, Zimbabwe, and formally began on 12 May 1960 under Archbishop Professor Ezekiel
              Handinawangu Guti.
            </p>
            {historyNarrative ? (
              <p className="m-0 text-lg leading-relaxed">{historyNarrative}</p>
            ) : (
              <Pending label="HISTORY NARRATIVE" note="Approved founding account." variant="block" className="min-h-24 rounded" />
            )}
            <p className="m-0 text-lg leading-relaxed">
              From 1991 the ministry sent missionaries to the nations. The movement now gathers in assemblies across Africa, Europe, the
              Americas, Asia and Oceania.
            </p>
          </div>
        </div>
      </section>

      <section id="founder" aria-labelledby="founder-heading" className="section scroll-mt-24 bg-mist">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageFrame label="FOUNDER PORTRAIT" note="Archive photograph, light editorial treatment." className="h-[460px] rounded lg:h-[680px]" />
          <div className="flex flex-col gap-6 lg:pt-4">
            <span className="eyebrow text-purple">Our founder · 1923 to 2023</span>
            <h2 id="founder-heading" className="h2 m-0">
              {founder.name}
            </h2>
            <p className="m-0 text-lg leading-relaxed">
              Born on 5 May 1923, he began preaching in 1948 and founded the ministry in 1960. For more than seven decades he preached,
              prayed and trained leaders, and his teaching still shapes the movement&apos;s life of discipline, holiness and mission.
            </p>
            <p className="m-0 text-lg leading-relaxed">
              He went home to be with the Lord on 5 July 2023 and was laid to rest at {founder.restingPlace} on 10 August 2023.
            </p>
            <dl className="m-0 grid grid-cols-3 gap-4 border-t-[3px] border-purple pt-6">
              {[
                ["Born", "1923"],
                ["Began preaching", "1948"],
                ["Homegoing", "2023"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="m-0 font-serif text-3xl text-blue-deep">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }} />
      </section>

      <section id="eunor" aria-labelledby="eunor-heading" className="section on-deep scroll-mt-24 bg-blue-deep text-white">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-purple-light">More than five decades of ministry</span>
            <h2 id="eunor-heading" className="h2 m-0 !text-white">
              {eunor.name}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-stone">{eunor.summary}</p>
            <blockquote className="m-0 border-l-[3px] border-purple-light pl-6 font-serif text-3xl italic leading-snug">{eunor.quote}</blockquote>
          </div>
          <ImageFrame tone="deep" label="PORTRAIT" note={eunor.name} className="h-[420px] rounded-2xl lg:h-[600px]" />
        </div>
      </section>

      <section id="names" aria-labelledby="names-heading" className="section scroll-mt-24 bg-white">
        <div className="wrap flex flex-col gap-10">
          <SectionHeading id="names-heading" eyebrow="One family, many names" title="Who we are, wherever you meet us">
            <p className="m-0 max-w-2xl text-lg">You may know us by different names depending on where you live. They all describe the same family.</p>
          </SectionHeading>
          <dl className="m-0 grid gap-5 md:grid-cols-3">
            {names.map((n) => (
              <div key={n.name} className="flex flex-col-reverse gap-2 rounded-[var(--radius-card)] border border-line p-7">
                <dt className="text-sm text-muted">{n.note}</dt>
                <dd className="m-0 font-serif text-2xl text-blue-deep">{n.name}</dd>
              </div>
            ))}
            {showPlaceholders ? (
              <div className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-dashed border-sky p-7">
                <dd className="m-0">
                  <Pending label="LOCAL NAMES BY COUNTRY" />
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      <section id="beliefs" aria-labelledby="beliefs-heading" className="section scroll-mt-24 bg-mist">
        <div className="wrap flex flex-col gap-10">
          <SectionHeading id="beliefs-heading" eyebrow="What we believe" title="Our statement of faith" rule />
          {approvedBeliefs.length === 0 && !showPlaceholders ? (
            <p className="m-0 max-w-2xl text-lg">The statement of faith will be published here in the ministry&apos;s approved wording.</p>
          ) : (
            <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
              {(showPlaceholders ? beliefs : approvedBeliefs).map((b) => (
                <li key={b.title} className="flex flex-col gap-3 rounded-[var(--radius-card)] border-t-[3px] border-purple bg-white p-7">
                  <h3 className="m-0 font-serif text-2xl font-medium text-blue-deep">{b.title}</h3>
                  <p className="m-0 text-base leading-relaxed">{b.statement ?? <Pending label="STATEMENT TEXT, approved wording" />}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section id="timeline" aria-labelledby="timeline-heading" className="section scroll-mt-24 bg-white">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="timeline-heading" eyebrow="Timeline" title="Heritage, mission today, future generations" />
          <ol className="m-0 flex max-w-4xl list-none flex-col border-l-[3px] border-purple p-0">
            {timeline.map((m) => (
              <li key={m.year} className="grid grid-cols-[96px_minmax(0,1fr)] gap-6 py-5 pl-8 sm:grid-cols-[160px_minmax(0,1fr)]">
                <span className={`font-serif text-4xl leading-none ${m.year === "Today" ? "text-purple" : "text-blue-deep"}`}>{m.year}</span>
                <span className="text-lg leading-relaxed">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="The story is still being written"
        cards={[
          { eyebrow: "Mission today", title: "Meet our leadership", href: "/leadership" },
          { eyebrow: "Across the nations", title: "Explore our global church", href: "/global-impact" },
          { eyebrow: "Future generations", title: "Find a place to belong", href: "/find-a-church" },
        ]}
      />
    </PageShell>
  );
}
