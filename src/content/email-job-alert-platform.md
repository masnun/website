## Overview

A **distributed background-processing platform** that powered daily personalized **job-alert emails** across a network of eight job-board brands. It ingests candidate leads from partner boards, validates and deduplicates them, sends each candidate a tailored daily email of matching jobs, tracks how they engage, and prunes the list as people go cold — all run by a fleet of background workers that **scale themselves up and down with the workload**.

I designed, built, and operated this single-handedly over roughly four years. It's the email sibling of the [Text Messaging Platform](#/project/text-messaging-platform) — same lead-engagement business, the SMS channel's counterpart.

## What It Does

- **Lead ingestion per partner.** Leads arrive from eight partner job boards through a queue. Each is validated (email verification, blacklist and opt-out checks) and deduplicated before being stored.
- **Personalized daily alerts.** For every active candidate, the platform pulls matching jobs from multiple external job feeds, composes a personalized email, and sends it through transactional email providers.
- **Engagement tracking.** Opens (via tracking pixels), clicks (via short links), unsubscribes and bounces flow back in through provider webhooks and update each lead's engagement state.
- **Automatic list hygiene.** Candidates who stop engaging are auto-unsubscribed after a configurable window, keeping deliverability healthy and sending honest.
- **Analytics feed.** Every meaningful event — sent, failed, opened, clicked, unsubscribed — is emitted to a stats pipeline for business reporting.
- **Compliance built in.** Opt-out handling and a global blocklist are enforced on every send.

## Engineering Highlights

- **Self-scaling worker fleet.** A scheduler runs every few minutes, measures the depth of each work queue, and **dynamically spawns workers in proportion to the backlog** — so the system absorbs surges automatically instead of needing manual capacity tuning. This is the heart of the platform.
- **Prioritized, segregated queues.** Work is split across separate named queues (incoming leads, welcome emails, sending, events) so latency-sensitive work never gets stuck behind big batch jobs, and each can scale independently.
- **Multi-tenant by construction.** A single pipeline — ingest, validate, welcome, queue, send, track, clean up — is parameterized per brand, so eight partner boards run on one codebase with per-partner queues, mailers, and rules rather than eight copies.
- **Rate limiting & throttling.** Daily send caps protect provider reputation and stay within limits.
- **Resilient delivery.** Per-task retries with context-aware error handling, primary-plus-failover routing for outbound webhooks, and batch pulls from the queue for throughput.
- **Operable in production.** Error tracking, centralized structured logging, and proactive alerting — including Slack alerts when cache memory crosses a threshold — kept a high-volume system healthy with a single operator.

## Why It Matters

This is a system I owned completely, end to end, for years — and the engineering that stands out is the operational maturity: a worker fleet that scales itself to demand, clean multi-tenant abstraction across eight brands, real engagement-driven list hygiene, and the observability to run it all without a team. It's the unglamorous backbone that quietly delivered a business's daily outreach.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Task framework** | Celery (distributed workers, prioritized queues, scheduled jobs) |
| **Queue / broker** | Message queue + Redis |
| **Database** | MongoDB |
| **Web layer** | Flask (task submission, health/inspection endpoints) |
| **Email** | Transactional email providers + inbound engagement webhooks |
| **Job data** | Multiple external job-board feeds |
| **Engagement** | Tracking pixels + short-link click tracking |
| **Observability** | Sentry, centralized syslog logging, Slack alerting |
| **Infra** | AWS (managed Redis, Elasticsearch), cloud queue service |
