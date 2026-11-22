import Link from "next/link";
import { org, utilityNav } from "@/content/site";
import { Pending } from "@/components/ui/Pending";

export function UtilityBar() {
  return (
    <aside aria-label="Site information" className="on-deep hidden bg-blue-deep text-[13px] text-stone md:block">
      <div className="wrap flex min-h-10 items-center justify-between gap-6">
        <span>{org.officialName}</span>
        <nav aria-label="Utility" className="flex items-center gap-6">
          {utilityNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-stone no-underline hover:text-white hover:underline">
              {item.label}
            </Link>
          ))}
          <span>English</span>
          <span>
            Country: <Pending label="DETECTED COUNTRY" tone="deep" />
          </span>
        </nav>
      </div>
    </aside>
  );
}
