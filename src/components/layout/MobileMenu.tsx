"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { mainNav, primaryActions, utilityNav } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

const ministries = [
  { label: "Children", href: "/ministries/children" },
  { label: "Young Generation", href: "/ministries/young-generation" },
  { label: "Youth", href: "/ministries/youth" },
  { label: "Women", href: "/ministries/women" },
  { label: "All ministries", href: "/ministries" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const subId = useId();

  const close = useCallback(() => {
    setOpen(false);
    openButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const row = "flex min-h-14 w-full items-center justify-between border-b border-blue-line text-left text-lg font-medium text-white no-underline hover:text-white";
  const sub = "flex min-h-12 items-center text-base text-stone no-underline hover:text-white";

  return (
    <div className="xl:hidden">
      <button
        ref={openButtonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex size-11 cursor-pointer items-center justify-center rounded-[var(--radius-btn)] text-blue-deep"
      >
        <Icon name="menu" />
        <span className="sr-only">Open menu</span>
      </button>

      {open ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="on-deep fixed inset-0 z-50 flex flex-col overflow-hidden bg-blue-deep text-white"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-blue-line pl-4 pr-2">
            <span id={titleId} className="font-serif text-lg font-semibold">
              Forward in Faith
            </span>
            <button
              type="button"
              data-autofocus
              onClick={close}
              className="flex size-11 cursor-pointer items-center justify-center text-white"
            >
              <Icon name="close" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flex shrink-0 gap-3 p-4">
            <Link href={primaryActions.findChurch.href} onClick={close} className="flex min-h-13 flex-1 items-center justify-center rounded-[var(--radius-btn)] bg-white font-semibold text-blue-deep no-underline">
              {primaryActions.findChurch.label}
            </Link>
            <Link href={primaryActions.give.href} onClick={close} className="flex min-h-13 flex-1 items-center justify-center rounded-[var(--radius-btn)] bg-sky font-semibold text-blue-deep no-underline">
              {primaryActions.give.label}
            </Link>
          </div>
          <nav aria-label="Main" className="flex flex-1 flex-col overflow-y-auto px-4">
            {mainNav.map((item) =>
              item.label === "Ministries" ? (
                <div key={item.href}>
                  <button type="button" className={`${row} cursor-pointer bg-transparent`} aria-expanded={ministriesOpen} aria-controls={subId} onClick={() => setMinistriesOpen((v) => !v)}>
                    Ministries
                    <Icon name={ministriesOpen ? "chevronUp" : "chevronDown"} size={20} />
                  </button>
                  <div id={subId} hidden={!ministriesOpen} className="flex flex-col border-b border-blue-line py-1 pl-4">
                    {ministries.map((m) => (
                      <Link key={m.href} href={m.href} onClick={close} className={sub}>
                        {m.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={close} className={row}>
                  {item.label}
                  {item.label === "Watch" ? (
                    <span className="rounded-md bg-stone px-2.5 py-1 text-xs font-semibold text-charcoal">OFFLINE</span>
                  ) : null}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-1 pb-6 pt-4">
              {utilityNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={close} className={sub}>
                  {item.label}
                </Link>
              ))}
              <span className="flex min-h-12 items-center text-stone">Language: English</span>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
