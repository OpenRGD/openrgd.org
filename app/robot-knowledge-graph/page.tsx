import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE EXPLAINER',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'KnowRob + IEEE 1872 family + OpenRGD.org evidence model',
  evidenceBoundary: 'Reference synthesis; the OpenRGD.org site knowledge graph is editorial infrastructure and is not automatically normative OpenRGD specification.',
  pageUrl: 'https://openrgd.org/robot-knowledge-graph',
  canonicalSource: 'https://github.com/OpenRGD/openrgd',
}

export const metadata: Metadata = referenceMetadata({
  title: 'Robot Knowledge Graph',
  description: 'A robot knowledge graph connects concrete robots, components, capabilities, tasks, evidence, provenance and environments using explicit relationships.',
  canonicalPath: '/robot-knowledge-graph',
  record: citationRecord,
})

export default function RobotKnowledgeGraphPage() {
  return (
    <ConceptPage
      eyebrow="ROBOT KNOWLEDGE GRAPH"
      title="Turn robot facts into connected, queryable evidence."
      lead="A robot knowledge graph instantiates concrete entities and relationships: which robot has which body, sensors, capabilities, source evidence, software, tasks and operational constraints."
      citationRecord={citationRecord}
      sources={[
        {label:'KnowRob — Knowledge processing for robots',href:'https://www.knowrob.org/knowrob'},
        {label:'KnowRob — Important concepts',href:'https://knowrob.org/doc/important_concepts'},
        {label:'KnowRob — Semantic Robot Description Language',href:'https://knowrob.org/doc/srdl2_tutorial'},
        {label:'IEEE 1872.2-2021 — Autonomous Robotics Ontology',href:'https://standards.ieee.org/ieee/1872.2/7094/'},
      ]}
      related={[
        {href:'/robot-ontology',title:'Robot Ontology',copy:'The vocabulary and conceptual model behind graph semantics.'},
        {href:'/robot-capability-model',title:'Robot Capability Model',copy:'A focused model for capability, skill, action and prerequisites.'},
        {href:'/robot-identity-provenance',title:'Robot Identity & Provenance',copy:'Keep entity identity, evidence, verification and derived interpretation distinct.'},
        {href:'/robots',title:'Robot Knowledge',copy:'Concrete robot entities already represented by OpenRGD.org.'},
      ]}
    >
      <ConceptSection kicker="ONTOLOGY VS GRAPH" title="The ontology defines the language; the graph contains the world.">
        <p>
          An ontology can define classes and relations such as Robot, Sensor, Task or Capability.
          A knowledge graph then instantiates concrete facts: a specific Unitree G1 has a particular model identity,
          is produced by a particular organization, has evidence from specific sources and may expose particular developer assets.
        </p>
      </ConceptSection>

      <ConceptSection kicker="GRAPH CONTENT" title="Embodied systems create relationships that flat tables hide.">
        <ConceptGrid items={[
          {label:'01',title:'Identity',copy:'Robot, model, configuration and organization identities.'},
          {label:'02',title:'Body',copy:'Links, joints, sensors, actuators and other physical components.'},
          {label:'03',title:'Capabilities',copy:'What actions or skills the embodiment can support under declared conditions.'},
          {label:'04',title:'Tasks + environment',copy:'Which tasks exist and what environmental context they require.'},
          {label:'05',title:'Provenance',copy:'Which source, version or observation supports each important assertion.'},
          {label:'06',title:'Lifecycle',copy:'How configuration, calibration, capability or evidence changes over time.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="EVIDENCE GRAPH" title="A useful graph should distinguish fact from interpretation.">
        <ConceptFlow items={['Primary source','Assertion','Entity / relation','Confidence + provenance','Derived view','AI / developer query']}/>
        <p>
          For OpenRGD, provenance is especially important: imported evidence, editorial summaries, experimental findings and candidate semantics
          should not collapse into one undifferentiated “truth” record.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD.ORG" title="The website already has the beginnings of this graph — but the site graph is not the standard.">
        <p>
          The shared catalog behind OpenRGD.org already separates canonical robot and organization entities from site-specific publication context.
          That infrastructure can grow into evidence-rich robot pages, but it should remain clearly distinct from the normative OpenRGD specification.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
