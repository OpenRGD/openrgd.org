import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Physical AI Stack',
  description: 'A vendor-neutral Physical AI stack from data, simulation and models through embodiment grounding, runtime safety, control and hardware.',
  alternates: { canonical: '/physical-ai-stack' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Physical AI Stack — From training and world models to safe physical execution',
  mainEntityOfPage: 'https://openrgd.org/physical-ai-stack',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function PhysicalAIStackPage() {
  return (
    <ConceptPage
      eyebrow="PHYSICAL AI STACK"
      title="Physical AI is a stack, not a single model."
      lead="A useful Physical AI architecture connects data, simulation, world understanding, robot policies, embodiment context, safety, control and hardware while keeping their responsibilities explicit."
      jsonLd={jsonLd}
      citationRecord={{
        maturity:'AUTHORITY EXPLAINER',
        lastVerified:'22 Sep 2026',
        sourceVersion:'Current NVIDIA / DeepMind public stack material + OpenRGD 0.2.0',
        evidenceBoundary:'Vendor-neutral synthesis; not an industry-standard stack definition.',
        canonicalSource:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md',
      }}
      sources={[
        {label:'NVIDIA — Robotics Platform',href:'https://www.nvidia.com/en-us/industries/robotics/'},
        {label:'NVIDIA — Physical AI Learning',href:'https://docs.nvidia.com/learning/physical-ai/'},
        {label:'Google DeepMind — Gemini Robotics 2',href:'https://deepmind.google/models/gemini-robotics/'},
        {label:'OpenRGD — Canonical architecture',href:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'},
        {label:'OpenRGD — Runtime Boundary',href:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md'},
      ]}
      related={[
        {href:'/physical-ai',title:'Physical AI',copy:'Start with the broader concept and why physical action changes the AI problem.'},
        {href:'/vla',title:'Vision-Language-Action Models',copy:'Understand the policy/model layer that can translate multimodal context into actions.'},
        {href:'/robot-safety-architecture',title:'Robot Safety Architecture',copy:'Separate semantic gating, functional safety and execution-layer responsibilities.'},
      ]}
    >
      <ConceptSection kicker="A WORKING TAXONOMY" title="The stack is best understood as explicit responsibility layers.">
        <p>
          There is no single universal Physical AI stack. NVIDIA organizes current robotics development around training,
          simulation and deployment infrastructure, while modern robotics models add world understanding, embodied reasoning and VLA policies.
          The taxonomy below is a vendor-neutral architectural view intended to clarify boundaries rather than define a new industry standard.
        </p>
      </ConceptSection>

      <ConceptSection kicker="EIGHT LAYERS" title="From evidence to motion, every layer should know what it owns.">
        <ConceptGrid items={[
          {label:'01',title:'Data + evidence',copy:'Robot datasets, demonstrations, sensor logs, synthetic data and source-backed body descriptions.'},
          {label:'02',title:'Simulation + digital world',copy:'Physics simulation, scene composition, synthetic environments and sim-to-real workflows.'},
          {label:'03',title:'World models + reasoning',copy:'Predictive state, spatial reasoning, task decomposition and possible-future evaluation.'},
          {label:'04',title:'Policies + VLA',copy:'Models that map perception, language and context toward robot action.'},
          {label:'05',title:'Embodiment context',copy:'The actual robot body, capabilities, constraints, provenance and current configuration.'},
          {label:'06',title:'Runtime + safety',copy:'Intent handling, capability grounding, policy gates, deterministic limits and fallback.'},
          {label:'07',title:'Control + Body Adapter',copy:'Trajectories, middleware, buses, device units, actuator interfaces and body-specific execution.'},
          {label:'08',title:'Hardware + observation',copy:'Physical sensors, actuators and measured outcomes that close the loop.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="END-TO-END FLOW" title="Intelligence becomes useful only when assumptions survive the trip to the body.">
        <ConceptFlow items={['Data / simulation','World understanding','VLA / policy','Embodiment context','Capability plan','Safety gate','Body Adapter','Hardware']}/>
      </ConceptSection>

      <ConceptSection kicker="THE EMBODIMENT GAP" title="A capable model can still be underspecified for a specific robot.">
        <p>
          Multi-embodiment models increase pressure on the interface between model output and a concrete machine.
          Different robots expose different sensors, ranges, payloads, control surfaces, calibration states and operational envelopes.
          A model that understands the task still needs trustworthy information about the body through which the task will be executed.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD POSITION" title="OpenRGD targets the semantic layer between robot assets and physical authority.">
        <p>
          OpenRGD does not replace datasets, simulators, world models, VLA policies, controllers or certified safety systems.
          It focuses on machine-readable embodiment context and explicit contracts around how semantic intent moves toward physical execution.
          Its canonical toolchain remains non-actuating; several downstream agent contracts remain candidate rather than normative.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
