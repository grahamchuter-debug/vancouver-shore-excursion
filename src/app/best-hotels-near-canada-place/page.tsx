import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  HotelRecommendationCard,
  HotelSectionCTA,
  type HotelCard,
} from "@/components/HotelRecommendationCard";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-hotels-near-canada-place";

const hotels: HotelCard[] = [
  {
    category: "Luxury",
    title: "Waterfront five-star properties",
    description:
      "Full-service hotels on Coal Harbour and Canada Place offer harbour views, concierge support, and the shortest walk to embarkation. Several connect directly to the convention centre complex.",
    suitedFor: [
      "Special-occasion cruises and anniversaries",
      "Guests wanting spa and fine dining on site",
      "Minimal luggage haul on embarkation morning",
    ],
    tip: "Some waterfront hotels offer cruise packages with late checkout or luggage assistance — ask when booking, not at the desk on arrival.",
  },
  {
    category: "Walking distance",
    title: "Canada Place adjacent hotels",
    description:
      "Properties within a five-minute walk of the terminal eliminate taxi uncertainty on embarkation day. Ideal when you are touring the day before and want a simple morning routine.",
    suitedFor: [
      "Pre-cruise arrivals with afternoon tours",
      "First-time Vancouver visitors",
      "Guests without a car",
    ],
  },
  {
    category: "Families",
    title: "Suite and connected-room options",
    description:
      "Downtown hotels with pools, kitchenettes, or multiple-bedroom suites suit families arriving before a multi-generation Alaska sailing. Look for Robson Street and Burrard Street options with space to spread out.",
    suitedFor: [
      "Families with children and extra luggage",
      "Multi-cabin groups coordinating meet-ups",
      "Long-haul travellers needing recovery space",
    ],
  },
  {
    category: "Budget",
    title: "Value hotels slightly inland",
    description:
      "Properties on Burrard, Granville, and Davie streets trade harbour views for lower rates while staying within 10–15 minutes on foot or SkyTrain of Canada Place.",
    suitedFor: [
      "Cost-conscious cruisers who still want walkability",
      "One-night pre-cruise stays",
      "Guests comfortable with urban sidewalks and hills",
    ],
  },
  {
    category: "Pre-cruise convenience",
    title: "Hotels with early check-in and storage",
    description:
      "The most useful pre-cruise hotels store luggage while you tour Capilano or Stanley Park on embarkation morning. Confirm policies when reserving — not every property offers day storage.",
    suitedFor: [
      "Embarkation-day sightseeing",
      "Red-eye flight arrivals",
      "Guests on organised morning tours",
    ],
  },
  {
    category: "Post-cruise sightseeing",
    title: "Stay another night downtown",
    description:
      "After disembarkation, keeping the same hotel neighbourhood lets you store bags, tour Granville Island, and reach YVR later without changing districts.",
    suitedFor: [
      "Afternoon and evening flights next day",
      "Guests wanting a farewell Vancouver dinner",
      "Slow travel after intensive cruise weeks",
    ],
  },
];

const faqs = [
  {
    question: "How close should my hotel be to Canada Place?",
    answer:
      "For embarkation morning, walking distance removes stress. Anything within 15 minutes on foot or one SkyTrain stop works well.",
  },
  {
    question: "Are waterfront hotels connected to the terminal?",
    answer:
      "Some Coal Harbour and Canada Place complex hotels connect via indoor walkways to the convention centre and terminal area. Verify your specific property's access.",
  },
  {
    question: "When should I book a pre-cruise hotel?",
    answer:
      "May through September fills quickly for Alaska season. Book when you confirm your cruise — especially for walking-distance properties.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Hotels Near Canada Place Cruise Terminal",
  description:
    "Planning guide to hotels near Vancouver's Canada Place — luxury, walking distance, families, budget, pre-cruise convenience, and post-cruise stays. Not a booking site.",
  path,
});

export default function HotelsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Hotels Near Canada Place",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Hotels Near Canada Place" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Hotels Near Canada Place" }]}
        />
        <PageHero
          eyebrow="Planning — not booking"
          title="Best hotels near Canada Place cruise terminal"
          subtitle="Independent advice on which hotel types suit your cruise schedule — we do not sell rooms or take commissions."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="How to choose">
            <p>
              This is a planning resource, not a hotel booking website. Match your
              property to how you use Vancouver — a pre-cruise tour day needs luggage
              storage; a post-cruise afternoon flight needs late checkout or bag hold.
              Waterfront convenience costs more but saves taxi fares and morning anxiety.
            </p>
            <p>
              Some harbourfront hotels sit directly above or beside Canada Place and
              offer luggage-friendly arrangements for cruise passengers. Policies vary —
              confirm cruise packages, storage, and check-in times when you reserve.
            </p>
          </GuideSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <HotelRecommendationCard key={hotel.title} hotel={hotel} />
            ))}
          </div>

          <HotelSectionCTA />

          <GuideSection title="Neighbourhood quick reference">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Coal Harbour / Canada Place</strong> — closest to terminal,
                harbour views
              </li>
              <li>
                <strong>Gastown / Waterfront</strong> — character dining, 10-minute walk
              </li>
              <li>
                <strong>Robson Street</strong> — shopping, mid-range chains, central
              </li>
              <li>
                <strong>Yaletown</strong> — restaurants, slightly farther, flat walk
              </li>
            </ul>
            <p className="mt-4">
              See also:{" "}
              <Link href="/vancouver-pre-cruise-guide" className="text-blue-800 underline">
                pre-cruise guide
              </Link>
              ,{" "}
              <Link href="/things-to-do-before-your-alaska-cruise" className="text-blue-800 underline">
                one-day itinerary
              </Link>
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
