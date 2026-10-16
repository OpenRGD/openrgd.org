import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import { lerobotTopics } from '@/lib/lerobot/topics'

const record: CitationRecordData = {
  maturity:'SO-101 LAB · SOURCE-BACKED REFERENCE + OPERATOR REPORTS',
  lastVerified:'16 Oct 2026',
  lastVerifiedIso:'2026-10-16',
  sourceVersion:'LeRobot current docs + OpenRGD SO-101 lab evidence ledger v1',
  evidenceBoundary:'Official LeRobot capabilities and operator-confirmed OpenRGD field observations are kept separate. No autonomous policy benchmark is claimed.',
  pageUrl:'https://openrgd.org/lerobot',
  canonicalSource:'https://huggingface.co/docs/lerobot/il_robots',
}

export const metadata: Metadata = referenceMetadata({
  title:'LeRobot and SO-101 Robot Learning',
  description:'LeRobot for SO-101: calibration, leader–follower teleoperation, dataset v3, ACT/SmolVLA evaluation, inference latency and OpenRGD physical evidence.',
  canonicalPath:'/lerobot',
  record,
})

export default function LeRobotPage() {
  return (
    <ConceptPage
      eyebrow="LEROBOT · SO-101 · OPENRGD"
      title="LeRobot gives us the learning loop. OpenRGD keeps the embodiment and evidence boundaries explicit."
      lead="LeRobot brings robot hardware, teleoperation, dataset recording, policy training and real-robot evaluation into one open research workflow. The OpenRGD SO-101 lab uses that workflow to test reproducibility, provenance and model-to-body responsibility without pretending that native teleoperation proves autonomous intelligence."
      citationRecord={record}
      sources={[
        {label:'LeRobot official documentation',href:'https://huggingface.co/docs/lerobot'},
        {label:'LeRobot real-world robot workflow',href:'https://huggingface.co/docs/lerobot/il_robots'},
        {label:'LeRobot SO-101',href:'https://huggingface.co/docs/lerobot/so101'},
        {label:'LeRobotDataset v3',href:'https://huggingface.co/docs/lerobot/lerobot-dataset-v3'},
        {label:'OpenRGD SO-101 evidence ledger',href:'/research/so101-embodiment-lab/evidence.json'}
      ]}
      related={[
        ...lerobotTopics.map(topic=>({
          href:'/lerobot/'+topic.slug,
          title:topic.title,
          copy:topic.description
        })),
        {href:'/research/so101-embodiment-lab',title:'SO-101 Embodiment Lab',copy:'Read dated operator observations and planned experiments with explicit evidence status.'}
      ]}
    >
      <ConceptSection kicker="THE WORKFLOW" title="Teleoperation, recording, policy and evaluation are separate milestones.">
        <ConceptFlow items={['Commission hardware','Calibrate','Teleoperate','Record dataset','Train a policy','Evaluate on robot','Publish traceable results']}/>
        <p>
          A robot can be assembled and teleoperated without having a high-quality dataset. A dataset can be recorded without having a trained model.
          A trained policy can run inference without being safe or successful on a physical task. Each transition deserves its own evidence.
        </p>
      </ConceptSection>

      <ConceptSection kicker="REAL OPENRGD BASELINE" title="Our first confirmed milestone is the native SO-101 data-acquisition path.">
        <p>
          Previous OpenRGD work sessions reported working SO-101 leader/follower teleoperation with persisted calibration identities,
          a single local 15-second no-video smoke recording (448 samples, episode 0) and replay.
          These are operator-confirmed results, not independently archived performance measurements.
        </p>
        <p>
          No ACT/SmolVLA task success rate, real-world VLA inference latency or synchronized camera dataset is claimed from that smoke session.
          See the public lab ledger for the exact boundary between reports and pending artifacts.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FOUR LAYERS" title="The complete system is more than a policy checkpoint.">
        <ConceptGrid items={[
          {label:'BODY',title:'SO-101 embodiment',copy:'Joint order, motor mapping, calibration, mechanical limits and the actual follower state.'},
          {label:'DATA',title:'LeRobot acquisition',copy:'Demonstrations, camera observations, episode timing, task metadata and raw evidence.'},
          {label:'POLICY',title:'ACT / SmolVLA',copy:'Learned action predictions and chunks conditioned on the dataset’s feature schema.'},
          {label:'AUTHORITY',title:'OpenRGD runtime boundary',copy:'Semantic intent, capability grounding, traceability and separately governed physical execution.'}
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="REPRODUCIBILITY" title="A public protocol is useful before there is a public benchmark.">
        <p>
          The SO-101 lab publishes a machine-readable evidence ledger, experiment protocol and empty CSV trial template.
          The protocol names task definitions, failure categories, version requirements, timing fields and a conservative matched-trial floor.
          Publishing the method first prevents success criteria from being improvised after results arrive.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
