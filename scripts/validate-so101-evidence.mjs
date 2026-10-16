import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const evidence = JSON.parse(readFileSync(new URL('../data/research/so101/evidence.json', import.meta.url), 'utf8'))
const protocol = JSON.parse(readFileSync(new URL('../data/research/so101/protocol.v1.json', import.meta.url), 'utf8'))

assert.equal(evidence.schema_version, '1.0.0')
assert.equal(protocol.schema_version, '1.0.0')
assert.equal(evidence.normative, false)
assert.equal(protocol.normative, false)
assert.equal(evidence.publication_state, 'operator_reported_baseline_no_public_raw_artifact')
const ids = evidence.observations.map(x => x.id)
assert.equal(ids.length, new Set(ids).size, 'Duplicate SO-101 evidence IDs')
for (const observation of evidence.observations) {
  assert.equal(observation.evidence_level, 'operator_confirmed')
  assert.equal(observation.raw_artifact_public, false)
  assert.equal(observation.raw_artifact_sha256, null)
  assert.equal(observation.raw_artifact_uri, null)
}
const smoke = evidence.observations.find(x => x.kind === 'dataset_smoke')
assert.ok(smoke, 'Missing operator reported smoke test')
assert.equal(smoke.reported_values.episodes, 1)
assert.equal(smoke.reported_values.samples, 448)
assert.equal(smoke.reported_values.recording_window_seconds, 15)
assert.equal(smoke.reported_values.video_recorded, false)
for (const planned of evidence.research_backlog) assert.equal(planned.verified_result, null, 'Planned result cannot have a fabricated value')
assert.equal(protocol.status, 'protocol_ready_no_measured_results')
assert.ok(protocol.trial_columns.includes('artifact_sha256'))
assert.ok(protocol.trial_columns.includes('success'))
assert.ok(protocol.trial_columns.includes('abort'))
assert.ok(protocol.evaluation_design.matched_trials_per_condition_minimum >= 20)
console.log('SO-101 evidence gate: operator reports separated from unmeasured experiments; PASS')
