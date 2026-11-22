import Link from "next/link";
import { testimonies } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";

export function Testimonies() {
  return (
    <section aria-labelledby="test-heading" className="section on-deep bg-blue-deep text-white">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="test-heading" eyebrow="Testimonies" title="Stories of Transformation" tone="deep" />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/testimonies" variant="white">
              Read More Testimonies
            </ButtonLink>
            <ButtonLink href="/testimonies#share" variant="outline-light">
              Share Your Testimony
            </ButtonLink>
          </div>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
          {testimonies.map((t) => (
            <li key={t.title}>
              <Link
                href={t.href}
                className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-blue-line border-l-[3px] border-l-purple-light p-7 text-white no-underline hover:border-royal-light hover:text-white"
              >
                <span className="eyebrow text-[12px] text-purple-light">{t.theme}</span>
                <span className="font-serif text-2xl leading-snug">{t.title}</span>
                <span className="mt-auto text-sm text-sky">Names and photos appear only with written consent</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
