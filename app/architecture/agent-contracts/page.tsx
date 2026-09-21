import type { Metadata } from 'next'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'Agent Contracts',
  description: 'OpenRGD candidate contracts connecting cognition, somatic translation, Chronons, memory and DecisionTrace.',
  alternates: { canonical: '/architecture/agent-contracts' },
}

export default function AgentContractsPage() {
  return (
    <WorkPage
      eyebrow="ARCHITECTURE · CONTRACTS"
      title="Interfaces can converge before implementations do."
      lead="Agent Contracts v0.1.0 formalize the interfaces between cognition, somatic translation, temporal evidence, memory projection and ethical/audit traces without pretending those lineages are already one implementation."
      status="CONVERGENCE CANDIDATE"
      tone="candidate"
      boundary="The package is explicitly non-normative, not accepted and not eligible for a stable release until conformance, compatibility and governance requirements are satisfied."
      sources={[
        {label:'Agent Contracts v0.1.0',href:'https://github.com/OpenRGD/openrgd/tree/main/contracts/agent/v0.1.0'},
        {label:'Machine-readable status',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/STATUS.json'},
      ]}
    >
      <WorkSection kicker="FOUR INTERFACES" title="The candidate package freezes boundaries, not a monolith.">
        <WorkGrid items={[
          {label:'01',title:'Cognition',copy:'CognitionProposal carries ActionIntent plus optional structured cognitive-state references.'},
          {label:'02',title:'Somatic translation',copy:'Approved intent becomes a hardware-agnostic CapabilityPlan.'},
          {label:'03',title:'Chronon ↔ memory',copy:'Chronons remain canonical evidence; memories are rebuildable projections.'},
          {label:'04',title:'Ethos ↔ DecisionTrace',copy:'Policy evaluation and forensic ethical objects stay explicit and separately bound.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="GOVERNANCE" title="Candidate means breakable.">
        <p>
          Promotion requires complete schemas and normative text, explicit versioning and compatibility rules,
          producer/consumer conformance tests, a validated reference flow, no contradiction with the Canonical Core,
          an accepted governance decision and an updated machine-readable maturity state.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
