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
- Active task: Issue #57. Report A is posted. The local hybrid matches Railway deployment `996a7cdc`. A new checkpoint, `PRE_ISSUE57_RESEARCH_V1`, restored in scratch. Six-category baselines are measured. No production write and no engine change. `PRE_THE_LAB_V1` was left as it was.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-15

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

- **Date:** 2026-10-15
- **From:** Mariah
- **To:** RiRi
- **Summary:** Issue #57 Report A. The local `var/d0de-app` hybrid matches live deployment `996a7cdc` on the runtime files that were hashed. Checkpoint `forensics/pre-issue57-research-v1` has the source archive and an 8,253-row database export. Scratch restore matched. Frozen cards were not rewritten. Winner baseline is 269-156 (63.3%, Brier 0.221) on 425 decisions. The 0.60–0.65 band hit 46.7% against a 62.6% average probability. October 6 did not break the hit rate; Brier went from 0.216 to 0.233. Value Winners are 18-14 on 32 decisions, Brier 0.280 versus 0.277 for the saved market probability. Aces and Break Points Won have projections and no stored actuals, so they are inconclusive. Total Games projection MAE is 5.43 games on 375 matches. Total Sets is the constant 2.4 / 64.4% / 35.6% on 479 packets. A format-only walk-forward challenger failed (test 341). Paolini–Kartal is rank 4 at probability 0.637 on both boards, with start timestamps three hours apart.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/57
- **API:** deployment `996a7cdc` unchanged

## Status log

| Date | Update |
| --- | --- |
| 2026-10-15 | Issue #57 Report A. Checkpoint `PRE_ISSUE57_RESEARCH_V1` restore-checked. Six-category baseline measured. Sets format challenger failed. No deploy. |
| 2026-10-15 | King: October 15 Top 6 gate, sets-baseline Lab count, and Value Winner prices. API `996a7cdc`. Freeze `6b37e771` kept. No new APK. |
| 2026-10-15 | Issue #56: ChurchEdge Expo debug APK built (62.43 MB). JDK 17 + Gradle home fixed. USB install only. Supabase E2E still blocked. |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #26 released. API deployment `a0d6cbfe`. APK version code 46. Freeze `3e68f5fe` unchanged. Database backup restored locally and the public proxy was closed. |
| 2026-10-14 | King directed rollback to `d0de8bb1`, then current aces, breaks, and total games. Hybrid deployment `0f737ca5`. 2026-10-14 rebuilt: UNAVAILABLE, one Winner seat (Fernandez) with downstream markets, Value Winners empty. API-Tennis fixtures failed. No APK. |
| 2026-10-14 | Restored warehouse ranks and current rank-date eligibility. Rebuilt 2026-10-14 Winners on the Oct 5 engines. Deployment `a05c2e25`. Top 6 is four new seats with downstream counts. October 13 Fernandez is not a Top 6 seat. Value Winners for 2026-10-14 are empty. No APK. |
| 2026-10-14 | Saved-slate signal audit. Trial ranking and form scales did not improve the locked Oct 9–12 window (29-18). Weights rolled back. No deploy. |
| 2026-10-14 | Home through History grading. Saved set scores replace actual 0. Deployment `3ddd2eaa`. Picks and Family D unchanged. No APK. |
| 2026-10-14 | Archive stays visible when History is hidden, and a later verified score updates the saved archive. Count markets are a separate record. Deployment `3d3aa4f4`. Picks unchanged. No APK. |
| 2026-10-14 | PRE_THE_LAB_V1 saved and restore-verified before The Lab. Implementation has not started. No APK. |
| 2026-10-14 | The Lab is live. API `b40a4c87`. Copies are separate from picks and the archive. APK versionCode 47. October 14 probabilities unchanged. |
| 2026-10-14 | Issue #50: The Lab captures the frozen Winner and Value Winner signals. API `9ce24887`. No new APK. Picks, grades, and the archive are unchanged. |
