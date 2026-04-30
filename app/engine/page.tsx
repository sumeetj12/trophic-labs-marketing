import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'The Engine',
  description: 'An Intelligence Layer for your Tonal — three steps, repeating, every cycle, automatic.',
  path: '/engine',
});

export default function EnginePage() {
  return (
    <>
      <Header current="/engine" />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" />
              The Trophic Engine
            </p>
            <h1>
              The <em>Trophic Engine.</em>
            </h1>
            <p className="lede">
              An Intelligence Layer for your Tonal — three steps, repeating, every cycle,
              automatic.
            </p>
          </div>
        </section>

        <section className="loop-section">
          <section className="step">
            <div className="wrap step-grid">
              <div className="step-copy">
                <span className="step-eyebrow">Step 01</span>
                <h2>Ingest.</h2>
                <p>
                  We read your full Tonal history through the API. Every set, every rep, every
                  weight. RPE where logged. Accessory used per movement. Time-under-tension. Rest
                  intervals. Completion confidence on every prescribed lift.{' '}
                  <em>Nothing summarized, nothing inferred</em> — the raw signal, intact.
                </p>
              </div>
              <div className="step-visual">
                <ul className="telemetry-log" aria-hidden="true">
                  {[
                    ['JAN 17', 'DL', '5×5', '@ 185'],
                    ['JAN 19', 'OHP', '4×6', '@ 95'],
                    ['JAN 22', 'BENCH', '4×8', '@ 135'],
                    ['JAN 24', 'ROW', '4×10', '@ 110'],
                    ['JAN 26', 'SQUAT', '5×5', '@ 165'],
                    ['JAN 29', 'DL', '5×5', '@ 190'],
                    ['FEB 02', 'BENCH', '4×8', '@ 140'],
                  ].map(([d, mv, set, load]) => (
                    <li key={`${d}-${mv}`}>
                      <span className="t-date">{d}</span>
                      <span className="t-mv">{mv}</span>
                      <span className="t-set">{set}</span>
                      <span className="t-load">{load}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="step">
            <div className="wrap step-grid">
              <div className="step-copy">
                <span className="step-eyebrow">Step 02</span>
                <h2>Model.</h2>
                <p>
                  The Logic Module reads the full history and applies Best Known Practices to
                  your specific data. Weekly volume per muscle group against{' '}
                  <strong>MEV / MAV / MRV</strong> landmarks. Frequency optimization per
                  Schoenfeld&apos;s meta-analyses. Progression curves and stall detection per
                  lift. Accessory grouping to keep workouts operationally clean.{' '}
                  <em>Deload timing based on accumulated fatigue, not the calendar.</em>
                </p>
              </div>
              <div className="step-visual model-wave">
                <div className="wave-bars" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <i className={`bar bar-${i}`} key={i} />
                  ))}
                </div>
                <div className="wave-axis">
                  <span>VOLUME</span>
                  <span>FATIGUE</span>
                  <span>READINESS</span>
                </div>
              </div>
            </div>
          </section>

          <section className="step">
            <div className="wrap step-grid">
              <div className="step-copy">
                <span className="step-eyebrow">Step 03</span>
                <h2>Inject.</h2>
                <p>
                  We push a complete five-week mesocycle directly into your Tonal. Phase-labeled.
                  Session-counted. Ready to lift. You walk to the machine —{' '}
                  <em>the right workout is already there.</em> We watch what you actually did. The
                  next cycle adjusts.
                </p>
              </div>
              <div className="step-visual">
                <div className="inject-cards" aria-hidden="true">
                  <div className="wk-card wk--current">
                    <span className="wk-label">WK 01</span>
                    <span className="wk-anchor">You are here</span>
                    <span className="wk-phase">Accumulation</span>
                    <span className="wk-sessions">4 sessions</span>
                  </div>
                  <div className="wk-card">
                    <span className="wk-label">WK 02</span>
                    <span className="wk-phase">Accumulation</span>
                    <span className="wk-sessions">4 sessions</span>
                  </div>
                  <div className="wk-card">
                    <span className="wk-label">WK 03</span>
                    <span className="wk-phase">Intensification</span>
                    <span className="wk-sessions">4 sessions</span>
                  </div>
                  <div className="wk-card">
                    <span className="wk-label">WK 04</span>
                    <span className="wk-phase">Peak</span>
                    <span className="wk-sessions">3 sessions</span>
                  </div>
                  <div className="wk-card wk--deload">
                    <span className="wk-label">WK 05</span>
                    <span className="wk-phase">Deload</span>
                    <span className="wk-sessions">2 sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="logic-section">
          <div className="wrap essay-wrap">
            <p className="eyebrow">
              <span className="dot" />
              Inside the Logic Module
            </p>
            <h2>
              What the engine <em>actually does.</em>
            </h2>
            <p className="lede">
              Simplified. The real engine handles edge cases, deload timing, accessory grouping,
              and dozens of other concerns. The shape, though, is this:
            </p>
            <pre className="pseudo-code" aria-label="Logic module pseudo-code">
              <code>
                <span>
                  <span className="kw">for</span> muscle <span className="kw">in</span>{' '}
                  tracked_muscles<span className="pn">:</span>
                </span>
                {'\n'}
                <span>
                  {'  '}weekly_volume <span className="op">=</span> <span>sum</span>
                  <span className="pn">(</span>sets <span className="op">*</span> load{' '}
                  <span className="op">*</span> reps <span className="kw">for</span> session{' '}
                  <span className="kw">in</span> last_7d<span className="pn">)</span>
                </span>
                {'\n'}
                <span>
                  {'  '}
                  <span className="kw">if</span> weekly_volume <span className="op">{'<'}</span>{' '}
                  <span className="id">MEV</span>
                  <span className="pn">[</span>muscle<span className="pn">]:</span>
                </span>
                {'\n'}
                <span>
                  {'    '}prescribe<span className="pn">(</span>volume_increase
                  <span className="pn">,</span> target<span className="op">=</span>
                  <span className="id">MAV</span>
                  <span className="pn">[</span>muscle<span className="pn">])</span>
                </span>
                {'\n'}
                <span>
                  {'  '}
                  <span className="kw">elif</span> weekly_volume <span className="op">{'>'}</span>{' '}
                  <span className="id">MRV</span>
                  <span className="pn">[</span>muscle<span className="pn">]:</span>
                </span>
                {'\n'}
                <span>
                  {'    '}prescribe<span className="pn">(</span>deload_week
                  <span className="pn">)</span>
                </span>
                {'\n'}
                <span>
                  {'  '}
                  <span className="kw">else</span>
                  <span className="pn">:</span>
                </span>
                {'\n'}
                <span>
                  {'    '}prescribe<span className="pn">(</span>maintenance
                  <span className="pn">)</span>
                </span>
              </code>
            </pre>
            <p className="logic-footnote">
              <strong>MEV / MAV / MRV</strong> per Israetel and Renaissance Periodization. Volume
              landmarks calculated against <em>your specific training history</em>, not generic
              population averages.
            </p>
          </div>
        </section>

        <section className="dont-section">
          <div className="wrap essay-wrap">
            <p className="eyebrow">
              <span className="dot" />
              What we don&apos;t do
            </p>
            <h2>
              We don&apos;t invent science. We don&apos;t replace coaches.{' '}
              <em>We don&apos;t claim AGI.</em>
            </h2>
            <p>
              We apply Best Known Practices — peer-reviewed, replicated, refined over decades — to
              your specific data. The methodologies are not ours.{' '}
              <em>The application of them to your Tonal, every cycle, automatically, is.</em>
            </p>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-wrap">
            <h2>
              Begin your <em>first cycle.</em>
            </h2>
            <p>14-day Architect trial. No credit card. Full closed loop.</p>
            <div className="actions">
              <Link className="btn btn--atlas" href="/pricing">
                Begin your first cycle <span className="arr" />
              </Link>
              <Link className="btn btn--ghost" href="/methodology">
                See the science
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
