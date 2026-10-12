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
- Active task: [Issue #18](https://github.com/King72315/chatgpt-and-cursor-handoff/issues/18) TennisEdge Top 6 match-time verification. Implementation is in private `King72315/tennisedge`. No deploy and no production database edit.
- Application repository: `King72315/tennisedge`, base `shadow-props-v1`.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `cursor/riri-workflow-definition-aee0`
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
- **Summary:** Issue #18 is implemented in `King72315/tennisedge`. Match-time verification now runs before CT eligibility and before either lane chooses its six. Winner seats follow stored `winnerRank`. Value seats follow the existing underdog edge order. A locked six does not promote a later rank when a seat finishes or when an unstarted match changes CT date. That match leaves the current slate and is not inserted into the next day. Started matches keep their original slate and rank. Historical stored cards were not rewritten. October 12 was read from the public winners archive only: winner full-slate ranks are gapped, the archive `top6` slice is ranks 2 and 5, and the stored Value board is value ranks 3, 6, 7, 8, 9, and 10. Those stored rows were left as they are.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/18

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: TennisEdge Top 6 now verifies a real start time before eligibility and selection, and a locked six is not refilled. Application changes are in `King72315/tennisedge`. No deploy and no production database edit. |
