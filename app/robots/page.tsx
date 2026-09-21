import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { listCatalogEntries } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Robots',
  description: 'Robot platforms in the OpenRGD shared knowledge layer.',
  alternates: { canonical: '/robots' },
}

export default async function RobotsPage() {
  const robots = await listCatalogEntries('robot_model', 100).catch(() => [])

  return (
    <main className="content-page">
      <SiteHeader />
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
