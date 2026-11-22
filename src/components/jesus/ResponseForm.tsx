"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const choices = [
  "I want to follow Jesus",
  "I would like to talk to someone",
  "I would like prayer",
  "I have a question",
];

/**
 * Response form. No backend is connected yet, so it sends and stores nothing and says so honestly.
 * When a destination is chosen, responses go only to the Deputy Secretary General's office and are never public.
 */
export function ResponseForm() {
  const id = useId();
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("choice") || data.get("consent") !== "yes") {
      setState("error");
      return;
    }
    setState("done");
  }

  if (state === "done") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-[var(--radius-card)] border-t-[3px] border-purple bg-white p-8">
        <h3 className="m-0 font-serif text-2xl font-medium text-blue-deep">Thank you</h3>
        <p className="m-0 leading-relaxed">
          Online responses open soon. Nothing has been sent or stored. Until then, please speak to a pastor at your nearest assembly or
          contact one of our offices.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={`${id}-privacy`} className="flex flex-col gap-6 rounded-[var(--radius-card)] bg-white p-8">
      <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
        <legend className="mb-2 text-lg font-semibold text-blue-deep">Which of these is true for you?</legend>
        {choices.map((c) => (
          <label key={c} className="flex min-h-11 cursor-pointer items-center gap-3">
            <input type="radio" name="choice" value={c} className="size-5 accent-royal" />
            {c}
          </label>
        ))}
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 font-medium">
          First name <span className="text-sm font-normal text-muted">Optional</span>
          <input name="name" autoComplete="given-name" className="min-h-12 rounded-[var(--radius-btn)] border border-muted px-3 font-normal" />
        </label>
        <label className="flex flex-col gap-2 font-medium">
          Email or phone <span className="text-sm font-normal text-muted">Optional, only if you would like someone to reply</span>
          <input name="contact" className="min-h-12 rounded-[var(--radius-btn)] border border-muted px-3 font-normal" />
        </label>
      </div>
      <label className="flex cursor-pointer items-start gap-3">
        <input type="checkbox" name="consent" value="yes" className="mt-1 size-5 shrink-0 accent-royal" />
        <span>I agree that the ministry may read my response and, if I gave contact details, reply to me.</span>
      </label>
      <p id={`${id}-privacy`} className="m-0 text-sm leading-relaxed text-muted">
        Responses are private. They are read only by the Deputy Secretary General&apos;s office, are never published, and are not used for
        marketing.
      </p>
      {state === "error" ? (
        <p role="alert" className="m-0 font-medium text-live">
          Error: please choose one option and tick the box to agree before sending.
        </p>
      ) : null}
      <div>
        <Button type="submit">Send my response</Button>
      </div>
    </form>
  );
}
