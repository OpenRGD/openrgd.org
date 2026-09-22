import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { getCatalogEntry } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params
  const row=await getCatalogEntry('organization',slug).catch(()=>null)
  const title=row?.title || 'Organization'
  const description=row?.summary || undefined
  const url='https://openrgd.org/organizations/'+slug
  return {
    title,
    description,
    alternates:{canonical:'/organizations/'+slug},
    openGraph:{
      type:'profile',
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

export default async function OrganizationDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const row=await getCatalogEntry('organization',slug).catch(()=>null)
  if(!row) notFound()

  const data=row.entity_data || {}
  const facts=['organization_type','country_code','region','city','founded_year','status']
  const pageUrl='https://openrgd.org/organizations/'+slug
  const sameAs=[
    typeof data.website_url==='string' ? data.website_url : null,
    typeof data.github_url==='string' ? data.github_url : null,
  ].filter((value): value is string=>Boolean(value))

  const organizationJsonLd={
    '@context':'https://schema.org',
    '@type':'Organization',
    '@id':pageUrl+'#organization',
    name:row.title,
    description:row.summary,
    url:pageUrl,
    sameAs:sameAs.length ? sameAs : undefined,
    foundingDate:data.founded_year!==null && data.founded_year!==undefined ? String(data.founded_year) : undefined,
    address:(data.city || data.region || data.country_code) ? {
      '@type':'PostalAddress',
      addressLocality:typeof data.city==='string' ? data.city : undefined,
      addressRegion:typeof data.region==='string' ? data.region : undefined,
      addressCountry:typeof data.country_code==='string' ? data.country_code : undefined,
    } : undefined,
  }

  return (
    <main className="content-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
