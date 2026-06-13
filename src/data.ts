// Single source of truth for the whole site. Edit this file to update content  - 
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
import ecommerceSaas from "./content/ecommerce-saas.md?raw";
import twoDealEbaySearch from "./content/2deal-ebay-search.md?raw";
import animeplex from "./content/animeplex.md?raw";
import deployninja from "./content/deployninja.md?raw";
import endlessVideo from "./content/endless-video.md?raw";
import kuestions from "./content/kuestions.md?raw";
import kunstreminder from "./content/kunstreminder.md?raw";
import rentPaymentSchedule from "./content/rent-payment-schedule.md?raw";
import twBoost from "./content/twboost.md?raw";

export const profile = {
  name: "Abu Ashraf Masnun",
  tagline: "Software Architecture · Distributed Systems · Go · Node.js · Python",
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
  whatsapp: "https://wa.me/8801711960803",
  email: "masnun@gmail.com",
  website: "masnun.com",
  github: "github.com/masnun",
  linkedin: "https://www.linkedin.com/in/masnun",
  stackoverflow: "https://stackoverflow.com/users/301107/masnun",
  upwork: "https://www.upwork.com/freelancers/abuashrafmasnun",
  cv: "Abu Ashraf Masnun - CV.pdf",
  summary:
    "Over 15 years of building and scaling distributed systems has taught me what makes software last - and exactly where it breaks. These days, I pair that hard-won judgment with modern AI tooling to ship faster without compromising on code quality. The AI handles the boilerplate and accelerates execution, but I make the architectural calls and keep the quality bar high. The craft is still human; I just have better leverage now.",
  // Longer narrative for the dedicated "About Me" page (#/about).
  // Rendered as paragraphs.
  about: [
    "I've been writing code since 2006. I started as a self-taught teenager in Khulna, Bangladesh, building entire mobile community sites in PHP just to see if I could - and because people actually used the things I made. That itch never went away. Two decades later, it's still the exact same loop: find something I don't understand, build the smallest real version of it, and keep going until it clicks.",
    "I'm a business graduate (BBA, Khulna University) who chose engineering anyway. I went professional with PHP in 2008 and started freelancing on oDesk (now Upwork) in 2009, working directly with founders and teams around the world. The PHP years were good to me - I shipped plenty of products using Laravel, Symfony, CodeIgniter, and WordPress. But somewhere along the way I fell hard for Python, and Django and DRF quickly became the tools I reached for first. Since then, I've never stopped collecting languages. Go and Node.js are daily drivers now, and I've got a soft spot for Clojure, Elixir, Kotlin, and Rust.",
    "Today, my work lives mostly on the backend, usually at the architecture and distributed-systems level. Over the last 15 years, I've built systems that have to stay up while serving millions of people a month, including email and SMS delivery platforms, real-time analytics pipelines, API gateways, and lead routers. The problems I enjoy most are the unglamorous-but-critical ones: managing concurrency and async execution (like Python's asyncio internals and Go's goroutines), building exactly-once data pipelines, and designing clean REST APIs. I really care about why a thing works, not just that it does.",
    "I have strong opinions held loosely. I tend to reach for boring, proven technology when the goal is to ship something that lasts - tools like Celery, Redis, Postgres, and MySQL. I prefer matching the tool to the job's real risks rather than chasing hype. I also deploy what I build. These days that mostly means AWS (ECS with Docker), though over the years I've run everything from Linux boxes with Nginx to serverless AWS Lambda functions. I've also spent a lot of time as a third-party code reviewer on Upwork, auditing PHP, Python, Node.js, Go, and Java codebases.",
    "Sharing what I know matters to me just as much as building. I co-founded Python Bangladesh (the country's largest Python user group), founded NodeSchool Khulna, and co-founded Google Business Group Khulna. I speak at local conferences and record screencasts in my mother tongue so more people can get started. If you want to see how I actually think, the hundreds of blog posts on masnun.com and masnun.rocks are the most honest record - less structured tutorial, and more about how things actually work under the hood.",
  ],
};

export type Milestone = {
  year: string;
  title: string;
  text: string;
};

// A visual career/journey timeline for the About page - milestones, not jobs.
export const journey: Milestone[] = [
  {
    year: "2006",
    title: "Wrote my first code",
    text: "Self-taught teenager in Khulna, building full mobile community and forum sites in PHP for fun - and people actually used them.",
  },
  {
    year: "2008",
    title: "Went professional",
    text: "Turned the hobby into a career with paid PHP development - Laravel, Symfony, CodeIgniter, WordPress.",
  },
  {
    year: "2009",
    title: "Started freelancing",
    text: "Joined oDesk (now Upwork) and began working directly with founders and teams worldwide - a thread that still runs through my career.",
  },
  {
    year: "2012",
    title: "Fell for Python",
    text: "Python, Django and DRF became my first reach. The backend-and-APIs chapter of my career really begins here.",
  },
  {
    year: "2014",
    title: "Built systems that lasted",
    text: "Shipped the Khulna University exam & result system that ran in production for nine years, and began multi-year code-review engagements.",
  },
  {
    year: "2015",
    title: "Into high-scale distributed systems",
    text: "Started building email & SMS platforms and data pipelines serving millions a month - Python and Celery, then Node.js and Go.",
  },
  {
    year: "2016",
    title: "Picked up Go & started writing deeply",
    text: "Added Go to the toolbox, launched masnun.rocks, and co-founded Python Bangladesh, the country's largest Python community.",
  },
  {
    year: "2017–2022",
    title: "Real-time at scale",
    text: "Drove a five-year, full-stack real-time analytics platform and a fleet of Go and Node.js microservices end to end.",
  },
  {
    year: "Now",
    title: "Technical architect & polyglot reviewer",
    text: "Designing distributed systems across Python, Go and Node.js - and auditing codebases across five languages for teams who want a second set of eyes.",
  },
];

export type BlogPost = {
  title: string;
  url: string;
  // One-line on why it's worth reading.
  blurb: string;
  tags: string[];
};

export type BlogCategory = {
  category: string;
  posts: BlogPost[];
};

