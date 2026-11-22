import { org } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/Pending";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="on-deep bg-blue-deep text-white">
      <div className="wrap grid items-end gap-12 pb-20 pt-16 lg:grid-cols-2 lg:gap-16 lg:pb-32 lg:pt-24">
        <div className="flex flex-col gap-7">
          <span className="eyebrow text-purple-light">A global Kingdom movement · since 1960</span>
          <h1 id="hero-heading" className="display m-0">
            The Legacy Continues
          </h1>
          <div className="accent-rule" aria-hidden="true" />
          <p className="m-0 max-w-xl text-xl leading-relaxed text-stone">
            {org.mission} Born in Zimbabwe, now present in more than 148 nations and states.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/find-a-church" variant="white">
              Find a Church
            </ButtonLink>
            <ButtonLink href="/watch" variant="outline-light">
              Watch Live
            </ButtonLink>
            <ButtonLink href="/our-story" variant="ghost-light">
              Discover FIFMI
            </ButtonLink>
          </div>
        </div>
        <ImageFrame
          tone="deep"
          label="HERO PHOTO"
          note="Worship at an international gathering. Poster image first; no autoplaying video on mobile data or with reduced motion."
          className="h-[360px] rounded-2xl lg:h-[560px]"
        />
      </div>
    </section>
  );
}
