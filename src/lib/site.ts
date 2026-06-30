export const SITE_NAME = "Vancouver Shore Excursion";
export const SITE_URL = "https://vancouvershoreexcursion.com";
export const SITE_DESCRIPTION =
  "The complete Vancouver cruise planning guide — shore excursions, pre- and post-cruise stays, hotels near Canada Place, and sightseeing for Alaska cruise passengers.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
    },
  };
}