// Hand-picked, in-depth technical writing from masnun.com and masnun.rocks  - 
// the posts that best show how I reason about systems, not the install guides.
export const blogPosts: BlogCategory[] = [
  {
    category: "Async & Concurrency",
    posts: [
      {
        title: "Async Python: The Different Forms of Concurrency",
        url: "http://masnun.rocks/2016/10/06/async-python-the-different-forms-of-concurrency/",
        blurb:
          "Threads vs. processes vs. asyncio, the GIL, and when each model actually wins. My favorite single piece.",
        tags: ["Python", "asyncio", "Concurrency"],
      },
      {
        title: "Exploring Asyncio - uvloop, sanic and motor",
        url: "http://masnun.rocks/2016/11/17/exploring-asyncio-uvloop-sanic-motor/",
        blurb:
          "Building a full async stack end to end - event loop, web framework and database driver - and what it buys you.",
        tags: ["Python", "asyncio", "Performance"],
      },
      {
        title: "Generators, Coroutines, Native Coroutines and async/await",
        url: "https://masnun.com/python-generators-coroutines-native-coroutines-and-async-await/",
        blurb:
          "How Python's concurrency model evolved from generators to native coroutines - and why each step happened.",
        tags: ["Python", "Coroutines"],
      },
      {
        title: "Python asyncio: Future, Task and the Event Loop",
        url: "https://masnun.com/python-asyncio-future-task-and-the-event-loop/",
        blurb:
          "A look under asyncio's hood at the primitives the event loop actually schedules.",
        tags: ["Python", "asyncio"],
      },
      {
        title: "A Quick Introduction to the concurrent.futures Module",
        url: "https://masnun.com/python-a-quick-introduction-to-the-concurrent-futures-module/",
        blurb:
          "Thread and process pools through one clean executor API, and where each fits.",
        tags: ["Python", "Concurrency"],
      },
    ],
  },
  {
    category: "Language Internals & Design",
    posts: [
      {
        title: "Interfaces in Python: Protocols and ABCs",
        url: "http://masnun.rocks/2017/04/15/interfaces-in-python-protocols-and-abcs/",
        blurb:
          "From informal duck typing to formal contracts with abstract base classes.",
        tags: ["Python", "Design"],
      },
      {
        title: "Understanding Decorators in Python",
        url: "https://masnun.com/understanding-decorators-in-python/",
        blurb:
          "Decorators built from first principles - closures, wrapping and why they read the way they do.",
        tags: ["Python"],
      },
      {
        title: "Composition Over Inheritance",
        url: "https://masnun.com/composition-over-inheritance/",
        blurb:
          "Why deep class hierarchies hurt, and how composition keeps designs flexible.",
        tags: ["Design", "OOP"],
      },
    ],
  },
  {
    category: "Go & Distributed Systems",
    posts: [
      {
        title: "Distributed Task Processing in Go",
        url: "http://masnun.rocks/2016/11/01/distributed-task-processing-in-golang/",
        blurb:
          "A Celery-style distributed task queue in Go using machinery - the patterns behind background work at scale.",
        tags: ["Go", "Distributed Systems"],
      },
      {
        title: "Golang: Building a Telegram Bot for Aggregating Content",
        url: "http://masnun.rocks/2016/11/05/golang-building-a-telegram-bot-for-aggregating-content/",
        blurb:
          "A real, concurrent Go service end to end - fetching, aggregating and serving content.",
        tags: ["Go", "Concurrency"],
      },
      {
        title: "Golang Interface",
        url: "https://masnun.com/golang-interface/",
        blurb:
          "How Go's implicit interfaces work and why they shape idiomatic Go design.",
        tags: ["Go"],
      },
    ],
  },
  {
    category: "Real-Time & API Design",
    posts: [
      {
        title: "Introduction to Django Channels",
        url: "http://masnun.rocks/2016/09/25/introduction-to-django-channels/",
        blurb:
          "Bringing WebSockets and async to Django - the ASGI shift, explained.",
        tags: ["Python", "Django", "WebSockets"],
      },
      {
        title: "Django Channels: Using Custom Channels",
        url: "http://masnun.rocks/2016/11/27/django-channels-using-custom-channels/",
        blurb:
          "Going beyond the defaults to model your own message channels.",
        tags: ["Python", "Django", "Real-time"],
      },
      {
        title: "Deploying Django Channels using Daphne",
        url: "http://masnun.rocks/2016/11/02/deploying-django-channels-using-daphne/",
        blurb:
          "Taking an ASGI app to production with the Daphne server.",
        tags: ["Python", "Django", "Deployment"],
      },
      {
        title: "Django Admin: Expensive COUNT(*) Queries",
        url: "http://masnun.rocks/2017/03/20/django-admin-expensive-count-all-queries/",
        blurb:
          "Diagnosing a real database performance problem hiding inside the Django admin.",
        tags: ["Django", "Databases", "Performance"],
      },
      {
        title: "Understanding JWT (JSON Web Tokens)",
        url: "https://masnun.com/understanding-jwt-json-web-tokens/",
        blurb:
          "What a JWT actually is, how it's signed, and where stateless auth fits.",
        tags: ["Security", "APIs", "Auth"],
      },
      {
        title: "REST APIs: Concepts and Applications",
        url: "https://masnun.com/rest-apis-concepts-applications/",
        blurb:
          "The principles behind REST before reaching for a framework.",
        tags: ["APIs", "REST"],
      },
    ],
  },
];

// Punchy, recruiter-facing numbers for the hero stats bar.
export const heroStats: { value: string; label: string }[] = [
  { value: "3.5M+", label: "Requests served / day" },
  { value: "400K+", label: "Messages delivered / day" },
  { value: "15+", label: "Years building software" },
  { value: "100+", label: "Prod services shipped" },
];

export type Skill = {
  name: string;
  // ≤5-sentence summary, grounded in the projects below.
  blurb: string;
  // Project tags this skill covers - used to filter projects on the
  // Projects page when the skill is clicked.
  tags: string[];
};

