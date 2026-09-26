export type BlogSource = {
  label: string
  href: string
}

export type BlogRelated = {
  label: string
  href: string
}

export type BlogSection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  code?: {
    label: string
    value: string
  }
  note?: string
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  modifiedAt: string
  readTime: string
  lead: string
  sections: BlogSection[]
  sources: BlogSource[]
  related: BlogRelated[]
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "openrgd-0-2-0-why-robot-graph-definition-exists",
    "title": "OpenRGD 0.2.0 — Why Robot Graph Definition exists",
    "description": "Why OpenRGD separates semantic embodiment from robot description, runtime execution and hardware authority — and what the 0.2.0 Draft actually defines.",
    "category": "Specification",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "8 min",
    "lead": "OpenRGD exists because describing a robot is not the same problem as grounding an intelligent system in that robot. Robot Graph Definition is our attempt to make embodiment explicit, machine-readable, source-aware and portable without quietly taking ownership of execution.",
    "sections": [
      {
        "id": "grounding-gap",
        "title": "The missing layer is not another robot file format.",
        "paragraphs": [
          "Robotics already has strong representations for geometry, kinematics, dynamics, scenes and simulation. OpenRGD does not start from the assumption that those formats are broken. It starts from a different problem: an intelligent system needs to know which body it is reasoning about, what that body can actually do, what evidence supports those claims, which constraints apply, and where semantic context stops before physical execution begins.",
          "That boundary matters most when cognition becomes portable. A planner, VLM, VLA, policy or world model can produce useful proposals, but a proposal is not yet grounded in a specific embodied system. OpenRGD gives that grounding a representation instead of leaving it implicit in application code, prompts, controller configuration or tribal knowledge."
        ],
        "note": "OpenRGD is a semantic embodiment layer. It is not a replacement for URDF, OpenUSD, SDFormat, MJCF, ROS 2 or a physical robot runtime."
      },
      {
        "id": "three-version-axes",
        "title": "0.2.0 is a standard bundle, not a claim that the whole ecosystem is finished.",
        "paragraphs": [
          "OpenRGD deliberately separates version axes that mature at different speeds. The current standard bundle is 0.2.0 Draft. The Python toolchain is a 0.1.1 working alpha. Agent Contracts are a 0.1.0 convergence candidate and remain non-normative. Keeping those axes separate prevents a CLI release, an experimental contract or a runtime prototype from being mistaken for a new normative standard.",
          "The same discipline applies inside the model. Foundation and Operation are the most stable semantic areas. Agency remains experimental. Volition is experimental. Evolution and Ether are proposals. Maturity is part of the information architecture because users and machines need to distinguish adopted structure from active research."
        ],
        "bullets": [
          "Standard bundle 0.2.0 — Draft.",
          "Python toolchain 0.1.1 — working alpha.",
          "Agent Contracts 0.1.0 — convergence candidate, non-normative."
        ]
      },
      {
        "id": "seven-domains",
        "title": "The domain model is about ownership, not decoration.",
        "paragraphs": [
          "The current OpenRGD domain sequence is Core, Foundation, Operation, Agency, Volition, Evolution and Ether. These names are useful only if they clarify who owns which class of meaning. Foundation captures body-grounded description. Operation captures executable capability semantics and constraints. Higher domains progressively deal with agency, intent, adaptation and shared context.",
          "The key rule is that later domains do not get to invent missing facts from earlier ones. A cognitive layer cannot compensate for an unknown actuator limit by assuming a convenient value. A capability cannot become executable merely because a planner wants it. The graph is useful when uncertainty remains explicit."
        ]
      },
      {
        "id": "authority-model",
        "title": "Source authority is explicit.",
        "paragraphs": [
          "The canonical repository maintains an authority order across its artifacts: manifest, modular specification, accepted contracts, candidate contracts, standard mirror, seed, generated material and history. That ordering is designed to stop convenient generated output or old documentation from silently becoming normative truth.",
          "Integrity has the same boundary. OPENRGD_SOURCE_TREE_SHA256_V1 can prove content identity for a source tree. It does not prove authorship, approval, physical safety or compatibility with a particular robot. OpenRGD treats those as different questions."
        ]
      },
      {
        "id": "runtime-boundary",
        "title": "The standard stops before physical execution.",
        "paragraphs": [
          "The canonical OpenRGD repository owns the representation, contracts, validation, compilation and static interoperability tooling. It does not ship the canonical physical runtime. Physical execution belongs to an independently governed embodied runtime and to hardware-specific Body Adapters.",
          "That separation is not an implementation inconvenience. It is one of the central safety and interoperability decisions of the project. A machine-readable body description can inform execution without itself becoming actuator authority."
        ],
        "code": {
          "label": "Candidate embodied execution path",
          "value": "CognitionProposal → ActionIntent → Somatic Translator → CapabilityPlan → Operation Safety Gate → DecisionTrace → Body Adapter → Hardware"
        }
      },
      {
        "id": "what-next",
        "title": "What OpenRGD should become.",
        "paragraphs": [
          "The objective is not to accumulate an ever larger ontology for its own sake. The useful endpoint is a compact, auditable representation that lets tools, models and runtimes exchange embodied context without collapsing description, cognition, safety and execution into one opaque system.",
          "Version 0.2.0 is therefore best read as a public contract for convergence: enough structure to build against, enough maturity labels to show what is not settled, and enough boundary discipline to keep future runtime work from rewriting the meaning of the standard."
        ]
      }
    ],
    "sources": [
      {
        "label": "OpenRGD project overview",
        "href": "/openrgd"
      },
      {
        "label": "OpenRGD specification",
        "href": "/spec"
      },
      {
        "label": "Architecture overview",
        "href": "/architecture"
      },
      {
        "label": "Canonical repository",
        "href": "https://github.com/OpenRGD/openrgd"
      }
    ],
    "related": [
      {
        "label": "Runtime Boundary",
        "href": "/architecture/runtime-boundary"
      },
      {
        "label": "Robot Description",
        "href": "/robot-description"
      },
      {
        "label": "Interoperability",
        "href": "/interoperability"
      }
    ]
  },
  {
    "slug": "robot-description-is-evidence-not-permission",
    "title": "A robot description is evidence, not permission",
    "description": "Why structural robot descriptions should inform embodied systems without silently authorizing control, safety assumptions or hardware execution.",
    "category": "Architecture",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "7 min",
    "lead": "A robot file can tell us a great deal about a body. It cannot, by itself, tell an intelligent system that it is allowed to move that body. OpenRGD treats robot descriptions as evidence inputs, not execution authority.",
    "sections": [
      {
        "id": "description",
        "title": "Description and authority answer different questions.",
        "paragraphs": [
          "A URDF can encode links, joints, inertial properties and limits. SDFormat can describe richer simulation models and worlds. OpenUSD can compose complex scenes and physics schemas. MJCF can represent detailed MuJoCo dynamical systems. Those are powerful forms of evidence about a robot or simulated system.",
          "But none of those facts automatically establish the operational context required to issue a command to physical hardware. A joint limit authored in a model is not proof that a specific actuator is calibrated, connected, healthy, mapped to the expected device ID or currently safe to energize."
        ]
      },
      {
        "id": "evidence-chain",
        "title": "OpenRGD keeps the evidence chain visible.",
        "paragraphs": [
          "When source material enters OpenRGD, the goal is to preserve what the source supports and keep everything else explicit. Structural evidence can populate Foundation semantics. Provenance can record where a claim came from and when it was reviewed. Capability semantics can describe what an embodied system may support under stated conditions.",
          "The representation becomes more useful precisely because it refuses to erase uncertainty. Unknown calibration remains unknown. Missing controller semantics remain missing. A manufacturer-stated value remains different from an independently measured result."
        ],
        "code": {
          "label": "Separation of responsibility",
          "value": "source description → evidence → semantic grounding → capability context → runtime validation → hardware authority"
        }
      },
      {
        "id": "no-implicit-controller",
        "title": "No implicit controller should appear during import.",
        "paragraphs": [
          "A common failure mode in robotics tooling is to make a model convenient by filling gaps with defaults. That may be appropriate inside a tightly controlled simulator, but it is dangerous as a general semantic rule. If a source does not declare a transmission, controller, bus mapping, calibration or safety policy, OpenRGD should not manufacture one merely to make the graph look complete.",
          "This fail-closed posture also makes imported profiles easier to audit. A downstream runtime can tell which facts were sourced, which values were derived and which execution-critical bindings still require explicit commissioning."
        ]
      },
      {
        "id": "semantic-safety",
        "title": "Semantic safety is not functional safety.",
        "paragraphs": [
          "A rich semantic representation can help identify incompatible actions, missing prerequisites, unsupported capabilities or policy conflicts. That is useful safety context. It is not a substitute for inherently safe mechanical design, application integration, certified safety functions, deterministic runtime constraints or physical validation.",
          "OpenRGD therefore avoids turning labels such as verified, allowed or safe into overloaded assurances. The meaning of each state must remain narrow enough that a consumer cannot mistake data quality for physical certification."
        ]
      },
      {
        "id": "interoperability",
        "title": "The separation improves interoperability.",
        "paragraphs": [
          "Once description, semantic grounding and execution are separate layers, the same evidence can be reused across multiple consumers. A simulator may need geometry and dynamics. A planner may need capabilities and constraints. A provenance system may need claim lineage. A physical runtime may need a commissioned projection plus hardware-specific bindings.",
          "Interoperability then becomes composition between explicit contracts instead of a requirement that every tool agree on one giant file format or one runtime."
        ]
      }
    ],
    "sources": [
      {
        "label": "Robot Description",
        "href": "/robot-description"
      },
      {
        "label": "Robot Description Formats",
        "href": "/robot-description-formats"
      },
      {
        "label": "Robot Identity & Provenance",
        "href": "/robot-identity-provenance"
      },
      {
        "label": "Robot Safety Architecture",
        "href": "/robot-safety-architecture"
      }
    ],
    "related": [
      {
        "label": "URDF",
        "href": "/urdf"
      },
      {
        "label": "Interoperability",
        "href": "/interoperability"
      },
      {
        "label": "Import URDF",
        "href": "/docs/import-urdf"
      }
    ]
  },
  {
    "slug": "urdf-to-openrgd-import-what-the-file-proves",
    "title": "From URDF to OpenRGD: importing what the file proves — and nothing else",
    "description": "A practical look at the OpenRGD URDF importer, its evidence boundary and the deliberate refusal to invent safety, identity, controllers or hardware bindings.",
    "category": "Engineering",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "8 min",
    "lead": "The OpenRGD URDF importer has a deliberately narrow job: extract source-supported structural and physical evidence into a partial Foundation profile. Completeness is not the goal. Auditability is.",
    "sections": [
      {
        "id": "command",
        "title": "The import begins with a partial profile.",
        "paragraphs": [
          "The current toolchain exposes a direct import path for URDF. Its output is intentionally small. Rather than generating an apparently complete OpenRGD project, it emits only the Foundation modules that the importer can justify from the source material.",
          "That design makes the absence of information useful. If the imported source cannot prove kernel identity, alignment, cognition, safety policy, HAL bindings or controller configuration, those concepts do not appear as silently inferred facts."
        ],
        "code": {
          "label": "Current import flow",
          "value": "rgd import robot.urdf --out partial-robot\n\npartial-robot/\n└── spec/\n    └── 01_foundation/\n        ├── description.jsonc\n        └── actuation_dynamics.jsonc"
        }
      },
      {
        "id": "supported",
        "title": "What the importer can preserve.",
        "paragraphs": [
          "The supported evidence boundary includes robot and link structure, inertial data, joint topology, declared limits, authored dynamics and mimic relationships. Where physical values are present, the importer preserves them with type-correct semantics rather than flattening them into untyped text.",
          "That is enough to create meaningful machine-readable grounding, but it is intentionally not enough to operate a robot."
        ],
        "bullets": [
          "Robot name, links and supported structural relationships.",
          "Mass, inertial origin and complete inertia tensor when authored.",
          "Joint type, parent-child topology, origin and axis.",
          "Declared revolute and prismatic limits.",
          "Damping and friction when present in source.",
          "Explicit mimic relationships."
        ]
      },
      {
        "id": "missing",
        "title": "Missing values stay missing.",
        "paragraphs": [
          "The importer does not improve a source by inventing convenient numeric defaults. Absent numeric values remain absent. Malformed or non-finite physical values fail import. That rule matters because a deterministic-looking zero can be more dangerous than an explicit unknown.",
          "The same principle applies to concepts outside the URDF evidence boundary. Transmissions, controller configuration, vendor plugins, bus addresses, calibration and safety policy are not inferred merely because a physical system will eventually need them."
        ],
        "note": "A partial profile is a successful result when the source itself is partial."
      },
      {
        "id": "validation",
        "title": "Integrity and validation are separate steps.",
        "paragraphs": [
          "After import, the toolchain can validate source-tree identity and selected modules with rgd hash, rgd check and a deterministic non-actuating rgd boot. These operations improve confidence that the profile is internally coherent and that the content being reviewed is the content being consumed.",
          "They do not transform source identity into physical validation. A correct hash says that bytes match. It does not say that a motor is wired correctly or that a limit is safe for a particular installation."
        ],
        "code": {
          "label": "Validation path",
          "value": "rgd hash partial-robot\nrgd check partial-robot\nrgd boot partial-robot"
        }
      },
      {
        "id": "enrichment",
        "title": "Enrichment is explicit and remains unverified until proven.",
        "paragraphs": [
          "OpenRGD also supports an explicit seed-enrichment path. The important part is not that enrichment exists; it is that inherited assumptions remain labeled. A generated project records seed_compatibility_status = UNVERIFIED rather than pretending that inherited calibration, HAL, safety or behavioral assumptions are now facts about the imported body.",
          "This is the pattern we want for every importer: preserve evidence, expose transformation, label assumptions and keep physical authority elsewhere."
        ],
        "code": {
          "label": "Optional enrichment",
          "value": "rgd alive robot.urdf --out RGD-robot --seed default"
        }
      }
    ],
    "sources": [
      {
        "label": "Import URDF guide",
        "href": "/docs/import-urdf"
      },
      {
        "label": "Validation guide",
        "href": "/docs/validation"
      },
      {
        "label": "rgd CLI & Toolchain",
        "href": "/rgd"
      },
      {
        "label": "Canonical CLI guide",
        "href": "https://github.com/OpenRGD/openrgd/blob/main/CLI_GUIDE.md"
      }
    ],
    "related": [
      {
        "label": "Robot Description",
        "href": "/robot-description"
      },
      {
        "label": "URDF",
        "href": "/urdf"
      },
      {
        "label": "Export ROS 2",
        "href": "/docs/export-ros2"
      }
    ]
  },
  {
    "slug": "vla-actionintent-runtime-boundary",
    "title": "Why a VLA should not silently become the actuator authority",
    "description": "A candidate OpenRGD execution boundary for Vision-Language-Action systems: keep model output, embodiment grounding, safety validation and hardware authority distinct.",
    "category": "Physical AI",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "9 min",
    "lead": "Vision-Language-Action models make it increasingly natural for perception and language to produce robot actions. That does not mean model output should automatically become a motor command. OpenRGD treats the transition from cognition to execution as an explicit contract boundary.",
    "sections": [
      {
        "id": "vla-output",
        "title": "A VLA output can be useful without being authoritative.",
        "paragraphs": [
          "Different VLA systems expose different action interfaces. Some produce high-level skills, some trajectories, some discretized actions and some low-level control-like outputs. OpenRGD does not impose one universal VLA architecture. The candidate boundary is instead about authority: whatever the model emits should enter the embodied system as a proposal whose meaning is validated against the actual body.",
          "That distinction protects portability. A model can remain model-centric while embodiment-specific constraints remain attached to the robot, runtime and application."
        ]
      },
      {
        "id": "candidate-path",
        "title": "The candidate path inserts explicit transformation and validation.",
        "paragraphs": [
          "In the current OpenRGD architecture work, CognitionProposal becomes ActionIntent before somatic translation. The Somatic Translator resolves the intent against body semantics and produces a CapabilityPlan. An Operation Safety Gate then evaluates whether that plan can proceed under the current constraints before the Body Adapter reaches hardware.",
          "DecisionTrace sits in the path as an auditable record of the decision context. This does not make the architecture a certified safety system; it makes the semantic transitions inspectable."
        ],
        "code": {
          "label": "OpenRGD candidate execution path",
          "value": "CognitionProposal → ActionIntent → Somatic Translator → CapabilityPlan → Operation Safety Gate → DecisionTrace → Body Adapter → Hardware"
        }
      },
      {
        "id": "why-actionintent",
        "title": "ActionIntent is a semantic boundary, not a new control protocol.",
        "paragraphs": [
          "ActionIntent gives the model-facing side a stable way to express what is being attempted without requiring the model to own device IDs, bus protocols, calibration tables or controller-specific details. It describes intended embodied action at a level that downstream systems can validate and translate.",
          "That also gives multiple cognition providers a common handoff point. A VLA, planner, policy or world-model-backed agent can differ internally while still producing a contract that the embodied runtime understands."
        ]
      },
      {
        "id": "somatic-translation",
        "title": "Somatic translation is where generic intent meets a specific body.",
        "paragraphs": [
          "The same request can imply very different feasible actions on different robots. Somatic translation uses the body graph and capability semantics to turn a generic intent into a plan compatible with the current embodiment. Unsupported resources, missing prerequisites or ambiguous mappings should surface here instead of being hidden in a controller.",
          "This is one reason OpenRGD invests in capability semantics and provenance rather than only structure. Translation is only as trustworthy as the body context it consumes."
        ]
      },
      {
        "id": "safety",
        "title": "The safety gate must remain separate from the model's confidence.",
        "paragraphs": [
          "Model confidence, language plausibility and policy likelihood are not equivalent to operational safety. A runtime safety layer needs its own constraints, timing, state and failure behavior. In a physical system, some of those mechanisms may need deterministic execution far outside the latency envelope of a large model.",
          "OpenRGD therefore treats semantic safety as one layer in a larger robot safety architecture. The candidate contracts can help explain what was requested and why a plan was considered, but functional safety remains a system-level responsibility."
        ]
      },
      {
        "id": "direct-control",
        "title": "Direct-control VLAs do not invalidate the boundary.",
        "paragraphs": [
          "Some research systems intentionally map observations directly to low-level actions. OpenRGD does not claim that such systems are conceptually impossible or universally wrong. The architectural question is whether a production embodied system wants the model to own final actuator authority.",
          "Where direct control is appropriate, the surrounding runtime still benefits from explicit body identity, execution context, hard constraints, monitoring and traceability. The exact contract can vary; the need to make authority visible does not."
        ]
      }
    ],
    "sources": [
      {
        "label": "Vision-Language-Action Models",
        "href": "/vla"
      },
      {
        "label": "Physical AI Stack",
        "href": "/physical-ai-stack"
      },
      {
        "label": "Runtime Boundary",
        "href": "/architecture/runtime-boundary"
      },
      {
        "label": "Robot Safety Architecture",
        "href": "/robot-safety-architecture"
      }
    ],
    "related": [
      {
        "label": "Somatic Translation",
        "href": "/architecture/somatic-translation"
      },
      {
        "label": "Robot Capability Model",
        "href": "/robot-capability-model"
      },
      {
        "label": "Agent Contracts",
        "href": "/architecture/agent-contracts"
      }
    ]
  },
  {
    "slug": "verified-does-not-mean-independently-tested",
    "title": "Verified does not mean independently tested",
    "description": "How OpenRGD separates source review, manufacturer claims, independent testing and provenance so a green verification state does not overclaim evidence.",
    "category": "Methodology",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "7 min",
    "lead": "A robotics knowledge layer becomes dangerous when 'verified' quietly means 'true in every sense'. OpenRGD uses narrower evidence states: we can verify that a claim is supported by a reviewed source without pretending we independently measured the robot.",
    "sections": [
      {
        "id": "problem",
        "title": "Verification is a relationship between a claim and evidence.",
        "paragraphs": [
          "A specification on a manufacturer product page can be accurately transcribed, reviewed and linked to its source. That makes the data provenance stronger. It does not turn the OpenRGD team into the laboratory that measured the value.",
          "The distinction sounds obvious, but data products often erase it. Once a number is normalized into a database, the source context disappears and consumers begin to treat every field as equally authoritative."
        ]
      },
      {
        "id": "claim-level",
        "title": "OpenRGD stores evidence at claim level.",
        "paragraphs": [
          "The robot evidence model separates the property being asserted from the raw value, normalized representation, units, conditions, evidence type, verification state, source URL and verification timestamp. It can also state explicitly whether the claim has been independently tested.",
          "This lets a robot profile contain claims with different evidence quality without forcing the whole entity into one simplistic verified or unverified bucket."
        ],
        "bullets": [
          "MANUFACTURER_STATED identifies a claim sourced from the manufacturer.",
          "REVIEWED_SOURCE_CLAIM records that the supporting source has been reviewed.",
          "independently_tested remains a separate boolean and can stay false.",
          "verified_at records review timing without implying perpetual validity."
        ]
      },
      {
        "id": "g1",
        "title": "Unitree G1 is a useful example.",
        "paragraphs": [
          "The current OpenRGD G1 profile links official product and developer sources, including official repositories and model assets. That allows the site to present a source-backed developer profile and distinguish product facts from OpenRGD interpretation.",
          "The same page deliberately avoids claiming that every commercial G1 variant has identical development access. G1 and G1 EDU differences matter, and the existence of an official repository does not prove that every unit or package exposes the same capabilities."
        ],
        "note": "Source-backed does not mean variant-agnostic, independently benchmarked or physically commissioned."
      },
      {
        "id": "time",
        "title": "Evidence also has a time dimension.",
        "paragraphs": [
          "Robot specifications, repositories and product variants change. A provenance record therefore needs a review timestamp and, where useful, validity boundaries. The goal is not to freeze a claim forever but to make freshness inspectable.",
          "This is particularly important for developer assets. A repository path that existed when a profile was reviewed may later move, deprecate or change scope. Provenance makes that maintenance problem visible."
        ]
      },
      {
        "id": "consumer",
        "title": "Consumers should be able to choose their own evidence threshold.",
        "paragraphs": [
          "A comparison page may be comfortable displaying reviewed manufacturer dimensions. A safety-sensitive workflow may require independent validation. A research crawler may want both but rank them differently. Keeping evidence types explicit lets each consumer decide instead of inheriting one opaque confidence score.",
          "The practical rule is simple: OpenRGD should make claims easier to inspect, not easier to overstate."
        ]
      }
    ],
    "sources": [
      {
        "label": "Robot Identity & Provenance",
        "href": "/robot-identity-provenance"
      },
      {
        "label": "Unitree G1 profile",
        "href": "/robots/unitree-g1"
      },
      {
        "label": "Robot Knowledge Graph",
        "href": "/robot-knowledge-graph"
      },
      {
        "label": "Unitree official product page",
        "href": "https://www.unitree.com/g1/"
      }
    ],
    "related": [
      {
        "label": "Robots index",
        "href": "/robots"
      },
      {
        "label": "Robot Capability Model",
        "href": "/robot-capability-model"
      },
      {
        "label": "Robot Description",
        "href": "/robot-description"
      }
    ]
  },
  {
    "slug": "openrgd-runtime-boundary",
    "title": "The OpenRGD Runtime Boundary",
    "description": "Why the canonical OpenRGD repository stops before physical execution, and how embodied runtimes and Body Adapters remain independently governed.",
    "category": "Architecture",
    "publishedAt": "2026-09-27",
    "modifiedAt": "2026-09-27",
    "readTime": "9 min",
    "lead": "One of the most important OpenRGD decisions is a negative one: the canonical repository does not own physical robot execution. The standard can describe, validate, compile and export context without becoming the process that energizes hardware.",
    "sections": [
      {
        "id": "why",
        "title": "A semantic standard and a real-time runtime have different failure modes.",
        "paragraphs": [
          "Specification code benefits from portability, inspectability and deterministic transformations. Physical execution has additional concerns: timing, buses, device state, actuator limits, emergency behavior, middleware, calibration and hardware-specific failure modes. Combining both responsibilities in one canonical package would make the standard harder to reason about and the runtime harder to evolve safely.",
          "OpenRGD therefore draws a repository boundary. The canonical project owns the standard, cross-component contracts, validators, compilers and static import/export tooling. Physical execution belongs elsewhere."
        ]
      },
      {
        "id": "three-owners",
        "title": "Three layers have distinct owners.",
        "paragraphs": [
          "The OpenRGD core defines semantic representation and non-actuating tooling. An embodied runtime consumes a validated projection and owns intent ingestion, somatic translation, safety gating, execution lifecycle and runtime coordination. Body Adapters own hardware-specific details such as device mappings, buses, middleware messages, units and actuator behavior.",
          "Those boundaries allow a robot-specific adapter to change without rewriting the semantic standard, and allow a runtime implementation to evolve without turning its internal mechanisms into normative RGD semantics."
        ],
        "bullets": [
          "OpenRGD core: specification, contracts, validation, compilation and static interoperability.",
          "Embodied runtime: intent handling, translation, runtime constraints, execution and lifecycle.",
          "Body Adapter: hardware-specific interfaces, mappings and actuator behavior."
        ]
      },
      {
        "id": "execution-path",
        "title": "The candidate execution path makes authority transitions explicit.",
        "paragraphs": [
          "The current architecture describes a sequence from cognition to hardware. The exact runtime implementation remains independent, but the semantic handoffs are useful because each stage has a narrower responsibility.",
          "A CognitionProposal can become an ActionIntent. Somatic translation can ground that intent against the body. A CapabilityPlan can be evaluated by the operation safety layer. DecisionTrace can preserve the reasoning context. Only the Body Adapter crosses into hardware-specific execution."
        ],
        "code": {
          "label": "Candidate path",
          "value": "CognitionProposal → ActionIntent → Somatic Translator → CapabilityPlan → Operation Safety Gate → DecisionTrace → Body Adapter → Hardware"
        }
      },
      {
        "id": "legacy",
        "title": "Legacy runtime commands fail closed.",
        "paragraphs": [
          "Historical command surfaces are useful for compatibility and migration, but they should not quietly reintroduce physical execution into the canonical CLI. The adopted repository policy keeps legacy physical adapter commands visible only as a boundary and makes them fail deterministically rather than importing middleware or opening devices.",
          "That behavior is intentionally boring. A tooling command that cannot prove it owns execution should not attempt execution."
        ]
      },
      {
        "id": "real-time",
        "title": "Real-time control can still be sophisticated outside the canonical repo.",
        "paragraphs": [
          "The runtime boundary does not imply that OpenRGD ignores real-time robotics. It means deterministic loops, reflexes, hardware buses and volatile high-rate state can be implemented in a runtime optimized for those responsibilities while consuming a prevalidated OpenRGD projection.",
          "This also leaves room for different runtime implementations. A research runtime and an industrial runtime may have very different scheduling, safety and observability requirements while agreeing on the semantic contract they consume."
        ]
      },
      {
        "id": "benefit",
        "title": "The payoff is replaceability.",
        "paragraphs": [
          "A healthy standard should survive changes in middleware, hardware vendors, model providers and runtime implementations. The runtime boundary is what gives OpenRGD a chance to remain stable while the Physical AI stack around it changes rapidly.",
          "The project can then focus its normative work on representation and contracts: what an embodied system means, what evidence supports that meaning, and which transitions must be explicit before another component takes responsibility for physical action."
        ]
      }
    ],
    "sources": [
      {
        "label": "Runtime Boundary architecture page",
        "href": "/architecture/runtime-boundary"
      },
      {
        "label": "Canonical runtime boundary note",
        "href": "https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md"
      },
      {
        "label": "Canonical repository structure",
        "href": "https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md"
      },
      {
        "label": "Agent Contracts",
        "href": "/architecture/agent-contracts"
      }
    ],
    "related": [
      {
        "label": "Somatic Translation",
        "href": "/architecture/somatic-translation"
      },
      {
        "label": "Synapses",
        "href": "/architecture/synapses"
      },
      {
        "label": "Robot Safety Architecture",
        "href": "/robot-safety-architecture"
      }
    ]
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
