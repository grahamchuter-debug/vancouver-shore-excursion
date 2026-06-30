import Link from "next/link";

export function NeedHelpCTA({ excursion }: { excursion?: string }) {
  const enquireHref = excursion
    ? `/enquire?excursion=${encodeURIComponent(excursion)}`
    : "/enquire";

  return (
    <section className="rounded-xl bg-slate-900 px-6 py-8 text-white md:px-8">
      <h2 className="text-xl font-semibold">Need help choosing?</h2>
      <p className="mt-2 max-w-2xl text-slate-300">
        Tell us your ship, embarkation date, pre- or post-cruise plans, and
        interests — we&apos;ll suggest Vancouver excursions and sightseeing that
        fit your schedule.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={enquireHref}
          className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition-colors"
        >
          Enquire now
        </Link>
        <Link
          href="/vancouver-pre-cruise-guide"
          className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-slate-400 transition-colors"
        >
          Pre-cruise planning
        </Link>
      </div>
    </section>
  );
}
