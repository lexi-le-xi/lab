import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import { AutoVideo } from "./auto-video";
import matInUse from "../../public/mat-bag/mat-in-use.jpg";
import drawing01 from "../../public/mat-bag/drawing-01.jpg";
import drawing02 from "../../public/mat-bag/drawing-02.jpg";
import drawing03 from "../../public/mat-bag/drawing-03.jpg";
import drawing04 from "../../public/mat-bag/drawing-04.jpg";
import bagBrown from "../../public/mat-bag/bag-brown.jpg";
import bagBlue from "../../public/mat-bag/bag-blue.jpg";

export const metadata: Metadata = {
  title: "Mat Bag · Xi Liu",
  description: "A daily bag that unfolds into a lawn mat, turning an extra object into a capability already carried.",
};

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);
const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

export default function MatBagPage() {
  return (
    <main className="mat-page">
      <SiteNavigation label="Project · Mat Bag" />
      <header className="mat-hero project-title-system">
        <p>Product design · Soft goods · Everyday life</p>
        <h1>MAT<br />BAG</h1>
        <div><h2>Carry the possibility of stopping wherever you are.</h2><p>A daily bag that opens into a lawn mat—designed so an unplanned pause in the park needs no extra preparation.</p></div>
      </header>

      <figure className="mat-lead-video"><AutoVideo src={publicPath("/mat-bag/transformation.mp4")} label="Mat Bag transforming between a bag and a lawn mat" /></figure>

      <section className="mat-statement"><p>Connection with everyday life</p><blockquote>What if the object you already carry could make room for rest?</blockquote></section>

      <section className="mat-section">
        <div className="mat-copy"><span>01</span><p>Background</p><h2>A small personal inconvenience revealed a shared urban behavior.</h2><div><p>I wanted to sit on grass, relax, and enjoy the sun without planning ahead or worrying that dew would stain my clothes.</p><p>A lawn mat solves the problem, but it is rarely important enough to remember and always becomes one more object to carry.</p></div></div>
        <Image src={matInUse.src} alt="Mat Bag opened on grass and used for an informal picnic" className="mat-wide-image" />
      </section>

      <section className="mat-section mat-observation">
        <div className="mat-copy"><span>02</span><p>Observation</p><h2>People already improvise with what they have.</h2><div><p>Planned park visits often involve a bag for food plus a separate mat. During spontaneous lunch breaks, people sit on scarves, jackets, or bags to avoid wet grass and keep clothing clean.</p><p>The need is real, but the dedicated object is too easy to leave behind.</p></div></div>
        <div className="mat-bag-pair"><Image src={bagBrown.src} alt="Brown Mat Bag carried on grass" /><Image src={bagBlue.src} alt="Blue Mat Bag carried on grass" /></div>
      </section>

      <section className="mat-objectives"><p>03 · Objectives</p><ol><li><span>01</span><strong>Combine two uses without adding another object.</strong></li><li><span>02</span><strong>Keep the mat completely flat when opened.</strong></li><li><span>03</span><strong>Create useful volume with one simple gesture.</strong></li></ol></section>

      <section className="mat-section mat-process">
        <div className="mat-copy"><span>04</span><p>Process</p><h2>Design from the flat surface toward the volume.</h2><div><p>Instead of asking how a bag could become a mat, I began with the geometry the mat required: an uninterrupted flat plane.</p><p>Drawstrings gather its perimeter into a three-dimensional container. Snaps organize the folds and handles complete the carrying structure. Releasing them returns the object to a flat surface.</p></div></div>
        <div className="mat-drawings"><Image src={drawing01.src} alt="Patent drawing of the Mat Bag flat layout" /><Image src={drawing02.src} alt="Patent drawing showing the gathered edge" /><Image src={drawing03.src} alt="Patent drawing of the three-dimensional bag form" /><Image src={drawing04.src} alt="Patent drawing showing the final fastened bag" /></div>
      </section>

      <section className="mat-results">
        <div className="mat-copy"><span>05</span><p>Results</p><h2>Two materials, one week of daily use, and a patented structure.</h2><div><p>With limited tools, I quickly made two working versions in different materials and used them for a week. Both met the intended function and were easy to transform in everyday situations.</p><p>I filed a patent for the structure. The same principle can support different materials and visual styles without changing the essential interaction.</p></div></div>
        <figure className="mat-result-video"><AutoVideo src={publicPath("/mat-bag/transformation.mp4")} label="Demonstration of the Mat Bag in use" /></figure>
      </section>

      <section className="mat-reflection"><p>06 · Reflection</p><blockquote>Good everyday design does not always introduce something new. Sometimes it removes the need to remember one more thing.</blockquote><div><p><strong>My role</strong></p><p>Concept · Product design · Pattern development · Making</p></div></section>
      <SiteFooter />
    </main>
  );
}
