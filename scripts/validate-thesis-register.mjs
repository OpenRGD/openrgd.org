import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const r=JSON.parse(readFileSync(new URL('../data/research/theses/registry.v1.json',import.meta.url),'utf8'))
const required=['id','slug','domain','priority','title','hypothesis','counter_hypothesis','falsification','current_evidence','limitations','test_design','publication_gate','status','sources','publication']
assert.equal(r.schema_version,'1.0.0')
assert.equal(r.maturity,'RESEARCH / NON-NORMATIVE')
assert.equal(r.theses.length,19)
assert.deepEqual(r.theses.map(x=>x.id),Array.from({length:19},(_,i)=>'T'+String(i+1).padStart(2,'0')))
const keys=new Set(), slugs=new Set()
let dossierCount=0
for(const x of r.theses){
  for(const key of required) assert.ok(x[key]!=null && (Array.isArray(x[key])?x[key].length>0:String(x[key]).trim().length>0),x.id+': '+key)
  assert.ok(!keys.has(x.id) && !slugs.has(x.slug),'Duplicate ID or slug: '+x.id)
  keys.add(x.id);slugs.add(x.slug)
  for(const key of ['hypothesis','counter_hypothesis','falsification','current_evidence','limitations','test_design','publication_gate']) assert.ok(x[key].length>=75,x.id+' insufficient unique content: '+key)
  assert.ok(['P0','P1','P2','P3'].includes(x.priority),x.id+' priority')
  assert.ok(r.taxonomy.includes(x.domain),x.id+' unknown domain')
  assert.ok(['DOSSIER','REGISTER_ONLY'].includes(x.publication),x.id+' publication enum')
  if(x.publication==='DOSSIER'){
    dossierCount++
    assert.equal(x.dossier_url,'https://openrgd.org/research/theses/'+x.slug)
  }else assert.equal(x.dossier_url,null)
  for(const source of x.sources){
    assert.ok(source.label && source.url && /^https:\/\//.test(source.url),x.id+' invalid source')
    assert.ok(['project','prior-art'].includes(source.kind),x.id+' source classification')
  }
}
assert.equal(dossierCount,5)
assert.deepEqual(r.theses.filter(x=>x.publication==='DOSSIER').map(x=>x.id),['T01','T06','T07','T11','T17'])
assert.ok(r.theses.find(x=>x.id==='T17').current_evidence.includes('4.595'))
assert.ok(r.theses.find(x=>x.id==='T17').limitations.includes('no measured'))
assert.ok(r.theses.find(x=>x.id==='T07').limitations.includes('no real enrollment'))
console.log('Thesis register: 19 falsifiable hypotheses, 5 dossiers, source and maturity gates PASS')
