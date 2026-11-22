import Link from "next/link";
import { events } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";

export function Events() {
  const verified = events.filter((e) => e.title !== null);
  const list = showPlaceholders ? events : verified;
  return (
    <section aria-labelledby="events-heading" className="section bg-white">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="events-heading" eyebrow="Events" title="Gather With Us" />
          <ButtonLink href="/events" variant="outline">
            View All Events
          </ButtonLink>
        </div>
        {list.length === 0 ? (
          <p className="m-0 max-w-2xl rounded-[var(--radius-card)] border-l-[3px] border-purple bg-mist p-6 text-lg">
            Upcoming conferences and gatherings will be listed here. In the meantime, your local assembly can tell you what is planned.{" "}
            <Link href="/find-a-church">Find your local assembly</Link>
          </p>
        ) : (
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
            {list.map((e, i) => (
              <li key={i}>
                <Link href={e.href} className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line text-charcoal no-underline hover:border-royal hover:text-charcoal">
                  <ImageFrame label="EVENT IMAGE" className="h-52" />
                  <span className="flex flex-col gap-2 p-6">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="eyebrow text-[12px] text-purple">{e.type ?? <Pending label="EVENT TYPE" />}</span>
                      <span className="rounded-md bg-mist px-2 py-0.5 text-xs font-semibold text-blue-deep">{e.status}</span>
                    </span>
                    <h3 className="m-0 font-serif text-2xl font-medium text-blue-deep">{e.title ?? <Pending label="EVENT TITLE" />}</h3>
                    <span className="text-[15px]">{e.dates ?? <Pending label="DATES, TIME ZONE" />}</span>
                    <span className="text-[15px] text-muted">{e.place ?? <Pending label="CITY, COUNTRY" />}</span>
                    <span className="text-sm text-muted">Hosted by {e.host ?? <Pending label="MINISTRY" />}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
