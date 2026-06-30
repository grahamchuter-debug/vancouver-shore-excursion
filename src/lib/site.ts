export const SITE_NAME = "Vancouver Shore Excursion";
export const SITE_URL = "https://vancouvershoreexcursion.com";
export const SITE_DESCRIPTION =
  "The complete Vancouver cruise planning guide — shore excursions, pre- and post-cruise stays, hotels near Canada Place, and sightseeing for Alaska cruise passengers.";
export const GEO_LABEL = "Vancouver, BC";

export const HERO_IMAGE = "/images/vancouver-hero.png";
export const HERO_IMAGE_ALT =
  "Canada Place cruise terminal with white sail-shaped roof, cruise ship at Vancouver waterfront, and North Shore mountains across Burrard Inlet";

export const PORT_HERO_IMAGE = "/images/vancouver-cruise-port.png";
export const PORT_HERO_ALT =
  "Cruise ship docked at Canada Place terminal with Vancouver waterfront and mountain backdrop";

export const PRE_CRUISE_HERO_IMAGE = "/images/vancouver-pre-cruise-hero.png";
export const PRE_CRUISE_HERO_ALT =
  "Coal Harbour waterfront at dusk with Canada Place sails illuminated and downtown Vancouver skyline";

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
  const ogImage = absoluteUrl(HERO_IMAGE);
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
      images: [{ url: ogImage, alt: HERO_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      images: [ogImage],
    },
  };
}
