import Link from "next/link";
import { leaders, ministryTags } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";

export function Mission() {
  return (
    <section aria-labelledby="mission-heading" className="section bg-mist">
      <div className="wrap flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading id="mission-heading" eyebrow="The legacy lives on" title="The Mission Continues" />
          <p className="m-0 text-lg leading-relaxed">
            A new generation of leaders carries the work forward, with women&apos;s, youth, mission and education ministries active across
            the nations.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <li key={l.name}>
              <Link href={l.href} className="group flex flex-col gap-4 text-charcoal no-underline hover:text-charcoal">
                <ImageFrame label="LEADER PHOTO" className="h-80 rounded-xl" />
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-[22px] text-blue-deep group-hover:text-royal">{l.name}</span>
                  {l.role ? (
                    <span className="text-[15px] font-semibold text-purple">{l.role}</span>
                  ) : (
                    <span className="text-[15px]">
                      <Pending label="ROLE DESCRIPTION" />
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <ul aria-label="Ministry areas" className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {ministryTags.map((t) => (
              <li key={t} className="inline-flex min-h-9 items-center rounded-full border border-sky bg-white px-3.5 text-sm font-medium text-blue-deep">
                {t}
              </li>
            ))}
          </ul>
          <ButtonLink href="/leadership" variant="outline">
            Meet Our Leadership
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
