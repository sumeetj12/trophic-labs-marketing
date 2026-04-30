import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Manifesto',
  description: 'Performance Architecture for Tonal. The closed loop, every cycle.',
  path: '/manifesto',
});

export default function ManifestoPage() {
  return (
    <>
      <Header current="/manifesto" />
      <main>
        <section className="page-hero">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <p className="eyebrow">
              <span className="dot" />
              Trophic Labs — Manifesto
            </p>
            <h1>
              Performance Architecture <em>for Tonal.</em>
            </h1>
            <p className="cold-open">
              You measure your life with surgical precision. Why are you still{' '}
              <em>&lsquo;exercising&rsquo;</em> by feel?
            </p>
            <p className="lede" style={{ fontWeight: 300, fontSize: 18 }}>
              You know your sleep stages. You know your resting heart rate, your steps, your
              weekly workout count. You know what you ate, what you slept, how hard you trained.
              You have more data on your own body than any athlete had a decade ago.
            </p>
            <p
              className="lede"
              style={{ marginTop: 16, fontWeight: 300, fontSize: 18 }}
            >
              Then you walk up to your Tonal — and choose your workout the way people chose
              workouts in 1995. By feel. By guess. By picking the one that &ldquo;looks
              fun&rdquo; or &ldquo;I haven&apos;t done in a while.&rdquo;
            </p>
            <p className="pullquote">
              That gap is <em>what we close.</em>
            </p>
          </div>
        </section>

        <article className="essay">
          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Performance Architecture <em>for Tonal.</em>
              </h2>
              <p>
                Trophic Labs is the Intelligence Layer that sits between your training data and
                your next workout. Not a wearable. Not another tracker. We are the{' '}
                <strong>Master Translator</strong> — we take the dormant data already inside your
                Tonal and turn it into a complete, personalized, periodized program. Every cycle.
                Automatically.
              </p>
              <p>
                Tonal already gives you the hardware, the workouts, the metrics. We add what
                software is uniquely able to add: a program tailored to{' '}
                <strong>you specifically</strong> — adapted every week to what you actually did,
                what you actually need, and what the science says works.
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                A treasure of data, <em>sitting still.</em>
              </h2>
              <p>
                Every set, every rep, every weight you have ever lifted is already in your Tonal.
                Every PR. Every plateau. Every progression curve. Every muscle group you have hit
                hard, and every one you haven&apos;t.
              </p>
              <p>
                Most people see all of this as a workout log. We see it as a high-resolution model
                of you specifically — what you respond to, where you stall, where you are growing,
                where you are leaving work on the table.
              </p>
              <p>
                Most of that data does nothing. With the right system, all of it becomes action —
                surgically, every cycle. That is the loop we close.
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Standing on the shoulders <em>of giants.</em>
              </h2>
              <p>
                We don&apos;t invent training principles. We apply the ones that work — the
                methodologies that have been peer-reviewed, replicated, and refined over decades
                of strength and hypertrophy research.
              </p>
              <p>
                That includes <strong>volume-landmark periodization (MEV / MAV / MRV)</strong>{' '}
                from Israetel and Renaissance Periodization;{' '}
                <strong>progressive overload with deload waves</strong> structured into five-week
                mesocycles; <strong>frequency optimization</strong> per Schoenfeld&apos;s
                meta-analyses; and <strong>evidence-based programming hierarchy</strong> per
                Helms&apos;s Muscle and Strength Pyramid. The frame Peter Attia popularized —
                training today for the body you&apos;ll need at 80 — sits behind a lot of how we
                think. The same goes for Andrew Huberman&apos;s emphasis on training as a primary
                lever for neural and physical health across decades.
              </p>
              <p>
                This is not new science. It is well-established science, applied with the
                precision software allows.{' '}
                <em>Best Known Practices in. Your specific data in. Workouts on your Tonal out.</em>
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                The Trophic Engine: <em>a closed-loop AI system.</em>
              </h2>
              <p>The Trophic Engine runs as a closed loop:</p>
              <ol className="engine-steps">
                <li>
                  <span className="step-name">Ingest.</span> We read your full Tonal history
                  through the API — every session, every set, every progression curve.
                </li>
                <li>
                  <span className="step-name">Model.</span> Our AI analyzes every lift and every
                  relationship across every workout. It calculates weekly volume per muscle group,
                  identifies under-trained muscles, finds stalled lifts, applies volume landmarks
                  and frequency targets from the literature to set the right dose for{' '}
                  <em>your</em> current state.
                </li>
                <li>
                  <span className="step-name">Inject.</span> We push a complete five-week
                  mesocycle directly into your Tonal — proven methodology rendered against your
                  specific data.
                </li>
              </ol>
              <p>
                You walk to the Tonal. The right workout is already there. You train. We watch
                what you actually did. <em>The next cycle adjusts.</em>
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Designed for the machine <em>you actually use.</em>
              </h2>
              <p>
                A program is only as good as the workout you can actually run. A plan that
                requires twelve accessory swaps and half-translated movements turns a forty-minute
                workout into ninety minutes — and you stop doing it.
              </p>
              <p>
                We design programs that account for how the Tonal actually works — its movement
                library, its accessory transitions, its mechanics. The biology is sound{' '}
                <em>and</em> the workout is executable. Both matter.
              </p>
              <p>
                This is what <strong>surgical integration</strong> means. The data goes in. The
                science goes in. The Tonal goes in. The workouts come out — designed for you,
                designed for your machine, <em>designed to be done.</em>
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Additive to your coach. <em>There when you don&apos;t have one.</em>
              </h2>
              <p>
                If you already work with a coach, the Trophic Engine makes their job easier — they
                can see what we see. If you do not have a coach, the Trophic Engine is what you
                get instead: research-grade programming built around your real data, every cycle,
                available the moment you open your Tonal app.
              </p>
            </div>
          </section>

          <section className="welcome-section">
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Welcome to <em>the Lab.</em>
              </h2>
              <p>
                We stand on the shoulders of giants — the leading experts in fitness and human
                health — to make sure every set you do is a set that counts. Proven science. Your
                data. AI. <strong>That is Performance Architecture.</strong>
              </p>
              <p>We close the loop. You bring the work. We bring the architecture.</p>
              <p className="closer">
                <strong>Welcome to the Lab.</strong> <em>Let&apos;s build yours.</em>
              </p>
              <div className="actions">
                <Link className="btn btn--atlas" href="/pricing">
                  Begin <span className="arr" />
                </Link>
                <Link className="btn btn--ghost" href="/about">
                  About Trophic Labs
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