export const skills: Skill[] = [
  {
    name: "Go (Golang)",
    blurb:
      "My go-to for high-throughput, reliable distributed services. I've built SMS delivery engines, a caching API gateway, an SMTP email-verification service, an open-tracking pixel server and infrastructure watchdogs in Go. I lean on goroutines and channels for concurrency, Chi or Echo for routing, and sqlx over heavy ORMs. The simplicity, speed and predictable deploys are exactly what large systems need. It's my pick when something has to stay up under load.",
    tags: ["Go", "Chi", "Echo", "Goroutines", "Asynq"],
  },
  {
    name: "Node.js / TypeScript",
    blurb:
      "My main stack for service APIs and data pipelines in recent years. I favor Koa for its lightweight middleware and BullMQ/Bull over Redis for background work, and I've adopted TypeScript across the board for the safety types bring. I've built job-aggregation services, a central analytics pipeline into Snowflake, scraping fleets and a five-year real-time analytics backend with it. Clean, layered architectures are a recurring theme in this work. It scales well across a team.",
    tags: ["Node.js", "TypeScript", "Koa", "BullMQ", "Bull", "JavaScript"],
  },
  {
    name: "Python",
    blurb:
      "My first-choice language and the one I've shipped the most production code in. I've built large email and SMS platforms, REST APIs, self-scaling worker systems and a nine-year university results system with Django, DRF, Flask and Celery. I know its concurrency model deeply - asyncio, the event loop and the GIL - and have written widely-read posts on it. I co-founded Python Bangladesh, the country's largest Python community. It's where I'm fastest and most opinionated.",
    tags: ["Python", "Django", "DRF", "Flask", "Celery", "RQ"],
  },
  {
    name: "PHP",
    blurb:
      "Where my career began - I shipped professional PHP from 2008 onward. I built Q&A platforms, deployment tooling, e-commerce search, concert and rent-management apps, and community sites on Zend Framework, Yii and WordPress. I moderated phpXperts, the largest PHP group in Bangladesh, and spoke at its conferences. I respect what PHP taught me about the web, even though I reach for other tools today. It's still a language I can move fast in.",
    tags: ["PHP", "Zend Framework", "Yii Framework", "WordPress"],
  },
  {
    name: "Distributed Systems & Background Jobs",
    blurb:
      "The throughline of most of my work: reliable systems built from queues, workers and services. I've designed self-scaling worker fleets, exactly-once data pipelines, multi-provider delivery with failover, and a background-worker framework from scratch. I've used Celery, BullMQ, Asynq, Gearman and RQ to move heavy work off the request path safely. The hard parts - backpressure, idempotency, failure recovery, graceful shutdown - are the parts I enjoy most. This is where I do my best engineering.",
    tags: ["Asynq", "BullMQ", "Bull", "Celery", "Gearman", "RQ", "IronMQ", "Snowflake"],
  },
  {
    name: "Databases & Caching",
    blurb:
      "I've run MySQL, PostgreSQL, MongoDB, Redis and Elasticsearch in production across many systems. I use the right store per job - relational for transactional data, documents for flexible and analytics data, Redis for caching, queues and locks. I've done schema design, query profiling and cache-aside layers with sensible invalidation. Keeping data correct and fast under concurrent writes is a problem I've solved repeatedly. Redis in particular shows up almost everywhere I build.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Caching"],
  },
  {
    name: "Cloud, DevOps & IaC",
    blurb:
      "I deploy and operate what I build. I've provisioned full AWS environments as Terraform code - VPC, ECS, RDS, S3, EFS, secrets and scheduled jobs - and run services on Docker with CI, process managers and serverless Lambda. Years of Linux sysadmin back it up: nginx, uWSGI, Daphne and Supervisord. Observability matters to me, so Sentry, structured logging and Slack alerting come standard. The goal is always reproducible, boring, reliable infrastructure.",
    tags: ["AWS", "AWS Lambda", "Terraform", "Docker", "Supervisord"],
  },
  {
    name: "Web Scraping & Automation",
    blurb:
      "I've built large-scale scraping and automation systems end to end. That includes a distributed crawl engine that grew to 750+ employer scrapers with headless browsers, an automated anime aggregator, and a Twitter keyword-and-reply automation engine. I handle the messy parts - concurrency and locking, per-source quirks, bot-like patterns and rate limits. Turning unstructured web content into clean structured data is something I've done many times. It pairs naturally with my queue-and-worker background.",
    tags: ["Puppeteer", "PHP Simple HTML DOM", "Twitter APIs"],
  },
  {
    name: "Frontend (React)",
    blurb:
      "A backend engineer at heart who works comfortably across the stack. I've led React/Redux dashboards for real-time analytics and scraping tools, built management UIs, and shipped a full Next.js storefront app. My front-end history runs jQuery → AngularJS → React, so I've watched the patterns evolve. I'm not a designer, but I build clean, functional interfaces that make systems usable. Owning both halves means the API and the UI get designed together.",
    tags: ["React", "Redux", "Next.js", "jQuery", "Bootstrap"],
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
    period: "Jul 2015 - Now",
    description:
      "Building scalable systems used by millions. Built everything from large monoliths to high-scale microservices in Python, Node and Go. Main focus: the email & SMS delivery platform (Python + Celery). React on the front end, Chi for Go services, Koa + TypeScript for Node services. Also built internal services and reporting tools.",
  },
  {
    role: "Senior Python Developer (Backend)",
    company: "Durlov",
    period: "2016 - 2018",
    description:
      "Over two years building backends for mobile apps - architectures, scalable APIs with Django REST Framework, background jobs with Celery, and a realtime chat system over WebSocket with Django Channels. Also managed AWS EC2 instances.",
  },
  {
    role: "Lead Developer",
    company: "Transcendio",
    period: "Dec 2014 - Jul 2015",
    description:
      "Led the web dev team building web products for local clients. Work involved Django / Laravel with an AngularJS front end.",
  },
  {
    role: "Web Application Developer",
    company: "Vitzo.com Internet Services",
    period: "May 2012 - Jan 2015",
    description:
      "Mostly PHP / CodeIgniter with plenty of front-end jQuery. Built Google Apps automation, Firefox & Chrome extensions, in-house YouTube R&D, and a realtime chat app with Python and Tornado.",
  },
  {
    role: "Python/Django Developer",
    company: "AirCourts",
    period: "Sep 2013 - Dec 2014",
    description:
      "Built the web application for a Portugal-based startup reinventing how sports clubs work - an online booking platform. Django + Django REST Framework with AngularJS on the front end.",
  },
  {
    role: "Software Engineer / Product Co-ordinator",
    company: "okdo.it / Tasawr",
    period: "Nov 2012 - Dec 2013",
    description:
      "Contributed to a SaaS product on Zend Framework 1.x and AngularJS. Doubled as Product Co-ordinator - communicating with investors and founders, translating business requirements into JIRA issues.",
  },
  {
    role: "Software Engineer",
    company: "Leevio",
    period: "Sep 2009 - Nov 2012",
    description:
      "Built web applications with PHP and used Python extensively. Also built mobile apps with PhoneGap and Titanium.",
  },
  {
    role: "Web Developer",
    company: "BRE LLC",
    period: "Mar 2010 - Feb 2011",
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
    note: "Blast from the past - basic projects during my PHP days.",
  },
  {
    tech: "PostgreSQL",
    note: "Running in production with Django apps, but via the ORM - so not yet a headline skill.",
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
  // present it replaces `details` - supports headings, lists, tables, code.
  markdown?: string;
  tags: string[];
  link?: string;
  // Surfaced on the slim homepage.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-saas",
    featured: true,
    name: "Shopify Like E-Commerce SaaS",
    summary:
      "I built a full-stack Next.js e-commerce platform that works a lot like Shopify. It includes a custom sandboxed engine for safely running merchant themes, an automated build pipeline, and all the underlying AWS infrastructure managed via Terraform.",
    details:
      "A multi-tenant e-commerce SaaS where any merchant can launch their own online store - catalog, multi-location inventory, shipping, payments, blogging, custom domains and fully custom storefront themes. I worked across the whole system: a full-stack TypeScript/Next.js application with strict tenant isolation and role-based access; a theme engine that executes arbitrary merchant theme code inside a hardened server-side sandbox with cached compiled views; a decoupled CLI build-and-deploy pipeline that compiles themes, assigns stable IDs for idempotent deploys, and ships them across a network-isolation boundary with retried, fault-tolerant syncing; and the reproducible AWS infrastructure (Terraform: VPC, ECS, RDS, S3, EFS, secrets, scheduled jobs) that provisions and runs the platform.",
    markdown: ecommerceSaas,
    tags: ["TypeScript", "Next.js", "React", "PostgreSQL", "MongoDB", "Redis", "Terraform", "AWS"],
  },
  {
    slug: "sms-delivery-platform",
    featured: true,
    name: "SMS Delivery Platform",
    summary:
      "A high-throughput messaging platform written in Go. I designed it to reliably push out over 400k text messages daily across multiple brands, making sure we never miss a delivery or break SMS compliance rules.",
    details:
      "I designed and built this multi-tenant messaging platform in Go to power a staffing product's job-alert business. It dependably delivers 400k+ messages a day across multiple brands and six SMS providers, and owns the full revenue-generating lifecycle - from lead ingestion to compliant delivery, event tracking and reporting. I engineered it to never send a duplicate, never break SMS regulations, and keep running when a provider fails - the kind of reliability the business depends on every single day.",
    markdown: smsDeliveryPlatform,
    tags: ["Go", "Asynq", "Redis", "MongoDB", "Chi"],
  },
  {
    slug: "job-aggregation-microservice",
    name: "Job Aggregation Microservice",
    summary:
      "This Node.js platform pulls in listings from various job boards and ad networks to create a single, unified feed. It also handles the entire revenue attribution pipeline, streaming the data straight into Snowflake for reporting.",
    details:
      "I designed and built this Node.js platform to pull job listings from external job boards and ad networks, blend them into one unified feed, and serve them through a single API. On top of that it runs a complete revenue pipeline - tracking impressions, clicks and affiliate earnings, tying every dollar of partner revenue back to the search that produced it, and exporting the results to Snowflake for reporting in Metabase. It hides the quirks of every partner network behind one dependable feed and keeps the money accurate at scale.",
    markdown: jobAggregationMicroservice,
    tags: ["Node.js", "JavaScript", "Koa", "BullMQ", "MongoDB", "Snowflake"],
  },
  {
    slug: "central-data-pipeline-service",
    featured: true,
    name: "Central Data Pipeline Service",
    summary:
      "I built this central Node.js pipeline to route analytics from over 20 different apps into Snowflake. It processes 60+ event types with exactly-once delivery guarantees, all while maintaining a flat memory profile.",
    details:
      "I designed and built the central data pipeline that unifies analytics from an entire product suite into one warehouse. 10+ internal services and platforms send their events to a single API; the service validates, batches, deduplicates, transforms and lands them in Snowflake for business reporting across 60+ event types. I engineered it to never lose or duplicate an event, to stream large batches through with flat memory, and to onboard a new data source by config alone - the kind of reliable backbone every BI dashboard in the company sits downstream of.",
    markdown: centralDataPipelineService,
    tags: ["Node.js", "Koa", "BullMQ", "Redis", "MongoDB", "Snowflake"],
  },
  {
    slug: "marketing-analytics-platform",
    featured: true,
    name: "Marketing Analytics Data Platform",
    summary:
      "An end-to-end platform built with Go and Node.js that turns raw ad traffic into actionable ROI metrics. It catches click events at the edge, ties them to ad spend across different networks, and warehouses everything in Snowflake.",
    details:
      "I designed and built an end-to-end marketing analytics platform - a suite of services that turns raw advertising traffic into the numbers a business uses to decide where its ad money goes. It ingests click-level traffic and conversion events in real time, enriches each one with ad-spend data from the major search, social and push ad networks, and lands the unified result in Snowflake for ROI attribution and campaign analytics. Built across Go and Node.js with real-time, queue-driven and scheduled-batch architectures - each chosen to fit the failure modes of the source it talks to - it solves the hard problem that every ad network reports money differently, late and messily, while the business still needs one trustworthy answer to what a campaign earned versus what it cost.",
    markdown: marketingAnalyticsPlatform,
    tags: ["Go", "Node.js", "AWS Lambda", "Asynq", "BullMQ", "MongoDB", "Snowflake"],
  },
  {
    slug: "heimdall-api-gateway",
    name: "Heimdall - API Caching Gateway",
    summary:
      "To save on third-party API costs, I built this caching gateway for email and phone verification. I actually built it twice - first in Go, and then later in Node.js so the rest of the team could easily help maintain it.",
    details:
      "Heimdall is a caching gateway that sits in front of paid third-party verification APIs - email validation and phone-number lookups - and shields the business from their cost and latency. It checks its own cache before ever calling a provider, falls back gracefully across multiple email vendors so a single outage never breaks verification, and tracks its own cache-hit savings in concurrency-safe daily buckets. I built it in Go first (Chi, MySQL), then re-implemented it in Node.js (Koa, MongoDB) to scale the service across the development team - more developers knew Node and could own and extend it - with the Node.js version also growing the feature set to add phone lookups and multi-provider fallback.",
    markdown: heimdallApiGateway,
    tags: ["Go", "Node.js", "Koa", "Chi", "MongoDB", "Caching"],
  },
  {
    slug: "user-engagement-tracking",
    name: "User Engagement Tracking",
    summary:
      "A tracking engine powered by Python and Celery that handles opens, clicks, and unsubscribes for over 20 brands. It does the heavy lifting of recording events asynchronously while keeping the initial redirects under a few milliseconds.",
    details:
      "A user-engagement-tracking engine behind a suite of job-board marketing campaigns. Every marketing email and SMS carries trackable links and an invisible tracking pixel that point back to Tracer; it records who opened, clicked and unsubscribed, then fires those events as real-time webhooks to the originating platform. I built it for the unglamorous-but-critical job of being fast and always-on: a redirect or pixel hit resolves in milliseconds while the heavier work of recording the event and notifying downstream systems runs asynchronously on a background task queue. A single multi-tenant deployment serves 20+ brands, with short encoded redirect links, bot filtering to keep metrics honest, and encryption of personal data carried in URLs.",
    markdown: userEngagementTracking,
    tags: ["Python", "Flask", "Celery", "Redis", "MongoDB"],
  },
  {
    slug: "logo-service",
    name: "Logo Service",
    summary:
      "This was a team project serving company logos across our apps. I came in to restructure the architecture, adding a BullMQ worker layer for background tasks, concurrent keyword enrichment, and full Docker/CI support.",
    details:
      "Logo Service is a company-logo management and delivery service - the single source of truth for brand logos across a product suite, where any app asks for a company by name and gets back a CDN-hosted logo matched through a search engine. It's a team project; the original logo CRUD, search and asset pipeline were built by another engineer before I joined. My contribution turned it from a request/response API into a self-maintaining, observable, production-grade service: I introduced a background workers layer (BullMQ over Redis) to move slow work off the request path, built the scheduling system that enriches every company with related keywords from an external service - distributing that work across concurrent tasks so it runs in parallel - restructured the codebase into clear data/web/worker layers and refactored the Mongo connection pool, wired in Sentry and New Relic across all processes, and added the Docker, docker-compose, GitHub Actions and process-manager setup.",
    markdown: logoService,
    tags: ["Node.js", "BullMQ", "Redis", "MongoDB", "Sentry", "Docker"],
  },
  {
    slug: "text-messaging-platform",
    name: "Text Messaging Platform",
    summary:
      "I owned this multi-tenant SMS alert platform from top to bottom. After running it in Python for a few years, I completely rewrote the backend in Node.js, adding features like timezone-aware scheduling and a React dashboard.",
    details:
      "A multi-tenant SMS job-alert platform I designed, built and ran end to end - ingesting leads, scheduling personalized text alerts, delivering them across multiple carriers, handling opt-outs and replies, and reporting revenue back to the business across 20+ job-board brands. I built it twice: first in Python (Flask + Celery), which I operated for several years, then rewrote the backend in Node.js (Koa + a Redis-backed job queue) for a cleaner architecture, with a dedicated React/Material-UI management-and-analytics dashboard on top. It does timezone-aware sending, multi-provider delivery with fallback, two-way STOP/compliance handling, encrypted click tracking and per-brand revenue accounting. This is a separate, earlier system from the Go-based SMS Delivery Platform elsewhere in this portfolio - that one is a later high-throughput delivery engine; this is the lead-alert messaging platform and its rewrite.",
    markdown: textMessagingPlatform,
    tags: ["Python", "Node.js", "React", "Celery", "Koa", "MongoDB"],
  },
  {
    slug: "email-job-alert-platform",
    name: "Email Job-Alert Platform",
    summary:
      "Over four years, I single-handedly built and ran this Python/Celery platform to send daily job alerts. The coolest part is the self-scaling worker fleet that automatically spins up new workers based on how deep the queue gets.",
    details:
      "A distributed background-processing platform that powered daily personalized job-alert emails across a network of eight job-board brands. It ingests candidate leads from partner boards, validates and deduplicates them, sends each candidate a tailored daily email of matching jobs, tracks engagement (opens, clicks, unsubscribes) via provider webhooks, and auto-unsubscribes people as they go cold. The standout is operational: a scheduler measures each queue's depth every few minutes and dynamically spawns workers in proportion to the backlog, so the system absorbs surges without manual capacity tuning. A single multi-tenant Celery pipeline - ingest, validate, welcome, queue, send, track, clean up - is parameterized per brand across prioritized queues, with throttling, failover routing and full observability. I designed, built and operated it single-handedly over roughly four years; it's the email sibling of the Text Messaging Platform.",
    markdown: emailJobAlertPlatform,
    tags: ["Python", "Celery", "MongoDB", "Redis", "Flask"],
  },
  {
    slug: "job-scraping-service",
    name: "Large Scale Job Scraping Service",
    summary:
      "I was the original architect for this large-scale scraping service. I built the initial distributed crawl engine using Bull and headless browsers, and the team later successfully scaled it to handle over 750 employer sites.",
    details:
      "A large-scale job-scraping service that crawls the career sites of hundreds of employers, extracts open positions, and feeds them as structured data into a job-board business. It's a team project that I founded and architected. I built the core engine - a queue-based distributed crawl orchestration system (Bull over Redis) running many headless-browser scrapers concurrently with tuned concurrency and locking, the store/aggregate tasks, and a crawl-ID system that ties every job back to its crawl run for per-crawl and per-employer stats. I also built the cron scheduling, a CLI, the web API for crawl status and job counts, the initial React monitoring dashboard, and the first batch of scrapers that set the shared template. The team then scaled that foundation to 750+ employer scrapers over the following couple of years.",
    markdown: jobScrapingService,
    tags: ["Node.js", "Puppeteer", "Bull", "Redis", "MongoDB", "React"],
  },
  {
    slug: "lead-distribution-router",
    name: "Lead Distribution Router",
    summary:
      "This router takes incoming leads and instantly fans them out to multiple systems. It enriches the data on the fly and uses a validate-then-failover approach to guarantee we never drop a lead. I originally wrote it in Python and later ported it to TypeScript.",
    details:
      "A real-time lead distribution router - the hub that fans every incoming lead out to all the systems that need it the instant it arrives. A lead comes in through one API; the service verifies its email deliverability, resolves its timezone from its ZIP code, normalizes the searched job title against a canonical taxonomy, decides where it belongs based on source and target market, and dispatches it simultaneously to a primary consumer, the SMS platform and a search index. Every dispatch validates the downstream's response (status and well-formed body) and falls back to a durable backup queue on any failure, so a lead is never lost. I built it solo twice - first in Python (Flask + Celery), which I ran in production, then rewrote it in Node.js + TypeScript (Koa + Redis-backed Bull queues) for a cleaner, more responsive architecture - with graceful shutdown, queue hygiene and full observability. It's the connective tissue between several other systems in this portfolio.",
    markdown: leadDistributionRouter,
    tags: ["Python", "TypeScript", "Node.js", "Celery", "Koa", "MongoDB"],
  },
  {
    slug: "worker-monitoring-service",
    name: "Worker Monitoring & Background Jobs",
    summary:
      "As part of a team utility service, I built a health-monitoring subsystem that keeps an eye on all our background worker fleets. If a worker goes down or stops responding, it automatically fires off alerts to our Slack channels.",
    details:
      "A shared background-jobs and worker-monitoring service - a Celery-based utility that ran miscellaneous scheduled tasks for a job-board business and watched over the platform's other background-worker fleets. It's a team project; my main contribution was the health-monitoring and alerting subsystem. Several services ran their own Celery worker pools (the SMS platform, the engagement tracker, others) that could silently die unnoticed; I built monitoring that periodically inspects each fleet's live worker status, detects when workers are missing or unresponsive (iterating on the detection to cut false positives), and posts down-and-recovery alerts to Slack so the team learns of outages in real time. I also set up the Celery foundation, signal handlers and task routing, wired in Sentry and New Relic, and built then optimized the stats-handling pipeline. The miscellaneous business tasks were largely built by a collaborator.",
    markdown: workerMonitoringService,
    tags: ["Python", "Celery", "Redis", "Flower", "Slack", "MongoDB"],
  },
  {
    slug: "infrastructure-health-monitor",
    name: "Infrastructure Health Monitor",
    summary:
      "I built a lean Go watchdog that monitors our entire microservices platform. It does regular uptime and cache-memory checks, sends state-aware Slack alerts so we don't get alert fatigue, and can even automatically flush the cache to self-heal.",
    details:
      "A lean infrastructure health monitor and auto-remediation service in Go that watched over an entire microservices platform. On short intervals it health-checks every internal service and inspects the memory of the platform's Redis/ElastiCache clusters. When a service goes down it posts a Slack alert - exactly once per incident, with a recovery notice when it returns - by tracking each service's down/up state in Redis to avoid alert fatigue. For cache memory, it goes further than alerting: when usage crosses a threshold it automatically flushes the cache and re-checks, resolving the most common failure mode without paging anyone. Built solo with config-driven targets, coordinated goroutines and graceful shutdown - a small, sharp service that was the always-on safety net under everything else.",
    markdown: infrastructureHealthMonitor,
    tags: ["Go", "Chi", "Redis", "Slack", "Cron"],
  },
  {
    slug: "pixel-tracking-service",
    name: "Email Open-Tracking Pixel Service",
    summary:
      "A high-performance Go service that serves the invisible 1x1 tracking pixel in our marketing emails. To keep latency low, it returns the pixel instantly and processes the open events asynchronously using goroutines.",
    details:
      "A high-performance email open-tracking service in Go. It serves the invisible 1x1 pixel embedded in marketing emails: when a recipient opens a message their client loads the pixel, and this service records the open - IP, user agent, timestamp, campaign metadata, email domain - then routes it to a message queue for the engagement pipeline and a search store for analytics. The design is built for high volume at low latency: the HTTP handler returns the pixel from memory immediately (loaded once at startup, no per-request disk I/O) and does all real work asynchronously on a goroutine, pushing events onto a buffered channel that a single worker drains sequentially - absorbing bursts, bounding concurrency without locks, and isolating downstream failures from the pixel response. Multi-tenant across several email brands via hostname routing. Built solo; it's the open-tracking counterpart to the click/redirect engagement tracker.",
    markdown: pixelTrackingService,
    tags: ["Go", "Echo", "Goroutines", "Elasticsearch", "IronMQ"],
  },
  {
    slug: "blockchain-from-scratch",
    name: "Blockchain From Scratch (Go)",
    summary:
      "I built this minimal blockchain in Go from scratch as a one-day learning exercise to understand the fundamentals. It features cryptographically SHA-256-linked blocks and is exposed through a small REST API.",
    details:
      "A from-scratch minimal blockchain built in Go to understand how blockchains work under the hood. I implemented the core data structure myself: a chain of blocks where each holds its data, timestamp, the previous block's hash and its own SHA-256 hash - so every block is cryptographically chained to its predecessor (the tamper-evident property), bootstrapped from a genesis block, and exposed through a small Chi REST API to add and view blocks. It's an honest learning exercise - built in a day in early 2018, in-memory, no proof-of-work or consensus - kept deliberately tight so the cryptographic-linking idea stayed front and center. It reflects how I like to learn: build the smallest real version of a thing to see how it ticks.",
    markdown: blockchainFromScratch,
    tags: ["Go", "Chi", "SHA-256", "Learning"],
  },
  {
    slug: "custom-worker-framework",
    featured: true,
    name: "Custom Background-Worker Framework",
    summary:
      "I designed this Python background-worker framework from scratch to power our lead processing app. It treats workers as plugins and gives them dependency injection, centralized error handling, and graceful shutdowns for free.",
    details:
      "A background-worker framework I built from scratch in Python, and the production lead-processing app that ran on it, powering a job board's email and SMS pipelines for ~2 years (2015–2017). The framework treats a worker as a plugin: every job subclasses one Worker base class and implements run(), and gets everything else for free - dependency injection with lazily-initialized database/queue/Slack clients, centralized error handling (traceback + unique ID to central logging, color-coded Slack alerts, opt-in recovery hooks), two execution modes through one code path (CLI for cron, and a daemon listening on Redis pub/sub that dispatches into a per-task thread pool), and graceful shutdown that drains in-flight work. Adding a job was near-zero boilerplate; ~20 production workers were built this way. On top ran a full lead-qualification pipeline - onboarding, daily job-alert email & SMS, engagement webhooks, and a lead-lifecycle state machine. The distinctive part isn't using a framework but designing one: separating framework concerns from application concerns, with deliberate calls on DI, lifecycle, failure recovery and observability.",
    markdown: customWorkerFramework,
    tags: ["Python", "Flask", "Redis", "RQ", "MongoDB", "Framework Design"],
  },
  {
    slug: "smtp-email-verifier",
    name: "SMTP Email Verification Service",
    summary:
      "This Go microservice verifies if an email is actually deliverable by talking directly to the recipient's mail server. It runs syntax checks, MX lookups, and a live SMTP handshake, using a two-layer cache to keep things fast.",
    details:
      "A real email-verification microservice in Go that checks whether an address is actually deliverable by talking to the recipient's mail server directly. It validates syntax, resolves the domain's MX records, then opens an SMTP connection and walks the MAIL FROM / RCPT TO handshake to confirm the mailbox exists - catching non-existent addresses that pass every syntactic check. Results are cached two ways: an in-memory MX cache avoids repeated DNS lookups, and a persistent database cache makes any previously-seen address an instant hit. Built solo in early 2017 on a lightweight Go HTTP framework, it's the lower-level cousin of the later Heimdall gateway - where Heimdall caches third-party vendor results, this service does the network-level verification itself.",
    markdown: smtpEmailVerifier,
    tags: ["Go", "Echo", "SMTP", "DNS", "MySQL"],
  },
  {
    slug: "campaign-routing-engine",
    name: "Campaign & Path Routing Engine",
    summary:
      "I built this routing engine to dynamically figure out which jobs to show users based on configurable filters. It processes these rules in parallel and handles individual failures gracefully without dropping the whole request.",
    details:
      "A campaign-and-path routing engine for a staffing business: given a search (keyword + location) it decides which jobs to surface by running them through reusable, configurable filtering rules. I founded the service and built its functional core. A campaign is a named set of filters (only / block / match) bound to a job source; processing it fetches jobs and keeps only those passing every filter. A path is a collection of campaigns applied to the same search and aggregated - and I designed paths to process their campaigns in parallel, gracefully tolerating individual failures. I built the campaign model and filter-operator engine, the path-processing orchestration, the API endpoints, the job-feed client, MongoDB persistence, and a cleanly layered service skeleton (transport/service/utils) with BullMQ workers and cron under Redis distributed locking for safe horizontal scaling. A second engineer later added request validation and docs. The point: turning bespoke routing logic into a configurable engine non-engineers can compose.",
    markdown: campaignRoutingEngine,
    tags: ["Node.js", "Koa", "BullMQ", "Redis", "MongoDB"],
  },
  {
    slug: "realtime-analytics-platform",
    featured: true,
    name: "Real-Time Campaign Analytics Platform",
    summary:
      "This was a massive, 5-year project where I built the backend and led the frontend. It's a real-time marketing analytics platform that ingests huge volumes of events and aggregates them into live charts and cohort reports in a React dashboard.",
    details:
      "A full-stack, real-time marketing analytics platform - the live dashboard the business watched to see email and SMS campaign performance minute by minute. Events stream in from every channel (sends, opens, clicks, SMS activity, unsubscribes), get aggregated server-side into time-bucketed multi-dimensional stats, and surface in a rich React dashboard with charts, breakdowns, cohort analysis and year-over-year comparison. The core engineering is a concurrent, fault-tolerant ingestion pipeline that drains a high-volume external queue plus Redis in parallel batches - capped for graceful backpressure - de-normalizes each event into several aggregation trees, and merges them incrementally into the day's stats document so concurrent updates never clobber. A Redis cache keeps dashboards snappy; scheduled jobs handle heavier daily rollups. One of my largest, longest-running projects (2017–2022): I built the TypeScript/Koa backend almost entirely and led the React/Redux frontend.",
    markdown: realtimeAnalyticsPlatform,
    tags: ["TypeScript", "Koa", "React", "Redux", "MongoDB", "Redis"],
  },
  {
    slug: "webhook-config-hub",
    name: "Multi-Tenant Webhook & Config Hub",
    summary:
      "I built this Go service to act as the integration hub for a 9-brand network. It serves out configuration data and ingests a massive flood of webhooks from our email and SMS providers, classifying bounces and unsubscribes on the fly.",
    details:
      "A multi-tenant webhook hub and configuration service in Go that sat at the edge of a nine-brand job-board network and did two jobs at once: serving each app its configuration (templates, subject pools, ad configs) and receiving the flood of delivery and engagement webhooks from email and SMS providers - classifying each event (hard/soft bounce, spam complaint, unsubscribe, plus SMS stop-word/more/help detection), enforcing a global blacklist, and routing events to the right downstream queues. Per-app config is served cache-aside from Redis via a custom cache layer that tracks its own keys for admin inspection and bulk invalidation; nine brand-specific route groups mount under one service; and stat events stream to the analytics platform through a CPU-sized goroutine pool so webhooks stay fast. I built it solo, end to end, over roughly four years (2017–2021) - the integration layer a messaging business lives or dies on.",
    markdown: webhookConfigHub,
    tags: ["Go", "Chi", "Redis", "MongoDB", "Webhooks"],
  },
  {
    slug: "university-ems",
    featured: true,
    name: "University Exam & Result Management System",
    summary:
      "I built this exam and result management system for my university program and kept it running in production for 9 years. It handles everything from course registration to GPA computation using a custom academic rules engine.",
    details:
      "A university examination and result management system I designed, built and maintained single-handedly for the Business Administration Discipline at Khulna University, kept in production from 2014 to 2023. It runs the full academic cycle: course registration (add/drop, credit limits, retakes, registration locks), component-based faculty mark entry, a multi-role tabulation workflow (instructor → scrutiny → tabulation) with result locks and audit logs, GPA computation on a 4.0 scale, print-ready mark sheets, and a faculty examination-payment tracker. The interesting part is the academic rules engine: BBA/MBA/EMBA/Executive MBA and their OBE variants each use different mark components (seven configurations), BBA retakes apply a points downgrade, and rules vary by cohort year - all encoded as concrete logic that drives real transcripts. Its nine-year production run for thousands of students is the achievement: sustained solo ownership of a complex, correctness-critical domain system.",
    markdown: universityEms,
    tags: ["Python", "Django", "MySQL", "Education"],
  },
  {
    slug: "social-shopping-api",
    name: "Social Shopping App - REST API",
    summary:
      "This was a quick, 6-week MVP I built solo using Django REST Framework. It's a backend for a social fashion-shopping app, complete with social gifting, group wish lists, orders, and multi-mode token authentication.",
    details:
      "A REST API backend for a social fashion-shopping mobile app: boutiques and products to discover, social gifting between friends, group 'birthday list' wish lists, follows, likes, messaging, and a commerce layer (orders, sales, reservations, exclusive offers). I built it solo over ~6 weeks in 2016 as a Django REST Framework server for a phone client - a broad consumer domain (two-dozen resources across catalog, social, gifting and commerce) exposed as a consistent CRUD API via DRF serializers, viewsets and routers, with stateless token authentication supporting three login modes through one API: username/password, phone-number, and social-network login. An honest early-stage MVP - a complete, working API across a genuinely wide feature surface, built quickly and cleanly to make the product concept real.",
    markdown: socialShoppingApi,
    tags: ["Python", "Django", "DRF", "MySQL"],
  },
  {
    slug: "mobile-community-forum",
    name: "Mobile Community Forum Platform",
    summary:
      "One of my earliest projects, rebuilt across five generations. It's a complete WAP-era mobile community platform built from scratch in PHP, featuring forums, private messaging, presence, and homegrown anti-abuse tools.",
    details:
      "A complete mobile community and forum platform built from scratch in PHP - one of my earliest real projects, rebuilt and refined across multiple generations (this is v5). A self-hosted social site for mobile/WAP-era phones where people signed up, posted in forums (boards, topics, posts, moderation), messaged each other through a full private-messaging inbox, kept public and extended profiles, saw who was online, and searched across posts, topics, users and messages - with an owner control panel to run the community and homegrown anti-abuse (text CAPTCHA, banned user-agent handling, a 'shielded login' gate). I wrote every page, the database, and the moderation tools myself. I include it because it's where I come from: a young, self-taught developer building an entire multi-user web application end to end because he wanted to - and people actually used it.",
    markdown: mobileCommunityForum,
    tags: ["PHP", "MySQL", "Early Work"],
    link: "https://github.com/masnun/J21v5",
  },
  {
    slug: "2deal-ebay-search",
    name: "2Deal - eBay Product Search",
    summary:
      "A German shopping site built to help people quickly search and buy eBay products. I was brought in as the sole developer to port the existing application over to the Zend Framework.",
    details:
      "2Deal.de is a German shopping site that lets people quickly search products on eBay and pick one to purchase, wrapping the listings with extra product information and relevant related products so customers can browse with less friction. I joined to port the existing application onto the Zend Framework - and was the sole developer, handling every task the migration required: the MVC restructure, MySQL data access, the eBay-backed search and product pages, and the jQuery front-end behavior.",
    markdown: twoDealEbaySearch,
    tags: ["PHP", "Zend Framework", "MySQL", "jQuery"],
  },
  {
    slug: "animeplex",
    name: "Animeplex - Automated Anime Aggregator",
    summary:
      "An automated WordPress site that gathers and displays the latest anime videos. I built the entire scraping layer that automatically pulls videos from predefined sources and pushes them to the site.",
    details:
      "Animeplex is an automated website that gathers and displays the latest anime videos with no manual curation. My job was the scraping and presentation layer: using PHP with PHP Simple HTML DOM (and XML feeds where available), I parsed a set of predefined anime sources, extracted the videos and their metadata, pushed them into the WordPress site, and presented them cleanly on the front end with JavaScript and jQuery - a hands-off pipeline that keeps the site fresh with the newest anime automatically.",
    markdown: animeplex,
    tags: ["PHP", "WordPress", "MySQL", "PHP Simple HTML DOM", "jQuery"],
  },
  {
    slug: "deployninja",
    name: "Deployninja - Painless Repo Deployment",
    summary:
      "A tool designed to make deploying SVN and Git repositories painless. I worked on this as a backend engineer, building the core algorithms that fetch the repos and upload them to the target servers.",
    details:
      "Deployninja (built at Leevio) lets you deploy your SVN and Git repositories to your web server in a painless fashion. I worked on it as a backend engineer and built all the algorithms that fetch the repositories and upload them to the servers - the core of the product. The fetch-and-deploy engine talks to SVN (php-svn) and Git (GitPython) repos and transfers code to the target servers, running asynchronously: jobs are dispatched to Gearman and processed by background workers supervised by Supervisord, with PHP/Zend Framework on the application side and Python handling parts of the repository and deployment work.",
    markdown: deployninja,
    tags: ["PHP", "Zend Framework", "Python", "Gearman", "Supervisord", "MySQL"],
  },
  {
    slug: "endless-video",
    name: "Endless Video - Refactor & Optimization",
    summary:
      "I was brought onto this existing video application to make it better and faster. I spent my time refactoring the codebase, fixing bugs, adding features, and boosting performance on the live product.",
    details:
      "Endless Video was an existing video application I came onto to make better and faster. I refactored and optimized the codebase, fixed existing bugs, added new features, and boosted the application's performance - maintenance-and-improvement engineering on a live product built in PHP on the Yii Framework with a MySQL backend and a Flash-based video layer with JavaScript on the front end.",
    markdown: endlessVideo,
    tags: ["PHP", "Yii Framework", "MySQL", "Flash", "JavaScript"],
  },
  {
    slug: "kuestions",
    name: "Kuestions - Q&A Platform",
    summary:
      "A StackOverflow-like Q&A platform where I built the login system and social integrations. I also worked heavily on the core answering system, database architecture, and smoothed out slow queries.",
    details:
      "Kuestions is a StackOverflow-like question-and-answer platform. My main responsibility was the user login system and social-network integration, after which I worked on the question display and answering system - the heart of the product. I also contributed to the database architecture and did some system administration and database profiling to find and smooth out slow queries. Built in PHP on the Zend Framework with a MySQL backend and a jQuery front end.",
    markdown: kuestions,
    tags: ["PHP", "Zend Framework", "MySQL", "jQuery"],
  },
  {
    slug: "kunstreminder",
    name: "Kunstreminder - Concert Listings & Alerts",
    summary:
      "A concert-listing app that lets people follow their favorite musicians and get notified about upcoming events. I built the listing features, the follow relationships, and the notification flow.",
    details:
      "Kunstreminder is a concert-listing application. People follow their favorite musicians and music, and the app notifies them about events where those artists or that music will be available. I worked on building the listings, the follow relationships between users and artists/music, and the notification flow that ties a user's follows to relevant upcoming events. Built in PHP on the Zend Framework with a MySQL backend and a jQuery front end.",
    markdown: kunstreminder,
    tags: ["PHP", "Zend Framework", "MySQL", "jQuery"],
  },
  {
    slug: "rent-payment-schedule",
    name: "Rent Payment Schedule",
    summary:
      "A web app designed to let people calculate and print their rent payment schedules, and pay their rent online. I built the schedule calculator, the payment flow, and both the user and admin panels.",
    details:
      "Rent Payment Schedule is a web app that lets people calculate and print their rent payment schedules, and even pay their rent online. It includes both a user control panel and an admin control panel for better management. I worked on building the schedule calculation and printable output, the online payment flow, and the two management surfaces. Built in PHP on the Zend Framework with a MySQL backend.",
    markdown: rentPaymentSchedule,
    tags: ["PHP", "Zend Framework", "MySQL"],
  },
  {
    slug: "twboost",
    name: "TwBoost - Twitter Automation Engine",
    summary:
      "A Twitter automation engine that searches for specific keywords and posts automated replies at random intervals so it feels organic. I built the search loop and scheduling logic using the Twitter APIs.",
    details:
      "TwBoost is a Twitter automation engine. A user defines a set of keywords and an automated reply message; the engine periodically searches Twitter for those keywords and posts the replies at random intervals so the automation feels organic. Built on the Twitter APIs, I implemented the keyword-search loop, the periodic scheduling, and the randomized-interval reply logic. Built in PHP with a MySQL backend and a jQuery + Twitter Bootstrap front end.",
    markdown: twBoost,
    tags: ["PHP", "Twitter APIs", "MySQL", "jQuery", "Bootstrap"],
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

// Small open-source projects / libraries - link straight to GitHub, no detail page.
export const ossProjects: OssProject[] = [
  {
    name: "PHPTube",
    summary:
      "A PHP library that extracts direct YouTube video URIs - in multiple formats - straight from a watch URL.",
    link: "https://github.com/masnun/phptube",
    tags: ["PHP", "Library", "Composer"],
  },
  {
    name: "Avro Phonetic WP Plugin",
    summary:
      "A WordPress plugin that brings Avro Phonetic Bangla typing to any input - type Bengali phonetically, right in the browser.",
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
      "A starter that lets you use Django's ORM on its own - outside a full Django project - for scripts and small tools.",
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
];

export const leadership: string[] = [
  'Was an active moderator of the largest PHP user group of Bangladesh, "phpXperts"',
  "Co-founded Python Bangladesh - the largest Python user group in the country",
  "Founded NodeSchool Khulna to help others learn JavaScript and Node.js",
  "Co-founded Google Business Group Khulna, connecting people with business and technology",
  "Was a regular speaker at local PHP & Python conferences",
  "Wrote blog posts and recorded screencasts in my mother language to help others learn",
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
    "I freelanced on Upwork (back when it was called oDesk) from 2009 through 2021 - 58 completed jobs, 2.9K+ hours logged, and a 4.7★ rating across 57 client reviews. It's where a lot of my career actually happened, working directly with founders and teams around the world.",
    "Most of that work was backend. I built Python and Django REST Framework APIs powering mobile apps, an online sports-booking platform for a Portuguese startup, large-scale web crawlers, and a steady stream of email and web-automation systems. In my earlier years I shipped plenty of PHP, Laravel, CodeIgniter and WordPress work too - everything from custom plugins to full sites. More recently, clients increasingly bring me in as a polyglot code reviewer, auditing PHP, Python, Node.js, Go and Java codebases for quality and best practices.",
    "What I'm proudest of is that clients keep coming back. One code-review engagement ran from 2014 all the way to 2017; the PEEMZ backend team rehired me across four separate contracts. The feedback has been consistent for over a decade - clear, well-documented, efficient code, delivered fast, with communication people can rely on. One client, after going through 30 developers in 12 years, said I was the one who 'withstood.'",
    "I haven't taken on freelance work in a few years now - a full-time role has had my focus. But I'm still open to the right proposal. If you've got an interesting problem, feel free to reach out.",
  ],
  engagements: [
    { title: "Code Reviewer - PHP, Python, Node.js, Go & Java", period: "Jan 2021 – Jul 2021", rating: 5, tags: ["Code Review", "Polyglot"] },
    { title: "Code Reviewer - Python / PHP", period: "Nov 2018 – Nov 2019", rating: 5, tags: ["Code Review"] },
    { title: "PEEMZ - Backend, Python / Django", period: "Mar 2018 – Jul 2019", rating: 5, tags: ["Python", "Django"] },
    { title: "Code Reviewer - Python / PHP", period: "May 2018 – Nov 2018", rating: 5, tags: ["Code Review"] },
    { title: "Code Reviewer - Python / PHP", period: "Feb 2017 – Mar 2018", rating: 5, tags: ["Code Review"] },
    { title: "PEEMZ - Backend Development, Python / Django", period: "Nov 2017 – Mar 2018", rating: 5, tags: ["Python", "Django"] },
    { title: "PEEMZ - Python / Django REST API & Website", period: "May 2017 – Nov 2017", rating: 5, tags: ["Python", "DRF"] },
    { title: "Python / Django / DRF - Mobile Backend", period: "Jul 2016 – May 2017", rating: 5, tags: ["Python", "DRF", "API"] },
    { title: "REST API Development - Python / Django / DRF", period: "Jan 2017 – Mar 2017", rating: 5, tags: ["Python", "DRF", "API"] },
    { title: "Code Reviewer - Python", period: "Sep 2014 – Feb 2017", rating: 5, tags: ["Code Review", "Long-term"] },
  ] as Engagement[],
};

// Combined narrative of my work experience - full-time employment and
// freelance - shown above the Career Timeline on the Experience page.
export const workSummary: string[] = [
  "15+ years building backend and distributed systems for the web, across two tracks that overlapped for years: full-time engineering roles and a long freelance career.",
  "For most of the last decade I've been a senior full-stack engineer at Local Staffing LLC, building systems that serve millions a month - a high-throughput email & SMS platform plus the data pipelines, API gateways and tools around it, across Python, Go and Node.js. Earlier I built mobile-app backends at Durlov (DRF, Celery, Django Channels), led a web team at Transcendio, and shipped product at AirCourts, okdo.it and Leevio - building for the web since 2009.",
  "Alongside the day jobs I freelanced on Upwork (formerly oDesk) from 2009 to 2021 - 58 jobs, 2.9K+ hours, 4.7★ across 57 reviews - mostly Python/DRF backends, crawlers and automation, and later polyglot code review across PHP, Python, Node.js, Go and Java. Clients kept coming back. I'm not actively freelancing now, but I'm open to the right proposal.",
];

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
  {
    quote:
      "I worked with Abu Ashraf Masnun in various projects and he's one of the good programmers I really like working with. He has passion for programming and open-source. When I was working with him there isn't a problem he has not solved, and that's what I really like about him. He's creative and smart in solving problems. I highly recommend him :)",
    author: "Penn Bulaqueña",
    company: "Client",
  },
];

