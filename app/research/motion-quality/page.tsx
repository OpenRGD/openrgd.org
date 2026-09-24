import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Motion Quality',
  description: 'OpenRGD experiments on smooth robot movement, trajectory quality and clean separation between motion algorithms and interoperability layers.',
  canonicalPath: '/research/motion-quality',
})

export default function MotionQualityPage() {
  return (
    <WorkPage
      eyebrow="EXPERIMENT · MOTION"
      title="Smooth motion is a systems property, not one interpolation function."
      lead="The rgd-motion experimentation track explores trajectory quality, continuity and fluidity while keeping motion algorithms separable from the canonical OpenRGD standard."
      status="EXPERIMENTAL"
      tone="experimental"
      boundary="Motion-quality experiments are not normative OpenRGD behavior. The design goal is to keep the motion layer clean and integrate it through explicit Synapse/runtime boundaries rather than embedding robot-specific planning into the standard."
      sources={[
        {label:'Somatic Translation Contract',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/02_SOMATIC_TRANSLATION_CONTRACT.md'},
        {label:'Canonical Runtime Boundary',href:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md'},
      ]}
    >
      <WorkSection kicker="QUALITY DIMENSIONS" title="Fluidity emerges from several constraints at once.">
        <WorkGrid items={[
          {label:'01',title:'Continuity',copy:'Position, velocity and acceleration transitions should avoid unnecessary discontinuities.'},
          {label:'02',title:'Timing',copy:'Trajectory pacing must respect control-loop cadence, latency and downstream execution.'},
          {label:'03',title:'Constraints',copy:'Joint limits, reversibility, risk and body-specific operating envelopes bound movement.'},
          {label:'04',title:'Observation',copy:'Motion quality depends on feedback and measured outcomes, not only planned curves.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="ARCHITECTURAL LESSON" title="Do not pollute a reusable motion layer with one integration.">
        <p>
          Experimental integration work has been pushed toward Synapse/runtime adapters so the motion library can remain focused on motion semantics and algorithms.
          That separation mirrors the broader OpenRGD principle: capabilities upstream, device-specific execution downstream.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
