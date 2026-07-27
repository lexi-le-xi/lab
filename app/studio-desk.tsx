"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import rowingBoat from "../public/rowing-boat-base-v5.png";
import rowingWorld from "../public/rowing-world-v7.png";
import paintedGull from "../public/seagull-painted-v1.png";
import { NavigationMenu } from "./site-chrome";

const places = [
  {
    slug: "care-access",
    index: "01",
    title: "Designing for Care",
    connection: "Connection with people",
    insight: "Care reveals what ordinary design overlooks.",
    top: "87%",
    left: "75%",
    mobileLeft: "28%",
  },
  {
    slug: "making-systems",
    index: "02",
    title: "Making & Systems",
    connection: "Connection through making",
    insight: "Fewer processes can create more participation.",
    top: "66%",
    left: "71%",
    mobileLeft: "20%",
  },
  {
    slug: "materials-time",
    index: "03",
    title: "Materials & Time",
    connection: "Connection with consequence",
    insight: "What takes minutes to make may remain for centuries.",
    top: "53.5%",
    left: "88%",
    mobileLeft: "48%",
  },
  {
    slug: "mind-body-behavior",
    index: "04",
    title: "Mind, Body & Behavior",
    connection: "Connection with ourselves",
    insight: "Awareness begins by returning to the body.",
    top: "34%",
    left: "69%",
    mobileLeft: "38%",
  },
  {
    slug: "play-ai-interaction",
    index: "05",
    title: "Play, AI & Interaction",
    connection: "Connection through interaction",
    insight: "Technology can return attention instead of taking it.",
    top: "18%",
    left: "73%",
    mobileLeft: "42%",
  },
] as const;

const flyingIdeas = [
  { href: "/inspirations", title: "Inspirations", note: "What keeps me alive to the world" },
  { href: "/principles", title: "Principles", note: "What helps me return to the core" },
  { href: "/philosophy", title: "Philosophy", note: "Make less, create more" },
] as const;

export function StudioDesk() {
  const journeyRef = useRef<HTMLElement>(null);
  const strokeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progress, setProgress] = useState(0);
  const [rowing, setRowing] = useState(false);

  useEffect(() => {
    const update = () => {
      const journey = journeyRef.current;
      if (!journey) return;
      const distance = journey.offsetHeight - window.innerHeight;
      const next = Math.min(1, Math.max(0, -journey.getBoundingClientRect().top / distance));
      setProgress(next);
      setRowing(true);
      if (strokeTimer.current) clearTimeout(strokeTimer.current);
      strokeTimer.current = setTimeout(() => setRowing(false), 180);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (strokeTimer.current) clearTimeout(strokeTimer.current);
    };
  }, []);

  const current = Math.min(places.length - 1, Math.floor(progress * places.length));

  return (
    <main className="rowing-home">
      <header className="rowing-nav">
        <Link href="/" className="rowing-mark">XI LIU <span>/</span> LAB</Link>
        <p>I design to build connection.</p>
        <NavigationMenu />
      </header>

      <section
        ref={journeyRef}
        className="rowing-journey"
        style={{ "--journey-progress": progress } as React.CSSProperties}
      >
        <div className="rowing-viewport">
          <div
            className="rowing-landscape"
            style={{ backgroundImage: `url('${rowingWorld.src}')` }}
            aria-hidden="true"
          />

          <div className="land-breeze" aria-hidden="true">
            {[8, 24, 43, 61, 79, 94].map((top, index) => (
              <b key={`tree-${top}`} style={{ top: `${top}%`, left: `${3 + (index % 2) * 26}%`, animationDelay: `${-index * 0.8}s` }} />
            ))}
            {[16, 32, 48, 67, 84].map((top, index) => (
              <span key={`person-${top}`} style={{ top: `${top}%`, left: `${25 + (index % 3) * 7}%`, animationDelay: `${-index * 0.55}s` }} />
            ))}
            {Array.from({ length: 12 }, (_, index) => (
              <i
                key={index}
                style={{
                  "--leaf-x": `${10 + ((index * 17) % 36)}%`,
                  "--leaf-y": `${5 + ((index * 29) % 90)}%`,
                  "--leaf-delay": `${-(index * 0.7)}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="lake-motion" aria-hidden="true"><i /><i /><i /><i /></div>

          <nav className="lake-gulls" aria-label="Explore Xi's inspirations, principles, and philosophy">
            {flyingIdeas.map((idea) => (
              <Link key={idea.href} href={idea.href} aria-label={`${idea.title}: ${idea.note}`}>
                <img src={paintedGull.src} alt="" />
                <i className="gull-dot" aria-hidden="true" />
                <span><strong>{idea.title}</strong><small>{idea.note}</small></span>
              </Link>
            ))}
          </nav>

          <div className="rowing-opening">
            <p>Welcome to my living design practice</p>
            <h1>I design to<br /><em>build connection.</em></h1>
            <span>Scroll to row through the shoreline ↓<small>Explore the glowing white dots.</small></span>
          </div>

          <nav className="shore-places" aria-label="Design areas along the shoreline">
            {places.map((place) => (
              <Link
                key={place.slug}
                href={`/areas/${place.slug}`}
                className={`shore-place ${current === Number(place.index) - 1 ? "is-current" : ""}`}
                style={{
                  top: place.top,
                  "--place-left": place.left,
                  "--mobile-place-left": place.mobileLeft,
                } as React.CSSProperties}
                aria-label={`${place.title}: ${place.insight}`}
              >
                <span className="shore-guide" aria-hidden="true"><b /></span>
                <span className="shore-dot" />
                <div className="shore-card">
                  <span>{place.index}</span>
                  <div>
                    <small>{place.connection}</small>
                    <strong>{place.title}</strong>
                    <em>{place.insight}</em>
                  </div>
                  <b>Explore ↗</b>
                </div>
              </Link>
            ))}
          </nav>

          <Link
            href="/about"
            className={`rowing-boat ${rowing ? "is-rowing" : ""}`}
            aria-label="Meet Xi Liu"
          >
            <img src={rowingBoat.src} alt="" />
            <b className="boat-oar boat-oar-left" />
            <b className="boat-oar boat-oar-right" />
            <i /><i />
            <span className="boat-about-label">Meet the designer <em>→</em></span>
          </Link>

          <div className="journey-progress" aria-hidden="true">
            <span>{String(current + 1).padStart(2, "0")}</span>
            <i><b style={{ height: `${Math.max(5, progress * 100)}%` }} /></i>
            <span>05</span>
          </div>

          <div className="current-place" aria-live="polite">
            <small>{places[current].connection}</small>
            <strong>{places[current].title}</strong>
          </div>
        </div>
      </section>

      <section className="rowing-afterword">
        <p>Why I design</p>
        <h2>To build connection—between people, body and mind, what we make and how we live, and ourselves and the world we belong to.</h2>
        <Link href={`/areas/${places[0].slug}`}>Explore the practice <span>↗</span></Link>
      </section>
    </main>
  );
}
