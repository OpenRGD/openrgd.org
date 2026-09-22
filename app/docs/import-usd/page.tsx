import type { Metadata } from 'next'
import DeveloperDocPage, { CommandBlock, DevGrid, DevSection } from '@/components/developer-doc-page'

export const metadata: Metadata = {
  title: 'Import USD / USDA',
  description: 'Import the current auditable OpenRGD text USDA / UsdPhysics subset while preserving units, provenance and explicit parser limitations.',
  alternates: { canonical: '/docs/import-usd' },
}

export default function ImportUsdPage() {
  return (
    <DeveloperDocPage
      eyebrow="DEVELOPERS · IMPORT USD"
      title="A narrow USDA importer is safer than a fake full USD engine."
      lead="The current importer accepts UTF-8 text USDA, including text .usd files beginning with #usda, and extracts a deliberately restricted subset of authored UsdPhysics joint evidence."
      boundary="Text USDA is implemented and lifecycle-tested for a narrow subset. Binary USD/USDC is not supported. The parser does not perform layer composition, reference/payload resolution, variant evaluation or full OpenUSD SDK semantics."
      sources={[
        {label:'OpenRGD Import Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'},
        {label:'OpenRGD CLI Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'},
        {label:'OpenUSD — UsdPhysics',href:'https://openusd.org/dev/api/usd_physics_page_front.html'},
      ]}
      related={[
        {href:'/docs/import-urdf',title:'Import URDF',copy:'Import structural robot evidence from URDF.'},
        {href:'/usd',title:'USD / OpenUSD',copy:'Understand the larger composition system this lightweight parser does not replace.'},
        {href:'/docs/validation',title:'Validation',copy:'Verify the resulting OpenRGD profile after explicit enrichment.'},
      ]}
    >
      <DevSection kicker="COMMAND" title="Import text USDA evidence.">
        <CommandBlock title="USDA import" code={'rgd import robot.usda --out partial-robot'} />
      </DevSection>

      <DevSection kicker="PARSER PROFILE" title="The current subset is intentionally auditable.">
        <DevGrid items={[
          {label:'01',title:'Stage metadata',copy:'defaultPrim, metersPerUnit, kilogramsPerUnit and upAxis when authored.'},
          {label:'02',title:'Joint schemas',copy:'PhysicsRevoluteJoint and PhysicsPrismaticJoint.'},
          {label:'03',title:'Body relations',copy:'physics:body0 and physics:body1 are preserved as source relationships.'},
          {label:'04',title:'Axes + limits',copy:'X/Y/Z axes and authored lower/upper limits.'},
          {label:'05',title:'Local frames',copy:'Directly authored local joint frames when present.'},
          {label:'06',title:'Drives',copy:'Authored maxForce, stiffness and damping for supported angular/linear drives.'},
        ]}/>
      </DevSection>

      <DevSection kicker="UNIT CONVERSION" title="Convert only when authored metadata justifies it.">
        <CommandBlock
          title="conversion rules"
          code={'revolute position   degrees → radians\nprismatic position  stage distance × metersPerUnit → metres\nlinear maxForce      requires metersPerUnit + kilogramsPerUnit\nangular maxForce     requires metersPerUnit + kilogramsPerUnit'}
        />
        <p>
          Raw source values remain available in <code>source_usd_joint_map</code>. Missing required unit metadata is not silently replaced.
        </p>
      </DevSection>

      <DevSection kicker="NOT SUPPORTED" title="Use a full OpenUSD adapter when composition matters.">
        <p>
          The lightweight parser does not compose layers, resolve references or payloads, evaluate variants,
          resolve inherited opinions, evaluate complete transform stacks or comprehensively implement schema fallback behavior.
        </p>
      </DevSection>

      <DevSection kicker="BINARY USD" title="USDC is outside the current importer.">
        <p>
          Binary USD/USDC is not supported by this parser. Convert to USDA for the current path or use a future full OpenUSD SDK adapter.
        </p>
      </DevSection>
    </DeveloperDocPage>
  )
}
