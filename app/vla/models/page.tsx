import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA MODEL LANDSCAPE · SOURCE-BACKED REFERENCE',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'Primary model pages and model cards current to Sep 2026',
  evidenceBoundary: 'Representative, not exhaustive. Model capabilities are reported from primary sources and are not normalized benchmark claims.',
  pageUrl: 'https://openrgd.org/vla/models',
}

export const metadata: Metadata = referenceMetadata({
  title: 'VLA Models',
  description: 'Compare representative Vision-Language-Action models including OpenVLA, SmolVLA, Gemini Robotics, NVIDIA GR00T and Physical Intelligence π0 / π0.5.',
  canonicalPath: '/vla/models',
  record: citationRecord,
})

export default function VlaModelsPage() {
  return (
    <ConceptPage
      eyebrow="VLA MODELS · LANDSCAPE"
      title="VLA models differ most in action representation, embodiment scope, data and deployment assumptions."
      lead="There is no single VLA architecture. Current Vision-Language-Action models range from open token-based policies to compact continuous-action models, on-device systems and large proprietary robot foundation models."
      citationRecord={citationRecord}
      sources={[
        {label:'OpenVLA',href:'https://openvla.github.io/'},
        {label:'Hugging Face — SmolVLA',href:'https://huggingface.co/blog/smolvla'},
        {label:'Google DeepMind — Gemini Robotics 2',href:'https://deepmind.google/models/gemini-robotics/vla/'},
        {label:'Google DeepMind — Gemini Robotics On-Device 2',href:'https://deepmind.google/models/model-cards/gemini-robotics-on-device-2/'},
        {label:'NVIDIA Research — GR00T N1.5',href:'https://research.nvidia.com/labs/gear/gr00t-n1_5/'},
        {label:'NVIDIA — GR00T platform',href:'https://developer.nvidia.com/isaac/gr00t'},
        {label:'Physical Intelligence — π0',href:'https://www.physicalintelligence.company/download/pi0.pdf'},
        {label:'Physical Intelligence — π0.5',href:'https://www.physicalintelligence.company/download/pi05.pdf'},
      ]}
      related={[
        {href:'/vla',title:'Vision-Language-Action Models',copy:'Return to the VLA pillar and core definition.'},
        {href:'/vla/action-representation',title:'Action Representation',copy:'Compare discrete tokens, continuous actions, flow matching and chunks.'},
        {href:'/vla/how-vla-models-work',title:'How VLA Models Work',copy:'Follow the inference path from observations to robot control.'},
      ]}
    >
      <ConceptSection kicker="HOW TO COMPARE" title="Model size alone is a poor way to compare VLA systems.">
        <p>
          A useful VLA comparison asks what observations the policy receives, whether proprioception is included,
          how actions are represented, whether the model predicts single steps or chunks, which embodiments it was
          trained on, how it is adapted to a new robot, and what compute assumptions exist at inference time.
        </p>
      </ConceptSection>

      <ConceptSection kicker="REPRESENTATIVE MODELS" title="A practical map of the current VLA landscape.">
        <ConceptGrid items={[
          {label:'OPEN · 7B',title:'OpenVLA',copy:'Open-source VLA pretrained on 970k Open X-Embodiment episodes. The original model predicts tokenized actions that are decoded into continuous robot actions.'},
          {label:'OPEN · 450M',title:'SmolVLA',copy:'Compact LeRobot VLA using SmolVLM2 plus a continuous action expert. Designed for consumer hardware, SO-100/SO-101-class robots and asynchronous inference.'},
          {label:'PROPRIETARY',title:'Gemini Robotics 2',copy:'Google DeepMind VLA family with image and text inputs and robot actions as outputs, designed for broad robot capability and multi-embodiment use.'},
          {label:'ON-DEVICE',title:'Gemini Robotics On-Device 2',copy:'Local VLA accepting text, images and numerical proprioception, returning numerical robot actions and targeting efficient on-device manipulation.'},
          {label:'HUMANOID',title:'GR00T N1.x',copy:'NVIDIA foundation-model family for humanoid robots. N1.5 combines a VLM with a diffusion-transformer action path and flow-matching policy learning.'},
          {label:'FLOW MODEL',title:'π0',copy:'Physical Intelligence VLA that combines vision, language and robot state with a continuous action expert trained using conditional flow matching.'},
          {label:'OPEN-WORLD',title:'π0.5',copy:'Extension of π0 toward mobile manipulation and unseen homes, combining heterogeneous robot data, semantic supervision and web-derived multimodal data.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="OPENVLA" title="OpenVLA made the VLA stack reproducible at meaningful scale.">
        <p>
          OpenVLA is a 7B model built from a fused visual encoder, projector and Llama-family language backbone.
          Its original action interface discretizes robot actions into tokens, allowing the language-model backbone
          to predict them autoregressively. The project later added faster adaptation and inference techniques,
          including FAST-style action tokenization and continuous-action optimized fine-tuning.
        </p>
      </ConceptSection>

      <ConceptSection kicker="SMOLVLA" title="SmolVLA shows that VLA research does not require a giant model.">
        <p>
          Hugging Face reports 450M parameters for SmolVLA. It uses a VLM backbone plus an action expert,
          takes multiple RGB views, sensorimotor state and a language instruction, and generates a continuous
          sequence of actions. Its open LeRobot integration and SO-101 evaluation make it especially relevant
          for accessible real-robot experimentation.
        </p>
      </ConceptSection>

      <ConceptSection kicker="GEMINI ROBOTICS" title="Google DeepMind pushes VLA toward broad multi-embodiment deployment.">
        <p>
          Gemini Robotics 2 is presented as a VLA with text and image inputs and actions as outputs.
          The On-Device 2 model card makes the embodiment interface particularly explicit: text, images and
          numerical robot proprioception enter the model, and numerical robot actions come out.
        </p>
      </ConceptSection>

      <ConceptSection kicker="GR00T" title="GR00T couples language grounding, robot state and continuous action generation.">
        <p>
          NVIDIA GR00T N1.5 uses a vision-language backbone to encode text and visual observations while a
          diffusion-transformer path processes robot state and noised actions. NVIDIA also adds future-latent
          representation learning, illustrating how policy learning and predictive world-model objectives can
          increasingly coexist in one robot foundation model.
        </p>
      </ConceptSection>

      <ConceptSection kicker="π0 / π0.5" title="Physical Intelligence uses continuous flow-based action generation.">
        <p>
          π0 conditions an action expert on images, language and robot state and trains it with conditional
          flow matching. π0.5 adds heterogeneous sources and hierarchical semantic subtasks to support longer
          mobile-manipulation tasks and broader generalization.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARISON BOUNDARY" title="Do not treat benchmark numbers from different VLA papers as one leaderboard.">
        <p>
          VLA papers frequently use different robots, datasets, camera layouts, control rates, task suites,
          fine-tuning budgets and success definitions. OpenRGD therefore treats model-page metrics as
          source-specific evidence unless a benchmark protocol directly normalizes the comparison.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
