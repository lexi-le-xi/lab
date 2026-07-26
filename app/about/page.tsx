import type { Metadata } from "next";
import Link from "next/link";
import rowingBoat from "../../public/rowing-boat-base-v5.png";

export const metadata: Metadata = {
  title: "About Xi",
  description:
    "Meet Xi Liu, a designer exploring connection through care, making, materials, behavior, play, and technology.",
};

const interests = [
  ["Care", "Designing with older adults, changing bodies, dignity, independence, family, and community in mind."],
  ["Mind, body & rhythm", "Rowing, tennis, hiking, handpan, and meditation keep my questions grounded in lived experience; anatomy, performance, brain waves, attention, and behavior let me investigate them."],
  ["Making", "Using materials, manufacturing, and participation to rethink how objects come into being."],
  ["Play & AI", "Creating interactions that return agency and attention instead of quietly taking them away."],
] as const;

const principles = [
  ["Connect before solving", "I begin by getting close enough to notice the lived reality behind a need. Connection is what makes meaningful needs finding possible."],
  ["Find the real question", "A good answer matters, but a good question can reveal possibilities hidden inside what already exists. I try to spend more energy framing the problem than rushing toward a solution."],
  ["Make less, create more", "Use fewer resources, remove unnecessary processes, and create more value, participation, meaning, and ways for a thing to live."],
  ["Return to the core", "In a world of noise, speed, and distraction, I return to first principles, protect curiosity, and ask whether I am creating or merely consuming."],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="about-nav">
        <Link href="/">XI LIU <span>/</span> STUDIO</Link>
        <p>About the designer</p>
        <a href="mailto:liu.xi.0802@gmail.com">Say hello ↗</a>
      </nav>

      <header className="about-hero">
        <div className="about-portrait" aria-hidden="true">
          <img src={rowingBoat.src} alt="" />
          <i />
        </div>
        <div className="about-intro">
          <p>Hi, I&apos;m Xi.</p>
          <h1>I design to<br /><em>build connection.</em></h1>
          <div className="about-lede">
            <span>Designer · Maker · Researcher</span>
            <p>
              I connect creativity with rationality. I am both a problem solver
              and a questioner, moving between objects, systems, behavior, and
              emerging technology. What connects the work is a belief that
              design begins by getting close enough to notice what a person, a
              body, an object, or a larger system is asking for.
            </p>
          </div>
        </div>
      </header>

      <section className="about-belief">
        <p>What I hope to carry forward</p>
        <blockquote>
          “I want to build connection—not only between you and other people,
          but also between you and yourself, you and life, and you and the universe.”
        </blockquote>
      </section>

      <section className="about-story">
        <p>How this became my practice</p>
        <div>
          <h2>Connection is not only the outcome. It is how I find the work.</h2>
          <p>
            Years spent working around manufacturing showed me the consequences
            of production without reflection: wasted resources, unnecessary
            complexity, and consumption designed to continue without end. It
            gave me an enduring question—how might we make less, yet create more?
          </p>
          <p>
            I understood this most clearly while designing a spoon for my
            grandfather. Diabetes had left his fingers numb, making an ordinary
            spoon difficult to hold. Because I loved him, I paid attention to
            the small realities of his day. That emotional connection made
            needs finding possible—and turned manufacturing into a way of caring.
          </p>
          <p>
            Since then, my questions have expanded: how can making invite
            participation? How do materials connect a purchase today to a
            consequence centuries from now? Can design help us return to our
            bodies and attention? Can AI and play deepen agency instead of
            replacing it?
          </p>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p>How I approach design</p>
          <h2>Connection is<br />a way of working.</h2>
        </div>
        <ol>
          {principles.map(([title, description], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-now">
        <div className="about-now-heading">
          <p>What I&apos;m exploring now</p>
          <h2>One practice,<br />many ways in.</h2>
        </div>
        <div className="about-interest-list">
          {interests.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stanford">
        <p>Before / now / next</p>
        <div>
          <h2>My work is becoming less about designing a thing—and more about designing a relationship.</h2>
          <p>
            Before Stanford, much of my practice centered on products, footwear,
            materials, and making. At Stanford, courses in mechanical
            manufacturing, anatomy, human performance, meditation, behavior,
            and play have widened both the scale and intimacy of my questions.
            I am still a maker, but I now see an object as one moment inside a
            much larger relationship.
          </p>
          <p>
            The next chapter of my practice is not defined by one medium. It is
            defined by the kind of connection each question asks me to build.
          </p>
        </div>
      </section>

      <section className="about-beyond">
        <p>Beyond the work</p>
        <div>
          <h2>The things that keep me moving, oriented, and curious.</h2>
          <nav aria-label="Explore Xi's inner practice">
            <Link href="/inspirations"><span>01</span><strong>Inspirations</strong><em>Sports, music, meditation, and lived experience</em><b>→</b></Link>
            <Link href="/principles"><span>02</span><strong>Principles</strong><em>Notes that help me return to the core</em><b>→</b></Link>
            <Link href="/philosophy"><span>03</span><strong>Philosophy</strong><em>Make less, create more</em><b>→</b></Link>
          </nav>
        </div>
      </section>

      <footer className="about-footer">
        <p>Keep rowing</p>
        <h2>Explore the questions<br />along the shoreline.</h2>
        <Link href="/">Return to the studio <span>→</span></Link>
        <a href="mailto:liu.xi.0802@gmail.com">liu.xi.0802@gmail.com ↗</a>
      </footer>
    </main>
  );
}
