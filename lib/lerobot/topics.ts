export type LeRobotTopic = {
  slug: string
  title: string
  description: string
  h1: string
  lead: string
  maturity: string
  evidenceBoundary: string
  sourceVersion: string
  sources: Array<{ label: string; href: string }>
  related: Array<{ href: string; title: string; copy: string }>
  sections: Array<{
    kicker: string
    title: string
    paragraphs: string[]
    flow?: string[]
    grid?: Array<{ label: string; title: string; copy: string }>
  }>
}

export const lerobotTopics: LeRobotTopic[] = [
  {
    slug:'so101-calibration',
    title:'SO-101 Calibration in LeRobot',
    description:'How SO-101 leader and follower calibration works in LeRobot, why persistent robot IDs matter, and how to record reproducible calibration evidence.',
    h1:'SO-101 calibration is a correspondence problem, not a one-time setup checkbox.',
    lead:'LeRobot stores calibration against the configured robot/teleoperator identity. Reusing the same IDs across calibration, teleoperation and recording matters because joint positions must refer to the same actual mechanical configuration.',
    maturity:'FIELD METHOD · OPERATOR-CONFIRMED CALIBRATION',
    evidenceBoundary:'Persistent leader and follower calibration was reported as working in the OpenRGD lab; calibration JSON hashes and a complete independently audited commissioning trace are not publicly archived.',
    sourceVersion:'LeRobot SO-101 and real-world robot documentation · reviewed 16 Oct 2026',
    sources:[
      {label:'LeRobot SO-101 — official calibration guide',href:'https://huggingface.co/docs/lerobot/so101'},
      {label:'LeRobot — imitation learning on real robots',href:'https://huggingface.co/docs/lerobot/il_robots'},
      {label:'OpenRGD SO-101 evidence ledger',href:'/research/so101-embodiment-lab/evidence.json'}
    ],
    related:[
      {href:'/lerobot/so101-teleoperation',title:'SO-101 Teleoperation',copy:'What the leader/follower smoke tests establish and how to repeat them.'},
      {href:'/lerobot/so101-dataset',title:'SO-101 Dataset',copy:'Carry calibration identity into episode metadata and training datasets.'},
      {href:'/research/so101-embodiment-lab',title:'SO-101 Lab',copy:'View the operator-reported calibration and teleoperation evidence state.'}
    ],
    sections:[
      {kicker:'TWO ROLES',title:'The leader is not the follower, even when the motion should match.',paragraphs:[
        'The SO-101 leader is a human-driven teleoperator. The follower is the robot whose joints receive the commanded targets. They can have different gearing, offsets, motor IDs and mechanical installation. Calibration creates the mapping from motor readings to meaningful joint coordinates for each specific unit.',
        'In the OpenRGD lab, the identifiers openrgd_leader and openrgd_follower were used with persistent LeRobot calibration files. A prior work session reported all 12 servos configured and the black leader moving the white follower. These are operator-confirmed observations, not a public metrology study.'
      ]},
      {kicker:'IDENTITY',title:'Calibration is coupled to configuration identity.',paragraphs:[
        'The official LeRobot setup uses separate --teleop.id and --robot.id values. Keeping those IDs unchanged allows LeRobot to find existing calibration files; accidentally changing an ID can make a known robot appear uncalibrated.',
        'A reproducible research record should bind robot ID, motor ordering, hardware configuration, calibration method, firmware/driver version, calibration artifact digest and date of verification. Serial-device paths are operational settings, not scientific proof.'
      ],grid:[
        {label:'01',title:'Physical instance',copy:'Record which exact leader and follower were used, without publishing sensitive device identifiers.'},
        {label:'02',title:'Joint ordering',copy:'Pin names, motor IDs, sign conventions and units for every state and action dimension.'},
        {label:'03',title:'Calibration digest',copy:'Hash the configuration actually loaded rather than treating a filename as immutable evidence.'},
        {label:'04',title:'Re-check',copy:'Verify correspondence after hardware, bus, motor or mechanical changes.'}
      ]},
      {kicker:'COMMISSIONING',title:'Verification should happen before data collection or replay.',paragraphs:[
        'Start in a clear workspace with an operator-reachable stop/torque-off procedure, check connection and joint correspondence, then verify conservative low-amplitude motion under supervision. A successfully parsed calibration file does not prove a gripper will move in the expected direction.',
        'Any discrepancy in joint direction, target sign, gripper mapping, mechanical range or drift should block further recording or learned-policy evaluation until resolved. Never use an AI policy output to bypass this preflight.'
      ],flow:['Identify physical device','Load calibration','Check joint/state signs','Low-amplitude supervised check','Record calibration digest','Begin bounded experiment']},
      {kicker:'EVIDENCE BOUNDARY',title:'What remains missing from the public lab record?',paragraphs:[
        'We have an operator-confirmed working calibration setup. The site does not currently host calibration JSON bytes, SHA-256 values, independent range measurements or a signed commissioning report. A new experiment should record them before making stronger claims about reproducibility or cross-robot calibration transfer.'
      ]}
    ]
  },
  {
    slug:'so101-teleoperation',
    title:'SO-101 Leader–Follower Teleoperation',
    description:'LeRobot SO-101 leader/follower teleoperation: the operator-reported OpenRGD smoke test, persistent calibration, connection workflow and limits of the evidence.',
    h1:'A functioning leader–follower link is the beginning of a robot-learning experiment, not its conclusion.',
    lead:'Teleoperation turns human movement into repeatable robot-action demonstrations. The OpenRGD SO-101 work sessions confirmed working native LeRobot leader/follower motion, but did not yet establish quantitative trajectory tracking or policy autonomy.',
    maturity:'OPERATOR-CONFIRMED FIELD NOTE',
    evidenceBoundary:'The teleoperation result is an operator report. Public time series, latency distributions, controller error and independent replay traces are not yet archived.',
    sourceVersion:'LeRobot real-world robot workflow + OpenRGD operator notes · reviewed 16 Oct 2026',
    sources:[
      {label:'LeRobot real-world robot teleoperation',href:'https://huggingface.co/docs/lerobot/il_robots'},
      {label:'LeRobot SO-101 setup',href:'https://huggingface.co/docs/lerobot/so101'},
      {label:'OpenRGD SO-101 operator evidence',href:'/research/so101-embodiment-lab/evidence.json'}
    ],
    related:[
      {href:'/lerobot/so101-calibration',title:'Calibration',copy:'Why matching IDs and checked joint ranges precede teleoperation.'},
      {href:'/lerobot/so101-dataset',title:'Dataset Capture',copy:'Record actions and replay a bounded local episode.'},
      {href:'/research/so101-embodiment-lab',title:'SO-101 Lab',copy:'See dated evidence and unverified outcomes.'}
    ],
    sections:[
      {kicker:'DOCUMENTED LAB STATE',title:'What our first smoke sessions actually established.',paragraphs:[
        'On 30 August 2026, the project operator reported that the leader arm drove the follower after configuring and calibrating the twelve bus servos. A second working teleoperation confirmation followed on 16 September 2026 after troubleshooting.',
        'The work sessions also reported a local single-episode no-video recording and a successful replay. The evidence ledger records these separately. None of these facts is proof that a learned policy was trained or that the robot reached a measured autonomous task-success rate.'
      ]},
      {kicker:'LE ROBOT PIPELINE',title:'Native LeRobot gives us a real data-acquisition path.',paragraphs:[
        'The upstream LeRobot interface connects the follower robot and leader teleoperator with separate configs. The robot ID determines which calibration record is loaded. When cameras are configured, an observation stream can be added, but the historical OpenRGD smoke capture was explicitly no-video.',
        'Use the current LeRobot CLI documentation as the version-specific source for commands. Do not assume a command copied from an older repository branch remains valid after framework upgrades.'
      ],flow:['Calibrated leader','Human joint movement','Teleoperator sample','Follower action command','Physical joint state','Optional episode recording']},
      {kicker:'WHAT TO MEASURE',title:'Visual following is not yet a tracking benchmark.',paragraphs:[
        'To quantify leader/follower fidelity, record calibrated leader position, follower target, follower observed position, timestamps and connection faults. Compare per-joint lag, sign consistency, overshoot, steady-state error, dropped commands and reset behavior.',
        'Feedback acquisition timestamps must be distinguished from timestamps at which software receives values. A read-back that arrives late is not a direct measurement of motor onset or mechanical response.'
      ],grid:[
        {label:'01',title:'Correspondence',copy:'Are the leader and follower reporting comparable joint coordinates under matching calibration?' },
        {label:'02',title:'Lag',copy:'What is the distribution from observed leader motion to measured follower movement?' },
        {label:'03',title:'Tracking error',copy:'How close is the physical follower trajectory, not just the sent action?' },
        {label:'04',title:'Fault handling',copy:'What happens on port loss, unresponsive servo, bad calibration or safe-stop?' }
      ]},
      {kicker:'OPENRGD RUNTIME',title:'Native LeRobot teleoperation is not the same as an OpenRGD physical runtime sign-off.',paragraphs:[
        'LeRobot acts as the native robot-interface and data-acquisition layer in this experiment. OpenRGD candidate contracts describe a separate semantic handoff through ActionIntent, somatic translation, capability grounding and safety gating.',
        'The canonical OpenRGD repository is non-actuating. Passing a native LeRobot teleoperation smoke test does not automatically validate an independently governed embodied runtime or a Body Adapter.'
      ]}
    ]
  },
  {
    slug:'so101-dataset',
    title:'SO-101 LeRobotDataset: Recording and Provenance',
    description:'How to build a reproducible SO-101 LeRobotDataset v3: state/action schemas, video synchronization, calibration provenance, episode records and the OpenRGD smoke baseline.',
    h1:'A useful robot-learning dataset is more than a folder of episodes.',
    lead:'LeRobotDataset stores state/action time series, multimodal video and episode metadata. OpenRGD adds a provenance question: can each row be traced to the physical robot, calibration, camera and task protocol that produced it?',
    maturity:'DATASET REFERENCE · SMOKE RECORD OPERATOR-CONFIRMED',
    evidenceBoundary:'One local no-video episode was reported; a public v3 dataset, pinned revision, video-synchronized dataset and training-ready evaluation corpus are not yet available as OpenRGD evidence.',
    sourceVersion:'LeRobotDataset v3 documentation + OpenRGD operator work record · 16 Oct 2026',
    sources:[
      {label:'LeRobotDataset v3 — official format',href:'https://huggingface.co/docs/lerobot/lerobot-dataset-v3'},
      {label:'LeRobot — real-world record/replay workflow',href:'https://huggingface.co/docs/lerobot/il_robots'},
      {label:'OpenRGD evidence ledger',href:'/research/so101-embodiment-lab/evidence.json'},
      {label:'OpenRGD evaluation protocol',href:'/research/so101-embodiment-lab/protocol.json'}
    ],
    related:[
      {href:'/lerobot/so101-teleoperation',title:'Teleoperation',copy:'Generate human-driven trajectories with a commissioned SO-101.'},
      {href:'/lerobot/so101-evaluation',title:'Evaluation Protocol',copy:'Keep training and evaluation episodes separate.'},
      {href:'/lerobot/so101-inference-latency',title:'Timing',copy:'Why dataset FPS and acquisition timestamps do not equal feedback latency.'}
    ],
    sections:[
      {kicker:'RECORDED BASELINE',title:'What the first local smoke dataset proves—and what it does not.',paragraphs:[
        'A work session on 30 August 2026 reported a local dataset identified as openrgd/so101-smoke: episode 0, 448 samples during a nominal 15-second capture without video. The operator reported a clean stop and successful replay. The dataset is not presented as a public Hugging Face repository, and no source checksum is available in the public evidence record.',
        'That result supports the narrower claim that the local capture/replay path worked in the reported session. It does not establish dataset quality, fixed actual FPS, successful autonomous manipulation, generalization, or a SmolVLA/ACT trained policy.'
      ]},
      {kicker:'LEROBOTDATASET V3',title:'Separate low-dimensional signals, video and episode metadata.',paragraphs:[
        'The official v3 layout stores low-dimensional state/action/time-series signals in Parquet shards and camera frames in MP4 shards. The storage layout can concatenate multiple episodes per file, so episodes are recovered from metadata rather than assuming one file equals one trial.',
        'The v3 metadata describes feature types/shapes and FPS, tasks, episode boundaries and global statistics. This allows training systems to load synchronized observation/action windows while the full physical provenance still needs to be documented separately.'
      ],grid:[
        {label:'meta/info.json',title:'Feature and FPS schema',copy:'Feature names, data types, dimensions, codebase version and storage templates.'},
        {label:'meta/tasks.jsonl',title:'Task language',copy:'The task descriptions and task IDs associated with episodes.'},
        {label:'meta/episodes',title:'Episode indexing',copy:'Lengths, offsets and episode-to-shard relationships.'},
        {label:'data + videos',title:'Sensorimotor and image data',copy:'Parquet time series and video shards; not automatically a synchronized, validated lab instrument.'}
      ]},
      {kicker:'CAMERA PROVENANCE',title:'Camera availability is not proof that an earlier episode contains video.',paragraphs:[
        'A laboratory may have usable USB cameras and still record an episode with no video. That is the case for the original reported SO-101 smoke run. A future dataset must freeze camera placement, lens, exposure behavior, image resolution, FPS, stream names and timestamp strategy before training.',
        'If the learner uses a wrist view and an overhead view, the data card needs to map those stream names into model input features. A camera name alone does not prove calibration or synchronization.'
      ]},
      {kicker:'DATA CARD GATE',title:'The data card should describe how the dataset was produced.',paragraphs:[
        'Record exact LeRobot revision, robot identity, joint order, actuator units, calibration SHA-256, dataset revision, camera configuration, task setup, trial selection and operator resets. Preserve failure episodes rather than deleting them silently.',
        'Published benchmark claims require independent held-out evaluation episodes and explicitly separated training data. Model evaluation cannot simply replay demonstrations and call that task success.'
      ],flow:['Task definition','Preflight + calibration','Synchronized observation/action','Episode metadata','Checksums + data card','Train/validation split','Held-out evaluation']},
      {kicker:'NEXT COLLECTION',title:'The next milestone is a pinned, video-aware dataset—not a larger unverified smoke file.',paragraphs:[
        'The canonical next step is to repeat the baseline under a predeclared task protocol, capture raw logs and optional camera streams with tracked frame timing, archive the dataset and attach a machine-readable evidence record. The public lab protocol provides the fields needed to make that recording auditable.'
      ]}
    ]
  },
  {
    slug:'so101-evaluation',
    title:'SO-101 Policy Evaluation: ACT vs SmolVLA',
    description:'A reproducible SO-101 real-robot policy evaluation protocol: ACT, SmolVLA, task success definitions, matched trials, aborts, failure taxonomy and evidence boundaries.',
    h1:'Compare ACT and SmolVLA on the same robot, task and evidence—not across incompatible papers.',
    lead:'OpenRGD defines the evaluation protocol before it publishes results. The current SO-101 lab has confirmed native teleoperation and a smoke replay but has not published an ACT-versus-SmolVLA task benchmark.',
    maturity:'PRE-REGISTERED EVALUATION METHOD · NOT YET MEASURED',
    evidenceBoundary:'A comparison protocol exists. No matched ACT/SmolVLA trial dataset, success rate, confidence interval or autonomous run has been verified for OpenRGD.',
    sourceVersion:'LeRobot current policy and real-robot evaluation documentation + OpenRGD protocol v1',
    sources:[
      {label:'LeRobot real-world learning / rollout',href:'https://huggingface.co/docs/lerobot/il_robots'},
      {label:'LeRobot ACT policy',href:'https://huggingface.co/docs/lerobot/act'},
      {label:'LeRobot SmolVLA policy',href:'https://huggingface.co/docs/lerobot/smolvla'},
      {label:'OpenRGD SO-101 evaluation protocol',href:'/research/so101-embodiment-lab/protocol.json'}
    ],
    related:[
      {href:'/lerobot/so101-smolvla',title:'SmolVLA on SO-101',copy:'Model adaptation and what must be demonstrated on our hardware.'},
      {href:'/lerobot/so101-dataset',title:'Dataset and Data Card',copy:'Preserve calibration, camera and episode provenance.'},
      {href:'/research/so101-embodiment-lab',title:'Lab Evidence',copy:'Read statuses and download the trial-log template.'}
    ],
    sections:[
      {kicker:'FIRST PRINCIPLE',title:'Do not call a literature result an OpenRGD measurement.',paragraphs:[
        'A paper may evaluate a policy on one robot, another number of demonstrations, a different camera setup or a different task. Those values are useful background, not a head-to-head comparison for this lab.',
        'An OpenRGD claim about ACT versus SmolVLA requires the same task success definition, same physical embodiment, matched evaluation starts and controlled data/compute conditions—or a transparent explanation of differences.'
      ]},
      {kicker:'TASK PROTOCOL',title:'Freeze the physical task before collecting success statistics.',paragraphs:[
        'The first proposed task is a bounded object transfer inside a marked, safe, reachable workspace. The success condition is explicit: a lightweight object is released entirely inside the target zone before the predeclared timeout, without human intervention or a safety abort.',
        'Object properties, target geometry, camera angles, starting conditions and reset procedure must be fixed. The protocol intentionally leaves the timeout unset until the experiment is actually configured; no fabricated threshold is published.'
      ],flow:['Define task + success','Verify safe workspace','Pin robot + calibration','Archive dataset/checkpoint','Matched randomized trials','Failures and aborts','Report uncertainty']},
      {kicker:'COMPARISON CONDITIONS',title:'Use the same evidence protocol across policy variants.',paragraphs:[
        'The protocol defines four future conditions: human teleoperation reference, ACT autonomous policy, SmolVLA synchronous inference and the same SmolVLA checkpoint with asynchronous inference. Conditions remain marked as planned until their actual checkpoints, dependencies and observed trials are archived.',
        'Twenty matched trials per condition is an operational floor for a first comparative report, not a statistical guarantee. Every abort, loss of tracking and operator rescue must be counted under an explicit failure category.'
      ],grid:[
        {label:'TELEOP',title:'Human-driven reference',copy:'Measures task execution and physical setup; does not represent autonomous policy ability.'},
        {label:'ACT',title:'Imitation policy',copy:'Requires a pinned trained checkpoint, dataset revision and evaluation configuration.'},
        {label:'SMOLVLA',title:'Synchronous action chunks',copy:'Same task protocol with explicit inference and execution timing.'},
        {label:'ASYNC',title:'Asynchronous action chunks',copy:'Same SmolVLA checkpoint; log queue starvation, action age and correction behavior.'}
      ]},
      {kicker:'FAILURE TAXONOMY',title:'Failure type matters as much as aggregate success.',paragraphs:[
        'Use a fixed list including grasp miss, object drop, off-target release, perception/occlusion, limit/workspace, action staleness, controller mismatch, timing/dropped frames, operator abort, safety abort and timeout.',
        'If a safety check stops a trial, this is not a hidden exclusion. Report it both in the denominator treatment and as its own event; the protocol must be frozen before comparing conditions.'
      ]},
      {kicker:'EVIDENCE RELEASE',title:'What a publishable comparison must contain.',paragraphs:[
        'At minimum: exact robot configuration, task video and numeric state/action traces where permitted, data card, calibration and camera hashes, policy checkpoint revision, trial-level CSV with outcomes, predeclared exclusions, run timestamps and checksums. Publish raw counts and uncertainty instead of a single heroic success percentage.',
        'The public protocol and header-only CSV template are available from the SO-101 lab; they contain no invented experiment rows.'
      ]}
    ]
  },
  {
    slug:'so101-inference-latency',
    title:'SO-101 Inference Latency and Async Action Chunks',
    description:'How to measure SO-101/LeRobot capture-to-action latency, action age, queue starvation and synchronous versus asynchronous SmolVLA inference.',
    h1:'For robot policies, inference time and physical response time are different clocks.',
    lead:'A Vision-Language-Action model can predict an action chunk on a slower schedule than a robot executes individual commands. Meaningful latency testing separates camera acquisition, model computation, queueing, dispatch and physical feedback.',
    maturity:'TIMING PROTOCOL · NO OPENRGD LATENCY RESULTS YET',
    evidenceBoundary:'This is a measurement method informed by official LeRobot asynchronous inference documentation, not a claim of tested SO-101 model latency.',
    sourceVersion:'LeRobot async inference and deployment reference + OpenRGD protocol v1',
    sources:[
      {label:'LeRobot — asynchronous inference',href:'https://huggingface.co/docs/lerobot/async'},
      {label:'LeRobot — real-world robot deployment',href:'https://huggingface.co/docs/lerobot/il_robots'},
      {label:'OpenRGD timing schema',href:'/research/so101-embodiment-lab/protocol.json'},
      {label:'OpenRGD runtime boundary',href:'/architecture/runtime-boundary'}
    ],
    related:[
      {href:'/lerobot/so101-evaluation',title:'Policy Evaluation',copy:'Compare task success alongside latency and failures.'},
      {href:'/lerobot/so101-smolvla',title:'SmolVLA',copy:'Why action chunking changes the inference/execution interface.'},
      {href:'/vla/action-representation',title:'Action Representation',copy:'Action tokens, continuous actions, flow matching and temporal chunks.'}
    ],
    sections:[
      {kicker:'MEASUREMENT BOUNDARY',title:'One wall-clock value cannot describe the whole embodied loop.',paragraphs:[
        'Record monotonic timestamps for observation capture, availability, preprocessing, inference start/end, action decoding, dispatch and observed feedback. Compare them without confusing dispatch with actuator onset.',
        'On one computer, monotonic nanoseconds make interval measurements interpretable. Across robot client and remote inference server, record an independent clock alignment and UTC anchor; never subtract unrelated machine-local monotonic clocks as if they shared an origin.'
      ],flow:['Camera capture','Frame available','Preprocess','Inference','Decode action chunk','Command dispatch','Measured feedback']},
      {kicker:'METRICS',title:'Publish distributions and data age, not just an average FPS.',paragraphs:[
        'The experimental schema reserves capture-to-dispatch latency, model compute latency, dispatch-to-feedback latency, p50/p95 of important intervals, stale frame age at the action boundary, queue-empty events and dropped frames.',
        'An action stream running at a target rate does not prove every joint moves at that rate. Likewise, reported camera FPS does not establish that each frame reaches the policy with a known bounded delay.'
      ],grid:[
        {label:'P50 / P95',title:'Timing distribution',copy:'Characterize normal response and tail latency rather than hiding stalls in a mean.'},
        {label:'FRAME AGE',title:'Staleness',copy:'Measure how old the observation was when its corresponding action was dispatched.'},
        {label:'QUEUE',title:'Action continuity',copy:'Count exhausted action queues and overlapping chunks; distinguish continuity from timely corrections.'},
        {label:'FEEDBACK',title:'Physical observation',copy:'Record return measurements separately from issued targets and software command times.'}
      ]},
      {kicker:'SYNC VS ASYNC',title:'Asynchronous inference changes idle time and the meaning of freshness.',paragraphs:[
        'Official LeRobot async inference separates a PolicyServer from RobotClient. The client can execute one action chunk while the server generates the next. Relevant parameters include actions_per_chunk, chunk_size_threshold and action aggregation.',
        'The tradeoff is not simply “async is faster.” Old actions may remain in a queue after the world changes, and large chunks can reduce reactiveness. A valid SO-101 test must evaluate queue starvation, action age and task correction under matched perturbations.'
      ]},
      {kicker:'OPENRGD',title:'The semantic/runtime boundary must survive slow or remote inference.',paragraphs:[
        'A high-level model should not become final actuator authority merely because it emits continuous numbers. In OpenRGD’s candidate architecture, proposed actions pass through embodiment grounding and execution-responsibility boundaries outside the canonical standard repo.',
        'No OpenRGD SO-101 latency numbers, remote 5080 inference speed or 1 kHz hardware-control performance are claimed here. Those need timestamps from the actual implementation.'
      ]}
    ]
  },
  {
    slug:'so101-smolvla',
    title:'SmolVLA on SO-101: Training and Deployment Evidence',
    description:'SmolVLA + LeRobot + SO-101: action chunks, camera/state features, dataset requirements, async inference and a cautious real-robot experiment roadmap.',
    h1:'SmolVLA on SO-101 is an experiment to measure—not a result we can assume.',
    lead:'SmolVLA is an open compact Vision-Language-Action policy integrated with LeRobot. SO-101 offers an accessible physical embodiment for evaluating whether the model’s predicted actions survive calibration, sensing, timing and execution boundaries.',
    maturity:'MODEL REFERENCE · LAB EXPERIMENT NOT YET RUN',
    evidenceBoundary:'OpenRGD does not currently publish a completed SmolVLA checkpoint, successful real-robot autonomous rollout, measured speedup or independent SO-101 task success.',
    sourceVersion:'Official SmolVLA / LeRobot docs and OpenRGD evaluation protocol · 16 Oct 2026',
    sources:[
      {label:'SmolVLA — Hugging Face research article',href:'https://huggingface.co/blog/smolvla'},
      {label:'SmolVLA — official LeRobot documentation',href:'https://huggingface.co/docs/lerobot/smolvla'},
      {label:'LeRobot async inference',href:'https://huggingface.co/docs/lerobot/async'},
      {label:'OpenRGD SO-101 experiment protocol',href:'/research/so101-embodiment-lab/protocol.json'}
    ],
    related:[
      {href:'/vla/models',title:'VLA Model Landscape',copy:'Place SmolVLA beside OpenVLA, GR00T, Gemini Robotics and π0.'},
      {href:'/lerobot/so101-dataset',title:'Dataset Capture',copy:'What the policy training stream must actually contain.'},
      {href:'/lerobot/so101-evaluation',title:'Evaluation',copy:'How we will compare SmolVLA to ACT on one bounded physical task.'}
    ],
    sections:[
      {kicker:'MODEL ROLE',title:'A compact VLA can still require a careful robot interface.',paragraphs:[
        'SmolVLA uses a vision-language backbone and a specialized continuous-action expert. It can condition action generation on image observations, language instructions and robot state, but the checkpoint’s expected feature schema and action space still need to match the deployed embodiment.',
        'The existing SO-101 teleoperation and no-video dataset smoke test do not establish that a SmolVLA policy has trained, been loaded or autonomously controlled our follower.'
      ]},
      {kicker:'EVIDENCE REQUIREMENTS',title:'Before training: observation/action semantics must be explicit.',paragraphs:[
        'A useful training dataset needs named camera streams, consistent joint/state ordering, action features, aligned timestamps, task labels and episode splits. Calibration digest and exact LeRobot/model revisions belong in the data card.',
        'Our first dataset smoke run captured no video. It is therefore not presented as the multimodal training set required to substantiate a vision-conditioned SmolVLA task result.'
      ],grid:[
        {label:'OBSERVATION',title:'Camera + proprioception',copy:'Pin image dimensions, frame names, timestamps and robot-state feature order.'},
        {label:'ACTION',title:'Continuous command space',copy:'Validate units, joint ordering, gripper semantics and control mode against the actual follower.'},
        {label:'DATA',title:'Training/validation split',copy:'Record dataset revision, episode identities, held-out task starts and any excluded trials.'},
        {label:'MODEL',title:'Checkpoint and inference',copy:'Pin policy type, config, model revision, action horizon and compute device.'}
      ]},
      {kicker:'FIRST REAL EXPERIMENT',title:'Prefer a tiny, reproducible task before broad autonomy claims.',paragraphs:[
        'Start with a lightweight object-transfer task, supervised inside a bounded workspace, with a predeclared success condition and known safe-stop behavior. Evaluate the same task under a pinned checkpoint and held-out starts.',
        'For the comparison phase, capture ACT and SmolVLA under matched trial conditions. For async inference, retain the same SmolVLA checkpoint so queueing and action-age effects can be distinguished from model changes.'
      ],flow:['Commissioned robot','Video-aware dataset','Train/fine-tune checkpoint','Offline validation','Supervised rollout','Matched trials','Raw evidence publication']},
      {kicker:'RUNTIME BOUNDARY',title:'A trained policy still is not a safety controller.',paragraphs:[
        'Successful action prediction does not prove calibration, collision avoidance, physical bounds or full runtime safety. OpenRGD treats VLA output as a proposal relative to the target body; independently governed runtime and adapter components own execution.',
        'The public evaluation protocol exists today. The measured SmolVLA SO-101 result will remain empty until an actual run meets its evidence gate.'
      ]}
    ]
  }
]

export function getLeRobotTopic(slug: string): LeRobotTopic | undefined {
  return lerobotTopics.find((topic) => topic.slug === slug)
}
