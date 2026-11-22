import Link from "next/link";
import { generations } from "@/content/home";
import { SectionHeading } from "@/components/ui/Heading";
import { ImageFrame } from "@/components/ui/Pending";

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function Generations() {
  return (
    <section aria-labelledby="min-heading" className="section bg-white">
      <div className="wrap flex flex-col gap-12">
        <SectionHeading id="min-heading" eyebrow="Ministries" title="A Place for Every Generation" />
        <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-4 lg:gap-6">
          {generations.map((g) => (
            <li key={g}>
              <Link href={`/ministries/${slug(g)}`} className="group flex flex-col gap-3 text-blue-deep no-underline hover:text-royal">
                <ImageFrame label="PHOTO" className="aspect-[4/3] rounded-xl" />
                <span className="text-lg font-semibold">{g}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
