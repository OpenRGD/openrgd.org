import { standardMetadata } from '@/lib/seo/provenance'
import WorkPage, { WorkFlow, WorkGrid, WorkSection } from '@/components/work-page'
import evidence from '@/data/research/so101/evidence.json'
import protocol from '@/data/research/so101/protocol.v1.json'

export const metadata = standardMetadata({
  title:'SO-101 Embodiment Lab — Evidence and Experiment Protocol',
  description:'OpenRGD SO-101 physical robot evidence: leader/follower teleoperation, an operator-reported replay smoke test, public research ledger and reproducible ACT/SmolVLA protocol.',
  canonicalPath:'/research/so101-embodiment-lab',
})

const schema = {
  '@context':'https://schema.org',
  '@type':'TechArticle',
  headline:'OpenRGD SO-101 Embodiment Lab — Operator Evidence and Reproducibility Protocol',
  mainEntityOfPage:'https://openrgd.org/research/so101-embodiment-lab',
  dateModified:'2026-10-16',
  inLanguage:'en',
  about:[{ '@type':'Thing', name:'SO-101' },{ '@type':'Thing', name:'LeRobot' },{ '@type':'Thing', name:'Robot teleoperation' }],
  publisher:{ '@id':'https://openrgd.org/#organization' }
}

export default function So101LabPage() {
  return (
    <WorkPage
      eyebrow="PHYSICAL EXPERIMENT · OPENRGD SO-101 LAB"
      title="A real robot can validate a workflow—but evidence must stay narrower than the ambition."
      lead="The lab tracks native SO-101 leader/follower teleoperation, a small local record/replay smoke test and the protocols for future ACT, SmolVLA and latency experiments. Every reported outcome is labeled by evidence level."
      status="EXPERIMENTAL · OPERATOR REPORTED"
      tone="experimental"
      boundary="The work-session observations below were confirmed by the operator, but raw calibration files, dataset hashes and timestamped trial traces are not publicly archived. The canonical OpenRGD repository is non-actuating. No autonomous learned-policy success, physical runtime certification or latency performance is claimed."
      sources={[
        {label:'LeRobot real-world robot documentation',href:'https://huggingface.co/docs/lerobot/il_robots'},
        {label:'LeRobot SO-101 documentation',href:'https://huggingface.co/docs/lerobot/so101'},
        {label:'LeRobotDataset v3 specification',href:'https://huggingface.co/docs/lerobot/lerobot-dataset-v3'},
        {label:'Canonical OpenRGD candidate SO-101 flow — not test evidence',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/examples/so101-causal-flow.json'}
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>

      <WorkSection kicker="EVIDENCE LEDGER" title="Four dated operator reports, no fabricated laboratory measurements.">
        <p>
          Observations are reported from earlier project work sessions. They are not independent re-tests or downloadable recordings.
          Their status is deliberately separated from future benchmark results.
        </p>
        <div className="data-list">
          {evidence.observations.map((item)=>(
            <div className="data-row" key={item.id}>
              <span><strong>{item.date}</strong> — {item.conclusion}</span>
              <strong>OPERATOR CONFIRMED</strong>
              <em>{item.caveat}</em>
            </div>
          ))}
        </div>
      </WorkSection>

      <WorkSection kicker="WHAT WE CAN SAY" title="Teleoperation, a single smoke recording and replay were reported working.">
        <WorkGrid items={[
          {label:'LEADER / FOLLOWER',title:'Native teleoperation',copy:'The black leader drove the white follower in prior SO-101 work sessions.'},
          {label:'CALIBRATION',title:'Persistent identities',copy:'Leader openrgd_leader and follower openrgd_follower; operator reported 12 servos configured and calibrated.'},
          {label:'SMOKE DATASET',title:'One local episode',copy:'Reported episode 0, 448 samples during a nominal 15-second, no-video capture.'},
          {label:'REPLAY',title:'Local action replay',copy:'Operator reported a correct replay; no quantitative motion-error trace is available publicly.'}
        ]}/>
      </WorkSection>

      <WorkSection kicker="WHAT IS NOT VERIFIED" title="A native robot smoke test is not autonomous-policy performance.">
        <p>
          The current public record does not substantiate ACT or SmolVLA training/evaluation, a video-synchronized training dataset,
          a real-robot task success rate, a latency histogram, a cross-embodiment transfer result or a commissioned OpenRGD physical runtime.
        </p>
        <p>
          The local dataset identifier openrgd/so101-smoke is a work-session label, not a public dataset URL.
          The actual dataset, calibration digests and raw run artifacts still need to be archived before independent reproducibility claims.
        </p>
      </WorkSection>

      <WorkSection kicker="NEXT EVIDENCE GATES" title="Each experiment has a distinct protocol and measured-result field.">
        <WorkGrid items={evidence.research_backlog.map((item)=>({
          label:item.id,
          title:item.title,
          copy:item.status.replaceAll('_',' ')+'; verified_result = null'
        }))}/>
      </WorkSection>

      <WorkSection kicker="PROTOCOL" title="Freeze the task before collecting policy-comparison results.">
        <p>
          Protocol {protocol.protocol_id} requires physical preflight, pinned robot and software revisions, camera/calibration provenance,
          held-out evaluation tasks, trial-level outcomes, failure reasons and timestamped action/observation boundaries.
          Its minimum of {protocol.evaluation_design.matched_trials_per_condition_minimum} matched trials per condition is an operational floor, not statistical proof.
        </p>
        <WorkFlow items={['Hardware + calibration preflight','Define task / reset / success','Record and hash dataset','Pin policy checkpoint','Matched supervised trials','Log failures and timing','Publish reproducible evidence']}/>
        <div className="content-actions">
          <a className="button primary" href="/research/so101-embodiment-lab/evidence.json">Download evidence JSON →</a>
          <a className="button ghost" href="/research/so101-embodiment-lab/protocol.json">Experiment protocol JSON →</a>
          <a className="button ghost" href="/research/so101-embodiment-lab/trial-template.csv">Empty trial CSV →</a>
        </div>
      </WorkSection>

      <WorkSection kicker="LEARN MORE" title="Follow the engineering path without mixing policy, controller and canonical standard.">
        <div className="content-card-grid">
          <a className="content-card" href="/lerobot"><h3>LeRobot + OpenRGD</h3><p>The full robot-learning workflow and authority boundary.</p></a>
          <a className="content-card" href="/lerobot/so101-dataset"><h3>SO-101 dataset</h3><p>LeRobotDataset v3 and a source-backed data card.</p></a>
          <a className="content-card" href="/lerobot/so101-evaluation"><h3>ACT vs SmolVLA protocol</h3><p>Matched-trial design, failure taxonomy and publication gate.</p></a>
          <a className="content-card" href="/lerobot/so101-inference-latency"><h3>Inference latency</h3><p>Timebases, action age and synchronous vs asynchronous action chunks.</p></a>
        </div>
      </WorkSection>
    </WorkPage>
  )
}
