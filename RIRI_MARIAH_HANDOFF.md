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
- Active task: Issue #10 cloud-access check is complete. `King72315/tennisedge` is not in the saved cloud environment, so the October 11 audit on issue #3 stays unstarted.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Cloud environment: https://cursor.com/dashboard/cloud-agents/environments/e/ff9583ad-c614-11f1-ac31-5e2d0494121f — repositories: `King72315/chatgpt-and-cursor-handoff` only.
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
8. Issue #3 names the application repository `King72315/tennisedge` (private, default branch `shadow-props-v1`). The saved cloud environment does not include that repository, and this environment's GitHub credential received HTTP 404 for it. Do not start the October 11 audit until King saves the environment with that repository included. On-demand spending stays disabled.

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
- **Summary:** Cloud access to `King72315/tennisedge` is not confirmed. The saved environment lists only `King72315/chatgpt-and-cursor-handoff`, and a read of the private repository from this environment returned HTTP 404. No agent was launched, no application file was edited, and issue #3 was not audited. King needs to open the environment, add `King72315/tennisedge`, and save, with on-demand spending left disabled.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/10

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #10 connection check: cloud environment `ff9583ad-c614-11f1-ac31-5e2d0494121f` does not include private `King72315/tennisedge` (credential read returned HTTP 404). Audit on issue #3 was not started. Single remaining action is for King to add that repository to the environment and save. |
