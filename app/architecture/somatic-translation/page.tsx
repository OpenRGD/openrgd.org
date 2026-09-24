import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkFlow, WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Somatic Translation',
  description: 'The OpenRGD candidate boundary between approved ActionIntent and hardware-agnostic CapabilityPlan.',
  canonicalPath: '/architecture/somatic-translation',
})

export default function SomaticTranslationPage() {
  return (
    <WorkPage
      eyebrow="ARCHITECTURE · SOMATIC"
      title="Translate intent into embodied capability — without leaking hardware details upward."
      lead="The Somatic Translator is the candidate hardware-agnostic boundary between approved action semantics and a typed CapabilityPlan."
      status="CANDIDATE"
      tone="candidate"
      boundary="The v0.1 contract is a baseline, not a final motion planner. It must not emit motor IDs, raw servo ticks, CAN frames or simulator-specific commands."
      sources={[
        {label:'Somatic Translation Contract v0.1',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/02_SOMATIC_TRANSLATION_CONTRACT.md'},
      ]}
    >
      <WorkSection kicker="INPUTS" title="Intent is interpreted against the actual body.">
        <WorkGrid items={[
          {label:'01',title:'ActionIntent',copy:'Explicit model-agnostic action semantics approved for downstream consideration.'},
          {label:'02',title:'Self model',copy:'The current embodied system and its declared body context.'},
          {label:'03',title:'Capability registry',copy:'Typed capabilities the body can expose without exposing raw device details.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="OUTPUT" title="The result remains hardware-agnostic.">
        <WorkFlow items={['Approved ActionIntent','Self Model + Capabilities','Somatic Translator','CapabilityPlan','Operation Safety Gate','Body Adapter']}/>
      </WorkSection>

      <WorkSection kicker="WHY THIS BOUNDARY" title="Motion planning and device control should not collapse into cognition.">
        <p>
          A cognition provider may be an LLM, VLM, VLA, deterministic planner or future model.
          None receives direct actuator authority merely because it produced a high-scoring proposal.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
