## Overview

**TwBoost** is a Twitter automation engine. A user defines a set of keywords and an automated reply message; the engine then periodically searches Twitter for those keywords and posts the replies at random intervals - automating outreach while staying natural enough to avoid looking like a rigid bot. The project was built on top of the Twitter APIs.

## What It Does

- **Keyword + reply setup** - the user defines keywords to watch and the reply message to send.
- **Periodic search** - the engine regularly searches Twitter for matching keywords via the Twitter APIs.
- **Randomized auto-replies** - it posts the defined reply at random intervals, so the automation feels organic rather than mechanical.

## My Role

I built the automation engine around the Twitter APIs: the keyword-search loop, the scheduling that runs it periodically, and the randomized-interval reply logic that keeps the automated responses from firing in an obvious, uniform pattern. Built in PHP with a MySQL backend, and a jQuery + Twitter Bootstrap front end for configuration.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | PHP |
| **APIs** | Twitter APIs |
| **Database** | MySQL |
| **Front end** | jQuery, Twitter Bootstrap |
