# RiRi ↔ Mariah Handoff

Shared project status for RiRi (ChatGPT) and Mariah (Cursor).

RiRi plans the work and reviews results. Mariah implements the work in this repository. This file is the current status. GitHub Issues are the task thread.

## Repository

- Name: `chatgpt-and-cursor-handoff`
- Owner: `King72315`
- Link: https://github.com/King72315/chatgpt-and-cursor-handoff
- Issues: https://github.com/King72315/chatgpt-and-cursor-handoff/issues

## Roles

- **RiRi (ChatGPT):** Write the plan. Open one GitHub Issue per task. Review Mariah's result comment on that same issue.
- **Mariah (Cursor):** Do the coding and implementation. Do not expand the task beyond the issue. When the task is done, comment on that same issue with the results, update this file, and push.

## Current project status

- Project folder: `Chatgpt and Cursor Handoff`
- Application code: none. This repository is the shared communication project only.
- Active task: October 12, 2026 CT TennisEdge slate check is complete and waiting for RiRi's review. Issue: https://github.com/King72315/chatgpt-and-cursor-handoff/issues/16
- Application repository for that issue: private `King72315/tennisedge`. The check was read-only. No application code, predictions, grades, slates, or deployments were changed.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-12

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.
8. A read-only TennisEdge slate check uses the hosted health route and `GET /api/tennisedge/mobile/v1/winners-archive`. The Today, Results, History, and Value Winner routes stay unused on a read-only check because those handlers can save boards.

## How RiRi assigns a task

Open a GitHub Issue with:

- **Title:** short task name
- **Goal:** what should be true when the task is done
- **Scope:** what to change, and what to leave alone
- **Acceptance criteria:** how RiRi will judge the result
- **Notes:** files, constraints, or context Mariah needs

## How Mariah reports results

Comment on the same issue with:

- What was completed
- Files changed
- How it was verified
- Follow-ups or blockers

Then update **Current project status**, **Latest handoff**, and **Status log** in this file and push.

## Latest handoff

- **Date:** 2026-10-12
- **From:** Mariah
- **To:** RiRi
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/16
- **Summary:** Read-only October 12, 2026 CT slate check against the hosted archive. Official winner freeze `25fd791c`, frozen `10/12/2026, 12:00:54 AM` CT. The archive packet has 26 winner rows and 6 value rows. Original winner ranks 1, 3, 4, and 6 are absent, and original value ranks 1, 2, 4, and 5 are absent. No picks were invented. No application files were changed. The issue comment returned HTTP 403, so the full report is https://github.com/King72315/chatgpt-and-cursor-handoff/pull/17.

### Source

- Hosted service `tennisedge-hosted-mobile-v1`, timezone `America/Chicago`, store Postgres.
- Health at check time: slate date `2026-10-12`, phase `OFFICIAL`, official `true`, freeze hash `25fd791c`.
- Winner and value rows: `GET /api/tennisedge/mobile/v1/winners-archive` (`readOnly: true`, marker `tennisedge-winners-readable-archive-v1`).
- Winner packet written `2026-10-12T11:11:15.817Z` (6:11 AM CT). Stored summary `1-2-1` across 26 rows: 1 win, 2 losses, 1 void, 22 pending.
- Value package marker `tennisedge-top4-value-winners-v1`, schema `tennisedge-value-winner-archive-v1`, frozen `2026-10-12T05:00:56.485Z` (12:00:56 AM CT), package written `2026-10-12T12:06:34.720Z` (7:06 AM CT). Stored summary label `1 W · 1 L · 1 V`.
- Every stored winner `originalSlateDate` is `2026-10-12`. Every stored winner `freezeId` is `25fd791c`. Stored CT labels match `America/Chicago` conversion of `scheduledStart`. `currentStart` is the same instant as `scheduledStart` on every stored winner row.
- Today, Results, History, and Value Winner routes were not called. Public score pages were not used. Stored status is the archive snapshot.

### Rank gaps

Stored winner ranks run through 44 with 26 rows present. Absent original ranks: 1, 3, 4, 6, 8, 10, 13, 16, 18, 20, 24, 26, 28, 31, 33, 39, 41, 43. The six lowest stored original ranks are 2, 5, 7, 9, 11, and 12. A complete original rank 1–6 set is not in this packet.

The value package's six stored `valueRank` values are 3, 6, 7, 8, 9, and 10. A complete original value rank 1–6 set is not in this package.

### Stored winner rows with original rank 6 or better

| Original rank | Pick | Opponent | Frozen pWinner | Stored CT start | Stored status |
| --- | --- | --- | --- | --- | --- |
| 2 | Carlos Alcaraz | Zizou Bergs | 0.8837789205941624 | Mon, Oct 12, 5:00 AM CT | PENDING / PENDING; score not saved |
| 5 | Cristina Bucsa | Dayana Yastremska | 0.8338375529726171 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |

### Remaining stored winner rows

