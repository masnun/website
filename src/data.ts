// Single source of truth for the whole site. Edit this file to update content —
// every section renders from here, so the page stays "dynamic" / data-driven.

import smsDeliveryPlatform from "./content/sms-delivery-platform.md?raw";
import jobAggregationMicroservice from "./content/job-aggregation-microservice.md?raw";
import centralDataPipelineService from "./content/central-data-pipeline-service.md?raw";

export const profile = {
  name: "Abu Ashraf Masnun",
  tagline: "PASSIONATE SOFTWARE CRAFTSMAN",
  // Rotating words for the animated hero headline.
  roles: [
    "Full Stack Developer",
    "Pythonista",
    "Gopher",
    "Backend Engineer",
    "OSS Enthusiast",
  ],
  location: "Khulna, Bangladesh",
  phone: "+8801711 960803",
  email: "masnun@gmail.com",
  website: "masnun.com",
  github: "github.com/masnun",
  cv: "Abu Ashraf Masnun - CV.pdf",
  summary:
    "I'm a full stack developer who genuinely enjoys building software. New tools excite me, but I've learned to reach for boring, proven technology when the goal is to ship something that lasts. I work the agile way and do my best work on a team — sharing what I know and learning from everyone around me. Open source is close to my heart; in my spare time you'll usually find me on developer forums, answering questions and helping others get unstuck.",
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
};

export const projects: Project[] = [
  {
    slug: "sms-delivery-platform",
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
    name: "Central Data Pipeline Service",
    summary:
      "Central Node.js data pipeline routing analytics events from 20+ apps and 60+ event types into Snowflake — built memory-flat, exactly-once, and extensible by config.",
    details:
      "I designed and built the central data pipeline that unifies analytics from an entire product suite into one warehouse. 10+ internal services and platforms send their events to a single API; the service validates, batches, deduplicates, transforms and lands them in Snowflake for business reporting across 60+ event types. I engineered it to never lose or duplicate an event, to stream large batches through with flat memory, and to onboard a new data source by config alone — the kind of reliable backbone every BI dashboard in the company sits downstream of.",
    markdown: centralDataPipelineService,
    tags: ["Node.js", "Koa", "BullMQ", "Redis", "MongoDB", "Snowflake"],
  },
  {
    slug: "realtime-chat-conferencing",
    name: "Realtime Chat & Conferencing",
    summary: "Realtime chat over WebSocket and experimental WebRTC video.",
    details:
      "Built a realtime chat system over WebSocket with presence and message fan-out, then went further with an experimental WebRTC video conferencing setup — handling signaling, peer negotiation and media streams between participants.",
    tags: ["WebSocket", "WebRTC", "Node.js"],
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

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've worked with Abu in a big project for the past 10 months and I couldn't be happier with my hiring. This man is a great programmer and an excellent communicator. He is very intelligent and has a pragmatic approach to problem solving. He is ALWAYS available. I would definitely recommend him for anyone looking for an experienced web developer with great communication skills.",
    author: "Andre Duarte",
    company: "AirCourts",
  },
  {
    quote:
      "I could write pages and pages praising Masnun for his work and the help he provided to us! I am simply going to say to everyone, he is the best developer/consultant we have worked with on Odesk. Great guy, and we will be using him again in the future! RentersCard loves Masnun!",
    author: "Ash Hoey",
    company: "RentersCard",
  },
  {
    quote:
      "Masnun was an exemplary contractor. He was communicative, clear, and took time to ensure that he understood the work properly. I work with Django / Python myself, and I was impressed with Masnun's code. He takes coding best practices seriously, and his code is clean and efficient.",
    author: "Patrick Brown",
    company: "Rouse Lawyers",
  },
];
