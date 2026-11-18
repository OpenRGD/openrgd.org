import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import registry from '@/data/research/theses/registry.v1.json'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptPage, ConceptSection, ConceptFlow, ConceptGrid } from '@/components/concept-page'
import { findThesisDossier, thesisDossiers } from '@/lib/research/thesis-dossiers'

export const dynamicParams=false
export function generateStaticParams(){
  return thesisDossiers.map(x=>({slug:registry.theses.find(t=>t.id===x.id)!.slug}))
}
function load(slug:string){
  const thesis=registry.theses.find(x=>x.slug===slug && x.publication==='DOSSIER')
  if(!thesis)return undefined
  const dossier=findThesisDossier(thesis.id)
  return dossier ? {thesis,dossier} : undefined
}
function citationFor(slug:string,thesis:typeof registry.theses[number]):CitationRecordData{
  return {
    maturity:'RESEARCH THESIS · '+thesis.status,
    lastVerified:'18 Nov 2026',
    lastVerifiedIso:'2026-11-18',
    sourceVersion:'OpenRGD Research Thesis Register v1.0 · pinned project sources',
    evidenceBoundary:thesis.limitations,
    pageUrl:'https://openrgd.org/research/theses/'+slug,
    canonicalSource:thesis.sources.find(x=>x.kind==='project')?.url
  }
}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params
  const loaded=load(slug)
  if(!loaded)return {robots:{index:false,follow:true}}
  return referenceMetadata({
    title:loaded.dossier.seoTitle,
    description:loaded.dossier.seoDescription,
    canonicalPath:'/research/theses/'+slug,
    record:citationFor(slug,loaded.thesis)
  })
}

export default async function ResearchThesisDossier({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const loaded=load(slug)
  if(!loaded)notFound()
  const {thesis,dossier}=loaded
  const record=citationFor(slug,thesis)
  return (
    <ConceptPage
      eyebrow={thesis.id+' · OPENRGD RESEARCH · '+thesis.domain.toUpperCase()}
      title={dossier.heading}
      lead={dossier.lead}
      citationRecord={record}
      sources={thesis.sources.map(x=>({label:x.label+(x.kind==='prior-art'?' · PRIOR ART':''),href:x.url}))}
      related={[
        {href:'/research/theses',title:'Research Thesis Register',copy:'Browse all nineteen testable research questions and their current evidence status.'},
        ...dossier.connected
      ]}
    >
      <ConceptSection kicker="RESEARCH POSITION" title="Our hypothesis and its strongest alternative.">
        <div className="concept-grid">
          <article><span>HYPOTHESIS</span><h3>Claim under test</h3><p>{thesis.hypothesis}</p></article>
          <article><span>COUNTER-HYPOTHESIS</span><h3>Alternative explanation</h3><p>{thesis.counter_hypothesis}</p></article>
        </div>
        <p><strong>Distinctive contribution:</strong> {dossier.distinctContribution}</p>
      </ConceptSection>

      {dossier.sections.map(section=>(
        <ConceptSection key={section.title} kicker={section.kicker} title={section.title}>
          {section.paragraphs.map(p=><p key={p}>{p}</p>)}
        </ConceptSection>
      ))}

      {dossier.measured?(
        <ConceptSection kicker="OPERATOR MEASUREMENTS" title={dossier.measured.label}>
          <div className="data-list">
            {dossier.measured.fixedText.map(row=>(
              <div className="data-row" key={row.condition}>
                <span>{row.condition}</span><strong>{row.median}</strong><em>{row.n} · {row.boundary}</em>
              </div>
            ))}
          </div>
          <p><strong>Three native voice regression turns:</strong></p>
          <div className="data-list">
            {dossier.measured.voiceTurns.map(x=>(
              <div className="data-row" key={x.turn}>
                <span>Turn {x.turn} · STT {x.stt}</span><strong>TTS {x.tts}</strong><em>Bose playback {x.playback}</em>
              </div>
            ))}
          </div>
          <p>{dossier.measured.interpretation}</p>
        </ConceptSection>
      ):null}

      <ConceptSection kicker="POTENTIAL FALSIFIER" title="What finding would count against the thesis?">
        <p>{thesis.falsification}</p>
        <p><strong>Alternative:</strong> {thesis.counter_hypothesis}</p>
      </ConceptSection>

      <ConceptSection kicker="NEXT PROTOCOL" title="Design a test that could fail.">
        <ConceptFlow items={dossier.protocol.stages}/>
        <p>{thesis.test_design}</p>
        <ConceptGrid items={dossier.protocol.negativeControls.map((item,index)=>({
          label:String(index+1).padStart(2,'0'),
          title:item,
          copy:'An explicit negative case to report as accepted, rejected or unresolved—not omit from the denominator.'
        }))}/>
      </ConceptSection>

      <ConceptSection kicker="METRICS AND EVIDENCE GATE" title="What must be recorded before a stronger claim is justified?">
        <div className="concept-grid">
          {dossier.protocol.requiredMeasurements.map((x,i)=>(
            <article key={x}><span>MEASURE {String(i+1).padStart(2,'0')}</span><h3>{x}</h3><p>Required evidence field for this planned protocol.</p></article>
          ))}
        </div>
        <p><strong>Publication gate:</strong> {thesis.publication_gate}</p>
      </ConceptSection>

      <ConceptSection kicker="CURRENT EVIDENCE & LIMITS" title="Evidence is useful only when its boundary stays visible.">
        <p><strong>What exists:</strong> {thesis.current_evidence}</p>
        <p><strong>What remains unknown:</strong> {thesis.limitations}</p>
        <p><strong>Current maturity:</strong> {thesis.status}. This page is a research dossier, not an accepted OpenRGD normative contract.</p>
      </ConceptSection>
    </ConceptPage>
  )
}
