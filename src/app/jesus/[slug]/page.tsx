import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jesusSteps } from "@/content/jesus";
import { ResponseForm } from "@/components/jesus/ResponseForm";
import { StepNav } from "@/components/jesus/StepNav";
import { PageHero } from "@/components/page/PageHero";
import { PageShell } from "@/components/page/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { Pending } from "@/components/ui/Pending";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return jesusSteps.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const step = jesusSteps.find((s) => s.slug === slug);
  if (!step) return {};
  return { title: `${step.title} · Jesus`, alternates: { canonical: `/jesus/${step.slug}` } };
}

export default async function JesusStepPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = jesusSteps.findIndex((s) => s.slug === slug);
  const step = jesusSteps[index];
  if (!step) notFound();
  const prev = jesusSteps[index - 1];
  const next = jesusSteps[index + 1];
  const isResponse = step.slug === "how-to-respond";

  return (
    <PageShell current="/jesus">
      <PageHero
        crumbs={[{ label: "Jesus", href: "/jesus" }, { label: step.title }]}
        eyebrow={`Step ${index + 1} of ${jesusSteps.length}`}
        title={step.title}
        lead={step.opening ? <p className="m-0">{step.opening}</p> : <Pending label="STEP OPENING" tone="deep" />}
      />
      <StepNav current={step.slug} />

      <section className="section bg-white">
        <div className="wrap"><div className="flex max-w-3xl flex-col gap-8">
          {step.body ? (
            step.body.map((p) => (
              <p key={p} className="m-0 text-lg leading-relaxed">
                {p}
              </p>
            ))
          ) : (
            <Pending label="STEP TEACHING" note="Published only in the ministry's approved wording." variant="block" className="min-h-40 rounded" />
          )}
          {step.scripture ? (
            <figure className="m-0 border-l-[3px] border-purple pl-6">
              <blockquote className="m-0 font-serif text-2xl italic leading-snug text-blue-deep">{step.scripture.text}</blockquote>
              <figcaption className="mt-3 text-muted">{step.scripture.reference}</figcaption>
            </figure>
          ) : (
            <Pending label="SCRIPTURE AND REFERENCE" />
          )}
        </div></div>
      </section>

      {isResponse ? (
        <section aria-labelledby="respond-heading" className="section bg-mist">
          <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-purple">Your response</span>
              <h2 id="respond-heading" className="h2 m-0">
                Let us know
              </h2>
              <p className="m-0 text-lg leading-relaxed">
                If you have made a decision today, or simply want to talk, tell us. Only share what you are comfortable sharing.
              </p>
            </div>
            <ResponseForm />
          </div>
        </section>
      ) : null}

      <nav aria-label="Previous and next step" className="border-t border-line bg-white">
        <div className="wrap flex flex-wrap justify-between gap-4 py-10">
          {prev ? (
            <ButtonLink href={`/jesus/${prev.slug}`} variant="outline">
              <span aria-hidden="true">←</span> Previous: {prev.title}
            </ButtonLink>
          ) : (
            <ButtonLink href="/jesus" variant="outline">
              <span aria-hidden="true">←</span> All steps
            </ButtonLink>
          )}
          {next ? (
            <ButtonLink href={`/jesus/${next.slug}`}>
              Next: {next.title} <span aria-hidden="true">→</span>
            </ButtonLink>
          ) : (
            <ButtonLink href="/find-a-church">Find a Church near you</ButtonLink>
          )}
        </div>
      </nav>
    </PageShell>
  );
}
