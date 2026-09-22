import type { Metadata } from 'next'
import DeveloperDocPage, { CommandBlock, DevGrid, DevSection } from '@/components/developer-doc-page'

export const metadata: Metadata = {
  title: 'Export ROS 2',
  description: 'Generate deterministic, non-actuating ROS 2 configuration from a verified OpenRGD machine bundle.',
  alternates: { canonical: '/docs/export-ros2' },
}

export default function ExportRos2Page() {
  return (
    <DeveloperDocPage
      eyebrow="DEVELOPERS · ROS 2 EXPORT"
      title="Generate static interoperability artifacts — not a running robot."
      lead="The active ROS 2 Synapse verifies a compiled OpenRGD bundle and generates deterministic configuration, limits and an explicit hardware-binding manifest."
      boundary="ROS 2 static export is implemented and lifecycle-tested. It does not launch ros2_control, publish actuator commands, open device buses or grant physical execution authority. Isaac export is not implemented."
      sources={[
        {label:'OpenRGD Static Export Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_EXPORT.md'},
        {label:'ROS 2 Synapse generator',href:'https://github.com/OpenRGD/openrgd/blob/main/src/openrgd/synapses/ros2/generator.py'},
        {label:'OpenRGD CLI Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'},
      ]}
      related={[
        {href:'/docs/validation',title:'Validation',copy:'Verify source integrity before generating artifacts.'},
        {href:'/architecture/synapses',title:'Synapses',copy:'Understand the static interoperability architecture.'},
        {href:'/interoperability',title:'Interoperability',copy:'See where static export sits in the wider robotics stack.'},
      ]}
    >
      <DevSection kicker="REQUIRED SEQUENCE" title="Verify, compile, export.">
        <CommandBlock
          title="ROS 2 export"
          code={'rgd hash\nrgd compile-spec\nrgd export ros2 --out export/ros2'}
        />
      </DevSection>

      <DevSection kicker="GENERATED ARTIFACTS" title="Every successful export explains what it produced.">
        <DevGrid items={[
          {label:'01',title:'ros2_control.yaml',copy:'Static controller / joint configuration.'},
          {label:'02',title:'rgd_limits.xacro',copy:'Deterministic exported joint limits and units.'},
          {label:'03',title:'export_manifest.json',copy:'Source root, bundle digest, robot identity, joint set and completeness status.'},
          {label:'04',title:'rgd_hardware.xacro',copy:'Generated only when every joint has complete explicit HAL interfaces and one system driver plugin.'},
        ]}/>
      </DevSection>

      <DevSection kicker="EXPORT STATUS" title="Incomplete hardware evidence remains visible.">
        <CommandBlock title="possible statuses" code={'CONFIGURATION_ONLY\nHARDWARE_BOUND'} />
        <p>
          <code>CONFIGURATION_ONLY</code> is a successful static export with incomplete or intentionally withheld hardware bindings.
          It is not permission to execute.
        </p>
      </DevSection>

      <DevSection kicker="IMPORTED BODY ISOLATION" title="Joint-name collisions cannot smuggle hardware mappings into an imported body.">
        <CommandBlock
          title="binding rule"
          code={'source-derived joint topology + limits\n              ↓\nstatic configuration export\n\nseed actuator / HAL bindings\n              ✕ not inherited by name collision'}
        />
      </DevSection>

      <DevSection kicker="UNAVAILABLE TARGET" title="Isaac export fails explicitly.">
        <CommandBlock title="not implemented" code={'rgd export isaac\n# exits explicitly with code 2'} />
        <p>The historical Isaac generator was a placeholder and is not advertised as an active target.</p>
      </DevSection>
    </DeveloperDocPage>
  )
}
