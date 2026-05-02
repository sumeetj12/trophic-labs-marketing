import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Methodology',
  description: 'Best Known Practices in. Your specific data in. Workouts on your Tonal out.',
  path: '/methodology',
});

export default function MethodologyPage() {
  return (
    <>
      <Header current="/methodology" />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" />
              Best Known Practices
            </p>
            <h1>We don&apos;t invent training science.</h1>
            <p className="lede">
              AI allows us to apply these methodologies — peer-reviewed, replicated, refined over
              decades — against your specific data, every cycle. Calibrated to the body you
              actually have.
            </p>
          </div>
        </section>

        <section className="frameworks-section">
          <div className="wrap">
            <header className="section-head">
              <p className="eyebrow">
                <span className="dot" />
                The frameworks we apply
              </p>
              <h2 className="section-heading">
                Five pillars. Decades of research. AI applies them to your data.
              </h2>
            </header>

            <div className="m-card-grid">
              <article className="m-card" id="framework-volume">
                <span className="m-card-eyebrow">Renaissance Periodization · Israetel</span>
                <h3 className="m-card-heading">Volume Landmarks</h3>
                <p className="m-card-body">
                  Every muscle group has a Minimum Effective Volume, a Maximum Adaptive Volume,
                  and a Maximum Recoverable Volume. Train below MEV and you don&apos;t grow. Train
                  above MRV and you stall. The Trophic Engine tracks all three landmarks for every
                  muscle group, every cycle, against your actual training history. Volume is dosed
                  — not guessed.
                </p>
              </article>

              <article className="m-card" id="framework-frequency">
                <span className="m-card-eyebrow">Meta-analyses · Schoenfeld</span>
                <h3 className="m-card-heading">Frequency Optimization</h3>
                <p className="m-card-body">
                  Brad Schoenfeld&apos;s meta-analyses settled the frequency debate: hitting each
                  muscle group 2x per week beats 1x at matched volume, and the curve flattens
                  after that. We schedule sessions against frequency optima per muscle group — not
                  against fixed bro-splits or arbitrary 4-day templates. Your split emerges from
                  your data.
                </p>
              </article>

              <article className="m-card" id="framework-overload">
                <span className="m-card-eyebrow">Five-week mesocycle structure</span>
                <h3 className="m-card-heading">Progressive Overload + Deload</h3>
                <p className="m-card-body">
                  Linear progression breaks down. Real strength curves are wavelike: accumulation,
                  accumulation, intensification, peak, deload. We program in five-week mesocycles
                  with deload waves built in — accumulated fatigue gets cleared on schedule, not
                  when you finally crash. The next cycle starts fresh, not depleted.
                </p>
              </article>

              <article className="m-card" id="framework-hierarchy">
                <span className="m-card-eyebrow">Muscle and Strength Pyramid · Helms</span>
                <h3 className="m-card-heading">Programming Hierarchy</h3>
                <p className="m-card-body">
                  Eric Helms&apos;s hierarchy: adherence first, then volume, then intensity, then
                  frequency, then exercise selection, then rest periods, then tempo. We optimize
                  what software can touch — volume, intensity, frequency, exercise selection on
                  the Tonal — and stay out of what we can&apos;t (your adherence, your recovery,
                  your life). Software doesn&apos;t fix what software can&apos;t see.
                </p>
              </article>

              <article className="m-card" id="framework-sims">
                <span className="m-card-eyebrow">Women are not small men · Sims</span>
                <h3 className="m-card-heading">Women&apos;s-Physiology Calibration</h3>
                <p className="m-card-body">
                  Stacy Sims&apos;s work — featured on Huberman and the major fitness podcasts —
                  has reframed how evidence-based training applies to female bodies. The hormonal
                  cycle is an input. Perimenopause changes the prescription. Recovery requires
                  different inputs. The Trophic Engine treats women&apos;s-physiology research as
                  a load-bearing pillar, not a special case. Half the population trains
                  differently — and the science says so.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="longevity-section">
          <div className="wrap">
            <article className="m-card m-card--longevity" id="longevity-card">
              <span className="m-card-eyebrow">The long arc</span>
              <h3 className="m-card-heading">
                Training today for the body you&apos;ll need at 80.
              </h3>
              <p className="m-card-body">
                Stacy Sims&apos;s arc for women is sharpest where it matters: the strength built
                in perimenopause is the foundation of the next thirty years — bone density,
                balance, metabolic health, the muscle that makes you yourself at 70 and 80. The
                broader longevity research points the same way: strength as a primary lever for
                health across decades, training today for the body you&apos;ll need at 80. Andrew
                Huberman has been a leading voice on resistance training as foundational to
                neural and physical health, not a vanity project for a single summer. The Trophic
                Engine programs against the long arc, AI doing the work of holding decades of
                research, your specific data, and the long arc in mind every cycle. Every cycle
                is a deposit. The compound interest is your future capacity.
              </p>
            </article>
          </div>
        </section>

        <section className="why-section">
          <div className="wrap essay-wrap">
            <p className="eyebrow">
              <span className="dot" />
              Why this matters
            </p>
            <h2>Best Known Practices in. Your specific data in. Workouts on your Tonal out.</h2>
            <p className="why-body">
              That&apos;s it. The methodology is decades old. The data was always there. What
              wasn&apos;t was AI smart enough to combine them — to read your full history at
              depth, calibrate the science to your body, and render a program against the machine
              you actually use. <em>That&apos;s what&apos;s new.</em> We don&apos;t sell novelty.
              We sell the gap between what the science has always said and what AI now lets you
              do with it.
            </p>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-wrap">
            <div className="actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--atlas" href="/pricing">
                Begin Your First Cycle <span className="arr" />
              </Link>
              <Link className="btn btn--ghost" href="/engine">
                See the engine
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
