import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import CitationRecord, { type CitationRecordData } from '@/components/citation-record'

type Source = {
  label: string
  href: string
}

type Related = {
  href: string
  title: string
  copy: string
}

export function ConceptPage({
  eyebrow,
  title,
  lead,
  children,
  sources,
  related,
  jsonLd,
  citationRecord,
}: {
  eyebrow: string
  title: string
  lead: string
  children: ReactNode
  sources: Source[]
  related: Related[]
  jsonLd?: Record<string, unknown>
  citationRecord?: CitationRecordData
}) {
  return (
    <main className="content-page concept-page">
      <SiteHeader />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      <section className="content-hero shell concept-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </section>

      {citationRecord ? <CitationRecord record={citationRecord} /> : null}

      <article className="shell concept-article">
        {children}
      </article>

      <section className="shell concept-related">
        <div className="content-section-head">
          <p className="kicker">CONNECTED CONCEPTS</p>
          <h2>Follow the system, not just the term.</h2>
        </div>
        <div className="content-card-grid">
          {related.map((item) => (
            <a className="content-card" href={item.href} key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="shell source-panel">
        <p className="kicker">PRIMARY SOURCES</p>
        <div className="source-list">
          {sources.map((source, index) => (
            <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{source.label}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export function ConceptSection({
  kicker,
  title,
  children,
}: {
  kicker?: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="concept-section">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      <div className="concept-copy">{children}</div>
    </section>
  )
}

export function ConceptGrid({
  items,
}: {
  items: Array<{ label: string; title: string; copy: string }>
}) {
  return (
    <div className="concept-grid">
      {items.map((item) => (
        <article key={item.title}>
          <span>{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  )
}

export function ConceptFlow({
  items,
}: {
  items: string[]
}) {
  return (
    <div className="concept-flow">
      {items.map((item, index) => (
        <div key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
          {index < items.length - 1 ? <i>→</i> : null}
        </div>
      ))}
    </div>
  )
}
