import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'RGD Physics',
  description: 'OpenRGD research into physical and causal semantics as a substrate for world modeling and embodied feasibility checks.',
  canonicalPath: '/research/rgd-physics',
})

export default function RgdPhysicsPage() {
  return (
    <WorkPage
      eyebrow="RESEARCH · RGD PHYSICS"
      title="A physical and causal substrate — not the whole world model."
      lead="RGD Physics is explored as the layer that can encode physical/causal semantics, Chronon/Aion state and rapid feasibility checks beneath higher-level world-model orchestration."
      status="RESEARCH"
      tone="research"
      boundary="RGD Physics is an external implementation candidate in the canonical architecture. It is not shipped by OpenRGD/openrgd and should not be read as a currently released OpenRGD runtime component."
      sources={[
        {label:'Canonical repository structure',href:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'},
        {label:'Temporal / Chronon candidate profile',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/00_TEMPORAL_CHRONON_PROFILE.md'},
      ]}
    >
      <WorkSection kicker="RESEARCH ROLE" title="Physics can verify a proposed future without owning cognition.">
        <WorkGrid items={[
          {label:'01',title:'Physical semantics',copy:'Typed physical state and constraints associated with embodied entities.'},
          {label:'02',title:'Causal envelope',copy:'Represent which outcomes are physically plausible or causally connected.'},
          {label:'03',title:'Feasibility checking',copy:'Fast checks that can reject impossible or unsafe speculative branches.'},
          {label:'04',title:'Chronon / Aion',copy:'Candidate ownership of canonical historical state envelopes and payload semantics.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="WORLD MODELS" title="Imagine broadly, verify narrowly.">
        <p>
          The research split is deliberate: a learned or semantic world model may imagine possible futures,
          while RGD Physics can act as a physical/causal verifier. Neither is automatically the embodied runtime.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
