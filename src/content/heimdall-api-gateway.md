## Overview

**Heimdall** is a caching gateway that sits in front of paid third-party verification APIs — email validation and phone-number lookups — and shields the business from their cost and latency. Every verification provider charges per call and answers slowly; Heimdall checks its own cache first and only reaches out to a provider when it genuinely has to. Repeated lookups become instant and free.

I built it **in Go first**, then **re-implemented it in Node.js** — a deliberate move to scale the service across the development team, since more developers knew Node and could own and extend it. The Node.js rewrite also grew the feature set: the Go version is a lean, single-purpose email validator, while the Node.js version is the fuller implementation, adding phone-number lookups and multi-provider fallback on top. Together they show the same architecture expressed idiomatically in two languages — and a real-world platform decision driven by team scalability, not just preference.

## What It Does

- **Read-through caching.** A lookup checks the local cache first; on a miss it calls the external provider, returns the answer, and stores it for next time — with a configurable time-to-live so cached results stay fresh without going stale.
- **Multi-provider fallback.** Email verification doesn't depend on a single vendor. It tries one provider and, if that call fails, gracefully falls back to a second — so a single vendor outage never takes verification down.
- **Phone intelligence.** Phone-number lookups resolve carrier and country information through a telephony provider, cached the same way.
- **Usage analytics.** The service tracks its own activity in daily buckets — cache hits versus live provider calls per source — using atomic, concurrency-safe counters, so the cost savings are measurable.
- **Validated, traceable requests.** Every request is schema-validated at the edge and tagged with a unique request ID that flows through the logs for end-to-end tracing.

## Engineering Highlights

- **Staged middleware pipeline.** Each endpoint runs as a chain of stages — validate → check cache → call provider → update cache — where each stage only runs if the previous one didn't already resolve the request. This makes the cache-then-fallback logic clean and easy to extend with new providers.
- **Cost-aware by design.** The whole point is to minimize paid API calls; the caching layer, the per-request TTL, and the analytics all exist to drive and prove that down.
- **Concurrency-safe accounting.** Statistics use atomic increment operations into daily buckets, so counts stay correct under concurrent load without locks.
- **Production observability.** Structured logging shipped to a central aggregator, error tracking with performance profiling, request-ID correlation across logs, and self-documenting APIs via an OpenAPI/Swagger UI.
- **Resilience details that matter.** Hard timeouts with forced connection cleanup so a slow provider can't hang the service, defensive handling of vendor quirks (odd response codes, response cleanup), and dependency-injected services that keep the layers testable.

## Why It Matters

A small service that quietly saves real money. It demonstrates pragmatic backend engineering: read-through caching, graceful multi-vendor failover, production observability, and clean layered architecture — and the discipline of building the same well-specified system idiomatically in two different languages.

## Tech Stack

| Layer | Node.js version | Go version |
|---|---|---|
| **Language** | Node.js | Go |
| **HTTP framework** | Koa | Chi |
| **Cache / store** | MongoDB | MySQL |
| **Validation** | Joi schema validation | Request decoding + checks |
| **Providers** | Email validation (two providers, with fallback) + phone lookup | Email validation provider |
| **Observability** | Sentry (with profiling), Winston → central syslog | Sentry, structured logging, APM |
| **Docs** | OpenAPI / Swagger UI | Static API docs |
| **Infra** | Docker, docker-compose | Docker-based deploy |
