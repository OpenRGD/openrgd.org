import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Vision-Language-Action Models (VLA)',
  description: 'Vision-Language-Action models connect multimodal perception and language to robot actions, raising new questions about embodiment grounding, portability, runtime safety and execution.',
  alternates: { canonical: '/vla' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Vision-Language-Action Models — From multimodal understanding to robot action',
  mainEntityOfPage: 'https://openrgd.org/vla',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function VlaPage() {
  return (
    <ConceptPage
      eyebrow="VISION-LANGUAGE-ACTION"
      title="A VLA turns multimodal context into robot action."
      lead="Vision-Language-Action models extend multimodal AI toward physical control: they consume visual and language context and produce actions or motor-control outputs for embodied systems."
      jsonLd={jsonLd}
      sources={[
        {label:'Google DeepMind — Gemini Robotics 2',href:'https://deepmind.google/models/gemini-robotics/vla/'},
        {label:'Google DeepMind — Gemini Robotics 2 release',href:'https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/'},
        {label:'Google DeepMind — Gemini Robotics On-Device 2',href:'https://deepmind.google/models/gemini-robotics/on-device/'},
        {label:'NVIDIA — GR00T and Physical AI models',href:'https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots'},
        {label:'OpenRGD — Cognition Contract candidate',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/01_COGNITION_CONTRACT.md'},
      ]}
      related={[
        {href:'/physical-ai-stack',title:'Physical AI Stack',copy:'Place VLA models inside the broader training, embodiment, safety and hardware stack.'},
        {href:'/robot-capability-model',title:'Robot Capability Model',copy:'Ground high-level actions in actual body resources and constraints.'},
        {href:'/architecture/runtime-boundary',title:'Runtime Boundary',copy:'See where model proposals stop and downstream execution responsibility begins.'},
      ]}
    >
      <ConceptSection kicker="WHAT VLA MEANS" title="Vision and language become inputs; action becomes an output modality.">
        <p>
          Google DeepMind describes Gemini Robotics as a VLA family that turns visual information and instructions into robot actions,
          while NVIDIA describes GR00T N models as VLA models for humanoid robot learning and control. The exact action representation,
          temporal horizon and control surface differ across systems, so “VLA” names a model family rather than one universal interface.
        </p>
      </ConceptSection>

      <ConceptSection kicker="MODEL LAYERS" title="Reasoning and action generation do not have to be the same model.">
        <ConceptGrid items={[
          {label:'01',title:'Perception',copy:'Images, video and other sensor-derived context describe the current environment.'},
          {label:'02',title:'Language',copy:'Instructions and task context specify goals, constraints or interaction.'},
          {label:'03',title:'Embodied reasoning',copy:'A higher-level model can understand physical space and plan multi-step work.'},
          {label:'04',title:'VLA policy',copy:'The action model converts multimodal context into robot actions or motor-control outputs.'},
          {label:'05',title:'On-device execution',copy:'Some VLA designs are optimized to run locally where latency or connectivity matter.'},
          {label:'06',title:'Adaptation',copy:'Modern systems increasingly target multiple robot embodiments rather than one fixed body.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="MULTI-EMBODIMENT" title="Portability increases the importance of explicit body context.">
        <p>
          Recent robotics models explicitly target different robot shapes and hardware. DeepMind’s current On-Device 2 materials,
          for example, describe adaptation to new robot embodiments and sensors. That makes a hidden assumption dangerous:
          the same high-level task does not imply the same reachable actions, sensing, payload or safety envelope on every body.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD CANDIDATE BOUNDARY" title="A cognition provider may be a VLA without becoming the hardware authority.">
        <p>
          In the current OpenRGD candidate Cognition Contract, a cognition provider may be an LLM, VLM, VLA,
          world model or deterministic planner. The proposed boundary is deliberately model-agnostic:
          a provider emits explicit action semantics and evidence references rather than gaining direct actuator authority by default.
        </p>
        <ConceptFlow items={['Vision + language','VLA / cognition provider','ActionIntent','Somatic Translator','CapabilityPlan','Safety gate','Body Adapter','Hardware']}/>
      </ConceptSection>

      <ConceptSection kicker="IMPORTANT LIMIT" title="This is an OpenRGD candidate architecture, not a universal rule for all VLA systems.">
        <p>
          Some production or research VLA systems output motor-control actions directly. OpenRGD’s candidate architecture introduces
          an explicit semantic and safety boundary because it is optimizing for inspectability, heterogeneous embodiments and downstream accountability.
          Those contracts remain candidate and non-normative until promoted through OpenRGD governance.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
