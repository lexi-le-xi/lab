import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/all-we-are/hero-new.jpg";
import productForm from "../../public/all-we-are/product-form.jpg";
import prototype from "../../public/all-we-are/prototype.jpg";
import technicalDrawing from "../../public/all-we-are/technical-drawing.jpg";
import industrySubtraction from "../../public/all-we-are/industry-subtraction.jpg";
import mortiseTenon from "../../public/all-we-are/mortise-tenon.jpg";
import instructions from "../../public/all-we-are/instructions.jpg";
import combinations from "../../public/all-we-are/combinations.jpg";
import impact from "../../public/all-we-are/impact.jpg";
import lifestyle from "../../public/all-we-are/lifestyle.jpg";
import campaignWhite from "../../public/all-we-are/campaign-white.jpg";
import campaignBlack from "../../public/all-we-are/campaign-black.jpg";
import { AutoVideo } from "./auto-video";

export const metadata: Metadata = {
  title: "ALL WE ARE · Xi Liu",
  description: "A patented modular footwear system that removes glue, simplifies production, and invites the wearer into assembly.",
};

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const MovingImage = ({ src, label, className = "" }: { src: string; label: string; className?: string }) => (
  <figure className={`awa-video ${className}`.trim()}>
    <AutoVideo src={src} label={label} />
  </figure>
);

export default function AllWeArePage() {
  return (
    <main className="awa-page">
      <SiteNavigation label="Project · ALL WE ARE" />

      <header className="awa-hero project-title-system">
        <p>Brand · Product design · Industrial innovation</p>
        <h1>ALL WE ARE</h1>
        <div>
          <h2>A modular shoe that questions why footwear must be glued together at all.</h2>
          <p>I founded ALL WE ARE to explore how structural innovation could simplify production, lower waste, and give wearers a more active relationship with what they own.</p>
        </div>
      </header>

      <aside className="awa-ip-notice">
        <strong>Intellectual property notice · Patent granted</strong>
        <span>The detachable modular footwear structure shown in this project is protected by a granted patent. Certain technical details are intentionally withheld.</span>
      </aside>

      <Image src={hero.src} alt="ALL WE ARE modular shoes shown across take-off and put-on states" className="awa-lead-image" />

      <section className="awa-statement">
        <p>Connection through making</p>
        <blockquote>What if a shoe arrived not as a sealed object, but as a system you could assemble, understand, and make your own?</blockquote>
      </section>

      <section className="awa-section">
        <div className="awa-copy"><span>01</span><p>Background</p><h2>Glue makes shoes faster to assemble—and harder to separate, repair, or rethink.</h2><div>
          <p>Conventional footwear divides a shoe into many independently produced components, then bonds them together with adhesive. The process creates coordination overhead, worker-health concerns, environmental impact, and inventory risk.</p>
          <p>For wearers, the same sealed construction makes cleaning difficult and can deform or delaminate in a washing machine.</p>
        </div></div>
        <MovingImage src={publicPath("/all-we-are/form-development.mp4")} label="Form development for the modular shoe" className="awa-form-video" />
        <Image src={industrySubtraction.src} alt="Comparison between a conventional shoe and the simplified ALL WE ARE system" className="awa-wide-image" />
      </section>

      <section className="awa-section awa-research">
        <div className="awa-copy"><span>02</span><p>Research</p><h2>Reduce the shoe to the two relationships it must protect.</h2><div>
          <p>A shoe needs a sole that separates the body from the ground, and an upper that holds the foot securely to that protective layer. Everything else could be questioned.</p>
          <p>I studied footwear anatomy, production processes, and existing patents for separable shoes before developing an unoccupied structural direction.</p>
        </div></div>
        <div className="awa-duo">
          <Image src={technicalDrawing.src} alt="Technical drawing for the modular shoe frame" />
          <Image src={prototype.src} alt="Early physical prototype of the integrated shoe frame" />
        </div>
      </section>

      <section className="awa-objectives">
        <p>03 · Objectives</p>
        <ol>
          <li><span>01</span><strong>Remove glue from the core assembly.</strong></li>
          <li><span>02</span><strong>Reduce parts and production dependencies.</strong></li>
          <li><span>03</span><strong>Let users assemble, clean, and recombine the shoe.</strong></li>
        </ol>
      </section>

      <section className="awa-section awa-solution">
        <div className="awa-copy"><span>04</span><p>Solution</p><h2>Mortise-and-tenon logic, translated from woodworking into footwear.</h2><div>
          <p>The shoe becomes two parts: a single molded frame that protects the foot and meets the ground, and a sock-like upper that locks into it physically.</p>
          <p>Each part can be produced independently and packaged separately. Assembly moves from factory adhesive lines to a simple action performed by the wearer.</p>
        </div></div>
        <Image src={mortiseTenon.src} alt="The mortise-and-tenon principle behind the modular shoe" className="awa-wide-image" />
        <div className="awa-video-pair">
          <MovingImage src={publicPath("/all-we-are/frame-process.mp4")} label="Making the integrated shoe frame" />
          <MovingImage src={publicPath("/all-we-are/upper-process.mp4")} label="Making the removable shoe upper" />
        </div>
      </section>

      <section className="awa-section awa-assembly">
        <div className="awa-copy"><span>05</span><p>Assembly</p><h2>Two components. One intuitive installation sequence.</h2><div>
          <p>The modular connection gives the wearer access to the product&apos;s logic. Uppers and frames can be cleaned separately, replaced selectively, and combined in different ways.</p>
        </div></div>
        <div className="awa-duo is-assembly">
          <Image src={instructions.src} alt="ALL WE ARE installation and removal instructions" />
          <MovingImage src={publicPath("/all-we-are/assembly.mp4")} label="Demonstration of assembling the modular shoe" />
        </div>
        <Image src={combinations.src} alt="Different combinations possible with the modular footwear system" className="awa-wide-image" />
      </section>

      <section className="awa-challenge">
        <p>06 · Challenge</p>
        <h2>Innovation has to redesign the relationships around production, not only the object.</h2>
        <div><p>Factories need time to adapt to unfamiliar processes. Designers must understand manufacturing deeply enough to translate an idea into feasible tooling and help partners move through uncertainty.</p><p>A new product also enters a market with no established language. Technical novelty must be matched by aesthetic testing, clear communication, and an equally inventive launch strategy.</p></div>
      </section>

      <section className="awa-section awa-results">
        <div className="awa-copy"><span>07</span><p>Results</p><h2>A patented system, launched by a four-person team.</h2><div>
          <p>We developed the product, secured a patent for the structure, and brought the first versions to market through e-commerce.</p>
          <p>Our calculations indicated a two-thirds reduction in production steps, about 70% lower production energy use, and less material waste through the largely integrated frame.</p>
        </div></div>
        <Image src={impact.src} alt="Production, energy, and supply-chain impact of the ALL WE ARE system" className="awa-wide-image" />
        <div className="awa-campaign-grid">
          <Image src={lifestyle.src} alt="ALL WE ARE shoes worn in motion" />
          <Image src={campaignWhite.src} alt="White ALL WE ARE campaign composition" />
          <Image src={campaignBlack.src} alt="Black ALL WE ARE campaign composition" />
        </div>
      </section>

      <section className="awa-reflection">
        <p>08 · Reflection</p>
        <blockquote>Questioning a familiar process can reveal that many “requirements” are only habits. But structural innovation succeeds only when function, manufacturing, aesthetics, and market understanding move together.</blockquote>
        <div><p><strong>My role</strong></p><p>Founder · Footwear designer · Creative director · Product development</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
