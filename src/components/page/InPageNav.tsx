/** Horizontal "on this page" links under a hero. Scrolls sideways on small screens. */
export function InPageNav({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="On this page" className="border-b border-line bg-mist">
      <div className="wrap">
      <ul className="m-0 flex list-none gap-8 overflow-x-auto p-0">
        {items.map((i) => (
          <li key={i.href} className="shrink-0">
            <a href={i.href} className="inline-flex min-h-14 items-center whitespace-nowrap text-[15px] font-medium text-blue-deep no-underline hover:text-royal hover:underline">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}
