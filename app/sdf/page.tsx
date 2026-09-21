import type { Metadata } from 'next'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import FormatComparison from '@/components/format-comparison'

export const metadata: Metadata = {
  title: 'SDF / SDFormat',
  description: 'SDFormat is an XML format for describing robots, models, sensors, physics and full simulation environments.',
  alternates: { canonical: '/sdf' },
}

export default function SdfPage() {
  return (
    <ConceptPage
      eyebrow="SDF / SDFORMAT"
      title="A simulation-oriented description of robots and worlds."
      lead="SDFormat is an XML format created for robot simulation, visualization and control contexts. It can describe robots, static and dynamic objects, sensors, lighting, terrain, physics and complete worlds."
      sources={[
        { label: 'SDFormat — What is SDFormat?', href: 'https://sdformat.org/' },
        { label: 'SDFormat — Specification', href: 'https://sdformat.org/spec' },
        { label: 'SDFormat — Model kinematics', href: 'https://sdformat.org/tutorials/specification/spec_model_kinematics/' },
      ]}
      related={[
        { href: '/robot-description-formats', title: 'Robot Description Formats', copy: 'Compare SDF with URDF, USD and RGD.' },
        { href: '/rgd', title: 'RGD', copy: 'Semantic embodiment context alongside simulation-oriented description.' },
        { href: '/interoperability', title: 'Interoperability', copy: 'How simulation descriptions coexist with semantic and runtime layers.' },
      ]}
    >
      <ConceptSection kicker="SIMULATION FIRST" title="SDF can describe both a robot and the world around it.">
        <p>
          SDFormat defines models, links, joints, sensors, collision, visual geometry, lights, physics and world-level configuration.
          A model can represent a complete robot or another physical object, while a world can contain models, scene and physics configuration.
        </p>
      </ConceptSection>

      <ConceptSection kicker="RICH MODEL" title="The format reaches beyond a minimal kinematic tree.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Models', copy: 'Complete robots or physical objects can be represented as named models.' },
            { label: '02', title: 'Links and joints', copy: 'Articulated multibody structure is part of the core model.' },
            { label: '03', title: 'Sensors', copy: 'A broad range of simulated sensor types can be declared.' },
            { label: '04', title: 'Physics', copy: 'Simulation physics and surface behavior are first-class concerns.' },
            { label: '05', title: 'Worlds', copy: 'Environments can contain multiple models, scene settings and physics.' },
            { label: '06', title: 'Plugins', copy: 'Simulation-specific extensions can be attached to world, model and sensor contexts.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="BOUNDARY" title="Simulation completeness and semantic embodiment are not the same thing.">
        <p>
          SDF is intentionally strong at describing what a simulator needs about models and environments.
          OpenRGD focuses on a different set of questions: canonical identity, provenance, operational semantics,
          declared capability, lifecycle and machine-readable governance context.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPLEMENTARITY" title="A simulation world can inform an embodied agent without becoming its semantic identity.">
        <p>
          In a layered system, SDF may describe the simulated robot and environment while RGD represents the semantic embodiment profile
          consumed by AI or runtime components. The two can overlap on physical facts without sharing the same responsibility.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARE" title="SDF and RGD meet around the robot, but from different directions.">
        <FormatComparison />
      </ConceptSection>
    </ConceptPage>
  )
}
