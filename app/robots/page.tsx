import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { listCatalogEntries } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Robots',
  description: 'Robot platforms in the OpenRGD shared knowledge layer.',
  alternates: { canonical: '/robots' },
  openGraph: {
    type: 'website',
    title: 'Robots | OpenRGD',
    description: 'Robot platforms in the OpenRGD shared knowledge layer.',
    url: 'https://openrgd.org/robots',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'OpenRGD Robot Knowledge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robots | OpenRGD',
    description: 'Robot platforms in the OpenRGD shared knowledge layer.',
    images: ['/opengraph-image'],
  },
}

export default async function RobotsPage() {
  const robots = await listCatalogEntries('robot_model', 100).catch(() => [])
  const itemListJsonLd={
    '@context':'https://schema.org',
    '@type':'ItemList',
    name:'OpenRGD Robot Knowledge',
    itemListElement:robots.map((robot,index)=>({
      '@type':'ListItem',
      position:index+1,
      name:robot.title,
      url:'https://openrgd.org/robots/'+robot.slug,
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
        <p className="kicker">ROBOT KNOWLEDGE</p>
        <h1>Embodiments, not marketing cards.</h1>
        <p>Canonical robot facts are shared across the data layer. OpenRGD adds its own technical framing and interoperability context.</p>
      </section>
      <section className="shell entity-grid">
        {robots.map((robot)=>(
          <a className="entity-card" href={'/robots/'+robot.slug} key={robot.entry_id}>
            <span>ROBOT</span>
            <h2>{robot.title}</h2>
            <p>{robot.summary}</p>
            <strong>{robot.slug} →</strong>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  )
}
