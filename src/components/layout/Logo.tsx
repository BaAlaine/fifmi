import Link from "next/link";
import { showPlaceholders } from "@/lib/cms";

/** Wordmark. The official logo file is still to come from the ministry; the slot is marked on previews. */
export function Logo({ tone = "light" }: { tone?: "light" | "deep" }) {
  const deep = tone === "deep";
  return (
    <Link href="/" className={`flex items-center gap-3 no-underline ${deep ? "text-white hover:text-white" : "text-blue-deep hover:text-blue-deep"}`}>
      {showPlaceholders ? (
        <span
          aria-hidden="true"
          className={`flex size-11 items-center justify-center rounded-full border-[1.5px] text-[10px] font-semibold ${
            deep ? "border-purple-light text-purple-light" : "border-purple text-purple"
          }`}
        >
          LOGO
        </span>
      ) : null}
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-[21px] font-semibold">Forward in Faith</span>
        <span className={`text-xs font-medium ${deep ? "text-sky" : "text-muted"}`}>Ministries International</span>
      </span>
    </Link>
  );
}
