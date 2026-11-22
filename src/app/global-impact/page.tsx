import type { Metadata } from "next";
import { regions, stats } from "@/content/home";
import { offices } from "@/content/site";
import { CtaBand } from "@/components/page/CtaBand";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Global Impact",
  description:
    "From Bindura, Zimbabwe in 1960 to more than 148 nations and states today: where ZAOGA Forward In Faith Ministries International is present, and our international offices.",
  alternates: { canonical: "/global-impact" },
};

export default function GlobalImpactPage() {
  const shown = stats.filter((s) => s.value !== null || showPlaceholders);
  return (
    <PageShell current="/our-story">
      <PageHero
        crumbs={[{ label: "Our Story", href: "/our-story" }, { label: "Global Impact" }]}
        eyebrow="Global impact"
        title="From Zimbabwe to the Nations"
        lead={
          <p className="m-0">
            What began in Bindura, Zimbabwe on 12 May 1960 is now present in more than 148 nations and states, a family of assemblies
            across every inhabited continent.
          </p>
        }
      />

      <section aria-labelledby="numbers-heading" className="section bg-white">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="numbers-heading" eyebrow="At a glance" title="The ministry today" rule />
          <dl className="m-0 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {shown.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-2 border-t-[3px] border-purple pt-5">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="m-0 font-serif text-5xl leading-none text-blue-deep">{s.value ?? <Pending label={s.note ?? "STATISTIC"} />}</dd>
              </div>
            ))}
          </dl>
          <p className="m-0 text-sm text-muted">The count of nations and states is verified by the International Executive Chairman&apos;s office.</p>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="section bg-mist">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading id="map-heading" eyebrow="Where we are" title="Present on every inhabited continent" />
            <ul aria-label="Regions" className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {regions.map((r) => (
                <li key={r} className="inline-flex min-h-9 items-center rounded-full border border-sky bg-white px-3.5 text-sm font-medium text-blue-deep">
                  {r}
                </li>
              ))}
            </ul>
            <div>
              <ButtonLink href="/find-a-church">Find a Church near you</ButtonLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ImageFrame
              label="WORLD MAP"
              note="Countries with assemblies marked, from the Secretary General's directory. A text list of countries always sits beside it."
              className="h-80 rounded-2xl lg:h-[460px]"
            />
            <Pending label="COUNTRY LIST BY REGION" note="From the church directory." variant="block" className="min-h-20 rounded" />
          </div>
        </div>
      </section>

      <section aria-labelledby="offices-page-heading" className="section bg-white">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="offices-page-heading" eyebrow="International offices" title="Our offices" rule />
          <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <li key={o.label} className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line p-7">
                <h3 className="m-0 text-lg font-semibold text-blue-deep">{o.label}</h3>
                <address className="not-italic leading-relaxed">{o.address}</address>
                <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="font-medium">
                  {o.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Be part of the story"
        cards={[
          { eyebrow: "Find a Church", title: "Visit an assembly near you", href: "/find-a-church" },
          { eyebrow: "Leadership", title: "Meet the leaders", href: "/leadership" },
          { eyebrow: "Apostles Updates", title: "See what God is doing this week", href: "/apostles-updates" },
        ]}
      />
    </PageShell>
  );
}
