import Link from "next/link";
import { excursions } from "@/lib/excursions";

export type ComparisonRow = {
  tour: string;
  href: string;
  duration: string;
  activity: string;
  bestFor: string;
  confidence: string;
  transfer: string;
};

export function ComparisonTable({ rows }: { rows?: ComparisonRow[] }) {
  const defaultRows: ComparisonRow[] = excursions.map((e) => ({
    tour: e.shortTitle,
    href: e.path,
    duration: e.duration.split("(")[0].trim(),
    activity: e.fitness,
    bestFor: e.bestFor[0] ?? "",
    confidence: e.returnConfidence,
    transfer: e.transferRequired ? "Yes" : "Often no",
  }));

  const data = rows ?? defaultRows;

  const confidenceStyles: Record<string, string> = {
    High: "bg-emerald-100 text-emerald-800",
    Moderate: "bg-amber-100 text-amber-800",
    Tight: "bg-rose-100 text-rose-800",
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-900">
        Compare Vancouver excursions
      </h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Match duration, transfer needs, and return confidence to your port day or
        pre-cruise schedule.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Tour</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
              <th className="px-4 py-3 font-semibold">Activity</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Transfer</th>
              <th className="px-4 py-3 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((row) => (
              <tr key={row.href} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link href={row.href} className="text-blue-800 hover:underline">
                    {row.tour}
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-700">{row.duration}</td>
                <td className="px-4 py-3 text-slate-700">{row.activity}</td>
                <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                <td className="px-4 py-3 text-slate-700">{row.transfer}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${confidenceStyles[row.confidence] ?? "bg-slate-100 text-slate-800"}`}
                  >
                    {row.confidence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
