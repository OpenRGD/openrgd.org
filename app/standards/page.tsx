import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Standards',
  description: 'OpenRGD standards, robot description formats, specification and interoperability comparisons.',
  alternates: { canonical: '/standards' },
}

const groups = [
  {
    eyebrow: 'OPENRGD STANDARD',
    title: 'OpenRGD and the canonical specification',
    copy: 'The normative source, versioning model and machine-readable semantic embodiment representation.',
    links: [
      ['/openrgd', 'OpenRGD / Robot Graph Definition'],
      ['/spec', 'Specification'],
      ['/architecture', 'Architecture'],
    ],
  },
  {
    eyebrow: 'ROBOT DESCRIPTION',
    title: 'Established description layers',
    copy: 'Understand the formats that describe robot structure, composed scenes and simulation-oriented models.',
    links: [
      ['/robot-description-formats', 'Description formats'],
      ['/urdf', 'URDF'],
      ['/usd', 'USD / OpenUSD'],
      ['/sdf', 'SDF / SDFormat'],
      ['/mjcf', 'MJCF / MuJoCo'],
    ],
  },
  {
    eyebrow: 'SEMANTIC INTEROPERABILITY',
    title: 'From description to machine-understandable embodiment',
    copy: 'Ontology, knowledge graphs and capability models connect physical robot descriptions to higher-level reasoning and heterogeneous embodied systems.',
    links: [
      ['/robot-ontology', 'Robot Ontology'],
      ['/robot-knowledge-graph', 'Robot Knowledge Graph'],
      ['/robot-capability-model', 'Robot Capability Model'],
      ['/interoperability', 'Robot Interoperability'],
    ],
  },
  {
    eyebrow: 'COMPARISONS',
    title: 'Where RGD fits',
    copy: 'Direct comparisons that separate complementary responsibilities instead of forcing one format to own the entire stack.',
    links: [
      ['/urdf-vs-sdf', 'URDF vs SDF'],
      ['/urdf-vs-usd', 'URDF vs USD'],
      ['/urdf-vs-mjcf', 'URDF vs MJCF'],
      ['/urdf-vs-rgd', 'URDF vs RGD'],
      ['/usd-vs-rgd', 'USD vs RGD'],
      ['/sdf-vs-rgd', 'SDF vs RGD'],
      ['/interoperability', 'Interoperability'],
    ],
  },
]

export default function StandardsPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">STANDARDS</p>
        <h1>Describe the right thing at the right layer.</h1>
        <p>
          OpenRGD sits beside established robot and scene description formats. This area maps the standards,
          representations and interoperability boundaries that make embodied systems understandable and composable.
        </p>
      </section>

      <section className="shell content-section">
        <div className="standards-groups">
          {groups.map((group) => (
            <article className="standards-group" key={group.eyebrow}>
              <div>
                <p className="kicker">{group.eyebrow}</p>
                <h2>{group.title}</h2>
                <p>{group.copy}</p>
              </div>
              <div className="standards-links">
                {group.links.map(([href,label]) => (
                  <a href={href} key={href}>
                    <span>{label}</span>
                    <strong>→</strong>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
