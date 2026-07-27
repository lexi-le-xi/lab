import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import finishedSofa from "../../public/tofu-sofa/finished-sofa.jpg";
import discardedPallets from "../../public/tofu-sofa/discarded-pallets.jpg";

export const metadata: Metadata = {
  title: "Tofu Sofa · Xi Liu",
  description: "A community sofa made by hand from discarded pallets and available materials at ESTEAST.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

const steps = [
  ["01", "Quick model test & display", "/tofu-sofa/process-01-model.mp4", "Test the low, modular arrangement before committing material and labor."],
  ["02", "Fixing the pallets with hardware", "/tofu-sofa/process-02-pallets.mp4", "Turn discarded shipping pallets into a stable structural base."],
  ["03", "Covering the pallets with foam pads", "/tofu-sofa/process-03-foam.mp4", "Add softness without hiding the directness of the construction."],
  ["04", "Sewing the sofa covers", "/tofu-sofa/process-04-covers.mp4", "Make removable white covers that unify the reused structure."],
  ["05", "Fixing the cushions—done", "/tofu-sofa/process-05-finish.mp4", "Complete the shared seating with simple cushions and flexible arrangements."],
] as const;

export default function TofuSofaPage() {
  return (
    <main className="tofu-page">
      <SiteNavigation label="Project · Tofu Sofa" />

      <header className="tofu-hero">
        <p>Material reuse · Community making · Furniture</p>
        <h1>TOFU<br />SOFA</h1>
        <div><h2>Discarded pallets, returned to use as a place to gather.</h2><p>A set of sofas made by hand for the ESTEAST community, using materials already available and a deliberately economical construction process.</p></div>
      </header>

      <figure className="tofu-lead"><img src={finishedSofa.src} alt="Finished white Tofu Sofa in the ESTEAST community space" /></figure>

      <section className="tofu-statement"><p>Connection with consequence</p><blockquote>A material does not become waste because its usefulness has ended—only because its next use has not yet been imagined.</blockquote></section>

      <section className="tofu-background">
        <div><span>01</span><p>Background</p><h2>Make comfort from what the community already has.</h2><section><p>While operating the ESTEAST studio, I needed seating that community members could use without turning to a costly new product.</p><p>Following my principle of “Make Less, Create More,” I collected discarded pallets and other available materials, then built a comfortable sofa at minimal cost.</p></section></div>
        <figure><img src={discardedPallets.src} alt="Discarded wooden pallets collected as the structure for Tofu Sofa" /></figure>
      </section>

      <section className="tofu-material-shift">
        <p>02 · Material shift</p>
        <h2>From logistics infrastructure to social infrastructure.</h2>
        <div><p>Pallets are designed to carry products through a supply chain and are often discarded once that task is complete.</p><p>Here, the same sturdy modular structure becomes the foundation for rest, conversation, and shared time.</p></div>
      </section>

      <section className="tofu-process">
        <header><span>03</span><p>Process</p><h2>Five direct steps, kept in their original making order.</h2></header>
        <div>
          {steps.map(([index, title, src, description]) => (
            <article key={index}>
              <figure><AutoVideo src={publicPath(src)} label={`${title}. ${description}`} /></figure>
              <section><span>{index}</span><h3>{title}</h3><p>{description}</p></section>
            </article>
          ))}
        </div>
      </section>

      <section className="tofu-result">
        <p>04 · Result</p>
        <figure><img src={finishedSofa.src} alt="The completed modular Tofu Sofa ready for community use" /></figure>
        <blockquote>A low-cost object can still create a generous place.</blockquote>
      </section>

      <section className="tofu-reflection">
        <p>05 · Reflection</p>
        <blockquote>“Make Less, Create More” begins by noticing value before asking for new material.</blockquote>
        <div><p><strong>My role</strong></p><p>Concept · Material sourcing · Model making · Construction · Sewing</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
