import { milestones } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame } from "@/components/ui/Pending";

export function Legacy() {
  return (
    <section id="story" aria-labelledby="legacy-heading" className="section bg-white">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
        <ImageFrame
          label="ARCHIVE PHOTO"
          note="Bindura in the 1960s, from the current site's “From Humble Beginnings”. Light editorial treatment."
          className="h-[420px] rounded lg:h-[620px]"
        />
        <div className="flex flex-col gap-7">
          <SectionHeading id="legacy-heading" eyebrow="Our story" title="A Legacy Built on Faith" rule />
          <p className="m-0 font-serif text-2xl leading-normal text-blue-deep">
            ZAOGA Forward In Faith began on 12 May 1960 in Bindura, Zimbabwe, under Archbishop Professor Ezekiel Handinawangu Guti.
          </p>
          <p className="m-0 text-lg leading-relaxed">
            Born in 1923, he began preaching in 1948 and spent the rest of his life building a movement of prayer, discipleship and
            mission that reached far beyond Zimbabwe. He went home to be with the Lord on 5 July 2023. Alongside him for more than five
            decades has been Senior Archbishop Eunor Guti.
          </p>
          <ol aria-label="Milestones" className="m-0 flex list-none flex-col border-l-[3px] border-purple p-0">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[88px_minmax(0,1fr)] gap-5 py-3 pl-6">
                <span className="font-serif text-2xl leading-none text-blue-deep">{m.year}</span>
                <span className="text-base">{m.text}</span>
              </li>
            ))}
          </ol>
          <div>
            <ButtonLink href="/our-story" variant="primary">
              Explore Our Story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
