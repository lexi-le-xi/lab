import type { Metadata } from "next";
import Link from "next/link";
import xiPortrait from "../../public/xi-portrait.avif";

export const metadata: Metadata = {
  title: "About Xi",
  description:
    "Meet Xi Liu, a designer exploring connection through care, making, materials, behavior, play, and technology.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="about-nav">
        <Link href="/">XI LIU <span>/</span> LAB</Link>
        <p>About me</p>
        <a href="mailto:liu.xi.0802@gmail.com">Say hello ↗</a>
      </nav>

      <header className="about-hero">
        <div className="about-portrait">
          <img src={xiPortrait.src} alt="Xi Liu" />
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
        <p>Why I design</p>
        <div>
          <h2>Connection is not only the outcome. It is how I find the work.</h2>
          <p>
            I understood this while designing a spoon for my grandfather. Diabetes
            had left his fingers numb, making an ordinary spoon difficult to hold.
            Love made me pay attention to the small realities of his day—and that
            connection made meaningful needs finding possible.
          </p>
          <p>
            My practice now moves between objects, systems, behavior, play, and AI.
            Whether I am designing for older adults, rethinking manufacturing, or
            exploring attention, I return to one question: how might design help
            people build a more intentional relationship with themselves, with
            others, and with the world around them?
          </p>
        </div>
      </section>

      <section className="about-beyond">
        <p>Beyond the work</p>
        <div>
          <h2>Three ways to know the thinking behind my work.</h2>
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
