// Single source of truth for the whole site. Edit this file to update content —
// every section renders from here, so the page stays "dynamic" / data-driven.

import smsDeliveryPlatform from "./content/sms-delivery-platform.md?raw";
import jobAggregationMicroservice from "./content/job-aggregation-microservice.md?raw";
import centralDataPipelineService from "./content/central-data-pipeline-service.md?raw";
import marketingAnalyticsPlatform from "./content/marketing-analytics-platform.md?raw";
import heimdallApiGateway from "./content/heimdall-api-gateway.md?raw";
import userEngagementTracking from "./content/user-engagement-tracking.md?raw";
import logoService from "./content/logo-service.md?raw";
import textMessagingPlatform from "./content/text-messaging-platform.md?raw";
import emailJobAlertPlatform from "./content/email-job-alert-platform.md?raw";
import jobScrapingService from "./content/job-scraping-service.md?raw";
import leadDistributionRouter from "./content/lead-distribution-router.md?raw";
import workerMonitoringService from "./content/worker-monitoring-service.md?raw";
import infrastructureHealthMonitor from "./content/infrastructure-health-monitor.md?raw";
import pixelTrackingService from "./content/pixel-tracking-service.md?raw";
import blockchainFromScratch from "./content/blockchain-from-scratch.md?raw";
import customWorkerFramework from "./content/custom-worker-framework.md?raw";
import smtpEmailVerifier from "./content/smtp-email-verifier.md?raw";
import campaignRoutingEngine from "./content/campaign-routing-engine.md?raw";
import realtimeAnalyticsPlatform from "./content/realtime-analytics-platform.md?raw";
import webhookConfigHub from "./content/webhook-config-hub.md?raw";
import universityEms from "./content/university-ems.md?raw";
import socialShoppingApi from "./content/social-shopping-api.md?raw";
import mobileCommunityForum from "./content/mobile-community-forum.md?raw";

export const profile = {
  name: "Abu Ashraf Masnun",
  tagline: "Distributed Systems · Python · Go · Node.js",
  // Rotating words for the animated hero headline.
  roles: [
    "Technical Architect",
    "Backend Engineer",
    "Distributed Systems Engineer",
    "Pythonista",
    "Gopher",
  ],
  location: "Khulna, Bangladesh",
  phone: "+8801711 960803",
  email: "masnun@gmail.com",
  website: "masnun.com",
  github: "github.com/masnun",
  upwork: "https://www.upwork.com/freelancers/abuashrafmasnun",
  cv: "Abu Ashraf Masnun - CV.pdf",
  summary:
    "With close to 15 years of professional experience, I build systems that scale to millions of users per month. I'm deeply focused on software architecture and system design, and over the years I've built high-scale distributed systems for clients across Python, Go, Node.js and PHP. I reach for boring, proven technology when the goal is to ship something that lasts, work the agile way, and do my best work on a team — sharing what I know and learning from everyone around me. Open source is close to my heart; in my spare time you'll usually find me on developer forums, helping others get unstuck.",
};