export type Faq = { q: string; a: string };

// Plain-language Q&A grounded in the rest of this file. Rendered visibly on the
// home page and mirrored as FAQPage JSON-LD (Google requires the answers to be
// on the page). Also a clean signal for LLMs answering questions about me.
export const faqs: Faq[] = [
  {
    q: "Who is Abu Ashraf Masnun?",
    a: "Abu Ashraf Masnun is a software architect and full-stack engineer with 15+ years of experience building and scaling distributed systems. He works mostly on the backend - email and SMS delivery platforms, real-time analytics pipelines, API gateways and lead routers that serve millions of people a month.",
  },
  {
    q: "What technologies and languages does he work with?",
    a: "His daily drivers are Go, Node.js/TypeScript and Python. He has deep experience with distributed systems and background jobs (Celery, BullMQ, Asynq), databases and caching (PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch), and cloud/DevOps (AWS, Terraform, Docker). He also works across the stack with React.",
  },
  {
    q: "Is Abu Ashraf Masnun available for freelance or contract work?",
    a: "He freelanced on Upwork from 2009 to 2021 (58 jobs, 2.9K+ hours, 4.7-star rating across 57 reviews) and is not actively freelancing now, as a full-time role has his focus. He remains open to the right proposal - for an interesting problem, reach out by email, WhatsApp or Upwork.",
  },
  {
    q: "Where is Abu Ashraf Masnun based?",
    a: "He is based in Khulna, Bangladesh, and has worked directly with founders and teams around the world throughout his career.",
  },
  {
    q: "What kinds of systems has he built?",
    a: "High-throughput messaging platforms, exactly-once data pipelines into Snowflake, caching API gateways, a self-scaling worker fleet, a real-time campaign analytics platform, and a custom background-worker framework - alongside years of polyglot code review across PHP, Python, Node.js, Go and Java.",
  },
];
