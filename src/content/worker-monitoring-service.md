## Overview

A shared **background-jobs and worker-monitoring service** - a Celery-based utility that ran an assortment of miscellaneous scheduled tasks for a job-board business, and, most importantly, **watched over the other background-worker fleets** and raised the alarm when one went down.

It's a **team project** I built with another engineer. My main contribution was the **health-monitoring and alerting subsystem** - the part that keeps an eye on the platform's other Celery workers and tells a human the moment something breaks - along with the service's Celery foundation, observability wiring, and stats processing. My collaborator built the bulk of the miscellaneous business tasks.

## What I Built

### Worker health monitoring & alerting

The core of my work. Across the platform, several services ran their own pools of Celery workers (the SMS platform, the engagement tracker, and others). When one of those pools silently died, nobody knew until something downstream broke. I built a **monitoring system that periodically inspects each worker fleet's live status** - querying the queue/worker introspection layer - and **detects when expected workers are missing or unresponsive**. I iterated on the detection itself ("a more effective way of detecting worker status") to cut false positives, and wired it to **post down-and-recovery alerts to Slack**, so the team learns about an outage - and its resolution - in real time rather than after the fact.

### Celery foundation & observability

I set up the service's Celery application, settings, signal handlers, and task routing, and wired in **error tracking (Sentry) and application monitoring (New Relic)** across the tasks - including tuning monitoring to alert only on genuine errors to keep the noise down.

### Stats processing

I built and then **optimized the stats-handling pipeline** (including lock tuning and removing a contended task lock), and contributed the Elasticsearch processing and scheduler pieces.

## Why It Matters

This is operations engineering - the unglamorous work that makes a distributed system trustworthy. A platform made of many independent worker pools is only as reliable as your ability to notice when one stops. The monitoring-and-alerting subsystem I built turned silent worker failures into immediate, actionable Slack alerts with automatic recovery notifications - exactly the kind of safety net that lets a small team confidently run a lot of moving parts.

## Tech Stack (my parts)

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Task framework** | Celery (workers, scheduled jobs) |
| **Monitoring** | Worker-fleet introspection (Flower), Redis |
| **Alerting** | Slack down/recovery notifications |
| **Observability** | Sentry, New Relic |
| **Data** | MongoDB, Elasticsearch (stats processing) |

*A team project; I built the worker-monitoring/alerting subsystem, Celery foundation, observability and stats processing. The miscellaneous business tasks were largely built by a collaborator.*
