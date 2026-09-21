import type { Metadata } from 'next'
import WorkPage, { WorkFlow, WorkGrid, WorkSection } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'Runtime Boundary',
  description: 'The adopted OpenRGD boundary between canonical semantic tooling and physical embodied execution.',
  alternates: { canonical: '/architecture/runtime-boundary' },
}

export default function RuntimeBoundaryPage() {
  return (
    <WorkPage
      eyebrow="ARCHITECTURE · RUNTIME"
      title="The canonical repository stops before physical execution."
      lead="OpenRGD/openrgd owns the standard, contracts, validation, compilation and static interoperability tooling. Physical execution belongs to an independently governed embodied runtime and hardware-specific Body Adapters."
      status="ADOPTED"
      tone="adopted"
      boundary="This separation is adopted repository policy. The canonical rgd toolchain deliberately does not ship a physical embodied runtime or hardware adapter implementation."
      sources={[
        {label:'OpenRGD Runtime Boundary',href:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md'},
        {label:'Canonical repository structure',href:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'},
      ]}
    >
      <WorkSection kicker="CANONICAL SEPARATION" title="Description and execution have different owners.">
        <WorkGrid items={[
          {label:'01',title:'OpenRGD core',copy:'Specification, cross-component contracts, validators, compilers and static import/export tooling.'},
          {label:'02',title:'Embodied runtime',copy:'Intent ingestion, somatic translation, safety gating, execution, runtime lifecycle and learning mediation.'},
          {label:'03',title:'Body adapters',copy:'Hardware-specific buses, device IDs, units, middleware messages and actuator behavior.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="EXECUTION PATH" title="A proposal never becomes a motor command by implication.">
        <WorkFlow items={['CognitionProposal','ActionIntent','Somatic Translator','CapabilityPlan','Operation Safety Gate','DecisionTrace','Body Adapter','Hardware']}/>
      </WorkSection>

      <WorkSection kicker="FAIL CLOSED" title="Historical runtime commands remain visible but blocked.">
        <p>
          The canonical CLI can report runtime status, while legacy physical adapter commands are retained only as a compatibility boundary.
          They fail deterministically instead of importing middleware libraries, opening device connections or issuing actuator commands.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
