import Link from "next/link";
import { mainNav, primaryActions } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { UtilityBar } from "./UtilityBar";

export function SiteHeader({ current }: { current?: string }) {
  return (
    <>
      <UtilityBar />
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="wrap flex min-h-16 items-center justify-between gap-6 lg:min-h-20">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
            {mainNav.map((item) => {
              const active = current === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 text-[15px] font-medium no-underline ${
                    active ? "text-purple shadow-[inset_0_-2px_0_var(--color-purple)]" : "text-charcoal hover:text-royal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink href={primaryActions.findChurch.href} variant="outline" className="min-h-11">
              {primaryActions.findChurch.label}
            </ButtonLink>
            <ButtonLink href={primaryActions.give.href} variant="deep" className="min-h-11">
              {primaryActions.give.label}
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
