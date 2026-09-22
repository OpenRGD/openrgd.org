import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { listCatalogEntries } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Organizations',
  description: 'Organizations represented in the OpenRGD shared robotics knowledge layer.',
  alternates: { canonical: '/organizations' },
}

export default async function OrganizationsPage() {
  const organizations = await listCatalogEntries('organization', 100).catch(() => [])
  const itemListJsonLd={
    '@context':'https://schema.org',
    '@type':'ItemList',
    name:'OpenRGD Organizations',
    itemListElement:organizations.map((org,index)=>({
      '@type':'ListItem',
      position:index+1,
      name:org.title,
      url:'https://openrgd.org/organizations/'+org.slug,
    })),
  }

  return (
    <main className="content-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="content-hero shell">
        <p className="kicker">ORGANIZATIONS</p>
        <h1>The companies and teams behind physical systems.</h1>
        <p>Organization pages connect canonical identity with robots, technical context and the broader embodied systems ecosystem.</p>
      </section>
      <section className="shell entity-grid">
        {organizations.map((org)=>(
          <a className="entity-card" href={'/organizations/'+org.slug} key={org.entry_id}>
            <span>ORGANIZATION</span>
            <h2>{org.title}</h2>
            <p>{org.summary}</p>
            <strong>{org.slug} →</strong>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  )
}
