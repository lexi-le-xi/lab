import type { Metadata } from "next";
import { AutoVideo } from "../mat-bag/auto-video";
import { SiteFooter, SiteNavigation } from "../site-chrome";
import hero from "../../public/unmaking-time/hero.jpg";
import participationOne from "../../public/unmaking-time/participation-01.jpg";
import participationTwo from "../../public/unmaking-time/participation-02.jpg";
import timeDebtPile from "../../public/unmaking-time/time-debt-pile.jpg";
import videoStillOne from "../../public/unmaking-time/video-still-01.png";
import videoStillTwo from "../../public/unmaking-time/video-still-02.png";

export const metadata: Metadata = {
  title: "Unmaking Time · Xi Liu",
  description: "Threads of Time: The Unpaid Debt—an interactive installation about fast fashion, environmental time debt, and generational responsibility.",
};

const publicPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/lab" : ""}${path}`;

export default function UnmakingTimePage() {
  return (
    <main className="unmaking-page">
      <SiteNavigation label="Project · Unmaking Time" />

      <header className="unmaking-hero project-title-system">
        <p>Participatory installation · Fast fashion · Environmental time debt</p>
        <h1>UNMAKING<br />TIME</h1>
        <div>
          <h2>What takes seconds to undo may remain for centuries.</h2>
          <p><em>Threads of Time: The Unpaid Debt</em> turns the unraveling of a sweater into a physical measure of consumption, consequence, and generational responsibility.</p>
        </div>
      </header>

      <figure className="unmaking-lead"><img src={hero.src} alt="Visitors encountering the suspended sweaters and accumulated yarn in the Unmaking Time installation" /></figure>

      <section className="unmaking-instruction">
        <p>Before you keep reading</p>
        <h2>Pull the thread.</h2>
        <p>Feel how immediate deconstruction is. Then turn around and look at what the action leaves behind.</p>
      </section>

      <section className="unmaking-question">
        <p>01 · The question</p>
        <blockquote>Can one small action make the hidden timescale of consumption impossible to ignore?</blockquote>
        <div className="unmaking-question-copy"><p>A garment can be produced, purchased, and discarded with extraordinary speed. Its synthetic fibers may persist in the Earth for hundreds of years.</p><p>The installation makes that imbalance visible: present desire creates a debt that the future is asked to carry.</p></div>
        <div className="unmaking-question-images"><img src={videoStillOne.src} alt="A visitor standing beside the suspended sweater installation" /><img src={videoStillTwo.src} alt="A visitor reaching toward a suspended sweater panel" /></div>
      </section>

      <section className="unmaking-action">
        <header><span>02</span><p>The act</p><h2>From consumer to participant.</h2></header>
        <div className="unmaking-action-grid">
          <figure><img src={participationOne.src} alt="A visitor pulling a red strand from a suspended sweater panel" /></figure>
          <article><h3>Deconstruct the polished surface.</h3><p>Pulling exposes the garment as fiber and interrupts the distance between a finished product, its material, and the system that produced it.</p></article>
          <figure><img src={participationTwo.src} alt="Visitors gathering around the installation as fibers accumulate below" /></figure>
          <article><h3>Turn speed into a contrast.</h3><p>The movement lasts only seconds. The resulting synthetic material can remain for generations. The body understands this contrast before the explanation arrives.</p></article>
        </div>
      </section>

      <section className="unmaking-film">
        <p>03 · The installation in motion</p>
        <figure><AutoVideo src={publicPath("/unmaking-time/installation.mov")} label="Visitors interacting with the suspended sweaters and pulling their threads" /></figure>
      </section>

      <section className="unmaking-debt">
        <figure><img src={timeDebtPile.src} alt="A large pile of extracted red and yellow yarn beneath the hanging sweaters" /></figure>
        <div><span>04 · The time debt pile</span><h2>The consequence grows beneath our feet.</h2><p>Every extracted fiber becomes a unit of material and time borrowed from the future. As individual actions accumulate, an abstract environmental problem becomes a visible, collective record.</p></div>
      </section>

      <section className="unmaking-contrasts">
        <p>Two measures of time</p>
        <article><span>01</span><h3>The speed of action</h3><p>Seconds to pull, purchase, and discard.</p></article>
        <article><span>02</span><h3>The slowness of persistence</h3><p>Decades or centuries for synthetic fibers to degrade.</p></article>
        <article><span>03</span><h3>The present gain</h3><p>The immediacy of desire and convenience.</p></article>
        <article><span>04</span><h3>The future debt</h3><p>The environmental cost inherited by people who did not choose it.</p></article>
      </section>

      <section className="unmaking-reflection">
        <p>05 · Reflection</p>
        <blockquote>What will you leave behind?</blockquote>
        <div><p>The thread is an irreversible chain of events. The participant eventually turns back to face the permanent mark of a temporary action—the same relationship our consumption choices have with the future.</p><p><strong>My role</strong><br />Concept · Installation design · Interaction design · Material construction · Artist statement</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
