import type { Metadata } from "next";
import Link from "next/link";
import { SiteNavigation } from "../site-chrome";

export const metadata: Metadata = {
  title: "CV · Xi Liu",
  description: "Selected experience, education, and capabilities of designer, strategist, and product innovator Xi Liu.",
};

const experience = [
  {
    role: "Research Assistant",
    organization: "Stanford University",
    text: "Researching how environmental organizations can automate their workflows, reduce repetitive operational work, and devote more capacity to their core missions.",
  },
  {
    role: "Strategist",
    organization: "Shanghai Wetland & Woodland Ecological Project",
    text: "Contributed to a 35-acre wetland and woodland ecosystem guided by a zero-human-interference strategy. Designed nature-education programs and interactive family experiences.",
  },
  {
    role: "Creative Director",
    organization: "ALL WE ARE",
    text: "Invented a patented detachable modular footwear structure and built a four-person team spanning product development, production, supply chain, and visual direction.",
  },
  {
    role: "Director of Footwear",
    organization: "Uppervoid",
    text: "Identified an unmet camping and recovery need and led HOVER from strategy through development, production, and launch. Built five collections and eighteen SKUs, with approximately 30,000 pairs sold and 35% of company sales in one quarter.",
    href: "/hover",
  },
  {
    role: "Founder & Creative Director",
    organization: "ESTEAST",
    text: "Renewed China’s multi-layer cloth-shoe tradition through contemporary design and a local women’s production community. Established an independent workshop and expanded into eight domestic and international boutiques.",
    href: "/esteast",
  },
  {
    role: "Product Director",
    organization: "Hugclub",
    text: "Co-founded an internet-driven wool footwear brand. Led product proposals, development, and supply-chain coordination; created two product families and achieved a 4:1 return through strategic promotion.",
  },
] as const;

export default function CvPage() {
  return (
    <main className="cv-page">
      <SiteNavigation label="Curriculum vitae" />

      <article className="cv-document">
        <header className="cv-document-header">
          <div><h1>Xi Liu</h1><p>Designer · Strategist · Product Innovator</p></div>
          <address>
            <a href="mailto:liuxi@stanford.edu">liuxi@stanford.edu</a>
            <span>Stanford, California</span>
            <a href="mailto:liuxi@stanford.edu?subject=Full%20CV%20request">Request full CV ↗</a>
          </address>
        </header>

        <div className="cv-columns">
          <aside className="cv-sidebar">
            <section><h2>Profile</h2><p className="cv-profile-copy">A questioner and problem solver working across products, systems, behavior, and emerging technology. I find the core of a problem and turn that understanding into thoughtful, practical solutions.</p></section>

            <section>
              <h2>Education</h2>
              <div className="cv-small-entry"><strong>M.S. Design</strong><span>Stanford University</span></div>
              <div className="cv-small-entry"><strong>M.A. Fashion Entrepreneurship</strong><span>University of the Arts London</span></div>
              <div className="cv-small-entry"><strong>B.Eng. Fashion Design &amp; Engineering</strong><span>Donghua University</span></div>
            </section>

            <section><h2>Strategy</h2><p>Product innovation<br />Systems thinking<br />User research<br />Sustainable design<br />Brand direction<br />Supply-chain strategy</p></section>
            <section><h2>Languages</h2><p>Chinese <span>Native</span><br />English <span>Fluent</span></p></section>
            <section><h2>Interests</h2><p>Rowing · Tennis<br />Badminton · Handpan</p></section>
          </aside>

          <div className="cv-main-column">
            <section className="cv-resume-section">
              <h2>Selected Experience</h2>
              {experience.map((item) => (
                <article className="cv-job" key={item.organization}>
                  <div><h3>{item.role}</h3><p>{item.organization}</p></div>
                  <p>{item.text}</p>
                  {"href" in item && <Link href={item.href}>View project ↗</Link>}
                </article>
              ))}
            </section>

            <section className="cv-resume-section cv-ip">
              <h2>Selected Recognition &amp; IP</h2>
              <ul>
                <li><strong>Detachable modular footwear structure</strong><span>Chinese patent protection</span></li>
                <li><strong>One-piece molded 3D-printed leisure shoe</strong><span>Chinese utility patent</span></li>
                <li><strong>Adhesive-free mortise-and-tenon shoe construction</strong><span>Chinese utility patent</span></li>
                <li><strong>London Mayor’s Low Carbon Prize</strong><span>Shortlisted project</span></li>
              </ul>
            </section>
          </div>
        </div>

        <footer className="cv-document-footer">
          <p>Selected public CV · Detailed dates and additional experience available upon request.</p>
          <a href="mailto:liuxi@stanford.edu">Say hello ↗</a>
        </footer>
      </article>
    </main>
  );
}
