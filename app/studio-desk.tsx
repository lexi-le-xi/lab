import Link from "next/link";
import { projects } from "./projects";

const hotspotPositions: Record<string, { x: string; y: string; side?: string }> = {
  "morning-os": { x: "18%", y: "63%", side: "right" },
  "modular-shoes": { x: "31%", y: "19%", side: "below" },
  "ai-companion": { x: "51%", y: "39%", side: "below" },
  "design-for-play": { x: "78%", y: "23%", side: "left" },
  notebook: { x: "74%", y: "72%", side: "left" },
};

export function StudioDesk() {
  const assetBase = process.env.GITHUB_ACTIONS === "true" ? "/lab" : "";

  return (
    <main
      className="world-home"
      style={{ "--world-image": `url('${assetBase}/studio-world.png')` } as React.CSSProperties}
    >
      <header className="world-nav">
        <Link className="world-mark" href="/" aria-label="Xi Liu Studio home">
          XI LIU <span>/</span> STUDIO
        </Link>
        <p><i /> A living design practice</p>
        <a href="mailto:hello@example.com">Say hello ↗</a>
      </header>

      <section className="world-intro">
        <p className="world-kicker">Welcome to my digital studio</p>
        <h1>Ideas become<br /><em>places to explore.</em></h1>
        <p className="world-summary">
          Five ongoing experiments in behavior, objects, play, AI, and research.
          Move through the space and choose an object.
        </p>
      </section>

      <div className="world-scroll" aria-label="Scrollable 3D project studio">
        <section className="world-scene">
          <div className="world-glow" />
          {projects.map((project) => {
            const position = hotspotPositions[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`world-hotspot label-${position.side}`}
                style={{
                  "--x": position.x,
                  "--y": position.y,
                  "--accent": project.accent,
                } as React.CSSProperties}
                aria-label={`${project.title}: ${project.question}`}
                data-testid={`project-${project.slug}`}
              >
                <span className="hotspot-ring"><i /></span>
                <span className="hotspot-label">
                  <small>{project.index} · {project.lens}</small>
                  <strong>{project.title}</strong>
                  <em>{project.question}</em>
                  <b>Enter ↗</b>
                </span>
              </Link>
            );
          })}
          <p className="world-drag">Drag to explore <span>→</span></p>
        </section>
      </div>

      <section className="world-index">
        <p>All experiments</p>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <span>{project.index}</span>
            <strong>{project.title}</strong>
            <em>{project.lens}</em>
            <b>↗</b>
          </Link>
        ))}
      </section>

      <footer className="world-footer">
        <p>Made as a place for unfinished things.</p>
        <p>Stanford, California · {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
