import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'NORMATIVE GOVERNANCE SUMMARY',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'GOVERNANCE.md · current main lineage',
  evidenceBoundary: 'Web summary of canonical governance. GOVERNANCE.md and machine-enforced repository policy remain authoritative.',
  pageUrl: 'https://openrgd.org/governance',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md',
}

const provenanceSources = [
  { label: 'OpenRGD GOVERNANCE', href: 'https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md' },
  { label: 'OpenRGD CONTRIBUTING', href: 'https://github.com/OpenRGD/openrgd/blob/main/CONTRIBUTING.md' },
  { label: 'OpenRGD RELEASE POLICY', href: 'https://github.com/OpenRGD/openrgd/blob/main/RELEASE_POLICY.md' },
  { label: 'OpenRGD STRUCTURE', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'Governance',
  description: 'OpenRGD governance: human accountability, maturity states, normative change rules, RFCs, contract promotion, releases and repository authority.',
  canonicalPath: '/governance',
  record: citationRecord,
})

const maturity = [
  ['candidate', 'Reviewable convergence material; non-normative and subject to breaking change.'],
  ['accepted', 'Approved through governance and normative within its declared version or profile.'],
  ['deprecated', 'Retained for compatibility and provenance but no longer recommended.'],
  ['historical', 'Evidence only; never current authority.'],
]

export default function GovernancePage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">OPENRGD GOVERNANCE</p>
        <h1>Meaning changes through evidence, review and explicit human acceptance.</h1>
        <p>
          OpenRGD separates normative standard changes, candidate experiments, tooling work
          and historical evidence so that repository location or implementation convenience
          cannot silently redefine the standard.
        </p>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md" target="_blank" rel="noreferrer">Canonical governance ↗</a>
          <a className="button ghost" href="/about">About OpenRGD →</a>
          <a className="button ghost" href="/security">Security →</a>
        </div>
      </section>

      <ReferenceProvenance
        title="OpenRGD Governance"
        description="OpenRGD governance: human accountability, maturity states, normative change rules, RFCs, contract promotion, releases and repository authority."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell content-split">
        <article>
          <p className="kicker">SCOPE</p>
          <h2>The canonical repository governs representation and contracts.</h2>
          <p>
            Governance covers the modular specification, cross-component contracts,
            canonical hashing, deterministic compilation, evidence-only importers, static
            exporters, validation tooling and compatibility records.
          </p>
        </article>
        <article>
          <p className="kicker">LIMIT</p>
          <h2>Governance does not grant physical execution authority.</h2>
          <p>
            Body Adapters, hardware orchestration and embodied runtimes remain separately
            governed implementation responsibilities. No repository decision turns a
            semantic artifact into permission to actuate hardware.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">HUMAN ACCOUNTABILITY</p>
          <h2>AI may assist. A human maintainer accepts normative change.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card">
            <h3>Current steward</h3>
            <p>Pasquale Ranieri (@phate6872) is named as the current project steward.</p>
          </article>
          <article className="content-card">
            <h3>Normative acceptance</h3>
            <p>A human maintainer remains accountable for accepting normative changes, merging pull requests and publishing releases.</p>
          </article>
          <article className="content-card">
            <h3>AI participation</h3>
            <p>AI systems may help draft, review, test or analyze changes, but temporary AI profiles are not governance authorities.</p>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">MATURITY STATES</p>
          <h2>Location in the repository never overrides declared maturity.</h2>
        </div>
        <div className="data-list">
          {maturity.map(([state, meaning]) => (
            <div className="data-row" key={state}>
              <span>{state}</span>
              <strong>{state.toUpperCase()}</strong>
              <em>{meaning}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">NORMATIVE CHANGE</p>
          <h2>Changes that alter meaning require more than a code diff.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Evidence', 'A normative change must state the problem and the evidence supporting the proposed change.'],
            ['Compatibility', 'Meaning-changing work must analyze compatibility, migration and affected consumers.'],
            ['Decision record', 'RFC or decision evidence is required when compatibility, governance, hard invariants or ownership change.'],
            ['Integrity', 'Canonical hashes and derived artifacts are updated when their selected source bytes change.'],
            ['CI', 'Required validation and conformance checks must pass on the reviewed head.'],
            ['Acceptance', 'A human maintainer records explicit acceptance before the normative change is merged.'],
          ].map(([title, copy]) => (
            <article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RFC & CONTRACT PROMOTION</p>
          <h2>Candidate material becomes normative only through an explicit promotion decision.</h2>
        </div>
        <div className="authority-stack">
          {[
            ['01', 'Complete contract', 'Schemas and normative text are complete.'],
            ['02', 'Compatibility', 'Versioning and compatibility rules are explicit.'],
            ['03', 'Conformance', 'Producer and consumer conformance tests exist.'],
            ['04', 'Reference flow', 'At least one validated reference flow is available.'],
            ['05', 'No contradiction', 'The candidate does not conflict with the Canonical Core.'],
            ['06', 'Governance decision', 'An accepted RFC or equivalent decision records promotion.'],
            ['07', 'Machine-readable state', 'Status metadata is updated to reflect the new maturity.'],
          ].map(([n, title, copy]) => (
            <div className="authority-row" key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="shell warning-panel">
        <span>MERGE ≠ RELEASE</span>
        <h2>A merged change is not automatically a published standard or stable contract.</h2>
        <p>
          Standard, toolchain and contract releases use separate scoped version axes.
          Release preparation requires its own evidence, compatibility statement, artifact
          inventory and provenance.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">CANONICAL RECORD</p>
        <h2>Use the repository governance files when precision matters.</h2>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md" target="_blank" rel="noreferrer">GOVERNANCE.md ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/RELEASE_POLICY.md" target="_blank" rel="noreferrer">Release policy ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contributing ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
