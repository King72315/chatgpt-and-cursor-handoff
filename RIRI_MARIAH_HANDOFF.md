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
- Active task: [Issue #4](https://github.com/King72315/chatgpt-and-cursor-handoff/issues/4), automatic pickup. The Cursor Automation is not active. King still has to save it at [cursor.com/automations](https://cursor.com/automations).
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies when a Cursor session starts. It does not watch GitHub while Cursor is closed.
- What already runs with Cursor closed: a new comment that mentions `@cursor` on an issue in this repository starts a cloud agent. Proof is this run, [bc-3bfb310f-75ce-4adf-a54c-32c0fa273bab](https://cursor.com/agents/bc-3bfb310f-75ce-4adf-a54c-32c0fa273bab), started from issue #4. That path still needs the `@cursor` mention. Opening an issue does not start work.
- Branch: `cursor/riri-mariah-automation-status-3bab`
- Last update: 2026-10-12

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.
8. Unattended pickup has to be a Cursor Automation saved by the account owner. This cloud agent can read an automation by id, and it cannot create one. No Cursor API token is available here. The `/automate` skill is a local Cursor session tool, not part of this cloud run.
9. GitHub has no issue-created automation trigger. A new issue does nothing until a human GitHub user either adds the label `mariah` or posts a new comment containing `riri-assign`. Editing an existing comment does not fire. Comments from bots and GitHub Apps are ignored, including completion comments posted as `cursor`.
10. The automation must watch this handoff repository, and its cloud environment must include the real project repositories named by the issue. This repository stays the communication channel. Public repositories on this GitHub account besides this one are `King72315/betbrain-server` and `King72315/arkansas-pick3-auto-engine`. The issue text decides which one Mariah edits.
11. Automations bill cloud-agent usage to the personal Cursor account. There is no separate billing switch to flip before saving. Personal accounts do not have a service-account option.

## How RiRi assigns a task

Open a GitHub Issue with:

- **Title:** short task name
- **Goal:** what should be true when the task is done
- **Scope:** what to change, and what to leave alone, including the implementation repository
- **Acceptance criteria:** how RiRi will judge the result
- **Notes:** files, constraints, or context Mariah needs

Writing the issue is not enough to start Mariah. After the issue exists, add the label `mariah`, or post a new comment that contains `riri-assign`. Until King saves the automation, the working signal is a new comment that mentions `@cursor`. Do not rely on an edited comment.

## How Mariah reports results

Comment on the same issue with:

- What was completed
- Files changed
- How it was verified
- Follow-ups or blockers

Then update **Current project status**, **Latest handoff**, and **Status log** in this file and push.

## One-time save King still has to make

The automation is not active. Save it while signed in to the same Cursor account that already started the cloud agent from issue #4.

1. Open [Integrations](https://cursor.com/dashboard/integrations) and confirm GitHub includes this repository plus every repository Mariah should edit. This handoff repository is already connected. This session could not read the GitHub App's selected-repository list.
2. Open [Cloud Agents](https://cursor.com/dashboard/cloud-agents) and create a multi-repo environment that includes this handoff repository and the implementation repositories. Do not leave the environment as this communication repository alone.
3. Open [Automations](https://cursor.com/automations) → New automation. Name it `RiRi to Mariah handoff`. Select that multi-repo environment.
4. Add trigger **Issue label changed**. Repository `King72315/chatgpt-and-cursor-handoff`. Issues only. Fire when the label `mariah` is added. Create that label on the repository first. This session got HTTP 403 when it tried to create the label.
5. Add trigger **Issue comment**. Same repository. Limit the author to `King72315`. Keyword `riri-assign` (not a regex). Leave "any comment" off, or Mariah's own replies can start another run.
6. Paste the prompt below. Save and turn the automation on.
7. Safe test, with the Cursor desktop app closed: open a no-code test issue, then add the label `mariah` or post a new comment that contains `riri-assign`. A new agent should appear at [cursor.com/agents](https://cursor.com/agents) and comment on that issue. Close the test issue afterward.

Prompt to paste:

```text
You are Mariah. RiRi plans and reviews. You implement only the task in the GitHub issue that triggered this run.

Read that issue, including the body and the triggering comment. The repository you were triggered from is communication only: King72315/chatgpt-and-cursor-handoff. Do not treat it as the application. Choose the implementation repository named in the issue. If the issue names none, stop and comment that the target repository is missing.

Do the assigned work in the implementation repository. Leave unrelated behavior unchanged. Do not change application code when the issue is only a workflow or audit task.

When finished, comment on the same handoff issue with what changed, files touched, how you verified it, and any blocker. Update RIRI_MARIAH_HANDOFF.md in the handoff repository. Do not add the label mariah. Do not write the words riri-assign. Do not mention @cursor. Those are the pickup signals and would start another run.

If a required GitHub, Cursor, billing, or approval step is missing, comment the exact step and stop. Do not claim the work is done.
```

## Latest handoff

- **Date:** 2026-10-12
- **From:** Mariah
- **To:** RiRi
- **Summary:** Automatic pickup is not active yet. Commenting `@cursor` on an issue already starts a cloud agent while Cursor is closed; this issue #4 run proves that. Opening an issue does not. A Cursor Automation on the label `mariah` or a comment containing `riri-assign` is the supported unattended path, and only King can save it at cursor.com/automations. The full report is in pull request #5 because this session's GitHub token cannot create issue comments (HTTP 403). No application code was changed.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/4

## Status log

| Date | Update |
| --- | --- |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Investigated Cursor Automations for issue #4. `@cursor` issue comments already start a cloud agent. The unattended automation is not saved, because this session cannot create it. King must save it. Posting the report onto issue #4 returned HTTP 403, so the report is in pull request #5. No application code was changed. |
