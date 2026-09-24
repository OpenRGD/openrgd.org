import { standardMetadata } from '@/lib/seo/provenance'
import DeveloperDocPage, { CommandBlock, DevGrid, DevSection } from '@/components/developer-doc-page'

export const metadata = standardMetadata({
  title: 'Import URDF',
  description: 'Import URDF into OpenRGD as partial, source-supported Foundation evidence without inventing safety, identity, cognition or hardware bindings.',
  canonicalPath: '/docs/import-urdf',
})

export default function ImportUrdfPage() {
  return (
    <DeveloperDocPage
      eyebrow="DEVELOPERS · IMPORT URDF"
      title="Extract what the URDF proves. Invent nothing."
      lead="The current URDF importer creates a partial, non-actuating OpenRGD Foundation profile from source-supported structural and physical evidence."
      boundary="URDF import is implemented and lifecycle-tested. It does not create kernel identity, safety policy, alignment, cognition, skills, HAL bindings, controller configuration or hardware authorization."
      sources={[
        {label:'OpenRGD Import Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'},
        {label:'OpenRGD CLI Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md'},
      ]}
      related={[
        {href:'/docs/import-usd',title:'Import USD / USDA',copy:'Use the narrow auditable UsdPhysics text subset.'},
        {href:'/docs/validation',title:'Validation',copy:'Verify source identity and selected profile modules.'},
        {href:'/robot-description',title:'Robot Description',copy:'Understand the boundary between structural evidence and semantic embodiment.'},
      ]}
    >
      <DevSection kicker="COMMAND" title="Import to a partial profile.">
        <CommandBlock title="URDF import" code={'rgd import robot.urdf --out partial-robot'} />
      </DevSection>

      <DevSection kicker="OUTPUT" title="Only two Foundation modules are emitted.">
        <CommandBlock
          title="partial-robot"
          code={'partial-robot/\n└── spec/\n    └── 01_foundation/\n        ├── description.jsonc\n        └── actuation_dynamics.jsonc'}
        />
      </DevSection>

      <DevSection kicker="SUPPORTED EVIDENCE" title="The importer preserves source facts that it can justify.">
        <DevGrid items={[
          {label:'01',title:'Robot + links',copy:'Robot name, links and supported structural relationships.'},
          {label:'02',title:'Inertials',copy:'Mass, origin and complete inertia tensor when present.'},
          {label:'03',title:'Joint topology',copy:'Joint name/type, parent-child connectivity, origin and axis.'},
          {label:'04',title:'Limits',copy:'Declared revolute/prismatic limits using type-correct units.'},
          {label:'05',title:'Dynamics',copy:'Source damping and friction when authored.'},
          {label:'06',title:'Mimic',copy:'Mimic relationships remain explicit rather than inferred.'},
        ]}/>
      </DevSection>

      <DevSection kicker="FAIL CLOSED" title="Missing or malformed data does not receive a convenient default.">
        <p>
          Absent numeric values remain absent. Malformed or non-finite physical values fail import.
          The importer does not infer transmissions, controllers, vendor plugins, bus addresses or calibration.
        </p>
      </DevSection>

      <DevSection kicker="OPTIONAL ENRICHMENT" title="Enrichment is a separate explicit operation.">
        <CommandBlock title="Seed enrichment" code={'rgd alive robot.urdf --out RGD-robot --seed default'} />
        <p>
          The resulting project records <code>seed_compatibility_status = UNVERIFIED</code>.
          A valid source-tree hash does not prove that inherited calibration, HAL, safety or behavioral assumptions fit the imported body.
        </p>
      </DevSection>
    </DeveloperDocPage>
  )
}
