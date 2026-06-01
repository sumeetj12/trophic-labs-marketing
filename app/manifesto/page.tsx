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
      <main id="main-content">
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
              You know more about your body than any athlete had{' '}
              <em>a decade ago.</em>
            </p>
            <p className="lede" style={{ fontWeight: 300, fontSize: 18 }}>
              Your sleep stages. Your resting heart rate. Your steps. Your weekly workout
              count. What you ate, how you slept, how your body felt this week. The data on
              your own body is already there — in your watch, in your ring, in your apps, in
              your Tonal.
            </p>
            <p
              className="lede"
              style={{ marginTop: 16, fontWeight: 300, fontSize: 18 }}
            >
              Then you walk up to your Tonal, and you choose your workout the way most of us
              still do. Whatever sounds good. Whatever fits today. Whatever you haven&apos;t
              done in a while.
            </p>
            <p
              className="lede"
              style={{ marginTop: 16, fontWeight: 300, fontSize: 18 }}
            >
              That&apos;s not wrong. It&apos;s just a gap — between everything your body is
              telling you, and the next workout your machine actually runs.
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
                <strong>Master Translator</strong> — we take the data already inside your Tonal
                and turn it into a complete, personalized, periodized program. Every cycle.
                Automatically.
              </p>
              <p>
                Tonal already gives you the hardware, the workouts, the metrics. We add what
                software is uniquely able to add: a program tailored to{' '}
                <strong>you specifically</strong> — adapted every week to what you actually
                did, what you actually need, and what the science says works for a body like
                yours, at the stage of life you&apos;re in.
              </p>
              <p>
                What makes that layer possible is <strong>AI</strong>. Not as a buzzword — as
                the only practical way to read every set, every rep, every nuance in your
                training history at the depth this needs. Outside Tonal, we plug your data into
                the most advanced AI models available — models that get better, exponentially,
                every quarter — and translate what they see back into the workout that comes
                next.
              </p>
              <p>
                That layer is what&apos;s been missing. <em>We built it.</em>
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                A library of you, <em>ready to put to work.</em>
              </h2>
              <p>
                Every set, every rep, every weight you have ever lifted is already in your
                Tonal. Every personal best. Every plateau. Every progression curve. Every
                muscle group you&apos;ve hit hard, and every one you haven&apos;t.
              </p>
              <p>
                Most people see this as a workout log. AI sees a high-resolution picture of you
                specifically — what you respond to, where you&apos;re growing fastest, where
                there&apos;s room to do more. Until the AI tools of the last 12 months, this
                library was unreadable at depth. Now it is. With the right system, that picture
                becomes action — every cycle, calibrated to you.{' '}
                <em>That&apos;s the loop we close.</em>
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
                methodologies that have been peer-reviewed, replicated, and refined over
                decades of strength and hypertrophy research.
              </p>
              <p>
                That includes <strong>volume-landmark periodization (MEV / MAV / MRV)</strong>{' '}
                from Mike Israetel and Renaissance Periodization;{' '}
                <strong>progressive overload with deload waves</strong> structured into
                five-week mesocycles; <strong>frequency optimization</strong> per Brad
                Schoenfeld&apos;s meta-analyses; and{' '}
                <strong>evidence-based programming hierarchy</strong> per Eric Helms&apos;s{' '}
                <em>Muscle and Strength Pyramid</em>.
              </p>
              <p>
                <strong>Stacy Sims</strong> — <em>women are not small men</em> — has reframed
                what evidence-based training looks like for half the population: female-specific
                physiology, the menstrual cycle, perimenopause, the recovery profile that shifts
                with hormonal cycles. The longevity arc more broadly — training today for the
                body you&apos;ll need at 80 — sits behind a lot of how we think. The same goes
                for Andrew Huberman&apos;s emphasis on training as a primary lever for health
                across decades.
              </p>
              <p>
                This is not new science. It is well-established science, applied with the
                precision software allows.{' '}
                <em>
                  Best Known Practices in. Your specific data in. Workouts on your Tonal out.
                </em>
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
                  <span className="step-name">Listen.</span> We read your full Tonal history
                  through the API — every session, every set, every progression curve.
                  Tonal&apos;s record of you is rich; most of it has been quiet. We turn the
                  volume up.
                </li>
                <li>
                  <span className="step-name">Model.</span> Our AI looks at what you&apos;ve
                  done and what you&apos;ve responded to. It calculates weekly volume per
                  muscle group, finds where you&apos;re under-served, finds where you&apos;re
                  stalled. It catches what eyes and spreadsheets miss — the side of your body
                  that&apos;s lagging the other, the week your patterns shifted, the muscle
                  that&apos;s been quietly under-stimulated all month. Then it applies the
                  volume landmarks and frequency targets from the periodization literature to
                  set the right dose for <em>your</em> current state — not a generic one.
                </li>
                <li>
                  <span className="step-name">Inject.</span> We push a complete five-week
                  mesocycle directly into your Tonal — proven methodology rendered against your
                  specific data. Volume placed where the science says muscle grows and your
                  data says you&apos;re under-trained. Intensity ramped on a curve your
                  progression rates can absorb. Deload weeks scheduled before fatigue
                  compounds.
                </li>
              </ol>
              <p>
                You walk to the Tonal. The right workout is already there. You train. We listen
                to what you actually did. <em>And not just the next cycle adjusts — this one
                does too.</em>
              </p>
              <p>
                We push the first 2 weeks of your 5-week mesocycle. As you finish week 1, AI
                rewrites weeks 3, 4, and 5 against what your body actually did — reps, sets,
                weights, modes, all recalibrated within the periodization. Most programs adjust
                weights. Trophic adjusts everything else, too — within the science.
              </p>
              <p>
                No manual programming. No spreadsheets. The cycle is auto-injected onto your
                machine. And if you&apos;d rather plug in your own preferred AI model, that
                option&apos;s on the table too — <em>the layer is yours.</em>
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
                needs twelve accessory swaps and half-translated movements turns a forty-minute
                workout into ninety — and you stop doing it.
              </p>
              <p>
                So AI designs programs that account for how the Tonal actually works — its
                movement library, its accessory transitions, its mechanics. The biology is
                sound <em>and</em> the workout is doable on the machine in front of you.{' '}
                <em>Both matter.</em>
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Adapts to the body <em>you have, this season.</em>
              </h2>
              <p>
                A program isn&apos;t just &ldquo;the right exercises.&rdquo; It&apos;s the
                right exercises for <strong>you</strong>, <em>this month</em> — for the body
                you have, the time you have, the recovery you can spend.
              </p>
              <p>
                That&apos;s where most generic programs fall over. They&apos;re built for an
                imagined average — usually a younger, fully-recovered, fully-fed lifter with
                eight hours of sleep and no other commitments. The rest of us train through
                real life: jobs, kids, jet lag, an aging shoulder, a new pregnancy, a long
                week, a great week.
              </p>
              <p>
                AI is what makes this calibration possible — reading your real-world signals at a
                depth no human could and adjusting the program before you have to. When
                you&apos;re recovering well, it presses. When you&apos;re not, it backs off. When
                you&apos;re new to weight training, it starts you where the research says new
                lifters grow fastest — and ramps as your body says you&apos;re ready. When
                you&apos;ve been at it twenty years, it programs accordingly.
              </p>
              <p>
                That&apos;s what &ldquo;personalized&rdquo; means when AI does it honestly. Not
                a vibe — a continuous calibration to the person actually using the machine.
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
                A good personal coach picks the right workout for you, sets the right volume,
                measures results, and iterates toward your specific goals. That&apos;s the
                model the Trophic Engine is built around.
              </p>
              <p>
                The difference is what AI can do that a human cannot — measure the relationships
                between volume, intensity, recovery, and progression across every lift in your
                history, apply the same proven methodologies a great coach would apply, at
                machine speed and machine memory, in lockstep with the machine you train on.
              </p>
              <p>
                If you already work with a coach, the Trophic Engine makes their job easier —
                they can see what we see. If you don&apos;t have a coach, the Trophic Engine is
                what you get instead: coach-quality programming built around your real data,
                every cycle, available the moment you open your Tonal app.
              </p>
            </div>
          </section>

          <section>
            <div className="wrap essay-wrap">
              <hr className="section-rule" />
              <h2>
                Who <em>this is for.</em>
              </h2>
              <p>
                If you have a Tonal and you&apos;re curious about your data, you are our
                person.
              </p>
              <p>
                That includes people new to weight training — many of our users started lifting
                on their Tonal, and that&apos;s exactly who we built this for. It includes
                people in their twenties, in their fifties, and in their seventies. People with
                thirty years of lifting behind them. People deciding now is when they finally
                take training seriously. Bodies in different seasons — building, recovering,
                sustaining, returning.
              </p>
              <p>
                The only requirement is that you own a Tonal and want your training to point
                somewhere specific. Your experience level, your goals, your phase of life —{' '}
                <em>those are inputs we work with, not barriers to entry.</em>
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
                health, across the full range of bodies they study — to make sure every set you
                do is a set that counts. Proven science. Your data. AI.{' '}
                <strong>That is Performance Architecture.</strong>
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
