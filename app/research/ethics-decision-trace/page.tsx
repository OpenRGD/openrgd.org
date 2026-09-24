import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkFlow, WorkGrid, WorkSection } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Ethics and DecisionTrace',
  description: 'OpenRGD candidate research on policy evaluation, DecisionTrace and separate forensic Ethos artifacts.',
  canonicalPath: '/research/ethics-decision-trace',
})

export default function EthicsDecisionTracePage() {
  return (
    <WorkPage
      eyebrow="RESEARCH · ETHICS + AUDIT"
      title="Audit the decision without pretending an artifact can prove moral correctness."
      lead="The candidate Ethos / DecisionTrace contract separates policy evaluation, structured evidence and optional forensic ethical artifacts."
      status="CANDIDATE"
      tone="candidate"
      boundary="A full Rate My Ethics / constitutional engine is not claimed as implemented by the canonical core. The current work formalizes the interface and audit semantics."
      sources={[
        {label:'Ethos ↔ Chronon / DecisionTrace Contract',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/contracts/04_ETHOS_DECISIONTRACE_CONTRACT.md'},
        {label:'Agent Contracts README',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/README.md'},
      ]}
    >
      <WorkSection kicker="DECISION TRACE" title="Policy outcomes remain structured and inspectable.">
        <WorkGrid items={[
          {label:'01',title:'ALLOW',copy:'The action passes the applicable policy and invariant gates.'},
          {label:'02',title:'BLOCK',copy:'A hard rule or invariant prevents downstream execution.'},
          {label:'03',title:'OVERRIDE',copy:'A higher-authority rule explicitly supersedes a lower-priority choice.'},
          {label:'04',title:'ESCALATE',copy:'The decision requires external or higher-authority review.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="FORENSIC BINDING" title="Ethos remains a separate object.">
        <WorkFlow items={['Subject Chronons','Policy evaluation','DecisionTrace','Optional Ethos Packet','Evidence binding']}/>
      </WorkSection>

      <WorkSection kicker="HARD RULE" title="A signature proves provenance, not goodness.">
        <p>
          Cryptographic provenance can show where an artifact came from. It cannot establish that a decision was morally correct.
          Likewise, the candidate contract explicitly avoids declaring one scalar energy or thermodynamic quantity to be universal moral value.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
