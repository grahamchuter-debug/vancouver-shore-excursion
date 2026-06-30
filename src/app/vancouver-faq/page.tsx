import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/vancouver-faq";

const faqs = [
  {
    question: "Should I arrive in Vancouver the day before my cruise?",
    answer:
      "Strongly recommended. A pre-cruise night absorbs flight delays and gives you time to see Capilano or Stanley Park without embarkation-day pressure.",
  },
  {
    question: "Where is Canada Place?",
    answer:
      "Downtown waterfront at 999 Canada Place — the main Alaska cruise terminal, identifiable by its five white sail-shaped peaks.",
  },
  {
    question: "Can I visit Capilano before boarding?",
    answer:
      "Yes, with afternoon check-in and luggage stored at your hotel. Morning tours typically finish by early afternoon.",
  },
  {
    question: "Can I store luggage?",
    answer:
      "Hotels usually store bags for guests touring on embarkation day. Cruise lines accept porter luggage at the terminal on check-in morning — not days in advance.",
  },
  {
    question: "Is one day enough in Vancouver?",
    answer:
      "One full day covers headline sights with a tour or tight self-planning. Two days allow a relaxed pace and neighbourhoods like Gastown and Granville Island together.",
  },
  {
    question: "Should I stay after my cruise?",
    answer:
      "If your flight is afternoon or later, yes — use the hours after disembarkation rather than waiting at the airport. An extra night rewards guests who want a proper city farewell.",
  },
  {
    question: "Can I walk around Vancouver from Canada Place?",
    answer:
      "Excellent walkability to Gastown, Robson Street, the Olympic Cauldron, and Stanley Park seawall entrances. Capilano requires a road transfer.",
  },
  {
    question: "How do I enquire about excursions?",
    answer:
      "Use our enquiry form with ship name, embarkation date, pre- or post-cruise plans, and interests. We respond with options matched to your schedule.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Vancouver Shore Excursions FAQ",
  description:
    "Frequently asked questions about Vancouver shore excursions, Canada Place, pre- and post-cruise planning, Capilano timing, hotels, and luggage.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Vancouver Shore Excursions FAQ",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Common questions"
          title="Vancouver cruise & excursion FAQ"
          subtitle="Pre-cruise arrivals, Canada Place logistics, Capilano timing, hotels, and return-to-ship planning."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="Planning guides">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/vancouver-pre-cruise-guide" className="text-blue-800 underline">
                  Pre-cruise guide
                </Link>
              </li>
              <li>
                <Link href="/vancouver-post-cruise-guide" className="text-blue-800 underline">
                  Post-cruise guide
                </Link>
              </li>
              <li>
                <Link href="/vancouver-cruise-port-guide" className="text-blue-800 underline">
                  Canada Place port guide
                </Link>
              </li>
              <li>
                <Link href="/best-hotels-near-canada-place" className="text-blue-800 underline">
                  Hotels near Canada Place
                </Link>
              </li>
              <li>
                <Link href="/excursions" className="text-blue-800 underline">
                  All excursions
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="text-blue-800 underline">
                  Enquire
                </Link>
              </li>
            </ul>
          </GuideSection>

          <FAQSection faqs={faqs} title="All questions" />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
