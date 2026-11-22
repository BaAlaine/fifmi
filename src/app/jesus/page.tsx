import type { Metadata } from "next";
import Link from "next/link";
import { jesusSteps } from "@/content/jesus";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { Pending } from "@/components/ui/Pending";

export const metadata: Metadata = {
  title: "Jesus",
  description: "Discover who Jesus is, why we need Him, what He has done, and how to respond, in four short steps.",
  alternates: { canonical: "/jesus" },
};

export default function JesusPage() {
  const first = jesusSteps[0]?.slug ?? "who-is-jesus";
  return (
    <PageShell current="/jesus">
      <PageHero
        crumbs={[{ label: "Jesus" }]}
        eyebrow="Know Jesus"
        title="Discover the Life Jesus Offers"
        lead={<p className="m-0">Four short steps, at your own pace. There is nothing to sign up for, and you can stop at any time.</p>}
      >
        <div>
          <ButtonLink href={`/jesus/${first}`} variant="white">
            Begin with step 1
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-labelledby="steps-heading" className="section bg-white">
        <div className="wrap flex flex-col gap-12">
          <SectionHeading id="steps-heading" eyebrow="The journey" title="Four steps" rule />
          <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-4">
            {jesusSteps.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/jesus/${s.slug}`}
                  className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-line p-7 text-charcoal no-underline hover:border-royal hover:text-charcoal"
                >
                  <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-full bg-purple font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="font-serif text-2xl font-medium text-blue-deep">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </span>
                  {s.opening ? <span className="leading-relaxed">{s.opening}</span> : <Pending label="STEP SUMMARY" />}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="talk-heading" className="section bg-mist">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading id="talk-heading" eyebrow="Talk to someone" title="You don't have to do this alone" />
          <div className="flex flex-col gap-6">
            <p className="m-0 text-lg leading-relaxed">
              If you have questions or would like to pray with someone, a pastor at your nearest assembly will be glad to meet you.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/find-a-church">Find a Church</ButtonLink>
              <ButtonLink href="/prayer" variant="outline">
                Ask for prayer
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
