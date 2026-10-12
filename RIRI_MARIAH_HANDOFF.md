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
- Active task: Issue #3 retry is complete as an access check only. `King72315/tennisedge` is still outside the saved cloud environment, so the October 11, 2026 results audit was not started.
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
8. Issue #3 names the application repository `King72315/tennisedge` (private, branch `shadow-props-v1`). A single access retry on 2026-10-12 found the same blocker: environment `ff9583ad-c614-11f1-ac31-5e2d0494121f` lists only the handoff repository, the GitHub installation repository list has total_count 1, and `GET /repos/King72315/tennisedge` returned HTTP 404. Do not start the October 11 audit, and do not start another automatic retry, until that private repository is included and a new assignment is made. On-demand spending stays disabled.

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
- **Summary:** The single retry of the October 11 TennisEdge results audit stopped before any audit work. This session's cloud environment still lists only `King72315/chatgpt-and-cursor-handoff`. Its GitHub installation can see that one repository (`total_count` 1), and a read of private `King72315/tennisedge` returned HTTP 404. No frozen Top 6 lists, scores, grades, or W/L records were retrieved or invented. No application file, database, or deployment was touched. Issue comments still return HTTP 403, so this pull request is the completion report. No further automatic retry is queued.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/3

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #10 connection check: cloud environment `ff9583ad-c614-11f1-ac31-5e2d0494121f` does not include private `King72315/tennisedge` (credential read returned HTTP 404). Audit on issue #3 was not started. |
| 2026-10-12 | Issue #3 single retry: the same environment and GitHub installation still exclude `King72315/tennisedge` (`GET` HTTP 404, installation `total_count` 1). October 11 audit not started. Completion comment returned HTTP 403. No further automatic retry. |
