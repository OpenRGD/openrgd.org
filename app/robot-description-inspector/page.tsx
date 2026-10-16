import type { Metadata } from 'next'
import RobotDescriptionInspector from '@/components/robot-description-inspector'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { standardMetadata } from '@/lib/seo/provenance'

export const metadata: Metadata = standardMetadata({
  title: 'Robot Description Inspector',
  description: 'Inspect URDF, Xacro, MJCF, SDFormat and USDA locally in the browser. See structural evidence, ecosystem extensions and potential conversion risks.',
  canonicalPath: '/robot-description-inspector',
})

export default function RobotDescriptionInspectorPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">LOSS-AWARE ROBOT DESCRIPTION INSPECTOR · V0.1</p>
        <h1>Inspect what the file actually says before converting it.</h1>
        <p>Load URDF, Xacro, MJCF, SDFormat or textual USDA. The browser identifies structural evidence and extension signals and flags areas that deserve review before interoperability or conversion.</p>
      </section>

      <section className="shell content-section"><RobotDescriptionInspector /></section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">V0.1 BOUNDARY</p><h2>Inspection is deliberately not conversion.</h2></div>
        <div className="content-card-grid">
          <article className="content-card"><h3>URDF / Xacro</h3><p>Parses structure and detects mimic, transmissions, ros2_control, Gazebo extensions and unexpanded Xacro constructs.</p></article>
          <article className="content-card"><h3>MJCF</h3><p>Counts bodies, joints, geoms, actuator-like elements, sensors, tendons, equality and defaults without invoking the compiler.</p></article>
          <article className="content-card"><h3>SDFormat</h3><p>Counts model/world structure, joints, frames, sensors and plugins without resolving scoped pose semantics.</p></article>
          <article className="content-card"><h3>USDA</h3><p>Text-level detection only; composition, variants, references and physics schemas require an OpenUSD-aware stage.</p></article>
        </div>
      </section>

      <section className="shell warning-panel"><span>NO SAFETY OR EXECUTION CLAIM</span><h2>A clean inspection report is not proof that a robot is safe, commissioned or executable.</h2><p>This tool inspects source representation, not physical hardware, calibration, controller behavior or actuation authority.</p></section>
      <SiteFooter />
    </main>
  )
}
