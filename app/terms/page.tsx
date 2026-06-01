import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DraftBanner from '@/components/DraftBanner';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service — pending lawyer review.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <DraftBanner />
      <Header />
      <main id="main-content">
        <section className="placeholder-page">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" />
              Trust · Terms
            </p>
            <h1>Terms of Service</h1>
            <p>
              Coming soon — pending legal review. The internal draft is being prepared for lawyer
              review before publication.
            </p>
            <p style={{ marginTop: 24 }}>
              In the meantime: 14-day Architect trial, $99/year after. 30-day money-back from
              first charge. Cancel anytime, keep Architect through the paid period, then drop to
              Blueprint. Trophic Labs is not affiliated with Tonal; trademarks belong to their
              owners.
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
