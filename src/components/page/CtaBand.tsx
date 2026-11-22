import Link from "next/link";

export type CtaCard = { eyebrow: string; title: string; href: string };

/** Royal blue closing band with up to three onward links. */
export function CtaBand({ title, cards }: { title: string; cards: CtaCard[] }) {
  return (
    <section aria-labelledby="cta-title" className="on-deep bg-royal text-white">
      <div className="wrap flex flex-col gap-10 py-20 lg:py-28">
        <h2 id="cta-title" className="m-0 font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium">
          {title}
        </h2>
        <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="flex h-full flex-col gap-2 rounded-xl bg-white p-7 text-blue-deep no-underline hover:bg-sky hover:text-blue-deep">
                <span className="eyebrow text-[12px] text-purple">{c.eyebrow}</span>
                <span className="text-xl font-semibold">{c.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
