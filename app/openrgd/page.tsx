import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import FormatComparison from '@/components/format-comparison'

const citationRecord: CitationRecordData = {
  maturity: 'STANDARD BUNDLE 0.2.0 · DRAFT',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'OpenRGD standard 0.2.0 · rgd toolchain 0.1.1 · Agent Contracts 0.1.0',
  evidenceBoundary: 'Project and standard definition; maturity varies by artifact and domain, and the canonical repository remains non-actuating.',
  pageUrl: 'https://openrgd.org/openrgd',
  canonicalSource: 'https://github.com/OpenRGD/openrgd',
}

const provenanceSources = [
  { label: 'OpenRGD README', href: 'https://github.com/OpenRGD/openrgd' },
  { label: 'OpenRGD STRUCTURE', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
  { label: 'OpenRGD VERSIONING', href: 'https://github.com/OpenRGD/openrgd/blob/main/VERSIONING.md' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'OpenRGD — Robot Graph Definition',
  description: 'OpenRGD defines Robot Graph Definition: an open, machine-readable semantic representation for cognitive embodiment, robot interoperability and grounded AI context.',
  canonicalPath: '/openrgd',
  record: citationRecord,
})

const axes = [
  ['Standard bundle', '0.2.0', 'Draft'],
  ['Python toolchain', '0.1.1', 'Working alpha'],
  ['Agent contracts', '0.1.0', 'Candidate'],
]

const domains = [
  ['00', 'Core', 'Identity, manifests, coordination and cross-domain orchestration.'],
  ['01', 'Foundation', 'Physical body, hardware reality and source-supported evidence.'],
  ['02', 'Operation', 'Operational constraints, safety and runtime validation context.'],
  ['03', 'Agency', 'Capabilities, world-model context and action semantics.'],
  ['04', 'Volition', 'Values, alignment and decision governance.'],
  ['05', 'Evolution', 'Lifecycle, wear, adaptation and continuity.'],
  ['06', 'Ether', 'Collective, social and inter-agent semantics.'],
]

export default function OpenRGDPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">OPENRGD · ROBOT GRAPH DEFINITION</p>
        <h1>A machine-readable semantic representation for embodied systems.</h1>
        <p>
          OpenRGD is the project and open standard. Robot Graph Definition — RGD — is the modular
          machine-readable representation it defines for describing a robot body, its constraints,
          capabilities, provenance, lifecycle and higher-level embodiment context.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/spec">Read the specification</a>
          <a className="button ghost" href="/architecture">Explore the architecture</a>
          <a className="button ghost" href="/rgd">Use the rgd toolchain</a>
        </div>
      </section>

      <ReferenceProvenance
        title="OpenRGD — Robot Graph Definition"
        description="OpenRGD defines Robot Graph Definition: an open, machine-readable semantic representation for cognitive embodiment, robot interoperability and grounded AI context."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell content-split">
        <article>
          <p className="kicker">OPENRGD</p>
          <h2>The standard, repository, governance and interoperability work.</h2>
          <p>
            OpenRGD owns the canonical specification source, authority model, maturity language,
            cross-component contracts, reference tooling and the governance process around Robot Graph Definition.
          </p>
        </article>
        <article>
          <p className="kicker">RGD</p>
          <h2>The machine-readable graph/profile representation.</h2>
          <p>
            An RGD profile can represent physical evidence, operational constraints, declared capabilities,
            governance context and lifecycle state while preserving explicit boundaries between evidence,
            enrichment and downstream physical execution.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">WHAT RGD ADDS</p>
          <h2>Robot structure is evidence. Embodiment context goes further.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Identity', 'Profile identity, manifests and integrity commitments.'],
            ['Evidence', 'Physical facts can be imported while preserving source provenance.'],
            ['Operation', 'Constraints and safety context stay explicit instead of hiding in runtime code.'],
            ['Capabilities', 'Agency can declare what an embodiment can do and how actions are represented.'],
            ['Lifecycle', 'Wear, adaptation and continuity can evolve without rewriting historical evidence.'],
            ['Boundaries', 'Semantic context stops before hardware-specific execution authority begins.'],
          ].map(([title,copy])=>(
            <article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">SEVEN DOMAINS</p>
          <h2>One embodiment, decomposed into explicit semantic responsibility.</h2>
        </div>
        <div className="domain-stack">
          {domains.map(([code,name,copy])=>(
            <article className="domain" key={code}>
              <div className="domain-code">{code}</div>
              <div className="domain-body"><h3>{name}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CURRENT ARTIFACT AXES</p>
          <h2>Standard, toolchain and contracts are versioned independently.</h2>
        </div>
        <div className="data-list">
          {axes.map(([artifact,version,status])=>(
            <div className="data-row" key={artifact}>
              <span>{artifact}</span>
              <strong>{version}</strong>
              <em>{status}</em>
            </div>
          ))}
        </div>
        <p className="content-note">
          Matching version numbers never imply equivalent maturity or compatibility.
          The standard bundle, Python toolchain and agent contracts remain separate release axes.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">COMPLEMENTARY LAYERS</p>
          <h2>RGD is designed to sit beside established robot-description technologies.</h2>
        </div>
        <FormatComparison />
      </section>

      <section className="shell warning-panel">
        <span>NON-ACTUATING BOUNDARY</span>
        <h2>A valid RGD profile is context, not permission to move a robot.</h2>
        <p>
          The canonical repository does not ship a physical embodied runtime or Body Adapter.
          Validation, compilation and grounding context do not prove hardware compatibility,
          operational safety or execution authorization.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">NEXT</p>
        <h2>Understand the standard, then use the reference tooling against real robot evidence.</h2>
        <div className="content-actions">
          <a className="button primary" href="/spec">Specification →</a>
          <a className="button ghost" href="/docs">Developers →</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Canonical repository ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
