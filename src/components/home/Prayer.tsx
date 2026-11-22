import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Heading";

export function Prayer() {
  return (
    <section id="prayer" aria-labelledby="prayer-heading" className="section bg-mist">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading id="prayer-heading" eyebrow="Prayer" title="How Can We Pray With You?" rule />
        <div className="flex flex-col gap-6">
          <p className="m-0 text-lg leading-relaxed">
            Whatever you are carrying, you do not have to carry it alone. Share your request and our prayer team will pray with you. You
            can stay anonymous, and your request is never made public.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/prayer" variant="primary">
              Submit Prayer Request
            </ButtonLink>
            <ButtonLink href="/prayer#praise" variant="outline">
              Share a Praise Report
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
