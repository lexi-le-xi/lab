import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../projects";
import { SiteFooter, SiteNavigation } from "../../site-chrome";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="project-page" style={{ "--accent": project.accent } as React.CSSProperties}>
      <SiteNavigation label={`${project.index} / ${String(projects.length).padStart(2, "0")} · ${project.title}`} />
      <header className="project-hero project-title-system">
        <p>{project.label}</p>
        <h1>{project.title}</h1>
        <div>
          <h2>{project.question}</h2>
          <p>{project.intro}</p>
        </div>
      </header>
      <div className={`project-art art-${project.object}`} aria-hidden="true">
        <div className="art-shape"><i /><b /><em /></div>
        <span>{project.status}</span>
      </div>
      <section className="project-intro">
        <p>Project note</p>
        <h2>{project.intro}</h2>
      </section>
      <section className="notes-grid">
        {project.notes.map(([title, copy], noteIndex) => (
          <article key={title}>
            <span>0{noteIndex + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <aside className="unfinished">
        <p>Work in progress</p>
        <h2>This page is a frame, ready for your real process photos, videos, sketches, and findings.</h2>
      </aside>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>Next on the table</span>
        <strong>{next.title}</strong>
        <b>↗</b>
      </Link>
      <SiteFooter />
    </main>
  );
}
