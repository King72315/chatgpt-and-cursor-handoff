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
- Active task: [Issue #18](https://github.com/King72315/chatgpt-and-cursor-handoff/issues/18) TennisEdge Top 6 match-time verification. Follow-up 1 of 2 is a verification report. Application code was not changed in this follow-up.
- Application repository: private `King72315/tennisedge`. The repair pull request is open and unmerged: https://github.com/King72315/tennisedge/pull/2
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `cursor/riri-workflow-definition-c75f`
- Last update: 2026-10-12

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.

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
- **Summary:** Issue #18 follow-up 1 checked the Top 6 repair without changing application code, historical rows, or production data. The open application pull request is https://github.com/King72315/tennisedge/pull/2 on branch `cursor/riri-workflow-definition-aee0`, commit `5192ecef1729acc68a0fb05db02f18404d443891`, state OPEN, base `shadow-props-v1`. On that commit, Winner eligibility converts the stored start to an America/Chicago date before `verifyWinnerScheduleV1` reads the same stored `commenceTime`, `startsAt`, or `rescheduledDate`. A single non-midnight timestamp is accepted with source name `commenceTime`. API Tennis display clocks are painted after the board exists and do not gate eligibility. This environment has no Odds API, SportsGameOdds, API Tennis, or API-Sports credentials, so October 12 provider clocks were not re-fetched. The stored archive is the historical freeze, not a new provider verification. Its 26 winner rows omit original ranks 1, 3, 4, and 6, and the value package omits value ranks 1, 2, 4, and 5, so a higher-ranked eligible candidate cannot be ruled out from this read. `scripts/rolling-top6-v1-test.mjs` line 392 expects `SCHEDULED` and receives `VOID`. That assertion and the missing `openProviderStatusReplacesStoredVoidV1` helper already exist on `shadow-props-v1` and were left unchanged. Expo lint was not run because `node_modules` is not installed. The issue comment was rejected with HTTP 403. The full report is https://github.com/King72315/chatgpt-and-cursor-handoff/pull/20.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/18

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18 follow-up 1: confirmed application PR https://github.com/King72315/tennisedge/pull/2 is open at `5192ece`. Stored-field verification runs after CT conversion and does not re-fetch provider clocks. No application code change, no deploy, and no production database edit. Issue comment HTTP 403. Report: https://github.com/King72315/chatgpt-and-cursor-handoff/pull/20. |
