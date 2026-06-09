## Overview

A **large-scale job-scraping service** that crawls the career sites of hundreds of employers, extracts their open positions, and feeds them as structured data into the wider job-board business. Company career pages are all different - different layouts, different pagination, plenty of JavaScript - so each employer needs its own scraper, and the system needs to run hundreds of them reliably, on a schedule, at scale.

It's a **team project**, and I was its **original architect**. I founded the project, designed its structure, and built the core engine - the distributed crawl orchestration, the scheduling, the API, the monitoring dashboard, and the first scrapers that set the template. The team then scaled that foundation out to **750+ employer scrapers** over the following couple of years.

## What I Built

### The crawl orchestration engine

The heart of the platform: the machinery that turns "run all the scrapers" into reliable, distributed work. I built the **queue-based job-distribution system** (Bull over Redis) that runs many headless-browser scrapers concurrently with tuned concurrency and lock durations, so hundreds of crawls execute in parallel without stepping on each other or losing work to stalls. I designed the **store and aggregate tasks** that collect scraped jobs and roll them up, and **decoupled job distribution** from scraping so the two scale independently.

### Crawl tracking & stats

I implemented the **crawl-ID system** that ties every scraped job back to the specific crawl run that produced it - giving the platform per-crawl and per-employer statistics, finish-status tracking, and job counts broken down by scraper. This is what makes a sprawling fleet of scrapers observable instead of a black box.

### Scheduling, API & CLI

I built the **cron-driven scheduling**, a **CLI** (for running and testing scrapers on demand), an **HTTP module** and the **web API** exposing crawl status, job counts, and crawl stats - the control surface the rest of the system and the dashboard talk to.

### The monitoring dashboard

I built the initial **React dashboard** that surfaces crawl activity, per-employer job counts, and run status - the operator's window into what the fleet is doing.

### The scraper pattern

I wrote the **first batch of employer scrapers** myself, establishing the shared structure and helpers (headless-browser handling, multi-page pagination, normalization) that every later scraper followed - the template the team used to scale to hundreds.

### Operations

Headless-browser tuning for reliable large-scale crawling, job-retention and old-crawl cleanup to keep the queue healthy, environment-aware logging, and the deployment setup.

## Why It Matters

This is the kind of contribution that's easy to undersell and hard to do: not the hundreds of individual scrapers, but the **engine that makes hundreds of scrapers possible** - distributed orchestration, crawl tracking, observability, and a clean template pattern, architected so a team could scale it 8× without re-architecting. I set the foundation; it held.

## Tech Stack (my parts)

| Layer | Technology |
|---|---|
| **Language / Runtime** | Node.js |
| **Scraping** | Headless browser automation (Puppeteer) |
| **Orchestration** | Bull job queues over Redis, tuned concurrency & locking |
| **Crawl tracking** | Per-crawl IDs, per-employer stats & finish status |
| **Database** | MongoDB |
| **Scheduling / CLI** | Cron-driven scheduler, Commander-based CLI |
| **API / web** | HTTP API for crawl status, job counts, stats |
| **Dashboard** | React monitoring UI |

*A team project that I architected and seeded; it was scaled out to 750+ employer scrapers by the team afterward.*
