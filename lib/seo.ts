import type { Metadata } from 'next';

const SITE_NAME = 'TROPHIC LABS';
const TAGLINE = 'Performance Architect for Tonal';
const DEFAULT_DESCRIPTION = 'Your data. Every lift. Your next workout. Automatically.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trophiclabs.ai';

function ogImageUrl({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}): string {
  const params = new URLSearchParams({ title, subtitle });
  if (eyebrow) params.set('eyebrow', eyebrow);
  return `${SITE_URL}/og?${params.toString()}`;
}

export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title === SITE_NAME ? `${SITE_NAME} · ${TAGLINE}` : `${title} · ${SITE_NAME}`;
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  // For OG image we use the short page title (or tagline on home), not the
  // "Title · TROPHIC LABS" concatenation — the brand mark is already rendered
  // separately on the OG card.
  const ogTitle = title === SITE_NAME ? TAGLINE : title;
  const image = ogImageUrl({
    title: ogTitle,
    subtitle: desc,
    eyebrow: SITE_NAME,
  });
  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle} — ${desc}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}
