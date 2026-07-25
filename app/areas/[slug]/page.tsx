import Link from "next/link";
import { notFound } from "next/navigation";
import { areas } from "../../areas";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <main className="area-page" style={{ "--area-color": area.color } as React.CSSProperties}>
      <header className="area-nav">
        <Link href="/">← Return to the lake</Link>
        <span>{area.index} / 05</span>
      </header>
      <section className="area-hero">
        <p>{area.connection}</p>
        <h1>{area.title}</h1>
        <h2>{area.question}</h2>
      </section>
      <section className="area-statement">
        <p>Field of inquiry</p>
        <h3>{area.description}</h3>
      </section>
      <section className="area-projects">
        <p>Projects & studies</p>
        <ol>
          {area.projects.map((project, index) => (
            <li key={project}><span>{String(index + 1).padStart(2, "0")}</span><strong>{project}</strong><em>In development</em></li>
          ))}
        </ol>
      </section>
      <blockquote>
        <small>Design insight</small>
        <p>{area.insight}</p>
      </blockquote>
      <nav className="area-next">
        {areas.map((item) => <Link key={item.slug} href={`/areas/${item.slug}`}>{item.index}</Link>)}
      </nav>
    </main>
  );
}
