import Link from "next/link";
import { footerColumns, offices, org } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-deep bg-blue-deep text-stone">
      <div className="wrap flex flex-col gap-14 pb-10 pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,3fr)]">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-serif text-2xl text-white">Forward in Faith</span>
            <p className="m-0 text-[15px] leading-relaxed">
              {org.officialName}. {org.mission}
            </p>
            <div className="accent-rule" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow mb-3 text-purple-light">{col.title}</h2>
                <ul className="m-0 list-none p-0">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-[15px] leading-[2.1] text-stone no-underline hover:text-white hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <section aria-labelledby="offices-heading" className="border-t border-blue-line pt-10">
          <h2 id="offices-heading" className="eyebrow mb-6 text-purple-light">
            Offices
          </h2>
          <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((o) => (
              <li key={o.label} className="flex flex-col gap-1 text-sm">
                <span className="font-semibold text-white">{o.label}</span>
                <span>{o.address}</span>
                <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="text-royal-light hover:text-white">
                  {o.phone}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="m-0 border-t border-blue-line pt-6 text-[13px]">
          © {year} {org.officialName}
        </p>
      </div>
    </footer>
  );
}
