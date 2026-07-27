import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/concrete-stove/hero.png";
import final01 from "../../public/concrete-stove/final-01.jpg";
import final02 from "../../public/concrete-stove/final-02.jpg";

export const metadata: Metadata = {
  title: "Concrete Cooking Stove · Xi Liu",
  description: "A concrete cooking surface made by hand for the shared community space at ESTEAST.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const processMedia = [
  { index: "01", title: "Choose the surface", description: "Choose a piece of wood with a smooth surface.", type: "image", src: final02.src },
  { index: "02", title: "Build the mold", description: "Make a mold for the concrete slab and define the opening for the induction cooker.", type: "video", src: "/concrete-stove/process-07.mp4" },
  { index: "03", title: "Fill with concrete", description: "Mix and fill the mold with concrete, then continue the pour and distribute the material evenly through the form.", type: "video", src: "/concrete-stove/process-05.mp4" },
  { index: "04", title: "Build the base", description: "Use bricks to build and complete the supporting wall before the slab is moved into place.", type: "video", src: "/concrete-stove/process-03.mp4" },
  { index: "05", title: "Lift the slab", description: "After a week of curing, get help to lift the fully dried—and very heavy—concrete slab.", type: "video", src: "/concrete-stove/process-06.mp4" },
  { index: "06", title: "Finish the surface", description: "Refine the slab after it has been set onto the base.", type: "video", src: "/concrete-stove/process-01.mp4" },
  { index: "07", title: "Put it into use", description: "Place the induction cooker into the opening: done.", type: "video", src: "/concrete-stove/process-02.mp4" },
] as const;

export default function ConcreteStovePage() {
  return (
    <main className="concrete-page">
      <SiteNavigation label="Project · Concrete Cooking Stove" />

      <header className="concrete-hero">
        <p>Community making · Concrete · Built in place</p>
        <h1>CONCRETE<br />COOKING<br />STOVE</h1>
        <div>
          <h2>A shared kitchen surface, made with what the space could support.</h2>
          <p>I built this concrete cooking stove while running ESTEAST, responding directly to a practical need in our community space.</p>
        </div>
      </header>

      <figure className="concrete-lead"><img src={hero.src} alt="Finished concrete cooking stove with an integrated induction cooker" /></figure>

      <section className="concrete-statement">
        <p>Connection through making</p>
        <blockquote>What changes when the person who notices a need can also build the response?</blockquote>
      </section>

      <section className="concrete-intro">
        <span>01</span>
        <p>Background</p>
        <h2>Not a product brought into the room, but an object formed inside its context.</h2>
        <div>
          <p>The ESTEAST community needed a durable surface for shared cooking. Rather than purchasing a finished kitchen unit, I worked with readily available wood, concrete, bricks, and an induction cooker.</p>
          <p>The result was intentionally direct: a solid worktop shaped around the activity it needed to support, made at minimal cost through a process that could happen on site.</p>
        </div>
      </section>

      <section className="concrete-process">
        <header><span>02</span><p>Making process</p><h2>Seven steps from a sheet of wood to a place for gathering.</h2></header>
        <div className="concrete-process-grid">
          {processMedia.map(({ index, title, description, type, src }) => (
            <article key={index}>
              <figure>
                {type === "image"
                  ? <img src={src} alt={`${title}: ${description}`} />
                  : <AutoVideo src={publicPath(src)} label={`${title}: ${description}`} />}
              </figure>
              <div><span>{index}</span><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="concrete-result">
        <header><span>03</span><p>Result</p><h2>A quiet piece of infrastructure for everyday community life.</h2></header>
        <div className="concrete-gallery">
          <figure><img src={final01.src} alt="Concrete stove seen from the front corner" /></figure>
        </div>
      </section>

      <section className="concrete-reflection">
        <p>04 · Reflection</p>
        <blockquote>Making can be a form of participation: notice what a place needs, work with what is available, and leave behind something others can use.</blockquote>
        <div><p><strong>My role</strong></p><p>Concept · On-site design · Mold making · Construction</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
