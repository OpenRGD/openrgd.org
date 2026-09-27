import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA AUTHORITY EXPLAINER · OPENRGD CANDIDATE BOUNDARY',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'Current primary VLA model materials + OpenRGD Agent Contracts 0.1.0 candidate',
  evidenceBoundary: 'VLA is a model-family term with heterogeneous architectures and action spaces; OpenRGD execution boundaries remain candidate and non-normative.',
  pageUrl: 'https://openrgd.org/vla',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/01_COGNITION_CONTRACT.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'Vision-Language-Action Models (VLA)',
  description: 'What is a Vision-Language-Action model? Learn how VLA models combine vision, language, robot state and action generation, how they differ from VLMs, and how they connect to robot control.',
  canonicalPath: '/vla',
  record: citationRecord,
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Vision-Language-Action Models (VLA): How Robots See, Understand and Act',
  mainEntityOfPage: 'https://openrgd.org/vla',
  about: [
    { '@type': 'Thing', name: 'Vision-Language-Action model' },
    { '@type': 'Thing', name: 'VLA model' },
    { '@type': 'Thing', name: 'Robot learning' },
    { '@type': 'Thing', name: 'Embodied AI' },
  ],
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function VlaPage() {
  return (
    <ConceptPage
      eyebrow="VISION-LANGUAGE-ACTION MODELS · VLA"
      title="Vision-Language-Action models connect what a robot sees and is told to what it does next."
      lead="A Vision-Language-Action model, or VLA model, is a multimodal robot policy that conditions on visual observations and language instructions — often together with robot state — and predicts an action representation that can be used to control an embodied system."
      jsonLd={jsonLd}
      citationRecord={citationRecord}
      sources={[
        {label:'Google DeepMind — Gemini Robotics 2',href:'https://deepmind.google/models/gemini-robotics/vla/'},
        {label:'Google DeepMind — Gemini Robotics On-Device 2 model card',href:'https://deepmind.google/models/model-cards/gemini-robotics-on-device-2/'},
        {label:'OpenVLA — project and paper',href:'https://openvla.github.io/'},
        {label:'Hugging Face — SmolVLA',href:'https://huggingface.co/blog/smolvla'},
        {label:'NVIDIA Research — GR00T N1.5',href:'https://research.nvidia.com/labs/gear/gr00t-n1_5/'},
        {label:'Physical Intelligence — π0 paper',href:'https://www.physicalintelligence.company/download/pi0.pdf'},
        {label:'OpenRGD — Cognition Contract candidate',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/01_COGNITION_CONTRACT.md'},
      ]}
      related={[
        {href:'/vla/models',title:'VLA Models',copy:'Compare representative VLA families, action styles, availability and embodiment scope.'},
        {href:'/vla/how-vla-models-work',title:'How VLA Models Work',copy:'Follow the path from visual observation and language instruction to robot action.'},
        {href:'/vla/action-representation',title:'VLA Action Representation',copy:'Understand action tokens, continuous actions, flow matching and action chunks.'},
        {href:'/vla/vla-vs-vlm',title:'VLA vs VLM',copy:'See why visual-language understanding is not the same problem as action generation.'},
        {href:'/vla/vla-vs-world-model',title:'VLA vs World Model',copy:'Separate action policies from predictive models of how the world may evolve.'},
        {href:'/architecture/runtime-boundary',title:'Runtime Boundary',copy:'See where model proposals stop and downstream physical execution responsibility begins.'},
      ]}
    >
      <ConceptSection kicker="DEFINITION" title="What is a Vision-Language-Action model?">
        <p>
          A Vision-Language-Action model is a learned policy that connects multimodal perception and language
          to robot action. In the common case, the model receives one or more camera observations and a natural-language
          instruction; many modern systems also condition on proprioception or other robot-state values. The output is
          an action representation such as discrete action tokens, continuous action vectors or a chunk of future actions.
        </p>
        <p>
          The term describes a model family, not one fixed architecture. OpenVLA predicts tokenized actions that are decoded
          into continuous robot actions. π0 and SmolVLA use continuous action generation with flow-matching-style action experts.
          Gemini Robotics 2 exposes actions as the output modality, while its on-device model card explicitly lists text,
          images and robot proprioception as inputs and numerical robot actions as outputs.
        </p>
      </ConceptSection>

      <ConceptSection kicker="CORE LOOP" title="The simplest VLA loop is observation + instruction + state → action.">
        <ConceptFlow items={[
          'Visual observation',
          'Language instruction',
          'Robot state',
          'VLA policy',
          'Action representation',
          'Robot control stack',
          'New observation',
        ]}/>
        <p>
          Closed-loop use matters because the world changes after each action. A VLA policy can generate an action or
          action chunk, the robot executes through its control stack, sensors observe the result, and the next inference
          step is conditioned on the updated state.
        </p>
      </ConceptSection>

      <ConceptSection kicker="INPUTS & OUTPUTS" title="Vision and language are common inputs. Action format is the major design choice.">
        <ConceptGrid items={[
          {label:'INPUT',title:'Vision',copy:'RGB images, multi-camera observations or video provide scene and object context.'},
          {label:'INPUT',title:'Language',copy:'Natural-language instructions condition the task, goal or requested behavior.'},
          {label:'INPUT',title:'Robot state',copy:'Joint state, gripper state or other proprioception can ground inference in the current embodiment.'},
          {label:'OUTPUT',title:'Discrete action tokens',copy:'Actions are quantized or tokenized so an autoregressive model can predict them similarly to language tokens.'},
          {label:'OUTPUT',title:'Continuous actions',copy:'An action expert predicts continuous robot commands without forcing every action through a text-like vocabulary.'},
          {label:'OUTPUT',title:'Action chunks',copy:'A policy predicts a short sequence of future actions, reducing the need to invoke the expensive multimodal backbone for every control step.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="VLA VS VLM" title="A VLM can understand a scene. A VLA adds an action-generating policy.">
        <p>
          Vision-Language Models are optimized for multimodal understanding and generation: describing an image,
          answering a question, locating an object or reasoning about visual content. A VLA extends that multimodal
          representation toward an embodiment-specific action space. The important difference is not that a VLA
          contains vision and language — VLMs already do — but that robot action becomes part of the model's learned output behavior.
        </p>
        <div className="content-actions">
          <a className="button ghost" href="/vla/vla-vs-vlm">VLA vs VLM in detail →</a>
        </div>
      </ConceptSection>

      <ConceptSection kicker="ACTION REPRESENTATION" title="Modern VLA models do not all speak the same action language.">
        <p>
          Early and influential VLA designs showed that robot actions could be represented as discrete tokens.
          More recent systems increasingly use continuous action experts, diffusion or flow-matching objectives,
          and temporal action chunks. These choices affect inference latency, precision, temporal smoothness and
          how easily a policy can be adapted across embodiments.
        </p>
        <div className="content-actions">
          <a className="button ghost" href="/vla/action-representation">Explore VLA action representations →</a>
        </div>
      </ConceptSection>

      <ConceptSection kicker="REPRESENTATIVE MODELS" title="The VLA landscape now spans open research models, on-device policies and large proprietary systems.">
        <ConceptGrid items={[
          {label:'OPEN',title:'OpenVLA',copy:'A 7B open-source VLA trained on 970k Open X-Embodiment robot episodes, originally using tokenized actions.'},
          {label:'OPEN',title:'SmolVLA',copy:'A compact 450M LeRobot VLA using a VLM plus continuous action expert, designed for affordable hardware and asynchronous inference.'},
          {label:'RESEARCH',title:'π0 / π0.5',copy:'Physical Intelligence VLA models using continuous action generation and flow matching, with π0.5 extending toward open-world mobile manipulation.'},
          {label:'HUMANOID',title:'GR00T',copy:'NVIDIA robot foundation models combining a vision-language backbone with state-conditioned action generation for humanoid policies.'},
          {label:'PROPRIETARY',title:'Gemini Robotics 2',copy:'Google DeepMind VLA family connecting image and text context to robot actions across multiple embodiments.'},
          {label:'ON-DEVICE',title:'Gemini Robotics On-Device 2',copy:'A local VLA that accepts text, images and numerical proprioception and returns numerical robot actions.'},
        ]}/>
        <div className="content-actions">
          <a className="button ghost" href="/vla/models">Compare representative VLA models →</a>
        </div>
      </ConceptSection>

      <ConceptSection kicker="TRAINING" title="VLA performance depends on robot data as much as model scale.">
        <p>
          Training data can combine teleoperated demonstrations, real robot trajectories, simulation, synthetic data,
          web-scale vision-language data and cross-embodiment datasets. OpenVLA was pretrained on 970k robot episodes from
          Open X-Embodiment. SmolVLA deliberately uses open community datasets. GR00T combines real, simulated and synthetic
          sources, while π0.5 mixes robot data with semantic and web-derived multimodal supervision.
        </p>
        <p>
          This makes dataset provenance, embodiment coverage and action-space compatibility first-class questions when
          interpreting a VLA result. A benchmark score is not automatically transferable to another robot, camera layout,
          control frequency or actuator interface.
        </p>
      </ConceptSection>

      <ConceptSection kicker="DEPLOYMENT" title="A VLA policy is not the whole robot control stack.">
        <p>
          Even when a model produces numerical robot actions directly, deployment still involves timing, observation freshness,
          calibration, controller semantics, actuator limits, fault handling and physical safety. Some systems intentionally
          couple model output closely to low-level control; others keep an explicit downstream controller or safety layer.
          VLA therefore describes the learned policy, not every responsibility required to operate a physical robot.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WORLD MODELS" title="A world model predicts consequences; a VLA policy chooses actions. The two can be combined.">
        <p>
          World models learn or simulate how state may evolve under actions. VLA policies map current multimodal context
          toward actions. Modern systems increasingly mix the two ideas: for example, NVIDIA GR00T N1.5 adds a future-latent
          representation objective alongside policy learning. The conceptual roles remain useful to separate even when one
          architecture trains both capabilities jointly.
        </p>
        <div className="content-actions">
          <a className="button ghost" href="/vla/vla-vs-world-model">VLA vs world model →</a>
        </div>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD BOUNDARY" title="A cognition provider may be a VLA without becoming the hardware authority.">
        <p>
          In the current OpenRGD candidate Cognition Contract, a cognition provider may be an LLM, VLM, VLA,
          world model or deterministic planner. The proposed boundary is deliberately model-agnostic:
          cognition produces explicit action semantics and evidence references, while body grounding,
          safety evaluation and device-specific execution remain separate responsibilities.
        </p>
        <ConceptFlow items={[
          'Vision + language + state',
          'VLA / cognition provider',
          'ActionIntent',
          'Somatic Translator',
          'CapabilityPlan',
          'Operation Safety Gate',
          'Body Adapter',
          'Hardware',
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="IMPORTANT LIMIT" title="OpenRGD describes one candidate execution boundary, not a universal VLA architecture.">
        <p>
          Some research and production VLA systems intentionally output low-level motor-control actions directly.
          OpenRGD introduces an explicit semantic and execution boundary because it is optimizing for inspectability,
          heterogeneous embodiments, provenance and downstream accountability. Those contracts remain candidate and
          non-normative until promoted through OpenRGD governance.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
