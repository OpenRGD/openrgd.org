import type { Metadata } from 'next'
import WorkPage, { WorkFlow, WorkGrid, WorkSection } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'SO-101 Embodiment Lab',
  description: 'OpenRGD physical embodiment experiments using SO-101 leader/follower teleoperation and commissioning.',
  alternates: { canonical: '/research/so101-embodiment-lab' },
}

export default function So101LabPage() {
  return (
    <WorkPage
      eyebrow="EXPERIMENT · SO-101"
      title="Use a real body to pressure-test abstract contracts."
      lead="SO-101 leader/follower hardware has been used as a practical reference platform for teleoperation, calibration, commissioning and causal-flow experiments around OpenRGD."
      status="EXPERIMENTAL"
      tone="experimental"
      boundary="SO-101 / LeRobot is a reference experiment, not part of the normative OpenRGD core. Physical findings can inform Contract Deltas but do not silently redefine the standard."
      sources={[
        {label:'SO-101 causal-flow example',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/examples/so101-causal-flow.json'},
        {label:'Agent Contracts v0.1.0',href:'https://github.com/OpenRGD/openrgd/tree/main/contracts/agent/v0.1.0'},
      ]}
    >
      <WorkSection kicker="LAB MILESTONES" title="Build the body path before claiming intelligence.">
        <WorkGrid items={[
          {label:'01',title:'Leader / follower teleoperation',copy:'Physical synchronization provides a repeatable human-driven reference trajectory.'},
          {label:'02',title:'Persistent calibration',copy:'Leader and follower calibrations are saved and reused across sessions.'},
          {label:'03',title:'Static hold',copy:'Commissioning verifies that the body can maintain controlled physical state.'},
          {label:'04',title:'Small-signal motion',copy:'Low-amplitude tests probe direction, scaling and stability before larger movement.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="CAUSAL FLOW" title="The robot is useful because it exposes every boundary.">
        <WorkFlow items={['Physical observation','Cognition proposal','ActionIntent','Somatic plan','Safety decision','DecisionTrace','Action result','Learning result']}/>
      </WorkSection>

      <WorkSection kicker="RESEARCH VALUE" title="Hardware turns hidden assumptions into measurable failures.">
        <p>
          Unit conventions, calibration, latency, actuator limits and observation timing become concrete on a real arm.
          The point of the lab is not to make SO-101 canonical; it is to reveal which OpenRGD interfaces survive contact with embodiment.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
