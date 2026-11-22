import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

const steps: { title: string; text: string; href: string; icon: IconName }[] = [
  { title: "I'm New", text: "What to expect on a first visit", href: "/im-new", icon: "user" },
  { title: "Receive Jesus", text: "Begin a life with Christ", href: "/jesus", icon: "cross" },
  { title: "Find a Church", text: "An assembly near you", href: "/find-a-church", icon: "pin" },
  { title: "Watch Live", text: "Services and Ezekiel TV", href: "/watch", icon: "play" },
  { title: "Request Prayer", text: "Our prayer team will stand with you", href: "/prayer", icon: "heart" },
  { title: "Give", text: "Securely, in your country", href: "/give", icon: "gift" },
];

export function NextSteps() {
  return (
    <section aria-labelledby="next-heading" className="bg-white">
      <div className="wrap flex flex-col gap-10 py-20 lg:py-28">
        <h2 id="next-heading" className="h2 m-0">
          How can we help you today?
        </h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-white p-6 text-charcoal no-underline transition-colors hover:border-royal hover:text-charcoal"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-mist text-purple">
                  <Icon name={s.icon} />
                </span>
                <span className="text-lg font-semibold text-blue-deep group-hover:text-royal">{s.title}</span>
                <span className="text-[15px] leading-snug text-muted">{s.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
