import Link from "next/link";
import { jesusSteps } from "@/content/jesus";

/** Progress stepper for the four-step journey. The current step carries aria-current. */
export function StepNav({ current }: { current?: string }) {
  return (
    <nav aria-label="Steps in this journey" className="border-b border-line bg-mist">
      <div className="wrap">
      <ol className="m-0 grid list-none gap-0 p-0 sm:grid-cols-4">
        {jesusSteps.map((s, i) => {
          const active = s.slug === current;
          return (
            <li key={s.slug}>
              <Link
                href={`/jesus/${s.slug}`}
                aria-current={active ? "step" : undefined}
                className={`flex min-h-16 items-center gap-3 border-b-[3px] py-3 no-underline ${
                  active ? "border-purple font-semibold text-blue-deep" : "border-transparent text-charcoal hover:text-royal"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    active ? "bg-purple text-white" : "border border-sky bg-white text-blue-deep"
                  }`}
                >
                  {i + 1}
                </span>
                <span>
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      </div>
    </nav>
  );
}
