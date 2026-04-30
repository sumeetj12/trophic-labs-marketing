import type { Metadata } from 'next';

const SITE_NAME = 'TROPHIC LABS';
const TAGLINE = 'Performance Architect for Tonal';
const DEFAULT_DESCRIPTION = 'Your data. Every lift. Your next workout. Automatically.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trophiclabs.ai';

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
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
  };
}
