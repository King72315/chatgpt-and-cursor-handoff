# RiRi Ã¢â€ â€ Mariah Handoff

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
- Active task: Issue #85 ChurchEdge 1.1.3 test APK is published with the Members relationship fix. Phone verification of Members is still pending. Issue #89 remains read-only.
- Standing instruction: Cursor user rule "RiRi–Mariah GitHub workflow" (id 18434501). It applies in every project on this Cursor account.
- Branch: `master`
- Last update: 2026-10-18 (ChurchEdge 1.1.3 Members APK; phone test pending)

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
- **To:** RiRi / King
- **Summary:** Issue #85 — ChurchEdge 1.1.3 is published. Members uses the member foreign key, and church admins can read those profiles. Phone verification is still pending.
- **Issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/85
- **PR:** https://github.com/King72315/chatgpt-and-cursor-handoff/pull/86
- **Earlier issue:** https://github.com/King72315/chatgpt-and-cursor-handoff/issues/89
- **ChurchEdge APK:** https://nojdqklncbntgnbeojea.supabase.co/storage/v1/object/public/ce7f3c1a9e4b284d6a/ChurchEdge-1.1.3-7f3c1a9e4b284d6a.apk
- **Previous APK:** https://nojdqklncbntgnbeojea.supabase.co/storage/v1/object/public/ce7f3c1a9e4b284d6a/ChurchEdge-1.1.2-7f3c1a9e4b284d6a.apk
- **Cloud agent:** none. Local Cursor at ChurchEdge.
- **Owner decision required:** Install 1.1.3 and confirm Members opens, shows names, and can approve or reject. Do not treat Members as fixed until that phone test passes.

## Status log

| Date | Update |
| --- | --- |
| 2026-10-18 | Issue #85 ChurchEdge 1.1.3 APK published. 38,488,050 bytes. Same debug certificate. Members phone test still pending. |
| 2026-10-18 | Issue #85 Members embed uses church_memberships_user_id_fkey. Profile admin read no longer depends on JWT church id. Tests passed. No new APK. |
| 2026-10-18 | Issue #89 read-only formula audit posted. No code, database, or deployment change. Counts can precede a line. Family D pOver and Value cannot. |
| 2026-10-18 | Issue #85 authentication repair. 1.1.2 APK published. Automated signup, login, recovery, and church isolation passed. Phone test still pending. Auth is not accepted as fixed. |
| 2026-10-18 | Issue #85 Confirm email turned off. Signup, login, duplicate rejection, approval isolation, and password reset passed. No new APK. |
| 2026-10-18 | Issue #85 ChurchEdge 1.1.1 APK published. 38,483,478 bytes. Same debug certificate as 1.1.0. Phone test still pending. |
| 2026-10-18 | Issue #85 mobile auth redirect is `churchedge://auth/callback`. Signup confirm and reset links verified. Repeat use returns otp_expired. Replacement APK not distributed. |
| 2026-10-18 | Issue #85 Brevo SMTP connected on the free plan. Confirm email left on. Yahoo confirmation delivered and login succeeded. Site URL remains localhost. |
| 2026-10-18 | Issue #85 signup mail: default Supabase provider, 2 emails/hour, custom SMTP off. Confirm email left on. Waiting on a free SMTP account. |
| 2026-10-18 | Issue #85 direct APK link on the free project. EAS build canceled (pay-as-you-go). Download verified, 38,453,950 bytes, no login. |
| 2026-10-18 | Issue #85 private APK release `apk-1.1.0` on King72315/churchedge. Same 1.1.0 standalone file. Not public. |
| 2026-10-18 | Issue #85 auth check: existing APK already pointed at Free project. Signup, church, approval, and cross-church deny passed. Confirm email restored. No new APK. |
| 2026-10-18 | Issue #85 schema applied on Free `nojdqklncbntgnbeojea`. 22 tables REST 200. RLS on. No deletes. No public APK. |
| 2026-10-18 | Issue #85 finish: restored Free project live; schema empty; APPLY_ALL SQL ready; King paste+Run required. |
## Status log

