# Issue #81 — Checkpoint A

Status: IN PROGRESS. This is the authentic-access and baseline checkpoint. It is not the grading repair, the ranking repair, or the Top 6 accuracy test.

Assigned issue: #81
Application repository: https://github.com/King72315/tennisedge
Cloud agent: https://cursor.com/agents/bc-70eb1272-707f-49bf-aa19-03b30dfc06fc

## Access preflight

`var/d0de-app` is not on this machine. A full-filesystem directory search for `d0de-app` returned no path. These paths are missing:

- `/var/d0de-app`
- `/agent/var/d0de-app`
- `/agent/repos/tennisedge/var/d0de-app`
- `/home/ubuntu/d0de-app`
- `/opt/d0de-app`
- `/tmp/d0de-app`

The cloud environment is `handoff-and-tennisedge` (`e7fa4ade-c629-11f1-ac31-5e2d0494121f`). It mounts only `King72315/chatgpt-and-cursor-handoff` and `King72315/tennisedge`. GitHub can read `King72315/tennisedge`. That checkout is `d2a644bedea72709429c9db2fc2779191639a2cb` on `shadow-props-v1`. `d0de8bb1` is not a commit in that repository. The health rollback commit `d6fab1abd7f7cd97d52029d0ef3cfd87e03222c9` is an ancestor of `d2a644b`, fifteen commits behind. `scripts/winner-admission-before-rank-v1.mjs` is absent. `RAILWAY_TOKEN`, `DATABASE_URL`, and `EXPO_TOKEN` are unset. The Railway and EAS command-line tools are not installed.

`d2a644b` was not used as a substitute for the local hybrid. TennisEdge was not edited.

## Safe reads

Only these production calls were made:

- `GET /api/tennisedge/mobile/v1/health` at `2026-10-17T14:11:49Z`
- `GET /api/tennisedge/mobile/v1/winners-archive`

`/today`, `/results`, `/history`, and `/value-winners` were not called.

Health: slate `2026-10-17`, phase `OFFICIAL`, freeze `7db7949a`, store `postgres`, self-check `PASS`. Shadow last run `2026-10-17T14:04:29.472Z`, matches seen 9, skipped already started 1, total-games freezes 3, ace freezes 0. Health does not include a deployment id.

Archive sha256 `2639a3770cf8d72de14cea0a2ac3a866c9fbb8da18d881887836320088c3b24b`, 7,071,516 bytes. 40 packets through 2026-10-17, 39 phone packages, 15 value packages. The string `7db7949a` does not appear in the archive body. `OVER CLINCHED` and `NOT_STARTED` do not appear either.

October 17 winner packet: `writtenAt` `2026-10-17T11:21:46.462Z`, `resultsUpdatedAt` `2026-10-17T14:00:45.790Z`, immutable, summary `0-3-0`. October 17 value package: `writtenAt` `2026-10-17T14:12:05.567Z`, summary 0 wins and 2 losses.

## October 17 baseline from the archive

Original seats are unchanged: #1 Jelena Ostapenko, #2 Iga Swiatek, #3 Daniil Medvedev. Frozen at 12:00:33 AM CT. Screen rows use badge `LOSS` and placement `HISTORY`.

| Match id | Pick | Score text | JSON lifecycle | JSON grade | Text status | Text grade | Games | Games grade |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2026-10-17\|jelena\|ostapenko\|kartal\|sonay` | Ostapenko | `7-6(11) 7-6(7)` | `FINAL_LOSS` | LOSS | `FINAL_WIN` | LOSS | 26 | WIN |
| `2026-10-17\|chwalinska\|maja\|iga\|swiatek` | Swiatek | `5-7 1-6` | `FINAL_LOSS` | LOSS | `FINAL_WIN` | LOSS | 19 | LOSS |
| `2026-10-17\|daniil\|medvedev\|jodar\|rafael` | Medvedev | `6-3 6-4` | `FINAL_LOSS` | LOSS | `FINAL_LOSS` | LOSS | 19 | LOSS |

Game counts from the score text are 26, 19, and 19. Those match the stored total-games actuals. Over 21.5 wins at 26. Over 19.5 loses at 19. Over 22.5 loses at 19. The stored JSON grades follow those counts. The readable text files say the total-games grade is not saved.

The screen package says aces and break points have no market (`Line unavailable`), null actuals, and null grades. The readable text prints `Aces line: 0` and `Break Points Won line: 0`. Total sets actual is 2 on every row, the screen package says the line is unavailable, and the text prints `Total Sets line: 0`.

The `vs` list mixes one certified Total Games prop for Medvedev (line 22.5, no grade on that object) with three shadow grades: Ostapenko WIN 26, Swiatek LOSS 19, Medvedev LOSS 19. Shadow health recorded 3 total-games freezes and 0 ace freezes. That split is the stored explanation for a board that can show one official total-games result and three row-level grades.

Value rows still stored:

| Value rank | Pick | Price | Opponent price | Stored winnerRank | Winner board rank | Grade |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Ostapenko | 2.06 | 1.78 | 2 | 1 | LOSS |
| 2 | Medvedev | 1.51 | 2.59 | 4 | 3 | LOSS |

Ostapenko's saved price is longer. Medvedev's saved price is shorter, so the stored value summary still includes a favorite. Both rows are `draftkings` and `prestart`. The Ostapenko screen set line is `7/6(11) - 7/6(7)`.

## PR #80 regressions against this archive

| PR #80 finding | Archive result |
| --- | --- |
| Aces and break-point actuals missing on all three rows | Still missing. Actuals and grades are null. |
| Swiatek OVER CLINCHED at 17 games against Over 19.5 | Not in the archive. Final actual is 19 and the JSON grade is LOSS. |
| Row total-games grades 1-2 while History is 0-1 | JSON row grades are 1-2. History was not re-read. The archive has one ungraded certified prop plus three shadow grades. |
| Final matches leave slips NOT_STARTED | `NOT_STARTED` is absent from the archive. Slips were not re-read from the live screens. |
| Results and History show different dates | Not re-read. Archive packages include 2026-10-15, 2026-10-16, and 2026-10-17. |
| Value note says no price was saved | Not re-read from the live note. The value package contains both DraftKings prices. |
| Value winnerRank does not match Winner rank | Still true: 2 vs 1, and 4 vs 3. |
| Tiebreak text uses the winner's points | Still true on the Ostapenko score text and set line. |

## Lane checklist

| Lane | Checkpoint A |
| --- | --- |
| Winners | Not verified as repaired. JSON grades are three losses. Text status still says `FINAL_WIN` for Ostapenko and Swiatek. |
| Value Winners | Not verified. The favorite row remains inside the stored 0-2 summary. Ranks still disagree. |
| Aces | Not verified. No actual, no grade, and the shadow runner froze 0 ace markets. |
| Break Points Won | Not verified. No actual and no grade. |
| Total Games | Not verified. Final JSON grades match the score arithmetic. Text grades, the certified-versus-shadow split, and the earlier live History total were not reconciled. |
| Total Sets | Not verified as a market grade. Actual 2 is saved. No line is saved on the screen package. |
| Ranking | Not verified. The three original seats remain. No eligibility or rank repair was run. |
| Top 6 accuracy | Not started. No held-out or forward comparison was run. |

No known misgrade is marked fixed.
