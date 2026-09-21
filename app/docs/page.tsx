import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Docs — Getting Started',
  description: 'Start with the OpenRGD toolchain: init, import, hash, check, boot, compile and static export.',
  alternates: { canonical: '/docs' },
}

const steps = [
  ['01', 'Install', 'python -m pip install -e .'],
  ['02', 'Initialize', 'rgd init Robot'],
  ['03', 'Import evidence', 'rgd import robot.urdf --out partial-robot'],
  ['04', 'Verify source', 'rgd hash'],
  ['05', 'Validate profile', 'rgd check --output json'],
  ['06', 'Build grounding context', 'rgd boot --output json'],
  ['07', 'Compile', 'rgd compile-spec'],
  ['08', 'Static export', 'rgd export ros2 --out export/ros2'],
]

export default function DocsPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">GETTING STARTED</p>
        <h1>Evidence first. Deterministic context second.</h1>
        <p>
          This page is the public starting point. Full technical reference remains linked to the canonical repository
          while the dedicated documentation surface evolves independently.
        </p>
      </section>

      <section className="shell content-section">
        <div className="docs-steps">
          {steps.map(([n,title,command]) => (
            <article className="docs-step" key={n}>
              <span>{n}</span>
              <div><h2>{title}</h2><code>{command}</code></div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell warning-panel">
        <span>NON-ACTUATING BOUNDARY</span>
        <h2><code>rgd boot</code> does not boot hardware.</h2>
        <p>
          It builds an integrity-verified grounding context and explicitly records that physical execution is not assessed or authorized.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CANONICAL GUIDES</p><h2>Go deeper in the source repository.</h2></div>
        <div className="content-card-grid">
          {[
            ['CLI Guide', 'https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'],
            ['Import Guide', 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'],
            ['Export Guide', 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_EXPORT.md'],
            ['Structure', 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'],
            ['Governance', 'https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md'],
            ['Security', 'https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md'],
          ].map(([title,href]) => (
            <a className="content-card" href={href} target="_blank" rel="noreferrer" key={title}><h3>{title}</h3><p>Canonical repository document ↗</p></a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
