import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/** Header, main landmark and footer shared by every inner page. `current` marks the active main-nav item. */
export function PageShell({ current, children }: { current?: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader current={current} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
