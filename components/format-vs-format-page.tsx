import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import CitationRecord from '@/components/citation-record'
import { buildReferenceJsonLd, type CitationRecordData } from '@/lib/seo/provenance'

type Row = {
  dimension: string
  left: string
  right: string
}

type Source = { label: string; href: string }

export default function FormatVsFormatPage({
  eyebrow,
  title,
  lead,
  leftName,
  leftHref,
  rightName,
  rightHref,
  rows,
  chooseLeft,
  chooseRight,
  useBoth,
  sources,
  children,
  citationRecord,
}: {
  eyebrow: string
  title: string
  lead: string
  leftName: string
  leftHref: string
  rightName: string
  rightHref: string
  rows: Row[]
  chooseLeft: string[]
  chooseRight: string[]
  useBoth: string[]
  sources: Source[]
  children?: ReactNode
  citationRecord: CitationRecordData
}) {
  const structuredData=buildReferenceJsonLd({
    title,
    description: lead,
    record: citationRecord,
    sources,
  })

  return (
    <main className="content-page comparison-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="content-hero shell comparison-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
        <div className="comparison-pair">
          <a href={leftHref}>{leftName}</a>
          <span>vs</span>
          <a href={rightHref}>{rightName}</a>
        </div>
      </section>

      <CitationRecord record={citationRecord} />

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">DECISION MATRIX</p>
          <h2>Compare the responsibilities before comparing syntax.</h2>
        </div>
        <div className="vs-matrix">
          <div className="vs-matrix-head">
            <span>DIMENSION</span>
            <span>{leftName}</span>
            <span>{rightName}</span>
          </div>
          {rows.map((row)=>(
            <div className="vs-matrix-row" key={row.dimension}>
              <strong>{row.dimension}</strong>
              <p>{row.left}</p>
              <p>{row.right}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="comparison-columns">
          <article>
            <p className="kicker">CHOOSE {leftName}</p>
            <h2>When its center of gravity matches your workflow.</h2>
            <ul>{chooseLeft.map((item)=><li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="kicker">CHOOSE {rightName}</p>
            <h2>When the other layer owns the problem better.</h2>
            <ul>{chooseRight.map((item)=><li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">USE BOTH</p>
          <h2>Conversion is often a pipeline decision, not a winner/loser decision.</h2>
        </div>
        <div className="use-both-list">
          {useBoth.map((item,index)=>(
            <div key={item}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {children}

      <section className="shell source-panel">
        <p className="kicker">PRIMARY SOURCES</p>
        <div className="source-list">
          {sources.map((source,index)=>(
            <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <strong>{source.label}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="shell comparison-nav">
        <a href="/robot-description-formats">← All description formats</a>
        <a href="/interoperability">Interoperability →</a>
      </section>

      <SiteFooter />
    </main>
  )
}
