import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/hover/hero.jpg";
import campaign from "../../public/hover/campaign.jpg";
import productSystem from "../../public/hover/product-system.jpg";
import sketches from "../../public/hover/sketches.jpg";
import sole from "../../public/hover/sole.png";
import prototype from "../../public/hover/prototype.jpg";
import processHero from "../../public/hover/process-hero.jpg";
import processDetail from "../../public/hover/process-detail.jpg";
import concepts from "../../public/hover/concepts.jpg";
import results from "../../public/hover/results.jpg";
import product01 from "../../public/hover/product-01.jpg";
import product02 from "../../public/hover/product-02.jpg";
import product03 from "../../public/hover/product-03.jpg";
import store from "../../public/hover/store.jpg";

export const metadata: Metadata = {
  title: "HOVER · Xi Liu",
  description: "Building the signature footwear system for a new outdoor brand—from market opportunity and product planning to production and launch.",
};

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

export default function HoverPage() {
  return (
    <main className="hover-page">
      <SiteNavigation label="Project · HOVER" />

      <header className="hover-hero">
        <p>Brand strategy · Product design · Project leadership</p>
        <h1>HOVER</h1>
        <div>
          <h2>From an overlooked camping need to the iconic product of a new outdoor brand.</h2>
          <p>I led HOVER from product planning and development through production, supply chain, and launch strategy for Uppervoid.</p>
        </div>
      </header>

      <Image src={hero.src} alt="HOVER camping shoe photographed from above" className="hover-lead-image" />

      <section className="hover-motion-feature" aria-label="HOVER product film">
        <div>
          <p>HOVER in motion</p>
          <span>Product film</span>
        </div>
        <figure>
          <AutoVideo
            src={publicPath("/hover/hover-film.mp4")}
            label="HOVER product film showing the footwear in motion"
          />
        </figure>
      </section>

      <section className="hover-impact">
        <p>Connection through systems</p>
        <blockquote>A signature product is never only a shape. It connects an unmet need, a recognizable identity, a production system, and the people who bring it to market.</blockquote>
      </section>

      <section className="hover-section hover-background">
        <div className="hover-copy">
          <span>01</span><p>Background</p>
          <h2>Building the product language for a brand that did not yet have one.</h2>
          <div>
            <p>Uppervoid was a young outdoor brand entering a fast-growing Chinese market. I was responsible for creating a footwear category that could become central to its identity.</p>
            <p>The opportunity was camping: a space between technical performance footwear and the comfort people wanted while resting outdoors or recovering after activity.</p>
          </div>
        </div>
        <Image src={campaign.src} alt="HOVER campaign concept placing the shoe on Shanghai's waterfront" className="hover-wide-image" />
      </section>

      <section className="hover-section hover-observation">
        <div className="hover-copy">
          <span>02</span><p>Observation</p>
          <h2>Outdoor footwear was designed for movement. Camping also needed a shoe for recovery.</h2>
          <div>
            <p>After a full day outdoors, narrow lasts and tightly wrapped uppers can increase pressure and discomfort. Yet few products were designed specifically for the slower moments around camp.</p>
            <p>At the same time, a young brand needed a form distinctive enough to be remembered and flexible enough to support multiple seasons and uses.</p>
          </div>
        </div>
        <Image src={productSystem.src} alt="HOVER product family and seasonal design system" className="hover-portrait-image" />
      </section>

      <section className="hover-objectives">
        <p>03 · Objectives</p>
        <ol>
          <li><span>01</span><strong>Create a recognizable sole that could carry an entire product family.</strong></li>
          <li><span>02</span><strong>Give tired feet room to recover through a wide toe box and easy comfort.</strong></li>
          <li><span>03</span><strong>Build seasonal variations while introducing lower-impact bio-based materials.</strong></li>
        </ol>
      </section>

      <section className="hover-section hover-process">
        <div className="hover-copy">
          <span>04</span><p>Process</p>
          <h2>One sole. Two seasons. A product system designed to grow.</h2>
          <div>
            <p><strong>Direction.</strong> From several concepts, I selected a form inspired by a hovercraft: lightweight in character, visually buoyant, and immediately recognizable.</p>
            <p><strong>Development.</strong> The wide last supports comfort; knitted uppers serve spring and summer, while quilted cotton versions extend the system into autumn and winter.</p>
            <p><strong>Materials.</strong> Coffee grounds and sugarcane bagasse were incorporated into the sole compound to reduce reliance on conventional material inputs.</p>
          </div>
        </div>
        <div className="hover-process-grid">
          <Image src={sketches.src} alt="HOVER sketches and form exploration" />
          <Image src={sole.src} alt="Transparent rendering of the signature HOVER sole" className="is-sole" />
          <Image src={concepts.src} alt="HOVER concept development and visual directions" />
          <Image src={prototype.src} alt="HOVER prototype and development materials" />
        </div>
        <Image src={processHero.src} alt="HOVER prototype on a working table of sketches and material studies" className="hover-process-hero" />
        <Image src={processDetail.src} alt="Detailed HOVER development process on the studio table" className="hover-process-detail" />
      </section>

      <section className="hover-challenge">
        <p>05 · Challenge</p>
        <h2>Designing the workflow was as important as designing the shoe.</h2>
        <div>
          <p>With limited time, budget, and personnel, I coordinated design, mold development, sampling, supply chain, production, and marketing across departments.</p>
          <p>All feasibility adjustments were resolved before formal tooling. The molds required no remake—an important result in a process where every revision carries cost, material, and schedule consequences.</p>
        </div>
      </section>

      <section className="hover-section hover-results">
        <div className="hover-copy">
          <span>06</span><p>Results</p>
          <h2>Five collections, eighteen SKUs, and approximately 30,000 pairs sold.</h2>
          <div>
            <p>HOVER became an iconic product for Uppervoid and generated enthusiastic discussion on Xiaohongshu. The line expanded into offline stores and footwear-focused exhibitions.</p>
            <p>Consumer feedback revealed uses beyond camping: post-competition recovery, commuting, and office wear.</p>
          </div>
        </div>
        <div className="hover-video-feature">
          <div>
            <p>Featured conversation</p>
            <span>HOVER appears at 58:45</span>
          </div>
          <div className="hover-video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/5mbBgheyHpc?start=3525"
              title="HOVER feature beginning at 58 minutes 45 seconds"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a href="https://youtu.be/5mbBgheyHpc?t=3525" target="_blank" rel="noreferrer">Watch on YouTube from 58:45 ↗</a>
        </div>
        <Image src={results.src} alt="HOVER launch results, social response, and product exhibitions" className="hover-results-image" />
        <div className="hover-product-triptych">
          <Image src={product01.src} alt="HOVER product variation" />
          <Image src={product02.src} alt="HOVER product variation" />
          <Image src={product03.src} alt="HOVER product variation" />
        </div>
        <Image src={store.src} alt="HOVER displayed in an Uppervoid retail environment" className="hover-store-image" />
      </section>

      <section className="hover-reflection">
        <p>07 · Reflection</p>
        <blockquote>In a startup, leadership means learning quickly, designing clear workflows, mobilizing limited resources, and supporting a team through uncertainty.</blockquote>
        <div><p><strong>My role</strong></p><p>Project planning · Creative direction · Product development · Production and supply chain management · Launch strategy</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
