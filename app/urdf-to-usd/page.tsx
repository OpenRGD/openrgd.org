import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'CONVERSION REFERENCE',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Isaac Sim 6.x URDF importer + OpenUSD asset workflow',
  evidenceBoundary: 'Isaac Sim-specific conversion reference. USD is a broader ecosystem and different importers may produce different structure.',
  pageUrl: 'https://openrgd.org/urdf-to-usd',
  canonicalSource: 'https://docs.isaacsim.omniverse.nvidia.com/latest/importer_exporter/import_urdf.html',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF to USD',
  description: 'URDF to USD conversion in Isaac Sim: importer behavior, asset structure, mesh and collision options, fixed-joint handling and post-import review.',
  canonicalPath: '/urdf-to-usd',
  record: citationRecord,
})

export default function UrdfToUsdPage() {
  return (
    <ConceptPage
      eyebrow="URDF → USD"
      title="URDF can become a USD robot asset, but the target stage owns more than the source file did."
      lead="Isaac Sim provides an official URDF importer that converts URDF robot models into USD assets. Importer options can restructure meshes, collision and fixed-joint representation, so conversion settings belong in the provenance record."
      citationRecord={citationRecord}
      sources={[
        {label:'Isaac Sim — Import URDF',href:'https://docs.isaacsim.omniverse.nvidia.com/latest/importer_exporter/import_urdf.html'},
        {label:'Isaac Sim — URDF Importer API',href:'https://docs.isaacsim.omniverse.nvidia.com/latest/py/source/extensions/isaacsim.asset.importer.urdf/docs/api.html'},
        {label:'Isaac Sim — USD asset structure',href:'https://docs.isaacsim.omniverse.nvidia.com/latest/openusd_tuning_tutorials/tutorial_01_asset_structure.html'},
        {label:'URDF vs USD',href:'/urdf-vs-usd'},
      ]}
      related={[
        {href:'/urdf-vs-usd',title:'URDF vs USD',copy:'Compare source responsibility before conversion.'},
        {href:'/robot-description-conversion-losses',title:'Conversion Loss Matrix',copy:'Track semantics that may be transformed or added.'},
        {href:'/docs/import-usd',title:'OpenRGD USD Import',copy:'See the narrow auditable USD/USDA evidence subset OpenRGD currently imports.'},
      ]}
    >
      <ConceptSection kicker="IMPORT PATH" title="Isaac Sim exposes URDF-to-USD through UI and Python APIs.">
        <ConceptFlow items={['URDF','Importer config','URDF importer','USD asset','Isaac / OpenUSD workflow']}/>
      </ConceptSection>

      <ConceptSection kicker="TARGET REVIEW" title="USD introduces composition and physics structure beyond the URDF source.">
        <ConceptGrid items={[
          {label:'01',title:'Prim naming',copy:'Target naming rules can normalize source link or joint identifiers.'},
          {label:'02',title:'Asset structure',copy:'Geometry, metadata and physics can be reorganized into USD asset layers.'},
          {label:'03',title:'Fixed joints',copy:'Importer options can merge fixed structures in the target asset.'},
          {label:'04',title:'Collision',copy:'Collision geometry may be generated or transformed according to importer settings.'},
          {label:'05',title:'Physics schemas',copy:'Articulation and runtime tuning become target-side USD responsibilities.'},
          {label:'06',title:'Composition',copy:'References, payloads and variants can later evolve independently from the source URDF.'},
        ]}/>
      </ConceptSection>
    </ConceptPage>
  )
}
