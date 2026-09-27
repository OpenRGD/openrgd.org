import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { canonicalState, canonicalPermalink, canonicalTreePermalink } from '@/lib/project/canonical-state'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'CITATION GUIDE · SNAPSHOT-BASED',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'Canonical snapshot afe1a831 + VERSIONING.md',
  evidenceBoundary: 'Citation guidance preserves independent version axes; website explainers are non-normative.',
  pageUrl: 'https://openrgd.org/cite',
  canonicalSource: canonicalTreePermalink(),
}

const short = canonicalState.snapshotSha.slice(0, 12)
const neutralCitation =
  'OpenRGD Contributors. OpenRGD — Robot Graph Definition. Standard bundle ' +
  canonicalState.standard.version + ' (' + canonicalState.standard.maturity + '); source snapshot ' +
  canonicalState.snapshotSha + ', ' + canonicalState.snapshotDate + '. ' + canonicalTreePermalink()

const bibtex = [
  '@misc{openrgd_' + canonicalState.standard.version.replaceAll('.', '_') + '_snapshot,',
  '  title        = {OpenRGD — Robot Graph Definition},',
  '  author       = {{OpenRGD Contributors}},',
  '  year         = {2026},',
  '  note         = {Standard bundle ' + canonicalState.standard.version + ' (' + canonicalState.standard.maturity + '); source snapshot ' + canonicalState.snapshotSha + '},',
  '  howpublished = {GitHub repository},',
  '  url          = {' + canonicalTreePermalink() + '}',
  '}',
].join('\n')

export const metadata: Metadata = referenceMetadata({
  title: 'Cite OpenRGD',
  description: 'How to cite OpenRGD reproducibly using exact source commits, independent version axes, source-tree integrity and permanent GitHub permalinks.',
  canonicalPath: '/cite',
  record: citationRecord,
})

export default function CitePage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">CITE OPENRGD</p>
        <h1>Cite the artifact and the exact source state you actually used.</h1>
        <p>
          OpenRGD does not have one global version number. Standard semantics, toolchain behavior and candidate contracts
          are independently versioned, so reproducible citation should name both the artifact axis and an immutable source reference.
        </p>
      </section>

      <ReferenceProvenance
        title="Cite OpenRGD"
        description="How to cite OpenRGD reproducibly using exact source commits, independent version axes, source-tree integrity and permanent GitHub permalinks."
        record={citationRecord}
        sources={[
          { label: 'Current immutable snapshot', href: canonicalTreePermalink() },
          { label: 'VERSIONING.md', href: canonicalPermalink('VERSIONING.md') },
          { label: 'Standard manifest', href: canonicalPermalink('spec/manifest.jsonc') },
          { label: 'Release policy', href: canonicalPermalink('RELEASE_POLICY.md') },
        ]}
      />

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CURRENT CITATION SNAPSHOT</p><h2>{short} · 27 Sep 2026</h2></div>
        <div className="data-list">
          <div className="data-row"><span>Commit</span><strong>{canonicalState.snapshotSha}</strong><em>Immutable Git source snapshot</em></div>
          <div className="data-row"><span>Standard bundle</span><strong>{canonicalState.standard.version}</strong><em>{canonicalState.standard.maturity}</em></div>
          <div className="data-row"><span>Source-tree integrity</span><strong>{canonicalState.standard.integrityProfile}</strong><em>{canonicalState.standard.integrityHash}</em></div>
          <div className="data-row"><span>Toolchain</span><strong>{canonicalState.toolchain.version}</strong><em>{canonicalState.toolchain.maturity}</em></div>
          <div className="data-row"><span>Agent Contracts</span><strong>{canonicalState.agentContracts.version}</strong><em>candidate · non-normative</em></div>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">SUGGESTED NEUTRAL PROJECT CITATION</p><h2>Use a snapshot when no formal scoped release covers your claim.</h2></div>
        <div className="blog-code-block"><span>Plain text</span><pre><code>{neutralCitation}</code></pre></div>
        <div className="blog-code-block"><span>BibTeX</span><pre><code>{bibtex}</code></pre></div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CITE BY AXIS</p><h2>The source you cite should match the claim you make.</h2></div>
        <div className="content-card-grid">
          <a className="content-card" href={canonicalPermalink('spec/manifest.jsonc')} target="_blank" rel="noreferrer"><h3>Standard semantics</h3><p>Cite the standard version plus exact manifest/spec source permalink or a future standard-v* tag.</p></a>
          <a className="content-card" href={canonicalPermalink('pyproject.toml')} target="_blank" rel="noreferrer"><h3>Toolchain behavior</h3><p>Cite the toolchain version plus exact code commit or future toolchain-v* release.</p></a>
          <a className="content-card" href={canonicalPermalink('contracts/agent/v0.1.0/STATUS.json')} target="_blank" rel="noreferrer"><h3>Agent Contracts</h3><p>Cite the package version and preserve its candidate / non-normative status.</p></a>
          <a className="content-card" href="/blog"><h3>Website explainers</h3><p>Cite the page URL and its Last Verified date when discussing the explainer; use its canonical sources for normative claims.</p></a>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>INTEGRITY ≠ AUTHORSHIP OR APPROVAL</span>
        <h2>The source-tree hash proves content identity under its declared profile.</h2>
        <p>
          It does not prove authorship, review, compatibility with a robot, physical safety or normative promotion.
          Those claims require their own governance and evidence.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">VERSION STATUS</p>
        <h2>Prefer a formal scoped release once one exists for the artifact you are citing.</h2>
        <div className="content-actions">
          <a className="button primary" href="/releases">Releases & versions →</a>
          <a className="button ghost" href={canonicalTreePermalink()} target="_blank" rel="noreferrer">Open snapshot ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
