## Overview

A **from-scratch minimal blockchain**, built in Go to understand how blockchains actually work under the hood. Rather than read about it, I implemented the core data structure myself: a chain of cryptographically linked blocks, exposed through a small REST API. It's a focused learning exercise - built in a day in early 2018 - not a production system, and I'd rather present it honestly as that: a curiosity-driven dive into the fundamentals.

## What It Does

- **Builds a chain of blocks.** Each block holds its data, a timestamp, the hash of the previous block, and its own hash - so every block is cryptographically chained to its predecessor, the property that makes a blockchain tamper-evident.
- **SHA-256 linking.** A block's hash is computed (SHA-256) over its data, timestamp, and the previous block's hash. Change any earlier block and every subsequent hash no longer matches - the chain breaks.
- **Genesis block.** The chain bootstraps from a genesis block with no predecessor.
- **REST API.** Two endpoints: add a new block with a JSON payload, and fetch the full chain - built on the Chi router with request logging middleware.

## What I Learned

The point was the fundamentals, and they came through clearly: how hash-linking creates immutability, why each block must commit to the previous hash, and how a genesis block anchors the chain. I deliberately kept the scope tight - the chain lives in memory and there's no proof-of-work or mining - so the cryptographic linking idea stayed front and center rather than getting buried in consensus machinery. It's the kind of small build I reach for when I want to *understand* something rather than just use it.

## Honest Scope

This is a learning project, and I'm listing it as one. No persistence, no proof-of-work, no networking or consensus - just the core idea of a cryptographically linked chain, implemented cleanly in idiomatic Go. It reflects how I like to learn: build the smallest real version of a thing to see how it ticks.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Go |
| **HTTP framework** | Chi router + logging middleware |
| **Crypto** | SHA-256 hash linking |
| **State** | In-memory chain |
