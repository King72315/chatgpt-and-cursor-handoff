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
- Active task: TennisEdge Issue #26. The consolidated downstream build is commit `0f66c46` on `cursor/riri-workflow-definition-519c` (https://github.com/King72315/tennisedge/pull/7). It is not deployed. This cloud session has no Railway token, no `DATABASE_URL`, and no Expo token, so the restorable Postgres backup, Railway deploy, and new APK were not created. No new TennisEdge branch was opened.
- Live API at the 2026-10-13 17:14 UTC read: `https://tennisedge-api-production.up.railway.app/api/tennisedge/mobile/v1/health` is OFFICIAL, slate `2026-10-13`, freeze `3e68f5fe`, store postgres. That is the running production image, not commit `0f66c46`.
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
- **Summary:** Issue #26 was not finished from this cloud session. The consolidated application commit remains `0f66c46`. Railway, Postgres, Expo, and provider keys are absent here, so there is no restorable database backup, no deploy, and no new APK. King needs to continue in the local Cursor session on that existing commit. Winner and Value Winner selection were not changed. Issue #24 was not included.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/26
- **Application PR:** https://github.com/King72315/tennisedge/pull/7
- **Commit:** `0f66c46` on `cursor/riri-workflow-definition-519c`. Not deployed.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #26 cloud release is blocked. Consolidated commit `0f66c46` (application PR #7) was not deployed. This session has no Railway token, `DATABASE_URL`, or Expo token. No new TennisEdge branch. Live health remains freeze `3e68f5fe`. Continue on King's local Cursor session. |
