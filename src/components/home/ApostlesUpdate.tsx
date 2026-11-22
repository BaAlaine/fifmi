import Link from "next/link";
import { latestUpdate } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function ApostlesUpdate() {
  const u = latestUpdate;
  return (
    <section aria-labelledby="updates-heading" className="section bg-mist">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading id="updates-heading" eyebrow="Weekly since 2011" title="From the Apostles" rule />
          <p className="m-0 text-lg leading-relaxed">
            A weekly report of what God is doing across the nations: conferences, salvations, baptisms, teaching and prayer points.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={u.href} variant="primary">
              Read Latest Update
            </ButtonLink>
            <ButtonLink href="/apostles-updates" variant="outline">
              Browse Archive
            </ButtonLink>
          </div>
        </div>
        <article className="flex flex-col gap-5 rounded-2xl border-t-[3px] border-purple bg-white p-8 shadow-[0_12px_32px_rgba(11,46,107,0.08)] lg:p-10">
          <p className="eyebrow m-0 text-purple">
            Week {u.week} · <time dateTime={u.published}>{dateFormat.format(new Date(u.published))}</time>
          </p>
          <h3 className="m-0 font-serif text-3xl font-medium leading-tight text-blue-deep">
            <Link href={u.href} className="text-blue-deep no-underline hover:text-royal hover:underline">
              {u.title}
            </Link>
          </h3>
          <ul className="m-0 flex flex-col gap-2 pl-5 text-base">
            {u.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-line pt-5">
            <span className="text-sm font-semibold text-blue-deep">Countries in this update</span>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {u.countries.map((c) => (
                <li key={c} className="rounded-full bg-mist px-3 py-1 text-sm text-blue-deep">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
