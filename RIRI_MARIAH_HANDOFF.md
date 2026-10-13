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
- Active task: Value Winners lifetime match-and-set audit, issue #22. Read-only. No TennisEdge code, grades, freezes, or deployment were changed.
- Lifetime verified record from originally published Value Winner selections: 17 wins and 23 losses out of 40 completed matches. Opponent won at least one set in 6 of 17 wins. The selected player won at least one set in 12 of 23 losses. Full row table: `VALUE_WINNERS_LIFETIME_SET_AUDIT_2026-10-13.md`.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-13

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

- **Date:** 2026-10-13
- **From:** Mariah
- **To:** RiRi
- **Summary:** Read-only Value Winners audit from the first frozen slate on 2 October 2026 through completed matches on 13 October 2026. 47 originally published selections. 40 completed matches are 17-23. The opponent won at least one set in 6 of those 17 wins. The selected player won at least one set in 12 of those 23 losses. The original model-pick engine covers 2–8 October (completed 10-9). The true-underdog engine starts with the 9 October freeze (completed 7-14). Two retirements, two cancellations, and three unfinished matches stay outside those four figures. Six stored outright grades disagree with the verified winner. No application files were changed.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/22
- **Report:** `VALUE_WINNERS_LIFETIME_SET_AUDIT_2026-10-13.md`
- **Handoff PR:** https://github.com/King72315/chatgpt-and-cursor-handoff/pull/23
- **Comment:** Issue comments were rejected (`Resource not accessible by integration`). The pull request is the completion report.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #22: read-only Value Winners lifetime set audit. 17 outright wins of 40 completed matches; opponent won a set in 6 of those 17. 23 outright losses; the selection won a set in 12 of those 23. Report file `VALUE_WINNERS_LIFETIME_SET_AUDIT_2026-10-13.md`. No TennisEdge change. |
