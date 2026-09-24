import { standardMetadata } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata = standardMetadata({
  title: 'Developers',
  description: 'Build with the OpenRGD toolchain: import robot evidence, validate profiles, create non-actuating grounding context and export deterministic ROS 2 configuration.',
  canonicalPath: '/docs',
})

const lifecycle = [
  ['01','Initialize','rgd init Robot'],
  ['02','Import evidence','rgd import robot.urdf --out partial-robot'],
  ['03','Enrich explicitly','rgd alive robot.urdf --out RGD-robot --seed default'],
  ['04','Verify source','rgd hash'],
  ['05','Validate profile','rgd check --output json'],
  ['06','Build context','rgd boot --output json'],
  ['07','Compile','rgd compile-spec'],
  ['08','Static export','rgd export ros2 --out export/ros2'],
]

const guides = [
  ['/docs/import-urdf','Import URDF','Extract supported robot topology, inertials, limits, dynamics and mimic relationships as partial Foundation evidence.'],
  ['/docs/import-usd','Import USD / USDA','Import the deliberately narrow text USDA / UsdPhysics subset without pretending to be a full OpenUSD composition engine.'],
  ['/docs/validation','Validation','Understand rgd hash, rgd check and the deterministic non-actuating rgd boot context.'],
  ['/docs/export-ros2','Export ROS 2','Generate deterministic static controller/limits artifacts and an explicit hardware-binding status.'],
]

export default function DocsPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell developers-hero">
        <div className="developer-meta">
          <p className="kicker">DEVELOPERS</p>
          <span>RGD TOOLCHAIN 0.1.1 · WORKING ALPHA</span>
        </div>
        <h1>Evidence in. Verified context out.</h1>
        <p>
          The canonical <code>rgd</code> toolchain imports source-supported robot evidence,
          verifies profile integrity, builds deterministic non-actuating context and generates static interoperability artifacts.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/rgd">Explore the rgd toolchain</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Open repository ↗</a>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">IMPLEMENTED GUIDES</p>
          <h2>Document what the toolchain actually does.</h2>
        </div>
        <div className="developer-guide-grid">
          {guides.map(([href,title,copy],index)=>(
            <a href={href} key={href}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>Read guide →</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">REFERENCE LIFECYCLE</p>
          <h2>A verified, non-actuating path through the current toolchain.</h2>
        </div>
        <div className="developer-lifecycle">
          {lifecycle.map(([n,title,command])=>(
            <div key={n}>
              <span>{n}</span>
              <strong>{title}</strong>
              <code>{command}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="shell warning-panel">
        <span>NON-ACTUATING BY DESIGN</span>
        <h2><code>rgd boot</code> does not boot hardware.</h2>
        <p>
          It builds <code>OPENRGD_NON_ACTUATING_GROUNDING_CONTEXT</code> and explicitly records that physical execution is not assessed or authorized.
          The canonical repository does not ship a physical embodied runtime or Body Adapter.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CANONICAL DOCUMENTS</p>
          <h2>The website explains. The repository remains authoritative.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['CLI Guide','https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'],
            ['Import Guide','https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'],
            ['Export Guide','https://github.com/OpenRGD/openrgd/blob/main/GUIDE_EXPORT.md'],
            ['Structure','https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'],
            ['Versioning','https://github.com/OpenRGD/openrgd/blob/main/VERSIONING.md'],
            ['Security','https://github.com/OpenRGD/openrgd/blob/main/SECURITY.md'],
          ].map(([title,href])=>(
            <a className="content-card" href={href} target="_blank" rel="noreferrer" key={title}>
              <h3>{title}</h3><p>Canonical repository document ↗</p>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
