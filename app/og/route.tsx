import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

// Brand tokens mirrored from styles/tokens.css. We can't @import CSS into
// @vercel/og — Satori only understands inline styles — so we duplicate the
// canonical values here. If tokens.css changes, update these too.
const BG = '#0a0d12'; // ≈ oklch(11% 0.008 270) — bg-sunken
const FG = '#f4f5f7'; // ≈ oklch(96% 0.005 270) — fg
const FG_MUTED = '#a6a9b1'; // ≈ oklch(72% 0.008 270) — fg-muted
const VIOLET_LUM = '#cba7ff'; // ≈ oklch(78% 0.16 305) — violet-lum
const LINE_FAINT = '#26282d'; // ≈ oklch(24% 0.010 270) — line-faint

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') ?? 'TROPHIC LABS').slice(0, 120);
  const subtitle = (
    searchParams.get('subtitle') ?? 'Performance Architect for Tonal'
  ).slice(0, 180);
  const eyebrow = (searchParams.get('eyebrow') ?? 'TROPHIC LABS').slice(0, 60);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BG,
          padding: '80px 96px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle violet glow in upper-right */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle, rgba(145,71,255,0.18) 0%, rgba(145,71,255,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Eyebrow row: glyph + brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            color: FG_MUTED,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
            <div
              style={{
                width: 6,
                height: 16,
                background: VIOLET_LUM,
                borderRadius: 1,
                display: 'flex',
              }}
            />
            <div
              style={{
                width: 6,
                height: 36,
                background: VIOLET_LUM,
                borderRadius: 1,
                display: 'flex',
              }}
            />
            <div
              style={{
                width: 6,
                height: 16,
                background: VIOLET_LUM,
                borderRadius: 1,
                display: 'flex',
              }}
            />
          </div>
          <span>{eyebrow}</span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 300,
            color: FG,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.35,
            color: FG_MUTED,
            maxWidth: 900,
            fontWeight: 300,
          }}
        >
          {subtitle}
        </div>

        {/* Hairline rule + footer */}
        <div
          style={{
            marginTop: 48,
            borderTop: `1px solid ${LINE_FAINT}`,
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            color: FG_MUTED,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <span>trophiclabs.ai</span>
          <span style={{ color: VIOLET_LUM }}>AI-DRIVEN · CLOSED LOOP</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
