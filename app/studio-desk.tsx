import Link from "next/link";
import { projects } from "./projects";

function DeskObject({ type }: { type: string }) {
  if (type === "phone") {
    return <span className="phone-object"><i /><b>07:12</b><em>begin gently</em></span>;
  }
  if (type === "shoe") {
    return <span className="shoe-object"><i /><b /><em /></span>;
  }
  if (type === "cards") {
    return <span className="cards-object"><i>?</i><b>✦</b><em>↗</em></span>;
  }
  if (type === "orb") {
    return <span className="orb-object"><i /><b /></span>;
  }
  return <span className="notebook-object"><i>WHAT AM I<br />NOTICING?</i><b /><em /></span>;
}

export function StudioDesk() {
  const time = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  }).format(new Date());

  return (
    <main className="studio-shell">
      <header className="studio-header">
        <Link className="wordmark" href="/" aria-label="Xi Liu Studio home">
          XI LIU <span>/</span> STUDIO
        </Link>
        <p className="now">Currently exploring <i /> behavior, play &amp; companionship</p>
        <a className="contact-link" href="mailto:hello@example.com">Say hello ↗</a>
      </header>

      <section className="intro">
        <p className="eyebrow">A living design practice</p>
        <h1>I’m redesigning<br /><em>everyday life.</em></h1>
        <p className="intro-copy">This is my digital worktable—an evolving collection of objects, questions, and experiments. Pick something up.</p>
      </section>

      <section className="desk" aria-label="Interactive project desk">
        <div className="desk-grain" />
        <div className="ruler"><span>10</span><span>20</span><span>30</span><span>40</span></div>
        <div className="coffee-ring" />
        <div className="paper-scrap">systems<br />over screens</div>
        <div className="pencil"><i /></div>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`desk-project desk-${project.object}`}
            style={{ "--accent": project.accent } as React.CSSProperties}
            aria-label={`${project.title}: ${project.question}`}
            data-testid={`project-${project.slug}`}
          >
            <DeskObject type={project.object} />
            <span className="object-caption">
              <small>{project.index} / {project.lens}</small>
              <strong>{project.question}</strong>
              <b>Open project ↗</b>
            </span>
          </Link>
        ))}
        <div className="desk-stamp">
          <span>OPEN STUDIO</span>
          <b>{time} · PT</b>
        </div>
      </section>

      <section className="mobile-index">
        <p>On the table</p>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <span>{project.index}</span>
            <strong>{project.title}</strong>
            <em>{project.question}</em>
            <b>↗</b>
          </Link>
        ))}
      </section>

      <footer>
        <p>Made as a place for unfinished things.</p>
        <p>Stanford, California · {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
