import Link from "next/link";

const menuItems = [
  ["00", "/", "Shoreline home"],
  ["01", "/about", "About me"],
  ["02", "/areas/care-access", "Designing for Care"],
  ["03", "/areas/making-systems", "Making & Systems"],
  ["04", "/areas/materials-time", "Materials & Time"],
  ["05", "/areas/mind-body-behavior", "Mind, Body & Behavior"],
  ["06", "/areas/play-ai-interaction", "Play, AI & Interaction"],
  ["07", "/cv", "CV"],
] as const;

export function NavigationMenu() {
  return (
    <details className="about-menu">
      <summary>Menu <span aria-hidden="true">+</span></summary>
      <div>
        {menuItems.map(([index, href, title]) => (
          <Link key={href} href={href}><span>{index}</span><strong>{title}</strong></Link>
        ))}
      </div>
    </details>
  );
}

export function SiteNavigation({ label }: { label: string }) {
  return (
    <nav className="subpage-nav">
      <Link href="/">XI LIU <span>/</span> LAB</Link>
      <p>{label}</p>
      <NavigationMenu />
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="subpage-footer">
      <p>Continue exploring</p>
      <Link href="/">Explore my work<br />along the shoreline.</Link>
      <a href="mailto:liuxi@stanford.edu"><strong>Say hello</strong><span>liuxi@stanford.edu ↗</span></a>
    </footer>
  );
}
