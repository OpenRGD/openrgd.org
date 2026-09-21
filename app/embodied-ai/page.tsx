import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import { getCatalogEntry } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Embodied AI',
  description: 'Embodied AI studies agents whose perception, reasoning and learning are coupled to a body interacting with an environment.',
  alternates: { canonical: '/embodied-ai' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Embodied AI — Intelligence through body and environment',
  mainEntityOfPage: 'https://openrgd.org/embodied-ai',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default async function EmbodiedAIPage() {
  const entry = await getCatalogEntry('technology', 'embodied-ai').catch(() => null)

  return (
    <ConceptPage
      eyebrow="EMBODIED AI"
      title="The body is part of the intelligence problem."
      lead={entry?.summary || 'AI systems that perceive, reason, learn and act through an embodiment interacting with an environment.'}
      jsonLd={jsonLd}
      sources={[
        { label: 'Google DeepMind — Gemini Robotics', href: 'https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/' },
        { label: 'Google DeepMind — Gemini Robotics-ER 1.6', href: 'https://deepmind.google/blog/gemini-robotics-er-1-6/' },
        { label: 'OpenRGD — Canonical architecture', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
      ]}
      related={[
        { href: '/physical-ai', title: 'Physical AI', copy: 'The broader stack required to deploy intelligent autonomous machines.' },
        { href: '/robot-description', title: 'Robot Description', copy: 'How embodiment becomes explicit enough for software and AI systems to consume.' },
        { href: '/robots', title: 'Robot Knowledge', copy: 'Concrete embodiments represented in the shared knowledge layer.' },
      ]}
    >
      <ConceptSection kicker="EMBODIED REASONING" title="Perception and action form a closed loop.">
        <p>
          An embodied agent does not observe the world from a fixed distance. Its actions change what it can perceive next.
          Moving a camera changes the visual evidence. Reaching changes contact. Walking changes the map. Manipulation changes the scene.
        </p>
        <p>
          DeepMind uses the term embodied reasoning for this bridge between multimodal intelligence and physical action.
          Recent robotics models combine vision, language and action while separate reasoning models operate over spatial and physical context.
        </p>
      </ConceptSection>

      <ConceptSection kicker="EMBODIMENT MATTERS" title="The same task is different in different bodies.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Kinematics', copy: 'Reachability and action spaces depend on links, joints and physical topology.' },
            { label: '02', title: 'Sensing', copy: 'What can be inferred depends on available sensors, placement and uncertainty.' },
            { label: '03', title: 'Actuation', copy: 'Torque, velocity, force and control modes shape what actions are possible.' },
            { label: '04', title: 'Morphology', copy: 'Hands, wheels, legs and end effectors change strategies and affordances.' },
            { label: '05', title: 'History', copy: 'Wear, calibration and adaptation can change the effective body over time.' },
            { label: '06', title: 'Constraints', copy: 'Safety and operational envelopes bound what intelligence may physically attempt.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="GENERALIZATION" title="A policy should not silently assume every robot is the same robot.">
        <p>
          One of the central challenges in embodied intelligence is transferring skills across different embodiments.
          A bimanual manipulator, a mobile base and a humanoid may share task semantics while exposing very different sensors,
          kinematics, control surfaces and safety constraints.
        </p>
        <p>
          This is where a machine-readable embodiment graph becomes useful: the policy or planner can consume explicit body context
          instead of relying on hidden assumptions embedded in training data or middleware configuration.
        </p>
        <ConceptFlow items={['Instruction', 'Embodied reasoning', 'Body context', 'Capability plan', 'Action', 'New observation']} />
      </ConceptSection>

      <ConceptSection kicker="OPENRGD POSITION" title="Embodiment should be inspectable, versioned and provenance-aware.">
        <p>
          OpenRGD treats the robot body as structured context with explicit maturity and provenance.
          That is different from claiming that the graph itself is intelligent. OpenRGD describes the embodiment;
          models, planners and runtimes reason and act through it.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
