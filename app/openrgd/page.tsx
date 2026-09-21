import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'What is OpenRGD?',
  description: 'OpenRGD is an open, machine-readable standard for cognitive embodiment and robot interoperability.',
  alternates: { canonical: '/openrgd' },
}

const axes = [
  ['Standard bundle', '0.2.0', 'Draft'],
  ['Python toolchain', '0.1.1', 'Working alpha'],
  ['Agent contracts', '0.1.0', 'Candidate'],
]

export default function OpenRGDPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">OPENRGD</p>
        <h1>A semantic standard for cognitive embodiment.</h1>
        <p>
          OpenRGD gives an AI system a structured, machine-readable description of a robot body,
          its operational limits, capabilities, lifecycle and relationships with other agents.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/spec">Read the spec</a>
          <a className="button ghost" href="/architecture">Explore the architecture</a>
        </div>
      </section>

      <section className="shell content-split">
        <article>
          <p className="kicker">WHAT IT IS</p>
          <h2>A grounding layer between cognition and embodiment.</h2>
          <p>
            OpenRGD is designed to represent more than geometry. It can describe physical evidence,
            operational constraints, declared capabilities, governance context and lifecycle state while preserving provenance.
          </p>
        </article>
        <article>
          <p className="kicker">WHAT IT IS NOT</p>
          <h2>Not a physical runtime. Not actuation permission.</h2>
          <p>
            The canonical repository is deliberately non-actuating. A valid OpenRGD profile or a successful
            <code> rgd boot </code> does not prove hardware readiness, safety or permission to move a robot.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CURRENT ARTIFACT AXES</p>
          <h2>Versioned independently by design.</h2>
        </div>
        <div className="data-list">
          {axes.map(([artifact, version, status]) => (
            <div className="data-row" key={artifact}>
              <span>{artifact}</span>
              <strong>{version}</strong>
              <em>{status}</em>
            </div>
          ))}
        </div>
        <p className="content-note">
          Standard, toolchain and contract versions are separate. Matching numbers do not imply compatibility or equivalent maturity.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CANONICAL RESPONSIBILITY</p>
          <h2>Source, contracts and tooling — with explicit boundaries.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Specification', 'Normative modular JSONC source under spec/.'],
            ['Integrity', 'Canonical hashing and deterministic compilation.'],
            ['Import', 'Evidence-only extraction from supported robot descriptions.'],
            ['Interop', 'Static exporters and explicit cross-component contracts.'],
            ['Governance', 'Human accountability, maturity and release rules.'],
            ['History', 'Preserved evidence without rewriting the past to fit current decisions.'],
          ].map(([title, copy]) => (
            <article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="shell content-cta">
        <p className="kicker">NEXT</p>
        <h2>Understand how the graph is structured.</h2>
        <div className="content-actions">
          <a className="button primary" href="/architecture">Architecture →</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Canonical repository ↗</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
