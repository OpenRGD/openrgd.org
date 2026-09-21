import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getCatalogEntry } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params
  const row=await getCatalogEntry('organization',slug).catch(()=>null)
  return {
    title: row?.title || 'Organization',
    description: row?.summary || undefined,
    alternates:{canonical:'/organizations/'+slug},
  }
}

export default async function OrganizationDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const row=await getCatalogEntry('organization',slug).catch(()=>null)
  if(!row) notFound()

  const data=row.entity_data || {}
  const facts=['organization_type','country_code','region','city','founded_year','status']

  return (
    <main className="content-page">
      <SiteHeader />
      <section className="entity-hero shell">
        <p className="kicker">ORGANIZATION</p>
        <h1>{row.title}</h1>
        <p>{row.summary}</p>
        {typeof data.website_url==='string' ? (
          <div className="content-actions"><a className="button ghost" href={data.website_url} target="_blank" rel="noreferrer">Official website ↗</a></div>
        ) : null}
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">CANONICAL PROFILE</p><h2>Shared identity, OpenRGD context.</h2></div>
        <dl className="fact-list two-col">
          {facts.filter((key)=>data[key]!==null && data[key]!==undefined).map((key)=>(
            <div key={key}><dt>{key.replaceAll('_',' ')}</dt><dd>{String(data[key])}</dd></div>
          ))}
        </dl>
      </section>
      <SiteFooter />
    </main>
  )
}
