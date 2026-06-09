## Overview

A **background-worker framework I built from scratch** in Python, and the production lead-processing application that ran on top of it. Long before reaching for an off-the-shelf task queue, I wanted a clean way to write background jobs where all the cross-cutting concerns - queue access, database connections, logging, error reporting, lifecycle - were handled *once*, by the framework, so each job only had to express its own business logic. So I built one. It powered a job-board business's email and SMS lead pipelines for roughly two years.

This was foundational, early work (2015–2017) and one of my favorite things I've built: not using a framework, but *designing* one.

## The Framework

The core idea: a worker is a plugin. Every background job subclasses a single `Worker` base class and implements one method - `run()`. Everything else comes for free:

- **Dependency injection.** Each worker is handed its configuration, a logger, and its payload. Database, queue, and Slack clients are exposed as **lazily-initialized properties** - a connection is only opened the first time a worker actually touches that service, so a job never pays for clients it doesn't use.
- **Centralized error handling.** If a job throws, the base class catches it, logs the full traceback with a unique ID to centralized logging, and posts a color-coded alert to Slack - escalating to a direct message for anything unhandled. A worker can also opt to *recover*: override one method to, say, re-queue the items it didn't finish, and the failure is treated as handled instead of escalated. Individual jobs never have to write error plumbing.
- **Two execution modes, one code path.** The same worker runs either from the **command line** (for cron and manual runs) or under a **long-running daemon** that listens on a Redis pub/sub channel and dispatches jobs into a thread pool - sized per task. Both paths funnel through the same orchestrator, so a job behaves identically however it's triggered.
- **Graceful shutdown.** The daemon traps termination signals, stops accepting new work, and waits for in-flight jobs to finish before exiting - no dropped work on deploys.
- **Structured, observable logging.** Custom log formatters produce colored output for local development and structured JSON shipped asynchronously to a central log stack in production - non-blocking, so logging never slows a job.

Adding a new background job to the system was nearly zero-boilerplate: subclass `Worker`, write `run()`, register a name. Around twenty production jobs were built this way.

## The Application

On top of the framework ran a full **lead-qualification and engagement pipeline** for a job board: onboarding new leads with verification emails, sending daily personalized job-alert emails and SMS, processing delivery and engagement webhooks, and automating the lead lifecycle - unsubscribing people who stopped engaging, pausing inactive recipients, and rolling up daily stats. It integrated email and SMS providers, job-feed APIs, geolocation, search, and an internal email-verification service. The lead-lifecycle engine in particular was a careful state machine driven by precise database queries over each lead's engagement history.

## Why It Matters

Anyone can wire up a task queue; this project shows I can **design the abstraction itself** - separating framework concerns from application concerns, making the right calls about dependency injection, lifecycle, failure recovery, and observability, and doing it in a way that made every job after the first trivial to write. The framework choices were deliberate and held up across two years and twenty-plus production workers. It's the early work where I learned to think in terms of platforms, not just programs.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Framework (mine)** | Custom worker base class, orchestrator, DI, lifecycle & logging |
| **Web** | Flask (webhook → enqueue API) |
| **Queues** | Redis (RQ + pub/sub control plane), message queue for tasks |
| **Concurrency** | ThreadPoolExecutor, per-task sizing, graceful shutdown |
| **Database** | MongoDB |
| **Search** | Elasticsearch |
| **App integrations** | Email & SMS providers, job-feed APIs, geolocation, internal email verification |
| **Observability** | Centralized logging (async), Slack error reporting |
