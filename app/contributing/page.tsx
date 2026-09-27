import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { canonicalPermalink } from '@/lib/project/canonical-state'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'CONTRIBUTION WORKFLOW SUMMARY',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'CONTRIBUTING.md + GOVERNANCE.md · snapshot afe1a831',
  evidenceBoundary: 'Web summary; canonical contribution and governance files remain authoritative.',
  pageUrl: 'https://openrgd.org/contributing',
  canonicalSource: canonicalPermalink('CONTRIBUTING.md'),
}

export const metadata: Metadata = referenceMetadata({
  title: 'Contributing to OpenRGD',
  description: 'How to contribute to OpenRGD: change classes, RFCs, development workflow, validation, pull requests, safety boundaries and community conduct.',
  canonicalPath: '/contributing',
  record: citationRecord,
})

export default function ContributingPage() {
  const checks = [
    'python -m pip install -e .',
    'python tools/validate_repository.py',
    'python tools/reconcile_artifacts.py',
    'python tools/validate_canonical_hash.py',
    'python tools/validate_runtime_boundary.py',
    'python tools/validate_governance.py',
    'python contracts/agent/v0.1.0/validate.py',
    'python -m pytest -q',
  ].join('\n')

  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">CONTRIBUTING</p>
        <h1>Contribute without collapsing source evidence, policy and physical execution.</h1>
        <p>
          OpenRGD accepts specification work, candidate contracts, tooling, tests and experiments.
          The required process depends on what kind of authority the change would modify.
        </p>
      </section>

      <ReferenceProvenance
        title="Contributing to OpenRGD"
        description="How to contribute to OpenRGD: change classes, RFCs, development workflow, validation, pull requests, safety boundaries and community conduct."
        record={citationRecord}
        sources={[
          { label: 'CONTRIBUTING.md', href: canonicalPermalink('CONTRIBUTING.md') },
          { label: 'GOVERNANCE.md', href: canonicalPermalink('GOVERNANCE.md') },
          { label: 'CODE_OF_CONDUCT.md', href: canonicalPermalink('CODE_OF_CONDUCT.md') },
          { label: 'RELEASE_POLICY.md', href: canonicalPermalink('RELEASE_POLICY.md') },
        ]}
      />

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CHANGE CLASS</p><h2>Choose the authority class before writing the patch.</h2></div>
        <div className="content-card-grid">
          <article className="content-card"><h3>Normative specification / governance</h3><p>Accepted semantics, governance, conformance, canonical hashing and ownership changes require evidence and the RFC/decision process where applicable.</p></article>
          <article className="content-card"><h3>Candidate / experiment</h3><p>Candidate material must declare maturity, provenance and open questions and cannot silently change accepted behavior.</p></article>
          <article className="content-card"><h3>Toolchain</h3><p>CLI, validator, importer and static-export changes must not privately redefine the standard and should fail closed where evidence is missing.</p></article>
          <article className="content-card"><h3>Fixtures / examples</h3><p>Fixtures must be reviewable, redistribution-safe, hermetic or explicit about dependencies, free of secrets and exercised by automated tests.</p></article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">WORKFLOW</p><h2>Small coherent change → validation → pull request → explicit merge readiness.</h2></div>
        <div className="authority-stack">
          {[
            ['01','Branch from protected main','Use a fork or branch from the current protected default branch.'],
            ['02','Make the smallest coherent change','Keep authority and migration impact reviewable.'],
            ['03','Add tests and documentation','Update changelog and decision evidence when the change requires it.'],
            ['04','Validate locally','Run repository, artifact, hash, runtime-boundary, governance, contract and pytest validation.'],
            ['05','Open a pull request','Complete the PR template and resolve review conversations.'],
            ['06','Record readiness','Required CI must be green on the final head before merge.'],
          ].map(([n,title,copy])=><div className="authority-row" key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">LOCAL VALIDATION</p><h2>Run the same boundaries the repository expects.</h2></div>
        <div className="blog-code-block">
          <span>Recommended checks</span>
          <pre><code>{checks}</code></pre>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>PHYSICAL BOUNDARY</span>
        <h2>This repository does not implement physical execution.</h2>
        <p>
          Runtime or Body Adapter work belongs in the responsible implementation repository. If it exposes a missing OpenRGD contract,
          return that gap to the canonical repository as an explicit Contract Delta or RFC rather than connecting cognition directly to motors.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">START</p>
        <h2>Read the canonical guide, then propose the smallest reviewable change.</h2>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Canonical repository ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/issues/new?template=rfc.md" target="_blank" rel="noreferrer">Open RFC ↗</a>
          <a className="button ghost" href="/community">Community →</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
