## Overview

**Deployninja** lets you deploy your SVN and Git repositories to your web server in a painless fashion - point it at a repo, and it takes care of fetching the code and getting it onto your servers without the usual manual ceremony. It was built at Leevio.

I worked on Deployninja as a **backend engineer**, and I built **all the algorithms that fetch the repositories and upload them to the servers** - the core of what the product actually does.

## What It Does

- **Connects to your repositories** - works with both SVN and Git source repos.
- **Fetches the code** - pulls the right revision/branch from the repository.
- **Uploads to your servers** - pushes the fetched code out to the target web server, painlessly.
- **Runs the heavy lifting in the background** - deployment work is queued and processed by long-running workers rather than blocking the user.

## My Role

I owned the **repository fetch-and-deploy engine** on the backend. That meant building the logic to talk to SVN (via php-svn) and Git (via GitPython) repositories, fetch their contents, and transfer them onto the destination servers reliably. To keep the experience painless, the work runs **asynchronously**: jobs are dispatched to Gearman and executed by background workers kept alive and supervised by Supervisord, with PHP/Zend Framework on the application side and Python handling parts of the repository and deployment work. The result is a system that turns "deploy my repo to my server" into a single, hands-off action.

## Tech Stack

| Layer | Technology |
|---|---|
| **Application** | PHP, Zend Framework |
| **Repository / deploy logic** | Python, php-svn, GitPython |
| **Background processing** | Gearman, Supervisord |
| **Database** | MySQL |
| **Source control supported** | SVN, Git |