| Date | Update |
| --- | --- |
| 2026-10-18 | Issue #85: ChurchEdge standalone APK 1.1.0 built; native feature screens added; Supabase NXDOMAIN blocks live auth. |
| 2026-10-18 | Issue #85: Supabase original NXDOMAIN; migration review posted; free project blocked on access token/credentials. |
| 2026-10-17 | Issue #81 deployed. API `6d4cd4ef`. Phone version code 49. Freeze `7db7949a` kept. Best 2 History is 0-0-0. October 17 published no seats. |
| 2026-10-17 | Issue #81 authorization is Best 2 x 5. Background finalization of all five lanes passed, including late data and a restart. October 17 totals were qualified from the prematch freeze only. History boundary is 0-0-0. Not deployed. No new APK. |
| 2026-10-17 | Issue #81 Best 2 blockers. Archive conflicts reconciled. Total Games uses every seated market. Home is Best 2 only. Postgres lifecycle test passed. Lab screen added. Not deployed. No new APK. |
| 2026-10-17 | Issue #81 Best 2 x 5 checkpoint. Selector, five-lane screens, and separate history are in `var/d0de-app`. Archive restore passed, 8444 rows. Not deployed. History not cleared. No new APK. |
| 2026-10-17 | Issue #81 phone-lane checkpoint. Surface, actuals, published rank, and Total Games history are repaired locally. Tests passed. Not deployed. Accuracy INCONCLUSIVE. No new APK. |
| 2026-10-17 | Issue #81 checkpoint B3. Isolated filesystem adapter stored the October 17 counts and a second process read them. Production not opened. Accuracy untouched sample is 0. Private repo still 404 to RiRi. |
| 2026-10-17 | Issue #81 checkpoint B2. API-Tennis match counts traced for the three October 17 winners. Local persistence tests passed. Not deployed. Accuracy INCONCLUSIVE. Private branch `issue-81-verified-counts` at `377b42f`. |
| 2026-10-17 | Issue #81 checkpoint B. Local grading repairs tested in `var/d0de-app`. Not deployed. Freeze `7db7949a` unchanged. Accuracy work not started. |
| 2026-10-17 | Review on pull request #76 requested `correction-ok` and removal of the workflow edit. Continuation run `run-8ba0b771-d274-4a5f-9184-bd0749a0621a` completed that correction. Follow-ups used: 1 of 2. Reserved estimate: 100 cents. Acceptance is not posted yet. |
| 2026-10-17 | Issue #75 completion pull request #76 is labeled handoff-review. Continuation secret CURSOR_API_KEY is set. Cloud agent bc-d5e5953a-3c5c-4c0c-8364-42c2c2e67c93 finished its first run. |
| 2026-10-17 | Completion pull requests labeled handoff-review are the ChatGPT trigger. The gateway no longer treats its packet as the review. A correction calls the continuation API, at most twice, and stops at an estimated 200 cents. Tests: 25 passed. |
| 2026-10-17 | Handoff gateway is live. Issue #73 has the simulated assignment, review packet, and follow-ups 1 and 2. Recovery run `39031563215` made no second change. No new cloud agent. No application deploy. |
| 2026-10-17 | Issue #70 deployed underdog gate as `2c0c9b2c`. October 17 active Value board is Ostapenko #1. Medvedev's frozen row kept. Winners board unchanged. No new APK. |
| 2026-10-17 | Issue #70. Eighteen published Value Winners were sportsbook favorites. Local underdog gate tested. October 17 not reminted. Not deployed. |
| 2026-10-17 | Issue #67 deployed ranking repair as `27f01c66`. October 17 unstarted winners renumbered to #1Ã¢â‚¬â€œ#3. Freeze `7db7949a` kept. History cutoff unchanged. No new APK. |
| 2026-10-17 | History stays cleared through 2026-10-16. Local Top 6 repair ranks only admitted matches. October 17 freeze `7db7949a` was not regenerated. Not deployed. No new APK. |
| 2026-10-17 | Issue #64 History archived, then hidden through 2026-10-16. Public History is 0-0-0. Lab remains. Freezes unchanged. No new APK. |
| 2026-10-16 | Issue #64 local audit. Completed scores settle ahead of VOID. History Reset no longer fails silently. Not deployed. No new APK. |
| 2026-10-16 | October 16 reminted on API `281d5f80`. Freeze `eaf4c25f`. October 15 freeze `6b37e771` unchanged. No new APK. |
| 2026-10-16 | Issue #57 deployed. API `281d5f80`. October 15 freeze `6b37e771` still public. Save point ISSUE57_PRE_DEPLOY_2026-10-15_CT. No new APK. |
| 2026-10-15 | Issue #57 surface audit. `get_draw` `tournament_surface` is Hard for all 10 frozen October 15 matches. Not saved on the freeze. No deploy. |
| 2026-10-15 | Issue #57 release blocked. Save point ISSUE57_PRE_RELEASE_2026-10-15_CT verified. Production not deployed. |
| 2026-10-15 | Issue #57 Report H. September 25 inversion is the reliability key. October 11 seats are different matches and are not in probability order. Model unchanged. |
| 2026-10-15 | Issue #57 Report G. Six-seat rank-agreement swaps listed. Later equal-six result is October 11, net +1. Unseen slate count is zero. Top 6 still 117Ã¢â‚¬â€œ36. No deploy. |
| 2026-10-15 | Issue #57 Report F. Data-health alerts wired locally into mint, results, Home, and Results. Top 6 still 117Ã¢â‚¬â€œ36. Elo blocked. No accuracy gain. No deploy. |
| 2026-10-15 | Issue #57 Report E. Profile court is unverified. Stat match did not improve. Local missing-data alert tested. No accuracy gain. |
| 2026-10-15 | Issue #57 Report B. Held-out challengers failed or were inconclusive. Local VOID latch fix is not deployed. No frozen rewrite. |
| 2026-10-15 | Issue #57 Report A. Checkpoint `PRE_ISSUE57_RESEARCH_V1` restore-checked. Six-category baseline measured. Sets format challenger failed. No deploy. |
| 2026-10-15 | King: October 15 Top 6 gate, sets-baseline Lab count, and Value Winner prices. API `996a7cdc`. Freeze `6b37e771` kept. No new APK. |
| 2026-10-15 | Issue #56: ChurchEdge Expo debug APK built (62.43 MB). JDK 17 + Gradle home fixed. USB install only. Supabase E2E still blocked. |
| 2026-10-12 | Created this handoff file and published https://github.com/King72315/chatgpt-and-cursor-handoff. Opened issue #1 to record that the channel is ready. |
| 2026-10-12 | Saved the workflow as Cursor user rule "RiRiÃ¢â‚¬â€œMariah GitHub workflow" (id 18434501). Completion report: issue #2. It applies across projects when a session starts. No application code was changed. |
| 2026-10-12 | Issue #18: same-day court delays stay in a verified Top 6. Application PR https://github.com/King72315/tennisedge/pull/2 commit `1d7be7e`. Not deployed. |
| 2026-10-12 | Issue #18: October 12 provider check. The 18 missing winner ranks were not recovered. Stored top ranks are not a verified eligible six. Not deployed. |
| 2026-10-12 | Issue #18: discovery-to-freeze ranks only after eligibility. PR #2 commit `965acbd`. October 12 was not regenerated. Not deployed. |
| 2026-10-13 | Issue #26 released. API deployment `a0d6cbfe`. APK version code 46. Freeze `3e68f5fe` unchanged. Database backup restored locally and the public proxy was closed. |
| 2026-10-14 | King directed rollback to `d0de8bb1`, then current aces, breaks, and total games. Hybrid deployment `0f737ca5`. 2026-10-14 rebuilt: UNAVAILABLE, one Winner seat (Fernandez) with downstream markets, Value Winners empty. API-Tennis fixtures failed. No APK. |
| 2026-10-14 | Restored warehouse ranks and current rank-date eligibility. Rebuilt 2026-10-14 Winners on the Oct 5 engines. Deployment `a05c2e25`. Top 6 is four new seats with downstream counts. October 13 Fernandez is not a Top 6 seat. Value Winners for 2026-10-14 are empty. No APK. |
| 2026-10-14 | Saved-slate signal audit. Trial ranking and form scales did not improve the locked Oct 9Ã¢â‚¬â€œ12 window (29-18). Weights rolled back. No deploy. |
| 2026-10-14 | Home through History grading. Saved set scores replace actual 0. Deployment `3ddd2eaa`. Picks and Family D unchanged. No APK. |
| 2026-10-14 | Archive stays visible when History is hidden, and a later verified score updates the saved archive. Count markets are a separate record. Deployment `3d3aa4f4`. Picks unchanged. No APK. |
| 2026-10-14 | PRE_THE_LAB_V1 saved and restore-verified before The Lab. Implementation has not started. No APK. |
| 2026-10-14 | The Lab is live. API `b40a4c87`. Copies are separate from picks and the archive. APK versionCode 47. October 14 probabilities unchanged. |
| 2026-10-14 | Issue #50: The Lab captures the frozen Winner and Value Winner signals. API `9ce24887`. No new APK. Picks, grades, and the archive are unchanged. |
