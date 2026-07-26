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

      <header className="about-cover">
        <h1>About me</h1>
        <a href="#meet-xi" aria-label="Continue to meet Xi">↘</a>
      </header>

      <section className="about-hero" id="meet-xi">
        <div className="about-portrait">
          <img src={xiPortrait.src} alt="Xi Liu" />
        </div>
        <div className="about-intro">
          <p>Hi, I&apos;m Xi.</p>
          <h2><em>A questioner.</em><br />A problem solver.</h2>
          <p className="about-summary">
            I ask questions to find the core of a problem, then turn that
            understanding into thoughtful, practical solutions. My work moves
            between people, objects, systems, behavior, and emerging technology.
          </p>
          <span>Designer · Maker · Researcher</span>
        </div>
      </section>

      <section className="about-belief">
        <p>What I hope to carry forward</p>
        <blockquote>
          “I want to build connection—not only between you and other people,
          but also between you and yourself, you and life, and you and the universe.”
        </blockquote>
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
        <p>Continue exploring</p>
        <h2>Return to the<br />living design practice.</h2>
        <Link href="/">Return to the shoreline <span>→</span></Link>
        <a href="mailto:liu.xi.0802@gmail.com">liu.xi.0802@gmail.com ↗</a>
      </footer>
    </main>
  );
}
