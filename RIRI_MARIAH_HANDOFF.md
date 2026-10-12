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
- Active task: Issue #3, TennisEdge October 11, 2026 results audit. Read-only audit is reported. No TennisEdge files were changed.
- Application repository for that audit: private `King72315/tennisedge`, branch `shadow-props-v1`.
- Cloud environment `handoff-and-tennisedge` (`e7fa4ade-c629-11f1-ac31-5e2d0494121f`) can read both this repository and `King72315/tennisedge`. The earlier handoff-only environment 404 does not apply to this environment.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master` for this handoff file's published history. This status update is on the current handoff working branch.
- Last update: 2026-10-12

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.
8. A read-only TennisEdge audit uses the private repository and the public read-only hosted archive. It does not edit TennisEdge, and it does not call hosted routes that can save slates, grades, or rolling boards.
9. If GitHub rejects the completion comment, the same report is published in a pull request on this handoff repository.

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
- **Summary:** The October 11, 2026 read-only audit ran against private `King72315/tennisedge` and the hosted read-only archive. Original Top 6 Winners are freeze `75d7d440` (12:01:07 AM CT on Oct. 11). Stored decided record is 0-2, with ranks 1–4 still pending. Original Top 6 Value Winners were frozen at 2026-10-11T05:01:09.219Z. Stored decided record is 1-1 with 1 void and 3 missing grades. Finished Fritz and Andreeva grades match public results, but their saved scores are `0-0 gameA0 gameB0`. Jodar won and has no stored Value grade. No TennisEdge files were changed. No further automatic retry.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/3

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #3 October 11 audit. Environment `handoff-and-tennisedge` can read private `King72315/tennisedge`. Original Top 6 Winners stored 0-2 with 4 pending. Original Top 6 Value Winners stored 1-1, 1 void, 3 ungraded. Several finished scores are missing or not final. TennisEdge was not modified. |
