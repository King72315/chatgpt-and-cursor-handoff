# RiRi ↔ Mariah Handoff

Shared project status for RiRi (ChatGPT) and Mariah (Cursor).

RiRi plans the work and reviews results. Mariah implements the work in the repository named by the issue. This file is the current status. GitHub Issues are the task thread. This repository is the communication channel.

## Repository

- Name: `chatgpt-and-cursor-handoff`
- Owner: `King72315`
- Link: https://github.com/King72315/chatgpt-and-cursor-handoff
- Issues: https://github.com/King72315/chatgpt-and-cursor-handoff/issues

## Roles

- **RiRi (ChatGPT):** Write the plan. Open one GitHub Issue per task. Review Mariah's result comment on that same issue. Notify King. RiRi does not implement.
- **Mariah (Cursor):** Do the coding, testing, and implementation. Do not expand the task beyond the issue. When the task is done, comment on that same issue with the results, update this file, and push.

## Current project status

- Project folder: `Chatgpt and Cursor Handoff`
- Application code: none in this repository. It is the shared communication project only.
- Active task: [Issue #4](https://github.com/King72315/chatgpt-and-cursor-handoff/issues/4). The approved Cursor Automation is prepared for King to save. It is not enabled. Unattended pickup is not active.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies when a Cursor session starts. It does not watch GitHub while Cursor is closed.
- This run: [bc-5cd1dd8a-5614-46dd-a2bd-6932683f33ea](https://cursor.com/agents/bc-5cd1dd8a-5614-46dd-a2bd-6932683f33ea). Source is the Cursor desktop session, not a saved automation.
- Cloud environment for this run: [ff9583ad-c614-11f1-ac31-5e2d0494121f](https://cursor.com/dashboard/cloud-agents/environments/e/ff9583ad-c614-11f1-ac31-5e2d0494121f). It checks out only `King72315/chatgpt-and-cursor-handoff`.
- Branch: `cursor/riri-one-trigger-handoff-33ea`
- Last update: 2026-10-12

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria. The issue must name the application repository. If it names none, Mariah stops and reports the missing repository.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker. If GitHub returns HTTP 403 on issue comments, publish the same report in a linked pull request and say the issue comment was not posted.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.
8. King approved one Cursor Automation trigger on 2026-10-12. It is a GitHub issue comment on `King72315/chatgpt-and-cursor-handoff`, only from GitHub user `King72315`, only when the comment contains the keyword `riri-assign`. There is no schedule, no poller, no label trigger, and no second trigger. Pull request #5 proposed a label trigger plus a comment trigger. That two-trigger plan is withdrawn.
9. Only King can save and enable the automation, in the Agents Window or at https://cursor.com/automations, on the same Cursor account. This cloud session cannot open the Automations editor and cannot change Cursor account automation settings. On-demand spending stays disabled. This session did not change billing, did not upgrade the plan, and did not deploy anything.
10. The automation's cloud environment must include this handoff repository and the application repositories `King72315/betbrain-server` and `King72315/arkansas-pick3-auto-engine`. This communication repository must not be the only checkout. The issue text still decides which application repository Mariah edits.
11. Issue #3 stays untriggered until King authorizes that specific run. Do not start it from this setup.

## How RiRi assigns a task

Open a GitHub Issue with:

- **Title:** short task name
- **Goal:** what should be true when the task is done
- **Scope:** what to change, and what to leave alone, including the application repository
- **Acceptance criteria:** how RiRi will judge the result
- **Notes:** files, constraints, or context Mariah needs

Writing the issue does not start Mariah. After King has saved and enabled the automation below, start the run with one new issue comment from GitHub user `King72315` that contains `riri-assign`. Ordinary issue creation, edits, bot replies, completion reports, and comments without that keyword do not start it. Until that save, a new comment that mentions `@cursor` can still start a cloud agent. Do not use that mention as the ongoing assignment signal.

## How Mariah reports results

Comment on the same issue with:

- What was completed
- Files changed
- How it was verified
- Follow-ups or blockers

Then update **Current project status**, **Latest handoff**, and **Status log** in this file and push.

Do not write the keyword `riri-assign`. Do not mention `@cursor`. Do not add a second automation trigger. Those are pickup signals and can start another run.

## Save and enable — King still has to do this once

The automation is not active. This session prepared the settings and stopped before Save and Enable.

1. Open Cursor's Agents Window and use `/automate`, or open https://cursor.com/automations while signed in to the same account. This cloud session cannot open that editor.
2. Name: `RiRi to Mariah handoff`. Description: `Starts Mariah when King72315 comments riri-assign on a handoff issue.`
3. Trigger: one GitHub issue comment on `King72315/chatgpt-and-cursor-handoff`. Author: `King72315` only. Keyword: `riri-assign`, with no extra spaces. Do not add a schedule, a label trigger, an issue-created trigger, or any second trigger.
4. Repositories: a multi-repo environment that includes `King72315/chatgpt-and-cursor-handoff`, `King72315/betbrain-server`, and `King72315/arkansas-pick3-auto-engine`. Confirm GitHub access for those repositories at https://cursor.com/dashboard/integrations.
5. Paste the prompt below. Leave on-demand spending disabled. Save and enable.
6. After that save, run one no-code test: with the desktop app closed, post one new comment from `King72315` on a no-code issue that contains `riri-assign`. Confirm one new run at https://cursor.com/agents. Do not run a second test.

Prompt to paste:

```text
You are Mariah. RiRi plans and reviews. You implement only the GitHub issue that triggered this run.

The only pickup signal is a new issue comment on King72315/chatgpt-and-cursor-handoff from GitHub user King72315 that contains the keyword riri-assign. Do not create a schedule, a poller, another trigger, or another automation.

Read that issue, including the body and the triggering comment. This handoff repository is the communication channel. The issue must name the application repository. If it names none, stop and report that the target repository is missing. Do not guess a repository.

Do the assigned work in the named repository. Leave unrelated behavior unchanged. Do not change application code when the issue is only a workflow or audit task. Do not deploy, disclose credentials, enable on-demand spending, upgrade the plan, or permit extra charges.

When finished, comment on the same handoff issue with what changed, files touched, how you verified it, and any blocker. If GitHub returns HTTP 403 on issue comments, open a linked pull request with the same report and say the issue comment was not posted. Update RIRI_MARIAH_HANDOFF.md in the handoff repository.

Do not write the keyword riri-assign. Do not mention @cursor. Do not add a label as a pickup signal.
```

## No-code test result

The approved automation is not saved, so the keyword test was not run. Posting `riri-assign` before Save and Enable would not prove the automation, and this session was told not to start an extra agent.

What was checked without starting another agent:

- This run is https://cursor.com/agents/bc-5cd1dd8a-5614-46dd-a2bd-6932683f33ea. Its source is the desktop session. No automation is attached.
- `/automate` cannot open the Automations editor from this cloud session. Save and Enable has to happen in the Agents Window.
- The cloud environment checked out only `King72315/chatgpt-and-cursor-handoff`. The application repositories are not connected to this run.
- No schedule, poller, label trigger, or second trigger was created.
- Billing settings were not changed. On-demand spending was left disabled.
- Application code was not changed. The only file edited is this handoff file.
- Issue #3 was not started.

## Latest handoff

- **Date:** 2026-10-12
- **From:** Mariah
- **To:** RiRi
- **Summary:** King approved one issue-comment trigger: GitHub user `King72315` comments `riri-assign` on this handoff repository. The label trigger and the second trigger from pull request #5 are withdrawn. This cloud session cannot save the automation. King still has to Save and Enable it from the Agents Window. The no-code keyword test was not run, because the automation is not saved. No application code was changed, and on-demand spending was not enabled. Issue #3 was not started.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/4

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #4: recorded the approved one-trigger automation for King to save. Pull request #5's two-trigger plan is withdrawn. The Automations editor is not available in this cloud session, so the automation was not saved and the keyword test was not run. No application code was changed. |
