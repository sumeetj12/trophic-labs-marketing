import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductWaveform from '@/components/ProductWaveform';
import FAQItem from '@/components/FAQItem';
import ProgramLibrary from '@/components/ProgramLibrary';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'TROPHIC LABS',
  description: 'Your data. Every lift. Your next workout. Automatically.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Header current="/" />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="hero-promise">
                  <span className="axis-dot" />
                  <span className="label">Performance Architecture for Tonal</span>
                </div>
                <h1 className="hero-hook-1">
                  <span className="beat">
                    Your data<span className="dot">.</span>
                  </span>
                  <span className="beat">
                    Every lift<span className="dot">.</span>
                  </span>
                  <span className="beat">
                    Your next workout<span className="dot">.</span>
                  </span>
                  <span className="beat beat--final">
                    Automatically<span className="dot">.</span>
                  </span>
                </h1>
                <p className="hero-hook-2">— The closed loop, every cycle.</p>
                <div className="hero-cta-row">
                  <Link className="btn btn--atlas" href="/pricing">
                    Begin Your First Cycle <span className="arr" />
                  </Link>
                  <Link className="btn btn--ghost" href="/manifesto">
                    Read the Manifesto
                  </Link>
                  <span className="meta">14-day trial · 30-day refund</span>
                </div>
                <p className="hero-promise-line">
                  <strong>Proven science. Your data. AI.</strong>&nbsp;That is Performance
                  Architecture.
                </p>
              </div>

              <aside className="hero-brief" aria-label="Trophic briefing example">
                <div className="sig">
                  <ProductWaveform mode="analyzing" width={240} height={96} ariaLabel="Trophic engine analyzing" />
                  <span>Trophic Engine · briefing</span>
                </div>
                <div className="body">
                  The Master Translator has read your <strong>982 working sets</strong> and finds
                  the posterior chain <strong>18% ahead of baseline</strong>. Block 02 has been
                  re-architected — a hinge-dominant day added, one push pulled, tonnage held flat.
                  Today&apos;s session loads quad-focused; quads remain the only group{' '}
                  <strong>drifting from target</strong>. The plan is now inside your Tonal.
                </div>
                <div className="meta">
                  <span>HRV ▲</span>
                  <span>SLEEP 7H 22M</span>
                  <span>982 SETS ↗</span>
                  <span>MESO 04 · WK 03 / 05</span>
                </div>
              </aside>
            </div>
            <div className="hero-grid" style={{ marginTop: 'var(--s-3)' }}>
              <div />
              <div className="hero-brief-footnote">
                Real data <span className="sep">·</span> anonymized Trophic Labs user{' '}
                <span className="sep">·</span> sample analysis
              </div>
            </div>
          </div>
        </section>

        {/* WEDGE */}
        <section className="home-section wedge">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                The Translation
              </span>
              <h2 className="section-title">
                The data was always there. <em>The architecture wasn&apos;t.</em>
              </h2>
              <p className="section-sub">
                Every Tonal session is a measurement. Stitched together over months, those
                measurements form a signal — but only if something reads it. The Master Translator
                reads it.
              </p>
            </div>

            <div className="wedge-stage">
              <div className="wedge-grid">
                <div className="wedge-col">
                  <header>
                    <h3>
                      <span className="qual">Before —</span> raw log
                    </h3>
                    <span className="wedge-tag">Unstructured</span>
                  </header>
                  <div className="mlog">
                    <div className="mlog-head">
                      <span>Date</span>
                      <span>Movement</span>
                      <span>Sets×Reps</span>
                      <span>Load</span>
                    </div>
                    {[
                      ['JAN 03', 'Goblet Squat', '3 × 12', '85 lb'],
                      ['JAN 06', 'Bench Press', '4 × 8', '135 lb'],
                      ['JAN 09', 'Bench Press', '3 × 8', '135 lb'],
                    ].map(([d, ex, n, w]) => (
                      <div className="mlog-row" key={d}>
                        <span className="d">{d}</span>
                        <span className="ex">{ex}</span>
                        <span className="n">{n}</span>
                        <span className="n">{w}</span>
                      </div>
                    ))}
                    <div className="mlog-row gap">
                      <span>skipped 5 days</span>
                    </div>
                    {[
                      ['JAN 17', 'Deadlift', '5 × 5', '185 lb'],
                      ['JAN 19', 'Curl + Lateral Raise', '3 × 15', '25 lb'],
                    ].map(([d, ex, n, w]) => (
                      <div className="mlog-row" key={d}>
                        <span className="d">{d}</span>
                        <span className="ex">{ex}</span>
                        <span className="n">{n}</span>
                        <span className="n">{w}</span>
                      </div>
                    ))}
                    <div className="mlog-row">
                      <span className="d">JAN 22</span>
                      <span className="ex">
                        Bench Press <span className="tag-same">SAME</span>
                      </span>
                      <span className="n">4 × 8</span>
                      <span className="n">135 lb</span>
                    </div>
                    <div className="mlog-row">
                      <span className="d">JAN 24</span>
                      <span className="ex">
                        Goblet Squat <span className="tag-same">SAME</span>
                      </span>
                      <span className="n">3 × 12</span>
                      <span className="n">85 lb</span>
                    </div>
                    <div className="mlog-row gap">
                      <span>skipped 8 days</span>
                    </div>
                  </div>
                </div>

                <div className="wedge-seam" aria-hidden="true" />

                <div className="wedge-col">
                  <header>
                    <h3>
                      <span className="qual">After —</span> Trophic mesocycle
                    </h3>
                    <span className="wedge-tag after">Periodized · Injected</span>
                  </header>
                  <div className="bento">
                    <div className="card b-hero">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: 12,
                        }}
                      >
                        <div>
                          <span className="b-eyebrow">Today · 50 min · Lower · Wk 3 · D2</span>
                          <div className="b-title">Hinge &amp; Squat — quads bias</div>
                        </div>
                        <span className="badge">trophic-adjusted</span>
                      </div>
                      <div className="b-rows">
                        {[
                          ['A1', 'Goblet squat', '4 × 8', '95 lb', '▲'],
                          ['A2', 'Romanian deadlift', '4 × 10', '155 lb', '▲'],
                          ['B1', 'Bulgarian split squat', '3 × 8e', '75 lb', '◆'],
                          ['B2', 'Hamstring curl', '3 × 12', '60 lb', '▲'],
                          ['C', 'Calf raise', '3 × 15', '110 lb', '▲'],
                        ].map(([id, nm, se, wt, mk], i, arr) => (
                          <div
                            className="b-row"
                            key={id}
                            style={i === arr.length - 1 ? { borderBottom: 'none' } : undefined}
                          >
                            <span className="id">{id}</span>
                            <span className="nm">{nm}</span>
                            <span className="se">{se}</span>
                            <span className="wt">{wt}</span>
                            <span className="mk">{mk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="card">
                      <span className="b-eyebrow">Posterior · ready</span>
                      <div className="b-stat-num atlas">
                        88<span className="u">%</span>
                      </div>
                      <div className="b-bar">
                        <i style={{ width: '88%' }} />
                      </div>
                    </div>
                    <div className="card">
                      <span className="b-eyebrow">HRV · 7d</span>
                      <div className="b-stat-num">
                        64<span className="u">ms</span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--t-xs)',
                          marginTop: 6,
                          color: 'var(--ok)',
                        }}
                      >
                        ▲ +8%{' '}
                        <span style={{ color: 'var(--fg-subtle)', marginLeft: 8 }}>vs 30d</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wedge-strip">
              <p>
                <span className="step">01 · INGEST</span>
                <strong>Your full training history</strong> through the Tonal API. Every set, every
                rep, every load — already on your machine, finally read as a signal.
              </p>
              <p>
                <span className="step">02 · MODEL</span>
                <strong>Best Known Practices</strong> from decades of strength and hypertrophy
                research, applied to your data — not a generic template.
              </p>
              <p>
                <span className="step">03 · INJECT</span>
                <strong>A complete five-week mesocycle</strong> appears inside your Tonal,
                workout-by-workout, executable on your specific machine.
              </p>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="home-section pillars">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Mechanism
              </span>
              <h2 className="section-title">
                Three things have to be true at once. <em>They are.</em>
              </h2>
            </div>
          </div>
          <div className="wrap">
            <div className="pillars-grid">
              <article className="pillar">
                <span className="num">— 01</span>
                <h3>Personalized to your data.</h3>
                <p>
                  Not a starter program. Not a coach&apos;s hunch. The plan reads what your body
                  has actually done — the loads you&apos;ve actually moved, the sessions
                  you&apos;ve actually completed — and writes the next five weeks against that
                  ground truth.
                </p>
              </article>
              <article className="pillar">
                <span className="num">— 02</span>
                <h3>Periodized programming.</h3>
                <p>
                  Volume waves through MEV → MAV → MRV. Frequency holds where it should and shifts
                  where it should. Deloads land before you crash, not after. The architecture of
                  progress is older than software; the software is finally old enough to apply it.
                </p>
              </article>
              <article className="pillar">
                <span className="num">— 03</span>
                <h3>Built for your machine.</h3>
                <p>
                  Every prescribed set is a movement Tonal can execute. Every prescribed load is a
                  value Tonal can deliver. The plan doesn&apos;t translate poorly into your
                  equipment — it&apos;s written{' '}
                  <em style={{ color: 'var(--violet-lum)', fontStyle: 'normal' }}>in</em> your
                  equipment&apos;s language, then injected directly. The Tonal goes in.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* METHODOLOGY (3 cards) */}
        <section className="home-section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Methodology
              </span>
              <h2 className="section-title">Standing on the shoulders of giants.</h2>
              <p className="section-sub">
                Decades of strength, hypertrophy, and longevity research, distilled into the Logic
                Layer. Three of the load-bearing ideas:
              </p>
            </div>
            <div className="method-grid">
              <Link className="method-card" href="/methodology#framework-frequency">
                <span className="num">M-01</span>
                <h3>Neural Readiness</h3>
                <p>
                  Strength is a neural skill before it is a muscular one. Programmed correctly,
                  the nervous system is asked for more on the right day, and asked for less on the
                  day after — so the muscle has somewhere to grow into.
                </p>
                <span className="more">Read the methodology</span>
                <span className="citation">Helms · Schoenfeld · Israetel</span>
              </Link>
              <Link className="method-card" href="/methodology#longevity-card">
                <span className="num">M-02</span>
                <h3>Strength-for-Life</h3>
                <p>
                  The decades-out frame: muscle as metabolic organ, strength as the most
                  predictive marker of healthspan we have. Train now for what your body will need
                  to do at seventy, eighty, ninety.
                </p>
                <span className="more">Read the methodology</span>
                <span className="citation">Attia, paraphrased · Huberman, paraphrased</span>
              </Link>
              <Link className="method-card" href="/methodology#framework-overload">
                <span className="num">M-03</span>
                <h3>Periodization</h3>
                <p>
                  Volume rises through MEV, MAV, MRV, then falls. Effort is the primary driver of
                  growth; recovery is what makes effort possible. The wave is not optional —
                  it&apos;s the only known way to keep adapting for years on end.
                </p>
                <span className="more">Read the methodology</span>
                <span className="citation">Israetel · classical block periodization</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ENGINE strip */}
        <section className="home-section engine-section" id="engine">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                The Trophic Engine
              </span>
              <h2 className="section-title">
                A closed-loop AI system. <em>Surgical integration.</em>
              </h2>
              <p className="section-sub">
                Three steps repeating, every cycle, automatic. The Intelligence Layer reads. The
                Logic Layer reasons. The Master Translator writes — directly into Tonal.
              </p>
            </div>
            <div className="engine-stage">
              <div className="engine-strip">
                <div className="engine-step">
                  <div className="stepnum">— STEP 01</div>
                  <h3>Ingest</h3>
                  <p>
                    Your complete Tonal history streams in through the API. Every set you&apos;ve
                    ever lifted is now a signal the Logic Layer can read.
                  </p>
                  <div className="visual">
                    <div className="ribbon" />
                  </div>
                </div>
                <div className="engine-step">
                  <div className="stepnum">— STEP 02</div>
                  <h3>Model</h3>
                  <p>
                    The Logic Layer applies Best Known Practices — periodization, volume landing
                    zones, frequency, deload timing — to your measured response, not a textbook
                    template.
                  </p>
                  <div className="visual">
                    <ProductWaveform mode="analyzing" />
                  </div>
                </div>
                <div className="engine-step">
                  <div className="stepnum">— STEP 03</div>
                  <h3>Inject</h3>
                  <p>
                    A complete five-week program — hypertrophy, strength, power, endurance, weight
                    loss, or one you bring yourself — pushed to your Tonal workout-by-workout. You
                    walk to the unit. The work is already there.
                  </p>
                  <div className="visual">
                    <div className="inject" aria-label="Five-week mesocycle">
                      <div className="wk wk--anchor">
                        <div className="hd">— WK 01</div>
                        <div className="ph">
                          Accumulation
                          <br />4 sessions
                        </div>
                        <div>
                          <span className="here">YOU ARE HERE</span>
                        </div>
                      </div>
                      <div className="wk">
                        <div className="hd">— WK 02</div>
                        <div className="ph">Accumulation</div>
                        <div className="ses">4 sessions</div>
                      </div>
                      <div className="wk">
                        <div className="hd">— WK 03</div>
                        <div className="ph">Intensification</div>
                        <div className="ses">4 sessions</div>
                      </div>
                      <div className="wk">
                        <div className="hd">— WK 04</div>
                        <div className="ph">Peak</div>
                        <div className="ses">3 sessions</div>
                      </div>
                      <div className="wk">
                        <div className="hd">— WK 05</div>
                        <div className="ph">Deload</div>
                        <div className="ses">2 sessions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM LIBRARY (replaces static chip strip) */}
        <ProgramLibrary />

        {/* PRICING TEASER */}
        <section className="home-section pricing-teaser" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Pricing
              </span>
              <h2 className="section-title">Two ways in.</h2>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <div className="tier">— Free Tier</div>
                <div className="name">Trophic Blueprint</div>
                <p className="blurb">
                  FREE forever. Start with 14-day Architect trial (unlimited AI). After: 3 AI
                  Actions per month. Plan import + workouts always work.
                </p>
                <div className="amount">
                  $0<span className="per">/ permanent</span>
                </div>
                <ul>
                  <li>Full ingest of your Tonal history</li>
                  <li>3 AI-architected actions per 30 days</li>
                  <li>Performance read + volume landing zones</li>
                  <li>No card required</li>
                </ul>
                <Link className="btn btn--ghost cta" href="/pricing">
                  Start with Blueprint <span className="arr" />
                </Link>
              </article>
              <article className="price-card featured">
                <div className="tier">— Paid Tier</div>
                <div className="name">Trophic Architect</div>
                <p className="blurb">
                  Unlimited AI on Sonnet 4.5. NL plan paste import. 14-day trial. 30-day
                  money-back. $99/year.
                </p>
                <div className="amount">
                  $99<span className="per">/ year</span>
                </div>
                <ul>
                  <li>Auto-injected mesocycles · 6 program tracks</li>
                  <li>Unlimited AI architecting + all program templates</li>
                  <li>Live Trophic dashboard (bento)</li>
                  <li>14-day trial · 30-day money-back</li>
                </ul>
                <Link className="btn btn--atlas cta" href="/pricing">
                  Begin Your First Cycle <span className="arr" />
                </Link>
                <div className="meta">$8.25 / month · billed annually · no card for trial</div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="home-section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Questions
              </span>
              <h2 className="section-title">The five we get most.</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-aside">
                <p>
                  Five answered here. The full record sits inside the Methodology and Engine pages
                  — every claim is sourced.
                </p>
                <Link className="btn btn--ghost btn--sm" href="/pricing#faq">
                  More on /pricing <span className="arr" />
                </Link>
              </aside>
              <div className="faq-list">
                <FAQItem q="Does this replace my coach?" defaultOpen>
                  No. The Master Translator is additive. If you have a coach, the Trophic Engine
                  sharpens what they already write. If you don&apos;t, it gives you a programmed
                  mesocycle every five weeks — automatic, on the machine you already own.
                </FAQItem>
                <FAQItem q="How is this different from Tonal’s built-in programs?">
                  Tonal&apos;s programs are excellent starting points written for many. The Master
                  Translator writes for one — you. It reads your full history, models your
                  specific volume tolerance and rate of progress, and injects a mesocycle
                  calibrated to where you actually are.
                </FAQItem>
                <FAQItem q="What does “inject” actually mean?">
                  A complete five-week plan, workout-by-workout, appears inside your Tonal. You
                  walk up to the unit on a Tuesday morning and the day&apos;s session is loaded —
                  exact movements, exact loads, exact rest intervals. No spreadsheet. No
                  translation. The Tonal goes in.
                </FAQItem>
                <FAQItem q="What happens after the five weeks?">
                  A new mesocycle is computed and injected automatically — informed by what you
                  actually did in the prior cycle. Heavier where you tolerated heavier. Lighter
                  where you needed lighter. A planned deload before you&apos;d have crashed.
                </FAQItem>
                <FAQItem q="Can I cancel?">
                  Yes. Fourteen-day trial, then $99/year. Thirty-day money-back guarantee on the
                  annual plan. Your Free Blueprint stays yours regardless.
                </FAQItem>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="closing">
          <div className="wrap">
            <span className="eyebrow">
              <span className="dot" />
              Welcome
            </span>
            <h2>
              Welcome to the Lab. <em>Let&apos;s build yours.</em>
            </h2>
            <p>Proven science. Your data. AI. — Performance Architecture.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link className="btn btn--atlas" href="/pricing">
                Begin Your First Cycle <span className="arr" />
              </Link>
              <Link className="btn btn--ghost" href="/pricing">
                Run a Free Blueprint
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
