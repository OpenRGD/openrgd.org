import type { Metadata } from 'next'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'Robot Chronograf',
  description: 'Research and candidate formalization for clock domains, uncertainty and temporal anchoring in OpenRGD embodied systems.',
  alternates: { canonical: '/research/robot-chronograf' },
}

export default function RobotChronografPage() {
  return (
    <WorkPage
      eyebrow="RESEARCH · ROBOT TIME"
      title="Embodied history needs a clock model, not just timestamps."
      lead="Robot Chronograf research treats time measurement, clock-domain identity, uncertainty and anchor resolution as explicit infrastructure for embodied evidence."
      status="FORMALIZATION CANDIDATE"
      tone="candidate"
      boundary="The ownership model is formalized in the candidate temporal profile. Production signing, global attestation and cross-robot temporal infrastructure are not claimed as implemented by the core repository."
      sources={[
        {label:'Temporal / Chronon Interoperability Profile',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/00_TEMPORAL_CHRONON_PROFILE.md'},
      ]}
    >
      <WorkSection kicker="WHY CLOCK DOMAINS" title="A number is not a meaningful time coordinate without its clock context.">
        <WorkGrid items={[
          {label:'01',title:'Clock domain',copy:'Identifies the origin, timescale, clock kind and reboot/session context.'},
          {label:'02',title:'TimeAtom',copy:'Measured coordinate including seconds, subsecond precision, timescale and uncertainty.'},
          {label:'03',title:'AnchorRef64',copy:'Opaque handle that resolves to richer temporal evidence instead of pretending 64 bits contain the whole timestamp.'},
          {label:'04',title:'Temporal barcode',copy:'Event-time envelope binding time, channel, runtime loop, domain and event kind.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="OWNERSHIP" title="Chronograf measures time; it does not own memory.">
        <p>
          In the candidate model, Robot Chronograf owns measurement and anchors. RGD Physics owns Chronon semantics.
          The embodied runtime owns memory projection and recall. This prevents timestamp infrastructure from becoming an accidental memory system.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
