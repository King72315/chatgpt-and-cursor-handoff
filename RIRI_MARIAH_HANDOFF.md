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
- Active task: Issue #85 ChurchEdge Supabase recovery is blocked in this cloud workspace. The original host `nojdqklncbntgnbeojea.supabase.co` is still NXDOMAIN. `King72315/churchedge` is not mounted in environment `handoff-and-tennisedge`. No new Supabase project was created. No migrations were read or applied. No original data was deleted, reset, or overwritten. Acknowledgment is pull request #87. TennisEdge was not changed. Issue #70 remains the last recorded TennisEdge deployment `2c0c9b2c`. October 17 boards were not rechecked on this run.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-18

## Important decisions

1. GitHub Issues are the communication channel. One issue per task. Results go on that same issue so RiRi can review them in place.
2. This file holds current status, important decisions, and the latest handoff. Mariah updates it after each completed task and pushes the change.
3. RiRi's issue should include the goal, scope, what must stay unchanged, and acceptance criteria.
4. Mariah's completion comment should include what changed, files touched, how it was checked, and any blocker.
5. Setup work does not change application functionality or unrelated project files.
6. The repository is public so RiRi can open the handoff file and the issues from the links in this file.
7. The workflow is a Cursor user rule, so it applies when any development project is opened. It is not a background watcher. Mariah checks GitHub when a Cursor session starts.
8. The saved Cursor automation `RiRi to Mariah Handoff` remains the only paid pickup. It runs only when King72315 posts a new issue comment containing the assignment keyword. Mariah publishes the result as a pull request titled `Issue #<n>: completion report` with the label `handoff-review` and the line `Review trigger: handoff-review`. That pull request is what a ChatGPT task can watch. The gateway does not write the review. When the review asks for one in-scope correction, the gateway calls `POST /v1/agents/{id}/runs` on the agent named in the pull request. That call is a new billed run on the same agent. It allows at most two, and it stops when the estimated cost reaches 200 cents. The estimate uses the saved automation's Grok 4.7 Fast rates: $4 per million input tokens, $1 per million cache tokens, and $12 per million output tokens. Each run reserves 100 cents until usage is recorded. The gateway does not post the assignment keyword.

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

## Communication gateway

States: `AUTHORIZED`, `ASSIGNED`, `ACKNOWLEDGED`, `WORKING`, `REPORT_RECEIVED`, `REVIEWED`, `COMPLETED`, `BLOCKED`, `AWAITING_OWNER_APPROVAL`, `FAILED`.

The record is `gateway/ledger.json` plus the gateway comments on the issue. Each GitHub delivery is applied once.

Mariah's report uses these headings: Work completed, Tests and evidence, Blockers, Changes made, Deployment status, Owner decision required. It also names the assigned issue, the application repository, and the cloud agent URL `https://cursor.com/agents/bc-...`. An issue comment with those headings does not start a review. The report has to be the completion pull request described above.

The ChatGPT review task is configured to watch pull requests labeled `handoff-review` in this repository, including later commits. The saved prompt is:

> When a pull request labeled handoff-review is opened or updated in King72315/chatgpt-and-cursor-handoff, review it against the approved GitHub issue linked from its title, the pull request diff, the tests and evidence in the report, and the earlier review comments. Post one comment on that pull request. Start the comment with `## RiRi review`. If one in-scope correction is still required, and fewer than two corrections have been sent, add `## Follow-up` and the correction. If the work meets the approved scope, end with a line that says `Review complete` and do not add a follow-up. Do not use the assignment keyword. Do not deploy, and do not widen the scope.

A review comment that includes `## Follow-up` authorizes one continuation run. A third correction, a correction past the 200 cent estimate, or a deployment, destructive action, or expanded scope that the original issue did not allow, stops at `AWAITING_OWNER_APPROVAL`. Acceptance is a review comment that says `Review complete`.

The continuation call uses the GitHub Actions secret `CURSOR_API_KEY`. The secret is set and its value is not in the repository. If the secret is missing, the gateway records the correction and does not send it, and it does not count a follow-up.

## Latest handoff

- **Date:** 2026-10-18
- **From:** Mariah
- **To:** RiRi
- **Summary:** Issue #85 recovery check stopped. The original Supabase hostname does not resolve. This environment cannot open `King72315/churchedge` or `C:\Users\nicho\Projects\ChurchEdge`, has no Supabase login, and did not create a project or apply SQL. The four migration files were not reviewed because they are not here.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/85
- **Pull request:** acknowledgment https://github.com/King72315/chatgpt-and-cursor-handoff/pull/87 ; completion report https://github.com/King72315/chatgpt-and-cursor-handoff/pull/88
- **Cloud agent:** https://cursor.com/agents/bc-9c57be3d-725b-46be-80f3-12f75e775e6d
- **Automation:** https://cursor.com/automations/45f1f15b-c61b-11f1-ac31-5e2d0494121f remains the only keyword pickup.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-18 | Issue #85 Supabase recovery blocked. Host `nojdqklncbntgnbeojea.supabase.co` NXDOMAIN. ChurchEdge repo and local workspace unavailable. No new project. No migrations applied. No data deleted. Acknowledgment pull request #87. |
| 2026-10-17 | Review on pull request #76 requested `correction-ok` and removal of the workflow edit. Continuation run `run-8ba0b771-d274-4a5f-9184-bd0749a0621a` completed that correction. Follow-ups used: 1 of 2. Reserved estimate: 100 cents. Acceptance is not posted yet. |
| 2026-10-17 | Issue #75 completion pull request #76 is labeled handoff-review. Continuation secret CURSOR_API_KEY is set. Cloud agent bc-d5e5953a-3c5c-4c0c-8364-42c2c2e67c93 finished its first run. |
| 2026-10-17 | Completion pull requests labeled handoff-review are the ChatGPT trigger. The gateway no longer treats its packet as the review. A correction calls the continuation API, at most twice, and stops at an estimated 200 cents. Tests: 25 passed. |
| 2026-10-17 | Handoff gateway is live. Issue #73 has the simulated assignment, review packet, and follow-ups 1 and 2. Recovery run `39031563215` made no second change. No new cloud agent. No application deploy. |
| 2026-10-17 | Issue #70 deployed underdog gate as `2c0c9b2c`. October 17 active Value board is Ostapenko #1. Medvedev's frozen row kept. Winners board unchanged. No new APK. |
| 2026-10-17 | Issue #70. Eighteen published Value Winners were sportsbook favorites. Local underdog gate tested. October 17 not reminted. Not deployed. |
| 2026-10-17 | Issue #67 deployed ranking repair as `27f01c66`. October 17 unstarted winners renumbered to #1–#3. Freeze `7db7949a` kept. History cutoff unchanged. No new APK. |
| 2026-10-17 | History stays cleared through 2026-10-16. Local Top 6 repair ranks only admitted matches. October 17 freeze `7db7949a` was not regenerated. Not deployed. No new APK. |
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
