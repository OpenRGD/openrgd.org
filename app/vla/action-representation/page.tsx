import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA ACTION REPRESENTATION REFERENCE',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'OpenVLA + π0 + SmolVLA primary implementations',
  evidenceBoundary: 'Action representation terminology varies by model; categories describe implementation families rather than one standard VLA interface.',
  pageUrl: 'https://openrgd.org/vla/action-representation',
}

export const metadata: Metadata = referenceMetadata({
  title: 'VLA Action Representation',
  description: 'How VLA models represent robot actions: discrete action tokens, continuous actions, diffusion and flow matching, action chunking, latency and embodiment-specific control spaces.',
  canonicalPath: '/vla/action-representation',
  record: citationRecord,
})

export default function VlaActionRepresentationPage() {
  return (
    <ConceptPage
      eyebrow="VLA ACTION REPRESENTATION"
      title="A VLA can understand the same task and still differ completely in how it represents action."
      lead="Action representation is the interface between multimodal reasoning and robot control. VLA models use approaches ranging from discrete action tokens to continuous flow-based action chunks."
      citationRecord={citationRecord}
      sources={[
        {label:'OpenVLA',href:'https://openvla.github.io/'},
        {label:'OpenVLA repository — FAST and OFT updates',href:'https://github.com/openvla/openvla'},
        {label:'Physical Intelligence — π0',href:'https://www.physicalintelligence.company/download/pi0.pdf'},
        {label:'Hugging Face — SmolVLA',href:'https://huggingface.co/blog/smolvla'},
      ]}
      related={[
        {href:'/vla',title:'Vision-Language-Action Models',copy:'See where action representation fits in the whole VLA loop.'},
        {href:'/vla/how-vla-models-work',title:'How VLA Models Work',copy:'Trace the architecture from observation to execution.'},
        {href:'/vla/models',title:'VLA Models',copy:'Compare which action styles representative model families use.'},
      ]}
    >
      <ConceptSection kicker="WHY IT MATTERS" title="Action representation shapes precision, latency and portability.">
        <p>
          A robot ultimately moves in continuous physical space, but the learned policy does not have to represent
          that motion in one universal way. The model may quantize actions into tokens, directly generate continuous
          values, denoise a trajectory with diffusion-style objectives or integrate a learned flow field.
        </p>
      </ConceptSection>

      <ConceptSection kicker="MAIN FAMILIES" title="Four recurring ideas dominate current VLA action design.">
        <ConceptGrid items={[
          {label:'01',title:'Discrete action tokens',copy:'Continuous robot actions are quantized into vocabulary-like symbols and predicted autoregressively.'},
          {label:'02',title:'Continuous action prediction',copy:'A dedicated action head predicts continuous values rather than reusing a language-token output space.'},
          {label:'03',title:'Diffusion / flow generation',copy:'The policy learns to transform noise into a coherent continuous action trajectory conditioned on multimodal context.'},
          {label:'04',title:'Action chunks',copy:'Several future actions are predicted together so high-cost inference does not have to run at every low-level control tick.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="DISCRETE TOKENS" title="Tokenization makes robot action look like another language-model vocabulary.">
        <p>
          OpenVLA's original design predicts tokenized actions from its language-model backbone and then decodes
          those tokens into continuous actions. This is architecturally convenient because the same autoregressive
          machinery used for text can be reused for robot control.
        </p>
        <p>
          The trade-off is that a continuous control space has to be quantized or compressed. Later work around
          OpenVLA introduced FAST-style tokenization to compress action chunks into fewer tokens and improve inference speed.
        </p>
      </ConceptSection>

      <ConceptSection kicker="CONTINUOUS ACTIONS" title="A separate action expert can preserve continuous control structure.">
        <p>
          Continuous-action VLAs keep multimodal understanding in the vision-language backbone while delegating
          robot action generation to a specialized policy head. This avoids forcing every control value into a
          discrete text-like vocabulary and can better match high-frequency or dexterous control requirements.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FLOW MATCHING" title="π0 and SmolVLA show why flow-based action generation became important.">
        <p>
          π0 trains its action expert with conditional flow matching: the policy learns a vector field that maps
          noisy action trajectories toward demonstrated robot actions. At inference time, the trajectory is generated
          by integrating that learned field. SmolVLA also uses a flow-matching action expert conditioned on VLM features.
        </p>
      </ConceptSection>

      <ConceptSection kicker="ACTION CHUNKING" title="A policy can reason slowly and still emit a faster temporal control sequence.">
        <p>
          Predicting a chunk of future actions amortizes expensive multimodal inference across several control steps.
          It can improve throughput and temporal consistency, but it also introduces a horizon choice: longer chunks
          reduce inference frequency while making the policy less immediately reactive to newly observed changes.
        </p>
      </ConceptSection>

      <ConceptSection kicker="LATENCY" title="Model frequency and actuator frequency are not the same number.">
        <p>
          A VLA may run at tens of inferences per second while lower-level controllers operate much faster.
          Asynchronous inference, chunked actions and downstream interpolation are different strategies for bridging
          that gap. SmolVLA explicitly demonstrates asynchronous inference that decouples action execution from the
          next model prediction.
        </p>
      </ConceptSection>

      <ConceptSection kicker="EMBODIMENT" title="The output vector only has meaning relative to a robot-specific action space.">
        <p>
          A six-dimensional end-effector delta, a joint-position vector and a whole-body humanoid action are not
          interchangeable even when all are represented as continuous numbers. Action normalization, joint ordering,
          reference frames, gripper semantics and control mode remain embodiment-specific contracts.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD BOUNDARY" title="ActionIntent should describe intended action semantics without pretending every robot shares one control vector.">
        <p>
          OpenRGD's candidate architecture separates a model-level action intent from hardware-specific execution.
          That gives an embodied runtime space to resolve capabilities, frames, constraints and Body Adapter mappings
          before an action reaches device-level control.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
