# OpenRGD SO-101 public evidence boundary — October 2026

This directory is editorial/research infrastructure of `openrgd.org`, **not** normative specification material.

## Evidence state

The lab contains operator-confirmed field observations for native SO-101 leader/follower teleoperation, a calibration-persistence setup, a single 15-second no-video local record (episode 0, 448 samples), and a reported replay. The session results are reconstructed from the project work record; raw evidence files and hashes have **not** been ingested into this repository.

`data/research/so101/evidence.json` is the source for the public evidence ledger. Its machine-readable publication endpoint is `/research/so101-embodiment-lab/evidence.json`.

No SmolVLA or ACT training success, robot-policy task success, synchronous/asynchronous comparison, camera-synchronized training dataset, or latency values are claimed.

## Reproducibility protocol

`data/research/so101/protocol.v1.json` defines a protocol, not an experiment outcome. The public endpoint is `/research/so101-embodiment-lab/protocol.json`.

`/research/so101-embodiment-lab/trial-template.csv` provides a header-only trial log with no fabricated measurements.

A later lab run is considered public evidence only when its exact robot/config and relevant Git revisions, calibration/asset hashes, task protocol, trial rows, aborts/failures and provenance are archived. Do not silently promote operator observations to independently reviewed claims.

## Technical trust boundary

LeRobot owns robot interfaces, teleoperation, datasets and policies. OpenRGD provides a candidate semantic ActionIntent/CapabilityPlan boundary; the canonical standard repository does **not** actuate a robot.

Safety checks, supervision, commissioning, torque-off controls, electrical/mechanical protection and hardware-specific limits belong to the physical deployment. A green web build, schema check or recorded trajectory does not certify safety.
