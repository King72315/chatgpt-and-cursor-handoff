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
- Active task: TennisEdge issue #26. The October 13 ABB10/13 checkpoint and the six-category History build are on commit `9799cb4`. Not merged and not deployed. No Android APK was built.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master` for this handoff file. Application work is on `cursor/riri-workflow-definition-02e9`.
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
- **Summary:** Issue #26 checkpoint ABB10/13 was taken from the read-only winners archive before any code change. History now has six separate records: Winners, Value Winners, Aces, Break Points Won, Total Games, and Total Sets. Saved winner and value grades were not rewritten. Aces, Break Points Won, Total Games, and Total Sets stay out of the sportsbook record unless a real prematch line is frozen. Break Points Won does not accept an unlabeled break-point price. The phone version is 1.0.13, versionCode 16. The backend was not deployed and the APK link is not available in this environment.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/26
- **Application commit:** `9799cb4` on `cursor/riri-workflow-definition-02e9`. Not deployed.
- **Checkpoint:** `forensics/abb10-13` in TennisEdge. Archive sha256 `6c3c4879543d93ccc5fd2211c75aa8b42ca331b4b215ae189562cc6b3a936ac3`. Live freeze `3e68f5fe` for slate `2026-10-13`.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #26: ABB10/13 checkpoint, then six History records and downstream market lines. Commit `9799cb4`. Not deployed. No APK. |
