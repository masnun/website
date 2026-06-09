## Overview

I designed and built an end-to-end **marketing analytics platform** - a suite of services that turns raw advertising traffic into the numbers a business uses to decide where its ad money goes. It ingests click-level traffic and conversion events from a third-party ad-tracking platform in real time, enriches each event with ad-spend data pulled from the major search, social, and push-notification ad networks, and lands the unified result in a **Snowflake** data warehouse - surfaced to the business through **Metabase** dashboards for return-on-investment attribution and campaign analytics.

The platform spans two languages and several architectures - real-time, queue-driven, and scheduled-batch - each chosen to fit the failure modes of the data source it talks to. The hard problem it solves: every ad network reports money differently, late, and messily, and the business still needs one trustworthy answer to "what did this campaign earn versus what it cost?"

## What It Does

- **Real-time ingestion at the edge.** Live traffic events flow in through a serverless gateway that deduplicates as it ingests - rejecting replays and retries, and identifying unique visitors within a rolling 24-hour window so the metrics stay accurate.
- **Full audit trail.** Every raw event is archived before it's parsed, so the whole pipeline can be replayed if downstream logic ever changes - nothing is lost.
- **Cost enrichment across networks.** Each traffic event is matched against spend data from multiple ad networks in priority order, tying every conversion back to what it actually cost to acquire.
- **Revenue unification.** Earnings from several different ad and push-notification platforms - each with its own data format and quirks - are normalized into one consistent reporting shape.
- **Trustworthy numbers at scale.** The result is a single warehouse of unified cost-and-revenue data the business can slice by campaign, source, and time.

## Engineering Highlights

- **Beating a hard API limit.** One upstream platform caps how many results it returns per request, but a single high-traffic campaign can produce far more conversions than that cap in a single hour. I built an adaptive algorithm that automatically splits any over-sized time window in half - recursively - until each slice fits under the limit, replacing fragile manual per-campaign tuning with something self-adjusting. It respects the platform's awkward constraints and alerts a human only when even the smallest possible window still overflows.
- **High-throughput batch processing.** Instead of querying per record - the classic performance trap - the enrichment engine streams events in, gathers the IDs it needs, and resolves them in a handful of bulk lookups held in memory. Orders of magnitude fewer database round-trips.
- **Two-stage warehouse writes.** Processing separates *sending* from *committing*, batching many sends into larger warehouse writes for efficiency.
- **Resilient by design** - retries with exponential backoff and jitter (retry on transient failures, fail fast on permanent ones), cached authentication tokens with safe refresh, distributed locking so scheduled jobs never double-run across servers, and bot filtering across known IP ranges, providers, and user agents.
- **Asynchronous report handling.** Some ad networks deliver reports asynchronously - request, poll, download, unpack, parse - and quirk-laden exports (odd encodings, vendor-specific formats) are cleaned up automatically so the data lands consistently.
- **Self-healing operations** - idempotent writes (a re-run cleanly replaces a day's data rather than duplicating it), worker pools for fast concurrent loading, structured logging keyed for traceability, and error monitoring throughout.

## Why It Matters

This is polyglot, production systems engineering across the genuinely hard parts: real-time ingestion that stays correct under replays and retries, integrating many uncooperative vendor APIs, getting financial attribution exactly right, and processing large data sets reliably day after day. The services trace a clear arc of iterative refinement - naive processing hardened into bulk operations, adaptive rate limiting, and full observability - all driven by real production constraints. It's the kind of platform a marketing business quietly runs on.

## Tech Stack

| Layer | Technology |
|---|---|
| **Languages** | Go, Node.js |
| **Cloud / serverless** | AWS Lambda, SNS, SQS, S3, Elasticache |
| **Web frameworks** | Koa (Node), Chi (Go) |
| **Job queues** | BullMQ (Node/Redis), Asynq (Go/Redis) |
| **Scheduling** | node-cron, in-process Go crons |
| **Distributed locking** | Redlock |
| **Databases** | MongoDB, Redis |
| **Data warehouse / BI** | Snowflake → Metabase |
| **External integrations** | Ad-tracking platform, search / social / push ad-network APIs (OAuth2) |
| **Observability** | Sentry, Winston, structured JSON logging |
| **Infra / deploy** | Docker, docker-compose, Runit, AWS SAM/CloudFormation, GitHub Actions → ECR |
