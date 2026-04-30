import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description: 'Trophic Labs started the way most useful things start: with a problem we couldn’t get past on our own.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header current="/about" />
      <main>
        <section className="page-hero" style={{ paddingTop: 120, paddingBottom: 72 }}>
          <div className="wrap" style={{ maxWidth: 760 }}>
            <p className="eyebrow">
              <span className="dot" />
              About Trophic Labs
            </p>
            <h1>
              We built this <em>for ourselves.</em>
            </h1>
            <p className="lede">
              Trophic Labs started the way most useful things start: with a problem we couldn&apos;t
              get past on our own.
            </p>
          </div>
        </section>

        <article className="essay">
          <div className="wrap essay-wrap">
            <p className="lead">
              My wife and I own a Tonal. We&apos;ve used it religiously for six years. I&apos;ve
              more than tripled my strength score on it. We love the machine.
            </p>
            <p>
              But we both wanted something the machine — and the rest of the fitness software
              market — couldn&apos;t quite give us. We wanted training that was actually built
              around our own data.
            </p>

            <hr className="section-rule" />

            <h2>
              The data was rich. The <em>action</em> was missing.
            </h2>
            <p>
              Every workout I did on the Tonal was logged. Every set, every rep, every weight,
              every progression. Years of training history sitting in an app I could open any
              time. I knew the data was valuable. I just couldn&apos;t do anything with it.
            </p>
            <p>
              So I went deep. I extracted my data through the API. I analyzed it spreadsheet by
              spreadsheet. I learned a lot — which lifts I had stalled on, which muscle groups
              I&apos;d been quietly ignoring, where my volume was light, where my progression
              curves had flattened. It was real insight.
            </p>
            <p className="pullquote">
              And then I hit the wall: <em>now what?</em>
            </p>
            <p>
              Knowing what to fix is one thing. Translating that knowledge into a{' '}
              <em>workout</em> — a real one, on the Tonal, ready to go when I walk up to the
              machine — turned out to be a separate, much harder problem. The Tonal&apos;s
              built-in workouts are great, but they aren&apos;t designed around <em>my</em>{' '}
              specific data. To get something custom, I had to build it manually. Each exercise.
              Each set. Each rep target. Each weight. For every workout in a cycle.
            </p>
            <p>It was painful enough that I mostly didn&apos;t do it.</p>

            <hr className="section-rule" />

            <h2>
              Two more stories that <em>pushed us over the edge.</em>
            </h2>
            <p>
              <strong>The trainer translation problem.</strong> I worked with a personal trainer
              for a stretch. Great trainer. He&apos;d send me workouts every week, written for
              whatever equipment a normal gym has — barbells, dumbbells, cable stacks. The Tonal
              can replicate most of that, but it requires translation: which Tonal movement maps
              to a barbell row? Which is closest to a cable fly? How do I dial in the right weight
              given Tonal&apos;s variable resistance? I spent more time translating his programs
              into Tonal-executable form than actually training. The coach was great at his job.
              The infrastructure between his job and my machine didn&apos;t exist.
            </p>
            <p>
              <strong>The broken-foot scenario.</strong> Last year I broke my foot. I still wanted
              to train — most lifters do, when they can. The Tonal didn&apos;t have a program
              designed for someone with a non-weight-bearing lower body. I asked an AI for a
              custom program, and it gave me a great one: seated, upper-body-focused, structured,
              well-progressed.
            </p>
            <p className="pullquote">
              Beautiful program. <em>Useless on the Tonal.</em>
            </p>
            <p>
              To actually use it, I had to build every workout by hand on the machine. It took me
              days. And after I&apos;d done all that work, I realized I&apos;d missed something
              obvious: I hadn&apos;t grouped exercises by accessory. Every workout had me swapping
              between handles, ankle straps, the bar, and the bench multiple times mid-session.
              The program was biologically sound. It was operationally a mess.
            </p>
            <p>
              That was the moment the idea sharpened. The data is sitting there. The science is
              well-understood. AI can custom-build programs for any constraint a human has. The
              piece that was missing was the layer that turns all of that into something{' '}
              <em>executable on your specific Tonal</em> — automatically, every cycle, without you
              having to translate a single thing.
            </p>

            <hr className="section-rule" />

            <h2>
              From a tool for us to a <em>product for everyone.</em>
            </h2>
            <p>
              We built the first version just for the two of us. Quietly. As a side project. I
              extracted our data from our Tonal, built the analysis, generated the programs we
              wanted.
            </p>
            <p>
              Then we showed it to friends — other Tonal owners. Same reaction every time:{' '}
              <em>I want this.</em> People who already loved their Tonals. People who tracked their
              sleep and their steps and their workouts but couldn&apos;t connect those data points
              into a real program. People who&apos;d worked with coaches and felt the same
              translation friction. People who, like us, had walked up to the Tonal hundreds of
              times and &ldquo;picked something.&rdquo;
            </p>
            <p>
              The pattern was clear enough that we decided to build it properly. Not as a script
              for two users. As a real product, for anyone who has a Tonal and wants their data to
              actually do something.
            </p>

            <hr className="section-rule" />

            <h2>What we believe, simply.</h2>
            <p>
              We believe the data already exists. We believe the science already exists. We
              believe the AI tools to fit one to the other now exist. The piece that&apos;s been
              missing is the layer that puts them together, on your specific machine,
              automatically, every cycle.
            </p>
            <p>So we built it.</p>
            <p>
              If you have a Tonal and you&apos;ve ever felt the same frustration — that your data
              is rich and your action is poor — we built Trophic Labs for you, too.
            </p>
          </div>
        </article>

        <section
          className="closing"
          style={{ padding: '80px 0 140px', borderTop: '1px solid var(--line)' }}
        >
          <div className="wrap" style={{ maxWidth: 680 }}>
            <p className="closer">
              Welcome to the Lab. <em>Let&apos;s build yours.</em>
            </p>
            <p className="sig-line">— SJ · Trophic Labs</p>
            <div className="actions">
              <Link className="btn btn--atlas" href="/pricing">
                Begin <span className="arr" />
              </Link>
              <Link className="btn btn--ghost" href="/manifesto">
                Read the manifesto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
