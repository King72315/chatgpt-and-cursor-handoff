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
- Active task: Issue #33 read-only integrity audit of live TennisEdge. No application code was changed, no saved prediction was rewritten, and nothing was deployed.
- Live Railway health at 2026-10-13T22:13:15Z: slate `2026-10-13`, phase OFFICIAL, freeze `3e68f5fe`, store postgres. That freeze matches ABB10/13. The health shape matches the code at `d2a644b`. The approved Value Winner restoration and the 1.0.13 six-record phone work are not what this API is serving.
- Installed phone claim is Android 1.0.13 versionCode 46. Git only has 1.0.13 at versionCode 16 on unmerged branches. This session has no Expo token, so the versionCode 46 commit is unverified.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `cursor/riri-workflow-definition-8d69`
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
- **Summary:** Read-only audit of the live Railway API against ABB10/13. Winner identities, ranks, and pWinner are unchanged on all 424 stored rows. Nine previously ungraded winner rows and four value rows on October 11–13 changed to VOID. Public finals contradict the October 13 voids for Zverev/Bublik and Zhang/Krueger, and Davidovich Fokina's win over Hurkacz is still ungraded. Live Value Winners still use the underdog selector. The predicted-winner restoration is not deployed. There is no Postgres dump. No repair was applied.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/33
- **Application repository:** https://github.com/King72315/tennisedge
- **Live code match:** `d2a644bedea72709429c9db2fc2779191639a2cb`. Not a new deploy.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #33 read-only integrity audit. Live freeze `3e68f5fe` still matches ABB10/13. Stored winner and value identities are unchanged. October 11–13 gained scoreless VOID grades. No production rewrite and no deploy. |
