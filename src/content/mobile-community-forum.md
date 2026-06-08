## Overview

A complete **mobile community and forum platform**, built from scratch in PHP — one of my earliest real projects and, the "v5" in its name says it all, one I rebuilt and refined across multiple generations. It was a self-hosted social site for mobile/WAP-era phones: people signed up, posted in forums, messaged each other privately, kept profiles, and saw who else was online. I wrote the whole thing myself — every page, every feature, the database, the moderation tools.

I'm including it because it's where I come from. Long before queues and warehouses and Go services, this is the project where I taught myself to build a real, multi-user web application end to end — and people actually used it.

## What It Did

- **Forums.** Boards, topics, and posts — create topics, reply, view active discussions, move topics between boards, with a moderation control panel.
- **Private messaging.** A full inbox: send, read, reply, forward, and delete private messages, with sent-mail and conversation views.
- **User accounts & profiles.** Registration, sign-in, public and extended profiles, account activation, and user moderation tools.
- **Presence.** Live "who's online" tracking and member/activity counts.
- **Search.** Across posts, topics, users, and private messages.
- **Owner control panel.** Admin tooling to run the community — moderate users, manage the site.
- **Anti-abuse.** A text-based CAPTCHA on registration, banned user-agent handling, and a "shielded login" gate to block abusive clients — homegrown spam and abuse defenses.

## Why It Matters

Everyone's career starts somewhere, and this is mine: a young developer building an entire social platform alone, in raw PHP, because he wanted to — and iterating on it enough times to reach a fifth version. It shows the instinct that's run through everything since: take a whole problem, from database schema to user-facing features to fighting spam, and build the complete thing. The tools have changed enormously; the drive to ship a real product that real people use hasn't.

It's a nostalgic piece, and an honest one — early, self-taught work that I'm fond of and that set me on the path.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | PHP (procedural, from scratch — no framework) |
| **Database** | MySQL |
| **Platform** | Mobile / WAP-era web (lightweight HTML) |
| **Features built by hand** | Forum, private messaging, profiles, presence, search, moderation, CAPTCHA, anti-abuse |
