import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import CheckoutButton from '@/components/CheckoutButton';
import { pageMetadata } from '@/lib/seo';
import { webAppPath } from '@/lib/web-app-url';

export const metadata = pageMetadata({
  title: 'Pricing',
  description:
    'Two ways in. Blueprint reads your data — free, forever. Architect runs the closed loop, unlimited.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <Header current="/pricing" />
      <main>
        <section className="page-hero pricing-page-hero">
          <div className="wrap">
            <p className="eyebrow">
              <span className="dot" />
              Pricing · Two tiers
            </p>
            <h1>
              Two ways in.
              <br />
              <em>One closed loop.</em>
            </h1>
            <p className="lede">
              <em>Blueprint</em> reads your data and runs three AI actions a month — free, forever.{' '}
              <em>Architect</em> runs the closed loop, unlimited.
            </p>
          </div>
        </section>

        <section className="pricing-section">
          <div className="wrap">
            <div className="pricing-grid--full">
              <article className="price-card--full" aria-labelledby="tier-blueprint">
                <span className="ttag">— Tier 01</span>
                <h2 className="tier" id="tier-blueprint">
                  Blueprint
                </h2>
                <div className="price">
                  Free<span className="per">always</span>
                </div>
                <p className="subline">Always.</p>
                <p className="body">
                  FREE forever. Start with 14-day Architect trial (unlimited AI). After: 10 AI
                  Actions per month. Plan import + workouts always work.
                </p>
                <ul>
                  <li>Full Tonal history sync</li>
                  <li>
                    All built-in templates —{' '}
                    <strong>hypertrophy, strength, power, endurance, weight-loss</strong>
                  </li>
                  <li>Two weeks of programmed workouts pushed to Tonal</li>
                  <li>
                    <strong>10 AI Actions per month</strong> — rolling 30-day window
                  </li>
                </ul>
                <div className="actions">
                  <a className="btn btn--ghost btn--block" href={webAppPath('/signup')}>
                    Start with Blueprint <span className="arr" />
                  </a>
                </div>
              </article>

              <article
                className="price-card--full featured"
                aria-labelledby="tier-architect"
              >
                <span className="ttag">— Tier 02</span>
                <h2 className="tier" id="tier-architect">
                  Architect
                </h2>
                <div className="price">
                  $99<span className="per">/ year</span>
                </div>
                <p className="submeta">≈ $8.25 / month equivalent</p>
                <p className="subline">First 14 days free. No credit card required.</p>
                <p className="body">
                  Sonnet 4.5 — the sharpest model Anthropic ships — on every cycle, every
                  program, calibrated to your body. NL plan paste import. 14-day trial (10
                  Sonnet calls, then Haiku for the rest). 30-day money-back. $99/year.
                </p>
                <ul>
                  <li>Everything in Blueprint</li>
                  <li>
                    <strong>Unlimited AI Actions on Sonnet 4.5</strong>
                  </li>
                  <li>
                    Full 5-week mesocycle push — <strong>rolling 2-week window</strong>, the rest
                    holds locally
                  </li>
                  <li>
                    <strong>Adaptive mesocycle</strong> — weeks 3-5 rewrite against your real
                    week 1-2 performance (reps, sets, weights, modes — all recalibrate)
                  </li>
                  <li>
                    <strong>Natural-language plan paste</strong> — paste any plan from any AI,
                    coach, or PDF; we push it to Tonal
                  </li>
                  <li>Body composition + photo tracking</li>
                  <li>MEV / MAV / MRV per muscle group</li>
                </ul>
                <div className="actions">
                  <CheckoutButton>Begin 14-day trial</CheckoutButton>
                  <p className="fineprint">
                    Cancel anytime. No proration on cancel; refunds within 30 days of first
                    charge.
                  </p>
                </div>
              </article>
            </div>

            <div className="trust-band" aria-label="Trust signals">
              <span className="item">
                <span className="dot" />
                14-day trial · no card
              </span>
              <span className="item">
                <span className="dot" />
                30-day money-back
              </span>
              <span className="item">
                <span className="dot" />
                Cancel anytime
              </span>
              <span className="item">
                <span className="dot" />
                Your data stays yours
              </span>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="compare-section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Side-by-side
              </span>
              <h2 className="section-title">
                Where the <em>line</em> is.
              </h2>
              <p className="section-sub">
                Plan import and execution work the same on both tiers. The difference is what the
                AI is allowed to do — and how often.
              </p>
            </div>

            <table className="cmp" aria-label="Tier comparison">
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col">
                    Blueprint <span className="sub">Free</span>
                  </th>
                  <th scope="col">
                    Architect <span className="sub">$99 / yr</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="section">
                  <td colSpan={3}>— Foundation</td>
                </tr>
                <tr>
                  <td>
                    Tonal history sync
                    <span className="row-sub">Every set, rep, weight, accessory.</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Plan import + run workouts
                    <span className="row-sub">Pushed to Tonal, ready to lift.</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Body composition + photo tracking
                    <span className="row-sub">Weekly check-ins, trend lines.</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>

                <tr className="section">
                  <td colSpan={3}>— AI</td>
                </tr>
                <tr>
                  <td>
                    AI Actions per month
                    <span className="row-sub">
                      Stats insight, plan summary, session-why, feedback summary, progress summary.
                    </span>
                  </td>
                  <td>10 (rolling 30-day)</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>
                    AI model
                    <span className="row-sub">All inference runs Anthropic.</span>
                  </td>
                  <td>Haiku 4.5</td>
                  <td>Sonnet 4.5</td>
                </tr>
                <tr>
                  <td>
                    NL plan paste import
                    <span className="row-sub">
                      Paste any plan from any AI, coach, or PDF — we parse and push to Tonal.
                    </span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>

                <tr className="section">
                  <td colSpan={3}>— Programming depth</td>
                </tr>
                <tr>
                  <td>
                    Built-in templates
                    <span className="row-sub">
                      Hypertrophy, strength, power, endurance, weight-loss.
                    </span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Cycle length pushed to Tonal
                    <span className="row-sub">How far ahead the engine plans.</span>
                  </td>
                  <td>2 weeks</td>
                  <td>5-week mesocycle</td>
                </tr>
                <tr>
                  <td>
                    Weekly re-analysis + load adjustment
                    <span className="row-sub">
                      Engine re-reads your last cycle, tunes the next.
                    </span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    MEV / MAV / MRV per muscle group
                    <span className="row-sub">Volume landmarks per Israetel / RP.</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>

                <tr className="section">
                  <td colSpan={3}>— Billing</td>
                </tr>
                <tr>
                  <td>
                    14-day trial
                    <span className="row-sub">Full Architect features. No card on signup.</span>
                  </td>
                  <td>Included on signup</td>
                  <td>Included on signup</td>
                </tr>
                <tr>
                  <td>
                    30-day money-back<span className="row-sub">From first charge.</span>
                  </td>
                  <td>—</td>
                  <td>
                    <span className="yes">●</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BILLING CARD */}
        <section className="billing-section">
          <div className="wrap">
            <div className="billing-card">
              <p className="billing-summary">
                $8.25/mo billed annually · 14-day trial · 30-day money-back
              </p>
              <div>
                <span className="eyebrow">
                  <span className="dot" />
                  Architect billing
                </span>
                <h2 className="section-title" style={{ marginTop: 16 }}>
                  Annual. <em>Quietly.</em>
                </h2>
                <p className="section-sub">
                  One charge a year. Designed so you spend zero time managing the subscription and
                  100% of the time training.
                </p>
              </div>
              <div className="billing-stats">
                {[
                  { num: '$99', lbl: 'per year' },
                  { num: '$8.25', lbl: 'per month equiv.' },
                  { num: '14d', lbl: 'free trial' },
                  { num: '30d', lbl: 'money-back' },
                ].map((s) => (
                  <div className="stat" key={s.lbl}>
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
              <ul className="billing-rules">
                <li>Trial starts on signup. No credit card required to begin.</li>
                <li>
                  If you do nothing during the trial, the account converts to Blueprint — free, no
                  charge.
                </li>
                <li>If you continue on Architect, billed annually at $99 on day 15.</li>
                <li>Refundable in full within 30 days of the first charge — no questions.</li>
                <li>
                  Cancel anytime from settings. We don&apos;t proration-charge on cancel; you keep
                  Architect through the paid period, then drop to Blueprint.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" />
                Questions, answered
              </span>
              <h2 className="section-title">
                The <em>fine print</em>, plain.
              </h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-aside">
                <p>
                  Six questions we hear most often. If yours isn&apos;t here, write to us — SJ
                  reads every one.
                </p>
                <a className="btn btn--ghost btn--sm" href="mailto:hello@trophiclabs.com">
                  hello@trophiclabs.com <span className="arr" />
                </a>
              </aside>
              <div className="faq-list">
                <FAQItem q="What counts as an AI Action?" defaultOpen>
                  Each fresh AI call from one of 5 surfaces. Cached views don&apos;t count.
                  Importing and running plans never count.
                </FAQItem>
                <FAQItem q="What’s the difference between the 14-day trial and Blueprint?">
                  During the trial, you get <strong>10 calls on Sonnet 4.5</strong> — the full
                  paid model — then the engine continues on Haiku 4.5 for the remainder of the
                  14 days. Every Architect feature (NL paste, mesocycle, MEV/MAV/MRV) stays
                  unlocked the whole trial. After 14 days, if you don&apos;t pay, your account
                  drops to Blueprint: full data sync and execution stay free forever, but the AI
                  throttle drops to <strong>10 Actions per rolling 30-day window</strong>.
                </FAQItem>
                <FAQItem q="What happens if I cancel?">
                  You keep Architect through the end of your paid period, then your account drops
                  to Blueprint. Your data, history, and any plans we&apos;ve pushed to Tonal stay
                  intact. You can come back any time — same email, same history.
                </FAQItem>
                <FAQItem q="Do I need a Tonal?">
                  Yes. Trophic Labs is built specifically for Tonal — every program, every
                  progression curve, every accessory grouping is rendered against the machine you
                  actually own. We&apos;re not affiliated with Tonal; we read your data through
                  the API on your behalf, with your sign-in.
                </FAQItem>
                <FAQItem q="Is my training data private?">
                  Your data stays yours. We use it to generate <strong>your</strong> programs, on{' '}
                  <strong>your</strong> Tonal. We don&apos;t sell it, share it with advertisers,
                  or train third-party models on it. Inference runs Anthropic — Haiku 4.5 on
                  Blueprint, Sonnet 4.5 on Architect — under their enterprise data policy.
                </FAQItem>
                <FAQItem q="Why annual instead of monthly?">
                  Training cycles compound on a quarterly horizon, not a monthly one. We priced
                  for the way the science actually works, and to keep the price honest — $99 /
                  year is roughly half the per-month rate of any comparable coaching software. If
                  annual doesn&apos;t fit, the 14-day trial gives you full Architect to evaluate,
                  no card required.
                </FAQItem>
                <FAQItem q="Who’s behind this?">
                  Trophic Labs is built by SJ — six-year Tonal owner, lifter, and engineer. The
                  story of why is on the{' '}
                  <Link
                    href="/about"
                    style={{
                      color: 'var(--violet-lum)',
                      textDecoration: 'underline',
                      textUnderlineOffset: 3,
                    }}
                  >
                    /about
                  </Link>{' '}
                  page.
                </FAQItem>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="closing">
          <div className="wrap">
            <h2>
              Begin Your <em>First Cycle.</em>
            </h2>
            <p>14-day trial. No credit card. Full Architect features — designed for the body you actually have.</p>
            <div style={{ display: 'inline-flex', gap: 12, justifyContent: 'center' }}>
              <CheckoutButton className="btn btn--atlas">Begin 14-day trial</CheckoutButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
