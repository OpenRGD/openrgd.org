import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'

const program=JSON.parse(readFileSync(new URL('../data/research/program.v1.json',import.meta.url),'utf8'))
const theses=JSON.parse(readFileSync(new URL('../data/research/theses/registry.v1.json',import.meta.url),'utf8'))
const manifest=JSON.parse(readFileSync(new URL('../docs/research/templates/run-manifest.template.json',import.meta.url),'utf8'))
const csv=readFileSync(new URL('../docs/research/templates/trial-log.template.csv',import.meta.url),'utf8')
const thesisIds=new Set(theses.theses.map(t=>t.id))
const allowedStates=new Set(['DESIGN_DRAFT','DESIGN_BLOCKED','REVIEW_READY','PREREGISTERED','COLLECTING','ANALYZING','RELEASED','PAUSED','CANCELLED'])

function check(p){
  assert.equal(p.schema_version,'1.0.0')
  assert.equal(p.maturity,'RESEARCH_DESIGN_ONLY')
  assert.equal(p.research_questions.length,5)
  assert.equal(p.studies.length,5)
  const qIds=new Set(),sIds=new Set()
  for(const q of p.research_questions){
    assert.match(q.id,/^RQ-\d{3}$/)
    assert.ok(!qIds.has(q.id));qIds.add(q.id)
    assert.ok(q.question.length>=100 && q.why_it_matters.length>=60 && q.decision_enabled.length>=60)
    assert.ok(q.thesis_ids.length>0 && q.thesis_ids.every(id=>thesisIds.has(id)),'Unknown thesis in '+q.id)
  }
  for(const s of p.studies){
    assert.match(s.id,/^EXP-T\d{2}-\d{3}$/)
    assert.ok(!sIds.has(s.id),'duplicate study '+s.id);sIds.add(s.id)
    assert.ok(allowedStates.has(s.state),'unknown state '+s.state)
    const q=p.research_questions.find(x=>x.id===s.research_question_id)
    assert.ok(q && q.study_id===s.id,'Research question/study mismatch '+s.id)
    assert.ok(s.thesis_ids.length>0 && s.thesis_ids.every(id=>thesisIds.has(id) && q.thesis_ids.includes(id)))
    assert.ok(s.hypotheses.h1.length>=70 && s.hypotheses.h0.length>=70)
    assert.ok(s.design.primary_metric.length>=70,'primary metric not operational '+s.id)
    assert.ok(s.design.analysis_unit && s.design.sampling_plan && s.design.analysis_plan && s.design.inclusion_rule && s.design.exclusion_rule && s.design.stop_rule)
    assert.ok(s.design.controls.length>=2 && s.design.secondary_metrics.length>=2)
    assert.ok(s.safety.mode && s.safety.notes.length>=50)
    assert.ok(s.artifacts.length>=4)
    assert.ok(s.previous_data && ['NONE','EXPLORATORY_CONTEXT_ONLY','DEVELOPMENT_EVIDENCE_ONLY'].includes(s.previous_data.usage))
    assert.ok(['NOT_PREREGISTERED','LOCKED_INTERNAL','REGISTERED_EXTERNAL'].includes(s.preregistration.status))
    const lock=s.preregistration
    if(s.state==='PREREGISTERED'||s.state==='COLLECTING'||s.state==='ANALYZING'||s.state==='RELEASED'){
      assert.notEqual(lock.status,'NOT_PREREGISTERED','Registration cannot be implied from state')
      assert.match(lock.frozen_commit||'',/^[a-f0-9]{40}$/,'Missing immutable commit')
      assert.ok(lock.frozen_at_utc && Number.isFinite(Date.parse(lock.frozen_at_utc)),'Missing registration timestamp')
      assert.equal(lock.recorded_before_new_data,true,'Cannot retroactively preregister')
      if(lock.status==='REGISTERED_EXTERNAL')assert.ok(lock.independent_registration_url?.startsWith('https://'))
      assert.ok(!s.design.instrumentation_gap,'Instrumentation gap must be closed before preregistration')
    }
    if(s.result_status==='NO_NEW_RESULTS'){
      assert.equal(s.results,null,'Cannot invent experiment results '+s.id)
      assert.ok(['DESIGN_DRAFT','DESIGN_BLOCKED','REVIEW_READY','PREREGISTERED'].includes(s.state),'Unrun study state mismatch')
    } else {
      assert.ok(s.results && ['ANALYZING','RELEASED'].includes(s.state),'Result without real run evidence')
      assert.notEqual(lock.status,'NOT_PREREGISTERED')
    }
    if(['DESIGN_BLOCKED'].includes(s.state)) assert.ok(s.design.instrumentation_gap)
  }
  assert.deepEqual([...qIds].sort(),p.research_questions.map(x=>x.id).sort())
  assert.deepEqual([...sIds].sort(),p.studies.map(x=>x.id).sort())
}

check(program)
const mutation=structuredClone(program)
mutation.studies[0].state='PREREGISTERED'
assert.throws(()=>check(mutation),'Should refuse retroactive preregistration')
const fabrication=structuredClone(program)
fabrication.studies[0].results={mean_ms:120}
assert.throws(()=>check(fabrication),'Should refuse fabricated result in DESIGN_DRAFT')
assert.equal(manifest.execution_status,'NOT_EXECUTED')
assert.equal(manifest.outcome.classification,'NOT_ANALYZED')
assert.equal(manifest.outcome.summary,null)
assert.equal(csv.trim().split('\n').length,1,'Trial template must be header-only')
for(const field of ['study_id','trial_id','condition_id','primary_value','primary_unit','abort','failure_code','exclusion_reason','source_commit','artifact_ref'])assert.ok(csv.includes(field))
console.log('Research foundation gate: 5 questions, 5 unregistered protocols, templates, adversarial negative tests PASS')
