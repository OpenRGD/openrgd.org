import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getCatalogEntry } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

function format(value: unknown): string {
  if (value === null || value === undefined) return '—'
  if (Array.isArray(value)) return value.map(format).join(' · ')
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params
  const row=await getCatalogEntry('robot_model',slug).catch(()=>null)
  return {
    title: row?.title || 'Robot',
    description: row?.summary || undefined,
    alternates:{canonical:'/robots/'+slug},
  }
}

export default async function RobotDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const row=await getCatalogEntry('robot_model',slug).catch(()=>null)
  if(!row) notFound()

  const data=row.entity_data || {}
  const specs=(data.specs_jsonb && typeof data.specs_jsonb==='object' && !Array.isArray(data.specs_jsonb))
    ? data.specs_jsonb as Record<string,unknown> : {}

  const core=['model_code','category','status','height_mm','weight_kg','payload_kg','dof','battery_runtime_minutes','price_from']
    .filter((key)=>data[key]!==null && data[key]!==undefined)

  return (
    <main className="content-page">
      <SiteHeader />
      <section className="entity-hero shell">
        <p className="kicker">ROBOT</p>
        <h1>{row.title}</h1>
        <p>{row.summary}</p>
      </section>

      <section className="shell entity-detail-grid">
        <div>
          <p className="kicker">CANONICAL FACTS</p>
          <dl className="fact-list">
            {core.map((key)=>(
              <div key={key}><dt>{key.replaceAll('_',' ')}</dt><dd>{format(data[key])}</dd></div>
            ))}
          </dl>
        </div>
        <div>
          <p className="kicker">EXTENDED SPECS</p>
          <dl className="fact-list">
            {Object.entries(specs).map(([key,value])=>(
              <div key={key}><dt>{key.replaceAll('_',' ')}</dt><dd>{format(value)}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="shell warning-panel compact-warning">
        <span>OPENRGD CONTEXT</span>
        <p>This page reuses canonical robot facts. OpenRGD-specific interpretation, interoperability notes and RGD projections will evolve independently from the shared master record.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
