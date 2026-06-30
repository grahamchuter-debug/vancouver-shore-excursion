import type { Metadata } from "next";
import { ExcursionCard } from "@/components/ExcursionCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/excursions";

export const metadata: Metadata = pageMetadata({
  title: "Vancouver Shore Excursions",
  description:
    "Browse Vancouver shore excursions for cruise passengers — Best of Vancouver & Bridge, Capilano, Stanley Park, Granville Island, Gastown, and private tour options.",
  path,
});

export default function ExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Vancouver Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Excursions" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Excursions" }]}
        />
        <PageHero
          eyebrow="Excursions hub"
          title="Vancouver shore excursions"
          subtitle="Every tour below includes cruise passenger snapshots, return-to-ship guidance, and a direct enquiry path — for port days, pre-cruise visits, and embarkation days."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
        <div className="mt-12">
          <ComparisonTable />
        </div>
        <div className="mt-12">
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
