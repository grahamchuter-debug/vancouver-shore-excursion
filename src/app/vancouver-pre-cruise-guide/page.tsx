import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { DecisionHelperBox } from "@/components/DecisionHelperBox";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/vancouver-pre-cruise-guide";

const faqs = [
  {
    question: "Should I arrive in Vancouver the day before my cruise?",
    answer:
      "Yes — one extra night is the most common recommendation. It absorbs flight delays, jet lag, and timezone changes while giving you a full day to see Capilano or Stanley Park before embarkation stress.",
  },
  {
    question: "Can I tour Vancouver before checking in?",
    answer:
      "Absolutely. Store luggage at your hotel, book a morning tour, and return for afternoon embarkation. Many guests do exactly this on Alaska sailings.",
  },
  {
    question: "Is two nights before the cruise worth it?",
    answer:
      "If you are travelling from Europe or the east coast, two nights helps recovery and allows a fuller sightseeing day plus a relaxed embarkation morning.",
  },
  {
    question: "Where should I stay before embarkation?",
    answer:
      "Hotels near Canada Place minimise transfer on embarkation morning. See our hotels guide for luxury, family, and budget options.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Vancouver Pre-Cruise Guide — Plan Before Your Alaska Cruise",
  description:
    "Should you arrive early? Where to stay near Canada Place, what to see before embarkation, Capilano timing, luggage tips, and realistic pre-cruise itineraries.",
  path,
});

export default function PreCruiseGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Vancouver Pre-Cruise Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pre-Cruise Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Pre-Cruise Guide" }]}
        />
        <PageHero
          eyebrow="Pre & post cruise hub"
          title="Vancouver pre-cruise guide"
          subtitle="Arriving before embarkation turns Vancouver from a transit city into the opening chapter of your Alaska holiday."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Most Alaska cruises sail from Canada Place — passengers who arrive one or two days early gain a stress-free buffer and real time to explore."
          />

          <DecisionHelperBox
            title="Decision helper"
            question="How many nights should I book before embarkation?"
            options={[
              {
                label: "Same-day arrival",
                recommendation:
                  "Risky in summer — flight delays can jeopardise embarkation. Only consider this with generous connection times and carry-on luggage.",
              },
              {
                label: "One night early (most popular)",
                recommendation:
                  "Arrive afternoon or evening, enjoy Gastown or the waterfront, tour Capilano or Stanley Park the next day, embark the following afternoon.",
                href: "/things-to-do-before-your-alaska-cruise",
                linkText: "See sample one-day itinerary",
              },
              {
                label: "Two nights early",
                recommendation:
                  "Ideal for long-haul travellers. Day one recover; day two full sightseeing; day three relaxed embarkation morning.",
                href: "/best-hotels-near-canada-place",
                linkText: "Hotels near Canada Place",
              },
            ]}
          />

          <GuideSection title="Why pre-cruise time matters in Vancouver">
            <p>
              Vancouver is not a port you glimpse from a highway coach. Canada Place
              sits in the downtown core — Stanley Park, Granville Island, Gastown, and
              the North Shore bridges are all within reach. Passengers who treat the
              city as a layover miss the rainforest, markets, and harbour views that
              define the destination.
            </p>
            <p>
              Arriving early also protects your investment. Summer fog, thunderstorms
              across North America, and YVR congestion all create missed-connection
              risk. A hotel night near Canada Place converts that anxiety into a
              waterfront walk and a proper dinner.
            </p>
          </GuideSection>

          <GuideSection title="What to do before boarding">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/best-of-vancouver-and-bridge" className="text-blue-800 underline">
                  Best of Vancouver &amp; Bridge
                </Link>{" "}
                — efficient highlights if you have one full day
              </li>
              <li>
                <Link href="/capilano-suspension-bridge" className="text-blue-800 underline">
                  Capilano Suspension Bridge
                </Link>{" "}
                — morning tour, afternoon hotel return
              </li>
              <li>
                <Link href="/stanley-park" className="text-blue-800 underline">
                  Stanley Park seawall
                </Link>{" "}
                — flexible half-day on foot or bike
              </li>
              <li>
                <Link href="/granville-island" className="text-blue-800 underline">
                  Granville Island market
                </Link>{" "}
                — lunch and Aquabus scenery
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Practical tips">
            <p>
              Book a hotel within walking distance of Canada Place for embarkation
              morning simplicity. Confirm luggage storage if you tour before check-in.
              Reserve popular tours in peak season (May–September). Keep passports and
              embarkation documents in your carry-on during pre-cruise touring.
            </p>
          </GuideSection>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-semibold text-amber-950">
              Pair your hotel stay with a Vancouver sightseeing tour
            </p>
            <p className="mt-2 text-sm text-amber-950/80">
              A downtown hotel plus a half-day organised tour is the easiest way to see
              Capilano without navigating Lions Gate traffic on your own.
            </p>
            <Link
              href="/enquire"
              className="mt-4 inline-block text-sm font-semibold text-blue-800 underline"
            >
              Enquire about pre-cruise tours →
            </Link>
          </div>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
