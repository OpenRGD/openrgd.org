import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering notes, research updates, specification changes and development logs from OpenRGD.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <main className="blog-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="OpenRGD home">
          <span className="brand-mark">RGD</span>
          <span className="brand-name">OpenRGD</span>
        </a>
        <nav className="nav" aria-label="Blog navigation">
          <a href="/">Home</a>
          <a href="/#architecture">Architecture</a>
          <a href="/#ecosystem">Ecosystem</a>
        </nav>
        <a className="github-link" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>

      <section className="blog-hero shell">
        <p className="kicker">OPENRGD BLOG</p>
        <h1>Engineering notes from the embodiment graph.</h1>
        <p>
          Specification changes, architecture decisions, experiments, interoperability work
          and research notes from the OpenRGD ecosystem.
        </p>
      </section>

      <section className="shell blog-empty">
        <div>
          <span>01</span>
          <strong>Specification</strong>
          <p>Normative changes, design rationale and compatibility notes.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Engineering</strong>
          <p>Runtime boundaries, adapters, imports, exports and implementation work.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Research</strong>
          <p>Embodied AI, Physical AI, interoperability and robot intelligence.</p>
        </div>
      </section>

      <section className="shell blog-status">
        <span>EDITORIAL PIPELINE</span>
        <p>No filler posts. The blog will publish source-backed engineering and research updates as they are ready.</p>
      </section>
    </main>
  )
}
