import type { Metadata } from "next";
import { SiteFooter, SiteNavigation } from "../site-chrome";

export const metadata: Metadata = {
  title: "Know Yourself · Xi Liu",
  description: "An ongoing inquiry into self-knowledge, personal growth, reflection, and how AI might support better life choices without defining the person.",
};

const observations = [
  ["01", "We often begin with improvement before understanding.", "Advice asks people to become more productive, disciplined, or successful before helping them notice what they value, what gives them energy, and what kind of life actually fits them."],
  ["02", "Effort cannot correct every misaligned choice.", "Persistence matters, but sustained effort in a direction that conflicts with a person’s strengths, needs, or values can deepen exhaustion rather than create growth."],
  ["03", "Self-knowledge is not a fixed profile.", "Strengths, interests, challenges, and preferences change with context and time. Any system for self-understanding must leave room for contradiction, uncertainty, and becoming."],
] as const;

const directions = [
  ["01", "Guided reflection", "Help people describe strengths, interests, challenges, preferences, values, and recurring sources of energy or resistance."],
  ["02", "Pattern synthesis", "Use AI to connect repeated signals across a person’s reflections—not to assign a type, but to reveal patterns they may want to examine."],
  ["03", "Explainable possibilities", "Offer possible paths, environments to explore, and conditions to avoid, while showing why each suggestion was made and where uncertainty remains."],
  ["04", "Small life experiments", "Turn recommendations into reversible experiments. Reflection after action allows the person—not the system—to decide what feels true."],
] as const;

export default function KnowYourselfPage() {
  return (
    <main className="know-page">
      <SiteNavigation label="Ongoing inquiry · Know Yourself" />

      <header className="know-hero project-title-system">
        <p>Self-knowledge · Personal growth · Reflective technology</p>
        <h1>KNOW<br />YOURSELF</h1>
        <div>
          <h2>How can we help people find a path that feels like their own?</h2>
          <p>Research in progress · An ongoing inquiry into self-knowledge, meditation, personal growth, and reflective technology.</p>
        </div>
      </header>

      <section className="know-status">
        <p>Current status</p>
        <h2>This is not a finished product. It is a question I am continuing to live with.</h2>
        <div><p>I began with the idea of an AI-powered personal trait analyzer: a tool that could use self-reported strengths, interests, challenges, and preferences to suggest career directions and areas to avoid.</p><p>The more I considered it, the more the question expanded beyond career choice. How do we come to know ourselves—and how might technology support that process without reducing a person to a score, label, or prediction?</p></div>
      </section>

      <section className="know-discovery">
        <header><span>01</span><p>What I have noticed</p><h2>Many systems tell us how to move faster. Few help us ask whether the direction is ours.</h2></header>
        <ol>{observations.map(([index, title, body]) => <li key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="know-thought">
        <p>02 · A shift in thinking</p>
        <blockquote>Choice may be more important than effort—but self-knowledge is what makes a meaningful choice possible.</blockquote>
        <div><p>The goal is not to discover one permanent, “correct” identity. It is to become more capable of noticing internal signals, questioning inherited expectations, and choosing with greater awareness.</p><p>A useful system would strengthen a person’s agency. It would offer language, patterns, and possibilities while leaving interpretation and decision-making with the individual.</p></div>
      </section>

      <section className="know-question">
        <span>03</span><p>The question now</p>
        <h2>How might reflection and AI work together to help people recognize themselves—without allowing the system to define who they are?</h2>
      </section>

      <section className="know-directions">
        <header><span>04</span><p>Possible directions</p><h2>A mirror for inquiry, not a machine that delivers a verdict.</h2></header>
        <ol>{directions.map(([index, title, body]) => <li key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="know-stanford">
        <p>05 · Learning at Stanford</p>
        <h2>Before designing a tool for self-knowledge, I needed to study how attention and inner change actually work.</h2>
        <div><p>This inquiry led me to courses at Stanford related to meditation and personal growth. Meditation introduced a different kind of knowing: observing thoughts, emotions, and bodily experience without immediately turning them into judgment or action.</p><p>These studies are changing the direction of the project. I am becoming less interested in a tool that tells people who they are, and more interested in experiences that help people notice, reflect, and make their own choices with clarity.</p></div>
      </section>

      <section className="know-next">
        <p>06 · What comes next</p>
        <h2>Listen first. Prototype carefully. Keep the person larger than the model.</h2>
        <div><p>The next phase may include conversations about moments of life-direction change, reflection exercises, and small prototypes that test how people respond to pattern-based prompts.</p><p>There are no final images or outcomes yet. For now, the work is the inquiry itself.</p></div>
      </section>

      <SiteFooter />
    </main>
  );
}
