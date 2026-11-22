"use client";

import { useId, useState } from "react";

const topics = ["Apostles Updates", "Events", "Ministry news"];

/**
 * Newsletter sign-up. Submission is wired to the email provider in a later step; until then the form
 * shows an honest message instead of pretending to subscribe.
 */
export function StayConnected() {
  const [status, setStatus] = useState<"idle" | "pending-integration">("idle");
  const emailId = useId();
  const hintId = useId();

  return (
    <section aria-labelledby="conn-heading" className="section bg-white">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-4">
          <h2 id="conn-heading" className="h2 m-0">
            Stay Connected
          </h2>
          <p className="m-0 text-lg">Choose what you would like to receive. You can unsubscribe at any time.</p>
        </div>
        <form
          className="flex flex-col gap-5 rounded-2xl border border-line p-6 lg:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("pending-integration");
          }}
        >
          <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
            <legend className="mb-3 text-[15px] font-semibold text-blue-deep">Send me</legend>
            {topics.map((t) => (
              <label key={t} className="flex min-h-11 items-center gap-3 text-base">
                <input type="checkbox" name="topics" value={t} className="size-5 accent-royal" />
                {t}
              </label>
            ))}
          </fieldset>
          <label htmlFor={emailId} className="flex flex-col gap-2 text-[15px] font-semibold text-blue-deep">
            Email address
            <input
              id={emailId}
              type="email"
              name="email"
              required
              autoComplete="email"
              aria-describedby={hintId}
              className="min-h-12 rounded-[var(--radius-btn)] border-[1.5px] border-[#8e8a9a] px-4 text-base font-normal text-charcoal"
            />
          </label>
          <p id={hintId} className="m-0 text-sm text-muted">
            We use your email only for what you choose above. See our <a href="/privacy">Privacy Policy</a>.
          </p>
          <button type="submit" className="inline-flex min-h-12 cursor-pointer items-center justify-center self-start rounded-[var(--radius-btn)] bg-royal px-6 font-semibold text-white hover:bg-blue-deep">
            Subscribe
          </button>
          <p role="status" className="m-0 text-[15px]">
            {status === "pending-integration" ? "Sign-up opens soon. Nothing has been sent or stored." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
