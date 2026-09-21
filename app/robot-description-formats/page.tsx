import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import FormatComparison from '@/components/format-comparison'

export const metadata: Metadata = {
  title: 'Robot Description Formats',
  description: 'Compare URDF, OpenUSD, SDFormat and RGD by responsibility: robot structure, scene composition, simulation and semantic embodiment.',
  alternates: { canonical: '/robot-description-formats' },
}

export default function RobotDescriptionFormatsPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">ROBOT DESCRIPTION FORMATS</p>
        <h1>Structure, scenes, simulation and semantic embodiment are different jobs.</h1>
        <p>
          URDF, USD, SDFormat and RGD overlap in useful ways, but they are not interchangeable.
          The important question is not “which format wins?” — it is “which layer owns which responsibility?”
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RESPONSIBILITY MAP</p>
          <h2>Four formats, four different centers of gravity.</h2>
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
            ['URDF', 'Excellent for robot kinematic structure and common ROS robot-model workflows.', '/urdf'],
            ['USD', 'Strong for scalable scenegraphs, composition and rich scene/physics data.', '/usd'],
            ['SDF', 'Strong for simulation-oriented robots, models, sensors and whole environments.', '/sdf'],
            ['RGD', 'Focused on semantic embodiment, provenance, operational context and machine-readable grounding.', '/rgd'],
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
          <h2>Compare RGD with each description layer directly.</h2>
        </div>
        <div className="comparison-link-grid">
          {[
            ['/urdf-vs-rgd', 'URDF vs RGD', 'Robot structure vs semantic embodiment.'],
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
