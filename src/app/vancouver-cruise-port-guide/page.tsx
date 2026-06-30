import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { PORT_HERO_ALT, PORT_HERO_IMAGE, absoluteUrl, pageMetadata } from "@/lib/site";

const path = "/vancouver-cruise-port-guide";

const faqs = [
  {
    question: "Where is Canada Place cruise terminal?",
    answer:
      "Canada Place sits on the downtown waterfront at 999 Canada Place, at the foot of Burrard Street. It is the primary embarkation and disembarkation terminal for Alaska cruises.",
  },
  {
    question: "Can I walk around Vancouver from Canada Place?",
    answer:
      "Yes — Gastown, the Olympic Cauldron, Robson Street, and Stanley Park seawall entrances are all reachable on foot or by short taxi. Capilano requires a road transfer.",
  },
  {
    question: "When should I arrive before an Alaska cruise?",
    answer:
      "Most experienced cruisers arrive at least one day early — flight delays and summer airport congestion make same-day connections risky. See our pre-cruise guide for details.",
  },
  {
    question: "Can I store luggage at Canada Place?",
    answer:
      "Cruise lines typically accept luggage drop-off on embarkation morning. Hotels often store bags for pre-cruise guests. There is no general public long-term locker at the terminal itself.",
  },
];

const portMeta = pageMetadata({
  title: "Vancouver Cruise Port Guide — Canada Place",
  description:
    "Complete guide to Vancouver's Canada Place cruise terminal — embarkation, walking distances, taxis, luggage, and planning excursions before or after your Alaska cruise.",
  path,
});

export const metadata: Metadata = {
  ...portMeta,
  openGraph: {
    ...portMeta.openGraph,
    images: [{ url: absoluteUrl(PORT_HERO_IMAGE), alt: PORT_HERO_ALT }],
  },
};

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Vancouver Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Vancouver Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Vancouver Cruise Port Guide" }]}
        />
        <PageHero
          eyebrow="Port guide"
          title="Vancouver cruise port guide"
          subtitle="Canada Place is more than a pier — it is the hub for Alaska embarkation, urban sightseeing, and pre- and post-cruise planning."
          imageSrc={PORT_HERO_IMAGE}
          imageAlt={PORT_HERO_ALT}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            rows={[
              { label: "Terminal", value: "Canada Place" },
              { label: "Primary routes", value: "Alaska round-trips and one-way" },
              { label: "Walking", value: "Excellent to Gastown, waterfront, Robson Street" },
              { label: "Transfers needed", value: "Capilano, airport (YVR)" },
            ]}
            intro="Unlike many cruise ports, Vancouver is both a call and an embarkation city — your planning starts days before you sail."
          />

          <GuideSection title="Canada Place overview">
            <p>
              Canada Place&apos;s white sail-shaped roof is one of Vancouver&apos;s
              defining landmarks. Built for Expo 86, it now serves as the city&apos;s
              main cruise terminal, convention centre, and waterfront promenade. Alaska
              cruise passengers gather here for embarkation — but the site is equally
              useful as a orientation point for pre-cruise sightseeing.
            </p>
            <p>
              The terminal connects to downtown hotels, the SkyTrain at Waterfront
              Station, and the Coal Harbour seawall. You are already in the city centre
              when you step off your ship or arrive for check-in — not at an industrial
              port miles from attractions.
            </p>
          </GuideSection>

          <GuideSection title="Embarkation and disembarkation">
            <p>
              Embarkation typically runs from late morning to mid-afternoon. Your cruise
              line will assign a check-in window — arriving early rarely speeds boarding.
              Drop large luggage with porters curbside; carry essentials for the
              security and terminal queue.
            </p>
            <p>
              Disembarkation is usually complete by late morning. Guests with flights
              can head directly to YVR via taxi, rideshare, or Canada Line SkyTrain from
              Waterfront Station. Those with afternoon or evening flights often store bags
              at a hotel and tour the city — see our{" "}
              <Link href="/things-to-do-after-your-alaska-cruise" className="text-blue-800 underline">
                post-cruise guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Walking from the terminal">
            <p>
              <strong>Gastown</strong> and <strong>Chinatown</strong> lie east within
              15 minutes on foot. <strong>Robson Street</strong> shopping runs parallel
              inland. The <strong>Olympic Cauldron</strong> at Jack Poole Plaza is
              beside Canada Place. <strong>Stanley Park</strong> seawall entrances
              begin roughly 20–30 minutes west along the waterfront.
            </p>
            <p>
              <strong>Capilano Suspension Bridge</strong> and North Shore viewpoints
              require crossing Burrard Inlet — plan 20–30 minutes each way by road.
              Organised tours handle this efficiently on port days and pre-cruise
              mornings.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />

          <FAQSection faqs={faqs} />

          <ExcursionLinks title="Popular excursions from Canada Place" />

          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
