import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "deep" }) {
  return <span className={`eyebrow ${tone === "deep" ? "text-purple-light" : "text-purple"}`}>{children}</span>;
}

/** Section opener: purple eyebrow, serif heading, optional purple accent rule. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
  rule = false,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  tone?: "light" | "deep";
  rule?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={`h2 ${tone === "deep" ? "!text-white" : ""}`}>
        {title}
      </h2>
      {rule ? <div className="accent-rule" aria-hidden="true" /> : null}
      {children}
    </div>
  );
}
