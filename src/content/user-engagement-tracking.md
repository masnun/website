## Overview

This is the user-engagement-tracking engine behind a suite of job-board marketing campaigns. Every marketing email and SMS a job board sends carries trackable links and an invisible tracking pixel; this service is what those point back to. It records who opened a message, who clicked which link, and who unsubscribed - then fires those events as webhooks to the originating platform in real time, so the business knows exactly how its outreach is performing.

It's built for the unglamorous-but-critical job of being fast and always-on: a redirect or pixel hit has to resolve in milliseconds (a user is waiting on the other end), while the heavier work of recording the event and notifying downstream systems happens asynchronously in the background.

## What It Does

- **Click tracking.** Outgoing links are rewritten as short, encoded redirect URLs. When a recipient clicks, Tracer records the event and instantly forwards them to the real destination.
- **Open tracking.** A tiny invisible pixel embedded in each email reports back when the message is opened, including where in the message (header or footer).
- **Multi-channel.** Handles email and SMS messages alike, across more than twenty distinct job-board brands, each routed to its own destination.
- **Real-time event webhooks.** Every tracked event - sent, opened, clicked, unsubscribed - is pushed back to the originating platform as a webhook carrying the relevant context, so downstream systems react immediately.
- **Revenue attribution.** Events are tagged with their job source and brand, tying engagement back to where the traffic - and the revenue - came from.

## Engineering Highlights

- **Fast front, heavy back.** The user-facing request (redirect or pixel) does the bare minimum and returns immediately; recording the event and posting webhooks is handed off to a background task queue so the redirect never waits on slow downstream work.
- **Short, collision-free links.** Message IDs are compressed into short URL slugs using a compact encoding, generated from an atomic counter so IDs never collide even across multiple running instances.
- **Bot filtering.** Known crawlers and automated clients are filtered out before an event is counted, keeping engagement metrics honest rather than inflated by bots prefetching links.
- **PII protection.** Personal data (email, phone) embedded in tracking URLs is encrypted, not exposed in the clear.
- **Multi-tenant routing.** A single deployment serves 20+ brands, each with its own destination URLs and webhook endpoints, driven by configuration rather than separate codebases.
- **Operable in production** - distributed background workers, scheduled periodic jobs, error tracking, and a live worker-monitoring dashboard, deployed behind a production app server and reverse proxy.

## Why It Matters

Tracer is the kind of infrastructure a marketing operation quietly runs on - invisible when it works, immediately missed when it doesn't. It demonstrates low-latency request handling paired with asynchronous background processing, multi-tenant architecture, real-time event delivery, and the practical concerns that come with running PII-bearing, high-volume traffic in production: bot filtering, encryption, monitoring, and clean separation between the fast path and the heavy path.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Web framework** | Flask |
| **Background processing** | Celery (distributed workers + scheduled jobs) |
| **Broker / cache** | Redis |
| **Database** | MongoDB |
| **App server / proxy** | uWSGI behind nginx |
| **Observability** | Sentry, Flower (worker dashboard), structured logging |
| **Integrations** | Per-brand event webhooks, message-queue fallback, S3-hosted assets |
