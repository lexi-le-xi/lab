import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/kitchen-organizer/hero.png";
import flatPattern from "../../public/kitchen-organizer/flat-pattern.png";
import bending from "../../public/kitchen-organizer/bending.jpg";

export const metadata: Metadata = {
  title: "Modular Kitchen Organizer · Xi Liu",
  description: "A detachable kitchen organizer that explores how fewer factory processes can create more participation.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

export default function KitchenOrganizerPage() {
  return (
    <main className="organizer-page">
      <SiteNavigation label="Project · Modular Kitchen Organizer" />

      <header className="organizer-hero">
        <div>
          <p>Connection through making · Sheet metal · Detachable structure</p>
          <h1>MODULAR<br />KITCHEN<br />ORGANIZER</h1>
        </div>
        <figure><img src={hero.src} alt="The assembled modular kitchen organizer holding eggs and grapes" /></figure>
      </header>

      <section className="organizer-question">
        <span>01 · Design question</span>
        <h2>What if manufacturing stopped before the object was finished?</h2>
        <div>
          <p>This countertop organizer began as a manufacturing exercise, then became a question about the relationship between people and the things they own.</p>
          <p>Instead of hiding every act of assembly inside a factory, could a product arrive as a small set of precise parts—and invite its user to complete it?</p>
        </div>
      </section>

      <section className="organizer-geometry">
        <header>
          <span>02</span>
          <p>The beauty of geometry</p>
          <h2>One flat sheet.<br />A complete structure.</h2>
        </header>
        <div className="organizer-geometry-grid">
          <figure><img src={flatPattern.src} alt="Flat-pattern calculations for the detachable organizer" /></figure>
          <div>
            <h3>Detachable by design</h3>
            <ul>
              <li>Precise flat-pattern calculation</li>
              <li>High-precision waterjet cutting</li>
              <li>Strategic folds that create strength from a thin sheet</li>
              <li>Interlocking joints that can be assembled without permanent welding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="organizer-process">
        <header><span>03</span><p>Making process</p><h2>From calculated lines to a useful object.</h2></header>
        <article>
          <figure><img src={flatPattern.src} alt="CAD flat patterns before fabrication" /></figure>
          <div><span>01</span><h3>Calculate the flat pattern</h3><p>I translated the three-dimensional form into a minimal family of two-dimensional parts, locating every fold, opening, and joint before cutting.</p></div>
        </article>
        <article>
          <figure><AutoVideo src={publicPath("/kitchen-organizer/process.mp4")} label="Fabricating the sheet-metal organizer" /></figure>
          <div><span>02</span><h3>Cut with precision</h3><p>The geometry depends on accuracy. Waterjet cutting turns the drawing into parts that can meet cleanly and carry the load without extra hardware.</p></div>
        </article>
        <article>
          <figure><img src={bending.src} alt="Bending a sheet-metal part on a brake" /></figure>
          <div><span>03</span><h3>Fold into strength</h3><p>Using a brake, I formed the flat pieces into a stable base and upright support. Each bend replaces added components with geometry.</p></div>
        </article>
        <article>
          <figure><img src={hero.src} alt="Finished organizer in use on a kitchen counter" /></figure>
          <div><span>04</span><h3>Complete through assembly</h3><p>The parts lock into a finished organizer for eggs, fruit, or utensils. The structure can remain detachable, letting assembly become part of the experience of ownership.</p></div>
        </article>
      </section>

      <section className="organizer-system">
        <p>04 · A different production system</p>
        <h2>Make less.<br />Let participation<br />create more.</h2>
        <ol>
          <li><span>01</span><strong>Fewer factory steps</strong><p>Reduce welding, fasteners, and finishing operations by letting form and joints do more work.</p></li>
          <li><span>02</span><strong>Less energy in transit</strong><p>A detachable structure can move as compact parts before it takes up space as a finished object.</p></li>
          <li><span>03</span><strong>A closer relationship</strong><p>When users help an object take shape, they understand it, remember it, and may be more willing to repair and keep it.</p></li>
        </ol>
      </section>

      <section className="organizer-reflection">
        <p>05 · Reflection</p>
        <blockquote>Assembly is not unfinished manufacturing. It can be the first moment of connection between a person and an object.</blockquote>
        <div><p><strong>My role</strong></p><p>Concept · System design · Flat-pattern calculation · Fabrication · Prototyping</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
