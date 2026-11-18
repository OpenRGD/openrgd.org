export type Dossier = {
  id: string
  seoTitle: string
  seoDescription: string
  heading: string
  lead: string
  distinctContribution: string
  sections: Array<{ kicker: string; title: string; paragraphs: string[] }>
  protocol: {
    stages: string[]
    requiredMeasurements: string[]
    negativeControls: string[]
  }
  measured?: {
    label: string
    fixedText: Array<{ condition: string; median: string; n: string; boundary: string }>
    voiceTurns: Array<{ turn: string; stt: string; tts: string; playback: string }>
    interpretation: string
  }
  connected: Array<{ href: string; title: string; copy: string }>
}

export const thesisDossiers: Dossier[] = [
  {
    id:'T01',
    seoTitle:'Autonomous Robot Cognition Without Actuator Authority',
    seoDescription:'OpenRGD T01: independently gate effects while a robot generates bounded cognitive goals. Explore GoalAdmission, Work ownership, Core-B candidate tests and falsification.',
    heading:'A robot can decide what to investigate without deciding what it is permitted to change.',
    lead:'Autonomous epistemic goal generation and authorization of physical effects solve different problems. In OpenRGD we test whether an attention cue can become bounded Work while every external effect remains inaccessible until a different authority grants it.',
    distinctContribution:'The contribution proposed here is a repeatable producer → single admission → Work path with explicit identity, policy, time and budget checks; it is not a claim to have invented independent authorization or deployed a safe autonomous robot.',
    sections:[
      {kicker:'THE ARCHITECTURAL CLAIM',title:'Thinking, planning and execution should not share one self-declared authority.',paragraphs:[
        'A general-purpose model may notice inconsistent sensor data, propose investigating a calibration gap, or request more observations. None of these steps requires the model to open a motor channel, call a cloud API or write canonical autobiographical history. The critical distinction is between generating a candidate goal, admitting that goal under the current host policy, and authorizing a particular side effect.',
        'The current OpenRGD direction uses five logical kernel roles rather than assuming five operating-system processes: Safety, Life, Work, Relation and Imagination. The candidate Core-B ABI expresses goal/effect data; the COG adapter consumes one optional candidate path. The safety reflex remains outside this cognitive decision loop.',
      ]},
      {kicker:'WHAT HAS BEEN VERIFIED',title:'Software conformance is substantial, but still session-scoped.',paragraphs:[
        'The current draft COG–CORE-B PR #6 pins a Core-B candidate schema without silently replacing the accepted Core source root. On its verified candidate head, the project reports 129 distinct adapter-suite cases, 133 earlier unit/regression cases and 32 baseline-Core integration cases. These are 294 distinct tests across suites, not 294 new tests, and repeated Python runs are not counted as distinct cases.',
        'The adapter reports a real C1 numeric attention producer → Core-B candidate admission → Work consumer path, with local owner-channel checks, aggregate reservations and non-effectful result tracing. Its 10 current review matrix jobs were successful, but this does not authenticate a remote producer, provide process isolation, enroll a Life, grant external effects or run on Paky-01.',
      ]},
      {kicker:'THE COUNTEREXAMPLE',title:'A schema-valid request should not be able to upgrade itself into permission.',paragraphs:[
        'An adversarial producer can supply perfectly valid JSON while claiming to be an operator or presenting an ALLOW field. The trusted host still needs to identify the producer, verify the current role lease and policy, and bind permission to the precise request. A schema does not authenticate its author.',
        'The thesis would be weakened if the separate admission/effect route introduced an unacceptable loss of useful task completion or if a simpler architecture achieved equally strong boundedness and auditability with fewer trusted components. We should compare, not merely assume the extra boundary is beneficial.',
      ]},
      {kicker:'WHAT WE WOULD PUBLISH NEXT',title:'Turn conformance into a verified authority experiment.',paragraphs:[
        'The next study should pin producer, context and policy revisions, then run negative cases for role spoofing, concurrent budget reservations, stale responses and changing permissions. The publication should record accepted/rejected counts, full negative fixtures and effect-dispatch count, not a claim of physical safety.',
        'A later Paky-01 study requires separately authenticated sensor input, host authority and physical deployment approval. Until then all downstream history, communication, digital and motor effects remain disconnected.',
      ]}
    ],
    protocol:{
      stages:['Pinned IMU cue','Candidate goal','Single host-owned admission','Bounded Work','Effect request reviewed separately','Verified reject / no effect'],
      requiredMeasurements:['Exact source commits and schema digest','Rejected unauthorized effect attempts / total attempts','Aggregate resource overcommit attempts / outcomes','Context invalidation and TTL-bound rejection cases','Producer/consumer identity checks'],
      negativeControls:['Spoofed operator identity','Duplicate request with altered budget','Expired or re-clocked cue','Stale policy/fencing generation','Unauthorized physical/digital/history effect'],
    },
    connected:[
      {href:'/architecture/runtime-boundary',title:'Runtime Authority Boundary',copy:'How actions become executable only after an independent operational decision.'},
      {href:'/architecture/agent-contracts',title:'Agent Contracts',copy:'Where candidate ActionIntent and Somatic boundaries are described.'},
      {href:'/research/theses/history-versus-memory',title:'History vs Memory',copy:'Why cognitive completion cannot create a verified past.'}
    ]
  },
  {
    id:'T06',
    seoTitle:'Robot History vs Memory: Chronon and Rebuildable Projections',
    seoDescription:'OpenRGD T06: separate canonical robot event history, retained evidence and versioned cognitive memory projections. Compare falsifiable recovery and reappraisal designs.',
    heading:'A robot can remember an event differently without changing what was originally recorded.',
    lead:'Chronon is a proposed canonical-history model for embodied agents. Cognitive memory is a derived, fallible view: it can consolidate, reinterpret, be partially forgotten or rebuilt while retaining clear relationships to the preserved evidence.',
    distinctContribution:'The design direction combines evidence-preserving temporal records, versioned memory projections, multi-level retention, autonomous reappraisal and externally governed Life continuity. Immutable events and reconsolidation already exist in prior research; our contribution must be demonstrated by the combined contracts and recovery tests.',
    sections:[
      {kicker:'THE FIVE LOGICAL LEVELS',title:'Sensor buffers and autobiographical understanding do not need identical lifecycles.',paragraphs:[
        'ML-001 proposes L0 Perceptual Buffer for temporary audio, video, IMU and bus observations; L1 Evidence Vault for retained referenced media or measurements; L2 Chronon Ledger for canonical event history; L3 Cognitive Memory for episodes, lessons and knowledge; and L4 Autobiographical Continuity for long-range significance. These are five logical roles, not five databases and not five independent truth owners.',
        'A frame is not automatically a Chronon. A practical event boundary may group time, observation, causality and source references. High-rate sensor material can expire subject to privacy policy, while the canonical event continues to identify what evidence existed and whether it is still available.',
      ]},
      {kicker:'THE EVIDENCE DISTINCTION',title:'Forgetting a media payload is not the same as rewriting the historical claim.',paragraphs:[
        'A robot might originally label a motion as a successful grasp, then learn from another camera view that the object slipped. A well-behaved memory system should add a revised assessment rather than replacing the fact that an earlier assessment occurred. Both the original event and the later correction retain their provenance.',
        'The challenge is not simply event sourcing. It is to preserve uncertainty, privacy-driven erasure, origin types (physical, simulated, derived) and links between a new cognitive projection and its available underlying evidence. A citation that points to deleted bytes must not masquerade as retrievable proof.',
      ]},
      {kicker:'STATUS IN OPENRGD',title:'This is an architecture hypothesis, not a functioning autobiographical system.',paragraphs:[
        'The public Core/COG handoff and CHRONON-MEM-0001 analysis describe the ownership boundaries, but there is no verified persistent Chronon writer, physically enrolled Life or complete recovery after reboot. The current COG oneiric path can review synthetic local annotations without committing canonical history.',
        'Existing memory research, including recent reconsolidating episodic-semantic approaches, already separates stored episodes from evolving judgments. Therefore we should test an OpenRGD-specific combination of provenance, temporal semantics and embodiment rather than claim novelty of immutable episodes in isolation.',
      ]},
      {kicker:'FALSIFIABLE EXPERIMENT',title:'Rebuild a memory after corrections, partial retention and a different model version.',paragraphs:[
        'Freeze a small set of timestamped source events and their provenance. Produce two versions of an episode summary, an explicit correction and a simulated experience. Rebuild the memory index with a different summarization model or algorithm and check that every derived claim cites its available source and correct origin type.',
        'If replay changes original events, if an unavailable raw payload is falsely presented as accessible, or if a simulated observation becomes physical history, the proposed memory boundary fails. Recovery metrics include exact original-event preservation, provenance coverage, reindex correctness and false-history rate.',
      ]}
    ],
    protocol:{
      stages:['Captured event + source','Evidence retention decision','Chronon candidate','Versioned projection L3','Autobiographical view L4','Correction and rebuild','Audit history and privacy'],
      requiredMeasurements:['Original-event digest and version','Projection lineage integrity','Claims with valid source references / all claims','Unavailable-evidence references properly marked','False physical-event promotions','Recovery/rebuild time and failure count'],
      negativeControls:['Synthetic event claiming physical origin','Source payload removed under retention','Contradictory later evidence','Different summarization model','Replayed duplicate with conflicting provenance'],
    },
    connected:[
      {href:'/architecture/time-memory',title:'Time and Memory',copy:'Ownership boundaries between Chronograf, Chronon and derived cognitive views.'},
      {href:'/research/robot-chronograf',title:'Robot Chronograf',copy:'Clock domain and temporal uncertainty as first-class evidence.'},
      {href:'/research/theses/life-continuity-beyond-runtime',title:'Life Continuity',copy:'Why preserving events alone cannot establish who owns a life history.'}
    ]
  },
  {
    id:'T07',
    seoTitle:'Persistent Robot Life Identity Beyond Model and Runtime',
    seoDescription:'OpenRGD T07: distinguish Life, agent, robot model, physical instance and runtime. Explore candidate Core-C records, verified binding requirements and recovery falsification.',
    heading:'Restarting a process should not create a new Life—or prove that an old one has returned.',
    lead:'Robot models, deployed physical units, agents and runtime processes can all change independently. An accountable long-lived robot agent needs a continuity claim supported by an external identity authority, not merely a copied ID string.',
    distinctContribution:'OpenRGD’s proposed identity model separates Life continuity, runtime activation, physical-robot binding and role fencing, and places verification outside the agent. These are candidates; the proof will be in real enrollment and negative restoration/fork tests.',
    sections:[
      {kicker:'IDENTITY IS NOT ONE FIELD',title:'The system needs to say which thing an identifier describes.',paragraphs:[
        'A URDF/RGD model describes a generic reference profile; a physical robot is a specific machine; an agent has a role and cognitive workload; a runtime process is a temporary execution instance; and a proposed Life can represent durable history/identity across legitimate changes. Treating these identifiers as interchangeable creates a recovery and authorization problem.',
        'Copying a life_id onto another device is a claim, not evidence of custody. A model digest commits content, not hardware possession or operator authority. A runtime can load plausible metadata yet still lack the signed binding, activation epoch and current lease that would justify access to an existing Life.',
      ]},
      {kicker:'THE CURRENT CONTRACT',title:'Core-C supplies a candidate vocabulary, not the issuer.',paragraphs:[
        'Core-C PR #13 defines seven candidate record types: LifeIdentity, AgentDescriptor, RobotLifeBinding, LifeActivation, RuntimeInstance, RoleLease and ContinuityStatus. The PR reports 93/93 identity and parser tests green in a pinned Python CI matrix, plus unchanged integration suites.',
        'The tested FixtureBoundary does not verify real cryptographic issuers, durable leases, distributed consensus, physical enrollment or recovery after reboot. The source remains draft, non-normative and unmerged; existing context consumers still use null Life where upstream proof is absent.',
      ]},
      {kicker:'RECOVERY VERSUS FORK',title:'A legitimate restart must be distinguishable from a competing owner.',paragraphs:[
        'Suppose the same agent process restarts after a power cycle. Preserving a history pointer is useful, but a trusted service still needs to establish what binding and activation are valid. If the original runtime is still alive, a second process must not simply declare itself the same exclusive owner.',
        'Migration to another physical body creates different trust questions from upgrading a language model in one host. Hardware identity, Life continuity and active role leases should remain distinguishable so a revocation or conflict can be reported without inventing a completed transfer.',
      ]},
      {kicker:'FIRST PROOF',title:'Test claims against an independent enrollment/recovery verifier.',paragraphs:[
        'A controlled test harness should issue a verified initial binding, then attempt legitimate reboot, delayed stale lease, unauthorized clone, changed model, invalid physical binding and fork. Results must include independent issuer verification, exclusivity, revocation and evidence freshness.',
        'A restored cognitive session is not yet autobiographical continuity. The memory writer/rebuilder must remain a separate gate. Until these systems exist, OpenRGD can explain the threat model and candidate schema but must not claim a persistent robot Life has been demonstrated.',
      ]}
    ],
    protocol:{
      stages:['Trusted enrollment','Physical-instance binding','Agent/role activation','Runtime restart','Independent continuity check','Lease conflict / revocation','Verified accept or deny'],
      requiredMeasurements:['Issuer/trust-root verification','Stale lease rejection rate','Exclusive owner conflicts','Binding revision integrity','Restore/fork classification','History authority pointer verification'],
      negativeControls:['Copied Life ID in a different runtime','Forged issuer proof','Two concurrent exclusive owners','Revoked binding revision','Stale activation epoch','Unverified physical instance'],
    },
    connected:[
      {href:'/robot-identity-provenance',title:'Robot Identity and Provenance',copy:'Differentiate model, variant, profile and physical unit.'},
      {href:'/research/theses/history-versus-memory',title:'History vs Memory',copy:'The ledger and projections whose continuity needs protection.'},
      {href:'/governance',title:'OpenRGD Governance',copy:'Why schema validity and CI do not confer a new normative authority.'}
    ]
  },
  {
    id:'T11',
    seoTitle:'Robot Calibration File vs Physical Calibration Evidence',
    seoDescription:'OpenRGD T11: a schema-valid robot calibration file is not proof of measured physical calibration or motion readiness. Evidence from CAL-0.2 Rust validation.',
    heading:'A robot can have a valid calibration file and still be physically uncalibrated.',
    lead:'Offline model inspection, calibration records, physical measurements and runtime actuation permission are distinct boundaries. OpenRGD’s Rust calibration module was designed to keep missing evidence visible rather than quietly infer current joint truth.',
    distinctContribution:'The original engineering contribution is a passive, deterministic, source-pinned calibration-consistency report with explicit non-actuation semantics; it is not a replacement for traceable metrology or physical commissioning.',
    sections:[
      {kicker:'THE FOUR DIFFERENT CLAIMS',title:'Nominal, declared, measured and authorized must not collapse.',paragraphs:[
        'A robot model can specify a nominal joint zero and mechanically allowable range. A saved calibration profile can declare a correction. A measured observation can estimate an actual state under time, uncertainty and instrument constraints. A physical runtime must independently decide whether commanding that joint is permitted.',
        'Those four claims are easy to blur in software. A parser may return an offset value, but the file does not prove which physical robot produced it, whether the measurement was valid, whether the sensor changed afterward or whether movement is safe right now.',
      ]},
      {kicker:'SOFTWARE EVIDENCE',title:'CAL-0.2 already demonstrates a conservative offline approach.',paragraphs:[
        'The merged CAL-0.2 Rust module inspects a local canonical profile without opening a bus or moving a motor. The module performs bounded JSON/JSONC parsing, raw-source SHA-256 recording, candidate field inventory, orphan/unresolved reference diagnostics and optional unapplied correction previews. Its acceptance record reports 31 passing tests plus CLI smoke runs.',
        'A pinned canonical-reference smoke identified candidate/declared fields, but zero independently observed physical measurements. The report deliberately states current_robot_position_observed: false and claims_physical_calibration_certified: false. This is a successful trust-boundary test, not evidence that Paky-01 is physically calibrated.',
      ]},
      {kicker:'PHYSICAL MEASUREMENT GATE',title:'Hashing a claimed correction does not establish metrological traceability.',paragraphs:[
        'The international metrology vocabulary defines traceability in relation to a documented calibration chain and uncertainty. In practical robot terms, we need to identify the physical instrument, reference, procedure, time, environmental conditions and uncertainty, not simply a file digest.',
        'CAL-0.3 proposes an offline stereo OCCHI capture/calibration workflow and has passed synthetic tests; real capture and physical/metrological acceptance remain pending. Synthetic corner detections cannot establish that a real stereo baseline produces accurate metric depth.',
      ]},
      {kicker:'HOW TO FALSIFY IT',title:'Deliberately give the inspector a plausible but wrong robot.',paragraphs:[
        'The proposed adversarial corpus should use valid JSON with a mismatched physical-instance claim, orphan actuator IDs, stale sensor calibration, a contradictory model digest and missing observations. The passive report should refuse to upgrade any of these into present physical truth.',
        'A separately supervised hardware calibration test would then compare measured outcomes with declared values and uncertainty. If software automatically grants motion or asserts observed position before independent measurement, the system violates the thesis.',
      ]}
    ],
    protocol:{
      stages:['Nominal model','Declared calibration','Offline consistency checks','External measured evidence','Uncertainty / provenance review','Unapplied candidate correction','Independent hardware authorization'],
      requiredMeasurements:['Input file hashes and canonical model pin','Declared vs observed coverage counts','Unresolved/orphan reference count','Measurement uncertainty and traceability','False certified or applied report fields','Observed physical error under supervised acceptance'],
      negativeControls:['Correct hash with wrong physical instance','Stale calibration document','Missing joint sensor evidence','Orphan actuator mapping','Forged validation state','Synthetic stereo data labeled physical'],
    },
    connected:[
      {href:'/docs/validation',title:'RGD Validation',copy:'What a validated source model actually proves.'},
      {href:'/robot-identity-provenance',title:'Robot Identity and Provenance',copy:'Why a hash, a profile and a machine are different identities.'},
      {href:'/research/so101-embodiment-lab',title:'SO-101 Embodiment Lab',copy:'A real robot lab with a deliberately bounded evidence ledger.'}
    ]
  },
  {
    id:'T17',
    seoTitle:'Offline Robot Voice Latency: Piper and Whisper on Paky-01',
    seoDescription:'Measured Piper resident vs no-cache TTS on Paky-01 CPU: warm medians 4.595 s vs 6.772 s, three local voice turns, and why this is not acoustic latency.',
    heading:'Improving TTS inference does not by itself prove a robot replies sooner.',
    lead:'On Paky-01, we measured Piper voice synthesis with and without a resident model and completed a three-turn microphone → Whisper → Piper → Bose pipeline. These results establish a useful CPU software baseline—not a measured time from human speech to first sound heard.',
    distinctContribution:'This is an operator-measured, small-sample hardware report tied to a merged OpenRGD voice PR. The useful contribution is its transparent timing decomposition and reproducible next experiment, not an unqualified claim of a universally faster robot assistant.',
    sections:[
      {kicker:'HARDWARE AND MODEL',title:'A constrained local voice loop reveals delays that desktop benchmarks can hide.',paragraphs:[
        'The operator used the Paky-01 Ubuntu mini-PC with the Piper Italian Serena High voice. The native pipeline also used a BC-Master USB microphone, faster-whisper base and a Bose A2DP output. The voice model runs locally; the source benchmark used the same test phrase and compared resident/cached synthesis against repeated model loading.',
        'The PR deliberately preserved conventional full-WAV generation before playback. It did not introduce word-level streaming, duplex speech, acoustic echo cancellation or proven microphone-to-first-audible-sample latency. The model loader and synthesis phases were measured in software, not at the speaker diaphragm.',
      ]},
      {kicker:'CONTROLLED SOFTWARE COMPARISON',title:'Subsequent-turn fixed-text median dropped by 2.177 seconds in this trial.',paragraphs:[
        'Four subsequent resident-model synthesis timings had a median of 4.595 s. Four no-cache iterations of the same built-in text, on the same mini-PC worktree, had a median combined load/synthesis total of 6.772 s. The difference is 2.177 s, approximately 32.1% relative to the no-cache value for these specific short trials.',
        'This comparison should not be simplified into “caching alone caused a 32% gain.” The no-cache runs also had inference variability and other CPU scheduling factors. Cold first requests were not matched: the resident run took 8.844 s while the no-cache cold total was 7.178 s.',
      ]},
      {kicker:'THREE REAL VOICE TURNS',title:'Actual speech interaction had separate STT, TTS and playback windows.',paragraphs:[
        'In a real three-turn local voice regression, reported Whisper STT times were 1.14, 1.23 and 4.14 seconds. Piper TTS took 1.65, 2.73 and 2.31 seconds for utterances of different lengths. Bose playback durations were recorded separately as 2.59, 4.24 and 2.92 seconds.',
        'All three turns completed. This proves the native mic/STT/TTS/output path worked for that operator session; it does not establish LED event reception from that log or prove that the human heard the first phoneme within any of the measured synthesis intervals.',
      ]},
      {kicker:'PRIOR ART AND REPLICATION',title:'Persistent Piper model loading is an established optimization idea.',paragraphs:[
        'An IEEE 2026 evaluation of Piper on constrained edge devices also reports that repeated model loading can dominate real-time behavior and motivates a persistently initialized synthesis engine. That finding supports the engineering hypothesis; it does not validate numerical transfer across processors, voices, languages or runtimes.',
        'The next useful scientific result would be a controlled end-to-end experiment with timestamped speech onset, VAD decision, STT completion, text response, synthesis start, first PCM write, output-buffer arrival and acoustic speaker onset. The measured time-to-first-audio could behave differently from synthesis medians because Bluetooth buffering and playback scheduling remain outside the model.',
      ]}
    ],
    protocol:{
      stages:['Known speech stimulus','VAD onset / end','Whisper STT','Reply generation / selection','Piper load + synthesis','PCM or WAV dispatch','Speaker acoustic onset'],
      requiredMeasurements:['Same text/voice and fixed hardware across conditions','Resident vs no-cache medians and p95 with adequate repetitions','Model load, synthesis and total wall time','VAD-to-STT / text-to-audio intervals','First PCM write vs independent acoustic first sound','CPU/RAM contention, Bluetooth state and output duration'],
      negativeControls:['Cold start measured separately from warm','Different-length phrases segregated','Bluetooth output vs local wired/PCM reference','Same waveform through buffering changes','No-cache baseline with order counterbalancing','No LED/visual claim without independent BLE receipt'],
    },
    measured:{
      label:'Operator-reported Paky-01 measurements · 26 October 2026',
      fixedText:[
        {condition:'Resident Piper warm',median:'4.595 s',n:'4 subsequent turns',boundary:'Full WAV synthesis, no acoustic onset'},
        {condition:'No-cache warm',median:'6.772 s',n:'4 subsequent turns',boundary:'Model load + synthesis; same test phrase'},
      ],
      voiceTurns:[
        {turn:'1',stt:'1.14 s',tts:'1.65 s',playback:'2.59 s'},
        {turn:'2',stt:'1.23 s',tts:'2.73 s',playback:'4.24 s'},
        {turn:'3',stt:'4.14 s',tts:'2.31 s',playback:'2.92 s'},
      ],
      interpretation:'The -2.177 s / approximately 32.1% warm-median difference is descriptive only. Four samples per condition, unequal cold start and possible CPU scheduling variation preclude a strong causal or statistical claim. The three real turns used different utterance lengths and cannot be compared directly to the fixed-text trial.',
    },
    connected:[
      {href:'/research/theses/autonomous-cognition-without-actuator-authority',title:'Autonomy Without Actuation',copy:'Why a voice interface does not automatically become permission to communicate or act.'},
      {href:'/research/so101-embodiment-lab',title:'SO-101 Lab',copy:'Evidence-first methodology also applied to physical robot learning.'},
      {href:'/research',title:'OpenRGD Research',copy:'Other physical and architecture experiments.'}
    ]
  }
]

export function findThesisDossier(id: string): Dossier | undefined {
  return thesisDossiers.find(dossier=>dossier.id===id)
}
