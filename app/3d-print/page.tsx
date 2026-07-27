import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/3d-print/hero.jpg";
import sketch from "../../public/3d-print/sketch.jpg";
import formStudy from "../../public/3d-print/form-study.jpg";
import fitStudy from "../../public/3d-print/fit-study.jpg";
import latticeDrawing from "../../public/3d-print/lattice-drawing.jpg";
import pressureMap from "../../public/3d-print/pressure-map.jpg";
import latticeSystem from "../../public/3d-print/lattice-system.jpg";
import digitalSide from "../../public/3d-print/digital-side.jpg";
import digitalTop from "../../public/3d-print/digital-top.jpg";
import worn from "../../public/3d-print/worn.jpg";
import productPair from "../../public/3d-print/product-pair.jpg";
import wornStanding from "../../public/3d-print/worn-standing.jpg";

export const metadata: Metadata = {
  title: "3D Printed Shoes · Xi Liu",
  description: "A single-material, one-piece footwear experiment using differentiated lattice structures to approach zero-waste production.",
};

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);

export default function ThreeDPrintPage() {
  return (
    <main className="print-page">
      <SiteNavigation label="Project · 3D Printed Shoes" />

      <header className="print-hero">
        <p>Product design · Additive manufacturing · Material experiment</p>
        <h1>3D PRINTED<br />SHOES</h1>
        <div>
          <h2>Can a shoe be made as one continuous material—and leave almost nothing behind?</h2>
          <p>A 2021 experiment using photopolymer 3D printing and differentiated lattice structures to create a fully printed, one-piece shoe.</p>
        </div>
      </header>

      <Image src={hero.src} alt="Final one-piece black 3D printed shoe" className="print-lead-image" />

      <section className="print-statement">
        <p>Connection with consequence</p>
        <blockquote>Instead of cutting material away to find a form, additive manufacturing builds only what the body and the structure need.</blockquote>
      </section>

      <section className="print-section">
        <div className="print-copy"><span>01</span><p>Background</p><h2>Most manufacturing begins with more material than the final object contains.</h2><div>
          <p>Material is sorted, cut, removed, and discarded throughout conventional production. I began this project by asking whether a wearable product could instead be produced in one piece, from one material, with almost no offcuts.</p>
          <p>Elastomer development made the idea newly feasible: a printed structure could begin to provide both flexibility and support rather than remaining a rigid visual prototype.</p>
        </div></div>
        <div className="print-duo">
          <Image src={sketch.src} alt="Early sketch exploring a continuous printed shoe surface" />
          <Image src={formStudy.src} alt="Digital form study for a simple slip-on shoe" />
        </div>
      </section>

      <section className="print-section print-observation">
        <div className="print-copy"><span>02</span><p>Observation</p><h2>A single material does not have to perform the same way everywhere.</h2><div>
          <p>The sole, upper, heel, and footbed ask for different combinations of cushioning, stability, ventilation, and flexibility.</p>
          <p>Instead of assembling different materials, those differences could be created by changing the geometry, density, and scale of the internal lattice.</p>
        </div></div>
        <Image src={latticeSystem.src} alt="Lattice zones and performance requirements mapped across the shoe" className="print-wide-image" />
      </section>

      <section className="print-objectives">
        <p>03 · Objectives</p>
        <ol>
          <li><span>01</span><strong>Print the complete shoe as one continuous piece.</strong></li>
          <li><span>02</span><strong>Use lattice variation to distribute pressure and performance.</strong></li>
          <li><span>03</span><strong>Approach zero offcut waste through additive production.</strong></li>
        </ol>
      </section>

      <section className="print-section print-process">
        <div className="print-copy"><span>04</span><p>Process</p><h2>Start with the simplest footwear category, then tune structure through the body.</h2><div>
          <p><strong>Technology research.</strong> I studied elastomer suppliers and compared powder-bed SLS with photopolymer SLA-like processes before selecting a viable production partner.</p>
          <p><strong>Form.</strong> A slip-on shape reduced functional variables for a first experiment. I established the overall volume and collaborated with factory technicians to develop the printable internal lattice.</p>
          <p><strong>Iteration.</strong> Repeated fitting tests refined sole hardness, pressure distribution, and the ergonomic contour of the footbed.</p>
        </div></div>
        <div className="print-process-grid">
          <Image src={fitStudy.src} alt="Overlay study connecting a printed sample to foot shape" />
          <Image src={latticeDrawing.src} alt="Digital drawing of the lattice paths across the shoe" />
          <Image src={pressureMap.src} alt="Foot-pressure map informing differentiated lattice density" />
        </div>
        <div className="print-digital-pair">
          <Image src={digitalSide.src} alt="Final digital lattice model from the side" />
          <Image src={digitalTop.src} alt="Final digital lattice model from above" />
        </div>
      </section>

      <section className="print-results">
        <div className="print-copy"><span>05</span><p>Results</p><h2>Ten wearable samples—and a clear boundary for the technology.</h2><div>
          <p>Ten pairs were printed successfully, proving that the complete shoe could be produced as a continuous elastomeric structure and worn as intended.</p>
          <p>The experiment also revealed a limitation: current printable elastomers cannot reproduce the lightweight foaming of a conventional sole. A fully printed shoe therefore remains heavier than an everyday product should be.</p>
        </div></div>
        <div className="print-results-grid">
          <Image src={worn.src} alt="Black 3D printed shoes worn while seated" />
          <Image src={productPair.src} alt="Pair of final 3D printed shoes" />
          <Image src={wornStanding.src} alt="Final 3D printed shoes worn while standing" />
        </div>
      </section>

      <section className="print-reflection">
        <p>06 · Reflection</p>
        <blockquote>Zero-waste geometry is only part of the answer. A responsible manufacturing future also depends on lighter materials, useful performance, durability, and what happens after the product&apos;s life.</blockquote>
        <div><p><strong>My role</strong></p><p>Concept · Footwear design · Material and process research · Prototype development</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
