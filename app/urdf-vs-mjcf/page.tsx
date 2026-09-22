import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import FormatVsFormatPage from '@/components/format-vs-format-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE COMPARISON',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'ROS URDF + current MuJoCo MJCF documentation',
  evidenceBoundary: 'Responsibility comparison between portable ROS robot modeling and MuJoCo-native dynamics; no universal winner is asserted.',
  pageUrl: 'https://openrgd.org/urdf-vs-mjcf',
  canonicalSource: 'https://mujoco.readthedocs.io/en/latest/XMLreference.html',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF vs MJCF',
  description: 'Compare URDF and MJCF: ROS-oriented robot description versus MuJoCo-native dynamic-system modeling.',
  canonicalPath: '/urdf-vs-mjcf',
  record: citationRecord,
})

export default function UrdfVsMjcfPage() {
  return (
    <FormatVsFormatPage
      eyebrow="URDF VS MJCF"
      title="Interchange-oriented robot structure or MuJoCo-native dynamic modeling?"
      lead="MuJoCo supports URDF because many robots already use it, but its documentation states that URDF represents only a subset of the model elements available through MJCF."
      leftName="URDF"
      leftHref="/urdf"
      rightName="MJCF"
      rightHref="/mjcf"
      rows={[
        {dimension:'Primary focus',left:'Portable robot model structure in the ROS ecosystem.',right:'Native high-level modeling for MuJoCo dynamic systems.'},
        {dimension:'Kinematic tree',left:'Links are declared and connected by parent/child joints.',right:'Bodies are nested directly; joints create degrees of freedom inside bodies.'},
        {dimension:'Multiple joints',left:'Composite motion can require additional structure.',right:'A body can contain multiple joints directly.'},
        {dimension:'Simulator features',left:'Limited to what URDF and extensions can represent.',right:'Direct access to MuJoCo actuators, tendons, sensors, defaults and simulation options.'},
        {dimension:'Compiler semantics',left:'Consumed by ROS/tool-specific parsers.',right:'MJCF is compiled into MuJoCo’s low-level mjModel.'},
        {dimension:'Portability',left:'Broad ROS ecosystem portability.',right:'Optimized for MuJoCo fidelity and capabilities.'},
      ]}
      chooseLeft={[
        'ROS interoperability and common robot-description workflows are the priority.',
        'You want a canonical structural model reused across many tools.',
        'The simulator-specific features of MuJoCo are not required in the source artifact.',
        'Robot description portability matters more than simulator-native expressiveness.',
      ]}
      chooseRight={[
        'MuJoCo is the primary simulator and you need its full feature set.',
        'Actuators, tendons, defaults or advanced dynamic-model features belong in the source.',
        'You want to avoid encoding simulator-native concepts indirectly through URDF extensions.',
        'High-fidelity MuJoCo behavior matters more than maintaining one portable source format.',
      ]}
      useBoth={[
        'Maintain a portable URDF and compile/convert it into MJCF as the MuJoCo-specific derivative.',
        'After conversion, treat MJCF-specific edits as additional simulator evidence rather than silently back-projecting them into URDF.',
        'Preserve semantic identity and capabilities outside both formats when they exceed structural/simulation responsibilities.',
      ]}
      sources={[
        {label:'MuJoCo — Modeling',href:'https://mujoco.readthedocs.io/en/latest/modeling.html'},
        {label:'MuJoCo — XML Reference',href:'https://mujoco.readthedocs.io/en/latest/XMLreference.html'},
        {label:'ROS — URDF documentation',href:'https://docs.ros.org/en/rolling/p/urdf'},
      ]}
      citationRecord={citationRecord}
    />
  )
}
