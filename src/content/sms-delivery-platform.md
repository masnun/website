## Overview

I designed and built the messaging platform that runs a staffing company's job-alert business - the system that turns job leads into text messages people actually receive. Every day it delivers **400,000+ messages** across multiple brands and six different SMS providers, on time and in each recipient's own time zone.

This is the revenue engine of the product, so the bar was simple and unforgiving: never text the same person twice, never break SMS regulations, and never go down when a provider does. I took it from a blank page to production in Go, and I keep it running as the dependable backbone the business relies on.

## What It Does

- **Sends the right message at the right time.** Hundreds of thousands of time-zone-aware job alerts a day, across multiple brands, each with its own templates and rules.
- **Speaks to six SMS providers as one.** Plivo, Sinch, SimpleTexting, TextBack, PineApple and Slooce all work differently - different logins, message formats, and status reports. The platform hides all of that behind one clean interface, so providers can be swapped or load-balanced without touching code.
- **Stays on the right side of the law.** STOP/HELP/JOIN opt-out keywords, per-person rate limits, and daily send caps are built into the pipeline - and they fail safe, so a glitch slows sending down rather than risking an over-send or a violation.
- **Tracks every click and reply.** Inbound replies and delivery reports from every provider are normalized into one model, and a custom link shortener tracks clicks with built-in bot detection.
- **Reports on it all.** Live delivery numbers, click data, and a dashboard for inspecting the message queue in real time.

## The Hard Problems I Solved

**Never sending a duplicate - even with 30 workers racing each other.** At this scale, many machines process the queue at once, all capable of grabbing the same lead. I made duplicates impossible using distributed locks (keyed on the lead, campaign, and schedule) that expire automatically so nothing ever gets stuck. And once a provider accepts a message, the system is built so that no later failure can ever cause a re-send.

**Staying up when a provider goes down.** Provider outages are a question of *when*, not *if*. The platform isolates each send as its own unit of work and handles failures deliberately - a single provider failing never cascades into the rest of the system.

**Making a complex send safe and debuggable.** Sending one alert involves a dozen steps - load the lead, check compliance, acquire the lock, check caps, build a tracking record, shorten the link, render and send, save the result. I modeled this as an explicit pipeline where every step is isolated, so when something fails it's obvious exactly where and why.

**Knowing the moment something breaks.** Structured logging on every task, Sentry for crashes, and Slack alerts that group errors by brand and provider instead of flooding the channel - so on-call sees signal, not noise.

## How It's Built to Scale

The platform splits into three independent pieces, each scaled on its own:

- A **web service** handling the dashboard, provider webhooks, and campaign setup.
- A fleet of **background workers** (30 at a time) that do the actual sending, each send an isolated, retryable job.
- A **scheduler** that only ever *hands out* work - it never does the work itself, which lets the workers scale out horizontally without coordination headaches.

The guiding principle throughout: scheduling and execution are kept separate, correctness is enforced cluster-wide through locks and atomic database operations, and there's no hidden coordination server to fail.

## Why It Matters

This is the kind of system a business quietly depends on every single day. It handles money-adjacent, regulation-bound, high-volume work where mistakes are expensive - a duplicate text annoys a customer, a compliance slip is a legal problem, an outage is lost revenue. Building it meant getting the genuinely hard parts of backend engineering right: correctness under concurrency, graceful failure, and dependable operation at scale. It just works - and it has, every day, since I shipped it.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | Go 1.22 |
| **HTTP** | go-chi/chi v5, chi/render, chi/cors |
| **Job Queue** | Asynq (Redis-backed) + asynqmon dashboard |
| **Scheduling** | robfig/cron v3 |
| **Database** | MongoDB 4.4 |
| **Cache / Queue Backend** | Redis 7.0 |
| **Distributed Locks** | redsync + custom MongoDB locks |
| **SMS Providers** | Plivo, Sinch, SimpleTexting, TextBack, PineApple, Slooce |
| **Validation** | go-playground/validator v10 |
| **Encryption** | Fernet (go-fernet) |
| **Observability** | Sentry, structured `slog`, Slack alerts |
| **CLI / Config** | Cobra, env-based configuration |
| **IDs / Util** | google/uuid |
| **Dev / Deploy** | Docker, docker-compose, `air` hot-reload, 2-stage Dockerfile, runit supervisor |
