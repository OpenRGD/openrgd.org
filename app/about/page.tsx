import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'PROJECT REFERENCE · PUBLIC IDENTITY',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'OpenRGD standard bundle 0.2.0 · canonical governance and repository structure',
  evidenceBoundary: 'Public project summary derived from canonical repository documents; this website does not override the specification or governance record.',
  pageUrl: 'https://openrgd.org/about',
  canonicalSource: 'https://github.com/OpenRGD/openrgd',
}

const provenanceSources = [
  { label: 'OpenRGD README', href: 'https://github.com/OpenRGD/openrgd' },
  { label: 'OpenRGD GOVERNANCE', href: 'https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md' },
  { label: 'OpenRGD STRUCTURE', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
  { label: 'OpenRGD LICENSE', href: 'https://github.com/OpenRGD/openrgd/blob/main/LICENSE' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'About OpenRGD',
  description: 'About OpenRGD: the open Robot Graph Definition standard, its non-actuating scope, public governance, current maturity and project stewardship.',
  canonicalPath: '/about',
  record: citationRecord,
})

export default function AboutPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">ABOUT OPENRGD</p>
        <h1>Open infrastructure for cognitive embodiment.</h1>
        <p>
          OpenRGD is an open standard and toolchain for representing embodied systems in a
          machine-readable graph. The project focuses on semantic grounding, provenance,
          interoperability and explicit authority boundaries between description, cognition
          and physical execution.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/openrgd">What is OpenRGD? →</a>
          <a className="button ghost" href="/governance">Governance →</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Canonical repository ↗</a>
        </div>
      </section>

      <ReferenceProvenance
        title="About OpenRGD"
        description="About OpenRGD: the open Robot Graph Definition standard, its non-actuating scope, public governance, current maturity and project stewardship."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell content-split">
        <article>
          <p className="kicker">PROJECT</p>
          <h2>A standard and reference toolchain, not a robot operating system.</h2>
          <p>
            The canonical OpenRGD repository owns the modular specification, accepted and
            candidate contracts, deterministic compilation, evidence-only importers, static
            exporters and the governance records around those artifacts.
          </p>
        </article>
        <article>
          <p className="kicker">BOUNDARY</p>
          <h2>Physical execution remains separately governed.</h2>
          <p>
            OpenRGD does not own Body Adapters, hardware orchestration or the canonical
            physical embodied runtime. A valid profile can provide context to those systems
            without becoming actuation permission.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">OPERATING PRINCIPLES</p>
          <h2>Make evidence, maturity and responsibility explicit.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Evidence first', 'Imported facts should remain traceable to their source and unsupported values should remain unknown.'],
            ['Declared maturity', 'Candidate, accepted, deprecated and historical material must remain distinguishable.'],
            ['Human accountability', 'AI systems may assist with analysis and drafting; human maintainers remain accountable for normative acceptance and releases.'],
            ['Interoperability', 'OpenRGD is designed to complement established robot-description and runtime technologies rather than replace all of them.'],
            ['Non-actuation', 'Canonical tooling validates, compiles and exports static artifacts without silently taking control of physical hardware.'],
            ['Public provenance', 'Important changes are intended to leave reviewable evidence through pull requests, RFCs, decisions, hashes and releases.'],
          ].map(([title, copy]) => (
            <article className="content-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CURRENT PROJECT STATE</p>
          <h2>Different artifacts mature independently.</h2>
        </div>
        <div className="data-list">
          <div className="data-row"><span>Standard bundle</span><strong>0.2.0</strong><em>Draft</em></div>
          <div className="data-row"><span>Python toolchain</span><strong>0.1.1</strong><em>Working alpha</em></div>
          <div className="data-row"><span>Agent Contracts</span><strong>0.1.0</strong><em>Candidate</em></div>
        </div>
        <p className="content-note">
          Matching version numbers do not imply equivalent maturity. Standard, toolchain and
          contract releases are governed as separate axes.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">STEWARDSHIP</p>
          <h2>Normative acceptance remains a human responsibility.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card">
            <h3>Current steward</h3>
            <p>
              The canonical governance record names Pasquale Ranieri (@phate6872) as the
              current project steward.
            </p>
          </article>
          <article className="content-card">
            <h3>Contribution model</h3>
            <p>
              Changes are expected to enter through reviewable pull requests, with RFCs or
              decision records when meaning, compatibility, governance or physical boundaries change.
            </p>
          </article>
          <article className="content-card">
            <h3>Open source record</h3>
            <p>
              Specification, governance, release policy, contribution rules and implementation
              evidence are published in the canonical GitHub repository.
            </p>
          </article>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>WEBSITE BOUNDARY</span>
        <h2>This page explains the project. It does not define the standard.</h2>
        <p>
          If website copy and canonical repository material ever differ, the declared
          repository authority model and maturity state take precedence.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">PROJECT TRUST</p>
        <h2>Read the rules behind the project, not only the project description.</h2>
        <div className="content-actions">
          <a className="button primary" href="/governance">Governance →</a>
          <a className="button ghost" href="/security">Security →</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contributing ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
