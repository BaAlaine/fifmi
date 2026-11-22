import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata = { title: "Page not found", robots: { index: false } };

const helpful = [
  { label: "Find a Church", href: "/find-a-church" },
  { label: "Watch", href: "/watch" },
  { label: "Ask for prayer", href: "/prayer" },
  { label: "Apostles Updates", href: "/apostles-updates" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="section bg-white">
        <div className="wrap flex max-w-3xl flex-col gap-6">
          <span className="eyebrow text-purple">Page not found</span>
          <h1 className="h2 m-0">We could not find that page</h1>
          <div className="accent-rule" aria-hidden="true" />
          <p className="m-0 text-lg">It may have moved when the site was renewed. These pages may help.</p>
          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {helpful.map((h) => (
              <li key={h.href}>
                <Link href={h.href} className="inline-flex min-h-12 items-center rounded-[var(--radius-btn)] border-[1.5px] border-royal px-5 font-semibold no-underline">
                  {h.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
