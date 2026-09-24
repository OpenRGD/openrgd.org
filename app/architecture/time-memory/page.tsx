import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Time and Memory',
  description: 'OpenRGD candidate ownership model for Chronograf time, Chronon history and memory projections.',
  canonicalPath: '/architecture/time-memory',
})

export default function TimeMemoryPage() {
  return (
    <WorkPage
      eyebrow="ARCHITECTURE · TIME + MEMORY"
      title="History is evidence. Memory is an interpretation of that history."
      lead="The candidate temporal architecture separates measured time, canonical life history and rebuildable memory projections."
      status="FORMALIZATION CANDIDATE"
      tone="candidate"
      boundary="This ownership model is formalized in the candidate agent contracts. It is not yet an accepted stable OpenRGD contract."
      sources={[
        {label:'Temporal / Chronon Interoperability Profile',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/00_TEMPORAL_CHRONON_PROFILE.md'},
        {label:'Chronon ↔ AION Memory Contract',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/03_CHRONON_MEMORY_CONTRACT.md'},
      ]}
    >
      <WorkSection kicker="OWNERSHIP" title="Time, history and memory are deliberately separate.">
        <WorkGrid items={[
          {label:'01',title:'Robot Chronograf',copy:'Owns time measurement, clock domains, uncertainty and temporal anchor issuance/resolution.'},
          {label:'02',title:'RGD Physics',copy:'Owns Chronon semantics, causal/physics metadata and Aion payload semantics in the candidate model.'},
          {label:'03',title:'Embodied Runtime',copy:'Owns agent goals, cognition adapters, capability execution and memory projection/recall.'},
          {label:'04',title:'Projection stores',copy:'Facts, skills, episodes, summaries and retrieval indexes are derived and rebuildable.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="MEMORY MODEL" title="Later interpretation must not rewrite old evidence.">
        <p>
          Chronons are append-only canonical evidence. Episodic, semantic, procedural, autobiographical and relationship memories
          are projections that may change, consolidate or be rebuilt while retaining references to the evidence they came from.
        </p>
      </WorkSection>

      <WorkSection kicker="ONEIRIC PROVENANCE" title="Dreamed experience is not physical history.">
        <p>
          Synthetic or imagined experiences may produce lessons or skill candidates, but the candidate contract requires them
          to remain distinguishable from observed physical events unless later validated physically.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
