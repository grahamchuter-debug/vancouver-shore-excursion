import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/private-vancouver-tours";

const faqs = [
  {
    question: "When are private tours worth it in Vancouver?",
    answer:
      "Groups of four or more, mobility needs, tight flight windows, or custom pre/post-cruise routing all favour private vehicles with flexible stops.",
  },
  {
    question: "Can a private tour pick up at my hotel?",
    answer:
      "Yes — most operators collect from downtown and airport-area hotels. Confirm embarkation-day timing if touring before Canada Place check-in.",
  },
  {
    question: "Do private tours include Capilano entry?",
    answer:
      "Usually as an add-on. Clarify admission, bridge tickets, and wait times when enquiring.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Private Vancouver Tours for Cruise Passengers",
  description:
    "Private and small-group Vancouver tours for Alaska cruise passengers — flexible Capilano, Stanley Park, and city routes for pre-cruise, port days, and post-cruise airport transfers.",
  path,
});

export default function PrivateToursPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Private Vancouver Tours",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Private Vancouver Tours" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Private Vancouver Tours" }]}
        />
        <PageHero
          eyebrow="Private & small group"
          title="Private Vancouver tours"
          subtitle="Custom pacing for families, multi-generational groups, and passengers with pre- or post-cruise scheduling constraints."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            rows={[
              { label: "Private tours", value: "Excellent in Vancouver" },
              { label: "Best for", value: "Families, custom routes, airport transfers" },
              { label: "Typical duration", value: "4–8 hours" },
              { label: "Pickup", value: "Hotels, Canada Place, YVR" },
            ]}
          />

          <GuideSection title="Why book private?">
            <p>
              Vancouver&apos;s spread-out highlights — Stanley Park, Capilano, Granville
              Island, Gastown — suit custom sequencing. Private drivers skip fixed coach
              timetables and adjust for weather, jet lag, or a late disembarkation.
            </p>
            <p>
              Post-cruise guests often book private routes ending at YVR with luggage in
              the vehicle. Pre-cruise guests tour from their hotel and return for
              embarkation without returning to a central coach depot.
            </p>
          </GuideSection>

          <GuideSection title="Popular private routes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Capilano + Stanley Park viewpoints + Canada Place drop-off</li>
              <li>City highlights + Granville Island + hotel return</li>
              <li>Disembarkation pickup + sightseeing + airport transfer</li>
              <li>Gastown, Chinatown, and Olympic Cauldron walking tour with vehicle support</li>
            </ul>
          </GuideSection>

          <ComparisonTable />

          <ExcursionLinks title="Build your private route from these excursions" />

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Ready to plan?</p>
            <p className="mt-2 text-sm text-slate-600">
              Use our enquiry form with group size, hotel, flight times, and must-see
              stops — we&apos;ll match you with appropriate private options.
            </p>
            <Link
              href="/enquire"
              className="mt-4 inline-block rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-900"
            >
              Enquire about private tours
            </Link>
          </div>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
