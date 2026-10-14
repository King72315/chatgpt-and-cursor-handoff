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
- Active task: Issue #47 read-only archive audit is finished. No application code was changed and Reset History was not pressed. Live health at 2026-10-14T10:37:06Z says slate 2026-10-14 is not official (`RETRYING_DATA_SOURCE`, no freeze hash, Postgres). The hosted archive has 35 winner packets from 2026-09-08 through 2026-10-13 and no 2026-10-14 packet. Readable packet totals are 199-116-102. Phone packages through 2026-10-12 are 213-126-77, and 14 dates disagree. Reset History on the recorded 1.0.13 versionCode 46 APK is UNVERIFIED against the live hybrid. The committed cloud handler rejects that APK's empty token and, on scratch storage, an authorized hide does not change the official card.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
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
- **Summary:** Read-only Issue #47 audit. Reset History was not pressed. Live verdict for the running hybrid is UNVERIFIED. The recorded phone APK is 1.0.13 versionCode 46 with an empty reset token, and the committed cloud handler rejects that call before writing. Scratch storage showed an authorized hide leaves the official card bytes unchanged. Hosted archive sha256 `d7e62ebac9988b0b769cdc01001a7014234e3e064c2d72e6fe00313df0e31841` (5,659,309 bytes): packets 2026-09-08 through 2026-10-13, missing 2026-09-30 and 2026-10-14. Winners FAIL integrity (text 199-116-102 vs packages 213-126-77). Value Winners 24-15-7 with Oct 10 and Oct 12 over the cap of 6. Aces, Break Points Won, and Total Sets do not have priced graded bets in the archive. Total Games is split across published rows, shadow rows, and winner-side lines. Windows archive and the 4,247-row backup were not on this machine. No deploy and no TennisEdge commit.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/47
- **API health:** `https://tennisedge-api-production.up.railway.app` Postgres, 2026-10-14 not official. `d0de8bb1` and `3ddd2eaa` are not commits in the app repo. Deployment id was not readable from health.
- **Phone artifact:** https://expo.dev/artifacts/eas/0RxC3WBTsNOlMB51EPt1e1eRuPV_m_-JaP4LjbC2MWM.apk sha256 `09c075c7f024831b88e6d9b8c06f432597a211c51295ced68dbfc12c2743c1e0`

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #26 released. API deployment `a0d6cbfe`. APK version code 46. Freeze `3e68f5fe` unchanged. Database backup restored locally and the public proxy was closed. |
| 2026-10-14 | King directed rollback to `d0de8bb1`, then current aces, breaks, and total games. Hybrid deployment `0f737ca5`. 2026-10-14 rebuilt: UNAVAILABLE, one Winner seat (Fernandez) with downstream markets, Value Winners empty. API-Tennis fixtures failed. No APK. |
| 2026-10-14 | Restored warehouse ranks and current rank-date eligibility. Rebuilt 2026-10-14 Winners on the Oct 5 engines. Deployment `a05c2e25`. Top 6 is four new seats with downstream counts. October 13 Fernandez is not a Top 6 seat. Value Winners for 2026-10-14 are empty. No APK. |
| 2026-10-14 | Saved-slate signal audit. Trial ranking and form scales did not improve the locked Oct 9–12 window (29-18). Weights rolled back. No deploy. |
| 2026-10-14 | Issue #47 assignment received. Read-only Reset History, permanent archive, and six-prop flow audit started on the installed 1.0.13 build and the running Oct-5-hybrid service. No live writes. |
| 2026-10-14 | Issue #47 audit finished. Reset History UNVERIFIED on the live service. Archive packets 2026-09-08 through 2026-10-13. Winners text 199-116-102 disagree with phone packages 213-126-77 on 14 dates. Aces, Break Points Won, and Total Sets are not priced graded bets. No application commit and no deploy. |
