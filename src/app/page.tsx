import type { Metadata } from "next";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { pageMetadata } from "@/lib/site";

const homeMeta = pageMetadata({
  title: "Vancouver Shore Excursions & Cruise Planning Guide",
  description:
    "The complete Vancouver cruise planning guide — shore excursions, pre- and post-cruise stays, hotels near Canada Place, and sightseeing for Alaska cruise passengers.",
  path: "/",
});

export const metadata: Metadata = homeMeta;

const featuredCards = [
  {
    href: "/best-of-vancouver-and-bridge",
    label: "Best of Vancouver & Bridge",
    desc: "City highlights and Capilano in one day",
  },
  {
    href: "/capilano-suspension-bridge",
    label: "Capilano Suspension Bridge",
    desc: "Rainforest bridge and canyon walkways",
  },
  {
    href: "/stanley-park",
    label: "Stanley Park",
    desc: "Seawall, totems, and harbour views",
  },
  {
    href: "/granville-island",
    label: "Granville Island",
    desc: "Public market and False Creek ferries",
  },
  {
    href: "/vancouver-pre-cruise-guide",
    label: "Pre-Cruise Guide",
    desc: "Arrive early and plan before embarkation",
  },
  {
    href: "/vancouver-post-cruise-guide",
    label: "Post-Cruise Guide",
    desc: "Extend your stay after disembarkation",
  },
  {
    href: "/best-hotels-near-canada-place",
    label: "Hotels Near Canada Place",
    desc: "Where to stay before or after your cruise",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="relative max-w-3xl">
            <div
              className="pointer-events-none absolute -inset-8 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900 opacity-90"
              aria-hidden
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
                Vancouver, BC · Alaska cruise gateway
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Vancouver Shore Excursions
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                Explore Vancouver&apos;s spectacular waterfront, Stanley Park,
                Capilano Suspension Bridge and Granville Island before or after
                your cruise.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/excursions"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                >
                  View Excursions
                </Link>
                <Link
                  href="/vancouver-pre-cruise-guide"
                  className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
                >
                  Plan Your Vancouver Cruise Stay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <CruisePassengerSnapshot
          intro="Vancouver is unique among cruise ports — most Alaska itineraries either start or end here, making the city a planning destination, not just a port day."
          rows={[
            { label: "Port", value: "Canada Place" },
            {
              label: "Best for",
              value:
                "Alaska cruises, first-time visitors, one-day stays, pre-cruise arrivals, post-cruise extensions",
            },
            { label: "Walking", value: "Excellent from Canada Place" },
            { label: "Private tours", value: "Excellent" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Featured</h2>
          <Link href="/excursions" className="text-sm font-semibold text-blue-800">
            View all excursions →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:border-blue-300"
            >
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Make The Most Of Your Cruise Holiday
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-slate-700 leading-relaxed">
            <p>
              Many visitors focus entirely on the ship and ports of call — yet
              Vancouver sits at the beginning or end of most Alaska itineraries.
              That makes it one of the few cities where your cruise holiday can
              start before embarkation or continue after disembarkation.
            </p>
            <p>
              Arriving a day or two early lets you see Capilano, Stanley Park, and
              Granville Island without the pressure of an all-aboard deadline.
              Staying after your cruise turns a rushed airport transfer into a
              proper city break. Either way, Vancouver earns time on land rather
              than waiting in a hotel lobby or terminal.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/things-to-do-before-your-alaska-cruise"
              className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
            >
              Before your cruise
            </Link>
            <Link
              href="/things-to-do-after-your-alaska-cruise"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              After your cruise
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <ComparisonTable />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help planning?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your embarkation date, hotel plans, and
            interests. We&apos;ll recommend Vancouver excursions and sightseeing
            with realistic timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
