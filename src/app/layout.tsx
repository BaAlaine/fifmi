import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { org } from "@/content/site";
import { siteUrl } from "@/lib/cms";
import { organizationJsonLd } from "@/lib/schema";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap", weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: org.officialName, template: `%s · ${org.officialName}` },
  description: `${org.mission} Founded in Bindura, Zimbabwe in 1960, now in more than 148 nations and states.`,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: org.officialName, locale: "en_GB" },
};

export const viewport: Viewport = { themeColor: "#0b2e6b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en-GB" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <SkipLink />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        {plausible ? <script defer data-domain={plausible} src="https://plausible.io/js/script.js" /> : null}
      </body>
    </html>
  );
}
