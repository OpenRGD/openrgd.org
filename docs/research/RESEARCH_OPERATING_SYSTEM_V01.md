# OpenRGD Research Operating System — RSO-0.1

**Status:** research foundation / non-normative / no experiments launched
**As of:** 2026-11-18
**Repository:** `OpenRGD/openrgd.org` (editorial metadata + research protocols, not the canonical standard)

## Goal

Turn research theses into testable questions and verifiable evidence rather than treating publication volume or green CI as proof of scientific progress.

The canonical pipeline is:

```
Thesis (Txx)
  -> Research Question (RQ-xxx)
  -> Study Design (EXP-Txx-xxx)
  -> Review / preregistration lock (before new data)
  -> Safety + ethics + measurement preflight
  -> Observations/trials, including failures
  -> Pinned analysis, uncertainty and negative results
  -> Evidence manifest / public summary / revisioned claim
  -> Thesis status update (supports / challenges / inconclusive)
```

### What counts as a research question?

- It identifies what is unknown and **why the answer changes a technical decision**.
- It identifies a comparison or counterfactual, not only a desired implementation outcome.
- It defines a measurable phenomenon, sampling frame and instrument.
- It is falsifiable: plausible observations could contradict the hypothesis.
- It is scoped: which embodiment/hardware/configuration and which environment?
- It distinguishes validation of a requirement from experimental validation of utility. CI passing does not prove usability or safety in realistic operation.

### Lifecycle (state machine)

`DESIGN_DRAFT` → `REVIEW_READY` → `PREREGISTERED` → `COLLECTING` → `ANALYZING` → `RELEASED`.

Also allow `DESIGN_BLOCKED`, `PAUSED` and `CANCELLED`, with reasons and no invented successful outcomes.

**Currently all five experiments are DESIGN_DRAFT or DESIGN_BLOCKED. None has been preregistered or executed under this new program.**

A protocol may be called **PREREGISTERED** only when:
1. Hypotheses and primary endpoint are operationalized.
2. Sample size/power or explicitly descriptive purpose, stopping/exclusion and analysis plans are frozen.
3. Instrumentation, physical safety/ethics approval and private-data handling have been reviewed.
4. An immutable signed or independently timestamped registration/commit and correct before-data collection declaration are recorded.
5. Any prior exploratory data is identified, separated from confirmatory outcomes and not retroactively called preregistered.

Git commits produce stable source-version identifiers, **not automatically an external OSF registration or a binding scientific review**. Later changes are amendments with a visible reason/timestamp; never silently edit the registered plan.

### Experiment packet (per run)

A run should contain:
- Study and protocol IDs, version, approved exact commit, researcher/operator and review scope.
- Machine/physical robot/variant/model/firmware (with sensitive identifiers private).
- Code/policy/model/dataset/calibration hashes, dependency lock and config fingerprint.
- Instrument definitions, clock domains, synchronization error and measurement uncertainty.
- Experimental condition, trial order/seed, task setup, inclusion/exclusion rules.
- Raw observations, **failures, safety aborts, missing data** and protocol deviations.
- Per-trial outcomes and confidence/uncertainty, not a hero run.
- Manifest of every artifact with SHA-256, license, sharing scope and retention decision.
- Reproduction instructions and source/analysis version.
- A conclusion classified as SUPPORTED / CHALLENGED / INCONCLUSIVE / INVALID (never as 'proven once and for all').

### Evidence taxonomy

`SYNTHETIC_FIXTURE`: code-generated/oracle test.
`OFFLINE_CONFORMANCE`: pinned source/schema under CI.
`OPERATOR_REPORTED`: lab notes not independently archived.
`MEASURED_PHYSICAL`: recorded physical instrument and raw evidence.
`REPLICATED_INDEPENDENT`: a separately executed replication with its own recorded methods.

These categories describe **scope and provenance**, not a linear ranking or normative promotion. Raw sensor data may be sensitive and remain private while sanitized evidence metadata can still be public.

### Reproducibility & FAIR

- Keep persistent IDs for thesis, question, study, run and artifact; never recycle an ID.
- Publish rich metadata even when evidence payload must stay private or is unavailable.
- Use accessible machine-readable JSON/CSV with typed units, timestamps and legal usage rights.
- Store source code, calibration, model and data revisions as independent pins.
- Report deviations from the frozen plan, missing files, aborted trials and negative outcomes.
- Never embed credentials, private robot-instance IDs, raw speech/video or location secrets in the website repo.

### Practical next stages

1. **RQ-001 / EXP-T17-001:** validate independent acoustic first-audio instrumentation and randomization; only then freeze the voice experiment. Past 26 Oct Piper medians are retrospective context, not confirmatory results.
2. **RQ-002 / EXP-T01-001:** independent adversarial COG/GoalAdmission harness in a device-isolated environment. In-process role IDs are not authenticated privileges.
3. **RQ-003 / EXP-T11-001:** source-pinned CAL negative corpus before any supervised physical metrology.
4. **RQ-004 / EXP-T06-001:** blocked on writer/reader and privacy-retention design.
5. **RQ-005 / EXP-T07-001:** blocked on independent trusted identity/issuer/revocation infrastructure.

### Research vs the canonical Core

No research website manifest, passing test, candidate ABI or synthetic observation can enroll a Life, certify calibration, issue a motor grant, declare a Chronon or modify the normative `OpenRGD/openrgd` standard. Actual experiment executors belong in their owner repositories; the website is a research registry and discovery surface.

### Primary methodological references

- OSF, preregistration best practices: https://help.osf.io/article/330-create-a-preregistration
- NASA, verification vs validation: https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/
- FAIR principles (Wilkinson et al. 2016): https://doi.org/10.1038/sdata.2016.18
- NIST, measurement uncertainty: https://www.nist.gov/publications/simple-guide-evaluating-and-expressing-uncertainty-nist-measurement-results

This method is adapted for OpenRGD and does not constitute OSF or NASA certification.