export type Skill = {
  name: string;
  // 0–100, derived from the proficiency bars on the CV.
  level: number;
  blurb: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    level: 95,
    blurb:
      "My most favorite language. Founded Python Bangladesh. Built apps, services and large email/SMS platforms with Django, DRF, Flask and Celery scaling to a million users daily. Wrote popular StackOverflow answers on asyncio.",
  },
  {
    name: "Go (Golang)",
    level: 75,
    blurb:
      "My second favorite. Love the concurrency primitives — easy to build concurrent systems. Prefer Chi for routing and sqlx over ORMs. Fast, reliable and scalable; my pick for large distributed systems.",
  },
  {
    name: "Node.js / TypeScript",
    level: 70,
    blurb:
      "Started on the MEAN stack, now favor Koa for its light weight. Adopted TypeScript for the productivity gains of types. Moved background tasks from Kue to Bull.",
  },
  {
    name: "PHP",
    level: 72,
    blurb:
      "7+ years in my early days — Laravel, Symfony2, CodeIgniter, WordPress, Silverstripe. I respect what PHP brought to the web but actively avoid it today.",
  },
  {
    name: "Javascript (Front End)",
    level: 70,
    blurb:
      "jQuery → AngularJS → React. Comfortable building SPAs and plain-old-JS. A backend dev at heart who works full stack.",
  },
  {
    name: "Version Control / Git",
    level: 78,
    blurb:
      "Started on SVN, lived in Git most of my career. Familiar with modern Git usage and Git flow.",
  },
  {
    name: "SysAdmin / Cloud / DevOps",
    level: 68,
    blurb:
      "Setting up and managing Linux servers for years — LAMP and nginx with Python/Node, Varnish, HAProxy. AWS / Rackspace / Azure. Chef / Ansible automation.",
  },
  {
    name: "NoSQL",
    level: 60,
    blurb:
      "MongoDB and Redis in production; played with RethinkDB. Used Redis for caching, message queueing and storage.",
  },
  {
    name: "Business Analysis / Growth",
    level: 65,
    blurb:
      "Graduation and masters in business. Co-founder of Google Business Group Khulna. Worked as product co-ordinator translating business needs to engineering.",
  },
  {
    name: "Docker / Vagrant / VMs",
    level: 35,
    blurb:
      "Vagrant for local env setup, Docker when needed, plus experience with Bitnami stacks.",
  },
  {
    name: "UI / UX / Design",
    level: 20,
    blurb:
      "Honest about this one — I can reuse Bootstrap and themes to make things work, but I'm no designer.",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Job[] = [
  {
    role: "Senior Full Stack Software Engineer",
    company: "Local Staffing LLC",
    period: "Jul 2015 — Now",
    description:
      "Building scalable systems used by millions. Built everything from large monoliths to high-scale microservices in Python, Node and Go. Main focus: the email & SMS delivery platform (Python + Celery). React on the front end, Chi for Go services, Koa + TypeScript for Node services. Also built internal services and reporting tools.",
  },
  {
    role: "Senior Python Developer (Backend)",
    company: "Durlov",
    period: "2016 — 2018",
    description:
      "Over two years building backends for mobile apps — architectures, scalable APIs with Django REST Framework, background jobs with Celery, and a realtime chat system over WebSocket with Django Channels. Also managed AWS EC2 instances.",
  },
  {
    role: "Lead Developer",
    company: "Transcendio",
    period: "Dec 2014 — Jul 2015",
    description:
      "Led the web dev team building web products for local clients. Work involved Django / Laravel with an AngularJS front end.",
  },
  {
    role: "Web Application Developer",
    company: "Vitzo.com Internet Services",
    period: "May 2012 — Jan 2015",
    description:
      "Mostly PHP / CodeIgniter with plenty of front-end jQuery. Built Google Apps automation, Firefox & Chrome extensions, in-house YouTube R&D, and a realtime chat app with Python and Tornado.",
  },
  {
    role: "Python/Django Developer",
    company: "AirCourts",
    period: "Sep 2013 — Dec 2014",
    description:
      "Built the web application for a Portugal-based startup reinventing how sports clubs work — an online booking platform. Django + Django REST Framework with AngularJS on the front end.",
  },
  {
    role: "Software Engineer / Product Co-ordinator",
    company: "okdo.it / Tasawr",
    period: "Nov 2012 — Dec 2013",
    description:
      "Contributed to a SaaS product on Zend Framework 1.x and AngularJS. Doubled as Product Co-ordinator — communicating with investors and founders, translating business requirements into JIRA issues.",
  },
  {
    role: "Software Engineer",
    company: "Leevio",
    period: "Sep 2009 — Nov 2012",
    description:
      "Built web applications with PHP and used Python extensively. Also built mobile apps with PhoneGap and Titanium.",
  },
  {
    role: "Web Developer",
    company: "BRE LLC",
    period: "Mar 2010 — Feb 2011",
    description:
      "Built a web traffic monitoring application with CodeIgniter and jQuery. Sole developer, working directly with the founder (part time).",
  },
];

export type Explored = { tech: string; note: string };

export const explored: Explored[] = [
  {
    tech: "C#, Java, Clojure, Obj-C, Swift, Elixir, Rust",
    note: "Learning new languages is a favorite pastime. Loved Clojure's Lisp syntax for rewiring how I think; believe Elixir/Phoenix has a great future.",
  },
  {
    tech: "WebSocket, WebRTC",
    note: "Built realtime chat over WebSocket and played with a WebRTC video conferencing system.",
  },
  {
    tech: "Google App Engine, Tornado, Bottle",
    note: "Built basic apps. Tornado stood out for its concurrency patterns and WebSocket support.",
  },
  {
    tech: "Drupal, Joomla, Magento",
    note: "Blast from the past — basic projects during my PHP days.",
  },
  {
    tech: "PostgreSQL",
    note: "Running in production with Django apps, but via the ORM — so not yet a headline skill.",
  },
  {
    tech: "Supervisor, Gearman, RabbitMQ",
    note: "Explored for building distributed background processing.",
  },
];

export type Project = {
  // URL slug for the dedicated detail page (#/project/<slug>).
  slug: string;
  name: string;
  // Short one-liner shown on the front-page card.
  summary: string;
  // Overview paragraph shown at the top of the detail page.
  details: string;
  // Optional rich-text (Markdown) body rendered on the detail page. When
  // present it replaces `details` — supports headings, lists, tables, code.
  markdown?: string;
  tags: string[];
  link?: string;
  // Surfaced on the slim homepage.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sms-delivery-platform",
    featured: true,
    name: "SMS Delivery Platform",
    summary:
      "Go platform I designed and built that reliably delivers 400k+ SMS per day across multiple brands — driving revenue while staying fully compliant.",
    details:
      "I designed and built this multi-tenant messaging platform in Go to power a staffing product's job-alert business. It dependably delivers 400k+ messages a day across multiple brands and six SMS providers, and owns the full revenue-generating lifecycle — from lead ingestion to compliant delivery, event tracking and reporting. I engineered it to never send a duplicate, never break SMS regulations, and keep running when a provider fails — the kind of reliability the business depends on every single day.",
    markdown: smsDeliveryPlatform,
    tags: ["Go", "Asynq", "Redis", "MongoDB", "Chi"],
  },
  {
    slug: "job-aggregation-microservice",
    name: "Job Aggregation Microservice",
    summary:
      "High-throughput Node.js platform aggregating job board APIs and ad networks into one feed, with full revenue attribution streamed to Snowflake and reported in Metabase.",
    details:
      "I designed and built this Node.js platform to pull job listings from external job boards and ad networks, blend them into one unified feed, and serve them through a single API. On top of that it runs a complete revenue pipeline — tracking impressions, clicks and affiliate earnings, tying every dollar of partner revenue back to the search that produced it, and exporting the results to Snowflake for reporting in Metabase. It hides the quirks of every partner network behind one dependable feed and keeps the money accurate at scale.",
    markdown: jobAggregationMicroservice,
    tags: ["Node.js", "JavaScript", "Koa", "BullMQ", "MongoDB", "Snowflake"],
  },
  {
    slug: "central-data-pipeline-service",
    featured: true,
    name: "Central Data Pipeline Service",
    summary:
      "Central Node.js data pipeline routing analytics events from 20+ apps and 60+ event types into Snowflake — built memory-flat, exactly-once, and extensible by config.",
    details:
      "I designed and built the central data pipeline that unifies analytics from an entire product suite into one warehouse. 10+ internal services and platforms send their events to a single API; the service validates, batches, deduplicates, transforms and lands them in Snowflake for business reporting across 60+ event types. I engineered it to never lose or duplicate an event, to stream large batches through with flat memory, and to onboard a new data source by config alone — the kind of reliable backbone every BI dashboard in the company sits downstream of.",
    markdown: centralDataPipelineService,
    tags: ["Node.js", "Koa", "BullMQ", "Redis", "MongoDB", "Snowflake"],
  },
  {
    slug: "marketing-analytics-platform",
    featured: true,
    name: "Marketing Analytics Data Platform",
    summary:
      "Polyglot Go + Node.js platform turning real-time ad traffic into ROI analytics — ingesting click events at the edge, enriching with cross-network ad spend, and warehousing to Snowflake for Metabase dashboards.",
    details:
      "I designed and built an end-to-end marketing analytics platform — a suite of services that turns raw advertising traffic into the numbers a business uses to decide where its ad money goes. It ingests click-level traffic and conversion events in real time, enriches each one with ad-spend data from the major search, social and push ad networks, and lands the unified result in Snowflake for ROI attribution and campaign analytics. Built across Go and Node.js with real-time, queue-driven and scheduled-batch architectures — each chosen to fit the failure modes of the source it talks to — it solves the hard problem that every ad network reports money differently, late and messily, while the business still needs one trustworthy answer to what a campaign earned versus what it cost.",
    markdown: marketingAnalyticsPlatform,
    tags: ["Go", "Node.js", "AWS Lambda", "Asynq", "BullMQ", "MongoDB", "Snowflake"],
  },
  {
    slug: "heimdall-api-gateway",
    name: "Heimdall — API Caching Gateway",
    summary:
      "A caching gateway in front of paid email/phone verification APIs — read-through caching, multi-provider fallback and usage analytics — built twice, idiomatically in both Node.js and Go.",
    details:
      "Heimdall is a caching gateway that sits in front of paid third-party verification APIs — email validation and phone-number lookups — and shields the business from their cost and latency. It checks its own cache before ever calling a provider, falls back gracefully across multiple email vendors so a single outage never breaks verification, and tracks its own cache-hit savings in concurrency-safe daily buckets. I built it in Go first (Chi, MySQL), then re-implemented it in Node.js (Koa, MongoDB) to scale the service across the development team — more developers knew Node and could own and extend it — with the Node.js version also growing the feature set to add phone lookups and multi-provider fallback.",
    markdown: heimdallApiGateway,
    tags: ["Go", "Node.js", "Koa", "Chi", "MongoDB", "Caching"],
  },
  {
    slug: "user-engagement-tracking",
    name: "User Engagement Tracking",
    summary:
      "Python/Flask + Celery engine tracking opens, clicks and unsubscribes across 20+ job-board brands — millisecond redirects up front, asynchronous event recording and real-time webhooks behind.",
    details:
      "A user-engagement-tracking engine behind a suite of job-board marketing campaigns. Every marketing email and SMS carries trackable links and an invisible tracking pixel that point back to Tracer; it records who opened, clicked and unsubscribed, then fires those events as real-time webhooks to the originating platform. I built it for the unglamorous-but-critical job of being fast and always-on: a redirect or pixel hit resolves in milliseconds while the heavier work of recording the event and notifying downstream systems runs asynchronously on a background task queue. A single multi-tenant deployment serves 20+ brands, with short encoded redirect links, bot filtering to keep metrics honest, and encryption of personal data carried in URLs.",
    markdown: userEngagementTracking,
    tags: ["Python", "Flask", "Celery", "Redis", "MongoDB"],
  },
  {
    slug: "logo-service",
    name: "Logo Service",
    summary:
      "Team-built company-logo delivery service. My layer: BullMQ background workers, concurrent keyword-enrichment cron, an architecture restructure, observability and Docker/CI.",
    details:
      "Logo Service is a company-logo management and delivery service — the single source of truth for brand logos across a product suite, where any app asks for a company by name and gets back a CDN-hosted logo matched through a search engine. It's a team project; the original logo CRUD, search and asset pipeline were built by another engineer before I joined. My contribution turned it from a request/response API into a self-maintaining, observable, production-grade service: I introduced a background workers layer (BullMQ over Redis) to move slow work off the request path, built the scheduling system that enriches every company with related keywords from an external service — distributing that work across concurrent tasks so it runs in parallel — restructured the codebase into clear data/web/worker layers and refactored the Mongo connection pool, wired in Sentry and New Relic across all processes, and added the Docker, docker-compose, GitHub Actions and process-manager setup.",
    markdown: logoService,
    tags: ["Node.js", "BullMQ", "Redis", "MongoDB", "Sentry", "Docker"],
  },
  {
    slug: "text-messaging-platform",
    name: "Text Messaging Platform",
    summary:
      "Multi-tenant SMS job-alert platform I owned end to end — lead ingestion, timezone-aware scheduling, multi-carrier delivery, two-way opt-out compliance and a React analytics dashboard. Built first in Python, then rewritten in Node.js.",
    details:
      "A multi-tenant SMS job-alert platform I designed, built and ran end to end — ingesting leads, scheduling personalized text alerts, delivering them across multiple carriers, handling opt-outs and replies, and reporting revenue back to the business across 20+ job-board brands. I built it twice: first in Python (Flask + Celery), which I operated for several years, then rewrote the backend in Node.js (Koa + a Redis-backed job queue) for a cleaner architecture, with a dedicated React/Material-UI management-and-analytics dashboard on top. It does timezone-aware sending, multi-provider delivery with fallback, two-way STOP/compliance handling, encrypted click tracking and per-brand revenue accounting. This is a separate, earlier system from the Go-based SMS Delivery Platform elsewhere in this portfolio — that one is a later high-throughput delivery engine; this is the lead-alert messaging platform and its rewrite.",
    markdown: textMessagingPlatform,
    tags: ["Python", "Node.js", "React", "Celery", "Koa", "MongoDB"],
  },
  {
    slug: "email-job-alert-platform",
    name: "Email Job-Alert Platform",
    summary:
      "Distributed Python/Celery worker platform sending daily personalized job-alert emails across 8 partner brands — with a self-scaling worker fleet that spawns workers in proportion to queue depth. Built and run solo over ~4 years.",
    details:
      "A distributed background-processing platform that powered daily personalized job-alert emails across a network of eight job-board brands. It ingests candidate leads from partner boards, validates and deduplicates them, sends each candidate a tailored daily email of matching jobs, tracks engagement (opens, clicks, unsubscribes) via provider webhooks, and auto-unsubscribes people as they go cold. The standout is operational: a scheduler measures each queue's depth every few minutes and dynamically spawns workers in proportion to the backlog, so the system absorbs surges without manual capacity tuning. A single multi-tenant Celery pipeline — ingest, validate, welcome, queue, send, track, clean up — is parameterized per brand across prioritized queues, with throttling, failover routing and full observability. I designed, built and operated it single-handedly over roughly four years; it's the email sibling of the Text Messaging Platform.",
    markdown: emailJobAlertPlatform,
    tags: ["Python", "Celery", "MongoDB", "Redis", "Flask"],
  },
  {
    slug: "job-scraping-service",
    name: "Large Scale Job Scraping Service",
    summary:
      "A team-built service that scrapes hundreds of employer career sites. I was the original architect — built the distributed crawl engine (Bull queues, headless browsers), crawl-ID tracking, API, scheduler and React dashboard; the team scaled it to 750+ scrapers.",
    details:
      "A large-scale job-scraping service that crawls the career sites of hundreds of employers, extracts open positions, and feeds them as structured data into a job-board business. It's a team project that I founded and architected. I built the core engine — a queue-based distributed crawl orchestration system (Bull over Redis) running many headless-browser scrapers concurrently with tuned concurrency and locking, the store/aggregate tasks, and a crawl-ID system that ties every job back to its crawl run for per-crawl and per-employer stats. I also built the cron scheduling, a CLI, the web API for crawl status and job counts, the initial React monitoring dashboard, and the first batch of scrapers that set the shared template. The team then scaled that foundation to 750+ employer scrapers over the following couple of years.",
    markdown: jobScrapingService,
    tags: ["Node.js", "Puppeteer", "Bull", "Redis", "MongoDB", "React"],
  },
  {
    slug: "lead-distribution-router",
    name: "Lead Distribution Router",
    summary:
      "Real-time router that fans every incoming lead out to multiple consumers at once — enriching with email verification, timezone and job-title normalization, with validate-then-failover delivery so a lead is never dropped. Built first in Python, then rewritten in TypeScript/Koa.",
    details:
      "A real-time lead distribution router — the hub that fans every incoming lead out to all the systems that need it the instant it arrives. A lead comes in through one API; the service verifies its email deliverability, resolves its timezone from its ZIP code, normalizes the searched job title against a canonical taxonomy, decides where it belongs based on source and target market, and dispatches it simultaneously to a primary consumer, the SMS platform and a search index. Every dispatch validates the downstream's response (status and well-formed body) and falls back to a durable backup queue on any failure, so a lead is never lost. I built it solo twice — first in Python (Flask + Celery), which I ran in production, then rewrote it in Node.js + TypeScript (Koa + Redis-backed Bull queues) for a cleaner, more responsive architecture — with graceful shutdown, queue hygiene and full observability. It's the connective tissue between several other systems in this portfolio.",
    markdown: leadDistributionRouter,
    tags: ["Python", "TypeScript", "Node.js", "Celery", "Koa", "MongoDB"],
  },
  {
    slug: "worker-monitoring-service",
    name: "Worker Monitoring & Background Jobs",
    summary:
      "Team-built Celery utility service. My part: a worker-health monitoring subsystem that watches the platform's other worker fleets and fires Slack down/recovery alerts — plus the Celery foundation, observability and stats processing.",
    details:
      "A shared background-jobs and worker-monitoring service — a Celery-based utility that ran miscellaneous scheduled tasks for a job-board business and watched over the platform's other background-worker fleets. It's a team project; my main contribution was the health-monitoring and alerting subsystem. Several services ran their own Celery worker pools (the SMS platform, the engagement tracker, others) that could silently die unnoticed; I built monitoring that periodically inspects each fleet's live worker status, detects when workers are missing or unresponsive (iterating on the detection to cut false positives), and posts down-and-recovery alerts to Slack so the team learns of outages in real time. I also set up the Celery foundation, signal handlers and task routing, wired in Sentry and New Relic, and built then optimized the stats-handling pipeline. The miscellaneous business tasks were largely built by a collaborator.",
    markdown: workerMonitoringService,
    tags: ["Python", "Celery", "Redis", "Flower", "Slack", "MongoDB"],
  },
  {
    slug: "infrastructure-health-monitor",
    name: "Infrastructure Health Monitor",
    summary:
      "A solo Go watchdog for a whole microservices platform — uptime checks across services, cache-memory monitoring, state-aware Slack alerts (no fatigue), and automatic cache-flush self-healing.",
    details:
      "A lean infrastructure health monitor and auto-remediation service in Go that watched over an entire microservices platform. On short intervals it health-checks every internal service and inspects the memory of the platform's Redis/ElastiCache clusters. When a service goes down it posts a Slack alert — exactly once per incident, with a recovery notice when it returns — by tracking each service's down/up state in Redis to avoid alert fatigue. For cache memory, it goes further than alerting: when usage crosses a threshold it automatically flushes the cache and re-checks, resolving the most common failure mode without paging anyone. Built solo with config-driven targets, coordinated goroutines and graceful shutdown — a small, sharp service that was the always-on safety net under everything else.",
    markdown: infrastructureHealthMonitor,
    tags: ["Go", "Chi", "Redis", "Slack", "Cron"],
  },
  {
    slug: "pixel-tracking-service",
    name: "Email Open-Tracking Pixel Service",
    summary:
      "High-throughput Go service serving the 1x1 open-tracking pixel in marketing emails — returns the pixel instantly and records the open asynchronously via goroutines + a buffered-channel worker. Multi-tenant across several email brands.",
    details:
      "A high-performance email open-tracking service in Go. It serves the invisible 1x1 pixel embedded in marketing emails: when a recipient opens a message their client loads the pixel, and this service records the open — IP, user agent, timestamp, campaign metadata, email domain — then routes it to a message queue for the engagement pipeline and a search store for analytics. The design is built for high volume at low latency: the HTTP handler returns the pixel from memory immediately (loaded once at startup, no per-request disk I/O) and does all real work asynchronously on a goroutine, pushing events onto a buffered channel that a single worker drains sequentially — absorbing bursts, bounding concurrency without locks, and isolating downstream failures from the pixel response. Multi-tenant across several email brands via hostname routing. Built solo; it's the open-tracking counterpart to the click/redirect engagement tracker.",
    markdown: pixelTrackingService,
    tags: ["Go", "Echo", "Goroutines", "Elasticsearch", "IronMQ"],
  },
  {
    slug: "blockchain-from-scratch",
    name: "Blockchain From Scratch (Go)",
    summary:
      "A from-scratch minimal blockchain in Go — cryptographically SHA-256-linked blocks with a genesis block, exposed via a small REST API. An honest one-day learning exercise in the fundamentals.",
    details:
      "A from-scratch minimal blockchain built in Go to understand how blockchains work under the hood. I implemented the core data structure myself: a chain of blocks where each holds its data, timestamp, the previous block's hash and its own SHA-256 hash — so every block is cryptographically chained to its predecessor (the tamper-evident property), bootstrapped from a genesis block, and exposed through a small Chi REST API to add and view blocks. It's an honest learning exercise — built in a day in early 2018, in-memory, no proof-of-work or consensus — kept deliberately tight so the cryptographic-linking idea stayed front and center. It reflects how I like to learn: build the smallest real version of a thing to see how it ticks.",
    markdown: blockchainFromScratch,
    tags: ["Go", "Chi", "SHA-256", "Learning"],
  },
  {
    slug: "custom-worker-framework",
    featured: true,
    name: "Custom Background-Worker Framework",
    summary:
      "A Python background-worker framework I designed from scratch — worker-as-plugin base class, lazy dependency injection, centralized error handling, CLI + daemon execution and graceful shutdown — plus the lead/email/SMS pipeline (20+ jobs) built on it.",
    details:
      "A background-worker framework I built from scratch in Python, and the production lead-processing app that ran on it, powering a job board's email and SMS pipelines for ~2 years (2015–2017). The framework treats a worker as a plugin: every job subclasses one Worker base class and implements run(), and gets everything else for free — dependency injection with lazily-initialized database/queue/Slack clients, centralized error handling (traceback + unique ID to central logging, color-coded Slack alerts, opt-in recovery hooks), two execution modes through one code path (CLI for cron, and a daemon listening on Redis pub/sub that dispatches into a per-task thread pool), and graceful shutdown that drains in-flight work. Adding a job was near-zero boilerplate; ~20 production workers were built this way. On top ran a full lead-qualification pipeline — onboarding, daily job-alert email & SMS, engagement webhooks, and a lead-lifecycle state machine. The distinctive part isn't using a framework but designing one: separating framework concerns from application concerns, with deliberate calls on DI, lifecycle, failure recovery and observability.",
    markdown: customWorkerFramework,
    tags: ["Python", "Flask", "Redis", "RQ", "MongoDB", "Framework Design"],
  },
  {
    slug: "smtp-email-verifier",
    name: "SMTP Email Verification Service",
    summary:
      "A Go microservice that verifies email deliverability at the protocol level — syntax, MX lookup, and a live SMTP MAIL/RCPT handshake against the recipient's mail server — with two-layer caching.",
    details:
      "A real email-verification microservice in Go that checks whether an address is actually deliverable by talking to the recipient's mail server directly. It validates syntax, resolves the domain's MX records, then opens an SMTP connection and walks the MAIL FROM / RCPT TO handshake to confirm the mailbox exists — catching non-existent addresses that pass every syntactic check. Results are cached two ways: an in-memory MX cache avoids repeated DNS lookups, and a persistent database cache makes any previously-seen address an instant hit. Built solo in early 2017 on a lightweight Go HTTP framework, it's the lower-level cousin of the later Heimdall gateway — where Heimdall caches third-party vendor results, this service does the network-level verification itself.",
    markdown: smtpEmailVerifier,
    tags: ["Go", "Echo", "SMTP", "DNS", "MySQL"],
  },
  {
    slug: "campaign-routing-engine",
    name: "Campaign & Path Routing Engine",
    summary:
      "A data-driven job-routing engine I founded — configurable filter 'campaigns' composed into 'paths' that process in parallel, fault-tolerantly. Clean layered Koa/BullMQ/MongoDB service.",
    details:
      "A campaign-and-path routing engine for a staffing business: given a search (keyword + location) it decides which jobs to surface by running them through reusable, configurable filtering rules. I founded the service and built its functional core. A campaign is a named set of filters (only / block / match) bound to a job source; processing it fetches jobs and keeps only those passing every filter. A path is a collection of campaigns applied to the same search and aggregated — and I designed paths to process their campaigns in parallel, gracefully tolerating individual failures. I built the campaign model and filter-operator engine, the path-processing orchestration, the API endpoints, the job-feed client, MongoDB persistence, and a cleanly layered service skeleton (transport/service/utils) with BullMQ workers and cron under Redis distributed locking for safe horizontal scaling. A second engineer later added request validation and docs. The point: turning bespoke routing logic into a configurable engine non-engineers can compose.",
    markdown: campaignRoutingEngine,
    tags: ["Node.js", "Koa", "BullMQ", "Redis", "MongoDB"],
  },
  {
    slug: "realtime-analytics-platform",
    featured: true,
    name: "Real-Time Campaign Analytics Platform",
    summary:
      "A full-stack, real-time marketing analytics platform built over 5 years — concurrent fault-tolerant event ingestion with backpressure, per-minute multi-dimensional aggregation, and a React dashboard of live charts and cohort reports. I drove the backend and led the frontend.",
    details:
      "A full-stack, real-time marketing analytics platform — the live dashboard the business watched to see email and SMS campaign performance minute by minute. Events stream in from every channel (sends, opens, clicks, SMS activity, unsubscribes), get aggregated server-side into time-bucketed multi-dimensional stats, and surface in a rich React dashboard with charts, breakdowns, cohort analysis and year-over-year comparison. The core engineering is a concurrent, fault-tolerant ingestion pipeline that drains a high-volume external queue plus Redis in parallel batches — capped for graceful backpressure — de-normalizes each event into several aggregation trees, and merges them incrementally into the day's stats document so concurrent updates never clobber. A Redis cache keeps dashboards snappy; scheduled jobs handle heavier daily rollups. One of my largest, longest-running projects (2017–2022): I built the TypeScript/Koa backend almost entirely and led the React/Redux frontend.",
    markdown: realtimeAnalyticsPlatform,
    tags: ["TypeScript", "Koa", "React", "Redux", "MongoDB", "Redis"],
  },
  {
    slug: "webhook-config-hub",
    name: "Multi-Tenant Webhook & Config Hub",
    summary:
      "A solo-built Go service for a 9-brand job-board network — serves per-app configuration and ingests email/SMS provider webhooks, classifying bounces, unsubscribes and stop-words, with cache-aside config and async stats streaming.",
    details:
      "A multi-tenant webhook hub and configuration service in Go that sat at the edge of a nine-brand job-board network and did two jobs at once: serving each app its configuration (templates, subject pools, ad configs) and receiving the flood of delivery and engagement webhooks from email and SMS providers — classifying each event (hard/soft bounce, spam complaint, unsubscribe, plus SMS stop-word/more/help detection), enforcing a global blacklist, and routing events to the right downstream queues. Per-app config is served cache-aside from Redis via a custom cache layer that tracks its own keys for admin inspection and bulk invalidation; nine brand-specific route groups mount under one service; and stat events stream to the analytics platform through a CPU-sized goroutine pool so webhooks stay fast. I built it solo, end to end, over roughly four years (2017–2021) — the integration layer a messaging business lives or dies on.",
    markdown: webhookConfigHub,
    tags: ["Go", "Chi", "Redis", "MongoDB", "Webhooks"],
  },
  {
    slug: "university-ems",
    featured: true,
    name: "University Exam & Result Management System",
    summary:
      "A Django exam/result management system I built solo for Khulna University's Business Administration Discipline and ran in production for 9 years — course registration, multi-role tabulation, and an academic rules engine for program-specific grading and GPA.",
    details:
      "A university examination and result management system I designed, built and maintained single-handedly for the Business Administration Discipline at Khulna University, kept in production from 2014 to 2023. It runs the full academic cycle: course registration (add/drop, credit limits, retakes, registration locks), component-based faculty mark entry, a multi-role tabulation workflow (instructor → scrutiny → tabulation) with result locks and audit logs, GPA computation on a 4.0 scale, print-ready mark sheets, and a faculty examination-payment tracker. The interesting part is the academic rules engine: BBA/MBA/EMBA/Executive MBA and their OBE variants each use different mark components (seven configurations), BBA retakes apply a points downgrade, and rules vary by cohort year — all encoded as concrete logic that drives real transcripts. Its nine-year production run for thousands of students is the achievement: sustained solo ownership of a complex, correctness-critical domain system.",
    markdown: universityEms,
    tags: ["Python", "Django", "MySQL", "Education"],
  },
  {
    slug: "social-shopping-api",
    name: "Social Shopping App — REST API",
    summary:
      "A Django REST Framework backend for a social fashion-shopping app — boutiques, products, social gifting, group wish lists, follows and orders — with token auth supporting password, phone and social login. A solo 6-week MVP.",
    details:
      "A REST API backend for a social fashion-shopping mobile app: boutiques and products to discover, social gifting between friends, group 'birthday list' wish lists, follows, likes, messaging, and a commerce layer (orders, sales, reservations, exclusive offers). I built it solo over ~6 weeks in 2016 as a Django REST Framework server for a phone client — a broad consumer domain (two-dozen resources across catalog, social, gifting and commerce) exposed as a consistent CRUD API via DRF serializers, viewsets and routers, with stateless token authentication supporting three login modes through one API: username/password, phone-number, and social-network login. An honest early-stage MVP — a complete, working API across a genuinely wide feature surface, built quickly and cleanly to make the product concept real.",
    markdown: socialShoppingApi,
    tags: ["Python", "Django", "DRF", "MySQL"],
  },
  {
    slug: "mobile-community-forum",
    name: "Mobile Community Forum Platform",
    summary:
      "A complete mobile/WAP-era community platform I built from scratch in PHP — forums, private messaging, profiles, presence, search, moderation and homegrown anti-abuse. One of my earliest projects, rebuilt across five generations.",
    details:
      "A complete mobile community and forum platform built from scratch in PHP — one of my earliest real projects, rebuilt and refined across multiple generations (this is v5). A self-hosted social site for mobile/WAP-era phones where people signed up, posted in forums (boards, topics, posts, moderation), messaged each other through a full private-messaging inbox, kept public and extended profiles, saw who was online, and searched across posts, topics, users and messages — with an owner control panel to run the community and homegrown anti-abuse (text CAPTCHA, banned user-agent handling, a 'shielded login' gate). I wrote every page, the database, and the moderation tools myself. I include it because it's where I come from: a young, self-taught developer building an entire multi-user web application end to end because he wanted to — and people actually used it.",
    markdown: mobileCommunityForum,
    tags: ["PHP", "MySQL", "Early Work"],
    link: "https://github.com/masnun/J21v5",
  },
];

