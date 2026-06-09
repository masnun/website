## Overview

**Animeplex** is an automated website that gathers and displays the latest anime videos. It runs largely on its own - pulling fresh content from across the web and presenting it as a browsable WordPress site so visitors always land on the newest episodes without anyone curating by hand.

My job was the engine behind it: **scrape a set of predefined anime sources and present the results nicely on the WordPress site.**

## What It Does

- **Aggregates anime automatically** - continuously collects the latest videos from a fixed set of source sites.
- **Scrapes and normalizes** - extracts the relevant data (titles, episodes, video links, metadata) from each source's markup and feeds.
- **Publishes to WordPress** - lands the gathered content into the site so it's displayed cleanly and stays current on its own.

## My Role

I built the **scraping and presentation layer**. Using PHP with PHP Simple HTML DOM (plus XML feeds where sources provided them), I parsed each predefined source, pulled out the anime videos and their details, and pushed them into the WordPress site - then made sure they were presented nicely on the front end with JavaScript and jQuery. The result was a hands-off content pipeline: the site keeps itself fresh with the latest anime without manual posting.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | PHP |
| **Scraping** | PHP Simple HTML DOM, XML feeds |
| **CMS** | WordPress |
| **Database** | MySQL |
| **Front end** | JavaScript, jQuery |
