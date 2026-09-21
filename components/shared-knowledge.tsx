import { listCatalogEntries } from '@/lib/cms/catalog'

const labels: Record<string, string> = {
  organization: 'ORGANIZATION',
  robot_model: 'ROBOT',
  technology: 'TECHNOLOGY',
  application: 'APPLICATION',
}

export default async function SharedKnowledge() {
  const entries = await listCatalogEntries(undefined, 8).catch(() => [])

  return (
    <section className="section shell shared-knowledge" id="knowledge">
      <div className="section-heading compact" data-reveal>
        <div>
          <p className="kicker">SHARED KNOWLEDGE LAYER</p>
          <h2>Canonical facts. Independent OpenRGD context.</h2>
        </div>
        <p>
          OpenRGD.org reads shared canonical entities from the multi-site knowledge layer,
          while its summaries, SEO and editorial framing remain specific to OpenRGD.
        </p>
      </div>

      <div className="knowledge-grid" data-reveal>
        {entries.map((entry) => (
          <article className="knowledge-card" key={entry.entry_id}>
            <div className="knowledge-card-top">
              <span>{labels[entry.entity_kind] || entry.entity_kind}</span>
              {entry.featured ? <i>FEATURED</i> : null}
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
            <div className="knowledge-card-foot">
              <span>canonical entity</span>
              <strong>{entry.slug}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
