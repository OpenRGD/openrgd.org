import type { Metadata } from 'next'
import FormatVsFormatPage from '@/components/format-vs-format-page'

export const metadata: Metadata = {
  title: 'URDF vs USD',
  description: 'Compare URDF and OpenUSD for robotics: robot-model structure versus scalable scene description, composition and physics schemas.',
  alternates: { canonical: '/urdf-vs-usd' },
}

export default function UrdfVsUsdPage() {
  return (
    <FormatVsFormatPage
      eyebrow="URDF VS USD"
      title="A robot model and a composable scenegraph solve different scales of the problem."
      lead="URDF is compact and robot-centric. OpenUSD is a general, scalable scene-description and composition platform with schemas spanning geometry, animation, lighting and physics."
      leftName="URDF"
      leftHref="/urdf"
      rightName="USD"
      rightHref="/usd"
      rows={[
        {dimension:'Primary focus',left:'Robot model structure.',right:'Composable scene description across many assets and domains.'},
        {dimension:'Composition',left:'Simple XML model organization; composition is mostly handled outside the core format.',right:'References, layers, variants and authored opinions are central concepts.'},
        {dimension:'Scale',left:'A single robot model is the natural unit.',right:'Large assemblies and complex scenes are natural units.'},
        {dimension:'Physics',left:'Selected physical robot properties.',right:'UsdPhysics provides rigid bodies, colliders, joints and simulation-scene schemas.'},
        {dimension:'Robotics tooling',left:'Deeply integrated into ROS workflows.',right:'Increasingly important in simulation, digital twins and asset pipelines.'},
        {dimension:'Conversion',left:'Can provide structural source evidence.',right:'Conversion may add scene organization but does not automatically create semantics missing from URDF.'},
      ]}
      chooseLeft={[
        'The primary artifact is a ROS robot model.',
        'Links, joints and robot-centric structure are the main concern.',
        'Simple human-readable interchange matters more than scene composition.',
        'Downstream tools already expect URDF.',
      ]}
      chooseRight={[
        'The robot is one asset inside a larger composed scene.',
        'References, variants or layered authoring are important.',
        'The same asset participates in simulation, digital-twin or content pipelines.',
        'UsdPhysics and richer scene semantics are required.',
      ]}
      useBoth={[
        'Use URDF as a source robot model and derive USD assets for simulation or scene pipelines.',
        'Track provenance so generated USD remains traceable to the structural source.',
        'Do not mistake URDF→USD conversion for semantic enrichment; capability and operational context still need their own representation.',
      ]}
      sources={[
        {label:'ROS — URDF documentation',href:'https://docs.ros.org/en/rolling/p/urdf'},
        {label:'OpenUSD — Documentation',href:'https://openusd.org/dev/index.html'},
        {label:'OpenUSD — Quickstart concepts',href:'https://openusd.org/files/USD_Quickstart_Guide.pdf'},
      ]}
    />
  )
}
