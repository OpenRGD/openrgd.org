import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

type Source = { label: string; href: string }
type Related = { href: string; title: string; copy: string }

export default function DeveloperDocPage({
  eyebrow,
  title,
  lead,
  status = 'TOOLCHAIN 0.1.1 · WORKING ALPHA',
  boundary,
  children,
  sources,
  related,
}: {
  eyebrow: string
  title: string
  lead: string
  status?: string
  boundary: string
  children: ReactNode
  sources: Source[]
  related: Related[]
}) {
  return (
    <main className="content-page developer-doc">
      <SiteHeader />

      <section className="content-hero shell developer-hero">
        <div className="developer-meta">
          <p className="kicker">{eyebrow}</p>
          <span>{status}</span>
        </div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </section>

      <section className="shell developer-boundary">
        <span>IMPLEMENTATION BOUNDARY</span>
        <p>{boundary}</p>
      </section>

      <article className="shell developer-article">
        {children}
      </article>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RELATED GUIDES</p>
          <h2>Continue through the verified toolchain.</h2>
        </div>
        <div className="content-card-grid">
          {related.map((item)=>(
            <a className="content-card" href={item.href} key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="shell source-panel">
        <p className="kicker">CANONICAL SOURCE</p>
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

      <SiteFooter />
    </main>
  )
}

export function DevSection({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="developer-section">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <div className="developer-copy">{children}</div>
    </section>
  )
}

export function CommandBlock({
  title,
  code,
}: {
  title: string
  code: string
}) {
  return (
    <div className="developer-command">
      <div className="developer-command-top">
        <span>{title}</span>
        <i>shell</i>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

export function DevGrid({
  items,
}: {
  items: Array<{ label: string; title: string; copy: string }>
}) {
  return (
    <div className="developer-grid">
      {items.map((item)=>(
        <article key={item.title}>
          <span>{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  )
}
