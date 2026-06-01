import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DraftBanner from '@/components/DraftBanner';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy — pending lawyer review.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <DraftBanner />
      <Header />
      <main id="main-content">
        <section className="placeholder-page">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" />
              Trust · Privacy
            </p>
            <h1>Privacy Policy</h1>
            <p>
              Coming soon — pending legal review. The internal draft is being prepared for lawyer
              review before publication.
            </p>
            <p style={{ marginTop: 24 }}>
              In the meantime: your training data stays yours. We use it to generate{' '}
              <strong>your</strong> programs, on <strong>your</strong> Tonal. We don&apos;t sell
              it, share it with advertisers, or train third-party models on it. Inference runs
              Anthropic — Haiku 4.5 on Blueprint, Sonnet 4.5 on Architect — under their enterprise
              data policy.
            </p>
            <p style={{ marginTop: 24, color: 'var(--fg-subtle)' }}>
              Questions in the meantime: hello@trophiclabs.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
