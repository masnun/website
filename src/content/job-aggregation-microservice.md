## Overview

I designed and built a high-throughput backend platform that pulls job listings from **external job boards and ad networks**, blends them into one unified feed, and serves them through a single API — handling **2.5 million requests per day**. On top of that, it runs a complete revenue pipeline — tracking impressions, clicks and affiliate earnings, and tying every dollar of partner revenue back to the search that produced it.

The hard problem it solves is fragmentation. Every partner network speaks a different language: different data formats, different login schemes, different ways of reporting what they paid. This platform hides all of that behind one clean, dependable feed — and accounts for the money accurately, at scale.

## What It Does

- **One feed from many sources.** Multiple partner networks, each with its own quirks, normalized into a single consistent set of job listings.
- **Smart sourcing.** The platform balances speed against coverage — it can return the fastest result, or cast the widest net across every source, depending on what the request needs.
- **Revenue attribution.** It reconciles affiliate earnings that arrive late, in pieces, and with duplicates — matching each payment back to the search that earned it and rolling up earnings, clicks and revenue-per-click by source.
- **Trustworthy numbers.** It cross-checks its own revenue totals against what each partner reports and raises an alert when the two drift apart.
- **Analytics at scale.** Processed data is exported to a Snowflake data warehouse and surfaced in Metabase dashboards for the business to explore.

## How It's Built to Scale

The platform splits into two halves that scale independently: a fast request-handling tier that answers live job searches and click redirects, and a background tier that does the heavy lifting — collecting revenue, enriching data, and exporting to the warehouse. The light, latency-sensitive work never competes with the heavy batch work.

It's also built to stay up and stay correct under real-world pressure:

- **Reliable money handling** — designed so the same revenue is never double-counted and totals stay accurate even as data arrives messily.
- **No double-runs** — scheduled jobs coordinate across multiple servers so the same work never fires twice.
- **Handles huge datasets** — it streams large data sets through rather than loading them into memory, so it stays stable no matter how big the data grows.
- **Self-healing operations** — automatic retries on failure, error monitoring and alerting, and a scheduled off-peak restart that keeps the service healthy over long runs.

## Why It Matters

This platform shows production backend engineering across the genuinely hard parts: integrating many uncooperative vendors, getting financial numbers exactly right, processing very large data sets reliably, and keeping a distributed system dependable day after day. It's the kind of system a business quietly depends on — and it just works.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language / Runtime** | Node.js, JavaScript |
| **HTTP framework** | Koa 2 |
| **Database** | MongoDB |
| **Job queue** | BullMQ (Redis-backed workers, retries, backoff) |
| **Cache / coordination** | Redis + distributed locks |
| **Scheduling** | node-cron |
| **Cloud / analytics** | AWS S3 → Snowflake → Metabase |
| **Observability** | Sentry, Winston |
| **Infra / tooling** | Docker, docker-compose, Jest |
