## Overview

A **real email-verification microservice** written in Go that checks whether an email address is actually deliverable — not by guessing from a list of known providers, but by talking to the recipient's mail server directly. Given an address, it confirms the format is valid, finds the domain's mail servers, and performs an SMTP handshake to ask the server whether the mailbox exists — caching the verdict so the same address is never re-checked.

I built it solo in early 2017. It's an early, lower-level cousin of the later [Heimdall verification gateway](#/project/heimdall-api-gateway): where Heimdall caches results from third-party verification vendors, this service *is* the verifier — it does the network-level checking itself.

## What It Does

- **Syntax validation.** A precise regular expression rejects malformed addresses before any network work happens.
- **MX lookup.** It resolves the domain's mail-exchange (MX) DNS records to find the real mail server responsible for the address — caching the lookup in memory so a busy domain is only resolved once.
- **SMTP deliverability check.** It opens an SMTP connection to that mail server and walks the handshake — `MAIL FROM`, then `RCPT TO` for the target address — to confirm the server will accept mail for that mailbox. This catches non-existent addresses that pass every syntactic check.
- **Persistent caching.** Verified results are stored in a database keyed uniquely by address, so a repeat verification is an instant cache hit instead of another network round-trip.
- **Clear verdicts.** It returns a simple deliverable/not-deliverable answer, surfacing the mail server's own response code when an address is rejected.

## Engineering Highlights

- **Verification at the protocol level.** The interesting part is doing real SMTP — most "verifiers" only check syntax and maybe MX. By actually performing the `RCPT TO` exchange, this service detects addresses that look perfect but don't exist, which is exactly the kind of bad lead a business wants to filter before spending money mailing it.
- **Two-layer caching.** An in-memory MX cache avoids repeated DNS lookups within a run, and a persistent database cache avoids re-verifying any address ever seen before — two different time horizons, each with the right store.
- **Lean and fast.** Built on a lightweight Go HTTP framework with a single focused endpoint and no heavyweight dependencies — a small service that does one thing well.

## Why It Matters

This is the kind of focused systems work I enjoy: drop below the API abstractions and speak the actual protocol. It demonstrates real understanding of how email delivery works — DNS, MX records, the SMTP conversation — plus pragmatic caching to make something network-bound feel instant. It was the early building block that fed clean, deliverable leads into the rest of the platform.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Go |
| **HTTP framework** | Echo |
| **Verification** | Regex syntax check, DNS MX lookup, live SMTP `MAIL`/`RCPT` handshake |
| **Caching** | In-memory MX cache + persistent database cache (MySQL via ORM) |
