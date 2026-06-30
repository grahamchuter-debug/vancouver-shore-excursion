import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Enquire — Vancouver Shore Excursions",
  description:
    "Enquire about Vancouver shore excursions and cruise planning — share your ship, embarkation date, pre- or post-cruise plans, and interests. Enquiry-only, no online checkout.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Enquire" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only"
          title="Book or enquire"
          subtitle="No prices displayed — share your Vancouver cruise details and we will recommend excursions and sightseeing that fit your schedule."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <CruisePassengerCallout>
              <p>
                Include your cruise line, ship name, embarkation date, hotel location,
                flight times, and whether you are planning pre-cruise, post-cruise, or
                port-day touring.
              </p>
            </CruisePassengerCallout>
            <ReturnToShipBlock confidence="High" />
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <EnquiryForm />
            </div>
          </div>
          <div>
            <ExcursionLinks title="Popular enquiries" />
          </div>
        </div>
      </div>
    </>
  );
}
