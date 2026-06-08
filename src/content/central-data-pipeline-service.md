## Overview

I designed and built the **central data pipeline** that unifies analytics from an entire product suite into one warehouse. 10+ internal services and platforms send their analytics events to a single API. The service validates, batches, deduplicates, transforms, and lands them in **Snowflake** for business reporting, handling **60+ distinct event types** across the whole company.

Think of it as the routing layer between "everything the product does" and "the numbers the business reports on." When the company wants to know what happened — who got a message, what an ad earned, which jobs were viewed — those answers flow through this system.

## What It Does

- **One front door for all analytics.** Every app POSTs events to the same API. No app needs to know anything about the warehouse — they just send events and move on.
- **Never loses, never duplicates.** Apps retry deliveries when networks hiccup. The system is built so a re-sent event lands exactly once, and a re-run of a day's data cleanly replaces it instead of doubling the numbers.
- **Add a new source without writing code.** Onboarding a new app or event type is a declarative config entry — the SQL, validation rules, and field transformations all generate from it. New data sources go live in minutes, not sprints.
- **Built for spikes.** Incoming events are queued instantly rather than written on the spot, so the API stays fast and absorbs traffic surges without falling over.

## How It's Built to Scale

The service runs as three independent processes — request handling, background processing, and scheduling — selectable from a single setting, so each part scales on its own. Fast event ingestion never competes with the heavy lifting of loading the warehouse.

It's engineered to stay correct and stay up under real production pressure:

- **Memory-safe at any size** — instead of loading whole datasets into memory, it *streams* events straight through to cloud storage and into Snowflake. Memory stays flat whether it's a thousand events or a million, running comfortably under a tight 200 MB cap.
- **No double-runs across servers** — in a multi-server deployment every instance fires the same scheduled tick. A distributed lock guarantees only one actually runs the job, so the warehouse is never loaded twice.
- **Exactly-once accounting** — composite-key upserts make ingestion idempotent; the warehouse load replaces a day's partition atomically rather than appending duplicates.
- **Secure, keyless warehouse auth** — Snowflake connections use key-pair (JWT) authentication instead of passwords.
- **Clean deploys** — an ordered shutdown sequence drains in-flight work before exiting, so jobs aren't dropped when the service restarts.
- **Operable in production** — error reporting with profiling across the API, workers, and scheduler; alerts fire only on the *final* failed retry to cut noise; structured logging carries full context end-to-end; a self-cleaning janitor removes stale temp files automatically.

## Why It Matters

This is the kind of system a business quietly depends on. It demonstrates production backend engineering across the hard parts: distributed-systems design (queues, distributed locks, idempotency), backpressure-aware stream processing that stays memory-flat at scale, schema-driven architecture that makes the system extensible by config, and production-grade operability. Every BI dashboard in the company is downstream of getting this right.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language / Runtime** | Node.js 18, JavaScript |
| **API** | Koa, Joi (validation), Swagger UI |
| **Job queue** | BullMQ (Redis-backed workers, tuned concurrency, backoff retries) |
| **Cache / coordination** | Redis + Redlock (distributed locking) |
| **Staging store** | MongoDB |
| **Cloud / warehouse** | AWS S3 (streaming NDJSON multipart upload) → Snowflake (`COPY INTO`, JWT key-pair auth) |
| **Scheduling** | node-cron |
| **Observability** | Sentry (with profiling), Winston |
| **Infra / tooling** | Docker, docker-compose, Makefile, runit |
