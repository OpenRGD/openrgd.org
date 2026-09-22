import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Robot Ontology',
  description: 'Robot ontologies provide formal vocabularies for representing robots, autonomous systems, tasks, relations and reasoning across heterogeneous robotics systems.',
  alternates: { canonical: '/robot-ontology' },
}

export default function RobotOntologyPage() {
  return (
    <ConceptPage
      eyebrow="ROBOT ONTOLOGY"
      title="A shared vocabulary is the first layer of semantic interoperability."
      lead="A robot ontology defines concepts, relations and axioms so robots, software and humans can refer to the same domain knowledge with less ambiguity."
      citationRecord={{
        maturity:'REFERENCE EXPLAINER',
        lastVerified:'22 Sep 2026',
        sourceVersion:'IEEE 1872 family + current P1872 project',
        evidenceBoundary:'Explains existing ontology work and OpenRGD positioning; does not claim OpenRGD replaces IEEE ontology standards.',
      }}
      sources={[
        {label:'IEEE 1872-2015 — Ontologies for Robotics and Automation',href:'https://standards.ieee.org/ieee/1872/5354/'},
        {label:'IEEE P1872 — Draft Ontologies for Robotics and Automation',href:'https://standards.ieee.org/ieee/1872/12250/'},
        {label:'IEEE 1872.2-2021 — Autonomous Robotics Ontology',href:'https://standards.ieee.org/ieee/1872.2/7094/'},
        {label:'IEEE 1872.1-2024 — Robot Task Representation',href:'https://standards.ieee.org/ieee/1872.1/6993/'},
        {label:'NIST — A Suite of Ontologies for Robotics and Automation',href:'https://www.nist.gov/publications/suite-ontologies-robotics-and-automation'},
      ]}
      related={[
        {href:'/robot-knowledge-graph',title:'Robot Knowledge Graph',copy:'Move from shared vocabulary to concrete entities and evidence.'},
        {href:'/robot-capability-model',title:'Robot Capability Model',copy:'Represent what an embodiment can do and under which constraints.'},
        {href:'/robot-description-formats',title:'Robot Description Formats',copy:'Understand how structural files relate to semantic representations.'},
      ]}
    >
      <ConceptSection kicker="FORMAL KNOWLEDGE" title="Ontology is about meaning, not just field names.">
        <p>
          IEEE 1872 introduced a core ontology for robotics and automation as a formal reference vocabulary for knowledge representation
          and reasoning. The surrounding IEEE 1872 family extends this direction into autonomous robotics and robot task representation.
        </p>
        <p>
          The goal is not to replace robot-description files. An ontology supplies a shared conceptual layer: what is a robot,
          a component, a task, an environment, a capability or a relation, and how those concepts connect.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WHY IT MATTERS" title="Heterogeneous robots need more than compatible syntax.">
        <ConceptGrid items={[
          {label:'01',title:'Shared vocabulary',copy:'Different systems can use consistent concepts instead of vendor-specific labels.'},
          {label:'02',title:'Reasoning',copy:'Formal relations can support inference over robot, task and environment knowledge.'},
          {label:'03',title:'Autonomy',copy:'Autonomous-system concepts can be represented independently from one hardware vendor.'},
          {label:'04',title:'Tasks',copy:'Task knowledge can be structured and communicated across planners and system layers.'},
          {label:'05',title:'Multi-robot',copy:'Shared semantics become increasingly important when multiple robots coordinate.'},
          {label:'06',title:'Interoperability',copy:'Semantic agreement can complement transport, middleware and file-format compatibility.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="DESCRIPTION → SEMANTICS" title="A structural model can feed an ontology without becoming one.">
        <p>
          KnowRob’s Semantic Robot Description Language is an important precedent: it imports robot hardware structure from URDF,
          annotates it with semantic information and adds representations for software and capabilities so the system can reason about configuration.
        </p>
        <ConceptFlow items={['URDF / source description','Structural entities','Ontology concepts','Semantic annotations','Reasoning','Task / capability queries']}/>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD PERSPECTIVE" title="OpenRGD should align with ontology work, not pretend it invented semantics.">
        <p>
          OpenRGD’s opportunity is practical: connect evidence-backed embodiment data, operational constraints, capabilities and provenance
          to modern Physical AI and Embodied AI workflows. Existing IEEE and KnowRob work should be treated as reference context and potential interoperability targets.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
