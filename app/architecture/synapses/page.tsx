import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Synapses',
  description: 'OpenRGD Synapses generate deterministic, non-actuating static interoperability artifacts.',
  canonicalPath: '/architecture/synapses',
})

export default function SynapsesPage() {
  return (
    <WorkPage
      eyebrow="ARCHITECTURE · INTEROPERABILITY"
      title="Synapses connect representations without crossing into runtime execution."
      lead="The current canonical toolchain implements deterministic static interoperability generation. ROS 2 is the active lifecycle-tested target."
      status="IMPLEMENTED"
      tone="implemented"
      boundary="Implemented here means static generation in OpenRGD/openrgd. The standalone OpenRGD/rgd-synapse repository is currently only a reserved empty surface and is not the source of this implementation."
      sources={[
        {label:'OpenRGD Static Export Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_EXPORT.md'},
        {label:'ROS 2 Synapse generator',href:'https://github.com/OpenRGD/openrgd/blob/main/src/openrgd/synapses/ros2/generator.py'},
      ]}
    >
      <WorkSection kicker="ROS 2 OUTPUT" title="Generate configuration, not motion.">
        <WorkGrid items={[
          {label:'01',title:'ros2_control.yaml',copy:'Deterministic controller and joint configuration from a verified machine bundle.'},
          {label:'02',title:'rgd_limits.xacro',copy:'Static limits exported with explicit units and source commitments.'},
          {label:'03',title:'export_manifest.json',copy:'Records bundle identity, exported joints, hardware completeness and output status.'},
          {label:'04',title:'rgd_hardware.xacro',copy:'Emitted only when every joint has complete explicit HAL evidence and one system driver plugin.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="FAIL-CLOSED EXPORT" title="Imported bodies cannot inherit hardware bindings by name collision.">
        <p>
          When a body comes from partial imported evidence, actuator mappings and driver bindings from a seed are intentionally withheld.
          The export can succeed as CONFIGURATION_ONLY without pretending the hardware layer is complete.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
