import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

type Source = { label: string; href: string }
type MatrixRow = { dimension: string; left: string; rgd: string }

export function FormatVsRgdPage({
  formatName,
  formatHref,
  eyebrow,
  title,
  lead,
  leftLabel,
  matrix,
  overlap,
  rgdAdds,
  rgdDoesNotReplace,
  useTogether,
  flow,
  sources,
  children,
}: {
  formatName: string
  formatHref: string
  eyebrow: string
  title: string
  lead: string
  leftLabel: string
  matrix: MatrixRow[]
  overlap: string[]
  rgdAdds: string[]
  rgdDoesNotReplace: string[]
  useTogether: string[]
  flow: string[]
  sources: Source[]
  children?: ReactNode
}) {
  return (
    <main className="content-page comparison-page">
      <SiteHeader />

      <section className="content-hero shell comparison-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
        <div className="comparison-pair">
          <a href={formatHref}>{formatName}</a>
          <span>+</span>
          <a href="/openrgd">RGD</a>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RESPONSIBILITY MATRIX</p>
          <h2>Different centers of gravity.</h2>
        </div>
        <div className="vs-matrix">
          <div className="vs-matrix-head">
            <span>DIMENSION</span>
            <span>{leftLabel}</span>
            <span>RGD</span>
          </div>
          {matrix.map((row) => (
            <div className="vs-matrix-row" key={row.dimension}>
              <strong>{row.dimension}</strong>
              <p>{row.left}</p>
              <p>{row.rgd}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="comparison-columns">
          <article>
            <p className="kicker">OVERLAP</p>
            <h2>Where both may describe the same robot facts.</h2>
            <ul>{overlap.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="kicker">WHAT RGD ADDS</p>
            <h2>Context beyond the source description.</h2>
            <ul>{rgdAdds.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="comparison-columns">
          <article>
            <p className="kicker">RGD DOES NOT REPLACE</p>
            <h2>Keep ownership explicit.</h2>
            <ul>{rgdDoesNotReplace.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="kicker">USE BOTH WHEN</p>
            <h2>Complementary layers are stronger than forced convergence.</h2>
            <ul>{useTogether.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">OPENRGD FLOW</p>
          <h2>Source evidence can become semantic context without erasing provenance.</h2>
        </div>
        <div className="comparison-flow">
          {flow.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              {index < flow.length - 1 ? <i>→</i> : null}
            </div>
          ))}
        </div>
      </section>

      {children}

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

      <section className="shell comparison-nav">
        <a href="/robot-description-formats">← All description formats</a>
        <a href="/openrgd">RGD reference →</a>
      </section>

      <SiteFooter />
    </main>
  )
}
