import { standardMetadata } from '@/lib/seo/provenance'
import DeveloperDocPage, { CommandBlock, DevGrid, DevSection } from '@/components/developer-doc-page'

export const metadata = standardMetadata({
  title: 'Validation',
  description: 'Validate OpenRGD source integrity and selected modules with rgd hash, rgd check and deterministic non-actuating rgd boot.',
  canonicalPath: '/docs/validation',
})

export default function ValidationPage() {
  return (
    <DeveloperDocPage
      eyebrow="DEVELOPERS · VALIDATION"
      title="Verify the source tree before trusting derived context."
      lead="OpenRGD separates content identity, static profile validation and grounding-context generation into explicit commands with different guarantees."
      boundary="Validation proves source/profile properties within the declared checks. It does not assess hardware compatibility, operational safety, embodied-runtime readiness or permission to actuate."
      sources={[
        {label:'OpenRGD CLI Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'},
        {label:'Canonical repository structure',href:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'},
      ]}
      related={[
        {href:'/docs/import-urdf',title:'Import URDF',copy:'Create evidence-only Foundation modules.'},
        {href:'/docs/import-usd',title:'Import USD / USDA',copy:'Create evidence-only Foundation modules from supported USDA.'},
        {href:'/docs/export-ros2',title:'Export ROS 2',copy:'Compile and generate deterministic static interoperability artifacts.'},
      ]}
    >
      <DevSection kicker="HASH" title="Commit the selected modular source tree.">
        <CommandBlock title="verify source root" code={'rgd hash\nrgd hash --output json'} />
        <p>
          A mismatch exits non-zero. Use <code>rgd hash --write</code> only for an intentional source change.
          The integrity profile is <code>OPENRGD_SOURCE_TREE_SHA256_V1</code>.
        </p>
      </DevSection>

      <DevSection kicker="CHECK" title="Validate canonical structure and selected modules.">
        <CommandBlock title="profile validation" code={'rgd check\nrgd check --output json\nrgd check spec/00_core/kernel.jsonc --output json'} />
        <DevGrid items={[
          {label:'01',title:'Kernel path',copy:'Requires the canonical spec/00_core/kernel.jsonc path.'},
          {label:'02',title:'Source root',copy:'Requires the declared canonical source-tree root to match.'},
          {label:'03',title:'Identity',copy:'Requires a non-empty kernel identity.'},
          {label:'04',title:'References',copy:'Module references must be safe, unique and relative.'},
          {label:'05',title:'Presence',copy:'Every selected module must exist.'},
          {label:'06',title:'Parsing',copy:'Each selected module must parse as a JSON object without non-finite values.'},
        ]}/>
      </DevSection>

      <DevSection kicker="BOOT" title="Build deterministic context without crossing into execution.">
        <CommandBlock title="grounding context" code={'rgd boot\nrgd boot --output json'} />
        <CommandBlock
          title="physical execution state"
          code={'physical_execution.assessed = false\nphysical_execution.authorized = false\nphysical_execution.status = NOT_AUTHORIZED_BY_BOOT'}
        />
        <p>
          <code>rgd boot</code> is not a hardware bootloader, runtime startup command, safety authorization or claim that the robot is ready.
        </p>
      </DevSection>
    </DeveloperDocPage>
  )
}
