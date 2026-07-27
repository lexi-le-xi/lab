import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteNavigation } from "../site-chrome";

export const metadata: Metadata = {
  title: "CV · Xi Liu",
  description: "Selected experience, education, and capabilities of designer and product leader Xi Liu.",
};

const experience = [
  {
    role: "Strategist",
    organization: "Shanghai Wetland & Woodland Ecological Project",
    text: "Contributed to a 35-acre wetland and woodland ecosystem guided by a zero-human-interference strategy, designing nature-education programs and interactive family experiences.",
  },
  {
    role: "Creative Director",
    organization: "ALL WE ARE",
    text: "Invented a detachable modular footwear structure, secured patent protection, and built a four-person team spanning product development, production, and visual direction.",
  },
  {
    role: "Director of Footwear",
    organization: "Uppervoid",
    text: "Identified an unmet camping and recovery need and led HOVER from product strategy through development, supply chain, and launch. Built five collections and eighteen SKUs, with approximately 30,000 pairs sold and 35% of company sales in one quarter.",
    href: "/hover",
  },
  {
    role: "Founder & Creative Director",
    organization: "ESTEAST",
    text: "Renewed China’s multi-layer cloth-shoe tradition through contemporary product design and a local women’s production community, expanding the brand into eight domestic and international boutiques.",
    href: "/esteast",
  },
  {
    role: "Product Director",
    organization: "Hugclub",
    text: "Co-founded an internet-driven wool footwear brand, leading product proposals, development, and supply-chain coordination. Created two product families addressing urban mobility needs and achieved a 4:1 return through strategic promotion.",
  },
] as const;

export default function CvPage() {
  return (
    <main className="cv-page">
      <SiteNavigation label="Curriculum vitae" />

      <header className="cv-hero">
        <p>Selected experience</p>
        <h1>CV</h1>
        <div>
          <h2>Designer, questioner, and problem solver working across products, systems, behavior, and emerging technology.</h2>
          <a href="mailto:liuxi@stanford.edu?subject=Full%20CV%20request">Request full CV ↗</a>
        </div>
      </header>

      <section className="cv-profile">
        <p>Profile</p>
        <blockquote>I ask questions to find the core of a problem, then turn that understanding into thoughtful, practical solutions.</blockquote>
        <div>
          <span>Product innovation</span><span>Brand strategy</span><span>Project leadership</span><span>Production systems</span>
        </div>
      </section>

      <section className="cv-section cv-experience">
        <div className="cv-section-heading"><p>01</p><h2>Selected experience</h2></div>
        <ol>
          {experience.map((item, index) => (
            <li key={item.organization}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{item.role}</p><h3>{item.organization}</h3></div>
              <p>{item.text}</p>
              {"href" in item ? <Link href={item.href}>View project ↗</Link> : <i />}
            </li>
          ))}
        </ol>
      </section>

      <section className="cv-section cv-education">
        <div className="cv-section-heading"><p>02</p><h2>Education</h2></div>
        <div className="cv-education-list">
          <article><p>M.S. Design</p><h3>Stanford University</h3><span>Human-centered design · Making · Behavior · Technology</span></article>
          <article><p>MA Fashion Entrepreneurship</p><h3>University of the Arts London</h3><span>Creative venture management · Sustainable practice</span></article>
          <article><p>BEng Fashion Design &amp; Engineering</p><h3>Donghua University</h3><span>Product structure · Materials · Production management</span></article>
        </div>
      </section>

      <section className="cv-section cv-capabilities">
        <div className="cv-section-heading"><p>03</p><h2>Capabilities</h2></div>
        <div className="cv-capability-grid">
          <article><span>01</span><h3>Strategy</h3><p>Opportunity finding, user research, systems thinking, sustainable design, and product direction.</p></article>
          <article><span>02</span><h3>Making</h3><p>Footwear development, prototyping, material exploration, CAD and 3D modeling.</p></article>
          <article><span>03</span><h3>Systems</h3><p>Project planning, production workflows, supply chains, and cross-functional coordination.</p></article>
          <article><span>04</span><h3>Leadership</h3><p>Team building, creative direction, resource planning, and decision-making under uncertainty.</p></article>
        </div>
      </section>

      <section className="cv-section cv-recognition">
        <div className="cv-section-heading"><p>04</p><h2>Selected recognition &amp; IP</h2></div>
        <ul>
          <li><strong>Detachable modular footwear structure</strong><span>Chinese patent protection</span></li>
          <li><strong>One-piece molded 3D-printed leisure shoe</strong><span>Chinese utility patent</span></li>
          <li><strong>Adhesive-free mortise-and-tenon shoe construction</strong><span>Chinese utility patent</span></li>
          <li><strong>London Mayor’s Low Carbon Prize</strong><span>Shortlisted project</span></li>
        </ul>
      </section>

      <section className="cv-contact">
        <p>Languages</p><h2>Chinese <span>Native</span><br />English <span>Fluent</span></h2>
        <div className="cv-interests"><p>Outside the work</p><span>Rowing · Badminton · Tennis · Handpan</span></div>
        <a href="mailto:liuxi@stanford.edu">liuxi@stanford.edu ↗</a>
      </section>

      <SiteFooter />
    </main>
  );
}
