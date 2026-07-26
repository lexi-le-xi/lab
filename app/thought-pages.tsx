import Link from "next/link";

export type ThoughtPageData = {
  index: string;
  title: string;
  eyebrow: string;
  statement: string;
  introduction: string;
  color: string;
  sections?: readonly { title: string; body: string }[];
  principles?: readonly string[];
  next: { href: string; label: string };
};

export function ThoughtPage({ data }: { data: ThoughtPageData }) {
  return (
    <main className="thought-page" style={{ "--thought-color": data.color } as React.CSSProperties}>
      <nav className="thought-nav">
        <Link href="/">XI LIU <span>/</span> STUDIO</Link>
        <p>{data.index} · Inner practice</p>
        <Link href="/about">About Xi →</Link>
      </nav>

      <header className="thought-hero">
        <p>{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <blockquote>{data.statement}</blockquote>
      </header>

      <section className="thought-intro">
        <p>Why it matters</p>
        <h2>{data.introduction}</h2>
      </section>

      {data.sections && (
        <section className="thought-sections">
          {data.sections.map((section, index) => (
            <article key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </section>
      )}

      {data.principles && (
        <ol className="thought-principles">
          {data.principles.map((principle, index) => (
            <li key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      )}

      <footer className="thought-footer">
        <p>Continue flying</p>
        <Link href={data.next.href}>Next: {data.next.label} <span>→</span></Link>
        <Link href="/">Return to the shoreline</Link>
      </footer>
    </main>
  );
}
