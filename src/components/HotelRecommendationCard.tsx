import Link from "next/link";

export type HotelCard = {
  category: string;
  title: string;
  description: string;
  suitedFor: string[];
  tip?: string;
};

export function HotelRecommendationCard({ hotel }: { hotel: HotelCard }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-800">
        {hotel.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{hotel.title}</h3>
      <p className="mt-3 flex-grow text-sm text-slate-600 leading-relaxed">
        {hotel.description}
      </p>
      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {hotel.suitedFor.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-emerald-600" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      {hotel.tip && (
        <p className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
          {hotel.tip}
        </p>
      )}
    </article>
  );
}

export function HotelSectionCTA() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
      <p className="font-semibold text-amber-950">
        Pair your hotel stay with a Vancouver sightseeing tour
      </p>
      <p className="mt-2 text-sm text-amber-950/80">
        A pre-cruise hotel night plus a half-day tour is one of the most efficient
        ways to see Capilano and Stanley Park before embarkation.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          href="/best-of-vancouver-and-bridge"
          className="rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-900"
        >
          View excursions
        </Link>
        <Link
          href="/things-to-do-before-your-alaska-cruise"
          className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-950 hover:bg-amber-100"
        >
          Pre-cruise itinerary
        </Link>
      </div>
    </div>
  );
}
