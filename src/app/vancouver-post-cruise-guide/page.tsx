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
import {
  PORT_HERO_ALT,
  PORT_HERO_IMAGE,
  absoluteUrl,
  pageMetadata,
} from "@/lib/site";

const path = "/vancouver-post-cruise-guide";

const faqs = [
  {
    question: "Should I stay after my cruise in Vancouver?",
    answer:
      "If your flight is afternoon or evening, staying even a few hours for lunch and Stanley Park beats waiting at YVR. An extra hotel night lets you decompress and see sights you missed before sailing.",
  },
  {
    question: "How long do I need before my flight?",
    answer:
      "Allow three hours before international departures from YVR — more in peak summer. Canada Line from Waterfront Station takes about 25 minutes to the airport.",
  },
  {
    question: "What can I do after leaving my ship?",
    answer:
      "Half-day options include Gastown brunch, Granville Island market, Stanley Park seawall, and organised city tours with airport drop-off.",
  },
  {
    question: "Can I store luggage after disembarkation?",
    answer:
      "Many downtown hotels store bags for day guests. Some tour operators accept luggage on airport-transfer tours — confirm when booking.",
  },
];

const postMeta = pageMetadata({
  title: "Vancouver Post-Cruise Guide — After Your Alaska Cruise",
  description:
    "What to do after disembarkation at Canada Place — late flights, extra hotel nights, half-day sightseeing, airport transfers, and realistic timing to YVR.",
  path,
});

export const metadata: Metadata = {
  ...postMeta,
  openGraph: {
    ...postMeta.openGraph,
    images: [{ url: absoluteUrl(PORT_HERO_IMAGE), alt: PORT_HERO_ALT }],
  },
};

export default function PostCruiseGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Vancouver Post-Cruise Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Post-Cruise Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Post-Cruise Guide" }]}
        />
        <PageHero
          eyebrow="Pre & post cruise hub"
          title="Vancouver post-cruise guide"
          subtitle="Your ship has docked — but the holiday does not have to end at the terminal curb."
          imageSrc={PORT_HERO_IMAGE}
          imageAlt={PORT_HERO_ALT}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Disembarkation at Canada Place places you in downtown Vancouver, not at the airport. Use that advantage."
          />

          <DecisionHelperBox
            title="Decision helper"
            question="What should I do based on my flight time?"
            options={[
              {
                label: "Morning flight (before noon)",
                recommendation:
                  "Head to YVR soon after disembarkation. Pre-book taxi or Canada Line — morning rush adds road time.",
              },
              {
                label: "Afternoon flight (noon–5 pm)",
                recommendation:
                  "Store luggage, walk Gastown or Granville Island, lunch on the waterfront, then Canada Line to airport by mid-afternoon.",
                href: "/things-to-do-after-your-alaska-cruise",
                linkText: "Post-cruise ideas",
              },
              {
                label: "Evening flight or next-day departure",
                recommendation:
                  "Book a hotel night, take a full sightseeing tour, or revisit Capilano without embarkation pressure.",
                href: "/best-hotels-near-canada-place",
                linkText: "Hotels for post-cruise stays",
              },
            ]}
          />

          <GuideSection title="After disembarkation">
            <p>
              Most guests clear the terminal by 10:00–11:00. You are steps from Coal
              Harbour, the Olympic Cauldron, and Robson Street — yet many passengers
              rush straight to the airport and miss their easiest sightseeing window.
            </p>
            <p>
              Post-cruise Vancouver works differently from a port day. There is no
              all-aboard deadline — only your flight. That opens half-day tours,
              leisurely market lunches, and private transfers that end at YVR.
            </p>
          </GuideSection>

          <GuideSection title="Airport transfers">
            <p>
              <strong>Canada Line SkyTrain</strong> from Waterfront Station is reliable
              and inexpensive. <strong>Taxis and rideshare</strong> take 25–40 minutes
              depending on traffic. Some{" "}
              <Link href="/private-vancouver-tours" className="text-blue-800 underline">
                private tours
              </Link>{" "}
              offer sightseeing with airport drop-off — efficient when you have five or
              more hours before departure.
            </p>
          </GuideSection>

          <GuideSection title="Extra hotel nights">
            <p>
              An extra night downtown rewards passengers who want a proper city coda
              after a week at sea. Waterfront hotels near Canada Place simplify morning
              checkout and afternoon flights. Pair with our{" "}
              <Link href="/things-to-do-after-your-alaska-cruise" className="text-blue-800 underline">
                post-cruise activities guide
              </Link>{" "}
              for itinerary ideas.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