| Original rank | Pick | Opponent | Frozen pWinner | Stored CT start | Stored status |
| --- | --- | --- | --- | --- | --- |
| 7 | Diana Shnaider | Katie Boulter | 0.8338300176744613 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |
| 9 | Taylor Fritz | Stefanos Tsitsipas | 0.8327874119710157 | Mon, Oct 12, 12:10 AM CT | PENDING / PENDING; score not saved |
| 11 | Maja Chwalinska | Mayar Sherif | 0.8083129976876346 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |
| 12 | Jelena Ostapenko | Daria Kasatkina | 0.775796236595182 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 14 | Daniil Medvedev | Dalibor Svrčina | 0.775750025336843 | Mon, Oct 12, 1:20 AM CT | PENDING / PENDING; score not saved |
| 15 | Alexander Zverev | Alexander Bublik | 0.7364215565799214 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 17 | Rafael Jodar | Jiri Lehečka | 0.7242290578908186 | Mon, Oct 12, 12:10 AM CT | PENDING / PENDING; score not saved |
| 19 | Xinyu Wang | Xiyu Wang | 0.6689007029200373 | Mon, Oct 12, 6:30 AM CT | PENDING / PENDING; score not saved |
| 21 | Nikola Bartunkova | Lilli Tagger | 0.6654195376986151 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |
| 22 | Yuliia Starodubtseva | Caty McNally | 0.6441996091437664 | Mon, Oct 12, 2:05 AM CT | FINAL / LOSS; stored score `0-0 gameA0 gameB0` is not a final set score |
| 23 | Katie Volynets | Kimberly Birrell | 0.6419259979409744 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 25 | Arthur Fils | Botic Van de Zandschulp | 0.6329517797503428 | Mon, Oct 12, 2:30 AM CT | PENDING / PENDING; score not saved |
| 27 | Donna Vekic | Maria Sakkari | 0.6261039380612986 | Mon, Oct 12, 1:20 AM CT | PENDING / PENDING; score not saved |
| 29 | Anna Kalinskaya | Shuai Zhang | 0.6125582131256898 | Mon, Oct 12, 9:00 PM CT | VOID / VOID; score not saved |
| 30 | Jakub Menšik | Arthur Gea | 0.6083257953309527 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 32 | Liudmila Samsonova | Katerina Siniakova | 0.6016693401534906 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |
| 34 | Elise Mertens | Daria Snigur | 0.5945216628778102 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |
| 35 | Zeynep Sonmez | Yulia Putintseva | 0.5559134605498425 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 36 | Anna Bondár | Mia Pohánková | 0.5545041391741032 | Mon, Oct 12, 12:10 AM CT | FINAL / LOSS; stored score `0-0 gameA0 gameB0` is not a final set score |
| 37 | Magdalena Frech | Mananchaya Sawangkaew | 0.5527697328414968 | Mon, Oct 12, 12:55 AM CT | FINAL / WIN; stored score `0-0 gameA0 gameB0` is not a final set score |
| 38 | Alex de Minaur | Karen Khachanov | 0.5239959040106805 | Mon, Oct 12, 11:00 PM CT | PENDING / PENDING; score not saved |
| 40 | Tommy Paul | Valentin Vacherot | 0.5209329610183642 | Mon, Oct 12, 6:10 AM CT | PENDING / PENDING; score not saved |
| 42 | Sara Bejlek | Jasmine Paolini | 0.5157105162433082 | Mon, Oct 12, 12:55 AM CT | PENDING / PENDING; score not saved |
| 44 | Qinwen Zheng | Ann Li | 0.5151623962779504 | Mon, Oct 12, 9:00 PM CT | PENDING / PENDING; score not saved |

### Stored value selections

| Original value rank | Pick | Opponent | Frozen pWinner | Stored market probability | CT start | Stored status |
| --- | --- | --- | --- | --- | --- | --- |
| 3 | Yuliia Starodubtseva | Caty McNally | 0.6441996091437664 | 0.392849840815492 | Mon, Oct 12, 1:50 AM CT | LOSS; stored score `2-6 7-6(7) 6-4` |
| 6 | Shuai Zhang | Anna Kalinskaya | 0.3874417868743102 | 0.30312780477891993 | Mon, Oct 12, 9:00 PM CT | VOID; score not saved |
| 7 | Zeynep Sönmez | Yulia Putintseva | 0.5559134605498425 | 0.4808976756612343 | Mon, Oct 12, 9:00 PM CT | grade not saved; live status not saved |
| 8 | Karen Khachanov | Alex de Minaur | 0.4760040959893195 | 0.43352601156069365 | Mon, Oct 12, 11:00 PM CT | grade not saved; live status not saved |
| 9 | Mananchaya Sawangkaew | Magdalena Frech | 0.4472302671585032 | 0.4204244931172442 | Mon, Oct 12, 12:55 AM CT | WIN; stored score `3-6 6-7(5)` |
| 10 | Arthur Gea | Jakub Menšik | 0.39167420466904734 | 0.37386907929749863 | Mon, Oct 12, 11:00 PM CT | grade not saved; live status not saved |

Value CT starts are `America/Chicago` conversions of the stored `startsAt`. `liveStatus` is empty on all six rows.

### Stored cross-lane notes

- Starodubtseva vs McNally: winner rank 22 is FINAL / LOSS with score text `0-0 gameA0 gameB0`. Value rank 3 is LOSS with score `2-6 7-6(7) 6-4`.
- Frech vs Sawangkaew: winner rank 37 picks Frech FINAL / WIN with score text `0-0 gameA0 gameB0`. Value rank 9 picks Sawangkaew WIN with score `3-6 6-7(5)`.

### Blockers

The read-only archive does not contain a complete original Top 6 for either lane. Missing ranks were left blank. No repair, remint, or second retrieval was run.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Read-only October 12, 2026 CT slate check for issue #16. Source: hosted health plus winners-archive. Winner freeze `25fd791c`. 26 stored winner rows and 6 stored value rows, with original rank gaps. No application data changed. Issue comment HTTP 403. Report: https://github.com/King72315/chatgpt-and-cursor-handoff/pull/17. |
