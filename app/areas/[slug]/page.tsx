import Link from "next/link";
import { notFound } from "next/navigation";
import { areas } from "../../areas";
import { SiteFooter, SiteNavigation } from "../../site-chrome";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas.find((item) => item.slug === slug);
  if (!area) notFound();

  const projectHref = (project: string) => {
    if (project === "ESTEAST") return "/esteast";
    if (project === "HOVER") return "/hover";
    if (project === "ALL WE ARE / Modular Shoes") return "/all-we-are";
    if (project === "3D Printed Shoes") return "/3d-print";
    if (project === "Mat Bag") return "/mat-bag";
    if (project === "Concrete Cooking Stove") return "/concrete-stove";
    if (project === "BBgo") return "/bbgo";
    return null;
  };

  return (
    <main className="area-page" style={{ "--area-color": area.color } as React.CSSProperties}>
      <SiteNavigation label={`${area.index} / 05 · ${area.title}`} />
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
            <li key={project}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{projectHref(project) ? <Link href={projectHref(project)!}>{project}</Link> : project}</strong>
              <em>{projectHref(project) ? "View project ↗" : "In development"}</em>
            </li>
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
      <SiteFooter />
    </main>
  );
}
