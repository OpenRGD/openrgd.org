import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import registry from '@/data/research/theses/registry.v1.json'
import { standardMetadata } from '@/lib/seo/provenance'

export const metadata: Metadata = standardMetadata({
  title:'Research Thesis Register — OpenRGD',
  description:'OpenRGD original research hypotheses: 19 falsifiable theses on robot cognition, Life and memory, calibration, provenance, VLA and measured voice performance.',
  canonicalPath:'/research/theses'
})

const dossiers=registry.theses.filter(thesis=>thesis.publication==='DOSSIER')
const other=registry.theses.filter(thesis=>thesis.publication==='REGISTER_ONLY')

const schema={
  '@context':'https://schema.org',
  '@type':'CollectionPage',
  name:'OpenRGD Research Thesis Register',
  url:'https://openrgd.org/research/theses',
  inLanguage:'en',
  dateModified:registry.as_of,
  hasPart:dossiers.map(thesis=>({
    '@type':'TechArticle',
    headline:thesis.title,
    url:thesis.dossier_url,
    isBasedOn:thesis.sources.map(source=>source.url)
  }))
}

export default function ThesisRegisterPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      <section className="content-hero shell">
        <p className="kicker">OPENRGD RESEARCH · THESIS REGISTER V1</p>
        <h1>Hypotheses that can fail are more useful than claims that cannot be checked.</h1>
        <p>
          Nineteen research theses developed from OpenRGD architecture, candidate contracts and real embodiment work.
          Every entry states an alternative explanation, a potential falsifier, existing evidence and missing verification.
          This register is research—not an accepted specification, robot safety certification or claim of absolute novelty.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">HOW TO READ THE EVIDENCE</p>
          <h2>Proposed architecture, passing software tests and measured hardware are different things.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card"><h3>Architecture candidate</h3><p>An RFC or draft design can be worth testing without being an accepted contract.</p></article>
          <article className="content-card"><h3>Software conformance</h3><p>Tests on pinned branch code prove bounded software properties—not physical authority or deployment.</p></article>
          <article className="content-card"><h3>Physical observation</h3><p>A real measurement must name hardware, method, sample limits and any missing raw evidence.</p></article>
          <article className="content-card"><h3>Publication gate</h3><p>A dedicated page requires original evidence or substantial methodology, not a new keyword variant.</p></article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">FIRST FIVE DOSSIERS</p>
          <h2>Our strongest research questions, with falsifiers and experiments.</h2>
        </div>
        <div className="content-card-grid">
          {dossiers.map(thesis=>(
            <a className="content-card" href={'/research/theses/'+thesis.slug} key={thesis.id}>
              <p className="kicker">{thesis.id} · {thesis.domain} · {thesis.priority}</p>
              <h3>{thesis.title}</h3>
              <p>{thesis.hypothesis}</p>
              <p><strong>Evidence:</strong> {thesis.status}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RESEARCH BACKLOG · 14 MORE THESES</p>
          <h2>Visible research questions without thin standalone SEO pages.</h2>
        </div>
        <div className="content-card-grid">
          {other.map(thesis=>(
            <article className="content-card" key={thesis.id}>
              <p className="kicker">{thesis.id} · {thesis.domain}</p>
              <h3>{thesis.title}</h3>
              <p>{thesis.hypothesis}</p>
              <p><strong>Would be challenged by:</strong> {thesis.falsification}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">REPRODUCIBILITY & PRIOR ART</p>
          <h2>We are studying combinations and testable boundaries, not claiming to invent every underlying idea.</h2>
        </div>
        <p className="content-note">
          Independent authorization, immutable event history, memory reconsolidation, provenance and metrological traceability
          have established precedents. The potential OpenRGD contribution is the particular cross-layer architecture, bounded conformance cases,
          physical studies and evidence chain. An engineering hypothesis is not promoted to observed truth by writing a publication.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/research/theses/registry.json">Machine-readable registry (JSON) →</a>
          <a className="button ghost" href="/research">Research index →</a>
          <a className="button ghost" href="/cite">Citation guide →</a>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>NON-NORMATIVE RESEARCH</span>
        <h2>Source integrity is not a verified Life, an authenticated producer or a safety permission.</h2>
        <p>
          Draft Core-B/Core-C/COG schemas and test harnesses do not imply enrollment, physical commissioning, signed external authority
          or a deployed Chronon writer. No experiment is counted twice merely because it ran under multiple Python versions.
        </p>
      </section>
      <SiteFooter />
    </main>
  )
}
