import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { PlanningTimeline } from "@/components/PlanningTimeline";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/things-to-do-after-your-alaska-cruise";

const lateFlightItinerary = [
  {
    time: "10:30",
    title: "Disembark and store luggage",
    description:
      "Clear customs, leave bags with your hotel concierge or tour operator. Keep carry-on valuables.",
  },
  {
    time: "11:30",
    title: "Gastown brunch",
    description:
      "Historic cobblestone streets and strong coffee culture — a gentle re-entry to land life after a week at sea.",
  },
  {
    time: "1:00",
    title: "Stanley Park seawall",
    description:
      "Walk or bike a section of the loop. Flat, scenic, and easy to shorten if you need to head to the airport earlier than planned.",
  },
  {
    time: "3:00",
    title: "Canada Line to YVR",
    description:
      "Waterfront Station to airport in about 25 minutes. Allow three hours before international departure.",
  },
];

const faqs = [
  {
    question: "What can I do with a late afternoon flight?",
    answer:
      "Gastown, Granville Island, Stanley Park seawall, and private city tours with airport drop-off all fit a 6–8 hour window after disembarkation.",
  },
  {
    question: "Is half-day sightseeing realistic?",
    answer:
      "Yes — focus on one neighbourhood or a single attraction rather than trying to replicate a full pre-cruise day.",
  },
  {
    question: "Should I book an extra hotel night?",
    answer:
      "Worth it for evening flights next day or if you want a relaxed farewell dinner on the waterfront without rushing to YVR.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Things To Do After Your Alaska Cruise in Vancouver",
  description:
    "Post-cruise ideas for late flights, evening departures, extra hotel nights, airport transfers, and half-day Vancouver sightseeing after disembarkation.",
  path,
});

export default function AfterCruisePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do After Your Alaska Cruise",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Post-Cruise", href: "/vancouver-post-cruise-guide" },
            { name: "After Your Alaska Cruise" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Post-Cruise", href: "/vancouver-post-cruise-guide" },
            { name: "After Your Alaska Cruise" },
          ]}
        />
        <PageHero
          eyebrow="Post-cruise ideas"
          title="Best things to do after your Alaska cruise"
          subtitle="Late flights, evening departures, extra nights, and half-day sightseeing — make disembarkation day count."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Late afternoon flights">
            <p>
              You typically have five to seven usable hours after leaving the ship.
              Prioritise one or two experiences rather than cramming Capilano and
              Stanley Park together. Gastown and Granville Island pair well for food
              and atmosphere without long transfers.
            </p>
          </GuideSection>

          <PlanningTimeline
            title="Sample timeline — afternoon flight"
            items={lateFlightItinerary}
          />

          <GuideSection title="Evening flights and extra nights">
            <p>
              Evening departures open the full day. Revisit{" "}
              <Link href="/capilano-suspension-bridge" className="text-blue-800 underline">
                Capilano
              </Link>{" "}
              without embarkation luggage concerns, or book a{" "}
              <Link href="/private-vancouver-tours" className="text-blue-800 underline">
                private tour
              </Link>{" "}
              ending at your hotel. An extra night at a{" "}
              <Link href="/best-hotels-near-canada-place" className="text-blue-800 underline">
                Canada Place area hotel
              </Link>{" "}
              turns the last day into a proper city break.
            </p>
          </GuideSection>

          <GuideSection title="Airport transfers with sightseeing">
            <p>
              Private operators sometimes combine city highlights with YVR drop-off —
              useful when you have six or more hours. Confirm luggage capacity and
              traffic buffer when enquiring. Canada Line remains the most predictable
              option if sightseeing runs long.
            </p>
          </GuideSection>

          <GuideSection title="Half-day highlights">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Granville Island</strong> — market lunch and False Creek ferries
                (2–3 hours)
              </li>
              <li>
                <strong>Gastown &amp; Chinatown</strong> — walking history loop (2 hours)
              </li>
              <li>
                <strong>Stanley Park</strong> — seawall section and totems (2–3 hours)
              </li>
              <li>
                <strong>Waterfront stroll</strong> — Canada Place to Olympic Cauldron (1 hour)
              </li>
            </ul>
          </GuideSection>

          <ComparisonTable />

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
