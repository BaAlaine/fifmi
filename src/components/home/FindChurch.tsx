import { Icon } from "@/components/ui/Icon";

/** Progressive enhancement: a plain GET form that works without JavaScript and lands on the locator. */
export function FindChurch() {
  return (
    <section id="find" aria-labelledby="find-heading" className="section on-deep bg-royal text-white">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="flex flex-col gap-4">
          <h2 id="find-heading" className="h2 m-0 !text-white">
            There&apos;s a Family Near You
          </h2>
          <p className="m-0 text-lg">Search by place, or browse by country. Your location is only used if you choose to share it.</p>
        </div>
        <form action="/find-a-church" method="get" role="search" className="flex flex-col gap-4 rounded-2xl bg-white p-4 text-charcoal sm:p-5">
          <label htmlFor="find-q" className="text-[15px] font-semibold text-blue-deep">
            Where are you?
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="find-q"
              name="q"
              type="search"
              autoComplete="address-level2"
              placeholder="City, town or postcode"
              className="min-h-12 flex-1 rounded-[var(--radius-btn)] border-[1.5px] border-[#8e8a9a] px-4 text-base"
            />
            <button type="submit" className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-blue-deep px-6 font-semibold text-white hover:bg-royal">
              <Icon name="pin" size={20} />
              Find a Church
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-semibold">
            <a href="/find-a-church?near=me">Use My Location</a>
            <a href="/find-a-church#countries">Browse by country</a>
          </div>
        </form>
      </div>
    </section>
  );
}
