import Link from "next/link";
import { broadcast } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";

const shelves = [
  { kind: "Latest message", title: "MESSAGE TITLE", meta: "SPEAKER AND DATE" },
  { kind: "Featured conference", title: "CONFERENCE TITLE", meta: "SESSIONS COUNT" },
  { kind: "Teaching series", title: "SERIES TITLE", meta: "PARTS" },
];

export function Watch() {
  return (
    <section id="watch" aria-labelledby="watch-heading" className="section on-deep bg-blue-deep text-white">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-purple-light">Ezekiel TV</span>
            <h2 id="watch-heading" className="h2 m-0 !text-white">
              Watch. Worship. Grow.
            </h2>
          </div>
          <ButtonLink href="/watch" variant="outline-light">
            Browse Messages
          </ButtonLink>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="relative overflow-hidden rounded-2xl">
            <ImageFrame tone="deep" label="LATEST SERVICE THUMBNAIL" note="The player loads only when pressed." className="aspect-video" />
            <div role="status" className="absolute left-5 top-5">
              {broadcast.isLive ? (
                <span className="inline-flex items-center gap-2 rounded-md bg-live px-2.5 py-1 text-xs font-semibold text-white">
                  <span aria-hidden="true" className="size-2 rounded-full bg-white" />
                  LIVE
                </span>
              ) : (
                <span className="rounded-md bg-stone px-2.5 py-1 text-xs font-semibold text-charcoal">OFFLINE</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {broadcast.nextBroadcast || showPlaceholders ? (
              <p className="m-0 text-base text-stone">
                Next live broadcast: {broadcast.nextBroadcast ?? <Pending label="BROADCAST SCHEDULE" tone="deep" />}
                <span className="sr-only"> Times are shown in your time zone.</span>
              </p>
            ) : (
              <p className="m-0 text-base text-stone">Services, conferences and teaching from Ezekiel TV, live and on demand.</p>
            )}
            {showPlaceholders ? (
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {shelves.map((s) => (
                <li key={s.kind}>
                  <Link href="/watch" className="flex flex-col gap-1 rounded-[var(--radius-card)] border border-blue-line p-5 text-white no-underline hover:border-royal-light hover:text-white">
                    <span className="eyebrow text-[12px] text-purple-light">{s.kind}</span>
                    <span className="text-lg font-semibold">
                      <Pending label={s.title} tone="deep" />
                    </span>
                    <span className="text-sm text-sky">
                      <Pending label={s.meta} tone="deep" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            ) : null}
            <div>
              <ButtonLink href="/watch" variant="white">
                Watch Live
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
