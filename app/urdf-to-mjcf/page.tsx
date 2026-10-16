import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'CONVERSION REFERENCE',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Current MuJoCo modeling and model-editing documentation',
  evidenceBoundary: 'Describes supported loading/saving paths and review boundaries. Equivalent simulation behavior is not assumed from syntax conversion alone.',
  pageUrl: 'https://openrgd.org/urdf-to-mjcf',
  canonicalSource: 'https://mujoco.readthedocs.io/en/stable/modeling.html',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF to MJCF',
  description: 'URDF to MJCF conversion: how MuJoCo loads URDF, where MJCF is more expressive, what to review after conversion and why conversion is not semantic equivalence.',
  canonicalPath: '/urdf-to-mjcf',
  record: citationRecord,
})

export default function UrdfToMjcfPage() {
  return (
    <ConceptPage
      eyebrow="URDF → MJCF"
      title="MuJoCo can load URDF, but a useful MJCF derivative deserves an explicit review."
      lead="MuJoCo accepts URDF as a high-level model input and can serialize model specifications as MJCF. The conversion crosses from a portable ROS-oriented structure into a richer MuJoCo-native modeling language."
      citationRecord={citationRecord}
      sources={[
        {label:'MuJoCo — Modeling',href:'https://mujoco.readthedocs.io/en/stable/modeling.html'},
        {label:'MuJoCo — Model Editing',href:'https://mujoco.readthedocs.io/en/stable/programming/modeledit.html'},
        {label:'MuJoCo — API functions',href:'https://mujoco.readthedocs.io/en/stable/APIreference/APIfunctions.html'},
        {label:'URDF vs MJCF',href:'/urdf-vs-mjcf'},
      ]}
      related={[
        {href:'/urdf-vs-mjcf',title:'URDF vs MJCF',copy:'Compare the responsibilities before converting.'},
        {href:'/robot-description-conversion-losses',title:'Conversion Loss Matrix',copy:'See which semantic classes require review across formats.'},
        {href:'/robot-description-inspector',title:'Robot Description Inspector',copy:'Inspect the source structure before conversion.'},
      ]}
    >
      <ConceptSection kicker="SUPPORTED PATH" title="URDF can enter MuJoCo's parser and be serialized into native XML.">
        <ConceptFlow items={['URDF','MuJoCo parser','mjSpec / compiled model','MJCF serialization','Target review']}/>
        <p>
          The saved MJCF can look structurally different because MuJoCo has compiler semantics, defaults and native constructs that do not map one-to-one
          to URDF source structure.
        </p>
      </ConceptSection>

      <ConceptSection kicker="REVIEW" title="Opening successfully is not the same as preserving intent.">
        <ConceptGrid items={[
          {label:'01',title:'Kinematics',copy:'Review body nesting, joint ordering and any composite-joint assumptions.'},
          {label:'02',title:'Inertials',copy:'Check mass and inertia values after compiler-side normalization or inference.'},
          {label:'03',title:'Contacts + friction',copy:'MuJoCo owns simulator-native contact semantics beyond basic URDF structure.'},
          {label:'04',title:'Actuation',copy:'URDF joints do not automatically define the MJCF actuator model you want.'},
          {label:'05',title:'Sensors / tendons',copy:'Native MJCF constructs need explicit target-side modeling where required.'},
          {label:'06',title:'Provenance',copy:'Keep the source URDF and conversion configuration beside the target derivative.'},
        ]}/>
      </ConceptSection>
    </ConceptPage>
  )
}
