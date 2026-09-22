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
  const title=row?.title || 'Robot'
  const description=row?.summary || undefined
  const url='https://openrgd.org/robots/'+slug
  return {
    title,
    description,
    alternates:{canonical:'/robots/'+slug},
    openGraph:{
      type:'article',
      title,
      description,
      url,
      images:[{url:'/opengraph-image',width:1200,height:630,alt:title}],
    },
    twitter:{
      card:'summary_large_image',
      title,
      description,
      images:['/opengraph-image'],
    },
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

  const manufacturer=(data.manufacturer && typeof data.manufacturer==='object' && !Array.isArray(data.manufacturer))
    ? data.manufacturer as Record<string,unknown> : null
  const pageUrl='https://openrgd.org/robots/'+slug
  const sameAs=[
    typeof data.product_url==='string' ? data.product_url : null,
    typeof data.github_url==='string' ? data.github_url : null,
  ].filter((value): value is string=>Boolean(value))
  const robotProperties=[
    ['Model code',data.model_code],
    ['Category',data.category],
    ['Degrees of freedom',data.dof],
    ['Height',data.height_mm!==null && data.height_mm!==undefined ? String(data.height_mm)+' mm' : null],
    ['Weight',data.weight_kg!==null && data.weight_kg!==undefined ? String(data.weight_kg)+' kg' : null],
    ['Payload',data.payload_kg!==null && data.payload_kg!==undefined ? String(data.payload_kg)+' kg' : null],
    ['Battery runtime',data.battery_runtime_minutes!==null && data.battery_runtime_minutes!==undefined ? String(data.battery_runtime_minutes)+' min' : null],
  ].filter((entry)=>entry[1]!==null && entry[1]!==undefined)

  const robotJsonLd={
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'WebPage',
        '@id':pageUrl+'#webpage',
        url:pageUrl,
        name:row.title,
        description:row.summary,
        inLanguage:'en',
        dateModified:typeof data.updated_at==='string' ? data.updated_at : undefined,
        mainEntity:{'@id':pageUrl+'#robot'},
        publisher:{'@id':'https://openrgd.org/#organization'},
      },
      {
        '@type':'Product',
        '@id':pageUrl+'#robot',
        name:row.title,
        description:row.summary,
        url:pageUrl,
        model:typeof data.model_code==='string' ? data.model_code : undefined,
        category:typeof data.category==='string' ? data.category : undefined,
        sameAs:sameAs.length ? sameAs : undefined,
        manufacturer:manufacturer ? {
          '@type':'Organization',
          name:typeof manufacturer.name==='string' ? manufacturer.name : undefined,
          url:typeof manufacturer.website_url==='string' ? manufacturer.website_url : undefined,
        } : undefined,
        additionalProperty:robotProperties.map(([name,value])=>({
          '@type':'PropertyValue',
          name,
          value:String(value),
        })),
      },
    ],
  }

  return (
    <main className="content-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(robotJsonLd) }}
      />
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
