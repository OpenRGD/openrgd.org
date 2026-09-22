import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import FormatComparison from '@/components/format-comparison'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE EXPLAINER',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'Current MuJoCo modeling and MJCF XML documentation',
  evidenceBoundary: 'Reference explainer; MJCF remains MuJoCo-native dynamic-system modeling and is not an OpenRGD semantic layer.',
  pageUrl: 'https://openrgd.org/mjcf',
  canonicalSource: 'https://mujoco.readthedocs.io/en/latest/XMLreference.html',
}

export const metadata: Metadata = referenceMetadata({
  title: 'MJCF — MuJoCo Modeling Format',
  description: 'MJCF is MuJoCo’s native XML modeling language for complex dynamical systems, simulation models, bodies, joints, actuators, sensors and physics.',
  canonicalPath: '/mjcf',
  record: citationRecord,
})

export default function MjcfPage() {
  return (
    <ConceptPage
      eyebrow="MJCF"
      title="MuJoCo’s native language for dynamic models."
      lead="MJCF is MuJoCo’s native XML-based modeling language. It is designed to describe complex dynamical systems and expose MuJoCo’s rich modeling features directly."
      citationRecord={citationRecord}
      sources={[
        { label: 'MuJoCo — Modeling', href: 'https://mujoco.readthedocs.io/en/latest/modeling.html' },
        { label: 'MuJoCo — MJCF XML Reference', href: 'https://mujoco.readthedocs.io/en/latest/XMLreference.html' },
        { label: 'MuJoCo — Overview', href: 'https://mujoco.readthedocs.io/en/stable/' },
      ]}
      related={[
        { href: '/urdf-vs-mjcf', title: 'URDF vs MJCF', copy: 'Compare interchange-oriented robot modeling with MuJoCo-native dynamic modeling.' },
        { href: '/robot-description-formats', title: 'Robot Description Formats', copy: 'See MJCF beside URDF, USD, SDF and RGD.' },
        { href: '/research/world-models', title: 'World Models', copy: 'Simulation and learned prediction solve related but different problems.' },
      ]}
    >
      <ConceptSection kicker="NATIVE MODEL" title="MJCF maps directly onto MuJoCo’s modeling system.">
        <p>
          MuJoCo documents MJCF as its native model format. The main kinematic structure is represented by nested body elements under
          <code> worldbody </code>, while joints create degrees of freedom between bodies instead of connecting separately declared links.
        </p>
      </ConceptSection>

      <ConceptSection kicker="RICH DYNAMICS" title="The format exposes simulator-native modeling concepts.">
        <ConceptGrid items={[
          {label:'01',title:'Bodies + joints',copy:'Nested bodies form the kinematic tree and may contain multiple joints.'},
          {label:'02',title:'Actuators',copy:'Actuation models and controller-related parameters are native parts of MJCF.'},
          {label:'03',title:'Sensors',copy:'Simulation-oriented sensor definitions are part of the model language.'},
          {label:'04',title:'Tendons',copy:'Tendon routing and constraints can be represented directly.'},
          {label:'05',title:'Defaults',copy:'Reusable defaults reduce repetition across complex models.'},
          {label:'06',title:'Compiler',copy:'High-level MJCF is compiled into MuJoCo’s lower-level mjModel representation.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="URDF IMPORT" title="MuJoCo supports URDF, but URDF represents a subset of what MJCF can express.">
        <p>
          MuJoCo can load URDF models and provides MuJoCo-specific URDF extensions. Its documentation explicitly notes that URDF can represent
          only a subset of the model elements available in MuJoCo and recommends converting to MJCF when users need the full feature set.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD POSITION" title="MJCF is a simulator-native model; RGD is semantic embodiment context.">
        <p>
          OpenRGD should not imitate MJCF’s simulator responsibilities. A future adapter can treat MJCF as physical/simulation evidence,
          while RGD remains responsible for provenance, semantic identity, capabilities, operational context and lifecycle.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARE" title="Five formats, five centers of gravity.">
        <FormatComparison />
      </ConceptSection>
    </ConceptPage>
  )
}