export type OssProject = {
  name: string;
  // One-line description shown on the OSS card.
  summary: string;
  // External GitHub URL.
  link: string;
  tags: string[];
};

// Small open-source projects / libraries — link straight to GitHub, no detail page.
export const ossProjects: OssProject[] = [
  {
    name: "PHPTube",
    summary:
      "A PHP library that extracts direct YouTube video URIs — in multiple formats — straight from a watch URL.",
    link: "https://github.com/masnun/phptube",
    tags: ["PHP", "Library", "Composer"],
  },
  {
    name: "Avro Phonetic WP Plugin",
    summary:
      "A WordPress plugin that brings Avro Phonetic Bangla typing to any input — type Bengali phonetically, right in the browser.",
    link: "https://github.com/masnun/avro-phonetic-wp-plugin",
    tags: ["PHP", "WordPress", "Bangla"],
  },
  {
    name: "PHAR Maker",
    summary:
      "A small CLI tool that packages a directory of PHP source into a distributable PHAR archive, with CLI and web entry points.",
    link: "https://github.com/masnun/pharmaker",
    tags: ["PHP", "CLI", "Tooling"],
  },
  {
    name: "Super Poster",
    summary:
      "A browser-based tool to post to multiple Facebook groups at once, built on the Facebook JavaScript SDK.",
    link: "https://github.com/masnun/super-poster",
    tags: ["JavaScript", "Facebook API"],
  },
  {
    name: "Facebook Profile Photo Generator",
    summary:
      "A Django app that overlays a custom badge onto a user's Facebook profile photo via Facebook OAuth.",
    link: "https://github.com/masnun/facebook-profile-photo-generator",
    tags: ["Python", "Django", "Facebook OAuth"],
  },
  {
    name: "Django ORM Standalone",
    summary:
      "A starter that lets you use Django's ORM on its own — outside a full Django project — for scripts and small tools.",
    link: "https://github.com/masnun/django-orm-standalone",
    tags: ["Python", "Django ORM"],
  },
  {
    name: "FTP Server Monitor",
    summary:
      "An Android app that monitors the status of an FTP server from your phone.",
    link: "https://github.com/masnun/ftp_server_monitor",
    tags: ["Android", "Java", "Gradle"],
  },
  {
    name: "ExTorrent",
    summary: "A torrent search/utility tool.",
    link: "https://github.com/masnun/extorrent",
    tags: ["OSS"],
  },
];

