import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'INTEROPERABILITY LOSS MAP',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'ROS / MuJoCo / SDFormat / Isaac Sim conversion references',
  evidenceBoundary: 'Qualitative risk map. Actual conversion loss depends on source content, converter version, configuration and target runtime.',
  pageUrl: 'https://openrgd.org/robot-description-conversion-losses',
}

const rows = [
  ['Xacro → URDF','Generation structure','Macros, includes, properties and conditional intent disappear in the expanded artifact.','Preserve Xacro source, arguments and generated URDF together.'],
  ['URDF → MJCF','Target expressiveness','MuJoCo-native actuators, tendons, defaults and contact semantics are not implied by generic URDF.','Review the resulting model and keep target additions explicit.'],
  ['URDF → SDF','Simulation extensions','Gazebo extensions and conversion rules can transform the target model.','Inspect generated SDF and warnings.'],
  ['URDF → USD','Asset transformation','Importer settings may merge meshes/fixed joints or create target collision / physics structure.','Record importer version and settings.'],
  ['SDF ↔ MJCF','Modeling mismatch','Rich simulation formats organize bodies, joints and engine-specific semantics differently.','Validate behavior in both target engines.'],
  ['SDF ↔ USD','Scene / physics mapping','Scene composition and physics schemas do not have one universal one-to-one mapping.','Treat conversion as an interoperability transform, not identity.'],
]

export const metadata: Metadata = referenceMetadata({
  title: 'Robot Description Conversion Losses',
  description: 'A loss-aware map for converting Xacro, URDF, MJCF, SDFormat and USD: what can disappear, be transformed, or become target-specific.',
  canonicalPath: '/robot-description-conversion-losses',
  record: citationRecord,
})

export default function ConversionLossesPage() {
  return (
    <ConceptPage
      eyebrow="ROBOT DESCRIPTION CONVERSION"
      title="A successful conversion can still lose provenance, semantics or responsibility boundaries."
      lead="Robot-description conversion is rarely a pure syntax rewrite. Different formats own different concepts, so a useful conversion report should say what was preserved, transformed, added, ignored or left unknown."
      citationRecord={citationRecord}
      sources={[
        {label:'MuJoCo — Modeling',href:'https://mujoco.readthedocs.io/en/stable/modeling.html'},
        {label:'SDFormat — format interoperability',href:'https://sdformat.org/tutorials/developers/interoperability_formats/'},
        {label:'Isaac Sim — Import URDF',href:'https://docs.isaacsim.omniverse.nvidia.com/latest/importer_exporter/import_urdf.html'},
        {label:'OpenRGD Import Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'},
      ]}
      related={[
        {href:'/robot-description-inspector',title:'Robot Description Inspector',copy:'Inspect a source file before conversion.'},
        {href:'/robot-description-formats',title:'Format Comparison',copy:'Understand which format owns which responsibility.'},
        {href:'/interoperability',title:'Interoperability',copy:'See conversion as one layer inside a larger robotics stack.'},
      ]}
    >
      <ConceptSection kicker="LOSS CLASSES" title="Not every loss is a bug. Hidden loss is the problem.">
        <ConceptGrid items={[
          {label:'01',title:'Source-structure loss',copy:'Macros, includes, defaults or composition rules disappear after flattening.'},
          {label:'02',title:'Unsupported semantics',copy:'The target may have no direct representation for a source concept.'},
          {label:'03',title:'Target inference',copy:'A compiler or importer may add defaults, collision or derived structure.'},
          {label:'04',title:'Extension loss',copy:'ROS-, vendor- or simulator-specific extensions may be ignored by another consumer.'},
          {label:'05',title:'Unit / frame transformation',copy:'Converters may rewrite units, frames, angles or naming for target conventions.'},
          {label:'06',title:'Provenance loss',copy:'A converted file may no longer reveal authored versus generated values.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="QUALITATIVE MATRIX" title="Review what changed, not only whether the output opens.">
        <div className="loss-matrix">
          <div className="loss-matrix-head"><span>PATH</span><span>PRIMARY RISK</span><span>WHAT CAN CHANGE</span><span>REVIEW RULE</span></div>
          {rows.map(([path,risk,change,rule])=>(
            <div className="loss-matrix-row" key={path}><strong>{path}</strong><span>{risk}</span><p>{change}</p><p>{rule}</p></div>
          ))}
        </div>
      </ConceptSection>
    </ConceptPage>
  )
}
