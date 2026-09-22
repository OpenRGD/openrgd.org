import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Robot Safety Architecture',
  description: 'Robot safety is multilayer: inherent safe design, application integration, AI semantic safety, runtime constraints, control and evidence must remain distinct.',
  alternates: { canonical: '/robot-safety-architecture' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Robot Safety Architecture — From risk reduction to model, runtime and hardware boundaries',
  mainEntityOfPage: 'https://openrgd.org/robot-safety-architecture',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function RobotSafetyArchitecturePage() {
  return (
    <ConceptPage
      eyebrow="ROBOT SAFETY ARCHITECTURE"
      title="Safety is a system property, not a model checkbox."
      lead="A robot safety architecture spans machine design, application integration, environment, semantic action validation, runtime constraints, control, fallback and evidence. No single AI model or semantic graph replaces those responsibilities."
      jsonLd={jsonLd}
      citationRecord={{
        maturity:'AUTHORITY EXPLAINER',
        lastVerified:'22 Sep 2026',
        sourceVersion:'ISO 10218-1:2025 / ISO 10218-2:2025 + Agent Contracts 0.1.0',
        evidenceBoundary:'Architecture explainer only; not certification, conformity assessment or a replacement for applicable safety standards.',
        canonicalSource:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md',
      }}
      sources={[
        {label:'ISO 10218-1:2025 — Industrial robots',href:'https://www.iso.org/standard/73933.html'},
        {label:'ISO 10218-2:2025 — Industrial robot applications and cells',href:'https://www.iso.org/standard/73934.html'},
        {label:'ISO/TS 15066:2016 — Collaborative robots',href:'https://committee.iso.org/standard/62996.html'},
        {label:'Google DeepMind — Gemini Robotics ER 2 model card',href:'https://deepmind.google/models/model-cards/gemini-robotics-er-2/'},
        {label:'NVIDIA — Robotics Functional Safety / Halos',href:'https://www.nvidia.com/en-us/ai-trust-center/halos/robotics/'},
        {label:'OpenRGD — Runtime Boundary',href:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md'},
        {label:'OpenRGD — Ethos / DecisionTrace candidate contract',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/04_ETHOS_DECISIONTRACE_CONTRACT.md'},
      ]}
      related={[
        {href:'/physical-ai-stack',title:'Physical AI Stack',copy:'See where safety sits relative to models, simulation, runtime and hardware.'},
        {href:'/architecture/runtime-boundary',title:'Runtime Boundary',copy:'The adopted separation between canonical semantic tooling and physical execution.'},
        {href:'/architecture/agent-contracts',title:'Agent Contracts',copy:'Candidate interfaces for intent, somatic translation and DecisionTrace.'},
      ]}
    >
      <ConceptSection kicker="SCOPE FIRST" title="Different robot applications fall under different safety standards and risk contexts.">
        <p>
          ISO 10218-1:2025 covers safety requirements for industrial robots themselves, while ISO 10218-2:2025 focuses on
          integration of industrial robot applications and cells. Collaborative industrial operation has additional guidance in ISO/TS 15066.
          Other robot classes can fall under different standards and regulatory regimes.
        </p>
        <p>
          OpenRGD does not certify conformance to those standards and a valid RGD profile is not evidence of certification.
        </p>
      </ConceptSection>

      <ConceptSection kicker="MULTILAYER SAFETY" title="Physical AI adds new reasoning layers without removing classical safety responsibilities.">
        <ConceptGrid items={[
          {label:'01',title:'Inherently safe design',copy:'Mechanical, electrical and machine-level risk reduction belongs to the robot/system design.'},
          {label:'02',title:'Application integration',copy:'Cells, tools, environments, commissioning and operating procedures create system-level hazards.'},
          {label:'03',title:'Perception + semantic safety',copy:'AI systems may detect humans, hazards, prohibited targets or ambiguous instructions.'},
          {label:'04',title:'Action validation',copy:'Proposed actions can be checked against capabilities, policies and declared operational constraints.'},
          {label:'05',title:'Runtime + control safety',copy:'Deterministic limits, watchdogs, state machines, fallback and emergency behavior belong near execution.'},
          {label:'06',title:'Evidence + audit',copy:'Structured traces can record which policy, evidence and state contributed to an execution decision.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="AI SAFETY ≠ FUNCTIONAL SAFETY" title="Semantic understanding can complement, not replace, deterministic safety mechanisms.">
        <p>
          Current robotics platforms increasingly add AI-based safety perception and reasoning, while model providers publish safety evaluations
          and limitations for embodied systems. Those mechanisms can improve situational awareness and instruction handling,
          but they do not erase the need for application-specific risk assessment, functional safety engineering and physical protective measures.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD POSITION" title="OpenRGD can make pre-actuation constraints inspectable.">
        <p>
          The canonical OpenRGD standard can represent operational context and constraints.
          Separately, the current non-normative agent contracts explore an Operation Safety Gate and DecisionTrace between a hardware-agnostic
          CapabilityPlan and the Body Adapter. This is an architectural boundary for evidence and action validation — not a safety certification.
        </p>
        <ConceptFlow items={['Model proposal','ActionIntent','Capability grounding','Policy / constraints','Safety gate','DecisionTrace','Body Adapter','Hardware safety']}/>
      </ConceptSection>

      <ConceptSection kicker="FAIL CLOSED" title="Uncertainty should remain visible at the boundary.">
        <p>
          OpenRGD’s broader design philosophy is to preserve missing or uncertain evidence rather than silently manufacture defaults.
          Applied to safety architecture, that favors explicit escalation, blocking or reduced authority when required body,
          environment or policy evidence is absent — while leaving real-time protective control to the systems designed and certified for it.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
