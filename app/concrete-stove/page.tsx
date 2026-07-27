import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/concrete-stove/hero.png";
import final01 from "../../public/concrete-stove/final-01.jpg";
import final02 from "../../public/concrete-stove/final-02.jpg";
import final03 from "../../public/concrete-stove/final-03.jpg";

export const metadata: Metadata = {
  title: "Concrete Cooking Stove · Xi Liu",
  description: "A concrete cooking surface made by hand for the shared community space at ESTEAST.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const processSteps = [
  ["01", "Choose the surface", "Select a smooth sheet of wood that can give the concrete slab a clean working face."],
  ["02", "Build the mold", "Define the slab, its edges, and the opening for the induction cooker before anything is poured."],
  ["03", "Pour the concrete", "Fill the mold and let a simple material take on the precise surface required by the shared kitchen."],
  ["04", "Build the base", "Use brickwork to create a stable support in the space where the stove will live."],
  ["05", "Lift the slab", "After a week of curing, move the heavy concrete top into place with help from others."],
  ["06", "Finish the surface", "Refine the edges and surface so the object can withstand everyday preparation and cleaning."],
  ["07", "Put it into use", "Install the induction cooker and return the finished object to the community that needed it."],
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
          {processSteps.map(([index, title, description], i) => (
            <article key={index}>
              <figure><AutoVideo src={publicPath(`/concrete-stove/process-${String(i + 1).padStart(2, "0")}.mp4`)} label={`${title}: ${description}`} /></figure>
              <div><span>{index}</span><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="concrete-result">
        <header><span>03</span><p>Result</p><h2>A quiet piece of infrastructure for everyday community life.</h2></header>
        <div className="concrete-gallery">
          <figure><img src={final01.src} alt="Concrete stove seen from the front corner" /></figure>
          <figure><img src={final02.src} alt="Finished cooking surface reflecting the studio windows" /></figure>
          <figure><img src={final03.src} alt="Detail of the wooden mold used to form the concrete slab" /></figure>
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
