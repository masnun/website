## Overview

A **multi-tenant SMS job-alert platform** that I designed, built, and ran end to end - ingesting leads, scheduling personalized text alerts, delivering them across multiple carriers, handling opt-outs and replies, and reporting the revenue back to the business. It powered daily SMS job alerts across more than twenty job-board brands.

I built this **twice**. The first version was in **Python** (Flask + Celery), which I developed and operated for several years. As the system grew I **rewrote the backend in Node.js** (Koa + a Redis-backed job queue) for a cleaner architecture, and built a dedicated **React management-and-analytics dashboard** on top. The three repositories - original Python service, Node.js rewrite, and dashboard - are really one product across its lifecycle.

> *Note: this is a separate, earlier system from the [Go-based SMS Delivery Platform](#/project/sms-delivery-platform) elsewhere in this portfolio. This one is the lead-alert messaging platform and its rewrite; that one is a later high-throughput delivery engine.*

## What It Does

- **Lead ingestion.** Accepts leads over an API - phone, location, job interest, attribution - validating and deduplicating them across every list and a cold-lead store so the same person isn't messaged twice.
- **Personalized job alerts.** Composes each message from live job listings pulled from external job-board feeds, personalized per recipient, with rotating ad creatives - sent through short, trackable links.
- **Timezone-aware scheduling.** Alerts go out at the right local time for each recipient, not a single global moment - non-trivial when batching across the whole country.
- **Multi-carrier delivery.** Routes messages through several SMS providers for redundancy and cost, with per-list gateway configuration and graceful fallback when a provider fails.
- **Two-way handling & compliance.** Processes inbound replies - auto-unsubscribing on STOP (tolerant of misspellings), serving "more jobs" follow-ups, and enforcing a global opt-out blocklist. Also auto-unsubscribes inactive recipients.
- **Delivery & click tracking.** Provider webhooks update delivery state; short-link clicks are tracked - all feeding analytics.
- **Revenue attribution.** Ties earnings back to source, list, and template, with per-brand profit-share accounting.

## The Dashboard

The React/Material-UI dashboard is the control room for the whole platform:

- **Analytics** - date-range stats broken down by source, carrier, keyword, ad type, and template, with multi-series charts over dozens of metrics.
- **List management** - full CRUD over messaging lists, each with its own schedule, gateway, cadence, and a rich rule engine (carrier targeting, dedup, reactivation, incoming-lead handling).
- **Multi-tenant accounting** - aggregates revenue across 20+ partner backends at once, with graceful handling when one is unavailable.
- **Role-based access** - admins see full granular metrics; partners see a restricted view of their own numbers.

## Engineering Highlights

- **Process separation.** Web API, background workers, and the scheduler run as independent processes, so ingestion, sending, and event handling scale and fail independently.
- **Queue-driven, carefully serialized.** Fine-grained queues with deliberately tuned concurrency prevent duplicate sends and race conditions on per-lead state.
- **Multi-provider abstraction.** A pluggable gateway layer hides the differences between half a dozen SMS providers (REST and XML APIs alike) behind one interface.
- **Privacy in tracking.** Personal data carried through click-tracking URLs is encrypted, not exposed.
- **Resilience & operability.** Retries with backoff on sends, error tracking, and structured logging throughout.

## Why It Matters

This is a system I owned across its entire lifecycle - from the original build to a full rewrite to the tooling around it - and ran in production for years. It demonstrates the hard parts of messaging at scale: timezone-correct scheduling, multi-vendor delivery with failover, two-way compliance handling, accurate multi-tenant revenue accounting, and a real operator-facing dashboard. The same domain, solved once in Python and again, better, in Node.

## Tech Stack

| Layer | Technology |
|---|---|
| **Initial version** | Python, Flask, Celery, MongoDB, Redis |
| **Rewritten backend** | Node.js, Koa, Bull (Redis-backed queues), MongoDB |
| **Dashboard** | React, Material-UI, Redux Toolkit, Chart.js |
| **Processes** | Separate web / worker / scheduler processes |
| **Delivery** | Multiple SMS providers / carriers, per-list routing & fallback |
| **Integrations** | External job-board feeds, provider delivery & click webhooks |
| **Observability** | Sentry, structured logging |
| **Infra** | PM2, multi-tenant per-brand deployment |
