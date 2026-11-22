import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "deep" | "outline" | "outline-light" | "white" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-royal text-white hover:bg-blue-deep hover:text-white",
  deep: "bg-blue-deep text-white hover:bg-royal hover:text-white",
  outline: "border-[1.5px] border-royal text-royal hover:bg-royal hover:text-white",
  "outline-light": "border-[1.5px] border-royal-light text-white hover:bg-white hover:text-blue-deep",
  white: "bg-white text-blue-deep hover:bg-sky hover:text-blue-deep",
  "ghost-light": "border-[1.5px] border-blue-line text-white hover:border-royal-light hover:text-white",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[var(--radius-btn)] px-[22px] text-base font-semibold no-underline transition-colors";

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link {...props} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button {...props} className={`${base} ${styles[variant]} cursor-pointer ${className}`} />;
}
