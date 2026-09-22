import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const citationRecord: CitationRecordData = {
  maturity: 'STANDARD HUB · DRAFT',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'OpenRGD standard bundle 0.2.0',
  evidenceBoundary: 'This website is explanatory; spec/ and spec/manifest.jsonc in the canonical repository remain the normative source.',
  pageUrl: 'https://openrgd.org/spec',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/tree/main/spec',
}

const provenanceSources = [
  { label: 'OpenRGD spec/', href: 'https://github.com/OpenRGD/openrgd/tree/main/spec' },
  { label: 'OpenRGD manifest', href: 'https://github.com/OpenRGD/openrgd/blob/main/spec/manifest.jsonc' },
  { label: 'OpenRGD VERSIONING', href: 'https://github.com/OpenRGD/openrgd/blob/main/VERSIONING.md' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'Specification',
  description: 'The OpenRGD specification source, current version axes, maturity and integrity model.',
  canonicalPath: '/spec',
  record: citationRecord,
})

export default function SpecPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">SPECIFICATION</p>
        <h1>The normative source lives in <code>spec/</code>.</h1>
        <p>
          The website explains OpenRGD. The repository defines it. Normative modular JSONC source,
          manifest-declared maturity and canonical hashing remain the authority.
        </p>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/tree/main/spec" target="_blank" rel="noreferrer">Browse spec/ ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/VERSIONING.md" target="_blank" rel="noreferrer">Versioning ↗</a>
        </div>
      </section>

      <ReferenceProvenance
        title="Specification"
        description="The OpenRGD specification source, current version axes, maturity and integrity model."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CURRENT AXES</p><h2>Three version lines, intentionally independent.</h2></div>
        <div className="spec-grid">
          <article><span>STANDARD</span><strong>0.2.0</strong><p>Reference OpenRGD bundle. Draft; domain maturity is declared separately.</p></article>
          <article><span>TOOLCHAIN</span><strong>0.1.1</strong><p>Installable Python package and CLI lineage.</p></article>
          <article><span>AGENT CONTRACTS</span><strong>0.1.0</strong><p>Candidate package. Non-normative until promoted through governance.</p></article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">INTEGRITY</p><h2>Content identity is explicit, not implied.</h2></div>
        <div className="terminal static-terminal">
          <div className="terminal-top"><span>canonical integrity profile</span><span>OPENRGD_SOURCE_TREE_SHA256_V1</span></div>
          <pre><code>{'spec/ modular source\n        │\n        ├── standard/ strict leaf mirror\n        └── deterministic machine bundle\n\nsource-tree hash → content identity\nnot authorship · not approval · not actuation permission'}</code></pre>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">RELEASE RULE</p><h2>Merge is not release.</h2></div>
        <p className="content-prose">
          Standard, toolchain and contracts use scoped release axes. A source-tree hash proves content identity under a declared profile,
          not authorship or review. Candidate contracts remain candidate until an explicit promotion decision changes their status.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">START BUILDING</p>
        <h2>Read the spec, then use the toolchain against a real robot description.</h2>
        <div className="content-actions"><a className="button primary" href="/docs">Getting started →</a></div>
      </section>
      <SiteFooter />
    </main>
  )
}
