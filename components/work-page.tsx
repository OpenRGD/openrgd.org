import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

type Tone = 'adopted' | 'implemented' | 'candidate' | 'experimental' | 'research'

export function WorkStatus({ label, tone }: { label: string; tone: Tone }) {
  return <span className={'work-status ' + tone}>{label}</span>
}

export default function WorkPage({
  eyebrow,
  title,
  lead,
  status,
  tone,
  boundary,
  children,
  sources = [],
}: {
  eyebrow: string
  title: string
  lead: string
  status: string
  tone: Tone
  boundary: string
  children: ReactNode
  sources?: Array<{ label: string; href: string }>
}) {
  return (
    <main className="content-page work-page">
      <SiteHeader />

      <section className="content-hero shell work-hero">
        <div className="work-hero-meta">
          <p className="kicker">{eyebrow}</p>
          <WorkStatus label={status} tone={tone} />
        </div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </section>

      <section className="shell work-boundary">
        <span>STATUS BOUNDARY</span>
        <p>{boundary}</p>
      </section>

      <article className="shell work-article">
        {children}
      </article>

      {sources.length ? (
        <section className="shell source-panel">
          <p className="kicker">SOURCE MATERIAL</p>
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
      ) : null}

      <SiteFooter />
    </main>
  )
}

export function WorkSection({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="work-section">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <div className="work-copy">{children}</div>
    </section>
  )
}

export function WorkGrid({
  items,
}: {
  items: Array<{ label: string; title: string; copy: string }>
}) {
  return (
    <div className="work-grid">
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

export function WorkFlow({ items }: { items: string[] }) {
  return (
    <div className="work-flow">
      {items.map((item,index)=>(
        <div key={item}>
          <span>{String(index+1).padStart(2,'0')}</span>
          <strong>{item}</strong>
          {index < items.length - 1 ? <i>→</i> : null}
        </div>
      ))}
    </div>
  )
}
