## Overview

A **REST API backend for a social fashion-shopping app** - boutiques and products to discover, social gifting between friends, group "birthday list" wish lists, follows, likes, and orders. I built it as the server side for a mobile app concept: a Django REST Framework API designed to be consumed by a phone client, covering the whole domain from catalog to checkout to social features.

It was a focused MVP - built solo over about six weeks in 2016 to stand up a working backend for the product idea quickly.

## What It Does

- **Catalog & discovery.** Boutiques (with hours, location, discounts, tags) and products (sizes, pictures, ratings, tags), plus view-tracking and search history to power discovery.
- **Social layer.** Users follow boutiques, like products, message each other, and curate private product lists.
- **Social gifting.** Send gifts to friends, and run group "birthday lists" - shared wish lists multiple people contribute toward.
- **Commerce.** Orders, sales, reservations, product requests, and time-limited exclusive offers.
- **Flexible authentication.** A token-based auth service supporting **three login modes through one API** - standard username/password, phone-number, and social-network login - issuing an API token the mobile client carries on every request.

## Engineering Notes

- **Mobile-first API design.** Stateless token authentication and a clean resource-oriented REST surface - the right shape for a phone app talking to a server.
- **Broad domain modeled fast.** Two-dozen related resources (catalog, social, gifting, commerce) exposed as a consistent CRUD API via DRF's serializers, viewsets, and routers - getting a wide feature surface usable quickly, which is exactly what an MVP needs.
- **Pluggable login.** The multi-mode auth (password / phone / social behind one endpoint) anticipated the reality that a consumer app needs several sign-in paths.

## Honest Scope

This was an early-stage product backend, not a hardened production system - a six-week MVP to make the concept real and demoable. I'm listing it as that: a complete, working REST API across a genuinely broad consumer domain (commerce + social + gifting), built quickly and cleanly with Django REST Framework.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Framework** | Django + Django REST Framework |
| **API** | Token auth (password / phone / social), ModelViewSets + routers |
| **Database** | MySQL (production), SQLite (development) |
| **Media** | Image/file uploads for products, boutiques, gifts |
