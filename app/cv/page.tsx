import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV · Xi Liu",
  description: "Curriculum vitae for designer Xi Liu.",
};

export default function CvPage() {
  return (
    <main className="cv-page">
      <nav className="cv-nav">
        <Link href="/">XI LIU <span>/</span> LAB</Link>
        <p>Curriculum vitae</p>
        <Link href="/about">Back to about me</Link>
      </nav>
      <section className="cv-placeholder">
        <p>Curriculum vitae</p>
        <h1>CV</h1>
        <div>
          <h2>My full CV is being updated.</h2>
          <a href="mailto:liuxi@stanford.edu?subject=CV%20request">Request a copy ↗</a>
        </div>
      </section>
    </main>
  );
}
