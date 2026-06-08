## Overview

A **university examination and result management system** I designed, built, and maintained single-handedly for the Business Administration Discipline at **Khulna University** — and kept running in production for nearly a decade. It manages the full academic cycle for the department's programs: student course registration, faculty mark entry, multi-stage result tabulation, GPA computation, and official mark sheets — encoding years of accumulated academic rules into software that real administrators, faculty, and students depend on.

This is the project I'm quietly proudest of: not the flashiest stack, but a real system, used by a real institution, that I owned end to end from 2014 to 2023.

## What It Does

- **Course registration.** Students register for courses each term with add/drop, credit-limit enforcement, special-term handling, retake tracking, and per-student registration locks that freeze submissions after a deadline.
- **Component-based mark entry.** Faculty enter marks broken into their real components — attendance, continuous assessment, mid-term, term-final, section assessments, sessional and viva, thesis supervisor/external/viva — with the exact component set depending on the program and course type.
- **Multi-role tabulation workflow.** Results move through a real approval chain: instructor enters marks → scrutiny audits them → tabulation finalizes grades and GPAs — each role seeing its own filtered view, with result locks and an audit log recording every change.
- **GPA & grading engine.** Letter grades and grade points on a 4.0 scale, computed from the mark components per the department's official scale.
- **Mark sheets & reports.** Paginated, print-ready tabulation sheets and result documents.
- **Faculty payment tracking.** A dashboard where faculty declare examination work (question setting, invigilation, tabulation, sessional assessment, thesis examination…) against configurable per-program rates, with individual and summary views.

## The Interesting Part: a Real Academic Rules Engine

Universities don't have one set of rules — they have many, accreted over years, differing by program and cohort. This system encodes them:

- **Program-specific grading.** BBA, MBA, EMBA and Executive MBA — plus their outcome-based-education (OBE) variants — each use a different combination of mark components. The system models all seven configurations.
- **Retake grade downgrading.** For BBA retakes above a threshold, the system applies a points penalty before computing the grade — letting a student replace a grade while still penalizing the retake, exactly as the department's policy requires.
- **Absent handling, thesis evaluation, sessional courses, cohort-dependent thresholds** (e.g. rules that differ for students who enrolled before a certain year) — all captured as concrete logic rather than left to manual judgment.

Getting these right matters: this drives the actual grades on students' transcripts.

## Why It Matters

Most projects are measured in months; this one ran for **nine years**. That longevity is the achievement — a solo-built system stable and trustworthy enough to remain the department's system of record across many cohorts, with thousands of students and years of historical data. It shows sustained ownership, careful domain modeling of genuinely complex rules, role-based workflows with proper locking and audit trails, and the patience to keep a real production system correct as policies evolved. It's also work I'm glad I did — software built for my own university that made academic administration measurably easier.

## Tech Stack

| Layer | Technology |
|---|---|
| **Language** | Python |
| **Framework** | Django (server-rendered, role-based access) |
| **Database** | MySQL |
| **Frontend** | Django templates, Bootstrap, jQuery; customized admin |
| **Domain** | Academic rules engine — program-specific grading, GPA, retake policy, tabulation workflow |
| **Scale** | Thousands of students, multiple programs, 9 years in production (2014–2023) |
