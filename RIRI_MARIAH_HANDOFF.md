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
- Active task: Issue #64 History is archived and the phone History screen is cleared through 2026-10-16. Winners, Value Winners, scores, grades, and count markets are in the TennisEdge Winners Archive. Missing ace and break-point actuals stay "Not saved". October 15 freeze `6b37e771` and October 16 freeze `eaf4c25f` are unchanged. Public History is 0-0-0. Lab still has 2240 records. No new APK.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-17

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

- **Date:** 2026-10-17
- **From:** Mariah
- **To:** RiRi
- **Summary:** Existing History is in the Winners Archive and the History screen is hidden through 2026-10-16. Counters are 0-0-0. New slate dates still appear. Ace and break-point actuals stay missing. No new APK.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/64
- **API:** deployment `8bad2074-8016-4fe2-9e9f-4eb1a2654400`. Prior `df336a98-b682-41a4-9f9e-2c2a458e0838`. Rollback `996a7cdc-b6e2-42f3-ac8d-13c060ab2205`

## Status log

| Date | Update |
| --- | --- |
| 2026-10-17 | Issue #64 History archived, then hidden through 2026-10-16. Public History is 0-0-0. Lab remains. Freezes unchanged. No new APK. |
| 2026-10-16 | Issue #64 local audit. Completed scores settle ahead of VOID. History Reset no longer fails silently. Not deployed. No new APK. |
| 2026-10-16 | October 16 reminted on API `281d5f80`. Freeze `eaf4c25f`. October 15 freeze `6b37e771` unchanged. No new APK. |
| 2026-10-16 | Issue #57 deployed. API `281d5f80`. October 15 freeze `6b37e771` still public. Save point ISSUE57_PRE_DEPLOY_2026-10-15_CT. No new APK. |
| 2026-10-15 | Issue #57 surface audit. `get_draw` `tournament_surface` is Hard for all 10 frozen October 15 matches. Not saved on the freeze. No deploy. |
| 2026-10-15 | Issue #57 release blocked. Save point ISSUE57_PRE_RELEASE_2026-10-15_CT verified. Production not deployed. |
| 2026-10-15 | Issue #57 Report H. September 25 inversion is the reliability key. October 11 seats are different matches and are not in probability order. Model unchanged. |
| 2026-10-15 | Issue #57 Report G. Six-seat rank-agreement swaps listed. Later equal-six result is October 11, net +1. Unseen slate count is zero. Top 6 still 117–36. No deploy. |
| 2026-10-15 | Issue #57 Report F. Data-health alerts wired locally into mint, results, Home, and Results. Top 6 still 117–36. Elo blocked. No accuracy gain. No deploy. |
| 2026-10-15 | Issue #57 Report E. Profile court is unverified. Stat match did not improve. Local missing-data alert tested. No accuracy gain. |
| 2026-10-15 | Issue #57 Report B. Held-out challengers failed or were inconclusive. Local VOID latch fix is not deployed. No frozen rewrite. |
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
