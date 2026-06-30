export type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

export function PlanningTimeline({
  title,
  items,
}: {
  title?: string;
  items: TimelineItem[];
}) {
  return (
    <section>
      {title && (
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      )}
      <ol className={`relative space-y-0 ${title ? "mt-6" : ""}`}>
        {items.map((item, index) => (
          <li key={item.title} className="relative flex gap-4 pb-8 last:pb-0">
            {index < items.length - 1 && (
              <span
                className="absolute left-[4.5rem] top-8 h-full w-px bg-slate-200"
                aria-hidden
              />
            )}
            <time className="w-16 shrink-0 text-right text-sm font-semibold text-blue-800">
              {item.time}
            </time>
            <div className="relative flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span
                className="absolute -left-[1.35rem] top-5 h-3 w-3 rounded-full border-2 border-white bg-blue-800 shadow"
                aria-hidden
              />
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
