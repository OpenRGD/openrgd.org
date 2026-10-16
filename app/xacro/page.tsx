import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE EXPLAINER',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Current ROS 2 / xacro documentation',
  evidenceBoundary: 'Xacro is a preprocessing and macro layer commonly used to generate URDF; downstream tools generally consume the expanded robot description.',
  pageUrl: 'https://openrgd.org/xacro',
  canonicalSource: 'https://github.com/ros/xacro',
}

export const metadata: Metadata = referenceMetadata({
  title: 'Xacro',
  description: 'Xacro is a ROS XML macro language used to generate URDF robot descriptions with properties, macros, includes, arguments and conditional structure.',
  canonicalPath: '/xacro',
  record: citationRecord,
})

export default function XacroPage() {
  return (
    <ConceptPage
      eyebrow="XACRO"
      title="Xacro generates robot descriptions; it is not the final robot model consumed by most tools."
      lead="Xacro adds reusable macros, properties, includes, arguments and conditional generation to XML robot-description workflows. In common ROS usage, Xacro source is expanded into URDF before downstream tools consume the model."
      citationRecord={citationRecord}
      sources={[
        {label:'xacro — official repository',href:'https://github.com/ros/xacro'},
        {label:'ROS 2 urdf_launch — URDF/Xacro loading',href:'https://docs.ros.org/en/kilted/p/urdf_launch/__README.html'},
        {label:'Gazebo — spawn URDF',href:'https://gazebosim.org/docs/latest/spawn_urdf/'},
      ]}
      related={[
        {href:'/urdf',title:'URDF',copy:'The expanded structural description commonly produced by Xacro.'},
        {href:'/urdf-limitations',title:'URDF Limitations',copy:'See what the generated URDF still does and does not represent.'},
        {href:'/robot-description-inspector',title:'Robot Description Inspector',copy:'Inspect Xacro source without pretending its macros have already been expanded.'},
      ]}
    >
      <ConceptSection kicker="WHY XACRO" title="Large descriptions need reuse and parameterization.">
        <ConceptGrid items={[
          {label:'01',title:'Properties',copy:'Reuse constants instead of repeating values throughout the model.'},
          {label:'02',title:'Macros',copy:'Generate repeated links, joints, sensors and subsystems from templates.'},
          {label:'03',title:'Includes',copy:'Compose a robot from files owned by different packages or subsystems.'},
          {label:'04',title:'Arguments',copy:'Generate variants from explicit inputs such as prefixes, grippers or simulation mode.'},
          {label:'05',title:'Conditions',copy:'Include or omit portions of the generated model based on configuration.'},
          {label:'06',title:'Expressions',copy:'Calculate values during generation instead of hand-authoring every derivative.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="PIPELINE" title="A Xacro file is source code for a description build.">
        <ConceptFlow items={['Xacro source','Macros + includes + args','Expansion','URDF XML','ROS / simulator / importer']}/>
        <p>
          For provenance, keep both the inputs and the expanded artifact. Includes, arguments and conditions can change the final robot description,
          so counts or claims extracted from raw Xacro are not automatically claims about the generated URDF.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD" title="Expand first, then import the artifact that was actually consumed.">
        <p>
          The canonical OpenRGD importer consumes URDF evidence, not the Xacro macro language itself. A reproducible pipeline records Xacro source
          and parameters, expands it deterministically, then imports the resulting URDF while keeping the generation provenance.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
