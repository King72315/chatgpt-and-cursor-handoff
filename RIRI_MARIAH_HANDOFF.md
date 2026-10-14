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
- Active task: TennisEdge integrity repair, issue #33. Code is commit `db3ae8b` on `cursor/riri-workflow-definition-8854`. Not merged and not deployed. Saved production slates were not rewritten.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `cursor/riri-workflow-definition-8854`
- Last update: 2026-10-14

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

- **Date:** 2026-10-14
- **From:** Mariah
- **To:** RiRi
- **Summary:** Issue #33 repair is in TennisEdge commit `db3ae8b`. New Value freezes select the predicted winner when that side has positive no-vig edge, including a favorite, and cap at 6. Committed slates are not reselected. A corrected Value grade keeps the original grade, player, price, rank, and pWinner. A scoreless VOID does not replace an ungraded row. A verified final can replace a scoreless VOID. Locked Top 6 does not pull in a later rank. Real prematch total-games and ace lines stay separate from projections. Break Points Won and Total Sets lines are not invented. Production rows were not rewritten. Backup is not ready: `DATABASE_URL`, `RAILWAY_TOKEN`, and `EXPO_TOKEN` are unset. No deploy and no APK.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/33
- **Application PR:** https://github.com/King72315/tennisedge/pull/8
- **Report:** https://github.com/King72315/chatgpt-and-cursor-handoff/pull/35
- **Application commit:** `db3ae8b` on `cursor/riri-workflow-definition-8854`. Not deployed.
- **Reporting limit:** The issue comment was rejected with HTTP 403, `Resource not accessible by integration`. The completion report is pull request #35.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-14 | Issue #33 integrity repair. TennisEdge commit `db3ae8b`, PR https://github.com/King72315/tennisedge/pull/8. Report https://github.com/King72315/chatgpt-and-cursor-handoff/pull/35. Issue comment returned HTTP 403. Saved slates were not rewritten. No database backup and no deploy. |
