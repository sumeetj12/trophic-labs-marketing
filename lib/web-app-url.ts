/**
 * Centralized resolver for the Trophic Labs web app URL (the user-facing app
 * at app.trophiclabs.ai). Pulled from the public env var so non-prod
 * environments (preview deploys, local dev) can override.
 *
 * Used by Header (Log in link), pricing CTAs (Start with Blueprint), and any
 * future surface that needs to link a user from marketing → app.
 *
 * Matches the NEXT_PUBLIC_SITE_URL pattern already used elsewhere
 * (app/layout.tsx, app/sitemap.ts, app/robots.ts, app/api/checkout/route.ts).
 */
export const WEB_APP_URL =
  process.env.NEXT_PUBLIC_WEB_APP_URL ?? 'https://app.trophiclabs.ai';

export const webAppPath = (path: string): string => {
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  return `${WEB_APP_URL}${cleaned}`;
};
