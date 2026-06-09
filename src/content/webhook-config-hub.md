## Overview

A **multi-tenant webhook hub and configuration service**, written in Go, that sat at the edge of a job-board network and handled two jobs for nine different brands at once: serving each app its configuration, and receiving the flood of delivery and engagement webhooks from email and SMS providers - classifying each event and routing it onward. It's the single place where "the outside world tells us what happened to a message" was turned into clean, actionable events.

I built it solo, start to finish, over roughly four years.

## What It Does

- **Per-app configuration API.** Each of nine job-board brands fetches its own settings - email and SMS templates, subject-line pools, ad configurations - from one service, with the right config selected by app.
- **Email webhook processing.** It ingests delivery events from email providers and classifies them precisely - hard bounce, soft bounce, spam complaint, unsubscribe, rejection - and decodes inbound messages.
- **SMS webhook processing.** It handles SMS delivery callbacks and inbound replies across multiple providers, with **stop-word detection** (recognizing the many ways people type "STOP", plus "more" and "help" keywords) to drive opt-outs and follow-ups correctly.
- **Blacklist enforcement.** Opt-outs are recorded to a global blacklist so the network never contacts someone who asked to stop.
- **Event fan-out.** Classified events are routed to the right downstream queues and services for each brand.
- **Live stats streaming.** Incoming stat events are streamed asynchronously to the analytics platform without blocking the webhook response.

## Engineering Highlights

- **Cache-aside with introspection.** Per-app config is served from Redis with a multi-hour TTL, falling back to the database on a miss and writing back. I built a custom cache layer that **tracks its own keys**, so the cache can be inspected and bulk-invalidated through admin endpoints rather than blindly scanning the store.
- **Multi-tenant router composition.** Nine brand-specific route groups mount under one service with identical endpoint shapes but app-scoped config lookups - one codebase, nine tenants, no duplication.
- **Non-blocking stats pipeline.** Stat events are handed to a channel drained by a pool of worker goroutines sized to the available CPUs, decoupling ingestion from the HTTP response so webhooks stay fast.
- **Provider-agnostic event model.** Different email and SMS providers report differently; the service normalizes all of them - bounce classification, stop-word parsing, event-type mapping - into one consistent internal event vocabulary.
- **Resilient by default.** Panic-recovery middleware, request logging, body-size limits, and wired-in error tracking and centralized logging.

## Why It Matters

This is the unglamorous integration layer that a messaging business lives or dies on: if a webhook hub misclassifies an unsubscribe or drops a bounce, you keep mailing people you shouldn't and your data goes wrong. Built as a lean, single-purpose Go service, it consolidated configuration and event handling for an entire multi-brand network behind one dependable front door - and I owned every line of it for four years.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Go |
| **HTTP framework** | Chi router (panic recovery, logging, body limits) |
| **Database** | MongoDB (per-app config, blacklist) |
| **Cache** | Redis, cache-aside with key tracking + admin invalidation |
| **Concurrency** | CPU-sized goroutine pool for async stats streaming |
| **Integrations** | Email & SMS provider webhooks, downstream event queues, analytics stream |
| **Observability** | Sentry, centralized syslog logging |
