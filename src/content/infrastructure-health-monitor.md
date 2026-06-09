## Overview

A lean **infrastructure health monitor and auto-remediation service**, written in Go, that watched over an entire microservices platform and acted the moment something went wrong. It continuously checks that every internal service is up, keeps an eye on the memory pressure of the platform's caches, alerts the team on Slack when something breaks - and, for one well-understood failure mode, **fixes it automatically** before a human even sees the alert.

I designed and built it solo. It's the always-on watchdog that let a small team trust a sprawling system of independent services to keep running.

## What It Does

- **Service uptime monitoring.** On a short interval it health-checks every service in the platform - roughly half a dozen internal APIs - with a timeout, and treats any error or bad status as down.
- **Cache memory monitoring.** It periodically inspects the platform's Redis/ElastiCache clusters, reading their live memory usage.
- **Smart Slack alerting.** When a service goes down it posts an alert; when it comes back, it posts a recovery notice. Crucially, it alerts **once** per outage rather than on every failed check.
- **Automatic remediation.** When a cache cluster's memory crosses a safe threshold, the monitor doesn't just warn - it **flushes the cache automatically**, then re-checks and reports the reclaimed memory, resolving a recurring operational headache without waking anyone.

## Engineering Highlights

- **Idempotent, fatigue-free alerting.** The naive version of a monitor spams you every cycle a service stays down. I made alerting **state-aware**: the down/up state of each service is tracked in Redis, so the team gets exactly one "down" alert and one "recovered" alert per incident - no noise, no missed recoveries. This is what makes a monitor something people actually keep enabled.
- **Automated self-healing.** Detecting a problem is half the job; the memory monitor closes the loop by remediating the most common cause of cache failures itself, then verifying the fix - turning a recurring 2 a.m. page into a logged, self-resolved event.
- **Clean concurrent design.** The HTTP surface and the background monitoring run as coordinated goroutines, with graceful shutdown via wait-group coordination and a bounded timeout so the process exits cleanly on signal.
- **Config-driven.** Every monitored service, cache cluster, schedule, and integration is declared in a single configuration file - adding a new service to watch is a config change, not a code change.
- **Layered observability.** Structured logging fans out to both error tracking and centralized log aggregation, so the monitor is itself observable.

## Why It Matters

This is pure operations engineering - the safety net under everything else. A platform built from many small services needs something watching the whole, and ideally something that can heal the easy failures on its own. Guardian did both: state-aware alerting that respects people's attention, and closed-loop auto-remediation that quietly fixed the most common failure mode. It's a small, sharp Go service that punched well above its line count in operational value.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Go |
| **HTTP** | Chi router |
| **State / targets** | Redis (down-state tracking + cache monitoring) |
| **Scheduling** | Cron-driven background tasks |
| **Alerting** | Slack (state-aware down/recovery notifications) |
| **Remediation** | Threshold-triggered automatic cache flush + verification |
| **Concurrency** | Coordinated goroutines, graceful shutdown |
| **Observability** | Sentry, centralized syslog logging |