export const leadership: string[] = [
  'Active moderator of the largest PHP user group of Bangladesh, "phpXperts"',
  "Co-founded Python Bangladesh — the largest Python user group in the country",
  "Founded NodeSchool Khulna to help others learn JavaScript and Node.js",
  "Co-founder of Google Business Group Khulna, connecting people with business and technology",
  "Regular speaker at local PHP & Python conferences",
  "Writes blog posts and records screencasts in his mother language to help others learn",
];

export type Engagement = {
  title: string;
  period: string;
  rating?: number;
  // Tech/theme tags for the engagement.
  tags: string[];
};

// Public Upwork work history. Earnings are private; these are the engagements
// Upwork exposes publicly, ordered to show repeat hires and multi-year tenure.
export const freelance = {
  // Narrative summary synthesized from ~58 completed jobs, with the headline
  // numbers woven in casually. Rendered as paragraphs.
  summary: [
    "I've freelanced on Upwork (back when it was called oDesk) since 2009 — 58 completed jobs, 2.9K+ hours logged, and a 4.7★ rating across 57 client reviews. It's where a lot of my career actually happened, working directly with founders and teams around the world.",
    "Most of that work was backend. I built Python and Django REST Framework APIs powering mobile apps, an online sports-booking platform for a Portuguese startup, large-scale web crawlers, and a steady stream of email and web-automation systems. In my earlier years I shipped plenty of PHP, Laravel, CodeIgniter and WordPress work too — everything from custom plugins to full sites. More recently, clients increasingly bring me in as a polyglot code reviewer, auditing PHP, Python, Node.js, Go and Java codebases for quality and best practices.",
    "What I'm proudest of is that clients keep coming back. One code-review engagement ran from 2014 all the way to 2017; the PEEMZ backend team rehired me across four separate contracts. The feedback has been consistent for over a decade — clear, well-documented, efficient code, delivered fast, with communication people can rely on. One client, after going through 30 developers in 12 years, said I was the one who 'withstood.'",
  ],
  engagements: [
    { title: "Code Reviewer — PHP, Python, Node.js, Go & Java", period: "Jan 2021 – Jul 2021", rating: 5, tags: ["Code Review", "Polyglot"] },
    { title: "Code Reviewer — Python / PHP", period: "Nov 2018 – Nov 2019", rating: 5, tags: ["Code Review"] },
    { title: "PEEMZ — Backend, Python / Django", period: "Mar 2018 – Jul 2019", rating: 5, tags: ["Python", "Django"] },
    { title: "Code Reviewer — Python / PHP", period: "May 2018 – Nov 2018", rating: 5, tags: ["Code Review"] },
    { title: "Code Reviewer — Python / PHP", period: "Feb 2017 – Mar 2018", rating: 5, tags: ["Code Review"] },
    { title: "PEEMZ — Backend Development, Python / Django", period: "Nov 2017 – Mar 2018", rating: 5, tags: ["Python", "Django"] },
    { title: "PEEMZ — Python / Django REST API & Website", period: "May 2017 – Nov 2017", rating: 5, tags: ["Python", "DRF"] },
    { title: "Python / Django / DRF — Mobile Backend", period: "Jul 2016 – May 2017", rating: 5, tags: ["Python", "DRF", "API"] },
    { title: "REST API Development — Python / Django / DRF", period: "Jan 2017 – Mar 2017", rating: 5, tags: ["Python", "DRF", "API"] },
    { title: "Code Reviewer — Python", period: "Sep 2014 – Feb 2017", rating: 5, tags: ["Code Review", "Long-term"] },
  ] as Engagement[],
};

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  rating?: number; // out of 5
  date?: string;
  source?: string; // e.g. "Upwork"
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Provided great services and will use again in the future.",
    author: "Verified Upwork Client",
    company: "Code Reviewer · PHP, Python, Node.js, Go & Java",
    rating: 5,
    date: "Jul 2021",
    source: "Upwork",
  },
  {
    quote:
      "AMAZING JOB FROM MASNUN! His work still continues to impress our company! Professional and very reactive!",
    author: "Verified Upwork Client",
    company: "Backend Development · Python / Django",
    rating: 5,
    date: "Mar 2018",
    source: "Upwork",
  },
  {
    quote:
      "Masnun is a fantastic support for anyone! He's a great person, very professional and respectful. I highly recommend him.",
    author: "Verified Upwork Client",
    company: "REST API · Python / Django / DRF",
    rating: 5,
    date: "Mar 2017",
    source: "Upwork",
  },
  {
    quote:
      "I've worked with Abu in a big project for the past 10 months and I couldn't be happier with my hiring. This man is a great programmer and an excellent communicator. He is very intelligent and has a pragmatic approach to problem solving. He is ALWAYS available. I would definitely recommend him for anyone looking for an experienced web developer with great communication skills.",
    author: "Andre Duarte",
    company: "AirCourts",
    rating: 5,
    date: "Jun 2014",
    source: "Upwork",
  },
  {
    quote:
      "I could write pages and pages praising Masnun for his work and the help he provided to us! I am simply going to say to everyone, he is the best developer/consultant we have worked with on oDesk. Great guy, and we will be using him again in the future! RentersCard loves Masnun!",
    author: "Ash Hoey",
    company: "RentersCard",
    date: "Apr 2014",
    source: "Upwork",
  },
  {
    quote:
      "Masnun was an exemplary contractor. He was communicative, clear, and took time to ensure that he understood the work properly. I work with Django / Python myself, and I was impressed with Masnun's code. He takes coding best practices seriously, and his code is clean and efficient.",
    author: "Patrick Brown",
    company: "Rouse Lawyers",
    rating: 5,
    date: "Oct 2012",
    source: "Upwork",
  },
];
