import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA ARCHITECTURE EXPLAINER · SOURCE-BACKED',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'OpenVLA + SmolVLA + Gemini Robotics + π0 primary materials',
  evidenceBoundary: 'Explains recurring VLA architecture patterns; individual models may combine or omit stages.',
  pageUrl: 'https://openrgd.org/vla/how-vla-models-work',
}

export const metadata: Metadata = referenceMetadata({
  title: 'How VLA Models Work',
  description: 'How Vision-Language-Action models work: visual and language encoding, robot state, action heads, action chunks, closed-loop inference, training and robot execution.',
  canonicalPath: '/vla/how-vla-models-work',
  record: citationRecord,
})

export default function HowVlaModelsWorkPage() {
  return (
    <ConceptPage
      eyebrow="VLA ARCHITECTURE"
      title="How Vision-Language-Action models turn multimodal context into robot actions."
      lead="A VLA model typically encodes visual observations and language, grounds them with robot state, and uses an action-generating head or expert to predict the next action or a short chunk of future actions."
      citationRecord={citationRecord}
      sources={[
        {label:'OpenVLA',href:'https://openvla.github.io/'},
        {label:'Hugging Face — SmolVLA',href:'https://huggingface.co/blog/smolvla'},
        {label:'Google DeepMind — Gemini Robotics On-Device 2',href:'https://deepmind.google/models/model-cards/gemini-robotics-on-device-2/'},
        {label:'Physical Intelligence — π0',href:'https://www.physicalintelligence.company/download/pi0.pdf'},
      ]}
      related={[
        {href:'/vla',title:'Vision-Language-Action Models',copy:'Definition, landscape and VLA system context.'},
        {href:'/vla/action-representation',title:'Action Representation',copy:'Why tokenized and continuous VLA outputs behave differently.'},
        {href:'/vla/models',title:'VLA Models',copy:'See how representative model families instantiate these patterns.'},
      ]}
    >
      <ConceptSection kicker="ONE LOOP" title="A VLA is easiest to understand as a repeated perception-to-action loop.">
        <ConceptFlow items={[
          'Camera observations',
          'Language instruction',
          'Robot proprioception',
          'Multimodal backbone',
          'Action head / expert',
          'Action or action chunk',
          'Robot executes',
          'Observe again',
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="1 · OBSERVATION" title="The policy first receives a view of the current embodied situation.">
        <p>
          Visual input may come from one camera, multiple external cameras, wrist cameras or video.
          Many VLA systems also use numerical robot state such as joint positions or gripper state.
          Language conditions the behavior: pick an object, open a drawer, sort parts or complete a longer task.
        </p>
      </ConceptSection>

      <ConceptSection kicker="2 · MULTIMODAL ENCODING" title="A vision-language backbone turns pixels and words into shared context.">
        <p>
          OpenVLA uses visual encoders plus a language-model backbone. SmolVLA uses SmolVLM2.
          GR00T uses an NVIDIA Eagle VLM. The exact architecture differs, but the recurring idea is to
          reuse visual-language pretraining so the robot policy starts with semantic representations
          of objects, scenes and instructions rather than learning every concept only from robot trajectories.
        </p>
      </ConceptSection>

      <ConceptSection kicker="3 · EMBODIMENT STATE" title="Robot state makes the same instruction mean something different on different bodies.">
        <p>
          Two robots may see the same cup and receive the same instruction but have different reachable
          workspaces, grippers, joint limits and control interfaces. Proprioception and embodiment-specific
          state ground the policy in the body that must actually act.
        </p>
      </ConceptSection>

      <ConceptSection kicker="4 · ACTION GENERATION" title="The action head converts multimodal context into a robot action space.">
        <ConceptGrid items={[
          {label:'DISCRETE',title:'Action tokens',copy:'Continuous actions are quantized or compressed into tokens and predicted autoregressively.'},
          {label:'CONTINUOUS',title:'Action expert',copy:'A dedicated policy head predicts continuous robot actions conditioned on the multimodal representation.'},
          {label:'TEMPORAL',title:'Action chunks',copy:'The policy predicts several future control steps together rather than only one action per expensive model call.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="5 · EXECUTION" title="Model output still has to cross a robot control boundary.">
        <p>
          The predicted action representation must be mapped to the target robot's control interface.
          Depending on the system, the VLA may output end-effector deltas, joint-space targets, gripper values
          or another policy-specific vector. Controllers, calibration, timing and actuator interfaces then turn
          those targets into physical motion.
        </p>
      </ConceptSection>

      <ConceptSection kicker="6 · CLOSED LOOP" title="The next observation is part of the policy, not an afterthought.">
        <p>
          Physical action changes the scene. Objects move, contacts fail, humans intervene and the robot itself
          changes configuration. Re-observation closes the loop and allows the VLA policy to correct its next
          action rather than relying on an open-loop plan that assumes the world stayed unchanged.
        </p>
      </ConceptSection>

      <ConceptSection kicker="TRAINING" title="VLA training binds visual-language representations to robot trajectories.">
        <p>
          Training examples usually connect observations and instructions with recorded robot actions.
          Demonstrations may come from teleoperation, autonomous collection, simulation, synthetic generation
          or large cross-embodiment datasets. The model learns which action representation is compatible with
          the multimodal context and task.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD VIEW" title="A learned policy can be powerful without owning every downstream responsibility.">
        <p>
          OpenRGD treats the VLA as a cognition provider inside a wider embodied architecture. That preserves
          a place for explicit body semantics, capability grounding, safety gates and hardware-specific adapters
          when a deployment needs those boundaries.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
