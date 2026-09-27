import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'SECURITY POLICY SUMMARY',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'SECURITY.md · current main lineage',
  evidenceBoundary: 'Public web summary of the repository security policy; SECURITY.md remains authoritative and OpenRGD does not certify physical robot safety.',
  pageUrl: 'https://openrgd.org/security',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md',
}

const provenanceSources = [
  { label: 'OpenRGD SECURITY', href: 'https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md' },
  { label: 'OpenRGD GOVERNANCE', href: 'https://github.com/OpenRGD/openrgd/blob/main/GOVERNANCE.md' },
  { label: 'OpenRGD CONTRIBUTING', href: 'https://github.com/OpenRGD/openrgd/blob/main/CONTRIBUTING.md' },
  { label: 'OpenRGD Runtime Boundary', href: 'https://openrgd.org/architecture/runtime-boundary' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'Security',
  description: 'OpenRGD security policy: vulnerability reporting, physical-safety scope, supply-chain integrity and coordinated disclosure guidance.',
  canonicalPath: '/security',
  record: citationRecord,
})

export default function SecurityPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">OPENRGD SECURITY</p>
        <h1>Report vulnerabilities without turning disclosure into additional risk.</h1>
        <p>
          The canonical repository contains a draft standard and a non-actuating alpha
          toolchain. Security reporting therefore covers source, tooling, integrity and
          supply-chain issues while keeping physical-runtime responsibility explicit.
        </p>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md" target="_blank" rel="noreferrer">Read SECURITY.md ↗</a>
          <a className="button ghost" href="/architecture/runtime-boundary">Runtime boundary →</a>
          <a className="button ghost" href="/governance">Governance →</a>
        </div>
      </section>

      <ReferenceProvenance
        title="OpenRGD Security"
        description="OpenRGD security policy: vulnerability reporting, physical-safety scope, supply-chain integrity and coordinated disclosure guidance."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell warning-panel">
        <span>DO NOT DISCLOSE EXPLOITABLE DETAILS PUBLICLY</span>
        <h2>Use GitHub private vulnerability reporting when it is enabled.</h2>
        <p>
          If private reporting is unavailable, the canonical policy asks for a minimal public
          issue containing only <strong>[SECURITY CONTACT REQUEST]</strong> and a request for a
          private disclosure channel. Do not include proof-of-concept code, secrets, device
          addresses or exploitation details in that public issue.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">PRIVATE REPORT</p>
          <h2>Provide enough evidence to reproduce and bound the issue.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Affected source', 'Identify the affected commit, tag, file or artifact.'],
            ['Impact', 'Describe impact, preconditions and the smallest useful reproduction evidence.'],
            ['Physical scope', 'State whether hardware, middleware or an external Body Adapter is involved.'],
            ['Mitigation', 'Include any known safe mitigation or containment path.'],
            ['Disclosure risk', 'Flag whether public details could create immediate physical or operational risk.'],
            ['Data minimization', 'Do not include secrets, personal data or unnecessary private reasoning transcripts.'],
          ].map(([title, copy]) => (
            <article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="shell content-split">
        <article>
          <p className="kicker">PHYSICAL SAFETY</p>
          <h2>Actuation vulnerabilities belong to the responsible runtime or adapter too.</h2>
          <p>
            When a report involves physical actuation, the responsible embodied-runtime or
            Body Adapter implementation must also receive the report once identified. The
            canonical OpenRGD repository cannot authorize hardware execution or certify a robot as safe.
          </p>
        </article>
        <article>
          <p className="kicker">SAFE REPRODUCTION</p>
          <h2>Prefer simulation, fixtures and fail-closed tests.</h2>
          <p>
            Suspected actuation vulnerabilities should not be reproduced on live hardware
            unless the system is isolated, independently supervised and physical testing is
            necessary to establish the issue.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">SUPPLY CHAIN</p>
          <h2>Integrity metadata is security-relevant, but a digest is not authorship.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Source-tree hashes', 'Unexpected changes to canonical integrity commitments should be reported.'],
            ['Release tags', 'Unexpected movement, replacement or inconsistent release identity is security-relevant.'],
            ['CI workflows', 'Changes that alter validation, release or provenance behavior deserve scrutiny.'],
            ['Generated artifacts', 'Unexpected checksums or generated outputs may indicate a broken or compromised pipeline.'],
            ['Dependencies', 'Dependency-resolution changes can alter the trusted execution path.'],
            ['Signing metadata', 'Signing and provenance claims must remain distinguishable from plain content hashes.'],
          ].map(([title, copy]) => (
            <article className="content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">PUBLIC DISCLOSURE</p>
          <h2>Publish the record when disclosure no longer increases risk.</h2>
        </div>
        <p className="content-note">
          The canonical policy calls for a public advisory or issue after a safe fix or
          mitigation is available, or when coordinated disclosure is no longer possible.
          Public records should distinguish confirmed facts, affected versions and unresolved risk.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">SOURCE OF TRUTH</p>
        <h2>Security handling is defined in the canonical repository.</h2>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md" target="_blank" rel="noreferrer">SECURITY.md ↗</a>
          <a className="button ghost" href="/governance">Governance →</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Repository ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
