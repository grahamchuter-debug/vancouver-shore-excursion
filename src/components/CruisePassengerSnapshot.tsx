import type { CruiseSnapshotFields } from "@/lib/excursions";

const defaultFields: Required<CruiseSnapshotFields> = {
  timeInPort: "6–10 hours (port day or pre-cruise)",
  bestFor: "Alaska cruises, sightseeing, pre/post stays",
  activityLevel: "Varies by tour",
  familyFriendly: "Good with age-appropriate choices",
  returnToShip: "Build 45–60 min before all-aboard",
  popularTypes: "City highlights, Capilano, Stanley Park",
};

type SnapshotRow = { label: string; value: string };

type CruisePassengerSnapshotProps = {
  fields?: CruiseSnapshotFields;
  intro?: string;
  rows?: SnapshotRow[];
};

export function CruisePassengerSnapshot({
  fields,
  intro,
  rows,
}: CruisePassengerSnapshotProps) {
  const merged = { ...defaultFields, ...fields };
  const defaultRows: SnapshotRow[] = [
    ["Typical time in port", merged.timeInPort],
    ["Best for", merged.bestFor],
    ["Activity level", merged.activityLevel],
    ["Family friendly", merged.familyFriendly],
    ["Return to ship", merged.returnToShip],
    ["Popular excursion types", merged.popularTypes],
  ].map(([label, value]) => ({ label, value }));

  const displayRows = rows ?? defaultRows;

  return (
    <aside
      className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      aria-label="Cruise passenger snapshot"
    >
      <h2 className="text-lg font-semibold text-blue-950">
        Cruise passenger snapshot
      </h2>
      {intro && (
        <p className="mt-3 text-slate-700 leading-relaxed">{intro}</p>
      )}
      <dl className="cruise-snapshot__grid mt-5">
        {displayRows.map(({ label, value }) => (
          <div key={label} className="cruise-snapshot__item">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function CruisePassengerCallout({ children }: { children?: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
      <h2 className="text-lg font-semibold text-blue-950">
        Best for cruise passengers visiting Vancouver
      </h2>
      <div className="mt-3 text-slate-700 leading-relaxed">
        {children ?? (
          <p>
            Vancouver is both an Alaska cruise gateway and a destination in its own
            right. Canada Place puts you at the centre of waterfront sightseeing —
            but Capilano and the North Shore need planned transfers. Match your
            plans to whether you are in port for a day, arriving early, or staying
            after disembarkation.
          </p>
        )}
      </div>
    </section>
  );
}
