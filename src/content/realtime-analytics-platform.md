## Overview

A **full-stack, real-time marketing analytics platform** - the live dashboard the business actually watched to see how its email and SMS campaigns were performing, minute by minute. Events stream in from every channel (email sends/opens/clicks, SMS activity, job clicks, unsubscribes), get aggregated server-side into time-bucketed metrics, and surface in a rich React dashboard of charts, breakdowns, and cohort reports. It was one of my largest and longest-running projects, built and evolved over five years.

I drove this end to end: I built the **backend almost entirely** and **led the frontend**, partnering with one other engineer on the UI.

## What It Does

- **Ingests events in real time.** Upstream systems - the engagement tracker, the lead distributor, the SMS and email platforms - push events to the platform's queue endpoints continuously.
- **Aggregates as it goes.** A background pipeline runs every minute, draining the queues and rolling raw events up into multi-dimensional daily stats: by channel, source, provider, template, campaign type, and device - all bucketed to a consistent timezone.
- **Visualizes everything.** The React dashboard renders time-series charts and segmented breakdowns of sends, opens, clicks, and unsubscribes, with date-range pickers and year-over-year trend comparison.
- **Goes beyond vanity metrics.** Cohort analysis (retention and value by signup cohort), per-source revenue/profit, and traffic breakdowns turn raw activity into decisions.
- **Manages the campaigns too.** Beyond analytics, it includes management surfaces - email/SMS template editing, lead-feed configuration with selectable optimization algorithms, incoming-SMS log review - and CSV/Excel report exports.

## Engineering Highlights

### Real-time aggregation pipeline (backend)

The core challenge was turning a firehose of individual events into live, queryable metrics without falling behind. I built a **concurrent, fault-tolerant consumption pipeline**: it drains a high-volume external queue in parallel batches plus a local Redis queue, with the batch count **capped to apply graceful backpressure** so a spike can't overwhelm the system. Each event is de-normalized into several aggregation trees (by source, provider, device, campaign…), and the day's stats document is **read, merged, and written back incrementally** so concurrent updates never clobber each other. A schema-flexible document design means a brand-new tracking dimension can be added without a migration.

### Performance & resilience

A Redis caching layer with sensible TTLs shields the database from repeated dashboard queries. Per-queue error isolation means one failing source drops out of a cycle without halting the pipeline. Scheduled jobs handle the heavier daily rollups (cohorts, active counts) off the real-time path. Error tracking, centralized logging, and Slack alerting keep the whole thing observable.

### Full-stack delivery

On the frontend I led a React + Redux single-page app with charting, autocomplete search, date-range controls, and drag-and-drop configuration - talking to a typed Koa/TypeScript API with JWT auth. Owning both halves meant the data model, the API, and the visualizations were designed together rather than bolted on.

## Why It Matters

This is enterprise-grade, full-stack systems engineering sustained over five years: high-volume real-time ingestion with backpressure, multi-dimensional incremental aggregation, a caching strategy that keeps dashboards snappy, and a polished operator-facing UI on top - all designed and largely built by me. It's the project where the backend systems work and the product-facing frontend met in one codebase, and I owned the whole span.

## Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | TypeScript, Node.js, Koa |
| **Frontend** | React, Redux, React Router, ECharts, Sass |
| **Real-time** | Background queue consumption (external MQ + Redis), per-minute aggregation |
| **Jobs / scheduling** | Bull queues over Redis, cron-scheduled rollups |
| **Database** | MongoDB (replica set), schema-flexible stat documents |
| **Caching** | Redis (TTL-based query cache) |
| **Auth** | JWT |
| **Exports** | CSV / Excel report generation |
| **Observability** | Sentry, centralized logging, Slack alerts |
