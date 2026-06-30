"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { excursions } from "@/lib/excursions";

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("excursion") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-emerald-900">Enquiry received</h2>
        <p className="mt-2 text-emerald-800">
          Thank you — we&apos;ll respond with Vancouver excursion options matched to
          your cruise schedule. Connect your preferred email handler in production.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Cruise line / ship</span>
          <input
            type="text"
            name="ship"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="e.g. Princess / Royal Princess"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Embarkation / port date</span>
          <input
            type="date"
            name="portDate"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Visit type</span>
          <select
            name="visitType"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Select…</option>
            <option value="pre-cruise">Pre-cruise stay</option>
            <option value="port-day">Port day only</option>
            <option value="post-cruise">Post-cruise stay</option>
            <option value="embarkation">Embarkation day</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Excursion interest</span>
          <select
            name="excursion"
            defaultValue={preselected}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Not sure yet</option>
            {excursions.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.shortTitle}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Hotel location, group size, mobility needs, flight times, check-in window…"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
      >
        Send enquiry
      </button>
    </form>
  );
}

export function EnquiryForm() {
  return (
    <Suspense fallback={<p className="text-slate-600">Loading form…</p>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
