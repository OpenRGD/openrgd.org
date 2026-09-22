import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import RobotEvidencePanel from '@/components/robot-evidence-panel'
import RobotDeveloperAssets from '@/components/robot-developer-assets'
import { getCatalogEntry, getCatalogSiteMetadata, listRobotAssertions } from '@/lib/cms/catalog'

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

  const [assertions,sitePublication]=await Promise.all([
    listRobotAssertions(row.entity_id).catch(()=>[]),
    getCatalogSiteMetadata('robot_model',slug).catch(()=>null),
  ])
  const data=row.entity_data || {}
  const specs=(data.specs_jsonb && typeof data.specs_jsonb==='object' && !Array.isArray(data.specs_jsonb))
    ? data.specs_jsonb as Record<string,unknown> : {}
  const metadata=(data.metadata_jsonb && typeof data.metadata_jsonb==='object' && !Array.isArray(data.metadata_jsonb))
    ? data.metadata_jsonb as Record<string,unknown> : {}

  const core=['model_code','category','status','height_mm','weight_kg','payload_kg','dof','battery_runtime_minutes','price_from']
    .filter((key)=>data[key]!==null && data[key]!==undefined)

  return (
    <main className="content-page">
      <SiteHeader />
      <section className="entity-hero shell">
        <div className="entity-kicker-row">
          <p className="kicker">ROBOT</p>
          {data.is_verified === true ? <span className="entity-evidence-badge">SOURCE-VERIFIED PROFILE</span> : null}
        </div>
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

      <RobotEvidencePanel
        assertions={assertions}
        metadata={metadata}
        modelUpdatedAt={typeof data.updated_at === 'string' ? data.updated_at : null}
      />

      {sitePublication ? (
        <RobotDeveloperAssets metadata={sitePublication.metadata_jsonb} />
      ) : null}

      <section className="shell warning-panel compact-warning">
        <span>OPENRGD CONTEXT</span>
        <p>
          Canonical robot facts, assertion-level evidence and OpenRGD interpretation are separate layers.
          A reviewed manufacturer claim is not automatically an independent test, and this page does not imply physical validation or RGD compatibility.
        </p>
      </section>
      <SiteFooter />
    </main>
  )
}
