import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { canonicalPermalink } from '@/lib/project/canonical-state'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'PUBLIC COMMUNITY ROUTER',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'GOVERNANCE.md + CONTRIBUTING.md + CODE_OF_CONDUCT.md',
  evidenceBoundary: 'Community routing and conduct summary; canonical repository policy remains authoritative.',
  pageUrl: 'https://openrgd.org/community',
  canonicalSource: canonicalPermalink('CODE_OF_CONDUCT.md'),
}

export const metadata: Metadata = referenceMetadata({
  title: 'OpenRGD Community',
  description: 'How to participate in OpenRGD: discussions, issues, RFCs, pull requests, conduct, security and project stewardship.',
  canonicalPath: '/community',
  record: citationRecord,
})

export default function CommunityPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">OPENRGD COMMUNITY</p>
        <h1>Challenge the model, contribute evidence and keep authority explicit.</h1>
        <p>
          OpenRGD welcomes questions, competing implementations, negative results and critical review.
          Different kinds of participation use different channels so discussion, bugs, normative proposals,
          security reports and community conduct do not collapse into one queue.
        </p>
      </section>

      <ReferenceProvenance
        title="OpenRGD Community"
        description="How to participate in OpenRGD: discussions, issues, RFCs, pull requests, conduct, security and project stewardship."
        record={citationRecord}
        sources={[
          { label: 'Governance', href: canonicalPermalink('GOVERNANCE.md') },
          { label: 'Contributing', href: canonicalPermalink('CONTRIBUTING.md') },
          { label: 'Code of Conduct', href: canonicalPermalink('CODE_OF_CONDUCT.md') },
          { label: 'Security Policy', href: canonicalPermalink('SECURITY.md') },
        ]}
      />

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">PARTICIPATE</p><h2>Choose the channel that matches the kind of change.</h2></div>
        <div className="content-card-grid">
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/discussions" target="_blank" rel="noreferrer"><h3>Questions & ideas</h3><p>Use GitHub Discussions for open technical questions, design exploration and community conversation.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues" target="_blank" rel="noreferrer"><h3>Bugs & concrete work</h3><p>Use Issues for reproducible bugs, bounded tasks and implementation problems that can be tracked to closure.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues/new?template=rfc.md" target="_blank" rel="noreferrer"><h3>Normative RFC</h3><p>Breaking semantics, accepted contracts, governance, ownership or safety boundaries require the RFC path.</p></a>
          <a className="content-card" href="/contributing"><h3>Contribute code or specification work</h3><p>Follow the contribution workflow, validation suite, maturity rules and pull-request governance.</p></a>
          <a className="content-card" href="/security"><h3>Security or physical-safety issue</h3><p>Do not disclose exploitable details in normal discussions. Use the security disclosure path.</p></a>
          <a className="content-card" href="/contact"><h3>Contact router</h3><p>Find the correct private or public channel for project, privacy, security or conduct contact.</p></a>
        </div>
      </section>

      <section className="shell content-split">
        <article>
          <p className="kicker">TECHNICAL CULTURE</p>
          <h2>Strong disagreement is allowed.</h2>
          <p>
            Evidence, architecture, benchmarks and OpenRGD itself can be criticized directly. The Code of Conduct
            protects people and the integrity of the technical record; it is not a mechanism for suppressing
            good-faith engineering disagreement.
          </p>
        </article>
        <article>
          <p className="kicker">CURRENT STEWARDSHIP</p>
          <h2>Human accountability remains explicit.</h2>
          <p>
            The canonical governance record names Pasquale Ranieri (@phate6872) as current project steward.
            AI systems may assist with drafting, review and analysis, but a human maintainer remains accountable
            for normative acceptance, merge and release.
          </p>
        </article>
      </section>

      <section className="shell warning-panel">
        <span>MATURITY IS PART OF THE COMMUNITY CONTRACT</span>
        <h2>Candidate, experimental and historical work must not be presented as accepted authority.</h2>
        <p>
          The project encourages experimentation, but contribution and discussion must preserve the declared maturity,
          provenance and evidence boundary of the artifact being discussed.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
