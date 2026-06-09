## Overview

A **real-time lead distribution router** - the hub that sits in the middle of a lead-generation business and fans every incoming lead out to all the systems that need it, the instant it arrives. A lead comes in through one API; this service enriches it, decides where it belongs, and dispatches it simultaneously to a primary consumer, the SMS platform, and a search index - falling back to a queue if any destination is down so a lead is never dropped.

I designed and built it solo - **first in Python** (Flask + Celery), which I ran in production, then **rewrote it in Node.js and TypeScript** for a cleaner, more responsive architecture. It's the connective tissue between several of the other systems in this portfolio - including the [Heimdall verification gateway](#/project/heimdall-api-gateway) and the messaging platforms.

## What It Does

- **One front door, many destinations.** A lead is POSTed to a single endpoint and the router dispatches it to every downstream that needs it - the primary lead consumer, the SMS messaging system, and a search/analytics index - in real time.
- **Enrichment on the way through.** Before routing, each lead is enriched: its email is verified for deliverability via an external verification service, its timezone is resolved from its ZIP code so downstream systems know when it's appropriate to contact the person, and the job-title it searched for is normalized - fuzzy-matched against a canonical job taxonomy and stripped of noise (brand names, shift and employment-type labels) so downstream matching is consistent.
- **Smart, board-aware routing.** Routing decisions are driven by the lead's source and target market (for example, a separate path for UK leads), with guards that reject self-referential leads to prevent routing loops.
- **Never lose a lead.** Every dispatch validates the downstream's response - not just the status code but that the body is well-formed - and on any failure the lead is handed to a backup queue for retry instead of being lost.
- **Multiple channels.** Dedicated routing paths handle different SMS providers, each with its own queue.

## Engineering Highlights

- **Real-time fan-out with failover.** The core value is reliable one-to-many dispatch. Each destination call checks the response is genuinely healthy before considering it delivered; anything else falls through to a durable backup queue. The result is at-least-once delivery to every consumer without blocking the inbound request.
- **Queue-driven throughput.** Distribution runs through Redis-backed job queues with tuned concurrency, so the API accepts leads instantly and the heavy fan-out happens asynchronously. A live queue dashboard makes in-flight work visible.
- **O(1) timezone resolution.** Rather than calling an external geolocation API per lead, timezones are resolved against an embedded ZIP-to-offset table - an in-memory lookup that adds no latency and no external dependency to the hot path.
- **Fault-tolerant storage.** Lead history is persisted to a replica-set database for durability.
- **Aggressive queue hygiene.** Completed jobs are removed immediately and failed jobs retained briefly for inspection, with scheduled cleanup, so the queue never bloats under sustained load.
- **Production-grade lifecycle.** Process signal handling closes queues cleanly on shutdown, and uncaught errors and rejections are captured and reported before exit - wired to error tracking and centralized logging throughout.

## Why It Matters

Distro is the kind of small, central service that everything else quietly depends on: if it's down or drops data, the whole lead pipeline feels it. It demonstrates real-time fan-out architecture, defensive integration with unreliable downstreams (validate-then-failover), latency-conscious enrichment, and the operational discipline - graceful shutdown, observability, queue hygiene - that keeps a hub like this dependable. A clean, focused TypeScript service doing one important job well.

## Tech Stack

| Layer | Technology |
|---|---|
| **Original version** | Python, Flask, Celery (Redis broker), MongoDB |
| **Rewritten version** | TypeScript, Node.js |
| **Web framework** | Koa (rewrite) / Flask (original) |
| **Queues** | Bull (Redis-backed), with a queue-monitoring dashboard |
| **Database** | MongoDB (replica set) |
| **Enrichment** | External email-verification service, embedded ZIP→timezone lookup |
| **Routing targets** | Primary lead webhook + backup queue, SMS platforms, search index |
| **Observability** | Sentry, Winston → centralized logging |
