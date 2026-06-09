## Overview

Logo Service is a **company-logo management and delivery service** - the single source of truth for brand logos across a product suite. Any application asks for a company by name and gets back a clean, CDN-hosted logo, in the right format and aspect ratio, matched through a full-text search engine. It's a **team project**: the original logo CRUD, search, and asset pipeline were built by another engineer before I joined.

**My contribution** was the layer that turned it from a request/response API into a self-maintaining, observable, production-grade service - background processing, external data enrichment, observability, and the deployment setup - plus a structural refactor of the codebase along the way.

## What I Built

### Background processing layer

The service originally did everything inline. I introduced a **dedicated workers layer** backed by a job queue (BullMQ over Redis), moving slow and periodic work off the request path. This included queue configuration, concurrency control, and automatic cleanup of completed and failed jobs so the queue doesn't grow without bound.

### Scheduled jobs & concurrent enrichment

I built the **scheduling system** (cron) that keeps the logo data enriched over time. A key job enriches every company with **related keywords pulled from an external keywords service** - and because doing that one company at a time wouldn't scale, I designed it to **distribute the work across concurrent tasks**, fanning the companies out through the queue so enrichment runs in parallel rather than serially.

### Architecture restructure

I reorganized the codebase into clear functional areas - **grouping the data layer together, consolidating the web layer, and introducing the workers layer as a first-class part of the system** - and refactored the MongoDB connection so the pool is initialized cleanly and shared. This made the service easier to reason about and set the structure the later work built on.

### Observability

I wired in **production monitoring** - error tracking (Sentry) and application performance monitoring (New Relic) across the web, worker, and cron processes - and standardized logging configuration so failures in background jobs surface instead of disappearing silently.

### Deployment & infrastructure

I added the **containerization and CI/CD**: the Dockerfile and docker-compose setup, the GitHub Actions workflow, and the process-manager configuration - making the service reproducible to run locally and straightforward to deploy.

## Why It Matters

This is the work that makes a service dependable in production rather than just functional in development: moving heavy work to a background queue, scaling enrichment with concurrent task distribution, making the system observable when something breaks, and packaging it for repeatable deployment. It's a focused, honest slice - the operational and data-enrichment backbone layered onto an existing search service.

## Tech Stack (my parts)

| Layer | Technology |
|---|---|
| **Language / Runtime** | Node.js |
| **Background jobs** | BullMQ (workers, concurrency, auto-cleanup) over Redis |
| **Scheduling** | node-cron |
| **Data enrichment** | External job-keywords service, fanned out across concurrent tasks |
| **Database** | MongoDB (connection-pool refactor) |
| **Observability** | Sentry, New Relic, structured logging |
| **Infra / deploy** | Docker, docker-compose, GitHub Actions, PM2 |

*Built on an existing service whose core (Express API, Elasticsearch search, S3/CDN asset pipeline) was authored by another engineer.*
