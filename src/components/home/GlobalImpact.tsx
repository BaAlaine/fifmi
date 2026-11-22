import { regions, stats } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame, Pending } from "@/components/ui/Pending";
import { showPlaceholders } from "@/lib/cms";

export function GlobalImpact() {
  const shown = stats.filter((s) => s.value !== null || showPlaceholders);
  return (
    <section aria-labelledby="impact-heading" className="section bg-mist">
      <div className="wrap flex flex-col gap-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading id="impact-heading" eyebrow="Global impact" title="From Zimbabwe to the Nations" rule />
          <p className="m-0 text-lg leading-relaxed">
            What began in Bindura, Zimbabwe, on 12 May 1960 is now a family of assemblies across every inhabited continent.
          </p>
        </div>
        <dl className="m-0 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {shown.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2 border-t-[3px] border-purple pt-5">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="m-0 font-serif text-5xl leading-none text-blue-deep">
                {s.value ?? <Pending label={s.note ?? "STATISTIC"} />}
              </dd>
            </div>
          ))}
        </dl>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-center">
          <div className="flex flex-col gap-6">
            <div role="group" aria-label="Regions" className="flex flex-wrap gap-2.5">
              {regions.map((r) => (
                <span key={r} className="inline-flex min-h-9 items-center rounded-full border border-sky bg-white px-3.5 text-sm font-medium text-blue-deep">
                  {r}
                </span>
              ))}
            </div>
            <div>
              <ButtonLink href="/global-impact" variant="primary">
                Explore Our Global Church
              </ButtonLink>
            </div>
          </div>
          <ImageFrame
            label="STATIC MAP PREVIEW"
            note="Countries with assemblies marked. The interactive map loads only when opened; a text list of countries always stays available."
            className="h-80 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
