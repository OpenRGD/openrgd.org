import type { Metadata } from 'next'
import ReferenceProvenance from '@/components/reference-provenance'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import FormatComparison from '@/components/format-comparison'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE COMPARISON HUB',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Current ROS / OpenUSD / SDFormat / MuJoCo references + OpenRGD 0.2.0',
  evidenceBoundary: 'Responsibility map, not a ranking. The formats solve different layers and conversion can be lossy.',
  pageUrl: 'https://openrgd.org/robot-description-formats',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md',
}

const provenanceSources = [
  { label: 'ROS URDF', href: 'https://docs.ros.org/en/rolling/p/urdf' },
  { label: 'OpenUSD', href: 'https://openusd.org/dev/index.html' },
  { label: 'SDFormat', href: 'https://sdformat.org/spec' },
  { label: 'MuJoCo MJCF', href: 'https://mujoco.readthedocs.io/en/latest/XMLreference.html' },
  { label: 'OpenRGD Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
]

export const metadata: Metadata = referenceMetadata({
  title: 'Robot Description Formats',
  description: 'Compare Xacro, URDF, OpenUSD, SDFormat, MJCF and RGD by responsibility: robot structure, scene composition, simulation, dynamic-system modeling and semantic embodiment.',
  canonicalPath: '/robot-description-formats',
  record: citationRecord,
})

export default function RobotDescriptionFormatsPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">ROBOT DESCRIPTION FORMATS</p>
        <h1>Structure, scenes, simulation and semantic embodiment are different jobs.</h1>
        <p>
          Xacro, URDF, USD, SDFormat, MJCF and RGD overlap in useful ways, but they are not interchangeable.
          The important question is not “which format wins?” — it is “which layer owns which responsibility?”
        </p>
      </section>

      <ReferenceProvenance
        title="Robot Description Formats"
        description="Compare URDF, OpenUSD, SDFormat, MJCF and RGD by responsibility: robot structure, scene composition, simulation, dynamic-system modeling and semantic embodiment."
        record={citationRecord}
        sources={provenanceSources}
      />

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RESPONSIBILITY MAP</p>
          <h2>Five formats, five different centers of gravity.</h2>
        </div>
        <FormatComparison />
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">WHY THIS MATTERS</p>
          <h2>Interoperability improves when layers stop pretending to be each other.</h2>
        </div>
        <div className="content-card-grid">
          {[
            ['Xacro', 'Parametric source generation for reusable ROS robot descriptions.', '/xacro'],
            ['URDF', 'Excellent for robot kinematic structure and common ROS robot-model workflows.', '/urdf'],
            ['USD', 'Strong for scalable scenegraphs, composition and rich scene/physics data.', '/usd'],
            ['SDF', 'Strong for simulation-oriented robots, models, sensors and whole environments.', '/sdf'],
            ['MJCF', 'MuJoCo-native dynamic modeling with rich simulator-specific bodies, actuators, tendons and sensors.', '/mjcf'],
            ['RGD', 'Focused on semantic embodiment, provenance, operational context and machine-readable grounding.', '/openrgd'],
          ].map(([title, copy, href]) => (
            <a className="content-card" href={href} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </a>
          ))}
        </div>
      </section>


      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">DEEP COMPARISONS</p>
          <h2>Compare the layers directly — including the choices developers actually make.</h2>
        </div>
        <div className="comparison-link-grid">
          {[
            ['/urdf-vs-sdf', 'URDF vs SDF', 'ROS robot model vs simulation-oriented model/world.'],
            ['/urdf-vs-usd', 'URDF vs USD', 'Robot model vs composable scenegraph.'],
            ['/urdf-vs-mjcf', 'URDF vs MJCF', 'Portable robot structure vs MuJoCo-native modeling.'],
            ['/urdf-vs-rgd', 'URDF vs RGD', 'Robot structure vs semantic embodiment.'],
            ['/urdf-limitations', 'URDF limitations', 'Where portable URDF stops and extensions or target-native formats begin.'],
            ['/urdf-to-mjcf', 'URDF → MJCF', 'MuJoCo loading, serialization and target-specific review.'],
            ['/urdf-to-usd', 'URDF → USD', 'Isaac Sim importer choices and OpenUSD asset structure.'],
            ['/urdf-to-sdf', 'URDF → SDF', 'Gazebo/libsdformat conversion and extension behavior.'],
            ['/usd-vs-rgd', 'USD vs RGD', 'Scene composition vs semantic embodiment.'],
            ['/sdf-vs-rgd', 'SDF vs RGD', 'Simulation description vs semantic embodiment.'],
          ].map(([href, title, copy]) => (
            <a href={href} key={href}>
              <span>COMPARE</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>Open comparison →</strong>
            </a>
          ))}
        </div>
      </section>


      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CONVERSION & INSPECTION</p>
          <h2>Interoperability should expose what changes.</h2>
        </div>
        <div className="content-card-grid">
          <a className="content-card" href="/robot-description-conversion-losses"><h3>Conversion loss matrix</h3><p>Track source structure, target inference, unsupported semantics and provenance loss.</p></a>
          <a className="content-card" href="/robot-description-inspector"><h3>Robot Description Inspector</h3><p>Inspect URDF, Xacro, MJCF, SDF and USDA locally before conversion.</p></a>
          <a className="content-card" href="/ros2-control-urdf"><h3>ros2_control + URDF</h3><p>Separate hardware-interface declarations from runtime plugin authority.</p></a>
        </div>
      </section>

      <section className="shell content-section semantic-bridge">
        <div className="content-section-head">
          <p className="kicker">FORMATS → SEMANTICS</p>
          <h2>A robot file tells you about structure. Semantic layers tell you what those facts mean together.</h2>
        </div>
        <div className="semantic-chain">
          {[
            ['/robot-description-formats','Description formats','Structure / scene / simulation evidence'],
            ['/robot-ontology','Robot ontology','Shared concepts and relations'],
            ['/robot-knowledge-graph','Knowledge graph','Concrete entities, assertions and provenance'],
            ['/robot-capability-model','Capability model','What an embodiment can do under constraints'],
          ].map(([href,title,copy],index)=>(
            <a href={href} key={href}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>→</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="shell warning-panel compact-warning">
        <span>OPENRGD POSITION</span>
        <h2>Complement, do not collapse.</h2>
        <p>
          OpenRGD is designed to consume source-supported evidence from robot descriptions,
          preserve provenance and add semantic context. It is not trying to become a full USD scene engine,
          a Gazebo world format, ROS middleware or a physical runtime.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
