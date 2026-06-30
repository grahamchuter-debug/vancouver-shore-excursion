import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionPageContent } from "@/components/ExcursionPageContent";
import { JsonLd } from "@/components/JsonLd";
import { getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { HERO_IMAGE, HERO_IMAGE_ALT, absoluteUrl, pageMetadata } from "@/lib/site";

export function createExcursionPage(slug: string) {
  const excursion = getExcursion(slug);
  if (!excursion) {
    throw new Error(`Unknown excursion slug: ${slug}`);
  }

  const baseMeta = pageMetadata({
    title: excursion.title,
    description: excursion.summary,
    path: excursion.path,
  });

  const heroImage = excursion.heroImage ?? HERO_IMAGE;
  const heroImageAlt = excursion.heroImageAlt ?? HERO_IMAGE_ALT;

  const metadata: Metadata = {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [{ url: absoluteUrl(heroImage), alt: heroImageAlt }],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [absoluteUrl(heroImage)],
    },
  };

  function ExcursionPage() {
    const data = getExcursion(slug);
    if (!data) notFound();

    return (
      <>
        <JsonLd
          data={[
            webPageSchema({
              title: data.title,
              description: data.summary,
              path: data.path,
            }),
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Excursions", href: "/excursions" },
              { name: data.shortTitle },
            ]),
            faqSchema(data.faqs),
          ]}
        />
        <ExcursionPageContent excursion={data} />
      </>
    );
  }

  return { metadata, Page: ExcursionPage };
}
