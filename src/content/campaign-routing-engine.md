## Overview

A **campaign-and-path routing engine** for a staffing business: given a search (a keyword and a location), it decides which jobs to surface by running them through reusable, configurable filtering rules. I founded this service and built its functional core - the campaign model, the filtering pipeline, and the path-processing orchestration. A second engineer later added request validation and docs.

The idea is to turn "which jobs should this lead see?" from hard-coded logic into **data-driven configuration** that non-engineers can compose.

## What I Built

### Campaigns - configurable filtering rules

A **campaign** is a named set of filters bound to a job source. Each filter is a small rule - *only* these origins, *block* those, *match* this keyword - expressed as data, not code. Processing a campaign means: fetch jobs for the given search from the job feed, run every filter against each job's metadata, and keep only the jobs that pass all of them. One failing filter rejects the job. I built the campaign model, its storage, and the filter-operator engine (allowlist / denylist / exact-match, with sensible handling of single values versus lists).

### Paths - composing campaigns

A **path** is a named collection of campaigns. Processing a path applies *all* of its campaigns to the same input search and aggregates the results - so a path is a reusable routing strategy assembled from smaller rule sets. I designed paths to **process their campaigns in parallel**, gracefully tolerating individual failures: one broken campaign logs its error and drops out without taking down the rest of the path.

### The service around it

I set up the whole service skeleton: a cleanly **layered architecture** - HTTP transport, service layer, and utilities kept strictly separate, with no business logic leaking into request handlers - plus the API endpoints (create campaign, create path, process path), a job-feed client, MongoDB persistence, a background-worker setup, and cron with **distributed locking** so scheduled work never double-runs across horizontally scaled instances.

## Engineering Highlights

- **Configuration over code.** The filtering logic lives in stored campaign definitions, so routing behavior changes by editing data, not deploying code.
- **Parallel, fault-tolerant processing.** Paths fan their campaigns out concurrently and aggregate only the successes - robust against any single campaign erroring.
- **Clean layering.** Transport → services → utils separation makes the core testable and the responsibilities obvious - the kind of structure a team can extend without friction.
- **Horizontal-scale ready.** Redis-backed distributed locks on scheduled jobs and graceful shutdown make it safe to run multiple instances behind an orchestrator.

## Why It Matters

This is a compact example of turning bespoke business logic into a configurable engine - the difference between writing a filter and building the system that lets anyone compose filters. The campaign/path model, the parallel fault-tolerant processing, and the clean layered foundation are all mine, and they set the shape the service grew into.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language / Runtime** | Node.js |
| **Web framework** | Koa |
| **Background jobs** | BullMQ over Redis |
| **Scheduling** | node-cron with Redis distributed locking |
| **Database** | MongoDB |
| **Integration** | External job-feed API |
| **Observability** | Sentry, Winston |
| **Infra** | Docker |

*I built the founding core - campaign model, filter engine, path processing, and the layered service skeleton. A second engineer later added request validation and documentation.*
