import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/bbgo/hero.png";
import careChallenges from "../../public/bbgo/care-challenges.png";
import conceptSketch from "../../public/bbgo/concept-sketch.png";
import followingReference from "../../public/bbgo/following-reference.png";
import systemOverview from "../../public/bbgo/system-overview.png";

export const metadata: Metadata = {
  title: "BBgo · Xi Liu",
  description: "A concept for an AI self-following stroller designed to give parents greater freedom while keeping infants close and safe.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);

export default function BbgoPage() {
  return (
    <main className="bbgo-page">
      <SiteNavigation label="Project · BBgo" />

      <header className="bbgo-hero">
        <p>Care · Product concept · AI-assisted design</p>
        <h1>BBgo</h1>
        <div>
          <h2>Keep the child close. Give the parent their hands back.</h2>
          <p>An AI self-following stroller concept that explores how technology could reduce the physical load of early childcare without weakening connection.</p>
        </div>
      </header>

      <Image src={hero.src} alt="BBgo self-following stroller accompanying a parent and infant at home" className="bbgo-lead" />

      <section className="bbgo-statement">
        <p>Connection through care</p>
        <blockquote>Care should create closeness without requiring one person to give up all of their movement, time, and attention.</blockquote>
      </section>

      <section className="bbgo-section bbgo-background">
        <div className="bbgo-copy"><span>01</span><p>Background</p><h2>For parents of infants, ordinary movement becomes a constant negotiation.</h2><div><p>Children under two often need continuous physical support and supervision. Carrying a child limits the parent&apos;s ability to cook, clean, work, or simply move through daily life.</p><p>A traditional stroller reduces some of that weight, but still occupies at least one hand—and stairs can turn it into a task that requires another adult.</p></div></div>
        <Image src={careChallenges.src} alt="Illustrated daily challenges of caring for an infant while managing tasks and stairs" className="bbgo-wide-image" />
      </section>

      <section className="bbgo-question">
        <p>02 · The question</p>
        <h2>How might parents accompany their infant&apos;s growth without disappearing from their own lives?</h2>
        <ol><li><span>01</span>Protect infant safety.</li><li><span>02</span>Return freedom of movement to the parent.</li><li><span>03</span>Support care across changing situations.</li></ol>
      </section>

      <section className="bbgo-section bbgo-concept">
        <div className="bbgo-copy"><span>03</span><p>Concept</p><h2>Begin with first principles, then borrow useful behaviors from other objects.</h2><div><p>The project asks what a stroller must do rather than what a stroller must look like: keep the infant safe and nearby, follow the caregiver independently, adapt to rest and activity, and negotiate difficult ground.</p><p>I drew from autonomous camera tracking, adjustable aircraft seating, and stair-climbing wheel clusters to form one integrated proposal.</p></div></div>
        <div className="bbgo-concept-grid"><Image src={conceptSketch.src} alt="Early BBgo spherical stroller sketch" /><Image src={followingReference.src} alt="DJI Neo autonomous following technology used as a behavior reference" /></div>
      </section>

      <section className="bbgo-system">
        <header><span>04</span><p>System</p><h2>Three mechanisms support one continuous relationship.</h2></header>
        <Image src={systemOverview.src} alt="BBgo system overview combining AI following, reclining seat, and stair-climbing wheels" />
        <div className="bbgo-system-videos">
          <article>
            <figure>
              <video autoPlay muted loop playsInline preload="metadata" aria-label="DJI Neo smart-following behavior reference">
                <source src={publicPath("/bbgo/following-reference.mp4")} type="video/mp4" />
              </video>
            </figure>
            <p><span>Behavior reference</span>DJI NEO · Smart following</p>
          </article>
          <article>
            <figure>
              <video autoPlay muted loop playsInline preload="metadata" aria-label="BBgo scenario demonstration">
                <source src={publicPath("/bbgo/scenario-demo.mp4")} type="video/mp4" />
              </video>
            </figure>
            <p><span>Concept visualization</span>BBgo · Scenario demonstration</p>
          </article>
        </div>
        <ol>
          <li><span>01</span><div><h3>Smart following</h3><p>Omnidirectional sensors and cameras conceptually allow the stroller to recognize and follow its caregiver while monitoring its surroundings.</p></div></li>
          <li><span>02</span><div><h3>Adaptive seating</h3><p>An electrically adjustable seat shifts between sitting and lying positions as the child&apos;s needs change.</p></div></li>
          <li><span>03</span><div><h3>Stair navigation</h3><p>A three-wheel cluster replaces the conventional single wheel to explore autonomous movement across stairs.</p></div></li>
        </ol>
      </section>

      <section className="bbgo-section bbgo-method">
        <div className="bbgo-copy"><span>05</span><p>Design method</p><h2>A proposal developed by moving between hand sketching and generative AI.</h2><div><p>Traditional sketches established the product logic and form. AI image generation then made it possible to test multiple visual directions quickly and communicate the scenario with greater immediacy.</p><p>This is a design proposal rather than a validated physical product. The next step would be a functional prototype, followed by safety, tracking, stair, and caregiver testing.</p></div></div>
      </section>

      <section className="bbgo-reflection">
        <p>06 · Reflection</p>
        <blockquote>Technology is most meaningful in care when it does not replace the relationship—it removes the burden that keeps people from being present inside it.</blockquote>
        <div><p><strong>My role</strong></p><p>Research · Concept · Product design · AI-assisted visualization</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
