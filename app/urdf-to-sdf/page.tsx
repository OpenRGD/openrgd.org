import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'CONVERSION REFERENCE',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Current SDFormat / Gazebo URDF conversion documentation',
  evidenceBoundary: 'Describes libsdformat/Gazebo conversion behavior. Resulting SDF can contain transformed or extension-derived semantics.',
  pageUrl: 'https://openrgd.org/urdf-to-sdf',
  canonicalSource: 'https://sdformat.org/tutorials/specification/sdformat_urdf_extensions/',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF to SDF',
  description: 'URDF to SDF conversion with Gazebo and libsdformat: automatic conversion, gz sdf inspection, Gazebo extension tags and simulation semantics.',
  canonicalPath: '/urdf-to-sdf',
  record: citationRecord,
})

export default function UrdfToSdfPage() {
  return (
    <ConceptPage
      eyebrow="URDF → SDF"
      title="Gazebo converts URDF into SDFormat before using it as a simulation model."
      lead="Gazebo can load URDF and internally convert it to SDF through libsdformat. Gazebo-specific extension tags can influence the generated SDF, so inspecting the converted artifact is useful whenever simulation behavior matters."
      citationRecord={citationRecord}
      sources={[
        {label:'SDFormat — URDF extensions',href:'https://sdformat.org/tutorials/specification/sdformat_urdf_extensions/'},
        {label:'Gazebo — Spawn URDF',href:'https://gazebosim.org/docs/latest/spawn_urdf/'},
        {label:'SDFormat specification',href:'https://sdformat.org/spec'},
        {label:'URDF vs SDF',href:'/urdf-vs-sdf'},
      ]}
      related={[
        {href:'/urdf-vs-sdf',title:'URDF vs SDF',copy:'Compare robot structure and simulation-world responsibility.'},
        {href:'/robot-description-conversion-losses',title:'Conversion Loss Matrix',copy:'Track portable, transformed and target-specific semantics.'},
        {href:'/robot-description-inspector',title:'Robot Description Inspector',copy:'Inspect Gazebo extensions before conversion.'},
      ]}
    >
      <ConceptSection kicker="INSPECT THE RESULT" title="Automatic conversion does not have to be invisible.">
        <ConceptFlow items={['URDF','libsdformat conversion','SDF model','Gazebo Sim']}/>
        <p>SDFormat documents <code>gz sdf -p model.urdf</code> as a way to inspect generated SDF and conversion diagnostics.</p>
      </ConceptSection>

      <ConceptSection kicker="TARGET SEMANTICS" title="SDF owns simulation concepts that URDF does not.">
        <ConceptGrid items={[
          {label:'01',title:'World context',copy:'SDF can represent worlds, lights, actors and multiple models.'},
          {label:'02',title:'Pose frames',copy:'Relative-frame and nested-scope semantics can exceed a simple URDF tree.'},
          {label:'03',title:'Joint types',copy:'SDF has simulation-oriented joint constructs beyond portable URDF usage.'},
          {label:'04',title:'Sensors + plugins',copy:'Simulation sensors and dynamically loaded plugins are native Gazebo/SDF concerns.'},
          {label:'05',title:'Fixed-joint processing',copy:'Conversion can transform rigid structure based on target rules and extensions.'},
          {label:'06',title:'Versioning',copy:'The SDFormat spec version is distinct from the libsdformat library release.'},
        ]}/>
      </ConceptSection>
    </ConceptPage>
  )
}
