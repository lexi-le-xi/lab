import type { Metadata } from "next";
import Link from "next/link";
import xiPortrait from "../../public/xi-portrait.avif";

export const metadata: Metadata = {
  title: "About Xi",
  description:
    "Meet Xi Liu, a designer exploring connection through care, making, materials, behavior, play, and technology.",
};

function CornerArrow() {
  return (
    <svg className="about-corner-arrow-svg" viewBox="0 0 100 100" focusable="false" aria-hidden="true">
      <path d="M20 20L75 75M75 18V75H18" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="about-nav">
        <Link href="/">XI LIU <span>/</span> LAB</Link>
        <p>Meet the designer</p>
        <details className="about-menu">
          <summary>Menu <span aria-hidden="true">+</span></summary>
          <div>
            <Link href="/"><span>00</span><strong>Shoreline home</strong></Link>
            <Link href="/about"><span>01</span><strong>About me</strong></Link>
            <Link href="/areas/care-access"><span>02</span><strong>Designing for Care</strong></Link>
            <Link href="/areas/making-systems"><span>03</span><strong>Making &amp; Systems</strong></Link>
            <Link href="/areas/materials-time"><span>04</span><strong>Materials &amp; Time</strong></Link>
            <Link href="/areas/mind-body-behavior"><span>05</span><strong>Mind, Body &amp; Behavior</strong></Link>
            <Link href="/areas/play-ai-interaction"><span>06</span><strong>Play, AI &amp; Interaction</strong></Link>
          </div>
        </details>
      </nav>

      <header className="about-cover">
        <h1>About me</h1>
        <a href="#meet-xi" aria-label="Continue to meet Xi"><CornerArrow /></a>
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
        <a className="about-flow-arrow" href="#about-belief" aria-label="Continue to why I design"><CornerArrow /></a>
      </section>

      <section className="about-belief" id="about-belief">
        <p>What I hope to carry forward</p>
        <blockquote>
          “I want to build connection—not only between you and other people,
          but also between you and yourself, you and life, and you and the universe.”
        </blockquote>
      </section>

      <section className="about-beyond" id="about-thinking">
        <p>Beyond the work</p>
        <div>
          <nav aria-label="Explore Xi's inner practice">
            <Link href="/inspirations"><span>01</span><strong>Inspirations</strong><em>Sports, music, meditation, and lived experience</em></Link>
            <Link href="/principles"><span>02</span><strong>Principles</strong><em>Notes that help me return to the core</em></Link>
            <Link href="/philosophy"><span>03</span><strong>Philosophy</strong><em>Make less, create more</em></Link>
          </nav>
        </div>
      </section>

      <footer className="about-footer" id="about-contact">
        <p>Continue exploring</p>
        <Link className="about-footer-work" href="/">
          <h2>Explore my work<br />along the shoreline.</h2>
          <span className="about-footer-corner-arrow" aria-hidden="true">
            <CornerArrow />
          </span>
        </Link>
        <a
          className="about-cv-link"
          href="mailto:liuxi@stanford.edu?subject=CV%20request"
        >
          <strong>CV</strong>
          <span>Request a copy ↗</span>
        </a>
        <a className="about-say-hello" href="mailto:liuxi@stanford.edu">
          <strong>Say hello</strong>
          <span>liuxi@stanford.edu ↗</span>
        </a>
      </footer>
    </main>
  );
}
