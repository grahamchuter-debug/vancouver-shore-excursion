import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionPageContent } from "@/components/ExcursionPageContent";
import { JsonLd } from "@/components/JsonLd";
import { getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/site";

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

  const metadata: Metadata = excursion.heroImage
    ? {
        ...baseMeta,
        openGraph: {
          ...baseMeta.openGraph,
          images: [
            {
              url: absoluteUrl(excursion.heroImage),
              alt: excursion.heroImageAlt ?? excursion.title,
            },
          ],
        },
      }
    : baseMeta;

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
