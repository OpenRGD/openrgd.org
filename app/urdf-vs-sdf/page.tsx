import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import FormatVsFormatPage from '@/components/format-vs-format-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE COMPARISON',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'ROS URDF + current SDFormat documentation',
  evidenceBoundary: 'Responsibility comparison for developer choice; conversion may be lossy and no universal winner is asserted.',
  pageUrl: 'https://openrgd.org/urdf-vs-sdf',
  canonicalSource: 'https://sdformat.org/spec',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF vs SDF',
  description: 'Compare URDF and SDFormat: robot model structure versus simulation-oriented models, sensors, physics and worlds.',
  canonicalPath: '/urdf-vs-sdf',
  record: citationRecord,
})

export default function UrdfVsSdfPage() {
  return (
    <FormatVsFormatPage
      eyebrow="URDF VS SDF"
      title="Robot model or simulation world? Start with the responsibility."
      lead="URDF is deeply embedded in ROS robot-model workflows. SDFormat extends further into simulation-oriented models, sensors, physics and complete worlds."
      leftName="URDF"
      leftHref="/urdf"
      rightName="SDF"
      rightHref="/sdf"
      rows={[
        {dimension:'Primary focus',left:'Robot model structure in ROS-oriented workflows.',right:'Simulation-oriented models and complete worlds.'},
        {dimension:'Structure',left:'Links connected by joints.',right:'Models containing links and joints, plus world-level composition.'},
        {dimension:'Environment',left:'Not a full world-description format.',right:'Worlds, scene configuration, lights and physics are first-class.'},
        {dimension:'Sensors',left:'Commonly handled through ecosystem extensions and adjacent configuration.',right:'Broad simulation sensor declarations are part of the format.'},
        {dimension:'Physics',left:'Selected physical properties and dynamics.',right:'Simulation physics and surface properties are core concerns.'},
        {dimension:'ROS ecosystem',left:'Native center of gravity.',right:'Often used with Gazebo/simulation ecosystems and ROS bridges.'},
        {dimension:'Conversion',left:'Useful upstream robot source for many workflows.',right:'Can preserve simulation context that does not fit back into URDF.'},
      ]}
      chooseLeft={[
        'Your canonical robot model is maintained for ROS tooling.',
        'You primarily need links, joints, geometry, inertials and joint constraints.',
        'You want broad compatibility with ROS robot-model consumers.',
        'World-level simulation configuration belongs elsewhere in your stack.',
      ]}
      chooseRight={[
        'You need one description that includes robots and the surrounding simulation world.',
        'Sensors, lights, physics and environment settings are part of the artifact.',
        'Gazebo-oriented simulation behavior is a primary use case.',
        'The model must express concepts that do not round-trip cleanly through URDF.',
      ]}
      useBoth={[
        'Maintain URDF as the ROS-facing robot model while generating or maintaining SDF for richer simulation.',
        'Treat conversion as lossy when the target format cannot represent source-specific concepts.',
        'Keep semantic embodiment or provenance in a separate layer rather than forcing either format to own it.',
      ]}
      sources={[
        {label:'ROS — URDF documentation',href:'https://docs.ros.org/en/rolling/p/urdf'},
        {label:'SDFormat — Project',href:'https://sdformat.org/'},
        {label:'SDFormat — Specification',href:'https://sdformat.org/spec'},
      ]}
      citationRecord={citationRecord}
    />
  )
}
