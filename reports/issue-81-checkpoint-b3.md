# Issue #81 checkpoint B3 — IN PROGRESS

Local continuation. No cloud agent. Freeze `7db7949a` was not rewritten. Production was not opened and nothing was deployed.

RiRi's GitHub connection still receives HTTP 404 for private `King72315/tennisedge`. The source stays on private branch `issue-81-verified-counts`. Granting that connection read access is an owner step. Application source is not copied into this public repository.

## Storage proof

`scripts/issue81-isolated-store-v1.mjs` removed `DATABASE_URL`, used a temporary `TENNISEDGE_HOSTED_DATA_DIR`, and called `attachDownstreamMarketsV1`, the same function `httpServer.mjs` uses for History, Results, and the winner card. The shadow runner only fills `shadow:final-stats` through `loadSharedFinalFixturesV1`. It does not stamp these counts. The next serve compares a newer fixture fetch once.

The filesystem branch of `getKvV1` / `setKvV1` now writes `kv/*.json`. Before this change that branch returned the value and stored nothing. The Postgres branch is unchanged. This machine has no local Postgres, so this is not a production-database proof.

A second process read the same directory after the writer finished.

| Check | Result |
| --- | --- |
| Backend | `fs` |
| Prediction hash before and after | `8a479ed7685a88766a7fe8c8f6633fc6614fab3d67abbe73d5e8bc31ca7ed4a4` |
| Ostapenko aces / break points won | 9 / 4, verified, observed `2026-10-17T21:06:43.534Z` |
| Swiatek | 0 / 2, verified zero |
| Medvedev | 3 / 2 |
| Total games grades | 26 WIN, 19 LOSS, 19 LOSS |
| Total sets | actual 2, grade not saved, error -0.4 |
| Duplicate delivery | same ace value and original observation time |
| Conflicting later 9 against a stored verified 1 | stored 1 kept |
| Late fill | `ACTUAL_NOT_SAVED`, then aces 4 |
| Retirement | grade VOID, actual null |
| Empty slip | `UNAVAILABLE` |
| Restarted card, archive, and Lab | same 9 / 0 / 3, archive shows the verified zero and the provider source |

## Provider fields

Fetched `2026-10-17T21:06:47.877Z`. Status `Finished`. Aces use match `stat_value`. Break points won use match `Break Points Converted` `stat_won`. `stat_value` percentages, `stat_total` opportunities, and `Break Points Saved` are not the count. Set rows agree with the match row and are not added to it.

| Player | Key | Event | Aces match | Set aces | Converted `stat_won` | Converted `stat_total` | Saved `stat_won` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| J. Ostapenko | 2802 | 12171642 | 9 | 7 + 2 | 4 | 8 | 0 |
| I. Swiatek | 1910 | 12171704 | 0 | 0 + 0 | 2 | 8 | 4 |
| D. Medvedev | 1093 | 12171698 | 3 | 1 + 2 | 2 | 6 | 3 |

Aces agree with the earlier public box scores: Ostapenko 9, Swiatek 0, Medvedev 3. Break points won are provider-only in this checkpoint. Opponent aces were Kartal 1, Chwalinska 2, and Jodar 6, and those were not stored on the selected player. A retirement void does not create a zero count.

## Accuracy population

`forensics/issue57-report-h-v1/report-h.json` has 12 candidates on 2026-09-25 and 15 on 2026-10-11. Those rows were already examined in Issue #57. The protocol cutoff `2026-10-11` was written after the October 17 outcomes were known, so those three matches are not an untouched test. Eligible untouched matches: 0. The minimum remains 100. Result: INCONCLUSIVE. The next measurable checkpoint is the next slate's frozen predictions, captured before the results and scored afterward, accumulated until that minimum. The threshold was not lowered.

## Lane checklist

| Lane | Status |
| --- | --- |
| Winners | Isolated serve kept ranks 1–3 and the prediction hash. Live card not rewritten. |
| Value Winners | Favorite rows stay auditable. Not rewritten in production. |
| Aces | Isolated adapter stored 9 / 0 / 3 and a second process read them. Live card still null. |
| Break Points Won | Isolated adapter stored 4 / 2 / 2 from converted `stat_won`. Live card still null. |
| Total Games | Isolated grades WIN / LOSS / LOSS from the seeded frozen lines. Live card not rewritten. |
| Total Sets | Actual 2 and error -0.4, no win/loss without a line. |
| Ranking | Started seats kept their ranks in the local stamp test. October 17 was not restamped. |
| Top 6 accuracy | INCONCLUSIVE. Untouched sample 0. |

## Release package

Not a release. The private snapshot is `issue-81-verified-counts` at `6e7f7bf`. Rollback is to leave production on its current deployment and leave freeze `7db7949a` unchanged. If this code later serves the frozen October 17 card, the expected counts are the table above, the winner losses and ranks stay, and History remains cleared through 2026-10-16. That expectation is not a live-screen result.
