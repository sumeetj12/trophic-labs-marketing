import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trophiclabs.ai';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TROPHIC LABS · Performance Architect for Tonal',
    template: '%s · TROPHIC LABS',
  },
  description: 'Your data. Every lift. Your next workout. Automatically.',
  openGraph: {
    title: 'TROPHIC LABS',
    description: 'Performance Architect for Tonal — AI-driven',
    url: SITE_URL,
    siteName: 'Trophic Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TROPHIC LABS',
    description: 'Performance Architect for Tonal — AI-driven',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body
        style={{
          // Bind next/font CSS variables to the design tokens used in tokens.css.
          // tokens.css declares --font-sans / --font-mono with system fallbacks;
          // here we override with the loaded Google Fonts so the design canon stays intact.
          ['--font-sans' as string]:
            "var(--font-plex-sans), 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif",
          ['--font-mono' as string]:
            "var(--font-plex-mono), 'IBM Plex Mono', ui-monospace, monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
