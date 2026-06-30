import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { PlanningTimeline } from "@/components/PlanningTimeline";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/things-to-do-before-your-alaska-cruise";

const itinerary = [
  {
    time: "8:00",
    title: "Breakfast downtown",
    description:
      "Start near Canada Place or Gastown — cafes open early and you avoid tour coach crowds. Eat well; today is active but not rushed.",
  },
  {
    time: "9:00",
    title: "Stanley Park",
    description:
      "Walk or bike the seawall from Coal Harbour to Brockton Point totems. Allow 90 minutes for photos and harbour views toward your upcoming ship.",
  },
  {
    time: "11:00",
    title: "Capilano Suspension Bridge",
    description:
      "Pre-booked tour or shuttle to the North Shore. Lions Gate Bridge crossing is part of the experience. Plan 90–120 minutes in the park.",
  },
  {
    time: "1:30",
    title: "Lunch at Granville Island",
    description:
      "Aquabus or taxi to the public market. Sample local food stalls — smoked salmon, dumplings, and fresh berries in season.",
  },
  {
    time: "3:30",
    title: "Canada Place waterfront",
    description:
      "Return to the terminal area. Watch ships at berth, visit the Olympic Cauldron, and collect any stored luggage from your hotel.",
  },
  {
    time: "4:30",
    title: "Embarkation",
    description:
      "Walk to Canada Place for check-in within your assigned window. Porters handle large bags curbside — keep documents handy.",
  },
];

const faqs = [
  {
    question: "Is one day enough to see Vancouver before cruising?",
    answer:
      "Yes for headline sights — Stanley Park, Capilano, and Granville Island fit a well-paced pre-embarkation day with a tour or careful self-planning.",
  },
  {
    question: "Can I visit Capilano before boarding?",
    answer:
      "Yes on embarkation day if your check-in window is afternoon. Morning tours finish by early afternoon — confirm timing with your operator.",
  },
  {
    question: "Should I book a tour or go independently?",
    answer:
      "Tours compress transfers and timing — valuable on embarkation day. Independent travel suits guests with two pre-cruise days and flexible pacing.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Perfect Day in Vancouver Before Your Alaska Cruise",
  description:
    "A realistic pre-cruise itinerary — Stanley Park, Capilano Suspension Bridge, Granville Island, and Canada Place embarkation with timing that works.",
  path,
});

export default function BeforeCruisePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do Before Your Alaska Cruise",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pre-Cruise", href: "/vancouver-pre-cruise-guide" },
            { name: "Before Your Alaska Cruise" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Pre-Cruise", href: "/vancouver-pre-cruise-guide" },
            { name: "Before Your Alaska Cruise" },
          ]}
        />
        <PageHero
          eyebrow="Pre-cruise itinerary"
          title="One perfect day in Vancouver before your Alaska cruise"
          subtitle="A realistic schedule from breakfast through embarkation — Stanley Park, Capilano, Granville Island, and Canada Place."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Who this itinerary suits">
            <p>
              Designed for passengers with one full day between hotel check-out and
              afternoon embarkation. You need moderate mobility, light rain gear, and
              a hotel willing to store luggage while you tour. Adjust times if your
              cruise line assigns an earlier check-in window.
            </p>
          </GuideSection>

          <PlanningTimeline title="Sample day timeline" items={itinerary} />

          <GuideSection title="Timing notes">
            <p>
              Summer traffic on Lions Gate Bridge can add 15–20 minutes. Capilano is
              busiest late morning — earlier arrival helps. If your check-in opens at
              3:00 pm, you have more flexibility for a leisurely Granville Island lunch.
            </p>
            <p>
              Prefer a guided format? The{" "}
              <Link href="/best-of-vancouver-and-bridge" className="text-blue-800 underline">
                Best of Vancouver &amp; Bridge
              </Link>{" "}
              tour covers similar ground with transport included — enquire with your
              embarkation time.
            </p>
          </GuideSection>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-semibold text-amber-950">
              Pair your hotel stay with a Vancouver sightseeing tour
            </p>
            <p className="mt-2 text-sm text-amber-950/80">
              Book a Canada Place area hotel for the night before, tour on embarkation
              morning, and walk to the terminal with minutes to spare.
            </p>
            <Link
              href="/best-hotels-near-canada-place"
              className="mt-4 inline-block text-sm font-semibold text-blue-800 underline"
            >
              Best hotels near Canada Place →
            </Link>
          </div>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
