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
- Active task: TennisEdge Issue #26 downstream props. The consolidated application change is commit `0f66c46` on https://github.com/King72315/tennisedge/pull/7. It is not merged and not deployed.
- This cloud session has no SportsGameOdds key, no Odds API key, no API-Tennis key, no Railway token, no `DATABASE_URL`, and no Expo token. Live market authentication, a Postgres dump, a Railway deploy, and a new APK are blocked until a local session that already has those logins runs the release.
- Production health on 2026-10-13 remains phase OFFICIAL, freeze `3e68f5fe`, store postgres. No new direct APK URL.
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
- **Summary:** Issue #26 was not deployed. This cloud session cannot see the local provider, Railway, Postgres, or Expo credentials, so it did not authenticate live markets, take a database dump, deploy, or build an APK. The finished code remains `0f66c46` on TennisEdge PR #7, already based on `shadow-props-v1` commit `d2a644b`. A stored SportsGameOdds sample shows sportsbook Total Games and match-winner prices, and PrizePicks-only Aces and Break Points Won. Match Total Sets over/under is absent from that sample. PrizePicks lines stay excluded. Production is still freeze `3e68f5fe`. Since the ABB10/13 file snapshot, the public archive only added VOID badges on October 11, 12, and 13; wins, losses, probabilities, and Value Winner packages match the snapshot. That file snapshot is not a restorable Postgres backup.
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
| 2026-10-13 | Issue #26: credential check in the cloud session. SportsGameOdds, The Odds API, API-Tennis, Railway, Postgres, and Expo are missing here. No deploy and no new APK. Code remains PR #7 commit `0f66c46`. |
