import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA VS VLM CONCEPT REFERENCE',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'OpenVLA + SmolVLA + Gemini Robotics primary materials',
  evidenceBoundary: 'VLA and VLM are model-family terms; some systems reuse a VLM backbone inside a larger action policy.',
  pageUrl: 'https://openrgd.org/vla/vla-vs-vlm',
}

export const metadata: Metadata = referenceMetadata({
  title: 'VLA vs VLM',
  description: 'VLA vs VLM: the difference between Vision-Language-Action models and Vision-Language Models, including inputs, outputs, robot actions, training data and embodied deployment.',
  canonicalPath: '/vla/vla-vs-vlm',
  record: citationRecord,
})

export default function VlaVsVlmPage() {
  return (
    <ConceptPage
      eyebrow="VLA VS VLM"
      title="A VLM understands multimodal content. A VLA learns to produce robot actions."
      lead="The key difference between a Vision-Language Model and a Vision-Language-Action model is the learned output behavior: VLMs generate semantic multimodal outputs, while VLAs extend that representation into an embodiment-specific action space."
      citationRecord={citationRecord}
      sources={[
        {label:'OpenVLA',href:'https://openvla.github.io/'},
        {label:'Hugging Face — SmolVLA',href:'https://huggingface.co/blog/smolvla'},
        {label:'Google DeepMind — Gemini Robotics 2',href:'https://deepmind.google/models/gemini-robotics/vla/'},
      ]}
      related={[
        {href:'/vla',title:'Vision-Language-Action Models',copy:'Full VLA definition and architecture map.'},
        {href:'/vla/how-vla-models-work',title:'How VLA Models Work',copy:'See how a VLM-like backbone becomes part of an action policy.'},
        {href:'/vla/action-representation',title:'Action Representation',copy:'Explore what the action output can actually look like.'},
      ]}
    >
      <ConceptSection kicker="SHORT ANSWER" title="The action modality is the dividing line.">
        <p>
          Both VLMs and VLAs can process images and language. A VLM may caption a scene, answer a question,
          identify an object or reason about spatial relationships. A VLA is trained so that the multimodal
          representation also conditions robot actions.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARISON" title="Same multimodal foundation, different operational role.">
        <ConceptGrid items={[
          {label:'VLM',title:'Typical inputs',copy:'Images or video plus text.'},
          {label:'VLM',title:'Typical outputs',copy:'Text, labels, coordinates, embeddings or other semantic representations.'},
          {label:'VLM',title:'Training emphasis',copy:'Large-scale image-text and multimodal understanding objectives.'},
          {label:'VLA',title:'Typical inputs',copy:'Images, language and often robot proprioception or embodiment state.'},
          {label:'VLA',title:'Typical outputs',copy:'Action tokens, continuous action vectors or temporal action chunks.'},
          {label:'VLA',title:'Training emphasis',copy:'Robot trajectories paired with observations and task instructions, often combined with prior VLM pretraining.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="ARCHITECTURE" title="Many VLAs contain a VLM rather than replacing it.">
        <p>
          OpenVLA starts from a pretrained vision-language architecture and adapts it to predict robot actions.
          SmolVLA explicitly combines a VLM backbone with an action expert. GR00T similarly uses a VLM to encode
          visual and language context while a separate action path processes robot state and actions.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WHY VLM ALONE IS NOT ENOUGH" title="Knowing where the cup is does not define how this robot should move.">
        <p>
          A multimodal model can identify a cup and understand the instruction “put it in the sink,” but robot
          execution still depends on reachability, kinematics, gripper state, camera geometry, action representation
          and the target control interface. VLA training binds semantic understanding to examples of embodied action.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WHY VLA IS NOT THE WHOLE ROBOT" title="Adding action output still does not eliminate control, safety or hardware interfaces.">
        <p>
          A VLA may predict low-level actions, but physical deployment still has responsibilities outside the learned
          model: sensor timing, calibration, actuator constraints, controller stability, emergency behavior and
          application-specific safety. VLA and VLM describe model roles, not complete robot architectures.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD VIEW" title="VLM and VLA can both be cognition providers; the downstream contract determines authority.">
        <p>
          In the OpenRGD candidate architecture, a VLM might produce semantic interpretation or a high-level proposal,
          while a VLA may produce a more action-oriented intent. Neither label alone determines whether the component
          has direct hardware authority.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
