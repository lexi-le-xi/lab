import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/spoon/hero.jpg";
import followBlock from "../../public/spoon/follow-block.jpg";
import pattern from "../../public/spoon/pattern.jpg";
import casting from "../../public/spoon/casting.jpg";
import cutting from "../../public/spoon/cutting.jpg";
import finishing from "../../public/spoon/finishing.jpg";

export const metadata: Metadata = {
  title: "A Spoon for My Grandfather · Xi Liu",
  description: "A one-piece spoon designed for Xi Liu's grandfather, whose diabetes-related finger numbness makes standard utensils difficult to grip.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}><img src={src} alt={alt} /></figure>
);

export default function SpoonPage() {
  return (
    <main className="spoon-page">
      <SiteNavigation label="Project · A Spoon for My Grandfather" />

      <header className="spoon-hero">
        <p>Inclusive design · Metal casting · Care</p>
        <h1>SPOON<br />FOR MY<br />GRANDFATHER</h1>
        <div>
          <h2>A utensil shaped by attention to one person&apos;s changing body.</h2>
          <p>I designed and cast this one-piece spoon for my grandfather, whose diabetes has left his fingers numb and made ordinary utensils difficult to hold securely.</p>
        </div>
      </header>

      <Image src={hero.src} alt="The finished cast-metal spoon with an open hand-support loop" className="spoon-lead" />

      <section className="spoon-statement">
        <p>Connection with people</p>
        <blockquote>Care made the need visible. Needs finding began by paying close attention to someone I love.</blockquote>
      </section>

      <section className="spoon-user">
        <header><span>01</span><p>The user</p><h2>Design for a hand that cannot rely on a tight grip.</h2></header>
        <div className="spoon-user-points">
          <article><span>01</span><h3>Person</h3><p>My grandfather—and others living with numbness, injury, or reduced finger flexibility.</p></article>
          <article><span>02</span><h3>Problem</h3><p>A narrow utensil handle asks the fingers to close firmly and continuously.</p></article>
          <article><span>03</span><h3>Goal</h3><p>Create a spoon that can be stabilized by the hand without demanding a forceful grip.</p></article>
        </div>
      </section>

      <section className="spoon-concept">
        <div>
          <span>02</span><p>Structural idea</p><h2>Replace gripping with support.</h2>
          <div><p>The enlarged loop allows the hand to enter the utensil rather than pinch it from the outside. Load is distributed across a broader part of the hand, while the spoon bowl remains aligned for eating.</p><p>The handle, bridge, loop, and bowl become one continuous form—simple to understand, difficult to drop, and free from added straps or mechanisms.</p></div>
        </div>
        <Image src={followBlock.src} alt="Diagram of the spoon pattern and integrated follow block" />
      </section>

      <section className="spoon-process">
        <header><span>03</span><p>Foundry process</p><h2>The form had to work for the hand—and for the pour.</h2></header>

        <article>
          <Image src={pattern.src} alt="One-piece spoon pattern prepared for sand casting" />
          <div><span>01</span><h3>Build the pattern</h3><p>A full-scale pattern translated the ergonomic loop and spoon into a form that could be tested inside the mold.</p></div>
        </article>

        <article>
          <Image src={casting.src} alt="Removing the spoon pattern from the sand mold before casting" />
          <div><span>02</span><h3>Integrate the follow block</h3><p>The first attempt separated the pattern from a rough follow block and created extensive post-processing. A tighter, integral follow block produced a cleaner and more successful pour.</p></div>
        </article>

        <div className="spoon-process-videos">
          <figure><AutoVideo src={publicPath("/spoon/process-01.mp4")} label="Spoon foundry process, first view" /></figure>
          <figure><AutoVideo src={publicPath("/spoon/process-02.mp4")} label="Spoon foundry process, second view" /></figure>
        </div>

        <article>
          <Image src={cutting.src} alt="Cutting casting gates from the metal spoon" />
          <div><span>03</span><h3>Release the casting</h3><p>After the pour, the gates and excess metal were cut away while protecting the loop and the transition into the bowl.</p></div>
        </article>

        <article>
          <Image src={finishing.src} alt="Hand finishing the cast spoon surface" />
          <div><span>04</span><h3>Finish by hand</h3><p>Grinding, sanding, and polishing softened the casting marks and made the object comfortable to hold and use.</p></div>
        </article>
      </section>

      <section className="spoon-result">
        <p>04 · Result</p>
        <Image src={hero.src} alt="Finished one-piece spoon designed for Xi's grandfather" />
        <blockquote>Inclusive design does not begin with an abstract user group. Sometimes it begins by noticing how someone you love moves through an ordinary day.</blockquote>
      </section>

      <section className="spoon-reflection">
        <p>05 · Reflection</p>
        <blockquote>Connection creates the attention required to find the real need.</blockquote>
        <div><p><strong>My role</strong></p><p>Needs finding · Ergonomic concept · Pattern design · Sand casting · Hand finishing</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
