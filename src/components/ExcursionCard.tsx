import Image from "next/image";
import Link from "next/link";
import type { Excursion } from "@/lib/excursions";
import { HERO_IMAGE } from "@/lib/site";

export function ExcursionCard({ excursion }: { excursion: Excursion }) {
  const imageSrc = excursion.heroImage ?? HERO_IMAGE;
  const imageAlt = excursion.heroImageAlt ?? excursion.shortTitle;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={excursion.path} className="group relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          <Link href={excursion.path} className="hover:text-blue-800">
            {excursion.shortTitle}
          </Link>
        </h3>
        <p className="mt-2 flex-grow text-sm text-slate-600">{excursion.summary}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <div>
            <dt className="font-medium text-slate-700">Duration</dt>
            <dd>{excursion.duration}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-700">Fitness</dt>
            <dd>{excursion.fitness}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-700">Transfer</dt>
            <dd>{excursion.transferRequired ? "Required" : "Often not needed"}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-700">Return confidence</dt>
            <dd>{excursion.returnConfidence}</dd>
          </div>
        </dl>
        <Link
          href={excursion.path}
          className="mt-4 text-sm font-semibold text-blue-800 hover:text-blue-950"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
