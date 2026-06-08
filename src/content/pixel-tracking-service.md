## Overview

A high-performance **email open-tracking service**, written in Go. It serves the invisible 1x1 pixel embedded in marketing emails: when a recipient opens a message, their email client loads the pixel, and this service records the open — capturing who, when, and from where — then hands the event off to the analytics pipeline. Simple in concept, demanding in practice, because it has to answer an enormous volume of pixel requests instantly without ever making the email client wait.

I designed and built it solo. It's the open-tracking counterpart to the click/redirect side of the [engagement-tracking system](#/project/user-engagement-tracking) — the piece that turns "email opened" into data.

## What It Does

- **Serves the tracking pixel.** A request to a per-message pixel URL returns a tiny transparent PNG immediately, so the recipient's email renders normally and instantly.
- **Records the open.** From each request it captures the IP address, user agent, hostname, timestamp, and any campaign/lead metadata passed in the URL — and derives the recipient's email domain.
- **Routes events downstream.** Every open is published to a message queue for the engagement pipeline and indexed into a search store for analytics dashboards.
- **Multi-tenant.** A single deployment serves several email brands, mapping each incoming hostname to its own project bucket and event queue.

## Engineering Highlights

This is a latency- and throughput-sensitive service, and the design reflects that:

- **Never make the client wait.** The HTTP handler returns the pixel **immediately** and does all the real work — queue publish, search indexing — asynchronously on a background goroutine. Recording an open never adds latency to serving it.
- **Pixel served from memory.** The PNG is loaded from disk once at startup and served from memory on every request — zero per-request disk I/O on the hot path.
- **Buffered-channel decoupling.** Incoming events are pushed onto a buffered channel that a dedicated worker goroutine drains sequentially. This absorbs bursts, decouples the HTTP layer from slower downstream writes, and keeps concurrency bounded — no goroutine explosion under load, no locks needed thanks to channel-based synchronization.
- **Failure-isolated.** Errors talking to the queue or search store are logged and reported, never propagated back to the pixel response — a downstream hiccup can't break email rendering for recipients.
- **Observability built in.** Application performance monitoring, error tracking, and centralized structured logging across the request path.

## Why It Matters

Pixelz is a textbook example of building for high volume at low latency in Go: serve the cheap thing instantly, do the expensive thing asynchronously, and bound your concurrency with channels. It demonstrates exactly the systems instincts that matter for request handling at scale — non-blocking I/O, in-memory hot paths, backpressure-friendly buffering, and failure isolation — in a small, sharp, single-purpose service. It quietly recorded the opens behind a whole network's email marketing.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Go |
| **HTTP framework** | Echo |
| **Concurrency** | Goroutines + buffered channel + single drain worker |
| **Event sink** | Message queue (per-project) + search store for analytics |
| **Multi-tenancy** | Hostname → project routing |
| **Observability** | APM, error tracking, centralized logging |
