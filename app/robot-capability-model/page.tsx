import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Robot Capability Model',
  description: 'A robot capability model represents what a robot can do, what resources it requires, which constraints apply and how capabilities become executable plans.',
  alternates: { canonical: '/robot-capability-model' },
}

export default function RobotCapabilityModelPage() {
  return (
    <ConceptPage
      eyebrow="ROBOT CAPABILITY MODEL"
      title="A body description says what exists. A capability model says what the embodiment can do."
      lead="Capability modeling bridges physical resources and task semantics: actions should be grounded in required sensors, actuators, preconditions, constraints and expected effects."
      citationRecord={{
        maturity:'MIXED — EXPERIMENTAL + CANDIDATE',
        lastVerified:'22 Sep 2026',
        sourceVersion:'Agency skill schema + CapabilityPlan / Somatic Contract 0.1.0',
        evidenceBoundary:'Capability primitives exist at mixed maturity; no universal OpenRGD capability ontology is claimed stable.',
        canonicalSource:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/02_SOMATIC_TRANSLATION_CONTRACT.md',
      }}
      sources={[
        {label:'IEEE 1872.1-2024 — Robot Task Representation',href:'https://standards.ieee.org/ieee/1872.1/6993/'},
        {label:'KnowRob — Semantic Robot Description Language',href:'https://knowrob.org/doc/srdl2_tutorial'},
        {label:'OpenRGD — Skill schema',href:'https://github.com/OpenRGD/openrgd/blob/main/spec/03_agency/skills/core/schemas/skill_schema.jsonc'},
        {label:'OpenRGD — CapabilityPlan candidate schema',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/schemas/capability-plan.schema.json'},
        {label:'OpenRGD — Somatic Translation candidate contract',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/02_SOMATIC_TRANSLATION_CONTRACT.md'},
      ]}
      related={[
        {href:'/robot-ontology',title:'Robot Ontology',copy:'Formal vocabulary for robot, task and autonomy concepts.'},
        {href:'/robot-knowledge-graph',title:'Robot Knowledge Graph',copy:'Concrete instances, relationships and evidence.'},
        {href:'/architecture/somatic-translation',title:'Somatic Translation',copy:'Candidate OpenRGD boundary from ActionIntent to CapabilityPlan.'},
      ]}
    >
      <ConceptSection kicker="TERMINOLOGY" title="Capability, skill, task, action and affordance should not be treated as interchangeable.">
        <ConceptGrid items={[
          {label:'01',title:'Capability',copy:'A declared ability of the embodiment under specified prerequisites and constraints.'},
          {label:'02',title:'Skill',copy:'A reusable behavior or policy that may realize one or more capabilities.'},
          {label:'03',title:'Task',copy:'A goal-oriented unit of work to be achieved in a context.'},
          {label:'04',title:'Action',copy:'An explicit operation or semantic intent considered for execution.'},
          {label:'05',title:'Affordance',copy:'A relation between agent/body and environment that makes an action possible.'},
          {label:'06',title:'Resource',copy:'Sensors, actuators, body parts, software or context required to realize the capability.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="GROUNDING" title="A useful capability should be testable against the actual embodiment.">
        <p>
          KnowRob/SRDL has long represented robot hardware, software and capabilities and can check whether dependencies of action descriptions
          are available on a robot. OpenRGD’s current Agency material explores a similar practical problem from an embodiment-profile perspective.
        </p>
        <ConceptFlow items={['Body resources','Capability declaration','Preconditions','Skill / policy','ActionIntent','CapabilityPlan','Safety gate','Execution']}/>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD CURRENT WORK" title="The repository already exposes useful capability primitives — with mixed maturity.">
        <p>
          The current skill schema includes required sensors and actuators, world-model preconditions, safety envelopes, control profiles,
          runtime learning policy and fallback behavior. Separately, the candidate Somatic Translation contract defines a hardware-agnostic CapabilityPlan.
        </p>
        <p>
          These artifacts are valuable design evidence, but they do not all share the same maturity. The CapabilityPlan contract remains candidate,
          and OpenRGD.org should present capability modeling as an evolving architectural area rather than a finalized universal ontology.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WHY VLA NEEDS THIS" title="Generalist models still need embodiment-specific grounding.">
        <p>
          A model can propose “pick up the box,” but a heterogeneous robot fleet needs a separate answer to:
          which embodiment has the sensors, reach, gripper, payload, safety envelope and context required to perform that action?
          Capability models make that compatibility problem explicit.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
