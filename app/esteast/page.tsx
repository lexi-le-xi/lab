import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import processCollage from "../../public/esteast/process-collage.png";
import xiMaking from "../../public/esteast/xi-making.png";
import craftswomanDog from "../../public/esteast/craftswoman-dog.png";
import traditionalMaking from "../../public/esteast/traditional-making.png";
import materialAnatomy from "../../public/esteast/material-anatomy.jpg";
import pressCollage from "../../public/esteast/press-collage.png";
import eggStore from "../../public/esteast/egg-store.png";

export const metadata: Metadata = {
  title: "ESTEAST · Xi Liu",
  description: "A handmade footwear brand and women's craft community renewing China's multi-layer cloth sole tradition.",
};

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}>
    <img src={src} alt={alt} />
  </figure>
);

export default function EsteastPage() {
  return (
    <main className="esteast-page">
      <SiteNavigation label="Project · ESTEAST" />

      <header className="esteast-hero">
        <p>Brand · Product design · Culture · Social enterprise</p>
        <h1>ESTEAST</h1>
        <div>
          <h2>Renewing a disappearing craft by redesigning not only the shoe, but the system around it.</h2>
          <p>A handmade footwear brand and local women&apos;s community built around China&apos;s traditional multi-layer cloth sole.</p>
        </div>
      </header>

      <Image src={materialAnatomy.src} alt="The craft, natural origins, and hand-stitched sole at the heart of ESTEAST" className="esteast-lead-image" />

      <section className="esteast-site-embed">
        <div className="esteast-site-embed__heading">
          <div>
            <p>Explore the original studio</p>
            <h2>Step inside ESTEAST.</h2>
          </div>
          <p>Browse the original brand website directly here.</p>
        </div>
        <div className="esteast-site-embed__browser">
          <div className="esteast-site-embed__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <iframe
            src="https://liuxi0802.wixsite.com/esteast-studio"
            title="ESTEAST Studio original website"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </section>

      <section className="esteast-statement">
        <p>Connection through craft</p>
        <blockquote>What if preserving a tradition also created dignity, income, and a new relationship between maker and wearer?</blockquote>
      </section>

      <section className="esteast-section esteast-background">
        <div className="esteast-copy">
          <span>01</span>
          <p>Background</p>
          <h2>A product, a workshop, and a women&apos;s community.</h2>
          <div>
            <p>I founded ESTEAST as an integrated design and production workshop specializing in redesigned multi-layer cloth shoes.</p>
            <p>The project created family-friendly work for local women while bringing new life to an intangible cultural heritage and introducing it to overseas boutiques.</p>
          </div>
        </div>
        <div className="esteast-duo">
          <Image src={xiMaking.src} alt="Xi learning to make multi-layer cloth shoes" />
          <Image src={craftswomanDog.src} alt="An ESTEAST craftswoman working in a domestic setting" />
        </div>
      </section>

      <section className="esteast-section esteast-observation">
        <div className="esteast-copy">
          <span>02</span>
          <p>Observation</p>
          <h2>The craft was comfortable and breathable. Its form—and the world around it—had stopped evolving.</h2>
          <div>
            <p>Industrial shoes often rely on chemical adhesives that reduce breathability. Traditional cloth soles use hemp-rope stitching instead of glue, allowing the foot to breathe and gradually conforming to its wearer.</p>
            <p>Yet the shoes had almost no recognition among younger people. Their traditional shape felt outdated, while cloth soles lacked the waterproofing and durability required by modern concrete cities.</p>
          </div>
        </div>
        <Image src={traditionalMaking.src} alt="A traditional maker stitching a cloth sole outdoors" className="esteast-wide-image" />
      </section>

      <section className="esteast-objectives">
        <p>03 · Objectives</p>
        <ol>
          <li><span>01</span><strong>Redesign the silhouette for contemporary life.</strong></li>
          <li><span>02</span><strong>Improve waterproofing and urban durability.</strong></li>
          <li><span>03</span><strong>Build a brand that gives the craft renewed cultural value.</strong></li>
        </ol>
      </section>

      <section className="esteast-section esteast-process">
        <div className="esteast-copy">
          <span>04</span>
          <p>Process</p>
          <h2>Preserve the intelligence of the craft. Change what prevents it from living on.</h2>
          <div>
            <p><strong>Research.</strong> I studied the remaining market, wore traditional cloth shoes over time, and separated the craft&apos;s real functional value from its nostalgic appearance.</p>
            <p><strong>Product development.</strong> I added wool felt for water resistance, palm fiber for breathability, leather-shoe stitching for refinement, and modern lasts for a contemporary form.</p>
            <p><strong>Production system.</strong> After securing initial boutique orders, I spent two months assembling and training an artisan team around shared quality standards.</p>
          </div>
        </div>
        <Image src={processCollage.src} alt="The materials and hand processes behind ESTEAST shoes" className="esteast-process-image" />
      </section>

      <section className="esteast-challenge">
        <p>05 · Challenge</p>
        <h2>Designing the shoe was only the beginning.</h2>
        <p>Building a small factory from zero required people management, production-line design, market development, patience, and a viable profit model. The system had to care for its makers while remaining economically sustainable.</p>
      </section>

      <section className="esteast-section esteast-results">
        <div className="esteast-copy">
          <span>06</span>
          <p>Results</p>
          <h2>From one handmade prototype to international boutique orders.</h2>
          <div>
            <p>ESTEAST received orders in its first quarter. Over four years, the range expanded from fabric shoes into leather and a small collection of clothing.</p>
            <p>The pandemic severed overseas channels, and the pressure of running the business ultimately led me to close the project. But the experience rooted a lasting responsibility toward vulnerable communities and sustainable production in my design practice.</p>
          </div>
        </div>
        <div className="esteast-duo is-results">
          <Image src={pressCollage.src} alt="ESTEAST products featured by international boutiques and customers" />
          <Image src={eggStore.src} alt="ESTEAST materials and a meeting with buyers from Egg store in London" />
        </div>
      </section>

      <section className="esteast-reflection">
        <p>07 · Reflection</p>
        <blockquote>Social enterprises must first sustain themselves in order to keep serving society. Empathy belongs not only in the product, but also in how a team is understood and supported.</blockquote>
        <div>
          <p><strong>My role</strong></p>
          <p>Founder · Product designer · Production engineer · Sales · Web design</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
