import Link from "next/link";

export type DecisionOption = {
  label: string;
  recommendation: string;
  href?: string;
  linkText?: string;
};

export function DecisionHelperBox({
  title,
  question,
  options,
}: {
  title?: string;
  question: string;
  options: DecisionOption[];
}) {
  return (
    <aside className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-800">
          {title}
        </p>
      )}
      <h2 className={`font-semibold text-indigo-950 ${title ? "mt-2" : ""}`}>
        {question}
      </h2>
      <ul className="mt-4 space-y-4">
        {options.map((option) => (
          <li
            key={option.label}
            className="rounded-lg border border-indigo-100 bg-white p-4"
          >
            <p className="font-medium text-slate-900">{option.label}</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              {option.recommendation}
            </p>
            {option.href && option.linkText && (
              <Link
                href={option.href}
                className="mt-2 inline-block text-sm font-semibold text-blue-800 hover:underline"
              >
                {option.linkText} →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
