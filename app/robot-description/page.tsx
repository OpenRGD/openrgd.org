import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Robot Description',
  description: 'Robot description formats represent physical structure and simulation state. OpenRGD adds semantic grounding, provenance and explicit operational context.',
  alternates: { canonical: '/robot-description' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Robot Description — From geometry to semantic embodiment',
  mainEntityOfPage: 'https://openrgd.org/robot-description',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function RobotDescriptionPage() {
  return (
    <ConceptPage
      eyebrow="ROBOT DESCRIPTION"
      title="Describing a robot is not the same as describing its embodiment."
      lead="Traditional robot descriptions are excellent at representing structure, geometry and simulation-relevant properties. An AI system also needs explicit semantics about capability, limits, provenance and operational context."
      jsonLd={jsonLd}
      sources={[
        { label: 'ROS — URDF documentation', href: 'https://docs.ros.org/en/rolling/p/urdf/' },
        { label: 'OpenUSD — UsdPhysics schema', href: 'https://openusd.org/dev/api/usd_physics_page_front.html' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
      ]}
      related={[
        { href: '/interoperability', title: 'Interoperability', copy: 'How description formats, semantic context and runtime boundaries can coexist.' },
        { href: '/architecture', title: 'OpenRGD Architecture', copy: 'The seven domains and authority model behind the graph.' },
        { href: '/physical-ai', title: 'Physical AI', copy: 'Why autonomous systems need more context when decisions become physical.' },
      ]}
    >
      <ConceptSection kicker="STRUCTURAL DESCRIPTION" title="URDF answers foundational questions extremely well.">
        <p>
          URDF is an XML robot description format centered on links and joints. It represents the robot model as a tree
          and can encode topology, inertial properties, joint limits, origins, dynamics and related structural information.
        </p>
        <p>
          Those facts are foundational. They answer questions such as: what is connected to what, how can it move,
          what are the limits, and what physical properties were authored?
        </p>
      </ConceptSection>

      <ConceptSection kicker="SCENE + PHYSICS" title="OpenUSD can represent richer composed worlds and physics.">
        <p>
          UsdPhysics extends the OpenUSD scene graph with rigid bodies, joints, collision and simulation-oriented properties.
          It is useful for complex scenes and physically meaningful simulation assets.
        </p>
        <p>
          OpenRGD does not attempt to replace the OpenUSD composition engine. Its current lightweight USDA importer intentionally
          supports only a narrow, auditable subset and refuses to pretend it has resolved semantics that require the full SDK.
        </p>
      </ConceptSection>

      <ConceptSection kicker="THE SEMANTIC GAP" title="Structure alone does not tell an AI what the body means operationally.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Identity', copy: 'Which physical robot or profile does this description belong to?' },
            { label: '02', title: 'Capability', copy: 'What tasks and actions are explicitly declared or supported?' },
            { label: '03', title: 'Operational limits', copy: 'What boundaries apply beyond raw joint ranges?' },
            { label: '04', title: 'Safety context', copy: 'Which constraints must remain explicit before execution?' },
            { label: '05', title: 'Provenance', copy: 'Which facts came from source evidence, calibration or later enrichment?' },
            { label: '06', title: 'Lifecycle', copy: 'How has the effective embodiment changed over time?' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="OPENRGD IMPORT" title="Extract evidence. Do not manufacture missing knowledge.">
        <p>
          OpenRGD imports only source-supported Foundation evidence from supported URDF and USDA inputs.
          Missing values remain missing. Import does not create identity, safety policy, alignment, cognition, HAL bindings or hardware authorization.
        </p>
        <ConceptFlow items={['URDF / USDA', 'Evidence extraction', 'Partial Foundation', 'Explicit enrichment', 'Integrity check', 'Grounding context']} />
      </ConceptSection>

      <ConceptSection kicker="KEY PRINCIPLE" title="A description is evidence, not permission.">
        <p>
          Even a complete structural description cannot prove that a robot is safe to operate or that a controller is correctly bound to hardware.
          OpenRGD preserves that distinction deliberately.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
