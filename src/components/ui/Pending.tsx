import { showPlaceholders } from "@/lib/cms";

type Props = {
  /** What the CMS will supply, e.g. "HERO PHOTO". */
  label: string;
  /** Optional note for reviewers. */
  note?: string;
  /** Visual style: a block (images, maps) or inline text. */
  variant?: "block" | "inline";
  tone?: "light" | "deep";
  className?: string;
};

/**
 * A clearly labelled placeholder for content the ministry has not yet verified.
 * Rendered only on previews. In production it renders nothing, so no invented data ships.
 */
export function Pending({ label, note, variant = "inline", tone = "light", className = "" }: Props) {
  if (!showPlaceholders) return null;
  const text = `[CMS: ${label}]`;
  if (variant === "inline") {
    return (
      <span className={`rounded px-1 text-[0.85em] ${tone === "deep" ? "bg-blue-deep-2 text-stone" : "bg-placeholder text-charcoal"} ${className}`}>
        {text}
      </span>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`flex items-end p-4 text-[13px] leading-snug ${
        tone === "deep" ? "border border-blue-line bg-blue-deep-2 text-stone" : "bg-placeholder text-[#3e464e]"
      } ${className}`}
    >
      <span>
        {text}
        {note ? ` ${note}` : ""}
      </span>
    </div>
  );
}

/** Neutral image frame used in production where a photo is still pending. */
export function ImageFrame({ label, note, tone = "light", className = "" }: Omit<Props, "variant">) {
  if (showPlaceholders) return <Pending label={label} note={note} variant="block" tone={tone} className={className} />;
  return <div aria-hidden="true" className={`${tone === "deep" ? "bg-blue-deep-2" : "bg-mist"} ${className}`} />;
}
