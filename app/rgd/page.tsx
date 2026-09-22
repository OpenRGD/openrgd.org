import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'rgd CLI & Toolchain',
  description: 'The rgd Python toolchain validates OpenRGD profiles, imports source-supported robot evidence, builds deterministic non-actuating context and generates static interoperability artifacts.',
  alternates: { canonical: '/rgd' },
}

const commands = [
  ['init','rgd init Robot','Materialize a project from the packaged default profile and recalculate its source-tree commitment.'],
  ['import','rgd import robot.urdf --out partial-robot','Extract source-supported Foundation evidence from URDF or the supported USDA subset.'],
  ['hash','rgd hash','Verify OPENRGD_SOURCE_TREE_SHA256_V1 or intentionally update it with --write.'],
  ['check','rgd check --output json','Validate canonical structure, source integrity and selected JSONC modules.'],
  ['boot','rgd boot --output json','Build OPENRGD_NON_ACTUATING_GROUNDING_CONTEXT.'],
  ['compile','rgd compile-spec','Generate one deterministic machine bundle from the verified source tree.'],
  ['export','rgd export ros2 --out export/ros2','Generate deterministic, static ROS 2 interoperability artifacts.'],
]

export default function RgdToolchainPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <div className="developer-meta">
          <p className="kicker">RGD TOOLCHAIN</p>
          <span>PYTHON 0.1.1 · WORKING ALPHA</span>
        </div>
        <h1>The reference CLI for working with OpenRGD profiles.</h1>
        <p>
          <code>rgd</code> is the Python toolchain shipped by the canonical OpenRGD repository.
          It manages profile materialization, integrity verification, evidence import,
          deterministic compilation and static interoperability generation.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/docs">Developer guides</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md" target="_blank" rel="noreferrer">CLI reference ↗</a>
        </div>
      </section>

      <section className="shell content-split">
        <article>
          <p className="kicker">RGD REPRESENTATION</p>
          <h2>Defined by OpenRGD.</h2>
          <p>
            Robot Graph Definition is the semantic profile/graph representation defined by the standard.
            Read the conceptual and standard-level definition on <a href="/openrgd">/openrgd</a>.
          </p>
        </article>
        <article>
          <p className="kicker">rgd TOOLCHAIN</p>
          <h2>Implemented as reference Python tooling.</h2>
          <p>
            The lowercase <code>rgd</code> command works with OpenRGD source trees and derived artifacts.
            Toolchain versioning is independent from the standard bundle and candidate contracts.
          </p>
        </article>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">COMMAND SURFACE</p>
          <h2>One toolchain, explicit guarantees for each operation.</h2>
        </div>
        <div className="toolchain-command-list">
          {commands.map(([name,command,copy])=>(
            <article key={name}>
              <span>{name}</span>
              <code>{command}</code>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">VERIFIED LIFECYCLE</p>
          <h2>The current CI exercises a non-actuating end-to-end path.</h2>
        </div>
        <div className="developer-lifecycle">
          {[
            ['01','Import','URDF / USDA'],
            ['02','Enrich','explicit seed'],
            ['03','Hash','source integrity'],
            ['04','Check','profile validation'],
            ['05','Boot','grounding context'],
            ['06','Compile','machine bundle'],
            ['07','Export','static ROS 2'],
          ].map(([n,title,value])=>(
            <div key={n}><span>{n}</span><strong>{title}</strong><code>{value}</code></div>
          ))}
        </div>
      </section>

      <section className="shell warning-panel">
        <span>TOOLCHAIN BOUNDARY</span>
        <h2>The CLI is deliberately non-actuating.</h2>
        <p>
          <code>rgd check</code> does not assess hardware readiness or operational safety.
          <code>rgd boot</code> explicitly records physical execution as not assessed and not authorized.
          Static ROS 2 export does not launch middleware or issue actuator commands.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">IMPLEMENTED GUIDES</p>
          <h2>Use the tooling against real source evidence.</h2>
        </div>
        <div className="developer-guide-grid">
          {[
            ['/docs/import-urdf','Import URDF','Extract supported robot evidence without inventing missing knowledge.'],
            ['/docs/import-usd','Import USD / USDA','Use the auditable text USDA / UsdPhysics subset.'],
            ['/docs/validation','Validation','Understand hash, check and non-actuating boot.'],
            ['/docs/export-ros2','Export ROS 2','Generate deterministic static interoperability artifacts.'],
          ].map(([href,title,copy],index)=>(
            <a href={href} key={href}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>Read guide →</strong>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
