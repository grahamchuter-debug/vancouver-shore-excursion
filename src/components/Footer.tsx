import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { excursionLinks, guideLinks, prePostCruiseLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">
            The complete Vancouver cruise planning guide — shore excursions,
            pre- and post-cruise stays, and independent advice for Alaska cruise
            passengers at Canada Place.
          </p>
          <Link
            href="/enquire"
            className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            Enquire about excursions →
          </Link>
        </div>
        <div>
          <p className="font-semibold text-white">Pre &amp; post cruise</p>
          <ul className="mt-3 space-y-2 text-sm">
            {prePostCruiseLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Planning guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {guideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Popular excursions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {excursionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>vancouvershoreexcursion.com · Canada Place · Vancouver, BC</p>
        </div>
      </div>
    </footer>
  );
}
