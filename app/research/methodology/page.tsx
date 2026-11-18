import type { Metadata } from 'next'
import program from '@/data/research/program.v1.json'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptPage, ConceptFlow, ConceptGrid, ConceptSection } from '@/components/concept-page'

const record:CitationRecordData={
  maturity:'RESEARCH DESIGN FOUNDATION · NO NEW EXPERIMENTS PREREGISTERED',
  lastVerified:'18 Nov 2026',
  lastVerifiedIso:'2026-11-18',
  sourceVersion:'OpenRGD Research Operating System RSO-0.1 · program.v1.json',
  evidenceBoundary:'The first five research studies are proposals or blocked designs. Existing operator measurements and CI tests are retrospective context, not prospective experimental results.',
  pageUrl:'https://openrgd.org/research/methodology',
  canonicalSource:'https://openrgd.org/research/methodology/program.json'
}

export const metadata:Metadata=referenceMetadata({
  title:'OpenRGD Research Methodology',
  description:'How OpenRGD turns falsifiable robotics theses into preregistered experiments, controlled measurement, archived evidence and reproducible conclusions. Five pilot research questions.',
  canonicalPath:'/research/methodology',
  record
})

export default function ResearchMethodologyPage(){
  return (
    <ConceptPage
      eyebrow="OPENRGD RESEARCH FOUNDATION · RSO 0.1"
      title="Research questions first. Robot tests second. Evidence before conclusions."
      lead="A test should answer a decision-relevant research question, not merely prove a new software feature runs. Our research framework ties every experiment to a falsifiable thesis, a comparator, a primary outcome and a reproducible evidence packet."
      citationRecord={record}
      sources={[
        {label:'Open Science Framework — Preregistration practices',href:'https://help.osf.io/article/330-create-a-preregistration'},
        {label:'NASA — Product verification versus validation',href:'https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/'},
        {label:'Wilkinson et al. — FAIR Guiding Principles',href:'https://doi.org/10.1038/sdata.2016.18'},
        {label:'NIST — Evaluating measurement uncertainty',href:'https://www.nist.gov/publications/simple-guide-evaluating-and-expressing-uncertainty-nist-measurement-results'},
        {label:'OpenRGD thesis register',href:'/research/theses'}
      ]}
      related={[
        {href:'/research/theses',title:'Research Thesis Register',copy:'Nineteen hypotheses and five in-depth dossiers.'},
        {href:'/research/so101-embodiment-lab',title:'SO-101 Experiment',copy:'How a physical test logs its task, measurements, aborts and evidence.'},
        {href:'/research/theses/embodied-voice-latency',title:'Voice Latency Evidence',copy:'See why synthesis timing and human-heard response latency are not the same measurement.'},
        {href:'/research/theses/autonomous-cognition-without-actuator-authority',title:'Bounded Cognitive Autonomy',copy:'A candidate conformance problem that requires independent authority tests.'}
      ]}
    >
      <ConceptSection kicker="THE RESEARCH LOOP" title="Every conclusion must be traceable to the question and the data that could have contradicted it.">
        <ConceptFlow items={['Txx thesis','RQ research question','EXP protocol','Review + freeze','Controlled trials','Analysis + uncertainty','Evidence + decision']}/>
        <p>
          The research question identifies the unknown and what decision an answer would change. The protocol freezes conditions,
          instrumentation, inclusion and exclusion rules, primary outcomes, stopping rules and analysis before new confirmatory data.
          The final publication reports negative results, exclusions and missing artifacts along with successes.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FIRST FIVE RESEARCH QUESTIONS" title="Five specific unknowns, not five new marketing claims.">
        <div className="content-card-grid">
          {program.research_questions.map(q=>{
            const study=program.studies.find(s=>s.id===q.study_id)
            return (
              <article className="content-card" key={q.id}>
                <p className="kicker">{q.id} · {q.priority} · {q.study_id}</p>
                <h3>{q.question}</h3>
                <p><strong>Decision affected:</strong> {q.decision_enabled}</p>
                <p><strong>Study stage:</strong> {study?.state.replaceAll('_',' ')||'UNKNOWN'} · Not preregistered</p>
              </article>
            )
          })}
        </div>
      </ConceptSection>

      <ConceptSection kicker="MEASUREMENT DESIGN" title="A passing software test is not a validated robot behavior.">
        <ConceptGrid items={[
          {label:'01',title:'Comparator',copy:'Name the baseline or rival mechanism to which the new method will be compared.'},
          {label:'02',title:'Primary endpoint',copy:'Specify exactly what is measured, using which instrument, units and clock domain.'},
          {label:'03',title:'Sampling',copy:'Predeclare trial count and justify its relationship to the inference being made; an engineering floor is not statistical power.'},
          {label:'04',title:'Negative controls',copy:'Test known failure scenarios, spoofing and plausible alternatives, not only the sunny-day path.'},
          {label:'05',title:'Evidence packet',copy:'Archive source pins, calibration, raw/sanitized traces, artifact digests, uncertainty and test exclusions.'},
          {label:'06',title:'Decision record',copy:'State SUPPORTED, CHALLENGED, INCONCLUSIVE or INVALID with scope and remaining uncertainty.'}
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="STATUS AND PREREGISTRATION" title="A published protocol draft is not a preregistered experiment.">
        <p>
          Today the program contains {program.studies.filter(s=>s.state==='DESIGN_DRAFT').length} draft designs and
          {' '}{program.studies.filter(s=>s.state==='DESIGN_BLOCKED').length} blocked designs. None has an immutable confirmed registration,
          a frozen analysis plan or new confirmatory results. Existing October voice benchmarks and software conformance tests are historical evidence
          that must never be relabeled as preregistered outcomes.
        </p>
        <p>
          A preregistered study needs exact source/protocol version, timestamp before new data, independent verification of the registration,
          frozen sample/analysis and instrument configuration, consent and safety checks. Later changes are tracked as amendments. New physical
          motion must be approved in its owning runtime and lab—never by this research website or a successful schema check.
        </p>
      </ConceptSection>

      <ConceptSection kicker="PILOT STUDIES" title="We have defined the next experiments, not invented their results.">
        <div className="content-card-grid">
          {program.studies.map(study=>(
            <article key={study.id} className="content-card">
              <p className="kicker">{study.id} · {study.state.replaceAll('_',' ')}</p>
              <h3>{study.title}</h3>
              <p><strong>Primary measure:</strong> {study.design.primary_metric}</p>
              <p><strong>Sampling plan:</strong> {study.design.sampling_plan}</p>
              <p><strong>Current blocker:</strong> {study.design.instrumentation_gap}</p>
              <p><strong>Results:</strong> No new results.</p>
            </article>
          ))}
        </div>
      </ConceptSection>

      <ConceptSection kicker="ARTIFACTS AND OPEN RESEARCH" title="Machine-readable methods are discoverable even before data collection.">
        <p>
          The public program provides stable IDs linking each thesis, research question and experiment. Its templates define a run manifest,
          a trial-level CSV and a structured analysis report. Raw robot instance logs, voice recordings and private identifying data are
          not published as a prerequisite to a methodological record; their sharing and retention must be separately governed.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/research/methodology/program.json">Machine-readable research program →</a>
          <a className="button ghost" href="/research/methodology/run-template.json">Blank run manifest JSON →</a>
          <a className="button ghost" href="/research/methodology/trial-template.csv">Empty trial CSV →</a>
          <a className="button ghost" href="/research/theses">Browse original theses →</a>
        </div>
      </ConceptSection>

      <ConceptSection kicker="HARD BOUNDARY" title="Good research can conclude that an approach failed or that evidence is insufficient.">
        <p>
          OpenRGD's operating method forbids promoting synthetic fixtures into physical measurement, a valid hash into verified device identity,
          a completed cognitive goal into a true conclusion or an experimental motor output into a certified safety result.
          Failures, abstentions, uncertainty and invalid trials remain part of the research record.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
