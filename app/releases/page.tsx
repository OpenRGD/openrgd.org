import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { canonicalState, canonicalPermalink, canonicalTreePermalink } from '@/lib/project/canonical-state'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'VERSION & RELEASE STATUS',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'VERSIONING.md + RELEASE_POLICY.md + CHANGELOG.md · snapshot afe1a831',
  evidenceBoundary: 'Current repository state is not automatically a formal release; release axes are independent.',
  pageUrl: 'https://openrgd.org/releases',
  canonicalSource: canonicalPermalink('VERSIONING.md'),
}

export const metadata: Metadata = referenceMetadata({
  title: 'OpenRGD Releases & Versions',
  description: 'OpenRGD version and release status: standard bundle, Python toolchain, Agent Contracts, historical tags, scoped future tags and release evidence.',
  canonicalPath: '/releases',
  record: citationRecord,
})

export default function ReleasesPage() {
  const tagModel = [
    'standard-vMAJOR.MINOR.PATCH',
    'toolchain-vMAJOR.MINOR.PATCH',
    'contracts-agent-vMAJOR.MINOR.PATCH',
  ].join('\n')

  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">RELEASES & VERSIONING</p>
        <h1>OpenRGD has multiple version axes. Merge is not release.</h1>
        <p>
          Standard semantics, the Python toolchain and cross-component contracts mature independently.
          Matching numbers are not compatibility evidence, and the current main branch must not be described as
          a formal release merely because it is validated and public.
        </p>
      </section>

      <ReferenceProvenance
        title="OpenRGD Releases & Versions"
        description="OpenRGD version and release status: standard bundle, Python toolchain, Agent Contracts, historical tags, scoped future tags and release evidence."
        record={citationRecord}
        sources={[
          { label: 'VERSIONING.md', href: canonicalPermalink('VERSIONING.md') },
          { label: 'RELEASE_POLICY.md', href: canonicalPermalink('RELEASE_POLICY.md') },
          { label: 'CHANGELOG.md', href: canonicalPermalink('CHANGELOG.md') },
          { label: 'Current source snapshot', href: canonicalTreePermalink() },
        ]}
      />

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CURRENT AXES</p><h2>Three public versions, three different meanings.</h2></div>
        <div className="data-list">
          <div className="data-row"><span>Standard bundle</span><strong>{canonicalState.standard.version}</strong><em>{canonicalState.standard.maturity}</em></div>
          <div className="data-row"><span>Python toolchain</span><strong>{canonicalState.toolchain.version}</strong><em>{canonicalState.toolchain.maturity}</em></div>
          <div className="data-row"><span>Agent Contracts</span><strong>{canonicalState.agentContracts.version}</strong><em>Candidate · non-normative</em></div>
          <div className="data-row"><span>Kernel profile</span><strong>{canonicalState.kernelProfile.version}</strong><em>Profile version, not whole-standard version</em></div>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>CURRENT MAIN ≠ FORMAL RELEASE</span>
        <h2>The current citation snapshot is a source snapshot, not a scoped release tag.</h2>
        <p>
          Snapshot <code>{canonicalState.snapshotSha}</code> is useful for reproducible citation and code inspection.
          A formal release requires a separate release pull request, evidence inventory and the release policy for the relevant axis.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">TAG MODEL</p><h2>Future releases are explicitly scoped by artifact axis.</h2></div>
        <div className="blog-code-block"><span>Frozen tag prefixes</span><pre><code>{tagModel}</code></pre></div>
        <p className="content-note">
          Historical unscoped tags <code>v0.1.0</code> and <code>v0.1.1</code> remain repository/toolchain lineage evidence.
          They do not establish the current standard-bundle version.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">NEXT PROPOSED TOOLCHAIN CANDIDATE</p><h2>Planned does not mean released.</h2></div>
        <div className="data-list">
          <div className="data-row"><span>Python version</span><strong>{canonicalState.toolchain.nextProposedCandidate}</strong><em>Proposed in policy only</em></div>
          <div className="data-row"><span>Git tag</span><strong>{canonicalState.toolchain.nextProposedTag}</strong><em>Not created by this page</em></div>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">RELEASE EVIDENCE</p><h2>A real release carries more than a version number.</h2></div>
        <div className="content-card-grid">
          {[
            ['Exact axis + version','The release must say whether it publishes the standard, toolchain or a contract package.'],
            ['Final source commit','The exact reviewed commit is part of the release evidence.'],
            ['Compatibility + migration','Semantic and consumer impact must be stated explicitly.'],
            ['Integrity + artifacts','Relevant source root, artifact inventory and SHA-256 values are recorded.'],
            ['Maturity labels','Bundled candidate/accepted status remains explicit.'],
            ['Signing boundary','A digest proves content identity; stable trust-sensitive claims require the signing/attestation lifecycle defined by policy.'],
          ].map(([title,copy])=><article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="shell content-cta">
        <p className="kicker">PERMANENT REFERENCE</p>
        <h2>Need a reproducible reference instead of the moving main branch?</h2>
        <div className="content-actions">
          <a className="button primary" href="/cite">Cite OpenRGD →</a>
          <a className="button ghost" href={canonicalPermalink('CHANGELOG.md')} target="_blank" rel="noreferrer">Changelog ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/releases" target="_blank" rel="noreferrer">GitHub releases ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
