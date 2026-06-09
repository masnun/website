## Overview

A **multi-tenant, Shopify-like e-commerce SaaS** - a single platform where any merchant can spin up their own online store, manage their catalog and orders, point a custom domain at it, and pick a fully custom storefront theme. I worked across the whole system: the full-stack web application, a sandboxed theme engine with its own build-and-deploy pipeline, and the cloud infrastructure that runs it all.

It's the kind of product where one codebase has to safely serve many independent shops at once - isolated data, isolated domains, and isolated, untrusted theme code - while still feeling like a fast, modern app to each merchant and shopper.

## What It Does

- **Runs many stores from one platform.** Each shop is fully tenant-isolated, resolved per request from either a platform subdomain or the merchant's own custom domain (with automated DNS and SSL).
- **Manages the full commerce domain.** Products with categories, variants, SKUs and tiered pricing; multi-location inventory; weight- and zone-based shipping with cash-on-delivery and packing slips; configurable payment capture; plus blogging, content pages and navigation menus.
- **Gives each merchant a custom storefront.** Shops choose from interchangeable themes; the storefront (home, product, blog, page views) renders from theme code that the platform executes safely on the server.
- **Two-tier administration.** A per-shop dashboard for merchants and staff, and a platform-admin surface for managing every shop, user, media asset and audit log across the tenancy.
- **Integrates with the channels merchants care about.** Social commerce catalog sync and webhook handling so products stay in step with external marketplaces.

## Engineering Highlights

### Multi-tenant, full-stack application

The web app is a single full-stack TypeScript codebase: server-rendered storefronts and dashboards, server actions and API routes for mutations, webhooks and scheduled jobs, all backed by a relational database for transactional commerce data, a document store for flexible/audit data, and an in-memory cache. Tenancy is enforced at the data-access boundary - every shop request resolves to a tenant context, and a strict, lint-enforced layering (integrations → services → actions → features → UI) keeps that isolation from leaking. Auth supports OAuth, email OTP and phone sign-in with role-based access for owners, staff and platform admins.

### Sandboxed theme rendering

The hardest, most interesting problem: letting merchants run **arbitrary storefront theme code** without letting it compromise the platform or other tenants. Themes are authored as components, then **executed inside a hardened server-side sandbox** (an isolated VM) with a tightly controlled API surface and the rendering runtime injected from outside rather than bundled in. Compiled views are cached (in-memory LRU plus a shared cache) and invalidated on theme changes, so the security boundary doesn't cost render latency.

### Theme build & deploy pipeline

Theme authoring is decoupled from the live app by a dedicated build tool. It validates that a theme provides every required view, compiles each one independently to a runtime-ready bundle, and assigns a **stable identifier that persists across rebuilds** so deployments stay idempotent - the same theme always lands on the same paths, never breaking a merchant's selection. Deployment is a deliberate two-step dance around network isolation: assets and bundles are pushed to object storage from outside the private network, then the in-network app is signaled to pull them onto its shared file system and bust its cache. The trigger uses **exponential-backoff retries** so a brief deploy-window outage never strands a half-finished upload, and teardown is ordered to never leave orphaned assets.

### Cloud infrastructure as code

The entire production environment is defined as code and provisioned reproducibly: a VPC across multiple availability zones, a load balancer fronting a container service, a managed relational database, shared network storage for theme content, versioned object storage with public/private access policies, a container registry, secrets management for credentials and tokens, scheduled jobs via cloud cron hitting a secured endpoint, and centralized logging. Remote state with locking keeps changes safe. A notable bit of real-world tuning: the container runtime's heap is explicitly capped to respect cgroup memory limits, with a deployment strategy chosen to fit tight memory budgets without out-of-memory failures.

## Why It Matters

This is a product with genuinely hard, distinct problems stacked on top of each other - multi-tenant isolation, safe execution of untrusted code, a decoupled build/deploy pipeline that survives network isolation and transient failures, and reproducible cloud infrastructure - and I worked across all of them. It's full-stack and full-lifecycle: from the merchant clicking "publish theme" in a dashboard down to the Terraform that provisions the database it writes to.

## Tech Stack

| Layer | Technology |
|---|---|
| **Web app** | TypeScript, Next.js (App Router), React, Tailwind |
| **Backend** | Server actions & API routes, layered service architecture |
| **Auth** | OAuth, email OTP, phone - role-based access |
| **Databases** | PostgreSQL (transactional), MongoDB (flexible/audit), Redis (cache) |
| **Theme engine** | Server-side sandbox (isolated VM), esbuild compilation, LRU + shared cache |
| **Theme pipeline** | CLI build tool, stable theme IDs, object-storage staging, retried sync |
| **Infrastructure** | Terraform, AWS (VPC, ECS/EC2, RDS, S3, EFS, ECR), Secrets Manager |
| **Ops** | Cloud-cron scheduled jobs, centralized logging, error tracking |
